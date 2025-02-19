/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { RecoverableServers } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { PostgreSQLManagementClient } from "../postgreSQLManagementClient.js";
import {
  RecoverableServersGetOptionalParams,
  RecoverableServersGetResponse
} from "../models/index.js";

/** Class containing RecoverableServers operations. */
export class RecoverableServersImpl implements RecoverableServers {
  private readonly client: PostgreSQLManagementClient;

  /**
   * Initialize a new instance of the class RecoverableServers class.
   * @param client Reference to the service client
   */
  constructor(client: PostgreSQLManagementClient) {
    this.client = client;
  }

  /**
   * Gets a recoverable PostgreSQL Server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    options?: RecoverableServersGetOptionalParams
  ): Promise<RecoverableServersGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/servers/{serverName}/recoverableServers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RecoverableServerResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
