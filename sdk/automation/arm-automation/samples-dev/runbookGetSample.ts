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
 * This sample demonstrates how to Retrieve the runbook identified by runbook name.
 *
 * @summary Retrieve the runbook identified by runbook name.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2018-06-30/examples/getRunbook.json
 */
async function getRunbook(): Promise<void> {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "ContoseAutomationAccount";
  const runbookName = "Get-AzureVMTutorial";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.runbookOperations.get(
    resourceGroupName,
    automationAccountName,
    runbookName
  );
  console.log(result);
}

async function main(): Promise<void> {
  getRunbook();
}

main().catch(console.error);
