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
 * This sample demonstrates how to Gets a list of web test locations available to this Application Insights component.
 *
 * @summary Gets a list of web test locations available to this Application Insights component.
 * x-ms-original-file: specification/applicationinsights/resource-manager/Microsoft.Insights/stable/2015-05-01/examples/WebTestLocationsList.json
 */
async function webTestLocationsList(): Promise<void> {
  const subscriptionId = "subid";
  const resourceGroupName = "my-resource-group";
  const resourceName = "my-component";
  const credential = new DefaultAzureCredential();
  const client = new ApplicationInsightsManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (let item of client.webTestLocations.list(
    resourceGroupName,
    resourceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

webTestLocationsList().catch(console.error);
