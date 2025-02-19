/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  NetworkInterface,
  NetworkManagementClient
} from "@azure/arm-network-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a network interface.
 *
 * @summary Creates or updates a network interface.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2018-11-01/examples/NetworkInterfaceCreate.json
 */
async function createNetworkInterface(): Promise<void> {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const networkInterfaceName = "test-nic";
  const parameters: NetworkInterface = {
    enableAcceleratedNetworking: true,
    ipConfigurations: [
      {
        name: "ipconfig1",
        publicIPAddress: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/test-ip"
        },
        subnet: {
          id:
            "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/rg1-vnet/subnets/default"
        }
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.networkInterfaces.beginCreateOrUpdateAndWait(
    resourceGroupName,
    networkInterfaceName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  createNetworkInterface();
}

main().catch(console.error);
