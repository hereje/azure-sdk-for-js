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
  SecurityUserRuleCollection,
  SecurityUserRuleCollectionsListOptionalParams,
  SecurityUserRuleCollectionsGetOptionalParams,
  SecurityUserRuleCollectionsGetResponse,
  SecurityUserRuleCollectionsCreateOrUpdateOptionalParams,
  SecurityUserRuleCollectionsCreateOrUpdateResponse,
  SecurityUserRuleCollectionsDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SecurityUserRuleCollections. */
export interface SecurityUserRuleCollections {
  /**
   * Lists all the security user rule collections in a security configuration, in a paginated format.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Security Configuration.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    options?: SecurityUserRuleCollectionsListOptionalParams,
  ): PagedAsyncIterableIterator<SecurityUserRuleCollection>;
  /**
   * Gets a network manager security user configuration rule collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Security Configuration.
   * @param ruleCollectionName The name of the network manager security Configuration rule collection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    options?: SecurityUserRuleCollectionsGetOptionalParams,
  ): Promise<SecurityUserRuleCollectionsGetResponse>;
  /**
   * Creates or updates a security user rule collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Security Configuration.
   * @param ruleCollectionName The name of the network manager security Configuration rule collection.
   * @param securityUserRuleCollection The Security User Rule Collection to create or update
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    securityUserRuleCollection: SecurityUserRuleCollection,
    options?: SecurityUserRuleCollectionsCreateOrUpdateOptionalParams,
  ): Promise<SecurityUserRuleCollectionsCreateOrUpdateResponse>;
  /**
   * Deletes a Security User Rule collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Security Configuration.
   * @param ruleCollectionName The name of the network manager security Configuration rule collection.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    options?: SecurityUserRuleCollectionsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a Security User Rule collection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Security Configuration.
   * @param ruleCollectionName The name of the network manager security Configuration rule collection.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    options?: SecurityUserRuleCollectionsDeleteOptionalParams,
  ): Promise<void>;
}
