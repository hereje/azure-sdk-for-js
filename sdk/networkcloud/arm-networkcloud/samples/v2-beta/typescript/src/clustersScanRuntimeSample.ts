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
  ClusterScanRuntimeParameters,
  ClustersScanRuntimeOptionalParams,
  NetworkCloud,
} from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Triggers the execution of a runtime protection scan to detect and remediate detected issues, in accordance with the cluster configuration.
 *
 * @summary Triggers the execution of a runtime protection scan to detect and remediate detected issues, in accordance with the cluster configuration.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2024-06-01-preview/examples/Clusters_ScanRuntime.json
 */
async function executeARuntimeProtectionScanOnTheCluster(): Promise<void> {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const clusterName = "clusterName";
  const clusterScanRuntimeParameters: ClusterScanRuntimeParameters = {
    scanActivity: "Scan",
  };
  const options: ClustersScanRuntimeOptionalParams = {
    clusterScanRuntimeParameters,
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.clusters.beginScanRuntimeAndWait(
    resourceGroupName,
    clusterName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  executeARuntimeProtectionScanOnTheCluster();
}

main().catch(console.error);
