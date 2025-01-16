/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AppComplianceAutomationToolForMicrosoft365 } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update an exiting AppComplianceAutomation report.
 *
 * @summary Update an exiting AppComplianceAutomation report.
 * x-ms-original-file: specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/stable/2024-06-27/examples/Report_Update.json
 */
async function reportUpdate(): Promise<void> {
  const reportName = "testReportName";
  const credential = new DefaultAzureCredential();
  const client = new AppComplianceAutomationToolForMicrosoft365(credential);
  const result = await client.report.beginUpdateAndWait(reportName,
    {
      "properties": {
        "offerGuid": "00000000-0000-0000-0000-000000000001,00000000-0000-0000-0000-000000000002",
        "resources": [
          {
            "resourceId": "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/Microsoft.SignalRService/SignalR/mySignalRService",
            "resourceOrigin": "Azure",
            "resourceType": "Microsoft.SignalRService/SignalR"
          },
          {
            "accountId": "000000000000",
            "resourceId": "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/acat-aws/providers/microsoft.security/securityconnectors/acatawsconnector/securityentitydata/aws-iam-user-testuser",
            "resourceOrigin": "AWS",
            "resourceType": "iam.user"
          }
        ],
        "storageInfo": {
          "accountName": "testStorageAccount",
          "location": "East US",
          "resourceGroup": "testResourceGroup",
          "subscriptionId": "00000000-0000-0000-0000-000000000000"
        },
        "timeZone": "GMT Standard Time",
        "triggerTime": new Date("2022-03-04T05:00:00.000Z")
      }
    }
  );
  console.log(result);
}

async function main(): Promise<void> {
  reportUpdate();
}

main().catch(console.error);
