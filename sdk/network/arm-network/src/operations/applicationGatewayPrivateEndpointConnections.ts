/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ApplicationGatewayPrivateEndpointConnections } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { NetworkManagementClient } from "../networkManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  ApplicationGatewayPrivateEndpointConnection,
  ApplicationGatewayPrivateEndpointConnectionsListNextOptionalParams,
  ApplicationGatewayPrivateEndpointConnectionsListOptionalParams,
  ApplicationGatewayPrivateEndpointConnectionsListResponse,
  ApplicationGatewayPrivateEndpointConnectionsDeleteOptionalParams,
  ApplicationGatewayPrivateEndpointConnectionsUpdateOptionalParams,
  ApplicationGatewayPrivateEndpointConnectionsUpdateResponse,
  ApplicationGatewayPrivateEndpointConnectionsGetOptionalParams,
  ApplicationGatewayPrivateEndpointConnectionsGetResponse,
  ApplicationGatewayPrivateEndpointConnectionsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApplicationGatewayPrivateEndpointConnections operations. */
export class ApplicationGatewayPrivateEndpointConnectionsImpl
  implements ApplicationGatewayPrivateEndpointConnections
{
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class ApplicationGatewayPrivateEndpointConnections class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Lists all private endpoint connections on an application gateway.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    applicationGatewayName: string,
    options?: ApplicationGatewayPrivateEndpointConnectionsListOptionalParams,
  ): PagedAsyncIterableIterator<ApplicationGatewayPrivateEndpointConnection> {
    const iter = this.listPagingAll(
      resourceGroupName,
      applicationGatewayName,
      options,
    );
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
        return this.listPagingPage(
          resourceGroupName,
          applicationGatewayName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    applicationGatewayName: string,
    options?: ApplicationGatewayPrivateEndpointConnectionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ApplicationGatewayPrivateEndpointConnection[]> {
    let result: ApplicationGatewayPrivateEndpointConnectionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        applicationGatewayName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        applicationGatewayName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    applicationGatewayName: string,
    options?: ApplicationGatewayPrivateEndpointConnectionsListOptionalParams,
  ): AsyncIterableIterator<ApplicationGatewayPrivateEndpointConnection> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      applicationGatewayName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified private endpoint connection on application gateway.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param connectionName The name of the application gateway private endpoint connection.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    applicationGatewayName: string,
    connectionName: string,
    options?: ApplicationGatewayPrivateEndpointConnectionsDeleteOptionalParams,
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
      args: {
        resourceGroupName,
        applicationGatewayName,
        connectionName,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified private endpoint connection on application gateway.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param connectionName The name of the application gateway private endpoint connection.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    applicationGatewayName: string,
    connectionName: string,
    options?: ApplicationGatewayPrivateEndpointConnectionsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      applicationGatewayName,
      connectionName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates the specified private endpoint connection on application gateway.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param connectionName The name of the application gateway private endpoint connection.
   * @param parameters Parameters supplied to update application gateway private endpoint connection
   *                   operation.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    applicationGatewayName: string,
    connectionName: string,
    parameters: ApplicationGatewayPrivateEndpointConnection,
    options?: ApplicationGatewayPrivateEndpointConnectionsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ApplicationGatewayPrivateEndpointConnectionsUpdateResponse>,
      ApplicationGatewayPrivateEndpointConnectionsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ApplicationGatewayPrivateEndpointConnectionsUpdateResponse> => {
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
      args: {
        resourceGroupName,
        applicationGatewayName,
        connectionName,
        parameters,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      ApplicationGatewayPrivateEndpointConnectionsUpdateResponse,
      OperationState<ApplicationGatewayPrivateEndpointConnectionsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates the specified private endpoint connection on application gateway.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param connectionName The name of the application gateway private endpoint connection.
   * @param parameters Parameters supplied to update application gateway private endpoint connection
   *                   operation.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    applicationGatewayName: string,
    connectionName: string,
    parameters: ApplicationGatewayPrivateEndpointConnection,
    options?: ApplicationGatewayPrivateEndpointConnectionsUpdateOptionalParams,
  ): Promise<ApplicationGatewayPrivateEndpointConnectionsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      applicationGatewayName,
      connectionName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets the specified private endpoint connection on application gateway.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param connectionName The name of the application gateway private endpoint connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    applicationGatewayName: string,
    connectionName: string,
    options?: ApplicationGatewayPrivateEndpointConnectionsGetOptionalParams,
  ): Promise<ApplicationGatewayPrivateEndpointConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, applicationGatewayName, connectionName, options },
      getOperationSpec,
    );
  }

  /**
   * Lists all private endpoint connections on an application gateway.
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    applicationGatewayName: string,
    options?: ApplicationGatewayPrivateEndpointConnectionsListOptionalParams,
  ): Promise<ApplicationGatewayPrivateEndpointConnectionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, applicationGatewayName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param applicationGatewayName The name of the application gateway.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    applicationGatewayName: string,
    nextLink: string,
    options?: ApplicationGatewayPrivateEndpointConnectionsListNextOptionalParams,
  ): Promise<ApplicationGatewayPrivateEndpointConnectionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, applicationGatewayName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/privateEndpointConnections/{connectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId,
    Parameters.connectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/privateEndpointConnections/{connectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayPrivateEndpointConnection,
    },
    201: {
      bodyMapper: Mappers.ApplicationGatewayPrivateEndpointConnection,
    },
    202: {
      bodyMapper: Mappers.ApplicationGatewayPrivateEndpointConnection,
    },
    204: {
      bodyMapper: Mappers.ApplicationGatewayPrivateEndpointConnection,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId,
    Parameters.connectionName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/privateEndpointConnections/{connectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayPrivateEndpointConnection,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId,
    Parameters.connectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/applicationGateways/{applicationGatewayName}/privateEndpointConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayPrivateEndpointConnectionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationGatewayPrivateEndpointConnectionListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.applicationGatewayName,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
