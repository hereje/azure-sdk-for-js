/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CloudServicesNetwork, NetworkCloud } from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a new cloud services network or update the properties of the existing cloud services network.
 *
 * @summary Create a new cloud services network or update the properties of the existing cloud services network.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2024-06-01-preview/examples/CloudServicesNetworks_Create.json
 */
async function createOrUpdateCloudServicesNetwork(): Promise<void> {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const cloudServicesNetworkName = "cloudServicesNetworkName";
  const cloudServicesNetworkParameters: CloudServicesNetwork = {
    additionalEgressEndpoints: [
      {
        category: "azure-resource-management",
        endpoints: [
          { domainName: "storageaccountex.blob.core.windows.net", port: 443 },
        ],
      },
    ],
    enableDefaultEgressEndpoints: "False",
    extendedLocation: {
      name: "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName",
      type: "CustomLocation",
    },
    location: "location",
    tags: { key1: "myvalue1", key2: "myvalue2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.cloudServicesNetworks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    cloudServicesNetworkName,
    cloudServicesNetworkParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createOrUpdateCloudServicesNetwork();
}

main().catch(console.error);
