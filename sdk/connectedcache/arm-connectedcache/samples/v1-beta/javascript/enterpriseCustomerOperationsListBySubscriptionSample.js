// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ConnectedCacheClient } = require("@azure/arm-connectedcache");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to retrieves the properties of all ConnectedCaches
 *
 * @summary retrieves the properties of all ConnectedCaches
 * x-ms-original-file: 2023-05-01-preview/EnterpriseCustomerOperations_ListBySubscription_MaximumSet_Gen.json
 */
async function enterpriseCustomerOperationsListBySubscription() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const client = new ConnectedCacheClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.enterpriseCustomerOperations.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  enterpriseCustomerOperationsListBySubscription();
}

main().catch(console.error);
