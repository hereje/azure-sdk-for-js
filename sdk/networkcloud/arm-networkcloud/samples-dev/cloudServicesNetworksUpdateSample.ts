/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type {
  CloudServicesNetworkPatchParameters,
  CloudServicesNetworksUpdateOptionalParams,
} from "@azure/arm-networkcloud";
import { NetworkCloud } from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update properties of the provided cloud services network, or update the tags associated with it. Properties and tag updates can be done independently.
 *
 * @summary Update properties of the provided cloud services network, or update the tags associated with it. Properties and tag updates can be done independently.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2024-06-01-preview/examples/CloudServicesNetworks_Patch.json
 */
async function patchCloudServicesNetwork(): Promise<void> {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] || "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName = process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const cloudServicesNetworkName = "cloudServicesNetworkName";
  const cloudServicesNetworkUpdateParameters: CloudServicesNetworkPatchParameters = {
    additionalEgressEndpoints: [
      {
        category: "azure-resource-management",
        endpoints: [{ domainName: "storageaccountex.blob.core.windows.net", port: 443 }],
      },
    ],
    enableDefaultEgressEndpoints: "False",
    tags: { key1: "myvalue1", key2: "myvalue2" },
  };
  const options: CloudServicesNetworksUpdateOptionalParams = {
    cloudServicesNetworkUpdateParameters,
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.cloudServicesNetworks.beginUpdateAndWait(
    resourceGroupName,
    cloudServicesNetworkName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await patchCloudServicesNetwork();
}

main().catch(console.error);
