/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Operations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { DevTestLabsClient } from "../devTestLabsClient.js";
import { OperationsGetOptionalParams, OperationsGetResponse } from "../models/index.js";

/** Class containing Operations operations. */
export class OperationsImpl implements Operations {
  private readonly client: DevTestLabsClient;

  /**
   * Initialize a new instance of the class Operations class.
   * @param client Reference to the service client
   */
  constructor(client: DevTestLabsClient) {
    this.client = client;
  }

  /**
   * Get operation.
   * @param locationName The name of the location.
   * @param name The name of the operation.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    name: string,
    options?: OperationsGetOptionalParams
  ): Promise<OperationsGetResponse> {
    return this.client.sendOperationRequest(
      { locationName, name, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DevTestLab/locations/{locationName}/operations/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationResult
    },
    202: {
      bodyMapper: Mappers.OperationResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.name,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
