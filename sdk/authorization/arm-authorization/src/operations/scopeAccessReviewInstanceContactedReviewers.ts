/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ScopeAccessReviewInstanceContactedReviewers } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AuthorizationManagementClient } from "../authorizationManagementClient.js";
import {
  AccessReviewContactedReviewer,
  ScopeAccessReviewInstanceContactedReviewersListNextOptionalParams,
  ScopeAccessReviewInstanceContactedReviewersListOptionalParams,
  ScopeAccessReviewInstanceContactedReviewersListResponse,
  ScopeAccessReviewInstanceContactedReviewersListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ScopeAccessReviewInstanceContactedReviewers operations. */
export class ScopeAccessReviewInstanceContactedReviewersImpl
  implements ScopeAccessReviewInstanceContactedReviewers {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class ScopeAccessReviewInstanceContactedReviewers class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Get access review instance contacted reviewers
   * @param scope The scope of the resource.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  public list(
    scope: string,
    scheduleDefinitionId: string,
    id: string,
    options?: ScopeAccessReviewInstanceContactedReviewersListOptionalParams
  ): PagedAsyncIterableIterator<AccessReviewContactedReviewer> {
    const iter = this.listPagingAll(scope, scheduleDefinitionId, id, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          scope,
          scheduleDefinitionId,
          id,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    scope: string,
    scheduleDefinitionId: string,
    id: string,
    options?: ScopeAccessReviewInstanceContactedReviewersListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AccessReviewContactedReviewer[]> {
    let result: ScopeAccessReviewInstanceContactedReviewersListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(scope, scheduleDefinitionId, id, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        scope,
        scheduleDefinitionId,
        id,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    scope: string,
    scheduleDefinitionId: string,
    id: string,
    options?: ScopeAccessReviewInstanceContactedReviewersListOptionalParams
  ): AsyncIterableIterator<AccessReviewContactedReviewer> {
    for await (const page of this.listPagingPage(
      scope,
      scheduleDefinitionId,
      id,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get access review instance contacted reviewers
   * @param scope The scope of the resource.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param options The options parameters.
   */
  private _list(
    scope: string,
    scheduleDefinitionId: string,
    id: string,
    options?: ScopeAccessReviewInstanceContactedReviewersListOptionalParams
  ): Promise<ScopeAccessReviewInstanceContactedReviewersListResponse> {
    return this.client.sendOperationRequest(
      { scope, scheduleDefinitionId, id, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param scope The scope of the resource.
   * @param scheduleDefinitionId The id of the access review schedule definition.
   * @param id The id of the access review instance.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    scope: string,
    scheduleDefinitionId: string,
    id: string,
    nextLink: string,
    options?: ScopeAccessReviewInstanceContactedReviewersListNextOptionalParams
  ): Promise<ScopeAccessReviewInstanceContactedReviewersListNextResponse> {
    return this.client.sendOperationRequest(
      { scope, scheduleDefinitionId, id, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/accessReviewScheduleDefinitions/{scheduleDefinitionId}/instances/{id}/contactedReviewers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewContactedReviewerListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.scheduleDefinitionId,
    Parameters.id,
    Parameters.scope1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewContactedReviewerListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.scheduleDefinitionId,
    Parameters.id,
    Parameters.scope1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
