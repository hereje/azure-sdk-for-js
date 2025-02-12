/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { Groups } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureMigrateV2 } from "../azureMigrateV2.js";
import {
  Group,
  GroupsListByProjectOptionalParams,
  GroupsListByProjectResponse,
  GroupsGetOptionalParams,
  GroupsGetResponse,
  GroupsCreateOptionalParams,
  GroupsCreateResponse,
  GroupsDeleteOptionalParams,
  GroupsDeleteResponse,
  GroupsUpdateMachinesOptionalParams,
  GroupsUpdateMachinesResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing Groups operations. */
export class GroupsImpl implements Groups {
  private readonly client: AzureMigrateV2;

  /**
   * Initialize a new instance of the class Groups class.
   * @param client Reference to the service client
   */
  constructor(client: AzureMigrateV2) {
    this.client = client;
  }

  /**
   * Get all groups created in the project. Returns a json array of objects of type 'group' as specified
   * in the Models section.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The options parameters.
   */
  public listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: GroupsListByProjectOptionalParams
  ): PagedAsyncIterableIterator<Group> {
    const iter = this.listByProjectPagingAll(
      resourceGroupName,
      projectName,
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
        return this.listByProjectPagingPage(
          resourceGroupName,
          projectName,
          options,
          settings
        );
      }
    };
  }

  private async *listByProjectPagingPage(
    resourceGroupName: string,
    projectName: string,
    options?: GroupsListByProjectOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<Group[]> {
    let result: GroupsListByProjectResponse;
    result = await this._listByProject(resourceGroupName, projectName, options);
    yield result.value || [];
  }

  private async *listByProjectPagingAll(
    resourceGroupName: string,
    projectName: string,
    options?: GroupsListByProjectOptionalParams
  ): AsyncIterableIterator<Group> {
    for await (const page of this.listByProjectPagingPage(
      resourceGroupName,
      projectName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get all groups created in the project. Returns a json array of objects of type 'group' as specified
   * in the Models section.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param options The options parameters.
   */
  private _listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: GroupsListByProjectOptionalParams
  ): Promise<GroupsListByProjectResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, options },
      listByProjectOperationSpec
    );
  }

  /**
   * Get information related to a specific group in the project. Returns a json object of type 'group' as
   * specified in the models section.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    options?: GroupsGetOptionalParams
  ): Promise<GroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, groupName, options },
      getOperationSpec
    );
  }

  /**
   * Create a new group by sending a json object of type 'group' as given in Models section as part of
   * the Request Body. The group name in a project is unique.
   *
   * This operation is Idempotent.
   *
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    options?: GroupsCreateOptionalParams
  ): Promise<GroupsCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, groupName, options },
      createOperationSpec
    );
  }

  /**
   * Delete the group from the project. The machines remain in the project. Deleting a non-existent group
   * results in a no-operation.
   *
   * A group is an aggregation mechanism for machines in a project. Therefore, deleting group does not
   * delete machines in it.
   *
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    options?: GroupsDeleteOptionalParams
  ): Promise<GroupsDeleteResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, groupName, options },
      deleteOperationSpec
    );
  }

  /**
   * Update machines in group by adding or removing machines.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param options The options parameters.
   */
  updateMachines(
    resourceGroupName: string,
    projectName: string,
    groupName: string,
    options?: GroupsUpdateMachinesOptionalParams
  ): Promise<GroupsUpdateMachinesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, projectName, groupName, options },
      updateMachinesOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByProjectOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupResultList,
      headersMapper: Mappers.GroupsListByProjectHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Group,
      headersMapper: Mappers.GroupsGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Group,
      headersMapper: Mappers.GroupsCreateHeaders
    },
    201: {
      bodyMapper: Mappers.Group,
      headersMapper: Mappers.GroupsCreateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.group,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.GroupsDeleteHeaders
    },
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateMachinesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/assessmentProjects/{projectName}/groups/{groupName}/updateMachines",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Group,
      headersMapper: Mappers.GroupsUpdateMachinesHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.groupUpdateProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
