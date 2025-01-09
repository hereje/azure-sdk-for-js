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
  OrganizationListEnvironmentsOptionalParams,
  ConfluentManagementClient,
} from "@azure/arm-confluent";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists of all the environments in a organization
 *
 * @summary Lists of all the environments in a organization
 * x-ms-original-file: specification/confluent/resource-manager/Microsoft.Confluent/stable/2024-02-13/examples/Organization_EnvironmentList.json
 */
async function organizationListEnvironments() {
  const subscriptionId =
    process.env["CONFLUENT_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONFLUENT_RESOURCE_GROUP"] || "myResourceGroup";
  const organizationName = "myOrganization";
  const pageSize = 10;
  const options: OrganizationListEnvironmentsOptionalParams = { pageSize };
  const credential = new DefaultAzureCredential();
  const client = new ConfluentManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.organization.listEnvironments(
    resourceGroupName,
    organizationName,
    options,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  organizationListEnvironments();
}

main().catch(console.error);
