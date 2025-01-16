/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ServiceRunnersGetOptionalParams,
  ServiceRunnersGetResponse,
  ServiceRunner,
  ServiceRunnersCreateOrUpdateOptionalParams,
  ServiceRunnersCreateOrUpdateResponse,
  ServiceRunnersDeleteOptionalParams
} from "../models/index.js";

/** Interface representing a ServiceRunners. */
export interface ServiceRunners {
  /**
   * Get service runner.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the service runner.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: ServiceRunnersGetOptionalParams
  ): Promise<ServiceRunnersGetResponse>;
  /**
   * Create or replace an existing service runner.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the service runner.
   * @param serviceRunner A container for a managed identity to execute DevTest lab services.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    labName: string,
    name: string,
    serviceRunner: ServiceRunner,
    options?: ServiceRunnersCreateOrUpdateOptionalParams
  ): Promise<ServiceRunnersCreateOrUpdateResponse>;
  /**
   * Delete service runner.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param name The name of the service runner.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    labName: string,
    name: string,
    options?: ServiceRunnersDeleteOptionalParams
  ): Promise<void>;
}
