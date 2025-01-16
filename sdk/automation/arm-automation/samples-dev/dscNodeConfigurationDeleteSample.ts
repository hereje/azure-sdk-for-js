/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AutomationClient } from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Delete the Dsc node configurations by node configuration.
 *
 * @summary Delete the Dsc node configurations by node configuration.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/deleteDscNodeConfiguration.json
 */
async function deleteADscNodeConfiguration(): Promise<void> {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "myAutomationAccount20";
  const nodeConfigurationName = "configName.nodeConfigName";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.dscNodeConfigurationOperations.delete(
    resourceGroupName,
    automationAccountName,
    nodeConfigurationName
  );
  console.log(result);
}

async function main(): Promise<void> {
  deleteADscNodeConfiguration();
}

main().catch(console.error);
