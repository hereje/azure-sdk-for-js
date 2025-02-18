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
  BareMetalMachineKeySetPatchParameters,
  BareMetalMachineKeySetsUpdateOptionalParams,
  NetworkCloud,
} from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Patch properties of bare metal machine key set for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently.
 *
 * @summary Patch properties of bare metal machine key set for the provided cluster, or update the tags associated with it. Properties and tag updates can be done independently.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/preview/2024-06-01-preview/examples/BareMetalMachineKeySets_Patch.json
 */
async function patchBareMetalMachineKeySetOfCluster(): Promise<void> {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const clusterName = "clusterName";
  const bareMetalMachineKeySetName = "bareMetalMachineKeySetName";
  const bareMetalMachineKeySetUpdateParameters: BareMetalMachineKeySetPatchParameters =
    {
      expiration: new Date("2022-12-31T23:59:59.008Z"),
      jumpHostsAllowed: ["192.0.2.1", "192.0.2.5"],
      tags: { key1: "myvalue1", key2: "myvalue2" },
      userList: [
        {
          description:
            "Needs access for troubleshooting as a part of the support team",
          azureUserName: "userABC",
          sshPublicKey: {
            keyData:
              "ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm",
          },
          userPrincipalName: "userABC@contoso.com",
        },
        {
          description:
            "Needs access for troubleshooting as a part of the support team",
          azureUserName: "userXYZ",
          sshPublicKey: {
            keyData:
              "ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm",
          },
          userPrincipalName: "userABC@contoso.com",
        },
      ],
    };
  const options: BareMetalMachineKeySetsUpdateOptionalParams = {
    bareMetalMachineKeySetUpdateParameters,
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.bareMetalMachineKeySets.beginUpdateAndWait(
    resourceGroupName,
    clusterName,
    bareMetalMachineKeySetName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  patchBareMetalMachineKeySetOfCluster();
}

main().catch(console.error);
