/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureStackHCIClient } from "@azure/arm-azurestackhci";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Add consent time for default extensions and initiate extensions installation
 *
 * @summary Add consent time for default extensions and initiate extensions installation
 * x-ms-original-file: specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/stable/2024-04-01/examples/ConsentAndInstallDefaultExtensions.json
 */
async function consentAndInstallDefaultExtensions(): Promise<void> {
  const subscriptionId =
    process.env["AZURESTACKHCI_SUBSCRIPTION_ID"] ||
    "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName =
    process.env["AZURESTACKHCI_RESOURCE_GROUP"] || "test-rg";
  const clusterName = "myCluster";
  const arcSettingName = "default";
  const credential = new DefaultAzureCredential();
  const client = new AzureStackHCIClient(credential, subscriptionId);
  const result = await client.arcSettings.consentAndInstallDefaultExtensions(
    resourceGroupName,
    clusterName,
    arcSettingName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  consentAndInstallDefaultExtensions();
}

main().catch(console.error);
