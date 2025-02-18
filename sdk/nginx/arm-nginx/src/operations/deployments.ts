/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Deployments } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { NginxManagementClient } from "../nginxManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  NginxDeployment,
  DeploymentsListNextOptionalParams,
  DeploymentsListOptionalParams,
  DeploymentsListResponse,
  DeploymentsListByResourceGroupNextOptionalParams,
  DeploymentsListByResourceGroupOptionalParams,
  DeploymentsListByResourceGroupResponse,
  DeploymentsGetOptionalParams,
  DeploymentsGetResponse,
  DeploymentsCreateOrUpdateOptionalParams,
  DeploymentsCreateOrUpdateResponse,
  DeploymentsUpdateOptionalParams,
  DeploymentsUpdateResponse,
  DeploymentsDeleteOptionalParams,
  DeploymentsListNextResponse,
  DeploymentsListByResourceGroupNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Deployments operations. */
export class DeploymentsImpl implements Deployments {
  private readonly client: NginxManagementClient;

  /**
   * Initialize a new instance of the class Deployments class.
   * @param client Reference to the service client
   */
  constructor(client: NginxManagementClient) {
    this.client = client;
  }

  /**
   * List the NGINX deployments resources
   * @param options The options parameters.
   */
  public list(
    options?: DeploymentsListOptionalParams,
  ): PagedAsyncIterableIterator<NginxDeployment> {
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
      },
    };
  }

  private async *listPagingPage(
    options?: DeploymentsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<NginxDeployment[]> {
    let result: DeploymentsListResponse;
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
    options?: DeploymentsListOptionalParams,
  ): AsyncIterableIterator<NginxDeployment> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List all NGINX deployments under the specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DeploymentsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<NginxDeployment> {
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
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: DeploymentsListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<NginxDeployment[]> {
    let result: DeploymentsListByResourceGroupResponse;
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
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: DeploymentsListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<NginxDeployment> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get the NGINX deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted NGINX deployment
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsGetOptionalParams,
  ): Promise<DeploymentsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, deploymentName, options },
      getOperationSpec,
    );
  }

  /**
   * Create or update the NGINX deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted NGINX deployment
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DeploymentsCreateOrUpdateResponse>,
      DeploymentsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<DeploymentsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, deploymentName, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      DeploymentsCreateOrUpdateResponse,
      OperationState<DeploymentsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create or update the NGINX deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted NGINX deployment
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsCreateOrUpdateOptionalParams,
  ): Promise<DeploymentsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      deploymentName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Update the NGINX deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted NGINX deployment
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DeploymentsUpdateResponse>,
      DeploymentsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<DeploymentsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, deploymentName, options },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      DeploymentsUpdateResponse,
      OperationState<DeploymentsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Update the NGINX deployment
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted NGINX deployment
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsUpdateOptionalParams,
  ): Promise<DeploymentsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      deploymentName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete the NGINX deployment resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted NGINX deployment
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, deploymentName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete the NGINX deployment resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param deploymentName The name of targeted NGINX deployment
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    deploymentName: string,
    options?: DeploymentsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      deploymentName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * List the NGINX deployments resources
   * @param options The options parameters.
   */
  private _list(
    options?: DeploymentsListOptionalParams,
  ): Promise<DeploymentsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * List all NGINX deployments under the specified resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DeploymentsListByResourceGroupOptionalParams,
  ): Promise<DeploymentsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: DeploymentsListNextOptionalParams,
  ): Promise<DeploymentsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DeploymentsListByResourceGroupNextOptionalParams,
  ): Promise<DeploymentsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Nginx.NginxPlus/nginxDeployments/{deploymentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NginxDeployment,
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deploymentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Nginx.NginxPlus/nginxDeployments/{deploymentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NginxDeployment,
    },
    201: {
      bodyMapper: Mappers.NginxDeployment,
    },
    202: {
      bodyMapper: Mappers.NginxDeployment,
    },
    204: {
      bodyMapper: Mappers.NginxDeployment,
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse,
    },
  },
  requestBody: Parameters.body3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deploymentName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Nginx.NginxPlus/nginxDeployments/{deploymentName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NginxDeployment,
    },
    201: {
      bodyMapper: Mappers.NginxDeployment,
    },
    202: {
      bodyMapper: Mappers.NginxDeployment,
    },
    204: {
      bodyMapper: Mappers.NginxDeployment,
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse,
    },
  },
  requestBody: Parameters.body4,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deploymentName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Nginx.NginxPlus/nginxDeployments/{deploymentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.deploymentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Nginx.NginxPlus/nginxDeployments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NginxDeploymentListResponse,
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Nginx.NginxPlus/nginxDeployments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NginxDeploymentListResponse,
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NginxDeploymentListResponse,
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NginxDeploymentListResponse,
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
