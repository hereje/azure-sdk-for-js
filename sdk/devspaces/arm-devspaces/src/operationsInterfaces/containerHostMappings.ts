/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ContainerHostMapping,
  ContainerHostMappingsGetContainerHostMappingOptionalParams,
  ContainerHostMappingsGetContainerHostMappingResponse
} from "../models/index.js";

/** Interface representing a ContainerHostMappings. */
export interface ContainerHostMappings {
  /**
   * Returns container host mapping object for a container host resource ID if an associated controller
   * exists.
   * @param resourceGroupName Resource group to which the resource belongs.
   * @param location Location of the container host.
   * @param containerHostMapping Container host mapping object specifying the Container host resource ID
   *                             and its associated Controller resource.
   * @param options The options parameters.
   */
  getContainerHostMapping(
    resourceGroupName: string,
    location: string,
    containerHostMapping: ContainerHostMapping,
    options?: ContainerHostMappingsGetContainerHostMappingOptionalParams
  ): Promise<ContainerHostMappingsGetContainerHostMappingResponse>;
}
