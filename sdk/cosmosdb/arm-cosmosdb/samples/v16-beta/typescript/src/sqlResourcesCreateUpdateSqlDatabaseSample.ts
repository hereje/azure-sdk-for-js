/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  SqlDatabaseCreateUpdateParameters,
  CosmosDBManagementClient,
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB SQL database
 *
 * @summary Create or update an Azure Cosmos DB SQL database
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBSqlDatabaseCreateUpdate.json
 */
async function cosmosDbSqlDatabaseCreateUpdate(): Promise<void> {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const createUpdateSqlDatabaseParameters: SqlDatabaseCreateUpdateParameters = {
    location: "West US",
    options: {},
    resource: { id: "databaseName" },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginCreateUpdateSqlDatabaseAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    createUpdateSqlDatabaseParameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB SQL database
 *
 * @summary Create or update an Azure Cosmos DB SQL database
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBSqlDatabaseRestore.json
 */
async function cosmosDbSqlDatabaseRestore(): Promise<void> {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const createUpdateSqlDatabaseParameters: SqlDatabaseCreateUpdateParameters = {
    location: "West US",
    options: {},
    resource: {
      createMode: "Restore",
      id: "databaseName",
      restoreParameters: {
        restoreSource:
          "/subscriptions/subid/providers/Microsoft.DocumentDB/locations/WestUS/restorableDatabaseAccounts/restorableDatabaseAccountId",
        restoreTimestampInUtc: new Date("2022-07-20T18:28:00Z"),
        restoreWithTtlDisabled: true,
      },
    },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginCreateUpdateSqlDatabaseAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    createUpdateSqlDatabaseParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  cosmosDbSqlDatabaseCreateUpdate();
  cosmosDbSqlDatabaseRestore();
}

main().catch(console.error);
