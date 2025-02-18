/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Cluster, NetworkCloud } from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a new cluster or update the properties of the cluster if it exists.
 *
 * @summary Create a new cluster or update the properties of the cluster if it exists.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2024-06-01-preview/examples/Clusters_Create.json
 */
async function createOrUpdateCluster(): Promise<void> {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const clusterName = "clusterName";
  const clusterParameters: Cluster = {
    aggregatorOrSingleRackDefinition: {
      bareMetalMachineConfigurationData: [
        {
          bmcCredentials: { password: "{password}", username: "username" },
          bmcMacAddress: "AA:BB:CC:DD:EE:FF",
          bootMacAddress: "00:BB:CC:DD:EE:FF",
          machineDetails: "extraDetails",
          machineName: "bmmName1",
          rackSlot: 1,
          serialNumber: "BM1219XXX",
        },
        {
          bmcCredentials: { password: "{password}", username: "username" },
          bmcMacAddress: "AA:BB:CC:DD:EE:00",
          bootMacAddress: "00:BB:CC:DD:EE:00",
          machineDetails: "extraDetails",
          machineName: "bmmName2",
          rackSlot: 2,
          serialNumber: "BM1219YYY",
        },
      ],
      networkRackId:
        "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/networkRacks/networkRackName",
      rackLocation: "Foo Datacenter, Floor 3, Aisle 9, Rack 2",
      rackSerialNumber: "AA1234",
      rackSkuId:
        "/subscriptions/123e4567-e89b-12d3-a456-426655440000/providers/Microsoft.NetworkCloud/rackSkus/rackSkuName",
      storageApplianceConfigurationData: [
        {
          adminCredentials: { password: "{password}", username: "username" },
          rackSlot: 1,
          serialNumber: "BM1219XXX",
          storageApplianceName: "vmName",
        },
      ],
    },
    analyticsWorkspaceId:
      "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/microsoft.operationalInsights/workspaces/logAnalyticsWorkspaceName",
    clusterLocation: "Foo Street, 3rd Floor, row 9",
    clusterServicePrincipal: {
      applicationId: "12345678-1234-1234-1234-123456789012",
      password: "{password}",
      principalId: "00000008-0004-0004-0004-000000000012",
      tenantId: "80000000-4000-4000-4000-120000000000",
    },
    clusterType: "SingleRack",
    clusterVersion: "1.0.0",
    commandOutputSettings: {
      associatedIdentity: {
        identityType: "UserAssignedIdentity",
        userAssignedIdentityResourceId:
          "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/userIdentity1",
      },
      containerUrl:
        "https://myaccount.blob.core.windows.net/mycontainer?restype=container",
    },
    computeDeploymentThreshold: {
      type: "PercentSuccess",
      grouping: "PerCluster",
      value: 90,
    },
    computeRackDefinitions: [
      {
        bareMetalMachineConfigurationData: [
          {
            bmcCredentials: { password: "{password}", username: "username" },
            bmcMacAddress: "AA:BB:CC:DD:EE:FF",
            bootMacAddress: "00:BB:CC:DD:EE:FF",
            machineDetails: "extraDetails",
            machineName: "bmmName1",
            rackSlot: 1,
            serialNumber: "BM1219XXX",
          },
          {
            bmcCredentials: { password: "{password}", username: "username" },
            bmcMacAddress: "AA:BB:CC:DD:EE:00",
            bootMacAddress: "00:BB:CC:DD:EE:00",
            machineDetails: "extraDetails",
            machineName: "bmmName2",
            rackSlot: 2,
            serialNumber: "BM1219YYY",
          },
        ],
        networkRackId:
          "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/networkRacks/networkRackName",
        rackLocation: "Foo Datacenter, Floor 3, Aisle 9, Rack 2",
        rackSerialNumber: "AA1234",
        rackSkuId:
          "/subscriptions/123e4567-e89b-12d3-a456-426655440000/providers/Microsoft.NetworkCloud/rackSkus/rackSkuName",
        storageApplianceConfigurationData: [
          {
            adminCredentials: { password: "{password}", username: "username" },
            rackSlot: 1,
            serialNumber: "BM1219XXX",
            storageApplianceName: "vmName",
          },
        ],
      },
    ],
    extendedLocation: {
      name: "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterManagerExtendedLocationName",
      type: "CustomLocation",
    },
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
    networkFabricId:
      "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/networkFabrics/fabricName",
    runtimeProtectionConfiguration: { enforcementLevel: "OnDemand" },
    secretArchive: {
      keyVaultId:
        "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.KeyVault/vaults/keyVaultName",
      useKeyVault: "True",
    },
    tags: { key1: "myvalue1", key2: "myvalue2" },
    updateStrategy: {
      maxUnavailable: 4,
      strategyType: "Rack",
      thresholdType: "CountSuccess",
      thresholdValue: 4,
      waitTimeMinutes: 10,
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.clusters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterName,
    clusterParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createOrUpdateCluster();
}

main().catch(console.error);
