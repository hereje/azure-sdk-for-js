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
  DiskEncryptionSetUpdate,
  ComputeManagementClient
} from "@azure/arm-compute-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates (patches) a disk encryption set.
 *
 * @summary Updates (patches) a disk encryption set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2019-07-01/examples/UpdateADiskEncryptionSet.json
 */
async function updateADiskEncryptionSet() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskEncryptionSetName = "myDiskEncryptionSet";
  const diskEncryptionSet: DiskEncryptionSetUpdate = {
    activeKey: {
      keyUrl: "https://myvmvault.vault-int.azure-int.net/keys/{key}",
      sourceVault: {
        id:
          "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.KeyVault/vaults/myVMVault"
      }
    },
    tags: { department: "Development", project: "Encryption" }
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.diskEncryptionSets.beginUpdateAndWait(
    resourceGroupName,
    diskEncryptionSetName,
    diskEncryptionSet
  );
  console.log(result);
}

async function main() {
  updateADiskEncryptionSet();
}

main().catch(console.error);
