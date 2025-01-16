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
  DaprSubscription,
  ContainerAppsAPIClient,
} from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a Dapr subscription in a Managed Environment.
 *
 * @summary Creates or updates a Dapr subscription in a Managed Environment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/DaprSubscriptions_CreateOrUpdate_BulkSubscribeAndScopes.json
 */
async function createOrUpdateDaprSubscriptionWithBulkSubscribeConfigurationAndScopes(): Promise<void> {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "examplerg";
  const environmentName = "myenvironment";
  const name = "mysubscription";
  const daprSubscriptionEnvelope: DaprSubscription = {
    bulkSubscribe: {
      enabled: true,
      maxAwaitDurationMs: 500,
      maxMessagesCount: 123,
    },
    pubsubName: "mypubsubcomponent",
    routes: { default: "/products" },
    scopes: ["warehouseapp", "customersupportapp"],
    topic: "inventory",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.daprSubscriptions.createOrUpdate(
    resourceGroupName,
    environmentName,
    name,
    daprSubscriptionEnvelope,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a Dapr subscription in a Managed Environment.
 *
 * @summary Creates or updates a Dapr subscription in a Managed Environment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/DaprSubscriptions_CreateOrUpdate_DefaultRoute.json
 */
async function createOrUpdateDaprSubscriptionWithDefaultRouteOnly(): Promise<void> {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "examplerg";
  const environmentName = "myenvironment";
  const name = "mysubscription";
  const daprSubscriptionEnvelope: DaprSubscription = {
    pubsubName: "mypubsubcomponent",
    routes: { default: "/products" },
    topic: "inventory",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.daprSubscriptions.createOrUpdate(
    resourceGroupName,
    environmentName,
    name,
    daprSubscriptionEnvelope,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a Dapr subscription in a Managed Environment.
 *
 * @summary Creates or updates a Dapr subscription in a Managed Environment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/DaprSubscriptions_CreateOrUpdate_RouteRulesAndMetadata.json
 */
async function createOrUpdateDaprSubscriptionWithRouteRulesAndMetadata(): Promise<void> {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "examplerg";
  const environmentName = "myenvironment";
  const name = "mysubscription";
  const daprSubscriptionEnvelope: DaprSubscription = {
    metadata: { foo: "bar", hello: "world" },
    pubsubName: "mypubsubcomponent",
    routes: {
      default: "/products",
      rules: [
        { path: "/widgets", match: "event.type == 'widget'" },
        { path: "/gadgets", match: "event.type == 'gadget'" },
      ],
    },
    topic: "inventory",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.daprSubscriptions.createOrUpdate(
    resourceGroupName,
    environmentName,
    name,
    daprSubscriptionEnvelope,
  );
  console.log(result);
}

async function main(): Promise<void> {
  createOrUpdateDaprSubscriptionWithBulkSubscribeConfigurationAndScopes();
  createOrUpdateDaprSubscriptionWithDefaultRouteOnly();
  createOrUpdateDaprSubscriptionWithRouteRulesAndMetadata();
}

main().catch(console.error);
