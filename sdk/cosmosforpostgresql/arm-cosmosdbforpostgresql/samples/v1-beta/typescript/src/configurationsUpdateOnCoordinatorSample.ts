/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ServerConfiguration,
  CosmosDBForPostgreSQL,
} from "@azure/arm-cosmosdbforpostgresql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates configuration of coordinator in a cluster
 *
 * @summary Updates configuration of coordinator in a cluster
 * x-ms-original-file: specification/postgresqlhsc/resource-manager/Microsoft.DBforPostgreSQL/preview/2023-03-02-preview/examples/ConfigurationUpdateCoordinator.json
 */
async function updateSingleConfigurationOfCoordinator() {
  const subscriptionId =
    process.env["COSMOSFORPOSTGRESQL_SUBSCRIPTION_ID"] ||
    "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName =
    process.env["COSMOSFORPOSTGRESQL_RESOURCE_GROUP"] || "TestResourceGroup";
  const clusterName = "testcluster";
  const configurationName = "array_nulls";
  const parameters: ServerConfiguration = { value: "on" };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBForPostgreSQL(credential, subscriptionId);
  const result = await client.configurations.beginUpdateOnCoordinatorAndWait(
    resourceGroupName,
    clusterName,
    configurationName,
    parameters,
  );
  console.log(result);
}

async function main() {
  updateSingleConfigurationOfCoordinator();
}

main().catch(console.error);
