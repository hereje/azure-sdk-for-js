/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  WidgetTypeResourceFormat,
  WidgetTypesListByHubOptionalParams,
  WidgetTypesGetOptionalParams,
  WidgetTypesGetResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WidgetTypes. */
export interface WidgetTypes {
  /**
   * Gets all available widget types in the specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param options The options parameters.
   */
  listByHub(
    resourceGroupName: string,
    hubName: string,
    options?: WidgetTypesListByHubOptionalParams
  ): PagedAsyncIterableIterator<WidgetTypeResourceFormat>;
  /**
   * Gets a widget type in the specified hub.
   * @param resourceGroupName The name of the resource group.
   * @param hubName The name of the hub.
   * @param widgetTypeName The name of the widget type.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    hubName: string,
    widgetTypeName: string,
    options?: WidgetTypesGetOptionalParams
  ): Promise<WidgetTypesGetResponse>;
}
