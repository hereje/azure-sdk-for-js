/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  DocumentDownloadRequest,
  BillingManagementClient,
} from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets a URL to download multiple invoice documents (invoice pdf, tax receipts, credit notes) as a zip file. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 *
 * @summary Gets a URL to download multiple invoice documents (invoice pdf, tax receipts, credit notes) as a zip file. The operation is supported for billing accounts with agreement type Microsoft Partner Agreement or Microsoft Customer Agreement.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/invoicesDownloadDocumentsByBillingAccount.json
 */
async function invoicesDownloadDocumentsByBillingAccount() {
  const billingAccountName =
    "00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2019-05-31";
  const parameters: DocumentDownloadRequest[] = [
    { documentName: "12345678", invoiceName: "G123456789" },
    { documentName: "12345678", invoiceName: "G987654321" },
  ];
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result =
    await client.invoices.beginDownloadDocumentsByBillingAccountAndWait(
      billingAccountName,
      parameters,
    );
  console.log(result);
}

async function main() {
  invoicesDownloadDocumentsByBillingAccount();
}

main().catch(console.error);
