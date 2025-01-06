/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import ContainerServiceManagementClient, {
  getLongRunningPoller,
  ManagedClustersUpdateTagsParameters,
} from "@azure-rest/arm-containerservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates tags on a managed cluster.
 *
 * @summary Updates tags on a managed cluster.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2022-05-02-preview/examples/ManagedClustersUpdateTags.json
 */
async function updateManagedClusterTags() {
  const subscriptionId = "subid1";
  const resourceGroupName = "rg1";
  const resourceName = "clustername1";
  const parameters: ManagedClustersUpdateTagsParameters = {
    body: {
      tags: { archv3: "", tier: "testing" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = ContainerServiceManagementClient(credential);
  const initialResponse = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{resourceName}",
      subscriptionId,
      resourceGroupName,
      resourceName,
    )
    .patch(parameters);
  const poller = await getLongRunningPoller(client, initialResponse);
  const result = poller.pollUntilDone();
  console.log(result);
}

updateManagedClusterTags().catch(console.error);
