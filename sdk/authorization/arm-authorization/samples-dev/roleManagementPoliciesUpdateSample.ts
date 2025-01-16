/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  RoleManagementPolicy,
  AuthorizationManagementClient
} from "@azure/arm-authorization";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update a role management policy
 *
 * @summary Update a role management policy
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2020-10-01-preview/examples/PatchPartialRoleManagementPolicy.json
 */
async function patchPartialRoleManagementPolicy(): Promise<void> {
  const scope =
    "providers/Microsoft.Subscription/subscriptions/129ff972-28f8-46b8-a726-e497be039368";
  const roleManagementPolicyName = "570c3619-7688-4b34-b290-2b8bb3ccab2a";
  const parameters: RoleManagementPolicy = {
    rules: [
      {
        id: "Expiration_Admin_Eligibility",
        isExpirationRequired: false,
        maximumDuration: "P180D",
        ruleType: "RoleManagementPolicyExpirationRule",
        target: {
          caller: "Admin",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Eligibility",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        id: "Notification_Admin_Admin_Eligibility",
        isDefaultRecipientsEnabled: false,
        notificationLevel: "Critical",
        notificationRecipients: ["admin_admin_eligible@test.com"],
        notificationType: "Email",
        recipientType: "Admin",
        ruleType: "RoleManagementPolicyNotificationRule",
        target: {
          caller: "Admin",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Eligibility",
          targetObjects: [],
          operations: ["All"]
        }
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const result = await client.roleManagementPolicies.update(
    scope,
    roleManagementPolicyName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Update a role management policy
 *
 * @summary Update a role management policy
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/preview/2020-10-01-preview/examples/PatchRoleManagementPolicy.json
 */
async function patchRoleManagementPolicy(): Promise<void> {
  const scope =
    "providers/Microsoft.Subscription/subscriptions/129ff972-28f8-46b8-a726-e497be039368";
  const roleManagementPolicyName = "570c3619-7688-4b34-b290-2b8bb3ccab2a";
  const parameters: RoleManagementPolicy = {
    rules: [
      {
        id: "Expiration_Admin_Eligibility",
        isExpirationRequired: false,
        maximumDuration: "P180D",
        ruleType: "RoleManagementPolicyExpirationRule",
        target: {
          caller: "Admin",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Eligibility",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        id: "Notification_Admin_Admin_Eligibility",
        isDefaultRecipientsEnabled: false,
        notificationLevel: "Critical",
        notificationRecipients: ["admin_admin_eligible@test.com"],
        notificationType: "Email",
        recipientType: "Admin",
        ruleType: "RoleManagementPolicyNotificationRule",
        target: {
          caller: "Admin",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Eligibility",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        id: "Notification_Requestor_Admin_Eligibility",
        isDefaultRecipientsEnabled: false,
        notificationLevel: "Critical",
        notificationRecipients: ["requestor_admin_eligible@test.com"],
        notificationType: "Email",
        recipientType: "Requestor",
        ruleType: "RoleManagementPolicyNotificationRule",
        target: {
          caller: "Admin",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Eligibility",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        id: "Notification_Approver_Admin_Eligibility",
        isDefaultRecipientsEnabled: false,
        notificationLevel: "Critical",
        notificationRecipients: ["approver_admin_eligible@test.com"],
        notificationType: "Email",
        recipientType: "Approver",
        ruleType: "RoleManagementPolicyNotificationRule",
        target: {
          caller: "Admin",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Eligibility",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        enabledRules: [],
        id: "Enablement_Admin_Eligibility",
        ruleType: "RoleManagementPolicyEnablementRule",
        target: {
          caller: "Admin",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Eligibility",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        id: "Expiration_Admin_Assignment",
        isExpirationRequired: false,
        maximumDuration: "P90D",
        ruleType: "RoleManagementPolicyExpirationRule",
        target: {
          caller: "Admin",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Assignment",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        enabledRules: ["Justification", "MultiFactorAuthentication"],
        id: "Enablement_Admin_Assignment",
        ruleType: "RoleManagementPolicyEnablementRule",
        target: {
          caller: "Admin",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Assignment",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        id: "Notification_Admin_Admin_Assignment",
        isDefaultRecipientsEnabled: false,
        notificationLevel: "Critical",
        notificationRecipients: ["admin_admin_member@test.com"],
        notificationType: "Email",
        recipientType: "Admin",
        ruleType: "RoleManagementPolicyNotificationRule",
        target: {
          caller: "Admin",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Assignment",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        id: "Notification_Requestor_Admin_Assignment",
        isDefaultRecipientsEnabled: false,
        notificationLevel: "Critical",
        notificationRecipients: ["requestor_admin_member@test.com"],
        notificationType: "Email",
        recipientType: "Requestor",
        ruleType: "RoleManagementPolicyNotificationRule",
        target: {
          caller: "Admin",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Assignment",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        id: "Notification_Approver_Admin_Assignment",
        isDefaultRecipientsEnabled: false,
        notificationLevel: "Critical",
        notificationRecipients: ["approver_admin_member@test.com"],
        notificationType: "Email",
        recipientType: "Approver",
        ruleType: "RoleManagementPolicyNotificationRule",
        target: {
          caller: "Admin",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Assignment",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        id: "Expiration_EndUser_Assignment",
        isExpirationRequired: true,
        maximumDuration: "PT7H",
        ruleType: "RoleManagementPolicyExpirationRule",
        target: {
          caller: "EndUser",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Assignment",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        enabledRules: [
          "Justification",
          "MultiFactorAuthentication",
          "Ticketing"
        ],
        id: "Enablement_EndUser_Assignment",
        ruleType: "RoleManagementPolicyEnablementRule",
        target: {
          caller: "EndUser",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Assignment",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        id: "Approval_EndUser_Assignment",
        ruleType: "RoleManagementPolicyApprovalRule",
        setting: {
          approvalMode: "SingleStage",
          approvalStages: [
            {
              approvalStageTimeOutInDays: 1,
              escalationApprovers: [],
              escalationTimeInMinutes: 0,
              isApproverJustificationRequired: true,
              isEscalationEnabled: false,
              primaryApprovers: [
                {
                  description: "amansw_new_group",
                  id: "2385b0f3-5fa9-43cf-8ca4-b01dc97298cd",
                  isBackup: false,
                  userType: "Group"
                },
                {
                  description: "amansw_group",
                  id: "2f4913c9-d15b-406a-9946-1d66a28f2690",
                  isBackup: false,
                  userType: "Group"
                }
              ]
            }
          ],
          isApprovalRequired: true,
          isApprovalRequiredForExtension: false,
          isRequestorJustificationRequired: true
        },
        target: {
          caller: "EndUser",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Assignment",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        claimValue: "",
        id: "AuthenticationContext_EndUser_Assignment",
        isEnabled: false,
        ruleType: "RoleManagementPolicyAuthenticationContextRule",
        target: {
          caller: "EndUser",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Assignment",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        id: "Notification_Admin_EndUser_Assignment",
        isDefaultRecipientsEnabled: false,
        notificationLevel: "Critical",
        notificationRecipients: ["admin_enduser_member@test.com"],
        notificationType: "Email",
        recipientType: "Admin",
        ruleType: "RoleManagementPolicyNotificationRule",
        target: {
          caller: "EndUser",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Assignment",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        id: "Notification_Requestor_EndUser_Assignment",
        isDefaultRecipientsEnabled: false,
        notificationLevel: "Critical",
        notificationRecipients: ["requestor_enduser_member@test.com"],
        notificationType: "Email",
        recipientType: "Requestor",
        ruleType: "RoleManagementPolicyNotificationRule",
        target: {
          caller: "EndUser",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Assignment",
          targetObjects: [],
          operations: ["All"]
        }
      },
      {
        id: "Notification_Approver_EndUser_Assignment",
        isDefaultRecipientsEnabled: true,
        notificationLevel: "Critical",
        notificationRecipients: [],
        notificationType: "Email",
        recipientType: "Approver",
        ruleType: "RoleManagementPolicyNotificationRule",
        target: {
          caller: "EndUser",
          enforcedSettings: [],
          inheritableSettings: [],
          level: "Assignment",
          targetObjects: [],
          operations: ["All"]
        }
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential);
  const result = await client.roleManagementPolicies.update(
    scope,
    roleManagementPolicyName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  patchPartialRoleManagementPolicy();
  patchRoleManagementPolicy();
}

main().catch(console.error);
