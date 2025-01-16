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
  Share,
  DataBoxEdgeManagementClient
} from "@azure/arm-databoxedge-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates a new share or updates an existing share on the device.
 *
 * @summary Creates a new share or updates an existing share on the device.
 * x-ms-original-file: specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/stable/2019-08-01/examples/SharePut.json
 */
async function sharePut(): Promise<void> {
  const subscriptionId =
    process.env["DATABOXEDGE_SUBSCRIPTION_ID"] ||
    "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const deviceName = "testedgedevice";
  const name = "smbshare";
  const resourceGroupName =
    process.env["DATABOXEDGE_RESOURCE_GROUP"] || "GroupForEdgeAutomation";
  const share: Share = {
    description: "",
    accessProtocol: "SMB",
    azureContainerInfo: {
      containerName: "testContainerSMB",
      dataFormat: "BlockBlob",
      storageAccountCredentialId:
        "/subscriptions/4385cf00-2d3a-425a-832f-f4285b1c9dce/resourceGroups/GroupForEdgeAutomation/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/testedgedevice/storageAccountCredentials/sac1"
    },
    dataPolicy: "Cloud",
    monitoringStatus: "Enabled",
    shareStatus: "Online",
    userAccessRights: [
      {
        accessType: "Change",
        userId:
          "/subscriptions/4385cf00-2d3a-425a-832f-f4285b1c9dce/resourceGroups/GroupForEdgeAutomation/providers/Microsoft.DataBoxEdge/dataBoxEdgeDevices/testedgedevice/users/user2"
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new DataBoxEdgeManagementClient(credential, subscriptionId);
  const result = await client.shares.beginCreateOrUpdateAndWait(
    deviceName,
    name,
    resourceGroupName,
    share
  );
  console.log(result);
}

async function main(): Promise<void> {
  sharePut();
}

main().catch(console.error);
