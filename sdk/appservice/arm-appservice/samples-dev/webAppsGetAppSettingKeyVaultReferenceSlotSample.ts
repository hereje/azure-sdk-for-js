/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WebSiteManagementClient } from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Gets the config reference and status of an app
 *
 * @summary Description for Gets the config reference and status of an app
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-12-01/examples/GetKeyVaultReferencesForAppSettingSlot.json
 */
async function getAzureKeyVaultSlotAppSettingReference(): Promise<void> {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["APPSERVICE_RESOURCE_GROUP"] || "testrg123";
  const name = "testc6282";
  const appSettingKey = "setting";
  const slot = "stage";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.getAppSettingKeyVaultReferenceSlot(
    resourceGroupName,
    name,
    appSettingKey,
    slot,
  );
  console.log(result);
}

async function main(): Promise<void> {
  getAzureKeyVaultSlotAppSettingReference();
}

main().catch(console.error);
