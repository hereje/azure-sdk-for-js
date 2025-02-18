/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ScopedDeploymentWhatIf } from "@azure/arm-resources";
import { ResourceManagementClient } from "@azure/arm-resources";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Returns changes that will be made by the deployment if executed at the scope of the tenant group.
 *
 * @summary Returns changes that will be made by the deployment if executed at the scope of the tenant group.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Resources/stable/2021-04-01/examples/PostDeploymentWhatIfOnTenant.json
 */
async function predictTemplateChangesAtManagementGroupScope(): Promise<void> {
  const subscriptionId =
    process.env["RESOURCES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const deploymentName = "exampleDeploymentName";
  const parameters: ScopedDeploymentWhatIf = {
    location: "eastus",
    properties: { mode: "Incremental", parameters: {}, templateLink: {} },
  };
  const credential = new DefaultAzureCredential();
  const client = new ResourceManagementClient(credential, subscriptionId);
  const result = await client.deployments.beginWhatIfAtTenantScopeAndWait(
    deploymentName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await predictTemplateChangesAtManagementGroupScope();
}

main().catch(console.error);
