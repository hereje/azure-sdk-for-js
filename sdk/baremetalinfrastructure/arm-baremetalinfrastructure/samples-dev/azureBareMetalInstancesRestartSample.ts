/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BareMetalInfrastructureClient } from "@azure/arm-baremetalinfrastructure";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation to restart an Azure Bare Metal Instance
 *
 * @summary The operation to restart an Azure Bare Metal Instance
 * x-ms-original-file: specification/baremetalinfrastructure/resource-manager/Microsoft.BareMetalInfrastructure/preview/2023-08-04-preview/examples/AzureBareMetalInstances_Restart.json
 */
async function restartAnAzureBareMetalInstance(): Promise<void> {
  const subscriptionId =
    process.env["BAREMETALINFRASTRUCTURE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["BAREMETALINFRASTRUCTURE_RESOURCE_GROUP"] || "myResourceGroup";
  const azureBareMetalInstanceName = "myABMInstance";
  const credential = new DefaultAzureCredential();
  const client = new BareMetalInfrastructureClient(credential, subscriptionId);
  const result = await client.azureBareMetalInstances.beginRestartAndWait(
    resourceGroupName,
    azureBareMetalInstanceName
  );
  console.log(result);
}

async function main(): Promise<void> {
  restartAnAzureBareMetalInstance();
}

main().catch(console.error);
