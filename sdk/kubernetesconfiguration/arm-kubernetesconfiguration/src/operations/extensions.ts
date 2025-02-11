/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { Extensions } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { SourceControlConfigurationClient } from "../sourceControlConfigurationClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  Extension,
  ExtensionsListNextOptionalParams,
  ExtensionsListOptionalParams,
  ExtensionsListResponse,
  ExtensionsCreateOptionalParams,
  ExtensionsCreateResponse,
  ExtensionsGetOptionalParams,
  ExtensionsGetResponse,
  ExtensionsDeleteOptionalParams,
  PatchExtension,
  ExtensionsUpdateOptionalParams,
  ExtensionsUpdateResponse,
  ExtensionsListNextResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Extensions operations. */
export class ExtensionsImpl implements Extensions {
  private readonly client: SourceControlConfigurationClient;

  /**
   * Initialize a new instance of the class Extensions class.
   * @param client Reference to the service client
   */
  constructor(client: SourceControlConfigurationClient) {
    this.client = client;
  }

  /**
   * List all Extensions in the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    options?: ExtensionsListOptionalParams
  ): PagedAsyncIterableIterator<Extension> {
    const iter = this.listPagingAll(
      resourceGroupName,
      clusterRp,
      clusterResourceName,
      clusterName,
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
        return this.listPagingPage(
          resourceGroupName,
          clusterRp,
          clusterResourceName,
          clusterName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    options?: ExtensionsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Extension[]> {
    let result: ExtensionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
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
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    options?: ExtensionsListOptionalParams
  ): AsyncIterableIterator<Extension> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      clusterRp,
      clusterResourceName,
      clusterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create a new Kubernetes Cluster Extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param extension Properties necessary to Create an Extension.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    extensionName: string,
    extension: Extension,
    options?: ExtensionsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ExtensionsCreateResponse>,
      ExtensionsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ExtensionsCreateResponse> => {
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
        clusterRp,
        clusterResourceName,
        clusterName,
        extensionName,
        extension,
        options
      },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      ExtensionsCreateResponse,
      OperationState<ExtensionsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a new Kubernetes Cluster Extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param extension Properties necessary to Create an Extension.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    extensionName: string,
    extension: Extension,
    options?: ExtensionsCreateOptionalParams
  ): Promise<ExtensionsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      clusterRp,
      clusterResourceName,
      clusterName,
      extensionName,
      extension,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets Kubernetes Cluster Extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    extensionName: string,
    options?: ExtensionsGetOptionalParams
  ): Promise<ExtensionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        extensionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * Delete a Kubernetes Cluster Extension. This will cause the Agent to Uninstall the extension from the
   * cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    extensionName: string,
    options?: ExtensionsDeleteOptionalParams
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
      args: {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        extensionName,
        options
      },
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
   * Delete a Kubernetes Cluster Extension. This will cause the Agent to Uninstall the extension from the
   * cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    extensionName: string,
    options?: ExtensionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      clusterRp,
      clusterResourceName,
      clusterName,
      extensionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Patch an existing Kubernetes Cluster Extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param patchExtension Properties to Patch in an existing Extension.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    extensionName: string,
    patchExtension: PatchExtension,
    options?: ExtensionsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ExtensionsUpdateResponse>,
      ExtensionsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ExtensionsUpdateResponse> => {
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
        clusterRp,
        clusterResourceName,
        clusterName,
        extensionName,
        patchExtension,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      ExtensionsUpdateResponse,
      OperationState<ExtensionsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Patch an existing Kubernetes Cluster Extension.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param extensionName Name of the Extension.
   * @param patchExtension Properties to Patch in an existing Extension.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    extensionName: string,
    patchExtension: PatchExtension,
    options?: ExtensionsUpdateOptionalParams
  ): Promise<ExtensionsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      clusterRp,
      clusterResourceName,
      clusterName,
      extensionName,
      patchExtension,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * List all Extensions in the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    options?: ExtensionsListOptionalParams
  ): Promise<ExtensionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        options
      },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterRp The Kubernetes cluster RP - i.e. Microsoft.ContainerService, Microsoft.Kubernetes,
   *                  Microsoft.HybridContainerService.
   * @param clusterResourceName The Kubernetes cluster resource name - i.e. managedClusters,
   *                            connectedClusters, provisionedClusters.
   * @param clusterName The name of the kubernetes cluster.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    clusterRp: string,
    clusterResourceName: string,
    clusterName: string,
    nextLink: string,
    options?: ExtensionsListNextOptionalParams
  ): Promise<ExtensionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        clusterRp,
        clusterResourceName,
        clusterName,
        nextLink,
        options
      },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions/{extensionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Extension
    },
    201: {
      bodyMapper: Mappers.Extension
    },
    202: {
      bodyMapper: Mappers.Extension
    },
    204: {
      bodyMapper: Mappers.Extension
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.extension,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName,
    Parameters.extensionName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions/{extensionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Extension
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
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName,
    Parameters.extensionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions/{extensionName}",
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
  queryParameters: [Parameters.apiVersion, Parameters.forceDelete],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName,
    Parameters.extensionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions/{extensionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Extension
    },
    201: {
      bodyMapper: Mappers.Extension
    },
    202: {
      bodyMapper: Mappers.Extension
    },
    204: {
      bodyMapper: Mappers.Extension
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.patchExtension,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName,
    Parameters.extensionName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{clusterRp}/{clusterResourceName}/{clusterName}/providers/Microsoft.KubernetesConfiguration/extensions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionsList
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
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExtensionsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterRp,
    Parameters.clusterResourceName,
    Parameters.clusterName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
