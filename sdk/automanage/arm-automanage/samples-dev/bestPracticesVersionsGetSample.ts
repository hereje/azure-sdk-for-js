/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AutomanageClient } from "@azure/arm-automanage";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get information about a Automanage best practice version
 *
 * @summary Get information about a Automanage best practice version
 * x-ms-original-file: specification/automanage/resource-manager/Microsoft.Automanage/stable/2022-05-04/examples/getBestPracticeVersion.json
 */
async function getAnAutomanageBestPracticeVersion(): Promise<void> {
  const subscriptionId =
    process.env["AUTOMANAGE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const bestPracticeName = "azureBestPracticesProduction";
  const versionName = "version1";
  const credential = new DefaultAzureCredential();
  const client = new AutomanageClient(credential, subscriptionId);
  const result = await client.bestPracticesVersions.get(
    bestPracticeName,
    versionName
  );
  console.log(result);
}

async function main(): Promise<void> {
  getAnAutomanageBestPracticeVersion();
}

main().catch(console.error);
