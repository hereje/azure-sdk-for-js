/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApplicationInsightsManagementClient } from "@azure/arm-appinsights";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Get all Application Insights web tests defined for the specified component.
 *
 * @summary Get all Application Insights web tests defined for the specified component.
 * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2015-05-01/examples/WebTestListByComponent.json
 */
async function webTestListByComponent(): Promise<void> {
  const subscriptionId = "subid";
  const componentName = "my-component";
  const resourceGroupName = "my-resource-group";
  const credential = new DefaultAzureCredential();
  const client = new ApplicationInsightsManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.webTests.listByComponent(
    componentName,
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

webTestListByComponent().catch(console.error);
