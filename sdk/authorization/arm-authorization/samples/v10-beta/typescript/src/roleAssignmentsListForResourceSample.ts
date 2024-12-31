/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AuthorizationManagementClient } from "@azure/arm-authorization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to List all role assignments that apply to a resource.
 *
 * @summary List all role assignments that apply to a resource.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/stable/2022-04-01/examples/RoleAssignments_ListForResource.json
 */
async function listRoleAssignmentsForAResource() {
  const subscriptionId =
    process.env["AUTHORIZATION_SUBSCRIPTION_ID"] ||
    "a925f2f7-5c63-4b7b-8799-25a5f97bc3b2";
  const resourceGroupName =
    process.env["AUTHORIZATION_RESOURCE_GROUP"] || "testrg";
  const resourceProviderNamespace = "Microsoft.DocumentDb";
  const resourceType = "databaseAccounts";
  const resourceName = "test-db-account";
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.roleAssignments.listForResource(
    resourceGroupName,
    resourceProviderNamespace,
    resourceType,
    resourceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listRoleAssignmentsForAResource();
}

main().catch(console.error);
