/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { LocalRules } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { PaloAltoNetworksCloudngfw } from "../paloAltoNetworksCloudngfw.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  LocalRulesResource,
  LocalRulesListByLocalRulestacksNextOptionalParams,
  LocalRulesListByLocalRulestacksOptionalParams,
  LocalRulesListByLocalRulestacksResponse,
  LocalRulesGetOptionalParams,
  LocalRulesGetResponse,
  LocalRulesCreateOrUpdateOptionalParams,
  LocalRulesCreateOrUpdateResponse,
  LocalRulesDeleteOptionalParams,
  LocalRulesGetCountersOptionalParams,
  LocalRulesGetCountersResponse,
  LocalRulesRefreshCountersOptionalParams,
  LocalRulesResetCountersOptionalParams,
  LocalRulesResetCountersResponse,
  LocalRulesListByLocalRulestacksNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing LocalRules operations. */
export class LocalRulesImpl implements LocalRules {
  private readonly client: PaloAltoNetworksCloudngfw;

  /**
   * Initialize a new instance of the class LocalRules class.
   * @param client Reference to the service client
   */
  constructor(client: PaloAltoNetworksCloudngfw) {
    this.client = client;
  }

  /**
   * List LocalRulesResource resources by LocalRulestacks
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param localRulestackName LocalRulestack resource name
   * @param options The options parameters.
   */
  public listByLocalRulestacks(
    resourceGroupName: string,
    localRulestackName: string,
    options?: LocalRulesListByLocalRulestacksOptionalParams
  ): PagedAsyncIterableIterator<LocalRulesResource> {
    const iter = this.listByLocalRulestacksPagingAll(
      resourceGroupName,
      localRulestackName,
      options
    );
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
        return this.listByLocalRulestacksPagingPage(
          resourceGroupName,
          localRulestackName,
          options,
          settings
        );
      }
    };
  }

  private async *listByLocalRulestacksPagingPage(
    resourceGroupName: string,
    localRulestackName: string,
    options?: LocalRulesListByLocalRulestacksOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<LocalRulesResource[]> {
    let result: LocalRulesListByLocalRulestacksResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByLocalRulestacks(
        resourceGroupName,
        localRulestackName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByLocalRulestacksNext(
        resourceGroupName,
        localRulestackName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByLocalRulestacksPagingAll(
    resourceGroupName: string,
    localRulestackName: string,
    options?: LocalRulesListByLocalRulestacksOptionalParams
  ): AsyncIterableIterator<LocalRulesResource> {
    for await (const page of this.listByLocalRulestacksPagingPage(
      resourceGroupName,
      localRulestackName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List LocalRulesResource resources by LocalRulestacks
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param localRulestackName LocalRulestack resource name
   * @param options The options parameters.
   */
  private _listByLocalRulestacks(
    resourceGroupName: string,
    localRulestackName: string,
    options?: LocalRulesListByLocalRulestacksOptionalParams
  ): Promise<LocalRulesListByLocalRulestacksResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, localRulestackName, options },
      listByLocalRulestacksOperationSpec
    );
  }

  /**
   * Get a LocalRulesResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param localRulestackName LocalRulestack resource name
   * @param priority Local Rule priority
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    localRulestackName: string,
    priority: string,
    options?: LocalRulesGetOptionalParams
  ): Promise<LocalRulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, localRulestackName, priority, options },
      getOperationSpec
    );
  }

  /**
   * Create a LocalRulesResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param localRulestackName LocalRulestack resource name
   * @param priority Local Rule priority
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    localRulestackName: string,
    priority: string,
    resource: LocalRulesResource,
    options?: LocalRulesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<LocalRulesCreateOrUpdateResponse>,
      LocalRulesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<LocalRulesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        localRulestackName,
        priority,
        resource,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      LocalRulesCreateOrUpdateResponse,
      OperationState<LocalRulesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a LocalRulesResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param localRulestackName LocalRulestack resource name
   * @param priority Local Rule priority
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    localRulestackName: string,
    priority: string,
    resource: LocalRulesResource,
    options?: LocalRulesCreateOrUpdateOptionalParams
  ): Promise<LocalRulesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      localRulestackName,
      priority,
      resource,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a LocalRulesResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param localRulestackName LocalRulestack resource name
   * @param priority Local Rule priority
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    localRulestackName: string,
    priority: string,
    options?: LocalRulesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, localRulestackName, priority, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a LocalRulesResource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param localRulestackName LocalRulestack resource name
   * @param priority Local Rule priority
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    localRulestackName: string,
    priority: string,
    options?: LocalRulesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      localRulestackName,
      priority,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get counters
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param localRulestackName LocalRulestack resource name
   * @param priority Local Rule priority
   * @param options The options parameters.
   */
  getCounters(
    resourceGroupName: string,
    localRulestackName: string,
    priority: string,
    options?: LocalRulesGetCountersOptionalParams
  ): Promise<LocalRulesGetCountersResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, localRulestackName, priority, options },
      getCountersOperationSpec
    );
  }

  /**
   * Refresh counters
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param localRulestackName LocalRulestack resource name
   * @param priority Local Rule priority
   * @param options The options parameters.
   */
  refreshCounters(
    resourceGroupName: string,
    localRulestackName: string,
    priority: string,
    options?: LocalRulesRefreshCountersOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, localRulestackName, priority, options },
      refreshCountersOperationSpec
    );
  }

  /**
   * Reset counters
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param localRulestackName LocalRulestack resource name
   * @param priority Local Rule priority
   * @param options The options parameters.
   */
  resetCounters(
    resourceGroupName: string,
    localRulestackName: string,
    priority: string,
    options?: LocalRulesResetCountersOptionalParams
  ): Promise<LocalRulesResetCountersResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, localRulestackName, priority, options },
      resetCountersOperationSpec
    );
  }

  /**
   * ListByLocalRulestacksNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param localRulestackName LocalRulestack resource name
   * @param nextLink The nextLink from the previous successful call to the ListByLocalRulestacks method.
   * @param options The options parameters.
   */
  private _listByLocalRulestacksNext(
    resourceGroupName: string,
    localRulestackName: string,
    nextLink: string,
    options?: LocalRulesListByLocalRulestacksNextOptionalParams
  ): Promise<LocalRulesListByLocalRulestacksNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, localRulestackName, nextLink, options },
      listByLocalRulestacksNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByLocalRulestacksOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/PaloAltoNetworks.Cloudngfw/localRulestacks/{localRulestackName}/localRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LocalRulesResourceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.localRulestackName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/PaloAltoNetworks.Cloudngfw/localRulestacks/{localRulestackName}/localRules/{priority}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LocalRulesResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.priority,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.localRulestackName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/PaloAltoNetworks.Cloudngfw/localRulestacks/{localRulestackName}/localRules/{priority}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LocalRulesResource
    },
    201: {
      bodyMapper: Mappers.LocalRulesResource
    },
    202: {
      bodyMapper: Mappers.LocalRulesResource
    },
    204: {
      bodyMapper: Mappers.LocalRulesResource
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.resource10,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.priority,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.localRulestackName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/PaloAltoNetworks.Cloudngfw/localRulestacks/{localRulestackName}/localRules/{priority}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.priority,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.localRulestackName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getCountersOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/PaloAltoNetworks.Cloudngfw/localRulestacks/{localRulestackName}/localRules/{priority}/getCounters",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RuleCounter
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.firewallName],
  urlParameters: [
    Parameters.$host,
    Parameters.priority,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.localRulestackName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const refreshCountersOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/PaloAltoNetworks.Cloudngfw/localRulestacks/{localRulestackName}/localRules/{priority}/refreshCounters",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.firewallName],
  urlParameters: [
    Parameters.$host,
    Parameters.priority,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.localRulestackName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const resetCountersOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/PaloAltoNetworks.Cloudngfw/localRulestacks/{localRulestackName}/localRules/{priority}/resetCounters",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.RuleCounterReset
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.firewallName],
  urlParameters: [
    Parameters.$host,
    Parameters.priority,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.localRulestackName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByLocalRulestacksNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LocalRulesResourceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.localRulestackName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
