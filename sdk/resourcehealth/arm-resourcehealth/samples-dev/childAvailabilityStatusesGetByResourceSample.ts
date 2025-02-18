/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ChildAvailabilityStatusesGetByResourceOptionalParams } from "@azure/arm-resourcehealth";
import { MicrosoftResourceHealth } from "@azure/arm-resourcehealth";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets current availability status for a single resource
 *
 * @summary Gets current availability status for a single resource
 * x-ms-original-file: specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/preview/2023-10-01-preview/examples/ChildAvailabilityStatus_GetByResource.json
 */
async function getChildCurrentHealthByResource(): Promise<void> {
  const resourceUri =
    "subscriptions/227b734f-e14f-4de6-b7fc-3190c21e69f6/resourceGroups/JUHACKETRHCTEST/providers/Microsoft.Compute/virtualMachineScaleSets/rhctest/virtualMachines/4";
  const expand = "recommendedactions";
  const options: ChildAvailabilityStatusesGetByResourceOptionalParams = {
    expand,
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftResourceHealth(credential);
  const result = await client.childAvailabilityStatuses.getByResource(resourceUri, options);
  console.log(result);
}

async function main(): Promise<void> {
  await getChildCurrentHealthByResource();
}

main().catch(console.error);
