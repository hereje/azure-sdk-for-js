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
 * This sample demonstrates how to Get the specified role management policy for a resource scope
 *
 * @summary Get the specified role management policy for a resource scope
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2020-10-01-preview/examples/GetRoleManagementPolicyByName.json
 */
async function getRoleManagementPolicyByName(): Promise<void> {
  const scope =
    "providers/Microsoft.Subscription/subscriptions/129ff972-28f8-46b8-a726-e497be039368";
  const roleManagementPolicyName = "570c3619-7688-4b34-b290-2b8bb3ccab2a";
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const result = await client.roleManagementPolicies.get(
    scope,
    roleManagementPolicyName
  );
  console.log(result);
}

async function main(): Promise<void> {
  getRoleManagementPolicyByName();
}

main().catch(console.error);
