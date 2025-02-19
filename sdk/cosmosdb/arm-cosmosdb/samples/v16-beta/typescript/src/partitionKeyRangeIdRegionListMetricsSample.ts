/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieves the metrics determined by the given filter for the given partition key range id and region.
 *
 * @summary Retrieves the metrics determined by the given filter for the given partition key range id and region.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBPKeyRangeIdRegionGetMetrics.json
 */
async function cosmosDbDatabaseAccountRegionGetMetrics(): Promise<void> {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const region = "West US";
  const databaseRid = "databaseRid";
  const collectionRid = "collectionRid";
  const partitionKeyRangeId = "0";
  const filter =
    "$filter=(name.value eq 'Max RUs Per Second') and timeGrain eq duration'PT1M' and startTime eq '2017-11-19T23:53:55.2780000Z' and endTime eq '2017-11-20T23:58:55.2780000Z";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.partitionKeyRangeIdRegion.listMetrics(
    resourceGroupName,
    accountName,
    region,
    databaseRid,
    collectionRid,
    partitionKeyRangeId,
    filter,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  cosmosDbDatabaseAccountRegionGetMetrics();
}

main().catch(console.error);
