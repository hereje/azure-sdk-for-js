/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes a RoutingIntent.
 *
 * @summary Deletes a RoutingIntent.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/RoutingIntentDelete.json
 */
async function routeTableDelete(): Promise<void> {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualHubName = "virtualHub1";
  const routingIntentName = "Intent1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.routingIntentOperations.beginDeleteAndWait(
    resourceGroupName,
    virtualHubName,
    routingIntentName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await routeTableDelete();
}

main().catch(console.error);
