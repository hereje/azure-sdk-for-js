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
  VirtualMachineInstance,
  VirtualMachineInstancesCreateOrUpdateOptionalParams,
  AzureArcVMwareManagementServiceAPI
} from "@azure/arm-connectedvmware";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation.
 *
 * @summary The operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation.
 * x-ms-original-file: specification/connectedvmware/resource-manager/Microsoft.ConnectedVMwarevSphere/stable/2023-10-01/examples/CreateVirtualMachineInstance.json
 */
async function createVirtualMachine() {
  const resourceUri =
    "subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.HybridCompute/machines/DemoVM";
  const body: VirtualMachineInstance = {
    extendedLocation: {
      name:
        "/subscriptions/a5015e1c-867f-4533-8541-85cd470d0cfb/resourceGroups/demoRG/providers/Microsoft.ExtendedLocation/customLocations/contoso",
      type: "customLocation"
    },
    hardwareProfile: { memorySizeMB: 4196, numCPUs: 4 },
    infrastructureProfile: {
      templateId:
        "/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VirtualMachineTemplates/WebFrontEndTemplate",
      vCenterId:
        "/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/VCenters/ContosoVCenter"
    },
    placementProfile: {
      resourcePoolId:
        "/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ConnectedVMwarevSphere/ResourcePools/HRPool"
    }
  };
  const options: VirtualMachineInstancesCreateOrUpdateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new AzureArcVMwareManagementServiceAPI(credential);
  const result = await client.virtualMachineInstances.beginCreateOrUpdateAndWait(
    resourceUri,
    options
  );
  console.log(result);
}

async function main() {
  createVirtualMachine();
}

main().catch(console.error);
