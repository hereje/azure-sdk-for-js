/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ResourcePools } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureArcVMwareManagementServiceAPI } from "../azureArcVMwareManagementServiceAPI.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  ResourcePool,
  ResourcePoolsListNextOptionalParams,
  ResourcePoolsListOptionalParams,
  ResourcePoolsListResponse,
  ResourcePoolsListByResourceGroupNextOptionalParams,
  ResourcePoolsListByResourceGroupOptionalParams,
  ResourcePoolsListByResourceGroupResponse,
  ResourcePoolsCreateOptionalParams,
  ResourcePoolsCreateResponse,
  ResourcePoolsGetOptionalParams,
  ResourcePoolsGetResponse,
  ResourcePoolsUpdateOptionalParams,
  ResourcePoolsUpdateResponse,
  ResourcePoolsDeleteOptionalParams,
  ResourcePoolsListNextResponse,
  ResourcePoolsListByResourceGroupNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ResourcePools operations. */
export class ResourcePoolsImpl implements ResourcePools {
  private readonly client: AzureArcVMwareManagementServiceAPI;

  /**
   * Initialize a new instance of the class ResourcePools class.
   * @param client Reference to the service client
   */
  constructor(client: AzureArcVMwareManagementServiceAPI) {
    this.client = client;
  }

  /**
   * List of resourcePools in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ResourcePoolsListOptionalParams
  ): PagedAsyncIterableIterator<ResourcePool> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: ResourcePoolsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ResourcePool[]> {
    let result: ResourcePoolsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: ResourcePoolsListOptionalParams
  ): AsyncIterableIterator<ResourcePool> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List of resourcePools in a resource group.
   * @param resourceGroupName The Resource Group Name.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ResourcePoolsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ResourcePool> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ResourcePoolsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ResourcePool[]> {
    let result: ResourcePoolsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ResourcePoolsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ResourcePool> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create Or Update resourcePool.
   * @param resourceGroupName The Resource Group Name.
   * @param resourcePoolName Name of the resourcePool.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    resourcePoolName: string,
    options?: ResourcePoolsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ResourcePoolsCreateResponse>,
      ResourcePoolsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ResourcePoolsCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, resourcePoolName, options },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      ResourcePoolsCreateResponse,
      OperationState<ResourcePoolsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create Or Update resourcePool.
   * @param resourceGroupName The Resource Group Name.
   * @param resourcePoolName Name of the resourcePool.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    resourcePoolName: string,
    options?: ResourcePoolsCreateOptionalParams
  ): Promise<ResourcePoolsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      resourcePoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Implements resourcePool GET method.
   * @param resourceGroupName The Resource Group Name.
   * @param resourcePoolName Name of the resourcePool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourcePoolName: string,
    options?: ResourcePoolsGetOptionalParams
  ): Promise<ResourcePoolsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourcePoolName, options },
      getOperationSpec
    );
  }

  /**
   * API to update certain properties of the resourcePool resource.
   * @param resourceGroupName The Resource Group Name.
   * @param resourcePoolName Name of the resourcePool.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    resourcePoolName: string,
    options?: ResourcePoolsUpdateOptionalParams
  ): Promise<ResourcePoolsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, resourcePoolName, options },
      updateOperationSpec
    );
  }

  /**
   * Implements resourcePool DELETE method.
   * @param resourceGroupName The Resource Group Name.
   * @param resourcePoolName Name of the resourcePool.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    resourcePoolName: string,
    options?: ResourcePoolsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, resourcePoolName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Implements resourcePool DELETE method.
   * @param resourceGroupName The Resource Group Name.
   * @param resourcePoolName Name of the resourcePool.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    resourcePoolName: string,
    options?: ResourcePoolsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      resourcePoolName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List of resourcePools in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ResourcePoolsListOptionalParams
  ): Promise<ResourcePoolsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * List of resourcePools in a resource group.
   * @param resourceGroupName The Resource Group Name.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ResourcePoolsListByResourceGroupOptionalParams
  ): Promise<ResourcePoolsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ResourcePoolsListNextOptionalParams
  ): Promise<ResourcePoolsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The Resource Group Name.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ResourcePoolsListByResourceGroupNextOptionalParams
  ): Promise<ResourcePoolsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools/{resourcePoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ResourcePool
    },
    201: {
      bodyMapper: Mappers.ResourcePool
    },
    202: {
      bodyMapper: Mappers.ResourcePool
    },
    204: {
      bodyMapper: Mappers.ResourcePool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourcePoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools/{resourcePoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourcePool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourcePoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools/{resourcePoolName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ResourcePool
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourcePoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools/{resourcePoolName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.force],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourcePoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourcePoolsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ConnectedVMwarevSphere/resourcePools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourcePoolsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourcePoolsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourcePoolsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
