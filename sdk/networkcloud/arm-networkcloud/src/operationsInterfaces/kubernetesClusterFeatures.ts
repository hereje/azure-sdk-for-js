/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  KubernetesClusterFeature,
  KubernetesClusterFeaturesListByKubernetesClusterOptionalParams,
  KubernetesClusterFeaturesGetOptionalParams,
  KubernetesClusterFeaturesGetResponse,
  KubernetesClusterFeaturesCreateOrUpdateOptionalParams,
  KubernetesClusterFeaturesCreateOrUpdateResponse,
  KubernetesClusterFeaturesDeleteOptionalParams,
  KubernetesClusterFeaturesDeleteResponse,
  KubernetesClusterFeaturesUpdateOptionalParams,
  KubernetesClusterFeaturesUpdateResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a KubernetesClusterFeatures. */
export interface KubernetesClusterFeatures {
  /**
   * Get a list of features for the provided Kubernetes cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param options The options parameters.
   */
  listByKubernetesCluster(
    resourceGroupName: string,
    kubernetesClusterName: string,
    options?: KubernetesClusterFeaturesListByKubernetesClusterOptionalParams,
  ): PagedAsyncIterableIterator<KubernetesClusterFeature>;
  /**
   * Get properties of the provided the Kubernetes cluster feature.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param featureName The name of the feature.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    kubernetesClusterName: string,
    featureName: string,
    options?: KubernetesClusterFeaturesGetOptionalParams,
  ): Promise<KubernetesClusterFeaturesGetResponse>;
  /**
   * Create a new Kubernetes cluster feature or update properties of the Kubernetes cluster feature if it
   * exists.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param featureName The name of the feature.
   * @param kubernetesClusterFeatureParameters The request body.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    kubernetesClusterName: string,
    featureName: string,
    kubernetesClusterFeatureParameters: KubernetesClusterFeature,
    options?: KubernetesClusterFeaturesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<KubernetesClusterFeaturesCreateOrUpdateResponse>,
      KubernetesClusterFeaturesCreateOrUpdateResponse
    >
  >;
  /**
   * Create a new Kubernetes cluster feature or update properties of the Kubernetes cluster feature if it
   * exists.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param featureName The name of the feature.
   * @param kubernetesClusterFeatureParameters The request body.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    kubernetesClusterName: string,
    featureName: string,
    kubernetesClusterFeatureParameters: KubernetesClusterFeature,
    options?: KubernetesClusterFeaturesCreateOrUpdateOptionalParams,
  ): Promise<KubernetesClusterFeaturesCreateOrUpdateResponse>;
  /**
   * Delete the provided Kubernetes cluster feature.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param featureName The name of the feature.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    kubernetesClusterName: string,
    featureName: string,
    options?: KubernetesClusterFeaturesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<KubernetesClusterFeaturesDeleteResponse>,
      KubernetesClusterFeaturesDeleteResponse
    >
  >;
  /**
   * Delete the provided Kubernetes cluster feature.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param featureName The name of the feature.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    kubernetesClusterName: string,
    featureName: string,
    options?: KubernetesClusterFeaturesDeleteOptionalParams,
  ): Promise<KubernetesClusterFeaturesDeleteResponse>;
  /**
   * Patch properties of the provided Kubernetes cluster feature.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param featureName The name of the feature.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    kubernetesClusterName: string,
    featureName: string,
    options?: KubernetesClusterFeaturesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<KubernetesClusterFeaturesUpdateResponse>,
      KubernetesClusterFeaturesUpdateResponse
    >
  >;
  /**
   * Patch properties of the provided Kubernetes cluster feature.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param kubernetesClusterName The name of the Kubernetes cluster.
   * @param featureName The name of the feature.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    kubernetesClusterName: string,
    featureName: string,
    options?: KubernetesClusterFeaturesUpdateOptionalParams,
  ): Promise<KubernetesClusterFeaturesUpdateResponse>;
}
