/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { RecorderStartOptions } from "@azure-tools/test-recorder";
import { env, Recorder, isPlaybackMode } from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { PaloAltoNetworksCloudngfw } from "../src/paloAltoNetworksCloudngfw.js";
import { describe, it, assert, beforeEach, afterEach } from "vitest";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id",
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
  removeCentralSanitizers: [
    "AZSDK3493", // .name in the body is not a secret and is listed below in the beforeEach section
    "AZSDK3430", // .id in the body is not a secret and is listed below in the beforeEach section
  ],
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("paloaltonetworksngfw test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: PaloAltoNetworksCloudngfw;
  let location: string;
  let resourceGroup: string;
  let resourcename: string;

  beforeEach(async (ctx) => {
    recorder = new Recorder(ctx);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new PaloAltoNetworksCloudngfw(
      credential,
      subscriptionId,
      recorder.configureClientOptions({}),
    );
    location = "eastus";
    resourceGroup = "myjstest";
    resourcename = "resourcetest";
  });

  afterEach(async () => {
    await recorder.stop();
  });

  it("localRulestacks create test", async () => {
    const res = await client.localRulestacks.beginCreateOrUpdateAndWait(
      resourceGroup,
      resourcename,
      {
        location,
        description: "local rulestacks",
      },
      testPollingOptions,
    );
    assert.equal(res.name, resourcename);
  });

  it("localRulestacks get test", async () => {
    const res = await client.localRulestacks.get(resourceGroup, resourcename);
    assert.equal(res.name, resourcename);
  });

  it("localRulestacks list test", async () => {
    const resArray = new Array();
    for await (const item of client.localRulestacks.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("localRulestacks delete test", async () => {
    const resArray = new Array();
    for await (const item of client.localRulestacks.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
});
