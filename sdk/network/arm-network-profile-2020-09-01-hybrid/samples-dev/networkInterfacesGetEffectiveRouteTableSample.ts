/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { NetworkManagementClient } from "@azure/arm-network-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets all route tables applied to a network interface.
 *
 * @summary Gets all route tables applied to a network interface.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2018-11-01/examples/NetworkInterfaceEffectiveRouteTableList.json
 */
async function showNetworkInterfaceEffectiveRouteTables(): Promise<void> {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const networkInterfaceName = "nic1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.networkInterfaces.beginGetEffectiveRouteTableAndWait(
    resourceGroupName,
    networkInterfaceName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await showNetworkInterfaceEffectiveRouteTables();
}

main().catch(console.error);
