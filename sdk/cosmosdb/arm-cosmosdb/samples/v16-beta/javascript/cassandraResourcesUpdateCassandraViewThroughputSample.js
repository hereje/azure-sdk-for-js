/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Update RUs per second of an Azure Cosmos DB Cassandra view
 *
 * @summary Update RUs per second of an Azure Cosmos DB Cassandra view
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBCassandraViewThroughputUpdate.json
 */
async function cosmosDbCassandraViewThroughputUpdate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const keyspaceName = "keyspacename";
  const viewName = "viewname";
  const updateThroughputParameters = {
    resource: { throughput: 400 },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.cassandraResources.beginUpdateCassandraViewThroughputAndWait(
    resourceGroupName,
    accountName,
    keyspaceName,
    viewName,
    updateThroughputParameters,
  );
  console.log(result);
}

async function main() {
  cosmosDbCassandraViewThroughputUpdate();
}

main().catch(console.error);
