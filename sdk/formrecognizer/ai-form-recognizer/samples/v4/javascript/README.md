---
page_type: sample
languages:
  - javascript
products:
  - azure
  - azure-cognitive-services
  - azure-form-recognizer
urlFragment: ai-form-recognizer-javascript
---

# Azure Form Recognizer client library samples for JavaScript

These sample programs show how to use the JavaScript client libraries for Azure Form Recognizer in some common scenarios.

| **File Name**                                           | **Description**                                                                            |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [composeModel.js][composemodel]                         | create a composed model from several individual labeled models                             |
| [analyzeDocumentByModelId.js][analyzedocumentbymodelid] | analyze a document using a model by ID                                                     |
| [analyzeReceiptByModelId.js][analyzereceiptbymodelid]   | use the "prebuilt-receipt" model ID to extract data from a receipt document (weakly-typed) |
| [buildModel.js][buildmodel]                             | build a model with a single document type from a training data set                         |
| [copyModel.js][copymodel]                               | copy a model from one resource to another                                                  |
| [getInfo.js][getinfo]                                   | get information about the count and limit of custom models in the resource                 |
| [getModel.js][getmodel]                                 | get information about a model by its ID                                                    |
| [listModels.js][listmodels]                             | iterate over the models in a resource                                                      |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

You need [an Azure subscription][freesub] and the following Azure resources to run these sample programs:

- [Azure Cognitive Services account][createinstance_azurecognitiveservicesaccount]

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

3. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node composeModel.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env FORM_RECOGNIZER_ENDPOINT="<form recognizer endpoint>" FORM_RECOGNIZER_API_KEY="<form recognizer api key>" PURCHASE_ORDER_SUPPLIES_SAS_URL="<purchase order supplies sas url>" PURCHASE_ORDER_EQUIPMENT_SAS_URL="<purchase order equipment sas url>" PURCHASE_ORDER_FURNITURE_SAS_URL="<purchase order furniture sas url>" PURCHASE_ORDER_CLEANING_SUPPLIES_SAS_URL="<purchase order cleaning supplies sas url>" node composeModel.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[composemodel]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/formrecognizer/ai-form-recognizer/samples/v4/javascript/composeModel.js
[analyzedocumentbymodelid]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/formrecognizer/ai-form-recognizer/samples/v4/javascript/analyzeDocumentByModelId.js
[analyzereceiptbymodelid]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/formrecognizer/ai-form-recognizer/samples/v4/javascript/analyzeReceiptByModelId.js
[buildmodel]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/formrecognizer/ai-form-recognizer/samples/v4/javascript/buildModel.js
[copymodel]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/formrecognizer/ai-form-recognizer/samples/v4/javascript/copyModel.js
[extractgeneraldocument]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/formrecognizer/ai-form-recognizer/samples/v4/javascript/extractGeneralDocument.js
[extractlayout]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/formrecognizer/ai-form-recognizer/samples/v4/javascript/extractLayout.js
[getinfo]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/formrecognizer/ai-form-recognizer/samples/v4/javascript/getInfo.js
[getmodel]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/formrecognizer/ai-form-recognizer/samples/v4/javascript/getModel.js
[listmodels]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/formrecognizer/ai-form-recognizer/samples/v4/javascript/listModels.js
[readdocument]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/formrecognizer/ai-form-recognizer/samples/v4/javascript/readDocument.js
[apiref]: https://learn.microsoft.com/javascript/api/@azure/ai-form-recognizer
[freesub]: https://azure.microsoft.com/free/
[createinstance_azurecognitiveservicesaccount]: https://learn.microsoft.com/azure/cognitive-services/cognitive-services-apis-create-account
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/formrecognizer/ai-form-recognizer/README.md
