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
  DomainOwnershipIdentifier,
  WebSiteManagementClient,
} from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Creates an ownership identifier for a domain or updates identifier details for an existing identifier
 *
 * @summary Description for Creates an ownership identifier for a domain or updates identifier details for an existing identifier
 * x-ms-original-file: specification/web/resource-manager/Microsoft.DomainRegistration/stable/2023-12-01/examples/CreateAppServiceDomainOwnershipIdentifier.json
 */
async function createAppServiceDomainOwnershipIdentifier(): Promise<void> {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["APPSERVICE_RESOURCE_GROUP"] || "testrg123";
  const domainName = "example.com";
  const name = "SampleOwnershipId";
  const domainOwnershipIdentifier: DomainOwnershipIdentifier = {
    ownershipId: "SampleOwnershipId",
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.domains.createOrUpdateOwnershipIdentifier(
    resourceGroupName,
    domainName,
    name,
    domainOwnershipIdentifier,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createAppServiceDomainOwnershipIdentifier();
}

main().catch(console.error);
