/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AlertIncident,
  AlertIncidentsListForScopeOptionalParams,
  AlertIncidentsGetOptionalParams,
  AlertIncidentsGetResponse,
  AlertIncidentsRemediateOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AlertIncidents. */
export interface AlertIncidents {
  /**
   * Gets alert incidents for a resource scope.
   * @param scope The scope of the alert incident.
   * @param alertId The name of the alert.
   * @param options The options parameters.
   */
  listForScope(
    scope: string,
    alertId: string,
    options?: AlertIncidentsListForScopeOptionalParams
  ): PagedAsyncIterableIterator<AlertIncident>;
  /**
   * Get the specified alert incident.
   * @param scope The scope of the alert incident. The scope can be any REST resource instance. For
   *              example, use '/providers/Microsoft.Subscription/subscriptions/{subscription-id}/' for a
   *              subscription,
   *              '/providers/Microsoft.Subscription/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}'
   *              for a resource group, and
   *              '/providers/Microsoft.Subscription/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/{resource-provider}/{resource-type}/{resource-name}'
   *              for a resource.
   * @param alertId The name of the alert.
   * @param alertIncidentId The name of the alert incident to get.
   * @param options The options parameters.
   */
  get(
    scope: string,
    alertId: string,
    alertIncidentId: string,
    options?: AlertIncidentsGetOptionalParams
  ): Promise<AlertIncidentsGetResponse>;
  /**
   * Remediate an alert incident.
   * @param scope The scope of the alert incident.
   * @param alertId The name of the alert.
   * @param alertIncidentId The name of the alert incident to remediate.
   * @param options The options parameters.
   */
  remediate(
    scope: string,
    alertId: string,
    alertIncidentId: string,
    options?: AlertIncidentsRemediateOptionalParams
  ): Promise<void>;
}
