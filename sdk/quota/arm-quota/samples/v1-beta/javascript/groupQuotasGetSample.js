/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

const { AzureQuotaExtensionAPI } = require("@azure/arm-quota");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Gets the GroupQuotas for the name passed. It will return the GroupQuotas properties only. The details on group quota can be access from the group quota APIs.
 *
 * @summary Gets the GroupQuotas for the name passed. It will return the GroupQuotas properties only. The details on group quota can be access from the group quota APIs.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/preview/2024-12-18-preview/examples/GroupQuotas/GetGroupQuotas.json
 */
async function groupQuotasGetRequestForCompute() {
  const managementGroupId = "E7EC67B3-7657-4966-BFFC-41EFD36BAA09";
  const groupQuotaName = "groupquota1";
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential);
  const result = await client.groupQuotas.get(managementGroupId, groupQuotaName);
  console.log(result);
}

async function main() {
  await groupQuotasGetRequestForCompute();
}

main().catch(console.error);
