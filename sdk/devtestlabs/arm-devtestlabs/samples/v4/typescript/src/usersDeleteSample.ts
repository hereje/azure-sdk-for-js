/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DevTestLabsClient } from "@azure/arm-devtestlabs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Delete user profile. This operation can take a while to complete.
 *
 * @summary Delete user profile. This operation can take a while to complete.
 * x-ms-original-file: specification/devtestlabs/resource-manager/Microsoft.DevTestLab/stable/2018-09-15/examples/Users_Delete.json
 */
async function usersDelete(): Promise<void> {
  const subscriptionId = "{subscriptionId}";
  const resourceGroupName = "resourceGroupName";
  const labName = "{devtestlabName}";
  const name = "{userName}";
  const credential = new DefaultAzureCredential();
  const client = new DevTestLabsClient(credential, subscriptionId);
  const result = await client.users.beginDeleteAndWait(
    resourceGroupName,
    labName,
    name
  );
  console.log(result);
}

usersDelete().catch(console.error);
