/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureArcVMwareManagementServiceAPI } from "@azure/arm-connectedvmware";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Implements inventoryItem DELETE method.
 *
 * @summary Implements inventoryItem DELETE method.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/stable/2023-10-01/examples/DeleteInventoryItem.json
 */
async function deleteInventoryItem(): Promise<void> {
  const subscriptionId =
    process.env["CONNECTEDVMWARE_SUBSCRIPTION_ID"] ||
    "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName =
    process.env["CONNECTEDVMWARE_RESOURCE_GROUP"] || "testrg";
  const vcenterName = "ContosoVCenter";
  const inventoryItemName = "testItem";
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.inventoryItems.delete(
    resourceGroupName,
    vcenterName,
    inventoryItemName
  );
  console.log(result);
}

async function main(): Promise<void> {
  deleteInventoryItem();
}

main().catch(console.error);
