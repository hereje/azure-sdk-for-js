// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { NetworkWatchersGetTopologyParameters } from "@azure-rest/arm-network";
import createNetworkManagementClient from "@azure-rest/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the current network topology by resource group.
 *
 * @summary Gets the current network topology by resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-05-01/examples/NetworkWatcherTopologyGet.json
 */
async function getTopology(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = createNetworkManagementClient(credential);
  const subscriptionId = "";
  const resourceGroupName = "rg1";
  const networkWatcherName = "nw1";
  const options: NetworkWatchersGetTopologyParameters = {
    body: { targetResourceGroupName: "rg2" },
    queryParameters: { "api-version": "2022-05-01" },
  };
  const result = await client
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkWatchers/{networkWatcherName}/topology",
      subscriptionId,
      resourceGroupName,
      networkWatcherName,
    )
    .post(options);
  console.log(result);
}

getTopology().catch(console.error);
