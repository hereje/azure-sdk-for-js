/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  FirewallRule,
  FirewallRulesListByClusterOptionalParams,
  FirewallRulesCreateOrUpdateOptionalParams,
  FirewallRulesCreateOrUpdateResponse,
  FirewallRulesDeleteOptionalParams,
  FirewallRulesDeleteResponse,
  FirewallRulesGetOptionalParams,
  FirewallRulesGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FirewallRules. */
export interface FirewallRules {
  /**
   * Lists all the firewall rules on cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: FirewallRulesListByClusterOptionalParams,
  ): PagedAsyncIterableIterator<FirewallRule>;
  /**
   * Creates a new cluster firewall rule or updates an existing cluster firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param firewallRuleName The name of the cluster firewall rule.
   * @param parameters The required parameters for creating or updating a firewall rule.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    firewallRuleName: string,
    parameters: FirewallRule,
    options?: FirewallRulesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FirewallRulesCreateOrUpdateResponse>,
      FirewallRulesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates a new cluster firewall rule or updates an existing cluster firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param firewallRuleName The name of the cluster firewall rule.
   * @param parameters The required parameters for creating or updating a firewall rule.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    firewallRuleName: string,
    parameters: FirewallRule,
    options?: FirewallRulesCreateOrUpdateOptionalParams,
  ): Promise<FirewallRulesCreateOrUpdateResponse>;
  /**
   * Deletes a cluster firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param firewallRuleName The name of the cluster firewall rule.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    firewallRuleName: string,
    options?: FirewallRulesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<FirewallRulesDeleteResponse>,
      FirewallRulesDeleteResponse
    >
  >;
  /**
   * Deletes a cluster firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param firewallRuleName The name of the cluster firewall rule.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    firewallRuleName: string,
    options?: FirewallRulesDeleteOptionalParams,
  ): Promise<FirewallRulesDeleteResponse>;
  /**
   * Gets information about a cluster firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param firewallRuleName The name of the cluster firewall rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    firewallRuleName: string,
    options?: FirewallRulesGetOptionalParams,
  ): Promise<FirewallRulesGetResponse>;
}
