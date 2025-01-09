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
  VirtualMachineTemplate,
  VirtualMachineTemplatesListOptionalParams,
  VirtualMachineTemplatesListByResourceGroupOptionalParams,
  VirtualMachineTemplatesCreateOptionalParams,
  VirtualMachineTemplatesCreateResponse,
  VirtualMachineTemplatesGetOptionalParams,
  VirtualMachineTemplatesGetResponse,
  VirtualMachineTemplatesUpdateOptionalParams,
  VirtualMachineTemplatesUpdateResponse,
  VirtualMachineTemplatesDeleteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualMachineTemplates. */
export interface VirtualMachineTemplates {
  /**
   * List of virtualMachineTemplates in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: VirtualMachineTemplatesListOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineTemplate>;
  /**
   * List of virtualMachineTemplates in a resource group.
   * @param resourceGroupName The Resource Group Name.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: VirtualMachineTemplatesListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachineTemplate>;
  /**
   * Create Or Update virtual machine template.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineTemplateName Name of the virtual machine template resource.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<VirtualMachineTemplatesCreateResponse>,
      VirtualMachineTemplatesCreateResponse
    >
  >;
  /**
   * Create Or Update virtual machine template.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineTemplateName Name of the virtual machine template resource.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesCreateOptionalParams
  ): Promise<VirtualMachineTemplatesCreateResponse>;
  /**
   * Implements virtual machine template GET method.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineTemplateName Name of the virtual machine template resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesGetOptionalParams
  ): Promise<VirtualMachineTemplatesGetResponse>;
  /**
   * API to update certain properties of the virtual machine template resource.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineTemplateName Name of the virtual machine template resource.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesUpdateOptionalParams
  ): Promise<VirtualMachineTemplatesUpdateResponse>;
  /**
   * Implements virtual machine template DELETE method.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineTemplateName Name of the virtual machine template resource.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Implements virtual machine template DELETE method.
   * @param resourceGroupName The Resource Group Name.
   * @param virtualMachineTemplateName Name of the virtual machine template resource.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    virtualMachineTemplateName: string,
    options?: VirtualMachineTemplatesDeleteOptionalParams
  ): Promise<void>;
}
