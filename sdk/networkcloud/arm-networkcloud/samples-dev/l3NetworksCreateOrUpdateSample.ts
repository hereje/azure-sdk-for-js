/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { L3Network } from "@azure/arm-networkcloud";
import { NetworkCloud } from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a new layer 3 (L3) network or update the properties of the existing network.
 *
 * @summary Create a new layer 3 (L3) network or update the properties of the existing network.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2024-06-01-preview/examples/L3Networks_Create.json
 */
async function createOrUpdateL3Network(): Promise<void> {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] || "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName = process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const l3NetworkName = "l3NetworkName";
  const l3NetworkParameters: L3Network = {
    extendedLocation: {
      name: "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName",
      type: "CustomLocation",
    },
    interfaceName: "eth0",
    ipAllocationType: "DualStack",
    ipv4ConnectedPrefix: "198.51.100.0/24",
    ipv6ConnectedPrefix: "2001:db8::/64",
    l3IsolationDomainId:
      "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/l3IsolationDomainName",
    location: "location",
    tags: { key1: "myvalue1", key2: "myvalue2" },
    vlan: 12,
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.l3Networks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    l3NetworkName,
    l3NetworkParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateL3Network();
}

main().catch(console.error);
