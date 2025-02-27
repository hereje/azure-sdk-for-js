/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { AzureQuotaExtensionAPI } from "@azure/arm-quota";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get API to check the status of a subscriptionIds request by requestId.  Use the polling API - OperationsStatus URI specified in Azure-AsyncOperation header field, with retry-after duration in seconds to check the intermediate status. This API provides the finals status with the request details and status.
 *
 * @summary Get API to check the status of a subscriptionIds request by requestId.  Use the polling API - OperationsStatus URI specified in Azure-AsyncOperation header field, with retry-after duration in seconds to check the intermediate status. This API provides the finals status with the request details and status.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/stable/2025-03-01/examples/SubscriptionRequests/SubscriptionRequests_Get.json
 */
async function groupQuotaSubscriptionRequestsGet(): Promise<void> {
  const managementGroupId = "E7EC67B3-7657-4966-BFFC-41EFD36BAA09";
  const groupQuotaName = "groupquota1";
  const requestId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential);
  const result = await client.groupQuotaSubscriptionRequests.get(
    managementGroupId,
    groupQuotaName,
    requestId,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await groupQuotaSubscriptionRequestsGet();
}

main().catch(console.error);
