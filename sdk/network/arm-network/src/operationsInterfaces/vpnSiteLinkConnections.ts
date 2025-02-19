/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  VpnSiteLinkConnectionsGetOptionalParams,
  VpnSiteLinkConnectionsGetResponse,
} from "../models/index.js";

/** Interface representing a VpnSiteLinkConnections. */
export interface VpnSiteLinkConnections {
  /**
   * Retrieves the details of a vpn site link connection.
   * @param resourceGroupName The resource group name of the VpnGateway.
   * @param gatewayName The name of the gateway.
   * @param connectionName The name of the vpn connection.
   * @param linkConnectionName The name of the vpn connection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    gatewayName: string,
    connectionName: string,
    linkConnectionName: string,
    options?: VpnSiteLinkConnectionsGetOptionalParams,
  ): Promise<VpnSiteLinkConnectionsGetResponse>;
}
