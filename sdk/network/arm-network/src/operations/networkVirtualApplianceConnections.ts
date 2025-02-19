/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { NetworkVirtualApplianceConnections } from "../operationsInterfaces/index.js";
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
  NetworkVirtualApplianceConnection,
  NetworkVirtualApplianceConnectionsListNextOptionalParams,
  NetworkVirtualApplianceConnectionsListOptionalParams,
  NetworkVirtualApplianceConnectionsListResponse,
  NetworkVirtualApplianceConnectionsCreateOrUpdateOptionalParams,
  NetworkVirtualApplianceConnectionsCreateOrUpdateResponse,
  NetworkVirtualApplianceConnectionsGetOptionalParams,
  NetworkVirtualApplianceConnectionsGetResponse,
  NetworkVirtualApplianceConnectionsDeleteOptionalParams,
  NetworkVirtualApplianceConnectionsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing NetworkVirtualApplianceConnections operations. */
export class NetworkVirtualApplianceConnectionsImpl
  implements NetworkVirtualApplianceConnections
{
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class NetworkVirtualApplianceConnections class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Lists NetworkVirtualApplianceConnections under the NVA.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    networkVirtualApplianceName: string,
    options?: NetworkVirtualApplianceConnectionsListOptionalParams,
  ): PagedAsyncIterableIterator<NetworkVirtualApplianceConnection> {
    const iter = this.listPagingAll(
      resourceGroupName,
      networkVirtualApplianceName,
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
          networkVirtualApplianceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    networkVirtualApplianceName: string,
    options?: NetworkVirtualApplianceConnectionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<NetworkVirtualApplianceConnection[]> {
    let result: NetworkVirtualApplianceConnectionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        networkVirtualApplianceName,
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
        networkVirtualApplianceName,
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
    networkVirtualApplianceName: string,
    options?: NetworkVirtualApplianceConnectionsListOptionalParams,
  ): AsyncIterableIterator<NetworkVirtualApplianceConnection> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      networkVirtualApplianceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Creates a connection to Network Virtual Appliance, if it doesn't exist else updates the existing NVA
   * connection'
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param connectionName The name of the NVA connection.
   * @param networkVirtualApplianceConnectionParameters Parameters supplied in an
   *                                                    NetworkVirtualApplianceConnection PUT operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    networkVirtualApplianceName: string,
    connectionName: string,
    networkVirtualApplianceConnectionParameters: NetworkVirtualApplianceConnection,
    options?: NetworkVirtualApplianceConnectionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NetworkVirtualApplianceConnectionsCreateOrUpdateResponse>,
      NetworkVirtualApplianceConnectionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<NetworkVirtualApplianceConnectionsCreateOrUpdateResponse> => {
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
        networkVirtualApplianceName,
        connectionName,
        networkVirtualApplianceConnectionParameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      NetworkVirtualApplianceConnectionsCreateOrUpdateResponse,
      OperationState<NetworkVirtualApplianceConnectionsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a connection to Network Virtual Appliance, if it doesn't exist else updates the existing NVA
   * connection'
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param connectionName The name of the NVA connection.
   * @param networkVirtualApplianceConnectionParameters Parameters supplied in an
   *                                                    NetworkVirtualApplianceConnection PUT operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    networkVirtualApplianceName: string,
    connectionName: string,
    networkVirtualApplianceConnectionParameters: NetworkVirtualApplianceConnection,
    options?: NetworkVirtualApplianceConnectionsCreateOrUpdateOptionalParams,
  ): Promise<NetworkVirtualApplianceConnectionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      networkVirtualApplianceName,
      connectionName,
      networkVirtualApplianceConnectionParameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves the details of specified NVA connection.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param connectionName The name of the NVA connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkVirtualApplianceName: string,
    connectionName: string,
    options?: NetworkVirtualApplianceConnectionsGetOptionalParams,
  ): Promise<NetworkVirtualApplianceConnectionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkVirtualApplianceName,
        connectionName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Deletes a NVA connection.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param connectionName The name of the NVA connection.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    networkVirtualApplianceName: string,
    connectionName: string,
    options?: NetworkVirtualApplianceConnectionsDeleteOptionalParams,
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
        networkVirtualApplianceName,
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
   * Deletes a NVA connection.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param connectionName The name of the NVA connection.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    networkVirtualApplianceName: string,
    connectionName: string,
    options?: NetworkVirtualApplianceConnectionsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      networkVirtualApplianceName,
      connectionName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists NetworkVirtualApplianceConnections under the NVA.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    networkVirtualApplianceName: string,
    options?: NetworkVirtualApplianceConnectionsListOptionalParams,
  ): Promise<NetworkVirtualApplianceConnectionsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkVirtualApplianceName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of the Network Virtual Appliance.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    networkVirtualApplianceName: string,
    nextLink: string,
    options?: NetworkVirtualApplianceConnectionsListNextOptionalParams,
  ): Promise<NetworkVirtualApplianceConnectionsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkVirtualApplianceName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkVirtualAppliances/{networkVirtualApplianceName}/networkVirtualApplianceConnections/{connectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkVirtualApplianceConnection,
    },
    201: {
      bodyMapper: Mappers.NetworkVirtualApplianceConnection,
    },
    202: {
      bodyMapper: Mappers.NetworkVirtualApplianceConnection,
    },
    204: {
      bodyMapper: Mappers.NetworkVirtualApplianceConnection,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.networkVirtualApplianceConnectionParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkVirtualApplianceName1,
    Parameters.connectionName1,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkVirtualAppliances/{networkVirtualApplianceName}/networkVirtualApplianceConnections/{connectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkVirtualApplianceConnection,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.connectionName,
    Parameters.networkVirtualApplianceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkVirtualAppliances/{networkVirtualApplianceName}/networkVirtualApplianceConnections/{connectionName}",
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
    Parameters.subscriptionId,
    Parameters.connectionName,
    Parameters.networkVirtualApplianceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkVirtualAppliances/{networkVirtualApplianceName}/networkVirtualApplianceConnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkVirtualApplianceConnectionList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkVirtualApplianceName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkVirtualApplianceConnectionList,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.networkVirtualApplianceName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
