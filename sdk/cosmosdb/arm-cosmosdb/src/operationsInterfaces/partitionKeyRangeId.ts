/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PartitionMetric,
  PartitionKeyRangeIdListMetricsOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PartitionKeyRangeId. */
export interface PartitionKeyRangeId {
  /**
   * Retrieves the metrics determined by the given filter for the given partition key range id.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseRid Cosmos DB database rid.
   * @param collectionRid Cosmos DB collection rid.
   * @param partitionKeyRangeId Partition Key Range Id for which to get data.
   * @param filter An OData filter expression that describes a subset of metrics to return. The
   *               parameters that can be filtered are name.value (name of the metric, can have an or of multiple
   *               names), startTime, endTime, and timeGrain. The supported operator is eq.
   * @param options The options parameters.
   */
  listMetrics(
    resourceGroupName: string,
    accountName: string,
    databaseRid: string,
    collectionRid: string,
    partitionKeyRangeId: string,
    filter: string,
    options?: PartitionKeyRangeIdListMetricsOptionalParams,
  ): PagedAsyncIterableIterator<PartitionMetric>;
}
