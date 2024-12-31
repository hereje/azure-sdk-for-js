/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AuthorizationManagementClient } from "@azure/arm-authorization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists the accessReviewHistoryDefinitions available from this provider, definition instances are only available for 30 days after creation.
 *
 * @summary Lists the accessReviewHistoryDefinitions available from this provider, definition instances are only available for 30 days after creation.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2021-12-01-preview/examples/GetAccessReviewHistoryDefinitions.json
 */
async function getAccessReviewHistoryDefinitions() {
  const scope = "subscriptions/129a304b-4aea-4b86-a9f7-ba7e2b23737a";
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const resArray = new Array();
  for await (let item of client.scopeAccessReviewHistoryDefinitions.list(
    scope
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  getAccessReviewHistoryDefinitions();
}

main().catch(console.error);
