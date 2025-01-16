/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieves a redirection URL containing an authentication token for signing a given user into the developer portal.
 *
 * @summary Retrieves a redirection URL containing an authentication token for signing a given user into the developer portal.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementUserGenerateSsoUrl.json
 */
async function apiManagementUserGenerateSsoUrl(): Promise<void> {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const userId = "57127d485157a511ace86ae7";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.user.generateSsoUrl(
    resourceGroupName,
    serviceName,
    userId
  );
  console.log(result);
}

async function main(): Promise<void> {
  apiManagementUserGenerateSsoUrl();
}

main().catch(console.error);
