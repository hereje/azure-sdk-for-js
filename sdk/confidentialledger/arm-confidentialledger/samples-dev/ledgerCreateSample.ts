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
  ConfidentialLedger,
  ConfidentialLedgerClient,
} from "@azure/arm-confidentialledger";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates a  Confidential Ledger with the specified ledger parameters.
 *
 * @summary Creates a  Confidential Ledger with the specified ledger parameters.
 * x-ms-original-file: specification/confidentialledger/resource-manager/Microsoft.ConfidentialLedger/preview/2023-06-28-preview/examples/ConfidentialLedger_Create.json
 */
async function confidentialLedgerCreate(): Promise<void> {
  const subscriptionId =
    process.env["CONFIDENTIALLEDGER_SUBSCRIPTION_ID"] ||
    "0000000-0000-0000-0000-000000000001";
  const resourceGroupName =
    process.env["CONFIDENTIALLEDGER_RESOURCE_GROUP"] ||
    "DummyResourceGroupName";
  const ledgerName = "DummyLedgerName";
  const confidentialLedger: ConfidentialLedger = {
    location: "EastUS",
    properties: {
      aadBasedSecurityPrincipals: [
        {
          ledgerRoleName: "Administrator",
          principalId: "34621747-6fc8-4771-a2eb-72f31c461f2e",
          tenantId: "bce123b9-2b7b-4975-8360-5ca0b9b1cd08",
        },
      ],
      certBasedSecurityPrincipals: [
        {
          cert: "-----BEGIN CERTIFICATE-----MIIBsjCCATigAwIBAgIUZWIbyG79TniQLd2UxJuU74tqrKcwCgYIKoZIzj0EAwMwEDEOMAwGA1UEAwwFdXNlcjAwHhcNMjEwMzE2MTgwNjExWhcNMjIwMzE2MTgwNjExWjAQMQ4wDAYDVQQDDAV1c2VyMDB2MBAGByqGSM49AgEGBSuBBAAiA2IABBiWSo/j8EFit7aUMm5lF+lUmCu+IgfnpFD+7QMgLKtxRJ3aGSqgS/GpqcYVGddnODtSarNE/HyGKUFUolLPQ5ybHcouUk0kyfA7XMeSoUA4lBz63Wha8wmXo+NdBRo39qNTMFEwHQYDVR0OBBYEFPtuhrwgGjDFHeUUT4nGsXaZn69KMB8GA1UdIwQYMBaAFPtuhrwgGjDFHeUUT4nGsXaZn69KMA8GA1UdEwEB/wQFMAMBAf8wCgYIKoZIzj0EAwMDaAAwZQIxAOnozm2CyqRwSSQLls5r+mUHRGRyXHXwYtM4Dcst/VEZdmS9fqvHRCHbjUlO/+HNfgIwMWZ4FmsjD3wnPxONOm9YdVn/PRD7SsPRPbOjwBiE4EBGaHDsLjYAGDSGi7NJnSkA-----END CERTIFICATE-----",
          ledgerRoleName: "Reader",
        },
      ],
      ledgerSku: "Standard",
      ledgerType: "Public",
    },
    tags: { additionalProps1: "additional properties" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ConfidentialLedgerClient(credential, subscriptionId);
  const result = await client.ledger.beginCreateAndWait(
    resourceGroupName,
    ledgerName,
    confidentialLedger,
  );
  console.log(result);
}

async function main(): Promise<void> {
  confidentialLedgerCreate();
}

main().catch(console.error);
