/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { VirtualMachine } from "@azure/arm-vmwarecloudsimple";
import { VMwareCloudSimple } from "@azure/arm-vmwarecloudsimple";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create Or Update Virtual Machine
 *
 * @summary Create Or Update Virtual Machine
 * x-ms-original-file: specification/vmwarecloudsimple/resource-manager/Microsoft.VMwareCloudSimple/stable/2019-04-01/examples/CreateVirtualMachine.json
 */
async function createVirtualMachine(): Promise<void> {
  const subscriptionId = process.env["VMWARECLOUDSIMPLE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["VMWARECLOUDSIMPLE_RESOURCE_GROUP"] || "myResourceGroup";
  const referer = "https://management.azure.com/";
  const virtualMachineName = "myVirtualMachine";
  const virtualMachineRequest: VirtualMachine = {
    amountOfRam: 4096,
    disks: [
      {
        controllerId: "1000",
        independenceMode: "persistent",
        totalSize: 10485760,
        virtualDiskId: "2000",
      },
    ],
    location: "westus2",
    nics: [
      {
        network: {
          id: "/subscriptions/{subscription-id}/providers/Microsoft.VMwareCloudSimple/locations/westus2/privateClouds/myPrivateCloud/virtualNetworks/dvportgroup-19",
        },
        nicType: "E1000",
        powerOnBoot: true,
        virtualNicId: "4000",
      },
    ],
    numberOfCores: 2,
    privateCloudId:
      "/subscriptions/{subscription-id}/providers/Microsoft.VMwareCloudSimple/locations/westus2/privateClouds/myPrivateCloud",
    resourcePool: {
      id: "/subscriptions/{subscription-id}/providers/Microsoft.VMwareCloudSimple/locations/westus2/privateClouds/myPrivateCloud/resourcePools/resgroup-26",
    },
    templateId:
      "/subscriptions/{subscription-id}/providers/Microsoft.VMwareCloudSimple/locations/westus2/privateClouds/myPrivateCloud/virtualMachineTemplates/vm-34",
  };
  const credential = new DefaultAzureCredential();
  const client = new VMwareCloudSimple(credential, subscriptionId);
  const result = await client.virtualMachines.beginCreateOrUpdateAndWait(
    resourceGroupName,
    referer,
    virtualMachineName,
    virtualMachineRequest,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createVirtualMachine();
}

main().catch(console.error);
