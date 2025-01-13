/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ScheduledActionsListOptionalParams,
  CostManagementClient
} from "@azure/arm-costmanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List all private scheduled actions.
 *
 * @summary List all private scheduled actions.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/scheduledActions/scheduledActions-list-private.json
 */
async function privateScheduledActionsList() {
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.scheduledActions.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List all private scheduled actions.
 *
 * @summary List all private scheduled actions.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/scheduledActions/scheduledActions-listWithFilter-private.json
 */
async function privateScheduledActionsListFilterByViewId() {
  const filter =
    "properties/viewId eq '/providers/Microsoft.CostManagement/views/swaggerExample'";
  const options: ScheduledActionsListOptionalParams = { filter };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.scheduledActions.list(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  privateScheduledActionsList();
  privateScheduledActionsListFilterByViewId();
}

main().catch(console.error);
