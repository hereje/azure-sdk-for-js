/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Patch, BillingManagementClient } from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update reservation by billing account.
 *
 * @summary Update reservation by billing account.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/reservationUpdateByBillingAccount.json
 */
async function reservationUpdate(): Promise<void> {
  const billingAccountName =
    "00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2019-05-31";
  const reservationOrderId = "20000000-0000-0000-0000-000000000000";
  const reservationId = "30000000-0000-0000-0000-000000000000";
  const body: Patch = { displayName: "NewName" };
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result = await client.reservations.beginUpdateByBillingAccountAndWait(
    billingAccountName,
    reservationOrderId,
    reservationId,
    body,
  );
  console.log(result);
}

async function main(): Promise<void> {
  reservationUpdate();
}

main().catch(console.error);
