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
 * This sample demonstrates how to Implements vCenter GET method.
 *
 * @summary Implements vCenter GET method.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/stable/2023-10-01/examples/GetVCenter.json
 */
async function getVCenter() {
  const subscriptionId =
    process.env["CONNECTEDVMWARE_SUBSCRIPTION_ID"] ||
    "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName =
    process.env["CONNECTEDVMWARE_RESOURCE_GROUP"] || "testrg";
  const vcenterName = "ContosoVCenter";
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.vCenters.get(resourceGroupName, vcenterName);
  console.log(result);
}

async function main() {
  getVCenter();
}

main().catch(console.error);
