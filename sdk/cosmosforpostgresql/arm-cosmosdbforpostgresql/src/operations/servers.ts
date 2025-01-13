/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { Servers } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { CosmosDBForPostgreSQL } from "../cosmosDBForPostgreSQL.js";
import {
  ClusterServer,
  ServersListByClusterOptionalParams,
  ServersListByClusterResponse,
  ServersGetOptionalParams,
  ServersGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Servers operations. */
export class ServersImpl implements Servers {
  private readonly client: CosmosDBForPostgreSQL;

  /**
   * Initialize a new instance of the class Servers class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBForPostgreSQL) {
    this.client = client;
  }

  /**
   * Lists servers of a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  public listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: ServersListByClusterOptionalParams,
  ): PagedAsyncIterableIterator<ClusterServer> {
    const iter = this.listByClusterPagingAll(
      resourceGroupName,
      clusterName,
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
        return this.listByClusterPagingPage(
          resourceGroupName,
          clusterName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByClusterPagingPage(
    resourceGroupName: string,
    clusterName: string,
    options?: ServersListByClusterOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<ClusterServer[]> {
    let result: ServersListByClusterResponse;
    result = await this._listByCluster(resourceGroupName, clusterName, options);
    yield result.value || [];
  }

  private async *listByClusterPagingAll(
    resourceGroupName: string,
    clusterName: string,
    options?: ServersListByClusterOptionalParams,
  ): AsyncIterableIterator<ClusterServer> {
    for await (const page of this.listByClusterPagingPage(
      resourceGroupName,
      clusterName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists servers of a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  private _listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: ServersListByClusterOptionalParams,
  ): Promise<ServersListByClusterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      listByClusterOperationSpec,
    );
  }

  /**
   * Gets information about a server in cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    serverName: string,
    options?: ServersGetOptionalParams,
  ): Promise<ServersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, serverName, options },
      getOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByClusterOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/servers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterServerListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/servers/{serverName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ClusterServer,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.serverName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
