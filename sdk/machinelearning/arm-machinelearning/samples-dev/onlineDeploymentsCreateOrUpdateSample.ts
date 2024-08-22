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
  OnlineDeployment,
  AzureMachineLearningServicesManagementClient,
} from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update Inference Endpoint Deployment (asynchronous).
 *
 * @summary Create or update Inference Endpoint Deployment (asynchronous).
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/OnlineDeployment/KubernetesOnlineDeployment/createOrUpdate.json
 */
async function createOrUpdateKubernetesOnlineDeployment() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const endpointName = "testEndpointName";
  const deploymentName = "testDeploymentName";
  const body: OnlineDeployment = {
    identity: {
      type: "SystemAssigned",
      userAssignedIdentities: { string: {} },
    },
    kind: "string",
    location: "string",
    properties: {
      description: "string",
      appInsightsEnabled: false,
      codeConfiguration: { codeId: "string", scoringScript: "string" },
      containerResourceRequirements: {
        containerResourceLimits: { cpu: '"1"', gpu: '"1"', memory: '"2Gi"' },
        containerResourceRequests: { cpu: '"1"', gpu: '"1"', memory: '"2Gi"' },
      },
      endpointComputeType: "Kubernetes",
      environmentId: "string",
      environmentVariables: { string: "string" },
      instanceType: "string",
      livenessProbe: {
        failureThreshold: 1,
        initialDelay: "PT5M",
        period: "PT5M",
        successThreshold: 1,
        timeout: "PT5M",
      },
      model: "string",
      modelMountPath: "string",
      properties: { string: "string" },
      requestSettings: {
        maxConcurrentRequestsPerInstance: 1,
        maxQueueWait: "PT5M",
        requestTimeout: "PT5M",
      },
      scaleSettings: { scaleType: "Default" },
    },
    sku: {
      name: "string",
      capacity: 1,
      family: "string",
      size: "string",
      tier: "Free",
    },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.onlineDeployments.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    endpointName,
    deploymentName,
    body,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update Inference Endpoint Deployment (asynchronous).
 *
 * @summary Create or update Inference Endpoint Deployment (asynchronous).
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/OnlineDeployment/ManagedOnlineDeployment/createOrUpdate.json
 */
async function createOrUpdateManagedOnlineDeployment() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const endpointName = "testEndpointName";
  const deploymentName = "testDeploymentName";
  const body: OnlineDeployment = {
    identity: {
      type: "SystemAssigned",
      userAssignedIdentities: { string: {} },
    },
    kind: "string",
    location: "string",
    properties: {
      description: "string",
      appInsightsEnabled: false,
      codeConfiguration: { codeId: "string", scoringScript: "string" },
      endpointComputeType: "Managed",
      environmentId: "string",
      environmentVariables: { string: "string" },
      instanceType: "string",
      livenessProbe: {
        failureThreshold: 1,
        initialDelay: "PT5M",
        period: "PT5M",
        successThreshold: 1,
        timeout: "PT5M",
      },
      model: "string",
      modelMountPath: "string",
      properties: { string: "string" },
      readinessProbe: {
        failureThreshold: 30,
        initialDelay: "PT1S",
        period: "PT10S",
        successThreshold: 1,
        timeout: "PT2S",
      },
      requestSettings: {
        maxConcurrentRequestsPerInstance: 1,
        maxQueueWait: "PT5M",
        requestTimeout: "PT5M",
      },
      scaleSettings: { scaleType: "Default" },
    },
    sku: {
      name: "string",
      capacity: 1,
      family: "string",
      size: "string",
      tier: "Free",
    },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.onlineDeployments.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    endpointName,
    deploymentName,
    body,
  );
  console.log(result);
}

async function main() {
  createOrUpdateKubernetesOnlineDeployment();
  createOrUpdateManagedOnlineDeployment();
}

main().catch(console.error);
