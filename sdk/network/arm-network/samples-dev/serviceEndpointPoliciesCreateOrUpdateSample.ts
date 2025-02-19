/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ServiceEndpointPolicy } from "@azure/arm-network";
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a service Endpoint Policies.
 *
 * @summary Creates or updates a service Endpoint Policies.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/ServiceEndpointPolicyCreate.json
 */
async function createServiceEndpointPolicy(): Promise<void> {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const serviceEndpointPolicyName = "testPolicy";
  const parameters: ServiceEndpointPolicy = { location: "westus" };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.serviceEndpointPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceEndpointPolicyName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a service Endpoint Policies.
 *
 * @summary Creates or updates a service Endpoint Policies.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/ServiceEndpointPolicyCreateWithDefinition.json
 */
async function createServiceEndpointPolicyWithDefinition(): Promise<void> {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const serviceEndpointPolicyName = "testPolicy";
  const parameters: ServiceEndpointPolicy = {
    location: "westus",
    serviceEndpointPolicyDefinitions: [
      {
        name: "StorageServiceEndpointPolicyDefinition",
        description: "Storage Service EndpointPolicy Definition",
        service: "Microsoft.Storage",
        serviceResources: [
          "/subscriptions/subid1",
          "/subscriptions/subid1/resourceGroups/storageRg",
          "/subscriptions/subid1/resourceGroups/storageRg/providers/Microsoft.Storage/storageAccounts/stAccount",
        ],
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.serviceEndpointPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceEndpointPolicyName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createServiceEndpointPolicy();
  await createServiceEndpointPolicyWithDefinition();
}

main().catch(console.error);
