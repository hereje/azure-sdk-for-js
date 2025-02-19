/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ServerSecurityAlertPolicy } from "@azure/arm-postgresql";
import { PostgreSQLManagementClient } from "@azure/arm-postgresql";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates a threat detection policy.
 *
 * @summary Creates or updates a threat detection policy.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2017-12-01/examples/ServerSecurityAlertsCreateMax.json
 */
async function updateAServerThreatDetectionPolicyWithAllParameters(): Promise<void> {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "securityalert-4799";
  const serverName = "securityalert-6440";
  const securityAlertPolicyName = "Default";
  const parameters: ServerSecurityAlertPolicy = {
    disabledAlerts: ["Access_Anomaly", "Usage_Anomaly"],
    emailAccountAdmins: true,
    emailAddresses: ["testSecurityAlert@microsoft.com"],
    retentionDays: 5,
    state: "Enabled",
    storageAccountAccessKey:
      "sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD==",
    storageEndpoint: "https://mystorage.blob.core.windows.net",
  };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementClient(credential, subscriptionId);
  const result = await client.serverSecurityAlertPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    securityAlertPolicyName,
    parameters,
  );
  console.log(result);
}

updateAServerThreatDetectionPolicyWithAllParameters().catch(console.error);

/**
 * This sample demonstrates how to Creates or updates a threat detection policy.
 *
 * @summary Creates or updates a threat detection policy.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2017-12-01/examples/ServerSecurityAlertsCreateMin.json
 */
async function updateAServerThreatDetectionPolicyWithMinimalParameters(): Promise<void> {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "securityalert-4799";
  const serverName = "securityalert-6440";
  const securityAlertPolicyName = "Default";
  const parameters: ServerSecurityAlertPolicy = {
    emailAccountAdmins: true,
    state: "Disabled",
  };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementClient(credential, subscriptionId);
  const result = await client.serverSecurityAlertPolicies.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    securityAlertPolicyName,
    parameters,
  );
  console.log(result);
}

updateAServerThreatDetectionPolicyWithMinimalParameters().catch(console.error);
