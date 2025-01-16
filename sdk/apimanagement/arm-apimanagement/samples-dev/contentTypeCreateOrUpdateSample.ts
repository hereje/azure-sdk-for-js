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
  ApiManagementClient,
  ContentTypeContract
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates the developer portal's content type. Content types describe content items' properties, validation rules, and constraints. Custom content types' identifiers need to start with the `c-` prefix. Built-in content types can't be modified.
 *
 * @summary Creates or updates the developer portal's content type. Content types describe content items' properties, validation rules, and constraints. Custom content types' identifiers need to start with the `c-` prefix. Built-in content types can't be modified.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateContentType.json
 */
async function apiManagementCreateContentType(): Promise<void> {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const contentTypeId = "page";
  const parameters: ContentTypeContract = {
    namePropertiesName: "Page",
    schema: {
      additionalProperties: false,
      properties: {
        en_us: {
          type: "object",
          additionalProperties: false,
          properties: {
            description: {
              type: "string",
              description:
                "Page description. This property gets included in SEO attributes.",
              indexed: true,
              title: "Description"
            },
            documentId: {
              type: "string",
              description: "Reference to page content document.",
              title: "Document ID"
            },
            keywords: {
              type: "string",
              description:
                "Page keywords. This property gets included in SEO attributes.",
              indexed: true,
              title: "Keywords"
            },
            permalink: {
              type: "string",
              description: "Page permalink, e.g. '/about'.",
              indexed: true,
              title: "Permalink"
            },
            title: {
              type: "string",
              description:
                "Page title. This property gets included in SEO attributes.",
              indexed: true,
              title: "Title"
            }
          },
          required: ["title", "permalink", "documentId"]
        }
      }
    },
    description: "A regular page",
    version: "1.0.0"
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.contentType.createOrUpdate(
    resourceGroupName,
    serviceName,
    contentTypeId,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  apiManagementCreateContentType();
}

main().catch(console.error);
