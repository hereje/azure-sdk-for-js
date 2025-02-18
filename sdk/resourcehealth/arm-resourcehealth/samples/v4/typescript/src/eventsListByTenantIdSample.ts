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
  EventsListByTenantIdOptionalParams,
  MicrosoftResourceHealth
} from "@azure/arm-resourcehealth";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists current service health events in the tenant.
 *
 * @summary Lists current service health events in the tenant.
 * x-ms-original-file: specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/stable/2022-10-01/examples/Events_ListByTenantId.json
 */
async function listEventsByTenantId(): Promise<void> {
  const subscriptionId =
    process.env["RESOURCEHEALTH_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const filter = "service eq 'Virtual Machines' or region eq 'West US'";
  const queryStartTime = "7/24/2020";
  const options: EventsListByTenantIdOptionalParams = {
    filter,
    queryStartTime
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftResourceHealth(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.eventsOperations.listByTenantId(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  listEventsByTenantId();
}

main().catch(console.error);
