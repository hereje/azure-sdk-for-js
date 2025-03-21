/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Synchronizes the DNS server settings used by the managed instances inside the given virtual cluster.
 *
 * @summary Synchronizes the DNS server settings used by the managed instances inside the given virtual cluster.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-05-01-preview/examples/UpdateVirtualClusterDnsServers.json
 */
async function performsUpdateOfDnsServersOnManagedInstance(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "sqlcrudtest-7398";
  const virtualClusterName = "VirtualCluster2b9a846b-2e37-43ef-a8e9-f2c6d645c1d7";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.virtualClusters.beginUpdateDnsServersAndWait(
    resourceGroupName,
    virtualClusterName,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await performsUpdateOfDnsServersOnManagedInstance();
}

main().catch(console.error);
