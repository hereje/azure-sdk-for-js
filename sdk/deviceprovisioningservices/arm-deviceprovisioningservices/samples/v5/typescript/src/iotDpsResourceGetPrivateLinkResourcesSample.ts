/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { IotDpsClient } from "@azure/arm-deviceprovisioningservices";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get the specified private link resource for the given provisioning service
 *
 * @summary Get the specified private link resource for the given provisioning service
 * x-ms-original-file: specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/stable/2022-02-05/examples/DPSGetPrivateLinkResources.json
 */
async function privateLinkResourcesList() {
  const subscriptionId =
    process.env["DEVICEPROVISIONINGSERVICES_SUBSCRIPTION_ID"] ||
    "91d12660-3dec-467a-be2a-213b5544ddc0";
  const resourceGroupName =
    process.env["DEVICEPROVISIONINGSERVICES_RESOURCE_GROUP"] ||
    "myResourceGroup";
  const resourceName = "myFirstProvisioningService";
  const groupId = "iotDps";
  const credential = new DefaultAzureCredential();
  const client = new IotDpsClient(credential, subscriptionId);
  const result = await client.iotDpsResource.getPrivateLinkResources(
    resourceGroupName,
    resourceName,
    groupId
  );
  console.log(result);
}

async function main() {
  privateLinkResourcesList();
}

main().catch(console.error);
