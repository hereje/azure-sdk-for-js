// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosClientOptions } from "../CosmosClientOptions";
import {
  Serializer,
  NumberSerializer,
  FloatSerializer,
  StringSerializer,
  BooleanSerializer,
} from "../encryption/Serializers";
import { TypeMarker } from "../encryption/enums/TypeMarker";
import { OperationType, ResourceType } from "./constants";

const trimLeftSlashes = new RegExp("^[/]+");
const trimRightSlashes = new RegExp("[/]+$");
const illegalResourceIdCharacters = new RegExp("[/\\\\?#]");
const illegalItemResourceIdCharacters = new RegExp("[/\\\\#]");

/** @hidden */
export function jsonStringifyAndEscapeNonASCII(arg: unknown): string {
  // TODO: better way for this? Not sure.
  // escapes non-ASCII characters as \uXXXX
  return JSON.stringify(arg).replace(/[\u007F-\uFFFF]/g, (m) => {
    return "\\u" + ("0000" + m.charCodeAt(0).toString(16)).slice(-4);
  });
}

/**
 * @hidden
 */
export function parseLink(resourcePath: string): {
  type: ResourceType;
  objectBody: {
    id: string;
    self: string;
  };
} {
  if (resourcePath.length === 0) {
    /* for DatabaseAccount case, both type and objectBody will be undefined. */
    return {
      type: undefined,
      objectBody: undefined,
    };
  }

  if (resourcePath[resourcePath.length - 1] !== "/") {
    resourcePath = resourcePath + "/";
  }

  if (resourcePath[0] !== "/") {
    resourcePath = "/" + resourcePath;
  }

  /*
         The path will be in the form of /[resourceType]/[resourceId]/ ....
         /[resourceType]//[resourceType]/[resourceId]/ .... /[resourceType]/[resourceId]/
         or /[resourceType]/[resourceId]/ .... /[resourceType]/[resourceId]/[resourceType]/[resourceId]/ ....
          /[resourceType]/[resourceId]/
         The result of split will be in the form of
         [[[resourceType], [resourceId] ... ,[resourceType], [resourceId], ""]
         In the first case, to extract the resourceId it will the element before last ( at length -2 )
         and the type will be before it ( at length -3 )
         In the second case, to extract the resource type it will the element before last ( at length -2 )
        */
  const pathParts = resourcePath.split("/");
  let id;
  let type: ResourceType;
  if (pathParts.length % 2 === 0) {
    // request in form /[resourceType]/[resourceId]/ .... /[resourceType]/[resourceId].
    id = pathParts[pathParts.length - 2];
    type = pathParts[pathParts.length - 3] as ResourceType;
  } else {
    // request in form /[resourceType]/[resourceId]/ .... /[resourceType]/.
    id = pathParts[pathParts.length - 3];
    type = pathParts[pathParts.length - 2] as ResourceType;
  }

  const result = {
    type,
    objectBody: {
      id,
      self: resourcePath,
    },
  };

  return result;
}

/**
 * @hidden
 */
export function isReadRequest(operationType: OperationType): boolean {
  return operationType === OperationType.Read || operationType === OperationType.Query;
}

/**
 * @hidden
 */
