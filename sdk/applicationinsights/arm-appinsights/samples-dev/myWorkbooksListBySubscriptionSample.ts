/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApplicationInsightsManagementClient } from "@azure/arm-appinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get all private workbooks defined within a specified subscription and category.
 *
 * @summary Get all private workbooks defined within a specified subscription and category.
 * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2021-03-08/examples/MyWorkbooksList.json
 */
async function workbooksList(): Promise<void> {
  const subscriptionId = "6b643656-33eb-422f-aee8-3ac145d124af";
  const category = "workbook";
  const credential = new DefaultAzureCredential();
  const client = new ApplicationInsightsManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.myWorkbooks.listBySubscription(category)) {
    resArray.push(item);
  }
  console.log(resArray);
}

workbooksList().catch(console.error);

/**
 * This sample demonstrates how to Get all private workbooks defined within a specified subscription and category.
 *
 * @summary Get all private workbooks defined within a specified subscription and category.
 * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2021-03-08/examples/MyWorkbooksList2.json
 */
async function workbooksList2(): Promise<void> {
  const subscriptionId = "6b643656-33eb-422f-aee8-3ac145d124af";
  const category = "workbook";
  const credential = new DefaultAzureCredential();
  const client = new ApplicationInsightsManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.myWorkbooks.listBySubscription(category)) {
    resArray.push(item);
  }
  console.log(resArray);
}

workbooksList2().catch(console.error);
