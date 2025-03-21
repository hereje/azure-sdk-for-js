/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  FarmBeatsExtension,
  FarmBeatsExtensionsListOptionalParams,
  FarmBeatsExtensionsGetOptionalParams,
  FarmBeatsExtensionsGetResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a FarmBeatsExtensions. */
export interface FarmBeatsExtensions {
  /**
   * Get list of farmBeats extension.
   * @param options The options parameters.
   */
  list(
    options?: FarmBeatsExtensionsListOptionalParams
  ): PagedAsyncIterableIterator<FarmBeatsExtension>;
  /**
   * Get farmBeats extension.
   * @param farmBeatsExtensionId farmBeatsExtensionId to be queried.
   * @param options The options parameters.
   */
  get(
    farmBeatsExtensionId: string,
    options?: FarmBeatsExtensionsGetOptionalParams
  ): Promise<FarmBeatsExtensionsGetResponse>;
}
