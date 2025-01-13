/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  QueryDefinition,
  QueryUsageOptionalParams,
  QueryUsageResponse,
  ExternalCloudProviderType,
  QueryUsageByExternalCloudProviderTypeOptionalParams,
  QueryUsageByExternalCloudProviderTypeResponse
} from "../models/index.js";

/** Interface representing a Query. */
export interface Query {
  /**
   * Query the usage data for scope defined.
   * @param scope The scope associated with query and export operations. This includes
   *              '/subscriptions/{subscriptionId}/' for subscription scope,
   *              '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}' for resourceGroup scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}' for Billing Account scope and
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/departments/{departmentId}' for
   *              Department scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/enrollmentAccounts/{enrollmentAccountId}'
   *              for EnrollmentAccount scope, '/providers/Microsoft.Management/managementGroups/{managementGroupId}
   *              for Management Group scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}'
   *              for billingProfile scope,
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/billingProfiles/{billingProfileId}/invoiceSections/{invoiceSectionId}'
   *              for invoiceSection scope, and
   *              '/providers/Microsoft.Billing/billingAccounts/{billingAccountId}/customers/{customerId}' specific
   *              for partners.
   * @param parameters Parameters supplied to the CreateOrUpdate Query Config operation.
   * @param options The options parameters.
   */
  usage(
    scope: string,
    parameters: QueryDefinition,
    options?: QueryUsageOptionalParams
  ): Promise<QueryUsageResponse>;
  /**
   * Query the usage data for external cloud provider type defined.
   * @param externalCloudProviderType The external cloud provider type associated with dimension/query
   *                                  operations. This includes 'externalSubscriptions' for linked account and 'externalBillingAccounts'
   *                                  for consolidated account.
   * @param externalCloudProviderId This can be '{externalSubscriptionId}' for linked account or
   *                                '{externalBillingAccountId}' for consolidated account used with dimension/query operations.
   * @param parameters Parameters supplied to the CreateOrUpdate Query Config operation.
   * @param options The options parameters.
   */
  usageByExternalCloudProviderType(
    externalCloudProviderType: ExternalCloudProviderType,
    externalCloudProviderId: string,
    parameters: QueryDefinition,
    options?: QueryUsageByExternalCloudProviderTypeOptionalParams
  ): Promise<QueryUsageByExternalCloudProviderTypeResponse>;
}
