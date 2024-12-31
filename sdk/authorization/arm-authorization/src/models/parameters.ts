/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  RoleAssignmentCreateParameters as RoleAssignmentCreateParametersMapper,
  RoleDefinition as RoleDefinitionMapper,
  AccessReviewHistoryDefinitionProperties as AccessReviewHistoryDefinitionPropertiesMapper,
  AccessReviewScheduleDefinitionProperties as AccessReviewScheduleDefinitionPropertiesMapper,
  AccessReviewInstanceProperties as AccessReviewInstancePropertiesMapper,
  AccessReviewScheduleSettings as AccessReviewScheduleSettingsMapper,
  RecordAllDecisionsProperties as RecordAllDecisionsPropertiesMapper,
  AccessReviewDecisionProperties as AccessReviewDecisionPropertiesMapper,
  RoleAssignmentScheduleRequest as RoleAssignmentScheduleRequestMapper,
  RoleEligibilityScheduleRequest as RoleEligibilityScheduleRequestMapper,
  RoleManagementPolicy as RoleManagementPolicyMapper,
  RoleManagementPolicyAssignment as RoleManagementPolicyAssignmentMapper,
  Alert as AlertMapper,
  AlertConfiguration as AlertConfigurationMapper
} from "../models/mappers.js";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2015-07-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceProviderNamespace: OperationURLParameter = {
  parameterPath: "resourceProviderNamespace",
  mapper: {
    serializedName: "resourceProviderNamespace",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const parentResourcePath: OperationURLParameter = {
  parameterPath: "parentResourcePath",
  mapper: {
    serializedName: "parentResourcePath",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceType: OperationURLParameter = {
  parameterPath: "resourceType",
  mapper: {
    serializedName: "resourceType",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion1: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-04-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const filter: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  }
};

export const scope: OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    serializedName: "scope",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const denyAssignmentId: OperationURLParameter = {
  parameterPath: "denyAssignmentId",
  mapper: {
    serializedName: "denyAssignmentId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const denyAssignmentId1: OperationURLParameter = {
  parameterPath: "denyAssignmentId",
  mapper: {
    serializedName: "denyAssignmentId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const expand: OperationQueryParameter = {
  parameterPath: ["options", "expand"],
  mapper: {
    defaultValue: "resourceTypes",
    serializedName: "$expand",
    type: {
      name: "String"
    }
  }
};

export const filter1: OperationQueryParameter = {
  parameterPath: ["options", "filter"],
  mapper: {
    serializedName: "$filter",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const tenantId: OperationQueryParameter = {
  parameterPath: ["options", "tenantId"],
  mapper: {
    serializedName: "tenantId",
    type: {
      name: "String"
    }
  }
};

export const resourceName1: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const roleAssignmentName: OperationURLParameter = {
  parameterPath: "roleAssignmentName",
  mapper: {
    serializedName: "roleAssignmentName",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: RoleAssignmentCreateParametersMapper
};

export const skipToken: OperationQueryParameter = {
  parameterPath: ["options", "skipToken"],
  mapper: {
    serializedName: "$skipToken",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const roleAssignmentId: OperationURLParameter = {
  parameterPath: "roleAssignmentId",
  mapper: {
    serializedName: "roleAssignmentId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion2: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-05-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const resourceName2: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp(".+")
    },
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const roleDefinitionId: OperationURLParameter = {
  parameterPath: "roleDefinitionId",
  mapper: {
    serializedName: "roleDefinitionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const roleDefinition: OperationParameter = {
  parameterPath: "roleDefinition",
  mapper: RoleDefinitionMapper
};

export const roleId: OperationURLParameter = {
  parameterPath: "roleId",
  mapper: {
    serializedName: "roleId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion3: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2021-12-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const historyDefinitionId: OperationURLParameter = {
  parameterPath: "historyDefinitionId",
  mapper: {
    serializedName: "historyDefinitionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: AccessReviewHistoryDefinitionPropertiesMapper
};

export const instanceId: OperationURLParameter = {
  parameterPath: "instanceId",
  mapper: {
    serializedName: "instanceId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const scheduleDefinitionId: OperationURLParameter = {
  parameterPath: "scheduleDefinitionId",
  mapper: {
    serializedName: "scheduleDefinitionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const properties1: OperationParameter = {
  parameterPath: "properties",
  mapper: AccessReviewScheduleDefinitionPropertiesMapper
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const properties2: OperationParameter = {
  parameterPath: "properties",
  mapper: AccessReviewInstancePropertiesMapper
};

export const properties3: OperationParameter = {
  parameterPath: "properties",
  mapper: AccessReviewScheduleSettingsMapper
};

export const scope1: OperationURLParameter = {
  parameterPath: "scope",
  mapper: {
    serializedName: "scope",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const properties4: OperationParameter = {
  parameterPath: "properties",
  mapper: RecordAllDecisionsPropertiesMapper
};

export const decisionId: OperationURLParameter = {
  parameterPath: "decisionId",
  mapper: {
    serializedName: "decisionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const properties5: OperationParameter = {
  parameterPath: "properties",
  mapper: AccessReviewDecisionPropertiesMapper
};

export const apiVersion4: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-10-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const roleAssignmentScheduleName: OperationURLParameter = {
  parameterPath: "roleAssignmentScheduleName",
  mapper: {
    serializedName: "roleAssignmentScheduleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const roleAssignmentScheduleInstanceName: OperationURLParameter = {
  parameterPath: "roleAssignmentScheduleInstanceName",
  mapper: {
    serializedName: "roleAssignmentScheduleInstanceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: RoleAssignmentScheduleRequestMapper
};

export const roleAssignmentScheduleRequestName: OperationURLParameter = {
  parameterPath: "roleAssignmentScheduleRequestName",
  mapper: {
    serializedName: "roleAssignmentScheduleRequestName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion5: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-04-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const roleEligibilityScheduleName: OperationURLParameter = {
  parameterPath: "roleEligibilityScheduleName",
  mapper: {
    serializedName: "roleEligibilityScheduleName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const roleEligibilityScheduleInstanceName: OperationURLParameter = {
  parameterPath: "roleEligibilityScheduleInstanceName",
  mapper: {
    serializedName: "roleEligibilityScheduleInstanceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: RoleEligibilityScheduleRequestMapper
};

export const roleEligibilityScheduleRequestName: OperationURLParameter = {
  parameterPath: "roleEligibilityScheduleRequestName",
  mapper: {
    serializedName: "roleEligibilityScheduleRequestName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const roleManagementPolicyName: OperationURLParameter = {
  parameterPath: "roleManagementPolicyName",
  mapper: {
    serializedName: "roleManagementPolicyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: RoleManagementPolicyMapper
};

export const roleManagementPolicyAssignmentName: OperationURLParameter = {
  parameterPath: "roleManagementPolicyAssignmentName",
  mapper: {
    serializedName: "roleManagementPolicyAssignmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: RoleManagementPolicyAssignmentMapper
};

export const alertId: OperationURLParameter = {
  parameterPath: "alertId",
  mapper: {
    serializedName: "alertId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion6: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-08-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: AlertMapper
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: AlertConfigurationMapper
};

export const alertDefinitionId: OperationURLParameter = {
  parameterPath: "alertDefinitionId",
  mapper: {
    serializedName: "alertDefinitionId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const alertIncidentId: OperationURLParameter = {
  parameterPath: "alertIncidentId",
  mapper: {
    serializedName: "alertIncidentId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    serializedName: "operationId",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
