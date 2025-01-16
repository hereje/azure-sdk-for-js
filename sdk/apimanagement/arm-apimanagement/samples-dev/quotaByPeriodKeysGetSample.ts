/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the value of the quota counter associated with the counter-key in the policy for the specific period in service instance.
 *
 * @summary Gets the value of the quota counter associated with the counter-key in the policy for the specific period in service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementGetQuotaCounterKeysByQuotaPeriod.json
 */
async function apiManagementGetQuotaCounterKeysByQuotaPeriod(): Promise<void> {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const quotaCounterKey = "ba";
  const quotaPeriodKey = "0_P3Y6M4DT12H30M5S";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.quotaByPeriodKeys.get(
    resourceGroupName,
    serviceName,
    quotaCounterKey,
    quotaPeriodKey
  );
  console.log(result);
}

async function main(): Promise<void> {
  apiManagementGetQuotaCounterKeysByQuotaPeriod();
}

main().catch(console.error);
