/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  ThroughputSettingsUpdateParameters,
  CosmosDBManagementClient,
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update RUs per second of an Azure Cosmos DB Cassandra view
 *
 * @summary Update RUs per second of an Azure Cosmos DB Cassandra view
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBCassandraViewThroughputUpdate.json
 */
async function cosmosDbCassandraViewThroughputUpdate(): Promise<void> {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const keyspaceName = "keyspacename";
  const viewName = "viewname";
  const updateThroughputParameters: ThroughputSettingsUpdateParameters = {
    resource: { throughput: 400 },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result =
    await client.cassandraResources.beginUpdateCassandraViewThroughputAndWait(
      resourceGroupName,
      accountName,
      keyspaceName,
      viewName,
      updateThroughputParameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  cosmosDbCassandraViewThroughputUpdate();
}

main().catch(console.error);
