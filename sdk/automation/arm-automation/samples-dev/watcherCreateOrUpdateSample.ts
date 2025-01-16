/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Watcher, AutomationClient } from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create the watcher identified by watcher name.
 *
 * @summary Create the watcher identified by watcher name.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/createOrUpdateWatcher.json
 */
async function createOrUpdateWatcher(): Promise<void> {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "MyTestAutomationAccount";
  const watcherName = "MyTestWatcher";
  const parameters: Watcher = {
    type: undefined,
    description: "This is a test watcher.",
    etag: undefined,
    executionFrequencyInSeconds: 60,
    lastModifiedBy: undefined,
    location: undefined,
    scriptName: "MyTestWatcherRunbook",
    scriptParameters: {},
    scriptRunOn: "MyTestHybridWorkerGroup",
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.watcherOperations.createOrUpdate(
    resourceGroupName,
    automationAccountName,
    watcherName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  createOrUpdateWatcher();
}

main().catch(console.error);
