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
  AccessReviewDecisionProperties,
  AuthorizationManagementClient
} from "@azure/arm-authorization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Record a decision.
 *
 * @summary Record a decision.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2021-12-01-preview/examples/PatchAccessReviewInstanceMyDecisionById.json
 */
async function getAccessReviews() {
  const scheduleDefinitionId = "488a6d0e-0a63-4946-86e3-1f5bbc934661";
  const id = "4135f961-be78-4005-8101-c72a5af307a2";
  const decisionId = "fa73e90b-5bf1-45fd-a182-35ce5fc0674d";
  const properties: AccessReviewDecisionProperties = {};
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const result = await client.accessReviewInstanceMyDecisions.patch(
    scheduleDefinitionId,
    id,
    decisionId,
    properties
  );
  console.log(result);
}

async function main() {
  getAccessReviews();
}

main().catch(console.error);
