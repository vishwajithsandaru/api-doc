import { SwaggerType } from './swagger';



export const SwaggerObj:SwaggerType = {
  "swagger": "2.0",
  "info": {
    "description": "Api Documentation",
    "version": "1.0",
    "title": "Api Documentation",
    "termsOfService": "urn:tos",
    "contact": {},
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0"
    }
  },
  "host": "132.145.228.83",
  "basePath": "/casa-account",
  "tags": [
    {
      "name": "account-close-det-controller",
      "description": "Account Close Det Controller"
    },
    {
      "name": "account-common-list-controller",
      "description": "Account Common List Controller"
    },
    {
      "name": "account-information-controller",
      "description": "Account Information Controller"
    },
    {
      "name": "account-param-handler-controller",
      "description": "Account Param Handler Controller"
    },
    {
      "name": "account-remarks-controller",
      "description": "Account Remarks Controller"
    },
    { "name": "applicants-controller", "description": "Applicants Controller" },
    { "name": "atm-controller", "description": "ATM Controller" },
    {
      "name": "basic-error-controller",
      "description": "Basic Error Controller"
    },
    {
      "name": "casa-account-controller",
      "description": "Casa Account Controller"
    },
    {
      "name": "document-check-list-controller",
      "description": "Document Check List Controller"
    },
    {
      "name": "document-check-list-detail-controller",
      "description": "Document Check List Detail Controller"
    },
    { "name": "document-controller", "description": "Document Controller" },
    {
      "name": "hystrix-dashboard-controller",
      "description": "Hystrix Dashboard Controller"
    },
    {
      "name": "interest-detail-controller",
      "description": "Interest Detail Controller"
    },
    {
      "name": "module-limit-controller",
      "description": "Module Limit Controller"
    },
    {
      "name": "nominee-details-controller",
      "description": "Nominee Details Controller"
    },
    {
      "name": "notification-detail-controller",
      "description": "Notification Detail Controller"
    },
    { "name": "operation-handler", "description": "Operation Handler" },
    {
      "name": "operation-instructions-details-controller",
      "description": "Operation Instructions Details Controller"
    },
    {
      "name": "over-draft-request-controller",
      "description": "Over Draft Request Controller"
    },
    {
      "name": "overdraft-detail-controller",
      "description": "Overdraft Detail Controller"
    },
    { "name": "purpose-controller", "description": "Purpose Controller" },
    { "name": "settings-controller", "description": "Settings Controller" },
    {
      "name": "source-of-funds-controller",
      "description": "Source Of Funds Controller"
    },
    {
      "name": "statement-status-controller",
      "description": "Statement Status Controller"
    },
    { "name": "web-mvc-links-handler", "description": "Web Mvc Links Handler" }
  ],
  "paths": {
    "/account-handler/manual-status/{tenantId}": {
      "post": {
        "tags": ["account-param-handler-controller"],
        "summary": "saveAccountStatusUpdateDetail",
        "operationId": "saveAccountStatusUpdateDetailUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "accountStatusUpdateHandlerResource",
            "description": "accountStatusUpdateHandlerResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/AccountStatusUpdateHandlerResource"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "put": {
        "tags": ["account-param-handler-controller"],
        "summary": "updateAccountStatusUpdateDetail",
        "operationId": "updateAccountStatusUpdateDetailUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "listAccountStatusUpdateHandlerResource",
            "description": "listAccountStatusUpdateHandlerResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/ListAccountStatusUpdateHandlerResource"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account-handler/{tenantId}/all": {
      "get": {
        "tags": ["account-param-handler-controller"],
        "summary": "getAccountStatusUpdateByAll",
        "operationId": "getAccountStatusUpdateByAllUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account-handler/{tenantId}/allowed-status/{status}": {
      "get": {
        "tags": ["account-param-handler-controller"],
        "summary": "getAccountStatusUpdateByAllowedStatus",
        "operationId": "getAccountStatusUpdateByAllowedStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account-handler/{tenantId}/status/{status}": {
      "get": {
        "tags": ["account-param-handler-controller"],
        "summary": "getAccountStatusUpdateByStatus",
        "operationId": "getAccountStatusUpdateByStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account-handler/{tenantId}/{id}": {
      "get": {
        "tags": ["account-param-handler-controller"],
        "summary": "getAccountStatusUpdateById",
        "operationId": "getAccountStatusUpdateByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "saveAccount",
        "operationId": "saveAccountUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "accountResource",
            "description": "accountResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/account-number/{accountNo}": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountByAccountNo",
        "operationId": "getAccountByAccountNoUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountNo",
            "in": "path",
            "description": "accountNo",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/account-status/all": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountStatusByStatusCode",
        "operationId": "getAccountStatusByStatusCodeUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/accountstatus/{statusCode}": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountStatusByStatusCode",
        "operationId": "getAccountStatusByStatusCodeUsingGET_1",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "statusCode",
            "in": "path",
            "description": "statusCode",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/all": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAllAccounts",
        "operationId": "getAllAccountsUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "pageNumber",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pageSize",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "paged",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.sorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.unsorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "name": "unpaged",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/approval/{accountId}": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountApproval",
        "operationId": "getAccountApprovalUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/AccountHelperResourceWithChargeValidation"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/approved/{accountId}": {
      "put": {
        "tags": ["casa-account-controller"],
        "summary": "updateAccountApproved",
        "operationId": "updateAccountApprovedUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "updateAccountResource",
            "description": "updateAccountResource",
            "required": true,
            "schema": { "$ref": "#/definitions/UpdateAccountResourceApproved" }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/block/{accountId}/approval": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "blockApproveAccount",
        "operationId": "blockApproveAccountUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/block/{accountId}/create": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "blockAccount",
        "operationId": "blockAccountUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/bulk-status": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "recoveryAccountStatusUpdateScheduler",
        "operationId": "recoveryAccountStatusUpdateSchedulerUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "bulkStatusUpdateProcessHelperResource",
            "description": "bulkStatusUpdateProcessHelperResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/BulkStatusUpdateProcessHelperResource"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/cancellation/{accountId}": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountCancellation",
        "operationId": "getAccountCancellationUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/createbranch/{createBranch}/openbranch/{openBranch}/status/{status}": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountByBothBranchesAndStatus",
        "operationId": "getAccountByBothBranchesAndStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "createBranch",
            "in": "path",
            "description": "createBranch",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "openBranch",
            "in": "path",
            "description": "openBranch",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "pageNumber",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pageSize",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "paged",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.sorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.unsorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "name": "unpaged",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/created/{accountId}": {
      "put": {
        "tags": ["casa-account-controller"],
        "summary": "updateAccount",
        "operationId": "updateAccountUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "updateAccountResource",
            "description": "updateAccountResource",
            "required": true,
            "schema": { "$ref": "#/definitions/UpdateAccountResourceCreated" }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/de-activation/{accountId}/approval": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountDeActivationApproval",
        "operationId": "getAccountDeActivationApprovalUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/AccountHelperResourceWithChargeValidation"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/de-activation/{accountId}/create": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountDeActivationCreation",
        "operationId": "getAccountDeActivationCreationUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/AccountHelperResourceWithChargeValidation"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/de-activation/{accountId}/reject": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountDeActivationRejection",
        "operationId": "getAccountDeActivationRejectionUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/dormant": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountDormant",
        "operationId": "getAccountDormantUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/DormantProcessHelperResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/draft": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "saveAccountDraft",
        "operationId": "saveAccountDraftUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "accountResource",
            "description": "accountResource",
            "required": true,
            "schema": { "type": "string" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/draft/all": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAllAccountDraft",
        "operationId": "getAllAccountDraftUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "pageNumber",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pageSize",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "paged",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.sorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.unsorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "name": "unpaged",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/draft/customer/{id}": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAllAccountDraft",
        "operationId": "getAllAccountDraftUsingGET_1",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/draft/discard/{id}": {
      "put": {
        "tags": ["casa-account-controller"],
        "summary": "discardAccountDraft",
        "operationId": "discardAccountDraftUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/draft/{id}": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountDraftById",
        "operationId": "getAccountDraftByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/history/all": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAllHistoryAccounts",
        "operationId": "getAllHistoryAccountsUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "pageNumber",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pageSize",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "paged",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.sorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.unsorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "name": "unpaged",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/history/{id}": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getHistoryAccountById",
        "operationId": "getHistoryAccountByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/log-history/all": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAllAccountsHistory",
        "operationId": "getAllAccountsHistoryUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "pageNumber",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pageSize",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "paged",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.sorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.unsorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "name": "unpaged",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/log-history/{accountId}": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountHistoryById",
        "operationId": "getAccountHistoryByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/pending/all": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAllPendingAccounts",
        "operationId": "getAllPendingAccountsUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "pageNumber",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pageSize",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "paged",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.sorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.unsorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "name": "unpaged",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/pending/{id}": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getPendingAccountById",
        "operationId": "getPendingAccountByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/re-activation/{accountId}/approval": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountReActivationApproval",
        "operationId": "getAccountReActivationApprovalUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/AccountHelperResourceWithChargeValidation"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/re-activation/{accountId}/create": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountReActivationCreation",
        "operationId": "getAccountReActivationCreationUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/AccountHelperResourceWithChargeValidation"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/re-activation/{accountId}/reject": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountReActivationRejection",
        "operationId": "getAccountReActivationRejectionUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/scheme-type/all": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountSchemeTypes",
        "operationId": "getAccountSchemeTypesUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/search-account": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getSearchAccount",
        "operationId": "getSearchAccountUsingGET_1",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountName",
            "in": "query",
            "description": "accountName",
            "required": false,
            "type": "string"
          },
          {
            "name": "accountNo",
            "in": "query",
            "description": "accountNo",
            "required": false,
            "type": "string"
          },
          {
            "name": "customerCode",
            "in": "query",
            "description": "customerCode",
            "required": false,
            "type": "string"
          },
          {
            "name": "customerId",
            "in": "query",
            "description": "customerId",
            "required": false,
            "type": "string"
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "pageNumber",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pageSize",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "paged",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.sorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.unsorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "name": "unpaged",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/search-account/all": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getSearchAccount",
        "operationId": "getSearchAccountUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "pageNumber",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pageSize",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "paged",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.sorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.unsorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "name": "unpaged",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/search-pending": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getSearchPendingAccount",
        "operationId": "getSearchPendingAccountUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "detailed",
            "in": "query",
            "description": "detailed",
            "required": true,
            "type": "string"
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "pageNumber",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pageSize",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "paged",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "rejected",
            "in": "query",
            "description": "rejected",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.sorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.unsorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "name": "unpaged",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/special-rate/{accountId}": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "addSpecialRate",
        "operationId": "addSpecialRateUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "specialRateDetailsResource",
            "description": "specialRateDetailsResource",
            "required": true,
            "schema": { "$ref": "#/definitions/SpecialRateDetailsResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/special-rate/{accountId}/approve": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "specialRateApprove",
        "operationId": "specialRateApproveUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "pendingAccountId",
            "in": "query",
            "description": "pendingAccountId",
            "required": false,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/special-rate/{accountId}/reject": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "specialRateReject",
        "operationId": "specialRateRejectUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "pendingAccountId",
            "in": "query",
            "description": "pendingAccountId",
            "required": false,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/status/{status}": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAllAccountsByStatus",
        "operationId": "getAllAccountsByStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "pageNumber",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pageSize",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "paged",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.sorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.unsorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "name": "unpaged",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/status/{status}/internal": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAllAccountsByStatusInternal",
        "operationId": "getAllAccountsByStatusInternalUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "pageNumber",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pageSize",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "paged",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.sorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.unsorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "name": "unpaged",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/stop-payment-reversal/{accountId}/approval": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountStopPaymentReversalApproval",
        "operationId": "getAccountStopPaymentReversalApprovalUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/stop-payment-reversal/{accountId}/create": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountStopPaymentReversalCreation",
        "operationId": "getAccountStopPaymentReversalCreationUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/stop-payment-reversal/{accountId}/reject": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountStopPaymentReversalReject",
        "operationId": "getAccountStopPaymentReversalRejectUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/stop-payment/{accountId}/approval": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountStopPaymentApproval",
        "operationId": "getAccountStopPaymentApprovalUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/AccountHelperResourceWithChargeValidation"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/stop-payment/{accountId}/create": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountStopPaymentCreation",
        "operationId": "getAccountStopPaymentCreationUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/AccountHelperResourceWithChargeValidation"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/stop-payment/{accountId}/reject": {
      "post": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountStopPaymentReject",
        "operationId": "getAccountStopPaymentRejectUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/validate/{accountId}": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getValidateAccountById",
        "operationId": "getValidateAccountByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/{accountId}": {
      "get": {
        "tags": ["casa-account-controller"],
        "summary": "getAccountById",
        "operationId": "getAccountByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/{pendingAccountId}/approval": {
      "put": {
        "tags": ["casa-account-controller"],
        "summary": "updateAccountDetailsApproval",
        "operationId": "updateAccountDetailsApprovalUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "pendingAccountId",
            "in": "path",
            "description": "pendingAccountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "processHelperResource",
            "description": "processHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/account/{tenantId}/{pendingAccountId}/reject": {
      "put": {
        "tags": ["casa-account-controller"],
        "summary": "updateAccountDetailsReject",
        "operationId": "updateAccountDetailsRejectUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "pendingAccountId",
            "in": "path",
            "description": "pendingAccountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "processHelperResource",
            "description": "processHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator": {
      "get": {
        "tags": ["web-mvc-links-handler"],
        "summary": "links",
        "operationId": "linksUsingGET",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "type": "object",
              "additionalProperties": {
                "type": "object",
                "additionalProperties": { "$ref": "#/definitions/Link" }
              }
            }
          },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/archaius": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/auditevents": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_1",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/beans": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_2",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/caches": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_4",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "delete": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingDELETE_1",
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "204": { "description": "No Content" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        },
        "deprecated": false
      }
    },
    "/actuator/caches/{cache}": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_3",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "delete": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingDELETE",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "204": { "description": "No Content" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        },
        "deprecated": false
      }
    },
    "/actuator/conditions": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_5",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/configprops": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_6",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/env": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_8",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "post": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingPOST",
        "consumes": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "delete": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingDELETE_2",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "204": { "description": "No Content" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        },
        "deprecated": false
      }
    },
    "/actuator/env/{toMatch}": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_7",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/features": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_9",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/health": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_12",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/health/{component}": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_11",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/health/{component}/{instance}": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_10",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/heapdump": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_13",
        "produces": ["application/octet-stream"],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/httptrace": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_14",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/info": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_15",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/loggers": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_17",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/loggers/{name}": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_16",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "post": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingPOST_1",
        "consumes": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/mappings": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_18",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/metrics": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_20",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/metrics/{requiredMetricName}": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_19",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/prometheus": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_21",
        "produces": ["text/plain;version=0.0.4;charset=utf-8"],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/refresh": {
      "post": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingPOST_2",
        "consumes": ["application/json"],
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/scheduledtasks": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_22",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/actuator/threaddump": {
      "get": {
        "tags": ["operation-handler"],
        "summary": "handle",
        "operationId": "handleUsingGET_23",
        "produces": [
          "application/json",
          "application/vnd.spring-boot.actuator.v2+json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "body",
            "required": false,
            "schema": {
              "type": "object",
              "additionalProperties": { "type": "string" }
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/applicant/{tenantId}/account/{accountId}": {
      "get": {
        "tags": ["applicants-controller"],
        "summary": "getApplicantsByAccountId",
        "operationId": "getApplicantsByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "post": {
        "tags": ["applicants-controller"],
        "summary": "saveApplicantDetail",
        "operationId": "saveApplicantDetailUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "applicantDetailsResource",
            "description": "applicantDetailsResource",
            "required": true,
            "schema": { "$ref": "#/definitions/ListApplicantsResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/applicant/{tenantId}/account/{accountId}/history": {
      "get": {
        "tags": ["applicants-controller"],
        "summary": "getHistroyApplicantsByAccountId",
        "operationId": "getHistroyApplicantsByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/applicant/{tenantId}/account/{accountId}/pending": {
      "get": {
        "tags": ["applicants-controller"],
        "summary": "getPendingApplicantsByAccountId",
        "operationId": "getPendingApplicantsByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/applicant/{tenantId}/account/{accountId}/status/{status}": {
      "get": {
        "tags": ["applicants-controller"],
        "summary": "getATMByAccountIdAndStatus",
        "operationId": "getATMByAccountIdAndStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/applicant/{tenantId}/account/{accountId}/{applicantId}": {
      "put": {
        "tags": ["applicants-controller"],
        "summary": "updateApplicantDetail",
        "operationId": "updateApplicantDetailUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "applicantDetailsResource",
            "description": "applicantDetailsResource",
            "required": true,
            "schema": { "$ref": "#/definitions/UpdateApplicantDetailsResource" }
          },
          {
            "name": "applicantId",
            "in": "path",
            "description": "applicantId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/applicant/{tenantId}/guardian/{accountId}/{applicantId}": {
      "put": {
        "tags": ["applicants-controller"],
        "summary": "updateApplicantGuardianDetail",
        "operationId": "updateApplicantGuardianDetailUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "applicantId",
            "in": "path",
            "description": "applicantId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "listGuardianResource",
            "description": "listGuardianResource",
            "required": true,
            "schema": { "$ref": "#/definitions/ListGuardianResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/applicant/{tenantId}/guardian/{accountId}/{applicantId}/new": {
      "post": {
        "tags": ["applicants-controller"],
        "summary": "addApplicantGuardianDetail",
        "operationId": "addApplicantGuardianDetailUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "applicantId",
            "in": "path",
            "description": "applicantId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "listGuardianResource",
            "description": "listGuardianResource",
            "required": true,
            "schema": { "$ref": "#/definitions/ListGuardianResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/applicant/{tenantId}/pending-approval/{accountId}/{approveMethod}": {
      "put": {
        "tags": ["applicants-controller"],
        "summary": "getApproveRejectPendingData",
        "operationId": "getApproveRejectPendingDataUsingPUT_1",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "approveMethod",
            "in": "path",
            "description": "approveMethod",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/applicant/{tenantId}/signature/{accountId}/{applicantId}": {
      "put": {
        "tags": ["applicants-controller"],
        "summary": "updateApplicantSignatureDetail",
        "operationId": "updateApplicantSignatureDetailUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "applicantId",
            "in": "path",
            "description": "applicantId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "applicantSignatureResource",
            "description": "applicantSignatureResource",
            "required": true,
            "schema": { "$ref": "#/definitions/ApplicantSignatureResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/applicant/{tenantId}/{id}": {
      "get": {
        "tags": ["applicants-controller"],
        "summary": "getApplicantsById",
        "operationId": "getApplicantsByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/applicant/{tenantId}/{id}/pending": {
      "get": {
        "tags": ["applicants-controller"],
        "summary": "getPendingApplicantsById",
        "operationId": "getPendingApplicantsByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/atm/{tenantId}/account/{accountId}": {
      "get": {
        "tags": ["atm-controller"],
        "summary": "getATMByAccountId",
        "operationId": "getATMByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/atm/{tenantId}/account/{accountId}/status/{status}": {
      "get": {
        "tags": ["atm-controller"],
        "summary": "getATMByAccountIdAndStatus",
        "operationId": "getATMByAccountIdAndStatusUsingGET_1",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/atm/{tenantId}/account/{accoutId}": {
      "post": {
        "tags": ["atm-controller"],
        "summary": "saveAtmDetail",
        "operationId": "saveAtmDetailUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accoutId",
            "in": "path",
            "description": "accoutId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "atmCardDetailsResource",
            "description": "atmCardDetailsResource",
            "required": true,
            "schema": { "$ref": "#/definitions/ListATMDetailsResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/atm/{tenantId}/pending-approval/{accountId}/{approveMethod}": {
      "put": {
        "tags": ["atm-controller"],
        "summary": "getApproveRejectPendingData",
        "operationId": "getApproveRejectPendingDataUsingPUT_2",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "approveMethod",
            "in": "path",
            "description": "approveMethod",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/atm/{tenantId}/validate/{atmNumber}": {
      "get": {
        "tags": ["atm-controller"],
        "summary": "getValidateATMNumber",
        "operationId": "getValidateATMNumberUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "atmNumber",
            "in": "path",
            "description": "atmNumber",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/atm/{tenantId}/{atmId}": {
      "get": {
        "tags": ["atm-controller"],
        "summary": "getAtmById",
        "operationId": "getAtmByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "atmId",
            "in": "path",
            "description": "atmId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "put": {
        "tags": ["atm-controller"],
        "summary": "updateAtmDetail",
        "operationId": "updateAtmDetailUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "atmId",
            "in": "path",
            "description": "atmId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "updateATMCardDetailsResource",
            "description": "updateATMCardDetailsResource",
            "required": true,
            "schema": { "$ref": "#/definitions/UpdateATMCardDetailsResource" }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/close-account/{tenantId}": {
      "post": {
        "tags": ["account-close-det-controller"],
        "summary": "createAccountCloseDetail",
        "operationId": "createAccountCloseDetailUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "accountCloseDetResource",
            "description": "accountCloseDetResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountCloseDetResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/close-account/{tenantId}/cancel/{accountCloseId}": {
      "put": {
        "tags": ["account-close-det-controller"],
        "summary": "cancelAccountClose",
        "operationId": "cancelAccountCloseUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "accountCloseCancelResource",
            "description": "accountCloseCancelResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountCloseCancelResource" }
          },
          {
            "name": "accountCloseId",
            "in": "path",
            "description": "accountCloseId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/close-account/{tenantId}/close/{accountCloseId}": {
      "put": {
        "tags": ["account-close-det-controller"],
        "summary": "closeAccount",
        "operationId": "closeAccountUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountCloseId",
            "in": "path",
            "description": "accountCloseId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountCloseResource",
            "description": "accountCloseResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountCloseResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/close-account/{tenantId}/finalwithdrawalapproval/{accountCloseId}": {
      "put": {
        "tags": ["account-close-det-controller"],
        "summary": "approveAccountCloseFinalWithdrawal",
        "operationId": "approveAccountCloseFinalWithdrawalUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "accountCloseFinalWithdrawalApprovalResource",
            "description": "accountCloseFinalWithdrawalApprovalResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/AccountCloseFinalWithdrawalApprovalResource"
            }
          },
          {
            "name": "accountCloseId",
            "in": "path",
            "description": "accountCloseId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/close-account/{tenantId}/reference-no/{accountCloseRefNo}": {
      "get": {
        "tags": ["account-close-det-controller"],
        "summary": "getAccountCloseDetailByAccountCloseRefNo",
        "operationId": "getAccountCloseDetailByAccountCloseRefNoUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountCloseRefNo",
            "in": "path",
            "description": "accountCloseRefNo",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/close-account/{tenantId}/settlement-amount/{accountId}": {
      "get": {
        "tags": ["account-close-det-controller"],
        "summary": "getAccountCloseSettlementAmount",
        "operationId": "getAccountCloseSettlementAmountUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "frequencyType",
            "in": "query",
            "description": "frequencyType",
            "required": false,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "OK",
            "schema": {
              "$ref": "#/definitions/AccountCloseSettlementAmountResource"
            }
          },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/close-account/{tenantId}/status/{status}": {
      "get": {
        "tags": ["account-close-det-controller"],
        "summary": "getAccountCloseDetailByStatus",
        "operationId": "getAccountCloseDetailByStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/close-account/{tenantId}/{accountCloseId}": {
      "get": {
        "tags": ["account-close-det-controller"],
        "summary": "getAccountCloseDetailByAccountCloseId",
        "operationId": "getAccountCloseDetailByAccountCloseIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountCloseId",
            "in": "path",
            "description": "accountCloseId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/comn-list/{tenantId}": {
      "post": {
        "tags": ["account-common-list-controller"],
        "summary": "saveCommonList",
        "operationId": "saveCommonListUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "commonListResource",
            "description": "commonListResource",
            "required": true,
            "schema": { "$ref": "#/definitions/CommonListResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/comn-list/{tenantId}/all": {
      "get": {
        "tags": ["account-common-list-controller"],
        "summary": "getAllCommonList",
        "operationId": "getAllCommonListUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/comn-list/{tenantId}/reference-code/{referenceCode}/status/{status}": {
      "get": {
        "tags": ["account-common-list-controller"],
        "summary": "getCommonListByStatusAndReferenceCode",
        "operationId": "getCommonListByStatusAndReferenceCodeUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "referenceCode",
            "in": "path",
            "description": "referenceCode",
            "required": true,
            "type": "string"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/comn-list/{tenantId}/status/{status}": {
      "get": {
        "tags": ["account-common-list-controller"],
        "summary": "getAccountByStatus",
        "operationId": "getAccountByStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/comn-list/{tenantId}/{commonListId}": {
      "get": {
        "tags": ["account-common-list-controller"],
        "summary": "getCommonListById",
        "operationId": "getCommonListByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "commonListId",
            "in": "path",
            "description": "commonListId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "put": {
        "tags": ["account-common-list-controller"],
        "summary": "updateCommonList",
        "operationId": "updateCommonListUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "commonListId",
            "in": "path",
            "description": "commonListId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "updateCommonListResource",
            "description": "updateCommonListResource",
            "required": true,
            "schema": { "$ref": "#/definitions/UpdateCommonListResource" }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/doc-check-list-detail/{tenantId}/all": {
      "get": {
        "tags": ["document-check-list-detail-controller"],
        "summary": "getAllDocumentCheckListDetails",
        "operationId": "getAllDocumentCheckListDetailsUsingGET_1",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/doc-check-list-detail/{tenantId}/doc-check-list-id/{id}": {
      "get": {
        "tags": ["document-check-list-detail-controller"],
        "summary": "getAllDocumentCheckListDetailsByCheckListId",
        "operationId": "getAllDocumentCheckListDetailsByCheckListIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/doc-check-list-detail/{tenantId}/doc-check-list-id/{id}/status/{status}": {
      "get": {
        "tags": ["document-check-list-detail-controller"],
        "summary": "getAllDocumentCheckListDetailsByCheckListIdAndStatus",
        "operationId": "getAllDocumentCheckListDetailsByCheckListIdAndStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/doc-check-list-detail/{tenantId}/status/{status}": {
      "get": {
        "tags": ["document-check-list-detail-controller"],
        "summary": "getAllDocumentCheckListDetailsByStatus",
        "operationId": "getAllDocumentCheckListDetailsByStatusUsingGET_1",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/doc-check-list-detail/{tenantId}/{documentCheckListId}/{id}": {
      "put": {
        "tags": ["document-check-list-detail-controller"],
        "summary": "updateDocumentCheckListDocument",
        "operationId": "updateDocumentCheckListDocumentUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "documentCheckListId",
            "in": "path",
            "description": "documentCheckListId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "updateDocumentCheckListDetailResource",
            "description": "updateDocumentCheckListDetailResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/UpdateDocumentCheckListDetailResource"
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/doc-check-list-detail/{tenantId}/{id}": {
      "get": {
        "tags": ["document-check-list-detail-controller"],
        "summary": "getAllDocumentCheckListDetailsById",
        "operationId": "getAllDocumentCheckListDetailsByIdUsingGET_1",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "post": {
        "tags": ["document-check-list-detail-controller"],
        "summary": "addDocumentCheckListDocument",
        "operationId": "addDocumentCheckListDocumentUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "documentCheckListDetailResource",
            "description": "documentCheckListDetailResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/DocumentCheckListDetailResource"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/doc-check-list/{tenantId}": {
      "post": {
        "tags": ["document-check-list-controller"],
        "summary": "addDocumentCheckList",
        "operationId": "addDocumentCheckListUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "documentCheckListResource",
            "description": "documentCheckListResource",
            "required": true,
            "schema": { "$ref": "#/definitions/DocumentCheckListResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/doc-check-list/{tenantId}/all": {
      "get": {
        "tags": ["document-check-list-controller"],
        "summary": "getAllDocumentCheckListDetails",
        "operationId": "getAllDocumentCheckListDetailsUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/doc-check-list/{tenantId}/product": {
      "get": {
        "tags": ["document-check-list-controller"],
        "summary": "getAllDocumentCheckListDetailsByRelatedProduct",
        "operationId": "getAllDocumentCheckListDetailsByRelatedProductUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountSubType",
            "in": "query",
            "description": "accountSubType",
            "required": true,
            "type": "string"
          },
          {
            "name": "accountType",
            "in": "query",
            "description": "accountType",
            "required": true,
            "type": "string"
          },
          {
            "name": "customerSubType",
            "in": "query",
            "description": "customerSubType",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "productCategoryId",
            "in": "query",
            "description": "productCategoryId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "productCode",
            "in": "query",
            "description": "productCode",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/doc-check-list/{tenantId}/status/{status}": {
      "get": {
        "tags": ["document-check-list-controller"],
        "summary": "getAllDocumentCheckListDetailsByStatus",
        "operationId": "getAllDocumentCheckListDetailsByStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/doc-check-list/{tenantId}/{id}": {
      "get": {
        "tags": ["document-check-list-controller"],
        "summary": "getAllDocumentCheckListDetailsById",
        "operationId": "getAllDocumentCheckListDetailsByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "put": {
        "tags": ["document-check-list-controller"],
        "summary": "updateDocumentCheckList",
        "operationId": "updateDocumentCheckListUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "documentCheckListResource",
            "description": "documentCheckListResource",
            "required": true,
            "schema": { "$ref": "#/definitions/DocumentCheckListResource" }
          },
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/document/{tenantId}/account/{accountId}": {
      "post": {
        "tags": ["document-controller"],
        "summary": "saveDocumentDetails",
        "operationId": "saveDocumentDetailsUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "documentResource",
            "description": "documentResource",
            "required": true,
            "schema": { "$ref": "#/definitions/ListDocumentResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/document/{tenantId}/account/{accountId}/status/{status}": {
      "get": {
        "tags": ["document-controller"],
        "summary": "getDocumentDetailsByAccountId",
        "operationId": "getDocumentDetailsByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/document/{tenantId}/pending-approval/{accountId}/{approveMethod}": {
      "put": {
        "tags": ["document-controller"],
        "summary": "getApproveRejectPendingData",
        "operationId": "getApproveRejectPendingDataUsingPUT_3",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "approveMethod",
            "in": "path",
            "description": "approveMethod",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/document/{tenantId}/search-checklist": {
      "get": {
        "tags": ["document-controller"],
        "summary": "getDocumentDetailsByAccountIdAndCheckList",
        "operationId": "getDocumentDetailsByAccountIdAndCheckListUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "query",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "checkListId",
            "in": "query",
            "description": "checkListId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "query",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/document/{tenantId}/{documentId}": {
      "get": {
        "tags": ["document-controller"],
        "summary": "getDocumentDetailsById",
        "operationId": "getDocumentDetailsByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "documentId",
            "in": "path",
            "description": "documentId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "put": {
        "tags": ["document-controller"],
        "summary": "updateDocument",
        "operationId": "updateDocumentUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "documentId",
            "in": "path",
            "description": "documentId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "documentsUpdateResource",
            "description": "documentsUpdateResource",
            "required": true,
            "schema": { "$ref": "#/definitions/DocumentsUpdateResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/error": {
      "get": {
        "tags": ["basic-error-controller"],
        "summary": "errorHtml",
        "operationId": "errorHtmlUsingGET",
        "produces": ["text/html"],
        "responses": {
          "200": {
            "description": "OK",
            "schema": { "$ref": "#/definitions/ModelAndView" }
          },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "head": {
        "tags": ["basic-error-controller"],
        "summary": "errorHtml",
        "operationId": "errorHtmlUsingHEAD",
        "consumes": ["application/json"],
        "produces": ["text/html"],
        "responses": {
          "200": {
            "description": "OK",
            "schema": { "$ref": "#/definitions/ModelAndView" }
          },
          "204": { "description": "No Content" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        },
        "deprecated": false
      },
      "post": {
        "tags": ["basic-error-controller"],
        "summary": "errorHtml",
        "operationId": "errorHtmlUsingPOST",
        "consumes": ["application/json"],
        "produces": ["text/html"],
        "responses": {
          "200": {
            "description": "OK",
            "schema": { "$ref": "#/definitions/ModelAndView" }
          },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "put": {
        "tags": ["basic-error-controller"],
        "summary": "errorHtml",
        "operationId": "errorHtmlUsingPUT",
        "consumes": ["application/json"],
        "produces": ["text/html"],
        "responses": {
          "200": {
            "description": "OK",
            "schema": { "$ref": "#/definitions/ModelAndView" }
          },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "delete": {
        "tags": ["basic-error-controller"],
        "summary": "errorHtml",
        "operationId": "errorHtmlUsingDELETE",
        "produces": ["text/html"],
        "responses": {
          "200": {
            "description": "OK",
            "schema": { "$ref": "#/definitions/ModelAndView" }
          },
          "204": { "description": "No Content" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        },
        "deprecated": false
      },
      "options": {
        "tags": ["basic-error-controller"],
        "summary": "errorHtml",
        "operationId": "errorHtmlUsingOPTIONS",
        "consumes": ["application/json"],
        "produces": ["text/html"],
        "responses": {
          "200": {
            "description": "OK",
            "schema": { "$ref": "#/definitions/ModelAndView" }
          },
          "204": { "description": "No Content" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        },
        "deprecated": false
      },
      "patch": {
        "tags": ["basic-error-controller"],
        "summary": "errorHtml",
        "operationId": "errorHtmlUsingPATCH",
        "consumes": ["application/json"],
        "produces": ["text/html"],
        "responses": {
          "200": {
            "description": "OK",
            "schema": { "$ref": "#/definitions/ModelAndView" }
          },
          "204": { "description": "No Content" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        },
        "deprecated": false
      }
    },
    "/hystrix": {
      "get": {
        "tags": ["hystrix-dashboard-controller"],
        "summary": "home",
        "operationId": "homeUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "contextPath",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayCountry",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayLanguage",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayScript",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayVariant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.script",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.unicodeLocaleAttributes",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.unicodeLocaleKeys",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.variant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "remoteUser",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "secure",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "userPrincipal.name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "string" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "head": {
        "tags": ["hystrix-dashboard-controller"],
        "summary": "home",
        "operationId": "homeUsingHEAD",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "contextPath",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayCountry",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayLanguage",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayScript",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayVariant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.script",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.unicodeLocaleAttributes",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.unicodeLocaleKeys",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.variant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "remoteUser",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "secure",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "userPrincipal.name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "string" } },
          "204": { "description": "No Content" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        },
        "deprecated": false
      },
      "post": {
        "tags": ["hystrix-dashboard-controller"],
        "summary": "home",
        "operationId": "homeUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "contextPath",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayCountry",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayLanguage",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayScript",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayVariant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.script",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.unicodeLocaleAttributes",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.unicodeLocaleKeys",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.variant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "remoteUser",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "secure",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "userPrincipal.name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "string" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "put": {
        "tags": ["hystrix-dashboard-controller"],
        "summary": "home",
        "operationId": "homeUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "contextPath",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayCountry",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayLanguage",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayScript",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayVariant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.script",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.unicodeLocaleAttributes",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.unicodeLocaleKeys",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.variant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "remoteUser",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "secure",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "userPrincipal.name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "string" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "delete": {
        "tags": ["hystrix-dashboard-controller"],
        "summary": "home",
        "operationId": "homeUsingDELETE",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "contextPath",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayCountry",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayLanguage",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayScript",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayVariant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.script",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.unicodeLocaleAttributes",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.unicodeLocaleKeys",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.variant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "remoteUser",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "secure",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "userPrincipal.name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "string" } },
          "204": { "description": "No Content" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        },
        "deprecated": false
      },
      "options": {
        "tags": ["hystrix-dashboard-controller"],
        "summary": "home",
        "operationId": "homeUsingOPTIONS",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "contextPath",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayCountry",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayLanguage",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayScript",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayVariant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.script",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.unicodeLocaleAttributes",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.unicodeLocaleKeys",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.variant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "remoteUser",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "secure",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "userPrincipal.name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "string" } },
          "204": { "description": "No Content" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        },
        "deprecated": false
      },
      "patch": {
        "tags": ["hystrix-dashboard-controller"],
        "summary": "home",
        "operationId": "homeUsingPATCH",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "contextPath",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayCountry",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayLanguage",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayScript",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayVariant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.script",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.unicodeLocaleAttributes",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.unicodeLocaleKeys",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.variant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "remoteUser",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "secure",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "userPrincipal.name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "string" } },
          "204": { "description": "No Content" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        },
        "deprecated": false
      }
    },
    "/hystrix/{path}": {
      "get": {
        "tags": ["hystrix-dashboard-controller"],
        "summary": "monitor",
        "operationId": "monitorUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "contextPath",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayCountry",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayLanguage",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayScript",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayVariant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.script",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.unicodeLocaleAttributes",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.unicodeLocaleKeys",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.variant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "path",
            "in": "path",
            "description": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "remoteUser",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "secure",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "userPrincipal.name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "string" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "head": {
        "tags": ["hystrix-dashboard-controller"],
        "summary": "monitor",
        "operationId": "monitorUsingHEAD",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "contextPath",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayCountry",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayLanguage",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayScript",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayVariant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.script",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.unicodeLocaleAttributes",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.unicodeLocaleKeys",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.variant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "path",
            "in": "path",
            "description": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "remoteUser",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "secure",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "userPrincipal.name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "string" } },
          "204": { "description": "No Content" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        },
        "deprecated": false
      },
      "post": {
        "tags": ["hystrix-dashboard-controller"],
        "summary": "monitor",
        "operationId": "monitorUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "contextPath",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayCountry",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayLanguage",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayScript",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayVariant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.script",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.unicodeLocaleAttributes",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.unicodeLocaleKeys",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.variant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "path",
            "in": "path",
            "description": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "remoteUser",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "secure",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "userPrincipal.name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "string" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "put": {
        "tags": ["hystrix-dashboard-controller"],
        "summary": "monitor",
        "operationId": "monitorUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "contextPath",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayCountry",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayLanguage",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayScript",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayVariant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.script",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.unicodeLocaleAttributes",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.unicodeLocaleKeys",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.variant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "path",
            "in": "path",
            "description": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "remoteUser",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "secure",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "userPrincipal.name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "string" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "delete": {
        "tags": ["hystrix-dashboard-controller"],
        "summary": "monitor",
        "operationId": "monitorUsingDELETE",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "contextPath",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayCountry",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayLanguage",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayScript",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayVariant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.script",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.unicodeLocaleAttributes",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.unicodeLocaleKeys",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.variant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "path",
            "in": "path",
            "description": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "remoteUser",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "secure",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "userPrincipal.name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "string" } },
          "204": { "description": "No Content" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        },
        "deprecated": false
      },
      "options": {
        "tags": ["hystrix-dashboard-controller"],
        "summary": "monitor",
        "operationId": "monitorUsingOPTIONS",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "contextPath",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayCountry",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayLanguage",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayScript",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayVariant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.script",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.unicodeLocaleAttributes",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.unicodeLocaleKeys",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.variant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "path",
            "in": "path",
            "description": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "remoteUser",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "secure",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "userPrincipal.name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "string" } },
          "204": { "description": "No Content" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        },
        "deprecated": false
      },
      "patch": {
        "tags": ["hystrix-dashboard-controller"],
        "summary": "monitor",
        "operationId": "monitorUsingPATCH",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "contextPath",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.ISO3Language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.country",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayCountry",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayLanguage",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayName",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayScript",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.displayVariant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.language",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.script",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "locale.unicodeLocaleAttributes",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.unicodeLocaleKeys",
            "in": "query",
            "required": false,
            "type": "array",
            "items": { "type": "string" },
            "collectionFormat": "multi"
          },
          {
            "name": "locale.variant",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "path",
            "in": "path",
            "description": "path",
            "required": true,
            "type": "string"
          },
          {
            "name": "remoteUser",
            "in": "query",
            "required": false,
            "type": "string"
          },
          {
            "name": "secure",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "userPrincipal.name",
            "in": "query",
            "required": false,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "string" } },
          "204": { "description": "No Content" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" }
        },
        "deprecated": false
      }
    },
    "/info/{tenantId}/search": {
      "get": {
        "tags": ["account-information-controller"],
        "summary": "searchAccountInformation",
        "operationId": "searchAccountInformationUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "pageNumber",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pageSize",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "paged",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.sorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.unsorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "name": "unpaged",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/info/{tenantId}/search-account": {
      "get": {
        "tags": ["account-information-controller"],
        "summary": "searchAccountInformationByAccountNo",
        "operationId": "searchAccountInformationByAccountNoUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountNumber",
            "in": "query",
            "description": "accountNumber",
            "required": true,
            "type": "string"
          },
          {
            "name": "offset",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "pageNumber",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "pageSize",
            "in": "query",
            "required": false,
            "type": "integer",
            "format": "int32"
          },
          {
            "name": "paged",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.sorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "sort.unsorted",
            "in": "query",
            "required": false,
            "type": "boolean"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "name": "unpaged",
            "in": "query",
            "required": false,
            "type": "boolean"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/interest-detail/{tenantId}/account/{accountId}": {
      "get": {
        "tags": ["interest-detail-controller"],
        "summary": "getInterestDetailsByAccountId",
        "operationId": "getInterestDetailsByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "post": {
        "tags": ["interest-detail-controller"],
        "summary": "saveInterestDetail",
        "operationId": "saveInterestDetailUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "interestDetailResource",
            "description": "interestDetailResource",
            "required": true,
            "schema": { "$ref": "#/definitions/ListInterestDetailResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/interest-detail/{tenantId}/account/{accountId}/history": {
      "get": {
        "tags": ["interest-detail-controller"],
        "summary": "getHistoryInterestByAccountId",
        "operationId": "getHistoryInterestByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/interest-detail/{tenantId}/account/{accountId}/pending": {
      "get": {
        "tags": ["interest-detail-controller"],
        "summary": "getPendingInterestByAccountId",
        "operationId": "getPendingInterestByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/interest-detail/{tenantId}/account/{accountId}/status/{status}": {
      "get": {
        "tags": ["interest-detail-controller"],
        "summary": "getInterestDetailsByAccountIdAndStatus",
        "operationId": "getInterestDetailsByAccountIdAndStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/interest-detail/{tenantId}/account/{accountId}/{interestDetId}": {
      "put": {
        "tags": ["interest-detail-controller"],
        "summary": "updateInterest",
        "operationId": "updateInterestUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "interestDetId",
            "in": "path",
            "description": "interestDetId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "interestDetailsResource",
            "description": "interestDetailsResource",
            "required": true,
            "schema": { "$ref": "#/definitions/UpdateInterestDetailsResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/interest-detail/{tenantId}/pending-approval/{accountId}/{approveMethod}": {
      "put": {
        "tags": ["interest-detail-controller"],
        "summary": "getApproveRejectPendingData",
        "operationId": "getApproveRejectPendingDataUsingPUT_4",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "approveMethod",
            "in": "path",
            "description": "approveMethod",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/interest-detail/{tenantId}/{id}": {
      "get": {
        "tags": ["interest-detail-controller"],
        "summary": "getInterestDetailById",
        "operationId": "getInterestDetailByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/interest-detail/{tenantId}/{id}/pending": {
      "get": {
        "tags": ["interest-detail-controller"],
        "summary": "getPendingInterestDetailsById",
        "operationId": "getPendingInterestDetailsByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/module-limit/{tenantId}": {
      "post": {
        "tags": ["module-limit-controller"],
        "summary": "addModuleLimit",
        "operationId": "addModuleLimitUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "addModuleLimitRequest",
            "description": "addModuleLimitRequest",
            "required": true,
            "schema": { "$ref": "#/definitions/AddModuleLimitRequest" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/module-limit/{tenantId}/all": {
      "get": {
        "tags": ["module-limit-controller"],
        "summary": "getAllModuleLimit",
        "operationId": "getAllModuleLimitUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/module-limit/{tenantId}/status/{status}": {
      "get": {
        "tags": ["module-limit-controller"],
        "summary": "getModuleLimitByStatus",
        "operationId": "getModuleLimitByStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/module-limit/{tenantId}/{id}": {
      "get": {
        "tags": ["module-limit-controller"],
        "summary": "getModuleLimitById",
        "operationId": "getModuleLimitByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/nominee/{tenantId}/account/{accountId}": {
      "get": {
        "tags": ["nominee-details-controller"],
        "summary": "getNomineeByAccountId",
        "operationId": "getNomineeByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "post": {
        "tags": ["nominee-details-controller"],
        "summary": "saveNomineeDetail",
        "operationId": "saveNomineeDetailUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "listNomineeResource",
            "description": "listNomineeResource",
            "required": true,
            "schema": { "$ref": "#/definitions/ListNomineeResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/nominee/{tenantId}/account/{accountId}/status/{status}": {
      "get": {
        "tags": ["nominee-details-controller"],
        "summary": "getNomineeByAccountIdAndStatus",
        "operationId": "getNomineeByAccountIdAndStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/nominee/{tenantId}/account/{accountId}/{nomineeId}": {
      "put": {
        "tags": ["nominee-details-controller"],
        "summary": "updateNomineeDetail",
        "operationId": "updateNomineeDetailUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "nomineeDetailsResource",
            "description": "nomineeDetailsResource",
            "required": true,
            "schema": { "$ref": "#/definitions/UpdateNomineeDetailsResource" }
          },
          {
            "name": "nomineeId",
            "in": "path",
            "description": "nomineeId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/nominee/{tenantId}/pending-approval/{accountId}/{approveMethod}": {
      "put": {
        "tags": ["nominee-details-controller"],
        "summary": "getApproveRejectPendingData",
        "operationId": "getApproveRejectPendingDataUsingPUT_5",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "approveMethod",
            "in": "path",
            "description": "approveMethod",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/nominee/{tenantId}/{id}": {
      "get": {
        "tags": ["nominee-details-controller"],
        "summary": "getNomineeDetailsById",
        "operationId": "getNomineeDetailsByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/notification/{tenantId}/account/{accountId}": {
      "get": {
        "tags": ["notification-detail-controller"],
        "summary": "getNotificationDetailsByAccountId",
        "operationId": "getNotificationDetailsByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "post": {
        "tags": ["notification-detail-controller"],
        "summary": "saveNotificationDetail",
        "operationId": "saveNotificationDetailUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "notificationDetailResource",
            "description": "notificationDetailResource",
            "required": true,
            "schema": { "$ref": "#/definitions/ListNotificationDetailResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/notification/{tenantId}/account/{accountId}/history": {
      "get": {
        "tags": ["notification-detail-controller"],
        "summary": "getHistoryInterestByAccountId",
        "operationId": "getHistoryInterestByAccountIdUsingGET_1",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/notification/{tenantId}/account/{accountId}/pending": {
      "get": {
        "tags": ["notification-detail-controller"],
        "summary": "getPendingInterestByAccountId",
        "operationId": "getPendingInterestByAccountIdUsingGET_1",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/notification/{tenantId}/account/{accountId}/status/{status}": {
      "get": {
        "tags": ["notification-detail-controller"],
        "summary": "getNotificationDetailsByAccountIdAndStatus",
        "operationId": "getNotificationDetailsByAccountIdAndStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/notification/{tenantId}/account/{accountId}/{id}": {
      "put": {
        "tags": ["notification-detail-controller"],
        "summary": "updateNotification",
        "operationId": "updateNotificationUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "updateNotificationDetailsResource",
            "description": "updateNotificationDetailsResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/UpdateNotificationDetailsResource"
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/notification/{tenantId}/pending-approval/{accountId}/{approveMethod}": {
      "put": {
        "tags": ["notification-detail-controller"],
        "summary": "getApproveRejectPendingData",
        "operationId": "getApproveRejectPendingDataUsingPUT_6",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "approveMethod",
            "in": "path",
            "description": "approveMethod",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/notification/{tenantId}/{id}": {
      "get": {
        "tags": ["notification-detail-controller"],
        "summary": "getInterestDetailById",
        "operationId": "getInterestDetailByIdUsingGET_1",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/notification/{tenantId}/{id}/pending": {
      "get": {
        "tags": ["notification-detail-controller"],
        "summary": "getPendingNotificationDetailsById",
        "operationId": "getPendingNotificationDetailsByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/operation-instruction/{tenantId}/account/{accountId}": {
      "get": {
        "tags": ["operation-instructions-details-controller"],
        "summary": "getOperationInstructionsByAccountId",
        "operationId": "getOperationInstructionsByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "post": {
        "tags": ["operation-instructions-details-controller"],
        "summary": "saveOperationInstructionsDetail",
        "operationId": "saveOperationInstructionsDetailUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "listOperationInstructionResource",
            "description": "listOperationInstructionResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/ListOperationInstructionResource"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/operation-instruction/{tenantId}/account/{accountId}/history": {
      "get": {
        "tags": ["operation-instructions-details-controller"],
        "summary": "getHistoryOperationInstructionsByAccountId",
        "operationId": "getHistoryOperationInstructionsByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/operation-instruction/{tenantId}/account/{accountId}/pending": {
      "get": {
        "tags": ["operation-instructions-details-controller"],
        "summary": "getPendingOperationInstructionsByAccountId",
        "operationId": "getPendingOperationInstructionsByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/operation-instruction/{tenantId}/account/{accountId}/status/{status}": {
      "get": {
        "tags": ["operation-instructions-details-controller"],
        "summary": "getOperationInstructionsByAccountIdAndStatus",
        "operationId": "getOperationInstructionsByAccountIdAndStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/operation-instruction/{tenantId}/account/{accountId}/{operationInstructionId}": {
      "put": {
        "tags": ["operation-instructions-details-controller"],
        "summary": "updateOperationInstructionsDetail",
        "operationId": "updateOperationInstructionsDetailUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "operationInstructionId",
            "in": "path",
            "description": "operationInstructionId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "operationInstructionsResources",
            "description": "operationInstructionsResources",
            "required": true,
            "schema": {
              "$ref": "#/definitions/UpdateOperationInstructionsResources"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/operation-instruction/{tenantId}/operation-instruction/{operationInstructionId}": {
      "post": {
        "tags": ["operation-instructions-details-controller"],
        "summary": "saveOperationInstructionsDetail",
        "operationId": "saveOperationInstructionsDetailUsingPOST_1",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "listOperationInstructionResource",
            "description": "listOperationInstructionResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/ListOperationInstructionEligiblePersonResource"
            }
          },
          {
            "name": "operationInstructionId",
            "in": "path",
            "description": "operationInstructionId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/operation-instruction/{tenantId}/pending-approval/{accountId}/{approveMethod}": {
      "put": {
        "tags": ["operation-instructions-details-controller"],
        "summary": "getApproveRejectPendingData",
        "operationId": "getApproveRejectPendingDataUsingPUT_7",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "approveMethod",
            "in": "path",
            "description": "approveMethod",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/operation-instruction/{tenantId}/pending/{id}": {
      "get": {
        "tags": ["operation-instructions-details-controller"],
        "summary": "getPendingOperationInstructionsById",
        "operationId": "getPendingOperationInstructionsByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/operation-instruction/{tenantId}/{id}": {
      "get": {
        "tags": ["operation-instructions-details-controller"],
        "summary": "getOperationInstructionsById",
        "operationId": "getOperationInstructionsByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft-request/new-od/{tenantId}": {
      "post": {
        "tags": ["over-draft-request-controller"],
        "summary": "saveNewOverDraftRequest",
        "operationId": "saveNewOverDraftRequestUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "overDraftRequestResource",
            "description": "overDraftRequestResource",
            "required": true,
            "schema": { "$ref": "#/definitions/OverDraftRequestResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft-request/renewal-od/{tenantId}/{id}": {
      "post": {
        "tags": ["over-draft-request-controller"],
        "summary": "saveRenewalOverDraftRequest",
        "operationId": "saveRenewalOverDraftRequestUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "overDraftRenewalRequestResource",
            "description": "overDraftRenewalRequestResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/OverDraftRenewalRequestResource"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft-request/{tenantId}/all": {
      "get": {
        "tags": ["over-draft-request-controller"],
        "summary": "getAllOverDraftRequest",
        "operationId": "getAllOverDraftRequestUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft-request/{tenantId}/approve-reject/{id}": {
      "post": {
        "tags": ["over-draft-request-controller"],
        "summary": "approveOrRejectOD",
        "operationId": "approveOrRejectODUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "overdraftConfirmCancelRequestResource",
            "description": "overdraftConfirmCancelRequestResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/OverdraftConfirmCancelRequestResource"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft-request/{tenantId}/overdraft-date-range": {
      "get": {
        "tags": ["over-draft-request-controller"],
        "summary": "getAllOverDraftRequestByDateRange",
        "operationId": "getAllOverDraftRequestByDateRangeUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "endDate",
            "in": "query",
            "description": "endDate",
            "required": true,
            "type": "string"
          },
          {
            "name": "startDate",
            "in": "query",
            "description": "startDate",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft-request/{tenantId}/overdraft-type/{type}": {
      "get": {
        "tags": ["over-draft-request-controller"],
        "summary": "getAllOverDraftRequestByType",
        "operationId": "getAllOverDraftRequestByTypeUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "name": "type",
            "in": "path",
            "description": "type",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft-request/{tenantId}/renewal-execute": {
      "post": {
        "tags": ["over-draft-request-controller"],
        "summary": "overDraftRenewalProcessScheduler",
        "operationId": "overDraftRenewalProcessSchedulerUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft-request/{tenantId}/status/{status}": {
      "get": {
        "tags": ["over-draft-request-controller"],
        "summary": "getAllOverDraftRequestByStatus",
        "operationId": "getAllOverDraftRequestByStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft-request/{tenantId}/update/{id}": {
      "put": {
        "tags": ["over-draft-request-controller"],
        "summary": "updateOverDraftRequest",
        "operationId": "updateOverDraftRequestUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "updateOverDraftRequestResource",
            "description": "updateOverDraftRequestResource",
            "required": true,
            "schema": { "$ref": "#/definitions/UpdateOverDraftRequestResource" }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft-request/{tenantId}/{id}": {
      "get": {
        "tags": ["over-draft-request-controller"],
        "summary": "getAllOverDraftRequestById",
        "operationId": "getAllOverDraftRequestByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft/{tenantId}/account/{accountId}": {
      "get": {
        "tags": ["overdraft-detail-controller"],
        "summary": "getOverDraftDetailsByAccountId",
        "operationId": "getOverDraftDetailsByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "post": {
        "tags": ["overdraft-detail-controller"],
        "summary": "updateOverDraftDetailsDetail",
        "operationId": "updateOverDraftDetailsDetailUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "listOverDraftDetailsResource",
            "description": "listOverDraftDetailsResource",
            "required": true,
            "schema": { "$ref": "#/definitions/ListOverdraftResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft/{tenantId}/account/{accountId}/status/{status}": {
      "get": {
        "tags": ["overdraft-detail-controller"],
        "summary": "getOverDraftDetailsyAccountIdAndStatus",
        "operationId": "getOverDraftDetailsyAccountIdAndStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft/{tenantId}/account/{accountId}/{id}": {
      "put": {
        "tags": ["overdraft-detail-controller"],
        "summary": "updateOverDraftDetailsDetail",
        "operationId": "updateOverDraftDetailsDetailUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "overDraftDetailsResource",
            "description": "overDraftDetailsResource",
            "required": true,
            "schema": { "$ref": "#/definitions/UpdateOverDraftDetailsResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft/{tenantId}/od-agreement/{accountId}": {
      "put": {
        "tags": ["overdraft-detail-controller"],
        "summary": "getApproveRejectPendingData",
        "operationId": "getApproveRejectPendingDataUsingPUT_8",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "overdraftAgreementDetailsResource",
            "description": "overdraftAgreementDetailsResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/OverdraftAgreementDetailsResource"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft/{tenantId}/pending-approval/{id}/{approveMethod}": {
      "put": {
        "tags": ["overdraft-detail-controller"],
        "summary": "getApproveRejectPendingData",
        "operationId": "getApproveRejectPendingDataUsingPUT_9",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "approveMethod",
            "in": "path",
            "description": "approveMethod",
            "required": true,
            "type": "string"
          },
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/overdraft/{tenantId}/{id}": {
      "get": {
        "tags": ["overdraft-detail-controller"],
        "summary": "getOverDraftDetailsById",
        "operationId": "getOverDraftDetailsByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/purpose/{tenantId}/account/{accountId}": {
      "get": {
        "tags": ["purpose-controller"],
        "summary": "getPurposeByAccountId",
        "operationId": "getPurposeByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "post": {
        "tags": ["purpose-controller"],
        "summary": "updatePurposeDetail",
        "operationId": "updatePurposeDetailUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "listPurposeResource",
            "description": "listPurposeResource",
            "required": true,
            "schema": { "$ref": "#/definitions/ListPurposeResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/purpose/{tenantId}/account/{accountId}/status/{status}": {
      "get": {
        "tags": ["purpose-controller"],
        "summary": "getPurposeyAccountIdAndStatus",
        "operationId": "getPurposeyAccountIdAndStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/purpose/{tenantId}/account/{accountId}/{id}": {
      "put": {
        "tags": ["purpose-controller"],
        "summary": "updatePurposeDetail",
        "operationId": "updatePurposeDetailUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "purposeResource",
            "description": "purposeResource",
            "required": true,
            "schema": { "$ref": "#/definitions/UpdatePurposeResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/purpose/{tenantId}/pending-approval/{accountId}/{approveMethod}": {
      "put": {
        "tags": ["purpose-controller"],
        "summary": "getApproveRejectPendingData",
        "operationId": "getApproveRejectPendingDataUsingPUT_10",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "approveMethod",
            "in": "path",
            "description": "approveMethod",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/purpose/{tenantId}/{id}": {
      "get": {
        "tags": ["purpose-controller"],
        "summary": "getPurposeById",
        "operationId": "getPurposeByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/remarks/{tenantId}/account/{accountId}": {
      "get": {
        "tags": ["account-remarks-controller"],
        "summary": "getRemarksByAccountId",
        "operationId": "getRemarksByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "post": {
        "tags": ["account-remarks-controller"],
        "summary": "saveRemarksDetail",
        "operationId": "saveRemarksDetailUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "remarksResource",
            "description": "remarksResource",
            "required": true,
            "schema": { "$ref": "#/definitions/ListRemarksResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/remarks/{tenantId}/account/{accountId}/history": {
      "get": {
        "tags": ["account-remarks-controller"],
        "summary": "getHistoryRemarksByAccountId",
        "operationId": "getHistoryRemarksByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/remarks/{tenantId}/account/{accountId}/pending": {
      "get": {
        "tags": ["account-remarks-controller"],
        "summary": "getPendingRemarksByAccountId",
        "operationId": "getPendingRemarksByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/remarks/{tenantId}/account/{accountId}/status/{status}": {
      "get": {
        "tags": ["account-remarks-controller"],
        "summary": "getRemarksByAccountIdAndStatus",
        "operationId": "getRemarksByAccountIdAndStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/remarks/{tenantId}/account/{accountId}/{remarksId}": {
      "put": {
        "tags": ["account-remarks-controller"],
        "summary": "updateRemarks",
        "operationId": "updateRemarksUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountRemarksResource",
            "description": "accountRemarksResource",
            "required": true,
            "schema": { "$ref": "#/definitions/UpdateAccountRemarksResource" }
          },
          {
            "name": "remarksId",
            "in": "path",
            "description": "remarksId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/remarks/{tenantId}/pending-approval/{accountId}/{approveMethod}": {
      "put": {
        "tags": ["account-remarks-controller"],
        "summary": "getApproveRejectPendingData",
        "operationId": "getApproveRejectPendingDataUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "approveMethod",
            "in": "path",
            "description": "approveMethod",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/remarks/{tenantId}/{id}": {
      "get": {
        "tags": ["account-remarks-controller"],
        "summary": "getRemarksById",
        "operationId": "getRemarksByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/remarks/{tenantId}/{recordId}/pending": {
      "get": {
        "tags": ["account-remarks-controller"],
        "summary": "getPendingRemarksById",
        "operationId": "getPendingRemarksByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "recordId",
            "in": "path",
            "description": "recordId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/settings/display": {
      "get": {
        "tags": ["settings-controller"],
        "summary": "displaySettings",
        "operationId": "displaySettingsUsingGET",
        "produces": ["*/*"],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "string" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/sof/{tenantId}/account/{accountId}": {
      "get": {
        "tags": ["source-of-funds-controller"],
        "summary": "getSourceOfFundsByAccountId",
        "operationId": "getSourceOfFundsByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      },
      "post": {
        "tags": ["source-of-funds-controller"],
        "summary": "updateSourceOfFundsDetail",
        "operationId": "updateSourceOfFundsDetailUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "listSOFResource",
            "description": "listSOFResource",
            "required": true,
            "schema": { "$ref": "#/definitions/ListSOFResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/sof/{tenantId}/account/{accountId}/status/{status}": {
      "get": {
        "tags": ["source-of-funds-controller"],
        "summary": "getSourceOfFundsyAccountIdAndStatus",
        "operationId": "getSourceOfFundsyAccountIdAndStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/sof/{tenantId}/account/{accountId}/{id}": {
      "put": {
        "tags": ["source-of-funds-controller"],
        "summary": "updateSourceOfFundsDetail",
        "operationId": "updateSourceOfFundsDetailUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "sourceOfFundsResource",
            "description": "sourceOfFundsResource",
            "required": true,
            "schema": { "$ref": "#/definitions/UpdateSourceOfFundsResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/sof/{tenantId}/pending-approval/{accountId}/{approveMethod}": {
      "put": {
        "tags": ["source-of-funds-controller"],
        "summary": "getApproveRejectPendingData",
        "operationId": "getApproveRejectPendingDataUsingPUT_11",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "approveMethod",
            "in": "path",
            "description": "approveMethod",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/sof/{tenantId}/{id}": {
      "get": {
        "tags": ["source-of-funds-controller"],
        "summary": "getSourceOfFundsById",
        "operationId": "getSourceOfFundsByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/statement-status/{tenantId}/account-id/{accountId}": {
      "get": {
        "tags": ["statement-status-controller"],
        "summary": "getAllStatementStatusByAccountId",
        "operationId": "getAllStatementStatusByAccountIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/statement-status/{tenantId}/account/approval/{accountId}/{approveMethod}": {
      "put": {
        "tags": ["statement-status-controller"],
        "summary": "getApproveRejectPendingData",
        "operationId": "getApproveRejectPendingDataUsingPUT_12",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "accountProcessHelperResource",
            "description": "accountProcessHelperResource",
            "required": true,
            "schema": { "$ref": "#/definitions/AccountProcessHelperResource" }
          },
          {
            "name": "approveMethod",
            "in": "path",
            "description": "approveMethod",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/statement-status/{tenantId}/account/{accountId}": {
      "post": {
        "tags": ["statement-status-controller"],
        "summary": "addStatementStatus",
        "operationId": "addStatementStatusUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "in": "body",
            "name": "listStatementStatusResource",
            "description": "listStatementStatusResource",
            "required": true,
            "schema": { "$ref": "#/definitions/ListStatementStatusResource" }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/statement-status/{tenantId}/account/{accountId}/{id}": {
      "put": {
        "tags": ["statement-status-controller"],
        "summary": "updateStatementStatus",
        "operationId": "updateStatementStatusUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "updateStatementStatusResource",
            "description": "updateStatementStatusResource",
            "required": true,
            "schema": { "$ref": "#/definitions/UpdateStatementStatusResource" }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/statement-status/{tenantId}/accounts/{frequency}": {
      "post": {
        "tags": ["statement-status-controller"],
        "summary": "getStatementStatuss",
        "operationId": "getStatementStatussUsingPOST",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "frequency",
            "in": "path",
            "description": "frequency",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "listStatementStatusResource",
            "description": "listStatementStatusResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/StatementStatusBulkAccountResource"
            }
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/statement-status/{tenantId}/active/account/{accountId}/{id}": {
      "put": {
        "tags": ["statement-status-controller"],
        "summary": "updateActiveStatementStatus",
        "operationId": "updateActiveStatementStatusUsingPUT",
        "consumes": ["application/json"],
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "accountId",
            "in": "path",
            "description": "accountId",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "in": "body",
            "name": "updateActiveStatementStatusResource",
            "description": "updateActiveStatementStatusResource",
            "required": true,
            "schema": {
              "$ref": "#/definitions/UpdateActiveStatementStatusResource"
            }
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "201": { "description": "Created" },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/statement-status/{tenantId}/all": {
      "get": {
        "tags": ["statement-status-controller"],
        "summary": "getAllStatementStatuses",
        "operationId": "getAllStatementStatusesUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/statement-status/{tenantId}/frequency/{frequency}": {
      "get": {
        "tags": ["statement-status-controller"],
        "summary": "getAllStatementStatusByFrequncy",
        "operationId": "getAllStatementStatusByFrequncyUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "frequency",
            "in": "path",
            "description": "frequency",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/statement-status/{tenantId}/method/{method}": {
      "get": {
        "tags": ["statement-status-controller"],
        "summary": "getAllStatementStatusByMethod",
        "operationId": "getAllStatementStatusByMethodUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "method",
            "in": "path",
            "description": "method",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/statement-status/{tenantId}/status/{status}": {
      "get": {
        "tags": ["statement-status-controller"],
        "summary": "getAllStatementStatusByStatus",
        "operationId": "getAllStatementStatusByStatusUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "status",
            "in": "path",
            "description": "status",
            "required": true,
            "type": "string"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/statement-status/{tenantId}/type/{type}": {
      "get": {
        "tags": ["statement-status-controller"],
        "summary": "getAllStatementStatusByType",
        "operationId": "getAllStatementStatusByTypeUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          },
          {
            "name": "type",
            "in": "path",
            "description": "type",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    },
    "/statement-status/{tenantId}/{id}": {
      "get": {
        "tags": ["statement-status-controller"],
        "summary": "getAllStatementStatusById",
        "operationId": "getAllStatementStatusByIdUsingGET",
        "produces": ["*/*"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "id",
            "required": true,
            "type": "integer",
            "format": "int64"
          },
          {
            "name": "tenantId",
            "in": "path",
            "description": "tenantId",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": { "description": "OK", "schema": { "type": "object" } },
          "401": { "description": "Unauthorized" },
          "403": { "description": "Forbidden" },
          "404": { "description": "Not Found" }
        },
        "deprecated": false
      }
    }
  },
  "definitions": {
    "ATMCardDetailsResource": {
      "type": "object",
      "required": [
        "blockTransactions",
        "cardCollectionType",
        "cardExpireDate",
        "cardFeeEnabled",
        "cardIssuedDate",
        "cardNumber",
        "cardType",
        "cardTypeId",
        "collectionPoint",
        "foreignTransactionEnabled",
        "issuedBy",
        "nameOnCard",
        "posEnabled",
        "schemeType",
        "schemeTypeId",
        "widrawalLimit"
      ],
      "properties": {
        "blockTransactions": { "type": "string", "pattern": "Yes|No" },
        "cardCollectionType": { "type": "string", "pattern": "Branch|Post" },
        "cardExpireDate": {
          "type": "string",
          "pattern": "^$|\\d{4}(\\/)(((0)[0-9])|((1)[0-2]))(\\/)([0-2][0-9]|(3)[0-1])$"
        },
        "cardFeeEnabled": { "type": "string", "pattern": "Yes|No" },
        "cardIssuedDate": {
          "type": "string",
          "pattern": "^$|\\d{4}(\\/)(((0)[0-9])|((1)[0-2]))(\\/)([0-2][0-9]|(3)[0-1])$"
        },
        "cardNumber": { "type": "string" },
        "cardType": { "type": "string" },
        "cardTypeId": { "type": "string", "pattern": "^$|[0-9]+" },
        "collectionPoint": { "type": "string" },
        "collectionPointId": { "type": "string", "pattern": "^$|[0-9]+" },
        "foreignTransactionEnabled": { "type": "string", "pattern": "Yes|No" },
        "issuedBy": { "type": "string" },
        "nameOnCard": { "type": "string" },
        "posEnabled": { "type": "string", "pattern": "Yes|No" },
        "remarks": { "type": "string" },
        "schemeType": { "type": "string" },
        "schemeTypeId": { "type": "string", "pattern": "^$|[0-9]+" },
        "status": { "type": "string", "pattern": "^$|ACTIVE" },
        "widrawalLimit": { "type": "string", "pattern": "[0-9]*\\.?[0-9]*" }
      },
      "title": "ATMCardDetailsResource"
    },
    "AccountCharges": {
      "type": "object",
      "properties": {
        "chargeAmount": { "type": "string", "pattern": "^$|[0-9]*\\.?[0-9]*" },
        "feeTypeCode": { "type": "string" }
      },
      "title": "AccountCharges"
    },
    "AccountCloseCancelResource": {
      "type": "object",
      "required": ["version"],
      "properties": {
        "id": { "type": "string" },
        "remark": { "type": "string" },
        "tenantId": { "type": "string" },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "AccountCloseCancelResource"
    },
    "AccountCloseDetResource": {
      "type": "object",
      "required": [
        "accountNoId",
        "actualAmount",
        "balanceAmount",
        "bonusInterestAmount",
        "creditInterestAmount",
        "overdraftInterestAmount",
        "remark",
        "totalChargeAmount"
      ],
      "properties": {
        "accountNoId": { "type": "string", "pattern": "^$|[0-9]+" },
        "actualAmount": {
          "type": "string",
          "pattern": "^-?\\d*[0-9](\\.\\d{1,2})?$"
        },
        "balanceAmount": {
          "type": "string",
          "pattern": "^-?\\d*[0-9](\\.\\d{1,2})?$"
        },
        "bonusInterestAmount": {
          "type": "string",
          "pattern": "^\\d*[0-9](\\.\\d{1,2})?$"
        },
        "charges": {
          "type": "array",
          "items": { "$ref": "#/definitions/ChargeAddResource" }
        },
        "creditInterestAmount": {
          "type": "string",
          "pattern": "^\\d*[0-9](\\.\\d{1,2})?$"
        },
        "id": { "type": "string" },
        "overdraftInterestAmount": {
          "type": "string",
          "pattern": "^\\d*[0-9](\\.\\d{1,2})?$"
        },
        "remark": { "type": "string", "minLength": 0, "maxLength": 255 },
        "tenantId": { "type": "string" },
        "totalChargeAmount": {
          "type": "string",
          "pattern": "^\\d*[0-9](\\.\\d{1,2})?$"
        }
      },
      "title": "AccountCloseDetResource"
    },
    "AccountCloseFinalWithdrawalApprovalResource": {
      "type": "object",
      "required": ["version"],
      "properties": {
        "id": { "type": "string" },
        "tenantId": { "type": "string" },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "AccountCloseFinalWithdrawalApprovalResource"
    },
    "AccountCloseResource": {
      "type": "object",
      "required": ["version"],
      "properties": {
        "id": { "type": "string" },
        "tenantId": { "type": "string" },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "AccountCloseResource"
    },
    "AccountCloseSettlementAmountResource": {
      "type": "object",
      "properties": {
        "accountActualBalance": { "type": "number" },
        "accountAvailableBalance": { "type": "number" },
        "accruedBonusInterestAmount": { "type": "number" },
        "accruedInterestAmount": { "type": "number" },
        "accruedOdInterestAmount": { "type": "number" },
        "accruedPenalInterestAmount": { "type": "number" },
        "chargeAmount": { "type": "number" },
        "depositAmount": { "type": "number" },
        "unrecoverableChargeAmount": { "type": "number" },
        "withdrawableAmount": { "type": "number" }
      },
      "title": "AccountCloseSettlementAmountResource"
    },
    "AccountHelperResourceWithChargeValidation": {
      "type": "object",
      "properties": {
        "accountCharges": {
          "type": "array",
          "items": { "$ref": "#/definitions/AccountCharges" }
        },
        "hasApproval": { "type": "string" },
        "note": { "type": "string" }
      },
      "title": "AccountHelperResourceWithChargeValidation"
    },
    "AccountProcessHelperResource": {
      "type": "object",
      "properties": { "note": { "type": "string" } },
      "title": "AccountProcessHelperResource"
    },
    "AccountRemarksResource": {
      "type": "object",
      "properties": {
        "casaOtherRemarks": { "type": "string" },
        "casaRemarkForAdditionalAccount": { "type": "string" },
        "casaStatus": { "type": "string", "pattern": "^$|ACTIVE" }
      },
      "title": "AccountRemarksResource"
    },
    "AccountResource": {
      "type": "object",
      "required": [
        "accountCreateBranchOrganizationLevelId",
        "accountCreateBranchOrganizationLevelName",
        "accountOpenBranchOrganizationLevelId",
        "accountOpenBranchOrganizationLevelName",
        "accountProductCategoryCode",
        "accountProductCode",
        "accountType",
        "casaAccountOpenedDate",
        "casaAccountSubType",
        "casaAccountSubTypeId",
        "casaAllowMinusBalance",
        "casaAnticipatedFrequencyId",
        "casaAnticipatedValue",
        "casaAnticipatedValueId",
        "casaApplicantDetails",
        "casaCreatedBranch",
        "casaCurrency",
        "casaCurrencyCode",
        "casaCurrencyNumeric",
        "casaEnableDisableInterestCalculation",
        "casaIsChequeBookEnabled",
        "casaMaxAllowedCheckBooksPerRequest",
        "casaMinorAccountStatus",
        "casaOfficerName",
        "casaOpenBranch",
        "casaOwnershipType",
        "casaProduct",
        "casaProductCategory",
        "casaRestrictedStatus",
        "casaSchemeCode",
        "casaStopRequest",
        "casaSubProductCode",
        "casaSubProductId",
        "customerVisitRequired",
        "officerId",
        "otherCurrencyTransactionAllowed",
        "productType",
        "sweepingEnabled"
      ],
      "properties": {
        "accountCreateBranchOrganizationLevelId": {
          "type": "string",
          "pattern": "[0-9]+"
        },
        "accountCreateBranchOrganizationLevelName": { "type": "string" },
        "accountDescription": { "type": "string" },
        "accountOpenBranchOrganizationLevelId": {
          "type": "string",
          "pattern": "[0-9]+"
        },
        "accountOpenBranchOrganizationLevelName": { "type": "string" },
        "accountProductCategoryCode": { "type": "string" },
        "accountProductCode": { "type": "string" },
        "accountSubType": { "type": "integer", "format": "int64" },
        "accountType": { "type": "string" },
        "balanceRestrictedStatus": { "type": "string", "pattern": "Yes|No" },
        "bufferAmount": { "type": "string", "pattern": "[0-9]*\\.?[0-9]*" },
        "casaAccountName": { "type": "string" },
        "casaAccountOpenedDate": {
          "type": "string",
          "pattern": "^$|\\d{4}(\\/)(((0)[0-9])|((1)[0-2]))(\\/)([0-2][0-9]|(3)[0-1])$"
        },
        "casaAccountRemarks": {
          "type": "array",
          "items": { "$ref": "#/definitions/AccountRemarksResource" }
        },
        "casaAccountSubType": { "type": "string" },
        "casaAccountSubTypeId": { "type": "string", "pattern": "^$|[0-9]+" },
        "casaAccountTypeDescription": { "type": "string" },
        "casaAllowMinusBalance": { "type": "string", "pattern": "Yes|No" },
        "casaAnticipatedFrequencyId": {
          "type": "string",
          "pattern": "^$|[0-9]+"
        },
        "casaAnticipatedValue": { "type": "string" },
        "casaAnticipatedValueId": { "type": "string", "pattern": "^$|[0-9]+" },
        "casaApplicantDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/ApplicantDetailsResource" }
        },
        "casaAtmDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/ATMCardDetailsResource" }
        },
        "casaAutoChequeBookRequestEnabled": {
          "type": "string",
          "pattern": "Yes|No"
        },
        "casaAutoChequeBookRequestPeriod": {
          "type": "string",
          "pattern": "^$|[0-9]+"
        },
        "casaAutoChequeBookRequestPeriodFrequency": {
          "type": "string",
          "pattern": "^$|[0-9]+"
        },
        "casaCreatedBranch": { "type": "string", "pattern": "^$|[0-9]+" },
        "casaCurrency": { "type": "string", "pattern": "^$|[0-9]+" },
        "casaCurrencyCode": { "type": "string" },
        "casaCurrencyNumeric": { "type": "string", "pattern": "^$|[0-9]+" },
        "casaEnableDisableInterestCalculation": {
          "type": "string",
          "pattern": "Yes|No"
        },
        "casaEnableInterestOnOverdraft": {
          "type": "string",
          "pattern": "Yes|No"
        },
        "casaIsATMEnabled": { "type": "string", "pattern": "Yes|No" },
        "casaIsChequeBookEnabled": { "type": "string", "pattern": "Yes|No" },
        "casaKycStatus": { "type": "string", "pattern": "^$|Yes|No" },
        "casaMaxAllowedCheckBooksPerRequest": {
          "type": "string",
          "pattern": "^$|[0-9]+"
        },
        "casaMaxOverdraftLimit": {
          "type": "string",
          "pattern": "[0-9]*\\.?[0-9]*"
        },
        "casaMinorAccountStatus": {
          "type": "string",
          "pattern": "Minor with restrictions|Minor without restrictions"
        },
        "casaNickName": { "type": "string" },
        "casaNoOfChequesPerBook": { "type": "string", "pattern": "^$|[0-9]+" },
        "casaNomineeDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/NomineeDetailsResource" }
        },
        "casaOfficerName": { "type": "string" },
        "casaOpenBranch": { "type": "string", "pattern": "^$|[0-9]+" },
        "casaOperationInstructionsDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/OperationInstructionsResources" }
        },
        "casaOwnershipType": {
          "type": "string",
          "pattern": "SOLE OWNER|JOINT AND FIRST|JOINT AND OTHER|DELIGATE"
        },
        "casaProduct": { "type": "string", "pattern": "^$|[0-9]+" },
        "casaProductCategory": { "type": "string", "pattern": "[0-9]+" },
        "casaRestrictedStatus": { "type": "string", "pattern": "Yes|No" },
        "casaSchemeCode": { "type": "string" },
        "casaSourceOfFundsDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/SourceOfFundsResource" }
        },
        "casaStatementStatus": {
          "type": "array",
          "items": { "$ref": "#/definitions/AddStatementStatusResource" }
        },
        "casaStopRequest": { "type": "string", "pattern": "Yes|No" },
        "casaSubProductCode": { "type": "string" },
        "casaSubProductId": { "type": "string", "pattern": "^$|[0-9]+" },
        "chequeBookStockTypeId": {
          "type": "string",
          "pattern": "[0-9]*\\.?[0-9]*"
        },
        "chequeBookTypeId": { "type": "string", "pattern": "[0-9]*\\.?[0-9]*" },
        "chequeTypeId": { "type": "string", "pattern": "[0-9]*\\.?[0-9]*" },
        "customerVisitRequired": { "type": "string", "pattern": "Yes|No" },
        "documentDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/DocumentsResource" }
        },
        "draftId": { "type": "string", "pattern": "^$|[0-9]+" },
        "interestCalculationStartDate": {
          "type": "string",
          "pattern": "^$|\\d{4}(\\/)(((0)[0-9])|((1)[0-2]))(\\/)([0-2][0-9]|(3)[0-1])$"
        },
        "interestDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/InterestDetailsResource" }
        },
        "minimumAmountForSweeping": {
          "type": "string",
          "pattern": "[0-9]*\\.?[0-9]*"
        },
        "noOfVisitPerPeriod": { "type": "string", "pattern": "^$|[0-9]+" },
        "notificationDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/NotificationDetailsResource" }
        },
        "officerId": { "type": "string", "pattern": "^$|[0-9]+" },
        "otherCurrencyTransactionAllowed": {
          "type": "string",
          "pattern": "Yes|No"
        },
        "overdraftDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/OverDraftDetailsResource" }
        },
        "periodMethod": { "type": "string", "pattern": "[0-9]*\\.?[0-9]*" },
        "productType": { "type": "string" },
        "purposeDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/PurposeResource" }
        },
        "recoveryPercentage": {
          "type": "string",
          "pattern": "[0-9]*\\.?[0-9]*"
        },
        "recurringSweepingAllowed": { "type": "string", "pattern": "Yes|No" },
        "reversalLimit": { "type": "string", "pattern": "[0-9]*\\.?[0-9]*" },
        "secondaryAccountNo": { "type": "string" },
        "specialRate": { "type": "string", "pattern": "^$|[0-9]*\\.?[0-9]*" },
        "sweepingEnabled": { "type": "string", "pattern": "Yes|No" },
        "sweepingLimit": { "type": "string", "pattern": "[0-9]*\\.?[0-9]*" }
      },
      "title": "AccountResource"
    },
    "AccountStatusUpdateHandlerResource": {
      "type": "object",
      "required": ["accountStatus", "allowUpdate"],
      "properties": {
        "accountStatus": { "type": "string" },
        "allowUpdate": { "type": "string", "pattern": "Yes|No" },
        "status": { "type": "string", "pattern": "ACTIVE|INACTIVE" }
      },
      "title": "AccountStatusUpdateHandlerResource"
    },
    "AccountStatusUpdateHelperResource": {
      "type": "object",
      "required": ["accountId", "accountStatus"],
      "properties": {
        "accountId": { "type": "string", "pattern": "[0-9]+" },
        "accountStatus": { "type": "string" },
        "note": { "type": "string" }
      },
      "title": "AccountStatusUpdateHelperResource"
    },
    "AddModuleLimitRequest": {
      "type": "object",
      "required": ["code", "name", "status"],
      "properties": {
        "amount": { "type": "string", "pattern": "^$|\\d{1,20}\\.\\d{1,5}$" },
        "changeType": {
          "type": "string",
          "pattern": "INTEREST|REWARD|interest|reward"
        },
        "code": {
          "type": "string",
          "minLength": 4,
          "maxLength": 4,
          "pattern": "^$|^[a-zA-Z0-9]+$"
        },
        "description": { "type": "string", "minLength": 0, "maxLength": 350 },
        "designation": { "type": "string", "minLength": 0, "maxLength": 20 },
        "designationId": { "type": "string", "pattern": "^$|[0-9]+" },
        "effectiveDate": {
          "type": "string",
          "pattern": "^$|(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})$"
        },
        "limitType": { "type": "string", "pattern": "RATE|AMOUNT|rate|amount" },
        "name": { "type": "string", "minLength": 0, "maxLength": 70 },
        "personType": {
          "type": "string",
          "pattern": "USER|DESIGNATION|user|designation"
        },
        "product": { "type": "string", "minLength": 0, "maxLength": 20 },
        "productCategory": {
          "type": "string",
          "pattern": "GENERAL|ISLAMIC|general|islamic"
        },
        "productId": { "type": "string", "pattern": "^$|[0-9]+" },
        "rate": { "type": "string", "pattern": "^$|[+-]?([0-9]*[.])?[0-9]+" },
        "status": { "type": "string", "pattern": "ACTIVE|INACTIVE" },
        "subProduct": { "type": "string", "minLength": 0, "maxLength": 50 },
        "subProductId": { "type": "string", "pattern": "^$|[0-9]+" },
        "tenantId": { "type": "string" },
        "user": { "type": "string", "minLength": 0, "maxLength": 20 },
        "userId": { "type": "string", "pattern": "^$|[0-9]+" }
      },
      "title": "AddModuleLimitRequest"
    },
    "AddStatementStatusResource": {
      "type": "object",
      "required": [
        "deliveryFrequency",
        "deliveryFrequencyDesc",
        "deliveryMethod",
        "deliveryMethodDescription",
        "type",
        "typeDescription"
      ],
      "properties": {
        "createdUser": { "type": "string" },
        "deliveryFrequency": { "type": "string" },
        "deliveryFrequencyDesc": { "type": "string" },
        "deliveryMethod": { "type": "string" },
        "deliveryMethodDescription": { "type": "string" },
        "remarks": { "type": "string", "minLength": 0, "maxLength": 1000 },
        "status": { "type": "string", "pattern": "^$|ACTIVE|INACTIVE" },
        "type": { "type": "string" },
        "typeDescription": { "type": "string" }
      },
      "title": "AddStatementStatusResource"
    },
    "ApplicantDetailsResource": {
      "type": "object",
      "required": [
        "casaCustomerCode",
        "casaCustomerId",
        "casaCustomerName",
        "casaFullLegalName",
        "casaOwnershipType",
        "taxPercerntage"
      ],
      "properties": {
        "casaApplicantStatus": { "type": "string", "pattern": "^$|ACTIVE" },
        "casaCustomerCode": { "type": "string" },
        "casaCustomerId": { "type": "string", "pattern": "[0-9]+" },
        "casaCustomerName": { "type": "string" },
        "casaFullLegalName": { "type": "string" },
        "casaOwnershipType": {
          "type": "string",
          "pattern": "SOLE OWNER|JOINT AND FIRST|JOINT AND OTHER|DELIGATE"
        },
        "guardianDetail": {
          "type": "array",
          "items": { "$ref": "#/definitions/GuardianResource" }
        },
        "signatureId": { "type": "string", "pattern": "^$|[0-9]+" },
        "taxPercerntage": { "type": "string", "pattern": "[0-9]*\\.?[0-9]*" }
      },
      "title": "ApplicantDetailsResource"
    },
    "ApplicantSignatureResource": {
      "type": "object",
      "required": ["signatureId"],
      "properties": {
        "signatureId": { "type": "string", "pattern": "^$|[0-9]+" }
      },
      "title": "ApplicantSignatureResource"
    },
    "BulkStatusUpdateProcessHelperResource": {
      "type": "object",
      "properties": {
        "accountList": {
          "type": "array",
          "items": { "$ref": "#/definitions/AccountStatusUpdateHelperResource" }
        },
        "note": { "type": "string" }
      },
      "title": "BulkStatusUpdateProcessHelperResource"
    },
    "ChargeAddResource": {
      "type": "object",
      "required": [
        "amount",
        "feeCategoryCode",
        "feeCategoryId",
        "feeChargeDetailId",
        "feeIndicator",
        "feeTypeCode",
        "feeTypeId"
      ],
      "properties": {
        "amount": { "type": "string", "pattern": "^\\d*[0-9](\\.\\d{1,2})?$" },
        "chargeType": { "type": "string" },
        "deductIndicator": { "type": "string" },
        "feeCategoryCode": { "type": "string" },
        "feeCategoryId": { "type": "string", "pattern": "[0-9]+" },
        "feeChargeDetailId": { "type": "string", "pattern": "[0-9]+" },
        "feeIndicator": {
          "type": "string",
          "pattern": "AMOUNT|RATE|AMOUNTTIER|RATETIER"
        },
        "feeRate": { "type": "string", "pattern": "^\\d{1,3}(\\.\\d{1,2})?$" },
        "feeTypeCode": { "type": "string" },
        "feeTypeId": { "type": "string", "pattern": "[0-9]+" },
        "note": { "type": "string" },
        "processingType": { "type": "string" },
        "standingOrderId": { "type": "string" },
        "status": { "type": "string" },
        "transferType": { "type": "string" }
      },
      "title": "ChargeAddResource"
    },
    "CommonListResource": {
      "type": "object",
      "required": ["code", "description", "referenceCode", "status"],
      "properties": {
        "attribute1": { "type": "string" },
        "attribute2": { "type": "string" },
        "attribute3": { "type": "string" },
        "attribute4": { "type": "string" },
        "attribute5": { "type": "string" },
        "code": { "type": "string" },
        "description": { "type": "string" },
        "referenceCode": { "type": "string" },
        "status": { "type": "string", "pattern": "ACTIVE|INACTIVE" }
      },
      "title": "CommonListResource"
    },
    "DocumentCheckListDetailResource": {
      "type": "object",
      "required": [
        "applicableLevel",
        "documentTypeDescription",
        "documentTypeId",
        "mandatoryIndicator",
        "status"
      ],
      "properties": {
        "applicableLevel": {
          "type": "string",
          "pattern": "^$|CREATED|CREATE_DE_ACTIVATED|CREATE_RE_ACTIVATED|BLOCK_PENDING"
        },
        "documentTypeDescription": {
          "type": "string",
          "minLength": 0,
          "maxLength": 255
        },
        "documentTypeId": { "type": "string", "pattern": "^$|[0-9]+" },
        "mandatoryIndicator": { "type": "string", "pattern": "^$|YES|NO" },
        "status": { "type": "string", "pattern": "^$|ACTIVE|INACTIVE" }
      },
      "title": "DocumentCheckListDetailResource"
    },
    "DocumentCheckListResource": {
      "type": "object",
      "required": [
        "accountSubtype",
        "accountType",
        "documentCheckListStatus",
        "productCategory",
        "productCategoryDescription"
      ],
      "properties": {
        "accountSubtype": {
          "type": "string",
          "pattern": "^$|SAVINGS|CURRENTACCOUNTS"
        },
        "accountType": { "type": "string", "pattern": "^$|PERSONAL|BUSINESS" },
        "createdUser": { "type": "string" },
        "customerSubType": { "type": "string" },
        "customerSubTypeDescription": { "type": "string" },
        "docCheckListversion": { "type": "string", "pattern": "^$|[0-9]+" },
        "documentCheckListStatus": {
          "type": "string",
          "pattern": "^$|ACTIVE|INACTIVE"
        },
        "modifiedUser": { "type": "string" },
        "productAll": { "type": "string" },
        "productCategory": { "type": "string", "pattern": "^$|[0-9]+" },
        "productCategoryDescription": { "type": "string" },
        "productCode": { "type": "string" },
        "productCodeDescription": { "type": "string" }
      },
      "title": "DocumentCheckListResource"
    },
    "DocumentsResource": {
      "type": "object",
      "required": [
        "documentCheckListId",
        "documentName",
        "documentStatus",
        "documentType",
        "mandatoryStatus",
        "origin",
        "recievedDate"
      ],
      "properties": {
        "documentCheckListId": { "type": "string", "pattern": "^$|[0-9]+" },
        "documentList": {
          "type": "array",
          "items": { "$ref": "#/definitions/UploadFileResource" }
        },
        "documentName": { "type": "string" },
        "documentStatus": {
          "type": "string",
          "pattern": "Received|Not Received|Removed"
        },
        "documentType": { "type": "string", "pattern": "^$|[0-9]+" },
        "mandatoryStatus": { "type": "string", "pattern": "Yes|No" },
        "origin": { "type": "string" },
        "recievedDate": {
          "type": "string",
          "pattern": "^$|\\d{4}(\\/)(((0)[0-9])|((1)[0-2]))(\\/)([0-2][0-9]|(3)[0-1])$"
        },
        "status": { "type": "string", "pattern": "^$|ACTIVE" }
      },
      "title": "DocumentsResource"
    },
    "DocumentsUpdateResource": {
      "type": "object",
      "required": ["status", "version"],
      "properties": {
        "documentStatus": {
          "type": "string",
          "pattern": "Received|Not Received|Removed"
        },
        "mandatoryStatus": { "type": "string", "pattern": "Yes|No" },
        "status": { "type": "string", "pattern": "ACTIVE|INACTIVE" },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "DocumentsUpdateResource"
    },
    "DormantProcessHelperResource": {
      "type": "object",
      "properties": {
        "dormantAccountIdList": {
          "type": "array",
          "items": { "type": "integer", "format": "int64" }
        },
        "note": { "type": "string" }
      },
      "title": "DormantProcessHelperResource"
    },
    "GuardianResource": {
      "type": "object",
      "properties": {
        "guardianId": { "type": "string", "pattern": "^$|[0-9]+" },
        "guardianName": { "type": "string" },
        "status": { "type": "string", "pattern": "^$|ACTIVE|INACTIVE" }
      },
      "title": "GuardianResource"
    },
    "InterestDetailsResource": {
      "type": "object",
      "properties": {
        "bankBranchId": { "type": "string", "pattern": "^$|[0-9]+" },
        "bankBranchName": { "type": "string" },
        "bankId": { "type": "string", "pattern": "^$|[0-9]+" },
        "bankName": { "type": "string" },
        "beneficiaryId": { "type": "string", "pattern": "^$|[0-9]+" },
        "beneficiaryName": { "type": "string" },
        "crebitInterestPostAccount": { "type": "string" },
        "crebitInterestPostType": {
          "type": "string",
          "pattern": "^$|Self|Other"
        },
        "debitInterestPostAccount": { "type": "string" },
        "debitInterestPostType": {
          "type": "string",
          "pattern": "^$|Self|Other"
        },
        "otherPostingMethod": {
          "type": "string",
          "pattern": "External|Internal"
        },
        "otherPostingMethodId": { "type": "string", "pattern": "^$|[0-9]+" },
        "paymentModeDescription": { "type": "string" },
        "paymentModeId": { "type": "string", "pattern": "^$|[0-9]+" },
        "paymentSendMethod": { "type": "string" },
        "paymentSendMethodId": { "type": "string", "pattern": "^$|[0-9]+" },
        "propotionRatio": {
          "type": "string",
          "pattern": "^$|[0-9]*\\.?[0-9]*"
        },
        "status": { "type": "string", "pattern": "^$|ACTIVE" }
      },
      "title": "InterestDetailsResource"
    },
    "Link": {
      "type": "object",
      "properties": {
        "href": { "type": "string" },
        "templated": { "type": "boolean" }
      },
      "title": "Link"
    },
    "ListATMDetailsResource": {
      "type": "object",
      "properties": {
        "ATMDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/ATMCardDetailsResource" }
        }
      },
      "title": "ListATMDetailsResource"
    },
    "ListAccountStatusUpdateHandlerResource": {
      "type": "object",
      "properties": {
        "statusList": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/AccountStatusUpdateHandlerResource"
          }
        }
      },
      "title": "ListAccountStatusUpdateHandlerResource"
    },
    "ListApplicantsResource": {
      "type": "object",
      "properties": {
        "casaApplicantDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/ApplicantDetailsResource" }
        }
      },
      "title": "ListApplicantsResource"
    },
    "ListDocumentResource": {
      "type": "object",
      "properties": {
        "documentDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/DocumentsResource" }
        }
      },
      "title": "ListDocumentResource"
    },
    "ListGuardianResource": {
      "type": "object",
      "properties": {
        "guardianDetail": {
          "type": "array",
          "items": { "$ref": "#/definitions/GuardianResource" }
        }
      },
      "title": "ListGuardianResource"
    },
    "ListInterestDetailResource": {
      "type": "object",
      "properties": {
        "interestDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/InterestDetailsResource" }
        }
      },
      "title": "ListInterestDetailResource"
    },
    "ListNomineeResource": {
      "type": "object",
      "properties": {
        "casaNomineeDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/NomineeDetailsResource" }
        }
      },
      "title": "ListNomineeResource"
    },
    "ListNotificationDetailResource": {
      "type": "object",
      "properties": {
        "notificationDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/NotificationDetailsResource" }
        }
      },
      "title": "ListNotificationDetailResource"
    },
    "ListOperationInstructionEligiblePersonResource": {
      "type": "object",
      "properties": {
        "casaOperationInstructionsDetails": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/OperatingInstructionsDetailResource"
          }
        }
      },
      "title": "ListOperationInstructionEligiblePersonResource"
    },
    "ListOperationInstructionResource": {
      "type": "object",
      "properties": {
        "casaOperationInstructionsDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/OperationInstructionsResources" }
        }
      },
      "title": "ListOperationInstructionResource"
    },
    "ListOverdraftResource": {
      "type": "object",
      "properties": {
        "overdraftDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/OverDraftDetailsResource" }
        }
      },
      "title": "ListOverdraftResource"
    },
    "ListPurposeResource": {
      "type": "object",
      "properties": {
        "purposeDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/PurposeResource" }
        }
      },
      "title": "ListPurposeResource"
    },
    "ListRemarksResource": {
      "type": "object",
      "properties": {
        "casaAccountRemarks": {
          "type": "array",
          "items": { "$ref": "#/definitions/AccountRemarksResource" }
        }
      },
      "title": "ListRemarksResource"
    },
    "ListSOFResource": {
      "type": "object",
      "properties": {
        "casaSourceOfFundsDetails": {
          "type": "array",
          "items": { "$ref": "#/definitions/SourceOfFundsResource" }
        }
      },
      "title": "ListSOFResource"
    },
    "ListStatementStatusResource": {
      "type": "object",
      "properties": {
        "casaStatementStatus": {
          "type": "array",
          "items": { "$ref": "#/definitions/AddStatementStatusResource" }
        }
      },
      "title": "ListStatementStatusResource"
    },
    "Map??string,Link??": {
      "type": "object",
      "title": "Map??string,Link??",
      "additionalProperties": { "$ref": "#/definitions/Link" }
    },
    "ModelAndView": {
      "type": "object",
      "properties": {
        "empty": { "type": "boolean" },
        "model": { "type": "object" },
        "modelMap": {
          "type": "object",
          "additionalProperties": { "type": "object" }
        },
        "reference": { "type": "boolean" },
        "status": {
          "type": "string",
          "enum": [
            "100 CONTINUE",
            "101 SWITCHING_PROTOCOLS",
            "102 PROCESSING",
            "103 CHECKPOINT",
            "200 OK",
            "201 CREATED",
            "202 ACCEPTED",
            "203 NON_AUTHORITATIVE_INFORMATION",
            "204 NO_CONTENT",
            "205 RESET_CONTENT",
            "206 PARTIAL_CONTENT",
            "207 MULTI_STATUS",
            "208 ALREADY_REPORTED",
            "226 IM_USED",
            "300 MULTIPLE_CHOICES",
            "301 MOVED_PERMANENTLY",
            "302 FOUND",
            "302 MOVED_TEMPORARILY",
            "303 SEE_OTHER",
            "304 NOT_MODIFIED",
            "305 USE_PROXY",
            "307 TEMPORARY_REDIRECT",
            "308 PERMANENT_REDIRECT",
            "400 BAD_REQUEST",
            "401 UNAUTHORIZED",
            "402 PAYMENT_REQUIRED",
            "403 FORBIDDEN",
            "404 NOT_FOUND",
            "405 METHOD_NOT_ALLOWED",
            "406 NOT_ACCEPTABLE",
            "407 PROXY_AUTHENTICATION_REQUIRED",
            "408 REQUEST_TIMEOUT",
            "409 CONFLICT",
            "410 GONE",
            "411 LENGTH_REQUIRED",
            "412 PRECONDITION_FAILED",
            "413 PAYLOAD_TOO_LARGE",
            "413 REQUEST_ENTITY_TOO_LARGE",
            "414 URI_TOO_LONG",
            "414 REQUEST_URI_TOO_LONG",
            "415 UNSUPPORTED_MEDIA_TYPE",
            "416 REQUESTED_RANGE_NOT_SATISFIABLE",
            "417 EXPECTATION_FAILED",
            "418 I_AM_A_TEAPOT",
            "419 INSUFFICIENT_SPACE_ON_RESOURCE",
            "420 METHOD_FAILURE",
            "421 DESTINATION_LOCKED",
            "422 UNPROCESSABLE_ENTITY",
            "423 LOCKED",
            "424 FAILED_DEPENDENCY",
            "426 UPGRADE_REQUIRED",
            "428 PRECONDITION_REQUIRED",
            "429 TOO_MANY_REQUESTS",
            "431 REQUEST_HEADER_FIELDS_TOO_LARGE",
            "451 UNAVAILABLE_FOR_LEGAL_REASONS",
            "500 INTERNAL_SERVER_ERROR",
            "501 NOT_IMPLEMENTED",
            "502 BAD_GATEWAY",
            "503 SERVICE_UNAVAILABLE",
            "504 GATEWAY_TIMEOUT",
            "505 HTTP_VERSION_NOT_SUPPORTED",
            "506 VARIANT_ALSO_NEGOTIATES",
            "507 INSUFFICIENT_STORAGE",
            "508 LOOP_DETECTED",
            "509 BANDWIDTH_LIMIT_EXCEEDED",
            "510 NOT_EXTENDED",
            "511 NETWORK_AUTHENTICATION_REQUIRED"
          ]
        },
        "view": { "$ref": "#/definitions/View" },
        "viewName": { "type": "string" }
      },
      "title": "ModelAndView"
    },
    "NomineeDetailsResource": {
      "type": "object",
      "required": [
        "casaCustomerId",
        "casaNomineeId",
        "casaNomineeName",
        "casaPropotionRatio"
      ],
      "properties": {
        "casaCustomerId": { "type": "string", "pattern": "[0-9]+" },
        "casaNomineeId": { "type": "string", "pattern": "[0-9]+" },
        "casaNomineeName": { "type": "string" },
        "casaNomineeStatus": { "type": "string", "pattern": "^$|ACTIVE" },
        "casaPropotionRatio": {
          "type": "string",
          "pattern": "[0-9]*\\.?[0-9]*"
        }
      },
      "title": "NomineeDetailsResource"
    },
    "NotificationAlertDetailsResource": {
      "type": "object",
      "properties": {
        "alertEvent": { "type": "string" },
        "eventCategory": {
          "type": "string",
          "pattern": "Transactional|Promotional"
        },
        "status": { "type": "string", "pattern": "^$|ACTIVE" },
        "transactionLimit": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "NotificationAlertDetailsResource"
    },
    "NotificationDetailsResource": {
      "type": "object",
      "required": ["contactId", "contactType", "customerId"],
      "properties": {
        "addressId": { "type": "string", "pattern": "^$|[0-9]+" },
        "addressType": { "type": "string", "pattern": "^$|[0-9]+" },
        "alertDetail": {
          "type": "array",
          "items": { "$ref": "#/definitions/NotificationAlertDetailsResource" }
        },
        "contactId": { "type": "string", "pattern": "^$|[0-9]+" },
        "contactType": { "type": "string", "pattern": "^$|[0-9]+" },
        "customerId": { "type": "string", "pattern": "[0-9]+" },
        "keyPersonId": { "type": "string", "pattern": "^$|[0-9]+" },
        "notificationTypes": { "type": "string" },
        "status": { "type": "string", "pattern": "^$|ACTIVE" }
      },
      "title": "NotificationDetailsResource"
    },
    "OperatingInstructionsDetailResource": {
      "type": "object",
      "required": ["casaModelOfOperation", "personId"],
      "properties": {
        "accountNo": { "type": "string" },
        "casaAmountFrom": { "type": "string", "pattern": "[0-9]*\\.?[0-9]*" },
        "casaAmountTo": { "type": "string", "pattern": "[0-9]*\\.?[0-9]*" },
        "casaModelOfOperation": {
          "type": "string",
          "pattern": "Owner|Jointly|Any Number Of Members"
        },
        "personId": { "type": "string", "pattern": "^$|[0-9]+" },
        "personName": { "type": "string" },
        "proportion": { "type": "string", "pattern": "^$|[0-9]*\\.?[0-9]*" },
        "signatureId": { "type": "string", "pattern": "^$|[0-9]+" },
        "status": { "type": "string", "pattern": "^$|ACTIVE" }
      },
      "title": "OperatingInstructionsDetailResource"
    },
    "OperationInstructionsResources": {
      "type": "object",
      "properties": {
        "casaNoOfSignatures": { "type": "string", "pattern": "[0-9]+" },
        "casaNotes": { "type": "string" },
        "casaStatus": { "type": "string", "pattern": "^$|ACTIVE" },
        "eligiblePersonDetails": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/OperatingInstructionsDetailResource"
          }
        }
      },
      "title": "OperationInstructionsResources"
    },
    "OverDraftDetailsResource": {
      "type": "object",
      "required": ["accountName", "accountNo", "propotion"],
      "properties": {
        "accountName": { "type": "string" },
        "accountNo": { "type": "string" },
        "casaStatus": { "type": "string", "pattern": "^$|ACTIVE" },
        "propotion": { "type": "string", "pattern": "[0-9]*\\.?[0-9]*" }
      },
      "title": "OverDraftDetailsResource"
    },
    "OverDraftRenewalRequestResource": {
      "type": "object",
      "required": [
        "accountId",
        "overdraftPurpose",
        "renewalStartDate",
        "requestDate",
        "status"
      ],
      "properties": {
        "accountId": { "type": "string", "pattern": "^$|[0-9]+" },
        "overdraftPurpose": {
          "type": "string",
          "pattern": "^$|PERSONAL_USE|PERSONAL_INVESTMENT"
        },
        "renewalStartDate": {
          "type": "string",
          "pattern": "^$|(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})$"
        },
        "requestDate": {
          "type": "string",
          "pattern": "^$|(\\d{4})-(\\d{2})-(\\d{2})$"
        },
        "status": { "type": "string", "pattern": "^$|ACTIVE|INACTIVE" }
      },
      "title": "OverDraftRenewalRequestResource"
    },
    "OverDraftRequestResource": {
      "type": "object",
      "required": [
        "accountId",
        "overDraftLimit",
        "overdraftAgainstTermDeposit",
        "overdraftPeriodLength",
        "overdraftPeriodTypeId",
        "overdraftPurpose",
        "overdraftType",
        "requestDate",
        "securityAssetName",
        "securityAssetValue",
        "securityIndication",
        "status",
        "termDepositNumber"
      ],
      "properties": {
        "accountId": { "type": "string", "pattern": "^$|[0-9]+" },
        "clearanceSource": { "type": "string" },
        "overDraftLimit": {
          "type": "string",
          "pattern": "^\\d{1,13}\\.\\d{1,5}$"
        },
        "overdraftAgainstTermDeposit": {
          "type": "string",
          "pattern": "^$|YES|NO"
        },
        "overdraftPeriodLength": { "type": "string", "pattern": "^$|[0-9]+" },
        "overdraftPeriodTypeId": { "type": "string", "pattern": "^$|[0-9]+" },
        "overdraftPurpose": {
          "type": "string",
          "pattern": "^$|PERSONAL_USE|PERSONAL_INVESTMENT"
        },
        "overdraftType": {
          "type": "string",
          "pattern": "^$|TEMPORARY|PERMANENT"
        },
        "requestDate": {
          "type": "string",
          "pattern": "^$|(\\d{4})-(\\d{2})-(\\d{2})$"
        },
        "securityAssetName": { "type": "string" },
        "securityAssetValue": {
          "type": "string",
          "pattern": "^\\d{1,13}\\.\\d{1,5}$"
        },
        "securityIndication": { "type": "string", "pattern": "^$|YES|NO" },
        "status": { "type": "string", "pattern": "^$|ACTIVE|INACTIVE" },
        "termDepositNumber": { "type": "string", "pattern": "^$|[0-9]+" }
      },
      "title": "OverDraftRequestResource"
    },
    "OverdraftAgreementDetailsResource": {
      "type": "object",
      "required": [
        "agreementOdLimit",
        "overdraftStartDate",
        "overdraftType",
        "tenor"
      ],
      "properties": {
        "agreementOdLimit": { "type": "string", "pattern": "[0-9]*\\.?[0-9]*" },
        "autoRenewalPeriodType": { "type": "string", "pattern": "^$|[0-9]+" },
        "autoRenewalTenor": {
          "type": "string",
          "pattern": "^$|[0-9]*\\.?[0-9]*"
        },
        "enableAutoRenewal": { "type": "string", "pattern": "Yes|No" },
        "gracePeriodInDays": { "type": "string", "pattern": "^$|[0-9]+" },
        "overdraftStartDate": {
          "type": "string",
          "pattern": "^$|\\d{4}(\\/)(((0)[0-9])|((1)[0-2]))(\\/)([0-2][0-9]|(3)[0-1])$"
        },
        "overdraftType": { "type": "string", "pattern": "PERMANENT|TEMPORARY" },
        "periodType": { "type": "string", "pattern": "^$|[0-9]+" },
        "remarks": { "type": "string" },
        "renewalLimit": { "type": "string", "pattern": "^$|[0-9]*\\.?[0-9]*" },
        "tenor": { "type": "string", "pattern": "^$|[0-9]*\\.?[0-9]*" }
      },
      "title": "OverdraftAgreementDetailsResource"
    },
    "OverdraftConfirmCancelRequestResource": {
      "type": "object",
      "required": ["accountId", "action"],
      "properties": {
        "accountId": { "type": "string", "pattern": "^$|[0-9]+" },
        "action": {
          "type": "string",
          "pattern": "^$|APPROVE|CANCEL|REJECT|HOLD"
        },
        "holdTimePeriod": {
          "type": "string",
          "pattern": "^$|(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})$"
        }
      },
      "title": "OverdraftConfirmCancelRequestResource"
    },
    "PurposeResource": {
      "type": "object",
      "required": [
        "casaPurposeDescription",
        "casaPurposeId",
        "primaryIndicator"
      ],
      "properties": {
        "casaPurposeDescription": { "type": "string" },
        "casaPurposeId": { "type": "string", "pattern": "[0-9]+" },
        "casaStatus": { "type": "string", "pattern": "^$|ACTIVE" },
        "primaryIndicator": { "type": "string", "pattern": "Yes|No" }
      },
      "title": "PurposeResource"
    },
    "SourceOfFundsResource": {
      "type": "object",
      "required": [
        "casaSourceOfFundDescription",
        "casaSourceOfFundId",
        "primaryIndicator"
      ],
      "properties": {
        "casaSourceOfFundDescription": { "type": "string" },
        "casaSourceOfFundId": { "type": "string", "pattern": "[0-9]+" },
        "casaStatus": { "type": "string", "pattern": "^$|ACTIVE" },
        "otherRemarks": { "type": "string" },
        "primaryIndicator": { "type": "string", "pattern": "Yes|No" }
      },
      "title": "SourceOfFundsResource"
    },
    "SpecialRateDetailsResource": {
      "type": "object",
      "required": ["specialRate"],
      "properties": {
        "notes": { "type": "string" },
        "specialRate": {
          "type": "string",
          "pattern": "(\\+|-)?([0-9]+(\\.[0-9]+))"
        }
      },
      "title": "SpecialRateDetailsResource"
    },
    "StatementStatusAccountResource": {
      "type": "object",
      "properties": { "accountId": { "type": "integer", "format": "int64" } },
      "title": "StatementStatusAccountResource"
    },
    "StatementStatusBulkAccountResource": {
      "type": "object",
      "properties": {
        "statementStatusAccountResource": {
          "type": "array",
          "items": { "$ref": "#/definitions/StatementStatusAccountResource" }
        }
      },
      "title": "StatementStatusBulkAccountResource"
    },
    "UpdateATMCardDetailsResource": {
      "type": "object",
      "required": ["version"],
      "properties": {
        "blockTransactions": { "type": "string", "pattern": "Yes|No" },
        "foreignTransactionEnabled": { "type": "string", "pattern": "Yes|No" },
        "posEnabled": { "type": "string", "pattern": "Yes|No" },
        "remarks": { "type": "string" },
        "status": { "type": "string", "pattern": "ACTIVE|INACTIVE" },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "UpdateATMCardDetailsResource"
    },
    "UpdateAccountRemarksResource": {
      "type": "object",
      "required": ["version"],
      "properties": {
        "casaStatus": { "type": "string", "pattern": "ACTIVE|INACTIVE" },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "UpdateAccountRemarksResource"
    },
    "UpdateAccountResourceApproved": {
      "type": "object",
      "required": ["casaOwnershipType", "version"],
      "properties": {
        "accountOpenBranchOrganizationLevelId": {
          "type": "string",
          "pattern": "^$|[0-9]+"
        },
        "accountOpenBranchOrganizationLevelName": { "type": "string" },
        "balanceRestrictedStatus": { "type": "string", "pattern": "^$|Yes|No" },
        "bufferAmount": { "type": "string", "pattern": "^$|[0-9]*\\.?[0-9]*" },
        "casaAccountName": { "type": "string" },
        "casaAllowMinusBalance": { "type": "string", "pattern": "^$|Yes|No" },
        "casaAnticipatedFrequencyId": {
          "type": "string",
          "pattern": "^$|[0-9]+"
        },
        "casaAnticipatedValue": { "type": "string" },
        "casaAnticipatedValueId": { "type": "string", "pattern": "^$|[0-9]+" },
        "casaAutoChequeBookRequestEnabled": {
          "type": "string",
          "pattern": "^$|Yes|No"
        },
        "casaAutoChequeBookRequestPeriod": {
          "type": "string",
          "pattern": "^$|[0-9]+"
        },
        "casaAutoChequeBookRequestPeriodFrequency": {
          "type": "string",
          "pattern": "^$|[0-9]+"
        },
        "casaEnableDisableInterestCalculation": {
          "type": "string",
          "pattern": "^$|Yes|No"
        },
        "casaEnableInterestOnOverdraft": {
          "type": "string",
          "pattern": "^$|Yes|No"
        },
        "casaInterestCalculationStartDate": {
          "type": "string",
          "pattern": "^$|\\d{4}(\\/)(((0)[0-9])|((1)[0-2]))(\\/)([0-2][0-9]|(3)[0-1])$"
        },
        "casaIsATMEnabled": { "type": "string", "pattern": "^$|Yes|No" },
        "casaIsChequeBookEnabled": { "type": "string", "pattern": "^$|Yes|No" },
        "casaKycStatus": { "type": "string", "pattern": "^$|Yes|No" },
        "casaMaxAllowedCheckBooksPerRequest": {
          "type": "string",
          "pattern": "^$|[0-9]+"
        },
        "casaMinorAccountStatus": {
          "type": "string",
          "pattern": "^$|Minor with restrictions|Minor without restrictions"
        },
        "casaNickName": { "type": "string" },
        "casaNoOfChequesPerBook": { "type": "string", "pattern": "^$|[0-9]+" },
        "casaOfficerName": { "type": "string" },
        "casaOpenBranch": { "type": "string", "pattern": "^$|[0-9]+" },
        "casaOwnershipType": {
          "type": "string",
          "pattern": "^$|SOLE OWNER|JOINT AND FIRST|JOINT AND OTHER|DELIGATE"
        },
        "casaStopRequest": { "type": "string", "pattern": "^$|Yes|No" },
        "chequeBookStockTypeId": {
          "type": "string",
          "pattern": "^$|[0-9]*\\.?[0-9]*"
        },
        "chequeBookTypeId": {
          "type": "string",
          "pattern": "^$|[0-9]*\\.?[0-9]*"
        },
        "chequeTypeId": { "type": "string", "pattern": "^$|[0-9]*\\.?[0-9]*" },
        "customerVisitRequired": { "type": "string", "pattern": "^$|Yes|No" },
        "minimumAmountForSweeping": {
          "type": "string",
          "pattern": "^$|[0-9]*\\.?[0-9]*"
        },
        "noOfVisitPerPeriod": { "type": "string", "pattern": "^$|[0-9]+" },
        "otherCurrencyTransactionAllowed": {
          "type": "string",
          "pattern": "^$|Yes|No"
        },
        "periodMethod": { "type": "string", "pattern": "^$|[0-9]*\\.?[0-9]*" },
        "recoveryPercentage": {
          "type": "string",
          "pattern": "^$|[0-9]*\\.?[0-9]*"
        },
        "recurringSweepingAllowed": {
          "type": "string",
          "pattern": "^$|Yes|No"
        },
        "reversalLimit": { "type": "string", "pattern": "^$|[0-9]*\\.?[0-9]*" },
        "sweepingEnabled": { "type": "string", "pattern": "^$|Yes|No" },
        "sweepingLimit": { "type": "string", "pattern": "^$|[0-9]*\\.?[0-9]*" },
        "version": { "type": "string", "pattern": "^$|[0-9]+" }
      },
      "title": "UpdateAccountResourceApproved"
    },
    "UpdateAccountResourceCreated": {
      "type": "object",
      "required": ["version"],
      "properties": {
        "accountDescription": { "type": "string" },
        "accountOpenBranchOrganizationLevelId": {
          "type": "string",
          "pattern": "^$|[0-9]+"
        },
        "accountOpenBranchOrganizationLevelName": { "type": "string" },
        "accountType": { "type": "string" },
        "balanceRestrictedStatus": { "type": "string", "pattern": "^$|Yes|No" },
        "bufferAmount": { "type": "string", "pattern": "^$|[0-9]*\\.?[0-9]*" },
        "casaAccountName": { "type": "string" },
        "casaAllowMinusBalance": { "type": "string", "pattern": "^$|Yes|No" },
        "casaAnticipatedFrequencyId": {
          "type": "string",
          "pattern": "^$|[0-9]+"
        },
        "casaAnticipatedValue": { "type": "string" },
        "casaAnticipatedValueId": { "type": "string", "pattern": "^$|[0-9]+" },
        "casaAutoChequeBookRequestEnabled": {
          "type": "string",
          "pattern": "^$|Yes|No"
        },
        "casaAutoChequeBookRequestPeriod": {
          "type": "string",
          "pattern": "^$|[0-9]+"
        },
        "casaAutoChequeBookRequestPeriodFrequency": {
          "type": "string",
          "pattern": "^$|[0-9]+"
        },
        "casaEnableDisableInterestCalculation": {
          "type": "string",
          "pattern": "^$|Yes|No"
        },
        "casaEnableInterestOnOverdraft": {
          "type": "string",
          "pattern": "^$|Yes|No"
        },
        "casaInterestCalculationStartDate": {
          "type": "string",
          "pattern": "^$|\\d{4}(\\/)(((0)[0-9])|((1)[0-2]))(\\/)([0-2][0-9]|(3)[0-1])$"
        },
        "casaIsATMEnabled": { "type": "string", "pattern": "^$|Yes|No" },
        "casaIsChequeBookEnabled": { "type": "string", "pattern": "^$|Yes|No" },
        "casaKycStatus": { "type": "string", "pattern": "^$|Yes|No" },
        "casaMaxAllowedCheckBooksPerRequest": {
          "type": "string",
          "pattern": "^$|[0-9]+"
        },
        "casaMinorAccountStatus": {
          "type": "string",
          "pattern": "^$|Minor with restrictions|Minor without restrictions"
        },
        "casaNickName": { "type": "string" },
        "casaNoOfChequesPerBook": { "type": "string", "pattern": "^$|[0-9]+" },
        "casaOfficerName": { "type": "string" },
        "casaOpenBranch": { "type": "string", "pattern": "^$|[0-9]+" },
        "casaOwnershipType": {
          "type": "string",
          "pattern": "^$|SOLE OWNER|JOINT AND FIRST|JOINT AND OTHER|DELIGATE"
        },
        "casaStopRequest": { "type": "string", "pattern": "^$|Yes|No" },
        "casaSubProductId": { "type": "string", "pattern": "^$|[0-9]+" },
        "chequeBookStockTypeId": {
          "type": "string",
          "pattern": "^$|[0-9]*\\.?[0-9]*"
        },
        "chequeBookTypeId": {
          "type": "string",
          "pattern": "^$|[0-9]*\\.?[0-9]*"
        },
        "chequeTypeId": { "type": "string", "pattern": "^$|[0-9]*\\.?[0-9]*" },
        "customerVisitRequired": { "type": "string", "pattern": "^$|Yes|No" },
        "minimumAmountForSweeping": {
          "type": "string",
          "pattern": "^$|[0-9]*\\.?[0-9]*"
        },
        "noOfVisitPerPeriod": { "type": "string", "pattern": "^$|[0-9]+" },
        "otherCurrencyTransactionAllowed": {
          "type": "string",
          "pattern": "^$|Yes|No"
        },
        "periodMethod": { "type": "string", "pattern": "^$|[0-9]+" },
        "recoveryPercentage": {
          "type": "string",
          "pattern": "^$|[0-9]*\\.?[0-9]*"
        },
        "recurringSweepingAllowed": {
          "type": "string",
          "pattern": "^$|Yes|No"
        },
        "reversalLimit": { "type": "string", "pattern": "^$|[0-9]*\\.?[0-9]*" },
        "subProductCode": { "type": "string" },
        "sweepingEnabled": { "type": "string", "pattern": "^$|Yes|No" },
        "sweepingLimit": { "type": "string", "pattern": "^$|[0-9]*\\.?[0-9]*" },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "UpdateAccountResourceCreated"
    },
    "UpdateActiveStatementStatusResource": {
      "type": "object",
      "required": ["status", "version"],
      "properties": {
        "modifiedUser": { "type": "string" },
        "note": { "type": "string" },
        "status": { "type": "string", "pattern": "^$|ACTIVE|INACTIVE" },
        "version": { "type": "string", "pattern": "^$|[0-9]+" }
      },
      "title": "UpdateActiveStatementStatusResource"
    },
    "UpdateApplicantDetailsResource": {
      "type": "object",
      "properties": {
        "casaApplicantStatus": {
          "type": "string",
          "pattern": "^$|ACTIVE|INACTIVE"
        },
        "casaCustomerId": { "type": "string", "pattern": "^$|[0-9]+" },
        "casaCustomerName": { "type": "string" },
        "casaOwnershipType": {
          "type": "string",
          "pattern": "^SOLE OWNER|JOINT AND FIRST|JOINT AND OTHER|DELIGATE"
        },
        "guardianDetail": {
          "type": "array",
          "items": { "$ref": "#/definitions/GuardianResource" }
        },
        "taxPercerntage": { "type": "string", "pattern": "[0-9]*\\.?[0-9]*" },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "UpdateApplicantDetailsResource"
    },
    "UpdateCommonListResource": {
      "type": "object",
      "required": ["version"],
      "properties": {
        "attribute1": { "type": "string" },
        "attribute2": { "type": "string" },
        "attribute3": { "type": "string" },
        "attribute4": { "type": "string" },
        "attribute5": { "type": "string" },
        "code": { "type": "string" },
        "description": { "type": "string" },
        "referenceCode": { "type": "string" },
        "status": { "type": "string", "pattern": "ACTIVE|INACTIVE" },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "UpdateCommonListResource"
    },
    "UpdateDocumentCheckListDetailResource": {
      "type": "object",
      "required": [
        "applicableLevel",
        "docCheckListversion",
        "documentTypeDescription",
        "documentTypeId",
        "mandatoryIndicator",
        "status"
      ],
      "properties": {
        "applicableLevel": {
          "type": "string",
          "pattern": "^$|CREATED|CREATE_DE_ACTIVATED|CREATE_RE_ACTIVATED|BLOCK_PENDING"
        },
        "docCheckListversion": { "type": "string", "pattern": "^$|[0-9]+" },
        "documentTypeDescription": {
          "type": "string",
          "minLength": 0,
          "maxLength": 255
        },
        "documentTypeId": { "type": "string", "pattern": "^$|[0-9]+" },
        "mandatoryIndicator": { "type": "string", "pattern": "^$|YES|NO" },
        "status": { "type": "string", "pattern": "^$|ACTIVE|INACTIVE" }
      },
      "title": "UpdateDocumentCheckListDetailResource"
    },
    "UpdateInterestDetailsResource": {
      "type": "object",
      "required": ["status", "version"],
      "properties": {
        "propotionRatio": {
          "type": "string",
          "pattern": "^$|[0-9]*\\.?[0-9]*"
        },
        "status": { "type": "string", "pattern": "ACTIVE|INACTIVE" },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "UpdateInterestDetailsResource"
    },
    "UpdateNomineeDetailsResource": {
      "type": "object",
      "required": ["version"],
      "properties": {
        "casaNomineeStatus": { "type": "string", "pattern": "ACTIVE|INACTIVE" },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "UpdateNomineeDetailsResource"
    },
    "UpdateNotificationDetailsResource": {
      "type": "object",
      "required": ["status", "version"],
      "properties": {
        "status": { "type": "string", "pattern": "ACTIVE|INACTIVE" },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "UpdateNotificationDetailsResource"
    },
    "UpdateOperatingInstructionsDetailResource": {
      "type": "object",
      "required": ["proportion"],
      "properties": {
        "eligiblePersonId": { "type": "string", "pattern": "^$|[0-9]+" },
        "eligiblePersonRecordId": { "type": "string", "pattern": "[0-9]+" },
        "proportion": { "type": "string", "pattern": "^$|[0-9]*\\.?[0-9]*" },
        "signatureId": { "type": "string", "pattern": "^$|[0-9]+" },
        "status": { "type": "string", "pattern": "^$|ACTIVE|INACTIVE" }
      },
      "title": "UpdateOperatingInstructionsDetailResource"
    },
    "UpdateOperationInstructionsResources": {
      "type": "object",
      "required": ["version"],
      "properties": {
        "casaStatus": { "type": "string", "pattern": "ACTIVE|INACTIVE" },
        "eligiblePersonDetails": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/UpdateOperatingInstructionsDetailResource"
          }
        },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "UpdateOperationInstructionsResources"
    },
    "UpdateOverDraftDetailsResource": {
      "type": "object",
      "required": ["version"],
      "properties": {
        "status": { "type": "string", "pattern": "ACTIVE|INACTIVE" },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "UpdateOverDraftDetailsResource"
    },
    "UpdateOverDraftRequestResource": {
      "type": "object",
      "required": [
        "accountId",
        "overDraftLimit",
        "overdraftAgainstTermDeposit",
        "overdraftPeriodLength",
        "overdraftPeriodTypeId",
        "overdraftPurpose",
        "overdraftType",
        "requestDate",
        "requestType",
        "securityAssetName",
        "securityAssetValue",
        "securityIndication",
        "status",
        "termDepositNumber",
        "version"
      ],
      "properties": {
        "accountId": { "type": "string", "pattern": "^$|[0-9]+" },
        "clearanceSource": { "type": "string" },
        "overDraftLimit": {
          "type": "string",
          "pattern": "^\\d{1,13}\\.\\d{1,5}$"
        },
        "overdraftAgainstTermDeposit": {
          "type": "string",
          "pattern": "^$|YES|NO"
        },
        "overdraftPeriodLength": { "type": "string", "pattern": "^$|[0-9]+" },
        "overdraftPeriodTypeId": { "type": "string", "pattern": "^$|[0-9]+" },
        "overdraftPurpose": {
          "type": "string",
          "pattern": "^$|PERSONAL_USE|PERSONAL_INVESTMENT"
        },
        "overdraftType": {
          "type": "string",
          "pattern": "^$|TEMPORARY|PERMANENT"
        },
        "renewalStartDate": {
          "type": "string",
          "pattern": "^$|(\\d{4})-(\\d{2})-(\\d{2}) (\\d{2}):(\\d{2}):(\\d{2})$"
        },
        "requestDate": {
          "type": "string",
          "pattern": "^$|(\\d{4})-(\\d{2})-(\\d{2})$"
        },
        "requestType": {
          "type": "string",
          "pattern": "^$|NEW_OD_FACILITY|RENEWAL_OD_FACILITY"
        },
        "securityAssetName": { "type": "string" },
        "securityAssetValue": {
          "type": "string",
          "pattern": "^\\d{1,13}\\.\\d{1,5}$"
        },
        "securityIndication": { "type": "string", "pattern": "^$|YES|NO" },
        "status": { "type": "string", "pattern": "^$|ACTIVE|INACTIVE" },
        "termDepositNumber": { "type": "string", "pattern": "^$|[0-9]+" },
        "version": { "type": "string", "pattern": "^$|[0-9]+" }
      },
      "title": "UpdateOverDraftRequestResource"
    },
    "UpdatePurposeResource": {
      "type": "object",
      "required": ["primaryIndicator", "version"],
      "properties": {
        "casaStatus": { "type": "string", "pattern": "ACTIVE|INACTIVE" },
        "primaryIndicator": { "type": "string", "pattern": "^$|Yes|No" },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "UpdatePurposeResource"
    },
    "UpdateSourceOfFundsResource": {
      "type": "object",
      "required": ["primaryIndicator", "version"],
      "properties": {
        "casaStatus": { "type": "string", "pattern": "ACTIVE|INACTIVE" },
        "primaryIndicator": { "type": "string", "pattern": "^$|Yes|No" },
        "version": { "type": "string", "pattern": "[0-9]+" }
      },
      "title": "UpdateSourceOfFundsResource"
    },
    "UpdateStatementStatusResource": {
      "type": "object",
      "required": ["status", "version"],
      "properties": {
        "modifiedUser": { "type": "string" },
        "status": { "type": "string", "pattern": "^$|ACTIVE|INACTIVE" },
        "version": { "type": "string", "pattern": "^$|[0-9]+" }
      },
      "title": "UpdateStatementStatusResource"
    },
    "UploadFileResource": {
      "type": "object",
      "required": ["id"],
      "properties": {
        "fileDownloadUri": { "type": "string" },
        "fileName": { "type": "string" },
        "fileType": { "type": "string" },
        "id": { "type": "string", "pattern": "[0-9]+" },
        "size": { "type": "string" }
      },
      "title": "UploadFileResource"
    },
    "View": {
      "type": "object",
      "properties": { "contentType": { "type": "string" } },
      "title": "View"
    }
  }
}
