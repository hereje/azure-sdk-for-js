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
  Disk,
  ComputeManagementClient
} from "@azure/arm-compute-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2019-07-01/examples/CreateAManagedDiskByCopyingASnapshot.json
 */
async function createAManagedDiskByCopyingASnapshot() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "Copy",
      sourceResourceId:
        "subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot"
    },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2019-07-01/examples/CreateAManagedDiskByImportingAnUnmanagedBlobFromADifferentSubscription.json
 */
async function createAManagedDiskByImportingAnUnmanagedBlobFromADifferentSubscription() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "Import",
      sourceUri:
        "https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd",
      storageAccountId:
        "subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/myStorageAccount"
    },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2019-07-01/examples/CreateAManagedDiskByImportingAnUnmanagedBlobFromTheSameSubscription.json
 */
async function createAManagedDiskByImportingAnUnmanagedBlobFromTheSameSubscription() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "Import",
      sourceUri:
        "https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd"
    },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2019-07-01/examples/CreateAManagedDiskFromAPlatformImage.json
 */
async function createAManagedDiskFromAPlatformImage() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: {
      createOption: "FromImage",
      imageReference: {
        id:
          "/Subscriptions/{subscriptionId}/Providers/Microsoft.Compute/Locations/uswest/Publishers/Microsoft/ArtifactTypes/VMImage/Offers/{offer}"
      }
    },
    location: "West US",
    osType: "Windows"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2019-07-01/examples/CreateAManagedDiskFromAnExistingManagedDisk.json
 */
async function createAManagedDiskFromAnExistingManagedDiskInTheSameOrDifferentSubscription() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk2";
  const disk: Disk = {
    creationData: {
      createOption: "Copy",
      sourceResourceId:
        "subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/myDisk1"
    },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2019-07-01/examples/CreateAManagedUploadDisk.json
 */
async function createAManagedUploadDisk() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Upload", uploadSizeBytes: 10737418752 },
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a disk.
 *
 * @summary Creates or updates a disk.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2019-07-01/examples/CreateAnEmptyManagedDisk.json
 */
async function createAnEmptyManagedDisk() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const diskName = "myDisk";
  const disk: Disk = {
    creationData: { createOption: "Empty" },
    diskSizeGB: 200,
    location: "West US"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.disks.beginCreateOrUpdateAndWait(
    resourceGroupName,
    diskName,
    disk
  );
  console.log(result);
}

async function main() {
  createAManagedDiskByCopyingASnapshot();
  createAManagedDiskByImportingAnUnmanagedBlobFromADifferentSubscription();
  createAManagedDiskByImportingAnUnmanagedBlobFromTheSameSubscription();
  createAManagedDiskFromAPlatformImage();
  createAManagedDiskFromAnExistingManagedDiskInTheSameOrDifferentSubscription();
  createAManagedUploadDisk();
  createAnEmptyManagedDisk();
}

main().catch(console.error);
