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
 * This sample demonstrates how to Implements virtual machine template DELETE method.
 *
 * @summary Implements virtual machine template DELETE method.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/stable/2023-10-01/examples/DeleteVirtualMachineTemplate.json
 */
async function deleteVirtualMachineTemplate(): Promise<void> {
  const subscriptionId =
    process.env["CONNECTEDVMWARE_SUBSCRIPTION_ID"] ||
    "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName =
    process.env["CONNECTEDVMWARE_RESOURCE_GROUP"] || "testrg";
  const virtualMachineTemplateName = "WebFrontEndTemplate";
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.virtualMachineTemplates.beginDeleteAndWait(
    resourceGroupName,
    virtualMachineTemplateName
  );
  console.log(result);
}

async function main(): Promise<void> {
  deleteVirtualMachineTemplate();
}

main().catch(console.error);
