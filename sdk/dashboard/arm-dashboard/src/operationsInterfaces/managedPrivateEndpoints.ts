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
  ManagedPrivateEndpointModel,
  ManagedPrivateEndpointsListOptionalParams,
  ManagedPrivateEndpointsRefreshOptionalParams,
  ManagedPrivateEndpointsGetOptionalParams,
  ManagedPrivateEndpointsGetResponse,
  ManagedPrivateEndpointsCreateOptionalParams,
  ManagedPrivateEndpointsCreateResponse,
  ManagedPrivateEndpointUpdateParameters,
  ManagedPrivateEndpointsUpdateOptionalParams,
  ManagedPrivateEndpointsUpdateResponse,
  ManagedPrivateEndpointsDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedPrivateEndpoints. */
export interface ManagedPrivateEndpoints {
  /**
   * List all managed private endpoints of a grafana resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The workspace name of Azure Managed Grafana.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagedPrivateEndpointsListOptionalParams
  ): PagedAsyncIterableIterator<ManagedPrivateEndpointModel>;
  /**
   * Refresh and sync managed private endpoints of a grafana resource to latest state.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The workspace name of Azure Managed Grafana.
   * @param options The options parameters.
   */
  beginRefresh(
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagedPrivateEndpointsRefreshOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Refresh and sync managed private endpoints of a grafana resource to latest state.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The workspace name of Azure Managed Grafana.
   * @param options The options parameters.
   */
  beginRefreshAndWait(
    resourceGroupName: string,
    workspaceName: string,
    options?: ManagedPrivateEndpointsRefreshOptionalParams
  ): Promise<void>;
  /**
   * Get a specific managed private endpoint of a grafana resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The workspace name of Azure Managed Grafana.
   * @param managedPrivateEndpointName The managed private endpoint name of Azure Managed Grafana.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    managedPrivateEndpointName: string,
    options?: ManagedPrivateEndpointsGetOptionalParams
  ): Promise<ManagedPrivateEndpointsGetResponse>;
  /**
   * Create or update a managed private endpoint for a grafana resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The workspace name of Azure Managed Grafana.
   * @param managedPrivateEndpointName The managed private endpoint name of Azure Managed Grafana.
   * @param requestBodyParameters The managed private endpoint to be created or updated.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    workspaceName: string,
    managedPrivateEndpointName: string,
    requestBodyParameters: ManagedPrivateEndpointModel,
    options?: ManagedPrivateEndpointsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedPrivateEndpointsCreateResponse>,
      ManagedPrivateEndpointsCreateResponse
    >
  >;
  /**
   * Create or update a managed private endpoint for a grafana resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The workspace name of Azure Managed Grafana.
   * @param managedPrivateEndpointName The managed private endpoint name of Azure Managed Grafana.
   * @param requestBodyParameters The managed private endpoint to be created or updated.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    managedPrivateEndpointName: string,
    requestBodyParameters: ManagedPrivateEndpointModel,
    options?: ManagedPrivateEndpointsCreateOptionalParams
  ): Promise<ManagedPrivateEndpointsCreateResponse>;
  /**
   * Update a managed private endpoint for an existing grafana resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The workspace name of Azure Managed Grafana.
   * @param managedPrivateEndpointName The managed private endpoint name of Azure Managed Grafana.
   * @param requestBodyParameters Properties that can be updated to an existing managed private endpoint.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    workspaceName: string,
    managedPrivateEndpointName: string,
    requestBodyParameters: ManagedPrivateEndpointUpdateParameters,
    options?: ManagedPrivateEndpointsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ManagedPrivateEndpointsUpdateResponse>,
      ManagedPrivateEndpointsUpdateResponse
    >
  >;
  /**
   * Update a managed private endpoint for an existing grafana resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The workspace name of Azure Managed Grafana.
   * @param managedPrivateEndpointName The managed private endpoint name of Azure Managed Grafana.
   * @param requestBodyParameters Properties that can be updated to an existing managed private endpoint.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    workspaceName: string,
    managedPrivateEndpointName: string,
    requestBodyParameters: ManagedPrivateEndpointUpdateParameters,
    options?: ManagedPrivateEndpointsUpdateOptionalParams
  ): Promise<ManagedPrivateEndpointsUpdateResponse>;
  /**
   * Delete a managed private endpoint for a grafana resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The workspace name of Azure Managed Grafana.
   * @param managedPrivateEndpointName The managed private endpoint name of Azure Managed Grafana.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    workspaceName: string,
    managedPrivateEndpointName: string,
    options?: ManagedPrivateEndpointsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a managed private endpoint for a grafana resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The workspace name of Azure Managed Grafana.
   * @param managedPrivateEndpointName The managed private endpoint name of Azure Managed Grafana.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    workspaceName: string,
    managedPrivateEndpointName: string,
    options?: ManagedPrivateEndpointsDeleteOptionalParams
  ): Promise<void>;
}
