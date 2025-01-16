/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Schedule,
  ServiceFabricSchedulesListOptionalParams,
  ServiceFabricSchedulesGetOptionalParams,
  ServiceFabricSchedulesGetResponse,
  ServiceFabricSchedulesCreateOrUpdateOptionalParams,
  ServiceFabricSchedulesCreateOrUpdateResponse,
  ServiceFabricSchedulesDeleteOptionalParams,
  ScheduleFragment,
  ServiceFabricSchedulesUpdateOptionalParams,
  ServiceFabricSchedulesUpdateResponse,
  ServiceFabricSchedulesExecuteOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServiceFabricSchedules. */
export interface ServiceFabricSchedules {
  /**
   * List schedules in a given service fabric.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    options?: ServiceFabricSchedulesListOptionalParams
  ): PagedAsyncIterableIterator<Schedule>;
  /**
   * Get schedule.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    name: string,
    options?: ServiceFabricSchedulesGetOptionalParams
  ): Promise<ServiceFabricSchedulesGetResponse>;
  /**
   * Create or replace an existing schedule.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param name The name of the schedule.
   * @param schedule A schedule.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    name: string,
    schedule: Schedule,
    options?: ServiceFabricSchedulesCreateOrUpdateOptionalParams
  ): Promise<ServiceFabricSchedulesCreateOrUpdateResponse>;
  /**
   * Delete schedule.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    name: string,
    options?: ServiceFabricSchedulesDeleteOptionalParams
  ): Promise<void>;
  /**
   * Allows modifying tags of schedules. All other properties will be ignored.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param name The name of the schedule.
   * @param schedule A schedule.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    name: string,
    schedule: ScheduleFragment,
    options?: ServiceFabricSchedulesUpdateOptionalParams
  ): Promise<ServiceFabricSchedulesUpdateResponse>;
  /**
   * Execute a schedule. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  beginExecute(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    name: string,
    options?: ServiceFabricSchedulesExecuteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Execute a schedule. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param userName The name of the user profile.
   * @param serviceFabricName The name of the service fabric.
   * @param name The name of the schedule.
   * @param options The options parameters.
   */
  beginExecuteAndWait(
    resourceGroupName: string,
    labName: string,
    userName: string,
    serviceFabricName: string,
    name: string,
    options?: ServiceFabricSchedulesExecuteOptionalParams
  ): Promise<void>;
}
