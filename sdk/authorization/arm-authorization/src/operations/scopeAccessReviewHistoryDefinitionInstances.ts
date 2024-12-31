/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ScopeAccessReviewHistoryDefinitionInstances } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AuthorizationManagementClient } from "../authorizationManagementClient.js";
import {
  AccessReviewHistoryInstance,
  ScopeAccessReviewHistoryDefinitionInstancesListNextOptionalParams,
  ScopeAccessReviewHistoryDefinitionInstancesListOptionalParams,
  ScopeAccessReviewHistoryDefinitionInstancesListResponse,
  ScopeAccessReviewHistoryDefinitionInstancesListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ScopeAccessReviewHistoryDefinitionInstances operations. */
export class ScopeAccessReviewHistoryDefinitionInstancesImpl
  implements ScopeAccessReviewHistoryDefinitionInstances {
  private readonly client: AuthorizationManagementClient;

  /**
   * Initialize a new instance of the class ScopeAccessReviewHistoryDefinitionInstances class.
   * @param client Reference to the service client
   */
  constructor(client: AuthorizationManagementClient) {
    this.client = client;
  }

  /**
   * Get access review history definition instances by definition Id
   * @param scope The scope of the resource.
   * @param historyDefinitionId The id of the access review history definition.
   * @param options The options parameters.
   */
  public list(
    scope: string,
    historyDefinitionId: string,
    options?: ScopeAccessReviewHistoryDefinitionInstancesListOptionalParams
  ): PagedAsyncIterableIterator<AccessReviewHistoryInstance> {
    const iter = this.listPagingAll(scope, historyDefinitionId, options);
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
          historyDefinitionId,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    scope: string,
    historyDefinitionId: string,
    options?: ScopeAccessReviewHistoryDefinitionInstancesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AccessReviewHistoryInstance[]> {
    let result: ScopeAccessReviewHistoryDefinitionInstancesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(scope, historyDefinitionId, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        scope,
        historyDefinitionId,
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
    historyDefinitionId: string,
    options?: ScopeAccessReviewHistoryDefinitionInstancesListOptionalParams
  ): AsyncIterableIterator<AccessReviewHistoryInstance> {
    for await (const page of this.listPagingPage(
      scope,
      historyDefinitionId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get access review history definition instances by definition Id
   * @param scope The scope of the resource.
   * @param historyDefinitionId The id of the access review history definition.
   * @param options The options parameters.
   */
  private _list(
    scope: string,
    historyDefinitionId: string,
    options?: ScopeAccessReviewHistoryDefinitionInstancesListOptionalParams
  ): Promise<ScopeAccessReviewHistoryDefinitionInstancesListResponse> {
    return this.client.sendOperationRequest(
      { scope, historyDefinitionId, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param scope The scope of the resource.
   * @param historyDefinitionId The id of the access review history definition.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    scope: string,
    historyDefinitionId: string,
    nextLink: string,
    options?: ScopeAccessReviewHistoryDefinitionInstancesListNextOptionalParams
  ): Promise<ScopeAccessReviewHistoryDefinitionInstancesListNextResponse> {
    return this.client.sendOperationRequest(
      { scope, historyDefinitionId, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/{scope}/providers/Microsoft.Authorization/accessReviewHistoryDefinitions/{historyDefinitionId}/instances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccessReviewHistoryDefinitionInstanceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  queryParameters: [Parameters.apiVersion3],
  urlParameters: [
    Parameters.$host,
    Parameters.historyDefinitionId,
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
      bodyMapper: Mappers.AccessReviewHistoryDefinitionInstanceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorDefinition
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.historyDefinitionId,
    Parameters.scope1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
