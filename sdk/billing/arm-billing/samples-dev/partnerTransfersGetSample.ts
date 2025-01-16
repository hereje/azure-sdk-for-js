/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BillingManagementClient } from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a transfer request by ID. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 *
 * @summary Gets a transfer request by ID. The operation is supported only for billing accounts with agreement type Microsoft Partner Agreement.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/partnerTransfersGet.json
 */
async function partnerTransferGet(): Promise<void> {
  const billingAccountName =
    "10000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2019-05-31";
  const billingProfileName = "xxxx-xxxx-xxx-xxx";
  const customerName = "11111111-1111-1111-1111-111111111111";
  const transferName = "aabb123";
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result = await client.partnerTransfers.get(
    billingAccountName,
    billingProfileName,
    customerName,
    transferName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  partnerTransferGet();
}

main().catch(console.error);
