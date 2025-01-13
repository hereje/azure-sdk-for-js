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
  ScheduledAction,
  ScheduledActionsCreateOrUpdateByScopeOptionalParams,
  CostManagementClient
} from "@azure/arm-costmanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update a shared scheduled action within the given scope.
 *
 * @summary Create or update a shared scheduled action within the given scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/scheduledActions/scheduledAction-insightAlert-createOrUpdate-shared.json
 */
async function createOrUpdateInsightAlertScheduledActionByScope() {
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000";
  const name = "dailyAnomalyByResource";
  const ifMatch = "";
  const scheduledAction: ScheduledAction = {
    displayName: "Daily anomaly by resource",
    kind: "InsightAlert",
    notification: {
      subject: "Cost anomaly detected in the resource",
      to: ["user@gmail.com", "team@gmail.com"]
    },
    schedule: {
      endDate: new Date("2021-06-19T22:21:51.1287144Z"),
      frequency: "Daily",
      startDate: new Date("2020-06-19T22:21:51.1287144Z")
    },
    status: "Enabled",
    viewId: "/providers/Microsoft.CostManagement/views/swaggerExample"
  };
  const options: ScheduledActionsCreateOrUpdateByScopeOptionalParams = {
    ifMatch
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.scheduledActions.createOrUpdateByScope(
    scope,
    name,
    scheduledAction,
    options
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a shared scheduled action within the given scope.
 *
 * @summary Create or update a shared scheduled action within the given scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/scheduledActions/scheduledAction-createOrUpdate-shared.json
 */
async function createOrUpdateScheduledActionByScope() {
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000";
  const name = "monthlyCostByResource";
  const ifMatch = "";
  const scheduledAction: ScheduledAction = {
    displayName: "Monthly Cost By Resource",
    fileDestination: { fileFormats: ["Csv"] },
    kind: "Email",
    notification: {
      subject: "Cost by resource this month",
      to: ["user@gmail.com", "team@gmail.com"]
    },
    schedule: {
      daysOfWeek: ["Monday"],
      endDate: new Date("2021-06-19T22:21:51.1287144Z"),
      frequency: "Monthly",
      hourOfDay: 10,
      startDate: new Date("2020-06-19T22:21:51.1287144Z"),
      weeksOfMonth: ["First", "Third"]
    },
    status: "Enabled",
    viewId: "/providers/Microsoft.CostManagement/views/swaggerExample"
  };
  const options: ScheduledActionsCreateOrUpdateByScopeOptionalParams = {
    ifMatch
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.scheduledActions.createOrUpdateByScope(
    scope,
    name,
    scheduledAction,
    options
  );
  console.log(result);
}

async function main() {
  createOrUpdateInsightAlertScheduledActionByScope();
  createOrUpdateScheduledActionByScope();
}

main().catch(console.error);