export function sleep(time: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

/**
 * @hidden
 */
export function getContainerLink(link: string): string {
  return link.split("/").slice(0, 4).join("/");
}

/**
 * @hidden
 */
export function prepareURL(endpoint: string, path: string): string {
  return trimSlashes(endpoint) + path;
}

/**
 * @hidden
 */
export function trimSlashes(source: string): string {
  return source.replace(trimLeftSlashes, "").replace(trimRightSlashes, "");
}

/**
 * @hidden
 */
export function getHexaDigit(): string {
  return Math.floor(Math.random() * 16).toString(16);
}

/**
 * @hidden
 */
export function parsePath(path: string): string[] {
  const pathParts = [];
  let currentIndex = 0;

  const throwError = (): never => {
    throw new Error("Path " + path + " is invalid at index " + currentIndex);
  };

  const getEscapedToken = (): string => {
    const quote = path[currentIndex];
    let newIndex = ++currentIndex;

    for (;;) {
      newIndex = path.indexOf(quote, newIndex);
      if (newIndex === -1) {
        throwError();
      }

      if (path[newIndex - 1] !== "\\") {
        break;
      }

      ++newIndex;
    }

    const token = path.substr(currentIndex, newIndex - currentIndex);
    currentIndex = newIndex + 1;
    return token;
  };

  const getToken = (): string => {
    const newIndex = path.indexOf("/", currentIndex);
    let token = null;
    if (newIndex === -1) {
      token = path.substr(currentIndex);
      currentIndex = path.length;
    } else {
      token = path.substr(currentIndex, newIndex - currentIndex);
      currentIndex = newIndex;
    }

    token = token.trim();
    return token;
  };

  while (currentIndex < path.length) {
    if (path[currentIndex] !== "/") {
      throwError();
    }

    if (++currentIndex === path.length) {
      break;
    }

    if (path[currentIndex] === '"' || path[currentIndex] === "'") {
      pathParts.push(getEscapedToken());
    } else {
      pathParts.push(getToken());
    }
  }

  return pathParts;
}

/**
 * @hidden
 */
export function isResourceValid(resource: { id?: string }, err: { message?: string }): boolean {
  // TODO: fix strictness issues so that caller contexts respects the types of the functions
  if (resource.id) {
    if (typeof resource.id !== "string") {
      err.message = "Id must be a string.";
      return false;
    }

    if (
      resource.id.indexOf("/") !== -1 ||
      resource.id.indexOf("\\") !== -1 ||
      resource.id.indexOf("?") !== -1 ||
      resource.id.indexOf("#") !== -1
    ) {
      err.message = "Id contains illegal chars.";
      return false;
    }

    if (resource.id[resource.id.length - 1] === " ") {
      err.message = "Id ends with a space.";
      return false;
    }
  }
  return true;
}

/**
 * @hidden
 */
export function isItemResourceValid(resource: { id?: string }, err: { message?: string }): boolean {
  // TODO: fix strictness issues so that caller contexts respects the types of the functions
  if (resource.id) {
    if (typeof resource.id !== "string") {
      err.message = "Id must be a string.";
      return false;
    }

    if (
      resource.id.indexOf("/") !== -1 ||
      resource.id.indexOf("\\") !== -1 ||
      resource.id.indexOf("#") !== -1
    ) {
      err.message = "Id contains illegal chars.";
      return false;
    }
  }
  return true;
}

/** @hidden */
export function getIdFromLink(resourceLink: string): string {
  resourceLink = trimSlashes(resourceLink);
  return resourceLink;
}

/** @hidden */
export function getPathFromLink(resourceLink: string, resourceType?: string): string {
  resourceLink = trimSlashes(resourceLink);
  if (resourceType) {
    return "/" + encodeURI(resourceLink) + "/" + resourceType;
  } else {
    return "/" + encodeURI(resourceLink);
  }
}

/**
 * @hidden
 */
export function isStringNullOrEmpty(inputString: string): boolean {
  // checks whether string is null, undefined, empty or only contains space
  return !inputString || /^\s*$/.test(inputString);
}

/**
 * @hidden
 */
export function trimSlashFromLeftAndRight(inputString: string): string {
  if (typeof inputString !== "string") {
    throw new Error("invalid input: input is not string");
  }

  return inputString.replace(trimLeftSlashes, "").replace(trimRightSlashes, "");
}

/**
 * @hidden
 */
export function validateResourceId(resourceId: string): boolean {
  // if resourceId is not a string or is empty throw an error
  if (typeof resourceId !== "string" || isStringNullOrEmpty(resourceId)) {
    throw new Error("Resource ID must be a string and cannot be undefined, null or empty");
  }

  // if resource id contains illegal characters throw an error
  if (illegalResourceIdCharacters.test(resourceId)) {
    throw new Error("Illegal characters ['/', '\\', '#', '?'] cannot be used in Resource ID");
  }

  return true;
}

/**
 * @hidden
 */
export function validateItemResourceId(resourceId: string): boolean {
  // if resourceId is not a string or is empty throw an error
  if (typeof resourceId !== "string" || isStringNullOrEmpty(resourceId)) {
    throw new Error("Resource ID must be a string and cannot be undefined, null or empty");
  }

  // if resource id contains illegal characters throw an error
  if (illegalItemResourceIdCharacters.test(resourceId)) {
    throw new Error("Illegal characters ['/', '\\', '#'] cannot be used in Resource ID");
  }

  return true;
}

/**
 * @hidden
 */
export function getResourceIdFromPath(resourcePath: string): string {
  if (!resourcePath || typeof resourcePath !== "string") {
    return null;
  }

  const trimmedPath = trimSlashFromLeftAndRight(resourcePath);
  const pathSegments = trimmedPath.split("/");

  // number of segments of a path must always be even
  if (pathSegments.length % 2 !== 0) {
    return null;
  }

  return pathSegments[pathSegments.length - 1];
}

/**
 * @hidden
 */
interface ConnectionObject {
  AccountEndpoint: string;
  AccountKey: string;
}

/**
 * @hidden
 */
export function parseConnectionString(connectionString: string): CosmosClientOptions {
  const keyValueStrings = connectionString.split(";");
  const { AccountEndpoint, AccountKey } = keyValueStrings.reduce(
    (connectionObject, keyValueString: string) => {
      const [key, ...value] = keyValueString.split("=");
      (connectionObject as any)[key] = value.join("=");
      return connectionObject;
    },
    {} as ConnectionObject,
  );
  if (!AccountEndpoint || !AccountKey) {
    throw new Error("Could not parse the provided connection string");
  }
  return {
    endpoint: AccountEndpoint,
    key: AccountKey,
  };
}

/**
 * utility function to return copy of object to avoid encryption of original object passed
 * in the CRUD methods.
 * @hidden
 */
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-shadow, no-prototype-builtins */
export function copyObject(obj: any): any {
  function deepCopyRecursive(obj: any): any {
    if (obj === null || typeof obj !== "object") {
      return obj;
    }
    if (obj instanceof Date) {
      return JSON.parse(JSON.stringify(obj));
    }
    if (Array.isArray(obj)) {
      const arrCopy = [];
      for (const item of obj) {
        arrCopy.push(deepCopyRecursive(item));
      }
      return arrCopy;
    }

    const objCopy = {} as any;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        objCopy[key] = deepCopyRecursive(obj[key]);
      }
    }
    return objCopy;
  }
  return deepCopyRecursive(obj);
}

