/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ClusterManager, NetworkCloud } from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a new cluster manager or update properties of the cluster manager if it exists.
 *
 * @summary Create a new cluster manager or update properties of the cluster manager if it exists.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2024-06-01-preview/examples/ClusterManagers_Create.json
 */
async function createOrUpdateClusterManager(): Promise<void> {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const clusterManagerName = "clusterManagerName";
  const clusterManagerParameters: ClusterManager = {
    analyticsWorkspaceId:
      "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/microsoft.operationalInsights/workspaces/logAnalyticsWorkspaceName",
    fabricControllerId:
      "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/fabricControllerName",
    identity: { type: "SystemAssigned" },
    location: "location",
    managedResourceGroupConfiguration: {
      name: "my-managed-rg",
      location: "East US",
    },
    tags: { key1: "myvalue1", key2: "myvalue2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.clusterManagers.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterManagerName,
    clusterManagerParameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a new cluster manager or update properties of the cluster manager if it exists.
 *
 * @summary Create a new cluster manager or update properties of the cluster manager if it exists.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2024-06-01-preview/examples/ClusterManagers_Create_Uami.json
 */
async function createOrUpdateClusterManagerWithUserAssignedIdentity(): Promise<void> {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const clusterManagerName = "clusterManagerName";
  const clusterManagerParameters: ClusterManager = {
    analyticsWorkspaceId:
      "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/microsoft.operationalInsights/workspaces/logAnalyticsWorkspaceName",
    fabricControllerId:
      "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/fabricControllerName",
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/123e4567E89b12d3A456426655440000/resourceGroups/resourceGroupName/providers/MicrosoftManagedIdentity/userAssignedIdentities/userIdentity1":
          {},
      },
    },
    location: "location",
    managedResourceGroupConfiguration: {
      name: "my-managed-rg",
      location: "East US",
    },
    tags: { key1: "myvalue1", key2: "myvalue2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.clusterManagers.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterManagerName,
    clusterManagerParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createOrUpdateClusterManager();
  createOrUpdateClusterManagerWithUserAssignedIdentity();
}

main().catch(console.error);
