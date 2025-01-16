/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AppComplianceAutomationToolForMicrosoft365 } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List the storage accounts which are in use by related reports
 *
 * @summary List the storage accounts which are in use by related reports
 * x-ms-original-file: specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/stable/2024-06-27/examples/ListInUseStorageAccountsWithSubscriptions.json
 */
async function listInUseStorageAccountsWithSubscriptions(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = new AppComplianceAutomationToolForMicrosoft365(credential);
  const result = await client.providerActions.listInUseStorageAccounts({
    "subscriptionIds": [
      "0000000-0000-0000-0000-000000000001",
      "0000000-0000-0000-0000-000000000002"
    ]
  });
  console.log(result);
}

/**
 * This sample demonstrates how to List the storage accounts which are in use by related reports
 *
 * @summary List the storage accounts which are in use by related reports
 * x-ms-original-file: specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/stable/2024-06-27/examples/ListInUseStorageAccountsWithoutSubscriptions.json
 */
async function listInUseStorageAccountsWithoutSubscriptions(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = new AppComplianceAutomationToolForMicrosoft365(credential);
  const result = await client.providerActions.listInUseStorageAccounts({});
  console.log(result);
}

async function main(): Promise<void> {
  listInUseStorageAccountsWithSubscriptions();
  listInUseStorageAccountsWithoutSubscriptions();
}

main().catch(console.error);
