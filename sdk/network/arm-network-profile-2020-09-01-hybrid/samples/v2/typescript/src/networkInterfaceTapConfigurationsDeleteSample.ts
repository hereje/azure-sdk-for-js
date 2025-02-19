/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Deletes the specified tap configuration from the NetworkInterface.
 *
 * @summary Deletes the specified tap configuration from the NetworkInterface.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2018-11-01/examples/NetworkInterfaceTapConfigurationDelete.json
 */
async function deleteTapConfiguration(): Promise<void> {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const networkInterfaceName = "test-networkinterface";
  const tapConfigurationName = "test-tapconfiguration";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.networkInterfaceTapConfigurations.beginDeleteAndWait(
    resourceGroupName,
    networkInterfaceName,
    tapConfigurationName
  );
  console.log(result);
}

async function main(): Promise<void> {
  deleteTapConfiguration();
}

main().catch(console.error);
