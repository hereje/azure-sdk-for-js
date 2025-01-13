/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ScheduledAction,
  ScheduledActionsListOptionalParams,
  ScheduledActionsListByScopeOptionalParams,
  ScheduledActionsCreateOrUpdateOptionalParams,
  ScheduledActionsCreateOrUpdateResponse,
  ScheduledActionsGetOptionalParams,
  ScheduledActionsGetResponse,
  ScheduledActionsDeleteOptionalParams,
  ScheduledActionsCreateOrUpdateByScopeOptionalParams,
  ScheduledActionsCreateOrUpdateByScopeResponse,
  ScheduledActionsGetByScopeOptionalParams,
  ScheduledActionsGetByScopeResponse,
  ScheduledActionsDeleteByScopeOptionalParams,
  ScheduledActionsRunOptionalParams,
  ScheduledActionsRunByScopeOptionalParams,
  CheckNameAvailabilityRequest,
  ScheduledActionsCheckNameAvailabilityOptionalParams,
  ScheduledActionsCheckNameAvailabilityResponse,
  ScheduledActionsCheckNameAvailabilityByScopeOptionalParams,
  ScheduledActionsCheckNameAvailabilityByScopeResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ScheduledActions. */
export interface ScheduledActions {
  /**
   * List all private scheduled actions.
   * @param options The options parameters.
   */
  list(
    options?: ScheduledActionsListOptionalParams
  ): PagedAsyncIterableIterator<ScheduledAction>;
  /**
   * List all shared scheduled actions within the given scope.
   * @param scope The scope associated with scheduled action operations. This includes
   *              'subscriptions/{subscriptionId}' for subscription scope,
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   *              Department scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   *              for EnrollmentAccount scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *              for BillingProfile scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}'
   *              for InvoiceSection scope,
   *              'providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for
   *              External Billing Account scope and
   *              'providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for External
   *              Subscription scope. Note: Insight Alerts are only available on subscription scope.
   * @param options The options parameters.
   */
  listByScope(
    scope: string,
    options?: ScheduledActionsListByScopeOptionalParams
  ): PagedAsyncIterableIterator<ScheduledAction>;
  /**
   * Create or update a private scheduled action.
   * @param name Scheduled action name.
   * @param scheduledAction Scheduled action to be created or updated.
   * @param options The options parameters.
   */
  createOrUpdate(
    name: string,
    scheduledAction: ScheduledAction,
    options?: ScheduledActionsCreateOrUpdateOptionalParams
  ): Promise<ScheduledActionsCreateOrUpdateResponse>;
  /**
   * Get the private scheduled action by name.
   * @param name Scheduled action name.
   * @param options The options parameters.
   */
  get(
    name: string,
    options?: ScheduledActionsGetOptionalParams
  ): Promise<ScheduledActionsGetResponse>;
  /**
   * Delete a private scheduled action.
   * @param name Scheduled action name.
   * @param options The options parameters.
   */
  delete(
    name: string,
    options?: ScheduledActionsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Create or update a shared scheduled action within the given scope.
   * @param scope The scope associated with scheduled action operations. This includes
   *              'subscriptions/{subscriptionId}' for subscription scope,
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   *              Department scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   *              for EnrollmentAccount scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *              for BillingProfile scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}'
   *              for InvoiceSection scope,
   *              'providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for
   *              External Billing Account scope and
   *              'providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for External
   *              Subscription scope. Note: Insight Alerts are only available on subscription scope.
   * @param name Scheduled action name.
   * @param scheduledAction Scheduled action to be created or updated.
   * @param options The options parameters.
   */
  createOrUpdateByScope(
    scope: string,
    name: string,
    scheduledAction: ScheduledAction,
    options?: ScheduledActionsCreateOrUpdateByScopeOptionalParams
  ): Promise<ScheduledActionsCreateOrUpdateByScopeResponse>;
  /**
   * Get the shared scheduled action from the given scope by name.
   * @param scope The scope associated with scheduled action operations. This includes
   *              'subscriptions/{subscriptionId}' for subscription scope,
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   *              Department scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   *              for EnrollmentAccount scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *              for BillingProfile scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}'
   *              for InvoiceSection scope,
   *              'providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for
   *              External Billing Account scope and
   *              'providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for External
   *              Subscription scope. Note: Insight Alerts are only available on subscription scope.
   * @param name Scheduled action name.
   * @param options The options parameters.
   */
  getByScope(
    scope: string,
    name: string,
    options?: ScheduledActionsGetByScopeOptionalParams
  ): Promise<ScheduledActionsGetByScopeResponse>;
  /**
   * Delete a scheduled action within the given scope.
   * @param scope The scope associated with scheduled action operations. This includes
   *              'subscriptions/{subscriptionId}' for subscription scope,
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   *              Department scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   *              for EnrollmentAccount scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *              for BillingProfile scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}'
   *              for InvoiceSection scope,
   *              'providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for
   *              External Billing Account scope and
   *              'providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for External
   *              Subscription scope. Note: Insight Alerts are only available on subscription scope.
   * @param name Scheduled action name.
   * @param options The options parameters.
   */
  deleteByScope(
    scope: string,
    name: string,
    options?: ScheduledActionsDeleteByScopeOptionalParams
  ): Promise<void>;
  /**
   * Processes a private scheduled action.
   * @param name Scheduled action name.
   * @param options The options parameters.
   */
  run(name: string, options?: ScheduledActionsRunOptionalParams): Promise<void>;
  /**
   * Runs a shared scheduled action within the given scope.
   * @param scope The scope associated with scheduled action operations. This includes
   *              'subscriptions/{subscriptionId}' for subscription scope,
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   *              Department scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   *              for EnrollmentAccount scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *              for BillingProfile scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}'
   *              for InvoiceSection scope,
   *              'providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for
   *              External Billing Account scope and
   *              'providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for External
   *              Subscription scope. Note: Insight Alerts are only available on subscription scope.
   * @param name Scheduled action name.
   * @param options The options parameters.
   */
  runByScope(
    scope: string,
    name: string,
    options?: ScheduledActionsRunByScopeOptionalParams
  ): Promise<void>;
  /**
   * Checks availability and correctness of the name for a scheduled action.
   * @param checkNameAvailabilityRequest Scheduled action to be created or updated.
   * @param options The options parameters.
   */
  checkNameAvailability(
    checkNameAvailabilityRequest: CheckNameAvailabilityRequest,
    options?: ScheduledActionsCheckNameAvailabilityOptionalParams
  ): Promise<ScheduledActionsCheckNameAvailabilityResponse>;
  /**
   * Checks availability and correctness of the name for a scheduled action within the given scope.
   * @param scope The scope associated with scheduled action operations. This includes
   *              'subscriptions/{subscriptionId}' for subscription scope,
   *              'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   *              Department scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   *              for EnrollmentAccount scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *              for BillingProfile scope,
   *              'providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoiceSections/{invoiceSectionId}'
   *              for InvoiceSection scope,
   *              'providers/Microsoft.CostManagement/externalBillingAccounts/{externalBillingAccountName}' for
   *              External Billing Account scope and
   *              'providers/Microsoft.CostManagement/externalSubscriptions/{externalSubscriptionName}' for External
   *              Subscription scope. Note: Insight Alerts are only available on subscription scope.
   * @param checkNameAvailabilityRequest Scheduled action to be created or updated.
   * @param options The options parameters.
   */
  checkNameAvailabilityByScope(
    scope: string,
    checkNameAvailabilityRequest: CheckNameAvailabilityRequest,
    options?: ScheduledActionsCheckNameAvailabilityByScopeOptionalParams
  ): Promise<ScheduledActionsCheckNameAvailabilityByScopeResponse>;
}
