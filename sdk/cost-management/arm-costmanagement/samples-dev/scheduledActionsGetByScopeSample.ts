/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CostManagementClient } from "@azure/arm-costmanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get the shared scheduled action from the given scope by name.
 *
 * @summary Get the shared scheduled action from the given scope by name.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/scheduledActions/scheduledAction-get-shared.json
 */
async function scheduledActionByScope() {
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000";
  const name = "monthlyCostByResource";
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.scheduledActions.getByScope(scope, name);
  console.log(result);
}

async function main() {
  scheduledActionByScope();
}

main().catch(console.error);
