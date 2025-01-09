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
  ListAccessRequestModel,
  ConfluentManagementClient,
} from "@azure/arm-confluent";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Organization accounts invitation details
 *
 * @summary Organization accounts invitation details
 * x-ms-original-file: specification/confluent/resource-manager/Microsoft.Confluent/stable/2024-02-13/examples/Access_InvitationsList.json
 */
async function accessInvitationsList() {
  const subscriptionId =
    process.env["CONFLUENT_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONFLUENT_RESOURCE_GROUP"] || "myResourceGroup";
  const organizationName = "myOrganization";
  const body: ListAccessRequestModel = {
    searchFilters: {
      pageSize: "10",
      pageToken: "asc4fts4ft",
      status: "INVITE_STATUS_SENT",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ConfluentManagementClient(credential, subscriptionId);
  const result = await client.access.listInvitations(
    resourceGroupName,
    organizationName,
    body,
  );
  console.log(result);
}

async function main() {
  accessInvitationsList();
}

main().catch(console.error);
