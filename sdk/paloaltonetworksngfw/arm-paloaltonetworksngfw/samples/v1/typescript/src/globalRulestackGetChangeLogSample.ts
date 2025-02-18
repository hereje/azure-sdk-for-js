/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PaloAltoNetworksCloudngfw } from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get changelog
 *
 * @summary Get changelog
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/GlobalRulestack_getChangeLog_MaximumSet_Gen.json
 */
async function globalRulestackGetChangeLogMaximumSetGen(): Promise<void> {
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.globalRulestack.getChangeLog(globalRulestackName);
  console.log(result);
}

/**
 * This sample demonstrates how to Get changelog
 *
 * @summary Get changelog
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/GlobalRulestack_getChangeLog_MinimumSet_Gen.json
 */
async function globalRulestackGetChangeLogMinimumSetGen(): Promise<void> {
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.globalRulestack.getChangeLog(globalRulestackName);
  console.log(result);
}

async function main(): Promise<void> {
  globalRulestackGetChangeLogMaximumSetGen();
  globalRulestackGetChangeLogMinimumSetGen();
}

main().catch(console.error);
