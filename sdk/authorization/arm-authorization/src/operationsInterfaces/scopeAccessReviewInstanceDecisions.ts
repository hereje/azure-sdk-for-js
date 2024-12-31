/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AccessReviewDecision,
  ScopeAccessReviewInstanceDecisionsListOptionalParams
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ScopeAccessReviewInstanceDecisions. */
export interface ScopeAccessReviewInstanceDecisions {
  /**
   * Get access review instance decisions
   * @param scope The scope of the resource.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  list(
    scope: string,
    scheduleDefinitionId: string,
    id: string,
    options?: ScopeAccessReviewInstanceDecisionsListOptionalParams
  ): PagedAsyncIterableIterator<AccessReviewDecision>;
}
