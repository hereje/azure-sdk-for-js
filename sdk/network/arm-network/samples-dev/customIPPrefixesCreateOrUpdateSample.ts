/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { CustomIpPrefix } from "@azure/arm-network";
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a custom IP prefix.
 *
 * @summary Creates or updates a custom IP prefix.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/CustomIpPrefixCreateCustomizedValues.json
 */
async function createCustomIPPrefixAllocationMethod(): Promise<void> {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const customIpPrefixName = "test-customipprefix";
  const parameters: CustomIpPrefix = { cidr: "0.0.0.0/24", location: "westus" };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.customIPPrefixes.beginCreateOrUpdateAndWait(
    resourceGroupName,
    customIpPrefixName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createCustomIPPrefixAllocationMethod();
}

main().catch(console.error);
