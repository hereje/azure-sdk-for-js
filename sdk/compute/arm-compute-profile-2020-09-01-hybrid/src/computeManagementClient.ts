/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  OperationsImpl,
  AvailabilitySetsImpl,
  ProximityPlacementGroupsImpl,
  DedicatedHostGroupsImpl,
  DedicatedHostsImpl,
  SshPublicKeysImpl,
  VirtualMachineExtensionImagesImpl,
  VirtualMachineExtensionsImpl,
  VirtualMachineImagesImpl,
  UsageOperationsImpl,
  VirtualMachinesImpl,
  VirtualMachineSizesImpl,
  ImagesImpl,
  VirtualMachineScaleSetsImpl,
  VirtualMachineScaleSetExtensionsImpl,
  VirtualMachineScaleSetRollingUpgradesImpl,
  VirtualMachineScaleSetVMExtensionsImpl,
  VirtualMachineScaleSetVMsImpl,
  LogAnalyticsImpl,
  DisksImpl,
  SnapshotsImpl,
  DiskEncryptionSetsImpl
} from "./operations/index.js";
import {
  Operations,
  AvailabilitySets,
  ProximityPlacementGroups,
  DedicatedHostGroups,
  DedicatedHosts,
  SshPublicKeys,
  VirtualMachineExtensionImages,
  VirtualMachineExtensions,
  VirtualMachineImages,
  UsageOperations,
  VirtualMachines,
  VirtualMachineSizes,
  Images,
  VirtualMachineScaleSets,
  VirtualMachineScaleSetExtensions,
  VirtualMachineScaleSetRollingUpgrades,
  VirtualMachineScaleSetVMExtensions,
  VirtualMachineScaleSetVMs,
  LogAnalytics,
  Disks,
  Snapshots,
  DiskEncryptionSets
} from "./operationsInterfaces/index.js";
import { ComputeManagementClientOptionalParams } from "./models/index.js";

export class ComputeManagementClient extends coreClient.ServiceClient {
  $host: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the ComputeManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.
   *                       The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: ComputeManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: ComputeManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-compute-profile-2020-09-01-hybrid/2.1.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.operations = new OperationsImpl(this);
    this.availabilitySets = new AvailabilitySetsImpl(this);
    this.proximityPlacementGroups = new ProximityPlacementGroupsImpl(this);
    this.dedicatedHostGroups = new DedicatedHostGroupsImpl(this);
    this.dedicatedHosts = new DedicatedHostsImpl(this);
    this.sshPublicKeys = new SshPublicKeysImpl(this);
    this.virtualMachineExtensionImages = new VirtualMachineExtensionImagesImpl(
      this
    );
    this.virtualMachineExtensions = new VirtualMachineExtensionsImpl(this);
    this.virtualMachineImages = new VirtualMachineImagesImpl(this);
    this.usageOperations = new UsageOperationsImpl(this);
    this.virtualMachines = new VirtualMachinesImpl(this);
    this.virtualMachineSizes = new VirtualMachineSizesImpl(this);
    this.images = new ImagesImpl(this);
    this.virtualMachineScaleSets = new VirtualMachineScaleSetsImpl(this);
    this.virtualMachineScaleSetExtensions = new VirtualMachineScaleSetExtensionsImpl(
      this
    );
    this.virtualMachineScaleSetRollingUpgrades = new VirtualMachineScaleSetRollingUpgradesImpl(
      this
    );
    this.virtualMachineScaleSetVMExtensions = new VirtualMachineScaleSetVMExtensionsImpl(
      this
    );
    this.virtualMachineScaleSetVMs = new VirtualMachineScaleSetVMsImpl(this);
    this.logAnalytics = new LogAnalyticsImpl(this);
    this.disks = new DisksImpl(this);
    this.snapshots = new SnapshotsImpl(this);
    this.diskEncryptionSets = new DiskEncryptionSetsImpl(this);
  }

  operations: Operations;
  availabilitySets: AvailabilitySets;
  proximityPlacementGroups: ProximityPlacementGroups;
  dedicatedHostGroups: DedicatedHostGroups;
  dedicatedHosts: DedicatedHosts;
  sshPublicKeys: SshPublicKeys;
  virtualMachineExtensionImages: VirtualMachineExtensionImages;
  virtualMachineExtensions: VirtualMachineExtensions;
  virtualMachineImages: VirtualMachineImages;
  usageOperations: UsageOperations;
  virtualMachines: VirtualMachines;
  virtualMachineSizes: VirtualMachineSizes;
  images: Images;
  virtualMachineScaleSets: VirtualMachineScaleSets;
  virtualMachineScaleSetExtensions: VirtualMachineScaleSetExtensions;
  virtualMachineScaleSetRollingUpgrades: VirtualMachineScaleSetRollingUpgrades;
  virtualMachineScaleSetVMExtensions: VirtualMachineScaleSetVMExtensions;
  virtualMachineScaleSetVMs: VirtualMachineScaleSetVMs;
  logAnalytics: LogAnalytics;
  disks: Disks;
  snapshots: Snapshots;
  diskEncryptionSets: DiskEncryptionSets;
}
