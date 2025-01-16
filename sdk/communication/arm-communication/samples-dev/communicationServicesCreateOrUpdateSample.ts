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
  CommunicationServiceResource,
  CommunicationServiceManagementClient,
} from "@azure/arm-communication";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a new CommunicationService or update an existing CommunicationService.
 *
 * @summary Create a new CommunicationService or update an existing CommunicationService.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/stable/2023-04-01/examples/communicationServices/createOrUpdate.json
 */
async function createOrUpdateResource(): Promise<void> {
  const subscriptionId =
    process.env["COMMUNICATION_SUBSCRIPTION_ID"] ||
    "11112222-3333-4444-5555-666677778888";
  const resourceGroupName =
    process.env["COMMUNICATION_RESOURCE_GROUP"] || "MyResourceGroup";
  const communicationServiceName = "MyCommunicationResource";
  const parameters: CommunicationServiceResource = {
    dataLocation: "United States",
    location: "Global",
  };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.communicationServices.beginCreateOrUpdateAndWait(
    resourceGroupName,
    communicationServiceName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a new CommunicationService or update an existing CommunicationService.
 *
 * @summary Create a new CommunicationService or update an existing CommunicationService.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/stable/2023-04-01/examples/communicationServices/createOrUpdateWithSystemAssignedIdentity.json
 */
async function createOrUpdateResourceWithManagedIdentity(): Promise<void> {
  const subscriptionId =
    process.env["COMMUNICATION_SUBSCRIPTION_ID"] ||
    "11112222-3333-4444-5555-666677778888";
  const resourceGroupName =
    process.env["COMMUNICATION_RESOURCE_GROUP"] || "MyResourceGroup";
  const communicationServiceName = "MyCommunicationResource";
  const parameters: CommunicationServiceResource = {
    dataLocation: "United States",
    identity: { type: "SystemAssigned" },
    location: "Global",
  };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.communicationServices.beginCreateOrUpdateAndWait(
    resourceGroupName,
    communicationServiceName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createOrUpdateResource();
  createOrUpdateResourceWithManagedIdentity();
}

main().catch(console.error);
