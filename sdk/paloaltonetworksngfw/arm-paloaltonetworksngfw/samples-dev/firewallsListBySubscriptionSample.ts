/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { PaloAltoNetworksCloudngfw } from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List FirewallResource resources by subscription ID
 *
 * @summary List FirewallResource resources by subscription ID
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/Firewalls_ListBySubscription_MaximumSet_Gen.json
 */
async function firewallsListBySubscriptionMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] || "2bf4a339-294d-4c25-b0b2-ef649e9f5c27";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.firewalls.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List FirewallResource resources by subscription ID
 *
 * @summary List FirewallResource resources by subscription ID
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/Firewalls_ListBySubscription_MinimumSet_Gen.json
 */
async function firewallsListBySubscriptionMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["PALOALTONETWORKSNGFW_SUBSCRIPTION_ID"] || "2bf4a339-294d-4c25-b0b2-ef649e9f5c27";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.firewalls.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await firewallsListBySubscriptionMaximumSetGen();
  await firewallsListBySubscriptionMinimumSetGen();
}

main().catch(console.error);