/**
 * @hidden
 */
export function createDeserializer(typeMarker: TypeMarker): Serializer {
  switch (typeMarker) {
    case TypeMarker.Long: {
      // return instance
      return new NumberSerializer();
    }
    case TypeMarker.Double:
      return new FloatSerializer();
    case TypeMarker.String:
      return new StringSerializer();
    case TypeMarker.Boolean:
      return new BooleanSerializer();
    default:
      throw new Error("Invalid or Unsupported data type passed.");
  }
}

/**
 * @hidden
 * extracts the top-level path
 */
export function extractPath(path: string): string {
  const secondSlashIndex = path.indexOf("/", path.indexOf("/") + 1);
  return secondSlashIndex === -1 ? path : path.substring(0, secondSlashIndex);
}

export function createSerializer(
  propertyValue: boolean | string | number | Date,
  type?: TypeMarker,
): [TypeMarker, Serializer] {
  if (type) {
    if (type === TypeMarker.Long) {
      return [TypeMarker.Long, new NumberSerializer()];
    } else if (type === TypeMarker.Double) {
      return [TypeMarker.Double, new FloatSerializer()];
    } else if (type === TypeMarker.String) {
      return [TypeMarker.String, new StringSerializer()];
    } else if (type === TypeMarker.Boolean) {
      return [TypeMarker.Boolean, new BooleanSerializer()];
    } else {
      throw new Error("Invalid or Unsupported data type passed.");
    }
  } else {
    switch (typeof propertyValue) {
      case "boolean":
        return [TypeMarker.Boolean, new BooleanSerializer()];
      case "string":
        return [TypeMarker.String, new StringSerializer()];
      case "object":
        if (propertyValue.constructor === Date) {
          return [TypeMarker.String, new StringSerializer()];
        }
        throw new Error("Invalid or Unsupported data type passed.");
      case "number":
        if (!Number.isInteger(propertyValue)) {
          return [TypeMarker.Double, new FloatSerializer()];
        } else {
          return [TypeMarker.Long, new NumberSerializer()];
        }
      default:
        throw new Error("Invalid or Unsupported data type passed.");
    }
  }
}
