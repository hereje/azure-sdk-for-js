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
 * This sample demonstrates how to Gets provider operations metadata for the specified resource provider.
 *
 * @summary Gets provider operations metadata for the specified resource provider.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/stable/2022-04-01/examples/GetProviderOperationsRP.json
 */
async function listProviderOperationsMetadataForResourceProvider(): Promise<void> {
  const resourceProviderNamespace = "resourceProviderNamespace";
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const result = await client.providerOperationsMetadataOperations.get(
    resourceProviderNamespace
  );
  console.log(result);
}

async function main(): Promise<void> {
  listProviderOperationsMetadataForResourceProvider();
}

main().catch(console.error);
