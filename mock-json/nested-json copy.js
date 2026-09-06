const nestedJSON = {
    "id": "2621",
    "type": "Flowchart",
    "version": 1,
    "name": "Invoice Number",
    "connections": [
        {
            "shape": "dag-edge",
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "strokeWidth": 1,
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    }
                }
            },
            "id": "2c2149dd-db2d-480b-b526-0fbaac8b67f8",
            "zIndex": 0,
            "source": {
                "cell": "f1587c59-4813-455e-b360-c42f2a964bb9",
                "port": "Done"
            },
            "target": {
                "cell": "8241a77b-49c4-407b-8460-f05bdea5756a",
                "port": "in"
            }
        },
        {
            "shape": "dag-edge",
            "attrs": {
                "line": {
                    "stroke": "#A2B1C3",
                    "strokeWidth": 1,
                    "targetMarker": {
                        "name": "block",
                        "width": 12,
                        "height": 8
                    }
                }
            },
            "id": "f1840643-ca37-4dfa-a828-b8716da1c89d",
            "zIndex": 0,
            "source": {
                "cell": "8241a77b-49c4-407b-8460-f05bdea5756a",
                "port": "Done"
            },
            "target": {
                "cell": "f75e4094-f743-4c78-b183-b55bb7b42c23",
                "port": "in"
            }
        }
    ],
    "activities": [
        {
            "id": "f1587c59-4813-455e-b360-c42f2a964bb9",
            "ports": {
                "items": [
                    {
                        "id": "Done",
                        "group": "out",
                        "position": "right",
                        "attrs": {
                            "circle": {
                                "r": 5,
                                "magnet": true,
                                "stroke": "#fff",
                                "strokeWidth": 2,
                                "fill": "#0ea5e9"
                            },
                            "text": {
                                "fontSize": 12,
                                "fill": "#888"
                            }
                        },
                        "label": {
                            "position": {
                                "name": "outside"
                            }
                        }
                    }
                ]
            },
            "shape": "dag-node",
            "position": {
                "x": 40,
                "y": 70
            },
            "size": {
                "Width": 60,
                "Height": 50
            },
            "data": {
                "id": "f1587c59-4813-455e-b360-c42f2a964bb9",
                "type": "Activity.Start",
                "version": 1,
                "metadata": {
                    "designer": {
                        "position": {
                            "x": 40,
                            "y": 70
                        },
                        "size": {
                            "Width": 60,
                            "Height": 50
                        }
                    }
                },
                "canStartWorkflow": false,
                "runAsynchronously": false,
                "customProperties": null,
                "inputs": [],
                "outputs": [],
                "status": 0,
                "displayName": "Start",
                "labelname": "Start",
                "ComponentID": 1,
                "groupName": "Looping",
                "apiid": null,
                "icon": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOC43NiAyOC43NiI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmZjsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjMzBiNjQzOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMiIgY3g9IjE0LjQ5IiBjeT0iMTQuMzgiIHI9IjkuOTgiLz4KICA8Zz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEwLjY4LDIwLjA1Yy0uMjksMC0uNTMtLjI0LS41My0uNTN2LTEwLjI4YzAtLjI5LjI0LS41My41My0uNTNzLjUzLjI0LjUzLjUzdjEwLjI4YzAsLjI5LS4yNC41My0uNTMuNTNaIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xNy4xNSwxMC45OWMtLjIxLS4yMS0uNTQtLjIxLS43NSwwLS4yMS4yMS0uMjEuNTQsMCwuNzVsMi4xMSwyLjExaC01Ljk1Yy0uMjksMC0uNTMuMjQtLjUzLjUzcy4yNC41My41My41M2g1Ljk1bC0yLjExLDIuMTFjLS4yMS4yMS0uMjEuNTQsMCwuNzUuMS4xLjI0LjE2LjM4LjE2cy4yNy0uMDUuMzgtLjE2bDMuMzktMy4zOS0zLjM5LTMuMzlaIi8+CiAgPC9nPgo8L3N2Zz4=",
                "componentType": "STANDARD",
                "allowedDataTypes": null
            }
        },
        {
            "id": "8241a77b-49c4-407b-8460-f05bdea5756a",
            "ports": {
                "items": [
                    {
                        "id": "in",
                        "group": "in",
                        "position": "left",
                        "attrs": {
                            "circle": {
                                "r": 5,
                                "magnet": true,
                                "stroke": "#0ea5e9",
                                "strokeWidth": 2,
                                "fill": "#fff"
                            },
                            "text": {
                                "fontSize": 12,
                                "fill": "#888"
                            }
                        },
                        "label": {
                            "position": {
                                "name": "outside"
                            }
                        }
                    },
                    {
                        "id": "Done",
                        "group": "out",
                        "position": "right",
                        "attrs": {
                            "circle": {
                                "r": 5,
                                "magnet": true,
                                "stroke": "#fff",
                                "strokeWidth": 2,
                                "fill": "#0ea5e9"
                            },
                            "text": {
                                "fontSize": 12,
                                "fill": "#888"
                            }
                        },
                        "label": {
                            "position": {
                                "name": "outside"
                            }
                        }
                    }
                ]
            },
            "shape": "dag-node",
            "position": {
                "x": 290,
                "y": 70
            },
            "size": {
                "Width": 60,
                "Height": 50
            },
            "data": {
                "id": "8241a77b-49c4-407b-8460-f05bdea5756a",
                "type": "Activity.CMRComponent",
                "version": 1,
                "metadata": {
                    "designer": {
                        "position": {
                            "x": 290,
                            "y": 70
                        },
                        "size": {
                            "Width": 60,
                            "Height": 50
                        }
                    }
                },
                "canStartWorkflow": false,
                "runAsynchronously": false,
                "customProperties": null,
                "inputs": [
                    {
                        "id": 10279,
                        "category": null,
                        "labelName": "gid",
                        "helperText": "",
                        "inputType": "Hidden",
                        "isReadonly": false,
                        "mandatory": false,
                        "order": null,
                        "validation": null,
                        "defaultValueType": null,
                        "defaultValue": null,
                        "tag": null,
                        "isActive": true,
                        "createdAt": "2024-10-25T08:14:50.88",
                        "updatedAt": "2024-10-25T08:14:50.88",
                        "displayName": "GID",
                        "sourceTable": "Master_GroundTruth",
                        "propertyGroup": null,
                        "moduleName": "STANDARD",
                        "description": null,
                        "isPropertyWindowEnabled": false,
                        "parentProperty": null,
                        "childPropertyOrder": null,
                        "isDisplayInTaggingMode": false,
                        "value": "3354"
                    },
                    {
                        "id": 10563,
                        "category": null,
                        "labelName": "fileID",
                        "helperText": null,
                        "inputType": "Hidden",
                        "isReadonly": false,
                        "mandatory": false,
                        "order": null,
                        "validation": null,
                        "defaultValueType": null,
                        "defaultValue": null,
                        "tag": null,
                        "isActive": true,
                        "createdAt": "2025-01-13T10:39:45.867",
                        "updatedAt": "2025-01-13T10:39:45.867",
                        "displayName": "fileID",
                        "sourceTable": "Master_GroundTruth",
                        "propertyGroup": null,
                        "moduleName": "STANDARD",
                        "description": null,
                        "isPropertyWindowEnabled": false,
                        "parentProperty": null,
                        "childPropertyOrder": null,
                        "isDisplayInTaggingMode": false,
                        "value": "7856"
                    },
                    {
                        "id": 23,
                        "category": null,
                        "labelName": "dataTypeID",
                        "helperText": "Typing....",
                        "inputType": "Select",
                        "isReadonly": false,
                        "mandatory": true,
                        "order": 2,
                        "validation": "{ \"CheckIsEmpty\": true, \"CheckIsMinLength\": \"0\", \"CheckIsMaxLength\": \"0\", \"CheckIsDataType\": \"\", \"CheckIsPattern\": \"\", \"CheckIsSplCharAllowed\":false }",
                        "defaultValueType": "Sql",
                        "defaultValue": "[{\"10\":\"Address\",\"1\":\"Alphabet\",\"2\":\"Alphanumeric\",\"5\":\"Amount\",\"6\":\"Currency\",\"12\":\"Date\",\"15\":\"Date Range\",\"8\":\"Institution\",\"25\":\"Multiline Alphabet\",\"28\":\"Multiline Alphanumeric\",\"26\":\"Multiline Amount\",\"23\":\"Multiline Date\",\"24\":\"Multiline Daterange\",\"27\":\"Multiline Institution\",\"22\":\"Multiline Text\",\"3\":\"Numeric\",\"11\":\"Paragraph\",\"7\":\"Person Name\",\"13\":\"Text\"}]",
                        "tag": "NULL",
                        "isActive": true,
                        "createdAt": "2024-08-07T17:40:42.743",
                        "updatedAt": "2024-08-07T17:40:42.743",
                        "displayName": "VALIDATION",
                        "sourceTable": "Master_Field_Technique",
                        "propertyGroup": "basic",
                        "moduleName": "ALL",
                        "description": "Select any 1 data type that represent value\r\n",
                        "isPropertyWindowEnabled": false,
                        "parentProperty": null,
                        "childPropertyOrder": null,
                        "isDisplayInTaggingMode": false,
                        "value": "Alphanumeric"
                    },
                    {
                        "id": 10416,
                        "category": null,
                        "labelName": "label",
                        "helperText": "",
                        "inputType": "Text",
                        "isReadonly": true,
                        "mandatory": false,
                        "order": 3,
                        "validation": "{ \"CheckIsEmpty\": false,   \"CheckIsMinLength\": \"0\", \"CheckIsMaxLength\": \"100\", \"CheckIsDataType\": \"String\", \"CheckIsPattern\": \"\", \"CheckIsSplCharAllowed\":true }",
                        "defaultValueType": null,
                        "defaultValue": null,
                        "tag": null,
                        "isActive": true,
                        "createdAt": "2024-08-07T17:40:42.743",
                        "updatedAt": "2024-08-07T17:40:42.743",
                        "displayName": "LABEL",
                        "sourceTable": "Master_GroundTruth",
                        "propertyGroup": "basic",
                        "moduleName": "STANDARD",
                        "description": "",
                        "isPropertyWindowEnabled": false,
                        "parentProperty": null,
                        "childPropertyOrder": null,
                        "isDisplayInTaggingMode": false,
                        "value": ""
                    },
                    {
                        "id": 81,
                        "category": null,
                        "labelName": "roi",
                        "helperText": "Output",
                        "inputType": "Hidden",
                        "isReadonly": true,
                        "mandatory": false,
                        "order": 4,
                        "validation": "",
                        "defaultValueType": null,
                        "defaultValue": null,
                        "tag": null,
                        "isActive": true,
                        "createdAt": "2024-09-04T14:19:10.363",
                        "updatedAt": "2024-09-04T14:19:10.363",
                        "displayName": "ROI",
                        "sourceTable": "Master_GroundTruth",
                        "propertyGroup": "basic",
                        "moduleName": "STANDARD",
                        "description": null,
                        "isPropertyWindowEnabled": false,
                        "parentProperty": null,
                        "childPropertyOrder": null,
                        "isDisplayInTaggingMode": false,
                        "value": ""
                    },
                    {
                        "id": 10417,
                        "category": null,
                        "labelName": "groundTruth",
                        "helperText": "",
                        "inputType": "Text",
                        "isReadonly": true,
                        "mandatory": false,
                        "order": 5,
                        "validation": "{ \"CheckIsEmpty\": false, \"CheckIsMinLength\": \"0\", \"CheckIsMaxLength\": \"32767\", \"CheckIsDataType\": \"String\", \"CheckIsPattern\": \"\", \"CheckIsSplCharAllowed\":true }",
                        "defaultValueType": null,
                        "defaultValue": null,
                        "tag": null,
                        "isActive": true,
                        "createdAt": "2024-08-07T17:40:42.743",
                        "updatedAt": "2024-08-07T17:40:42.743",
                        "displayName": "VALUE",
                        "sourceTable": "Master_GroundTruth",
                        "propertyGroup": "basic",
                        "moduleName": "STANDARD",
                        "description": "",
                        "isPropertyWindowEnabled": false,
                        "parentProperty": null,
                        "childPropertyOrder": null,
                        "isDisplayInTaggingMode": false,
                        "value": ""
                    },
                    {
                        "id": 22,
                        "category": null,
                        "labelName": "fieldDescription",
                        "helperText": "Enter a fieldDescription",
                        "inputType": "TextArea",
                        "isReadonly": false,
                        "mandatory": false,
                        "order": 6,
                        "validation": "{ \"CheckIsEmpty\": false, \"CheckIsMinLength\": \"0\", \"CheckIsMaxLength\": \"256\", \"CheckIsDataType\": \"String\", \"CheckIsPattern\": \"\", \"CheckIsSplCharAllowed\":true }",
                        "defaultValueType": null,
                        "defaultValue": null,
                        "tag": null,
                        "isActive": true,
                        "createdAt": "2024-08-07T17:40:42.743",
                        "updatedAt": "2024-08-07T17:40:42.743",
                        "displayName": "DESCRIPTION",
                        "sourceTable": "Master_Field",
                        "propertyGroup": "advanced",
                        "moduleName": "ALL",
                        "description": "Write a brief about this field, if required. Maximum length: 256\r\n",
                        "isPropertyWindowEnabled": false,
                        "parentProperty": null,
                        "childPropertyOrder": null,
                        "isDisplayInTaggingMode": false,
                        "value": ""
                    },
                    {
                        "id": 24,
                        "category": null,
                        "labelName": "isMultiValue",
                        "helperText": "Typing....",
                        "inputType": "Radio",
                        "isReadonly": false,
                        "mandatory": true,
                        "order": 7,
                        "validation": "",
                        "defaultValueType": "Inline",
                        "defaultValue": "[{\"false\": \"Single\", \"true\": \"Multiple\"}]",
                        "tag": null,
                        "isActive": true,
                        "createdAt": "2024-08-07T17:40:42.743",
                        "updatedAt": "2024-08-07T17:40:42.743",
                        "displayName": "VALUES",
                        "sourceTable": "Master_Field",
                        "propertyGroup": "advanced",
                        "moduleName": "ALL",
                        "description": "Scenario: When value is present in 2 or more places in file.\r\nSingle: Extract only first occurrence of value from file\r\nMultiple: Extract all occurrence of value from file\r\n",
                        "isPropertyWindowEnabled": false,
                        "parentProperty": null,
                        "childPropertyOrder": null,
                        "isDisplayInTaggingMode": false,
                        "value": "false"
                    },
                    {
                        "id": 25,
                        "category": null,
                        "labelName": "minimumLength",
                        "helperText": "Enter a minimumLength",
                        "inputType": "Number",
                        "isReadonly": false,
                        "mandatory": true,
                        "order": 8,
                        "validation": "    { \"CheckIsEmpty\": true, \"CheckIsMinLength\": \"1\", \"CheckIsMaxLength\": \"32767\", \"CheckIsDataType\": \"Number\", \"CheckIsPattern\": \"\", \"CheckIsSplCharAllowed\":false }  ",
                        "defaultValueType": null,
                        "defaultValue": "[{\"0\": \"1\"}]",
                        "tag": null,
                        "isActive": true,
                        "createdAt": "2024-08-07T17:40:42.743",
                        "updatedAt": "2024-08-07T17:40:42.743",
                        "displayName": "MINIMUM LENGTH",
                        "sourceTable": "Master_Field_Technique",
                        "propertyGroup": "advanced",
                        "moduleName": "ALL",
                        "description": "Enter minimum size for value extraction. Minimum: 1, Maximum: 32767",
                        "isPropertyWindowEnabled": false,
                        "parentProperty": null,
                        "childPropertyOrder": null,
                        "isDisplayInTaggingMode": false,
                        "value": "1"
                    },
                    {
                        "id": 26,
                        "category": null,
                        "labelName": "maximumLength",
                        "helperText": "Enter a maximumLength",
                        "inputType": "Number",
                        "isReadonly": false,
                        "mandatory": true,
                        "order": 9,
                        "validation": "    { \"CheckIsEmpty\": true, \"CheckIsMinLength\": \"1\", \"CheckIsMaxLength\": \"32767\", \"CheckIsDataType\": \"Number\", \"CheckIsPattern\": \"\", \"CheckIsSplCharAllowed\":false }  ",
                        "defaultValueType": null,
                        "defaultValue": "[{\"0\": \"50\"}]",
                        "tag": null,
                        "isActive": true,
                        "createdAt": "2024-08-07T17:40:42.743",
                        "updatedAt": "2024-08-07T17:40:42.743",
                        "displayName": "MAXIMUM LENGTH",
                        "sourceTable": "Master_Field_Technique",
                        "propertyGroup": "advanced",
                        "moduleName": "ALL",
                        "description": "Enter maximum size for value extraction. Minimum: 1, Maximum: 32767",
                        "isPropertyWindowEnabled": false,
                        "parentProperty": null,
                        "childPropertyOrder": null,
                        "isDisplayInTaggingMode": false,
                        "value": "50"
                    },
                    {
                        "id": 27,
                        "category": null,
                        "labelName": "contentDirectionID",
                        "helperText": "Typing....",
                        "inputType": "Select",
                        "isReadonly": false,
                        "mandatory": true,
                        "order": 10,
                        "validation": "{ \"CheckIsEmpty\": true, \"CheckIsMinLength\": \"0\", \"CheckIsMaxLength\": \"0\", \"CheckIsDataType\": \"\", \"CheckIsPattern\": \"\", \"CheckIsSplCharAllowed\":false }",
                        "defaultValueType": "Sql",
                        "defaultValue": "[{\"5\":\"360 degree\",\"3\":\"Bottom\",\"2\":\"Left\",\"1\":\"Right\",\"4\":\"Top\"}]",
                        "tag": null,
                        "isActive": true,
                        "createdAt": "2024-08-07T17:40:42.743",
                        "updatedAt": "2024-08-07T17:40:42.743",
                        "displayName": "VALUE POSITION",
                        "sourceTable": "Map_FieldKeyPair",
                        "propertyGroup": "advanced",
                        "moduleName": "ALL",
                        "description": "Position of value with its label in file.\r\nRight: Value is present on right side of label\r\nLeft: Value is present on left side of label\r\nBottom: Value is present on bottom side of label\r\nTop: Value is present on top side of label\r\n360°: Value can be present on any side of label\r\n\r\n",
                        "isPropertyWindowEnabled": false,
                        "parentProperty": null,
                        "childPropertyOrder": null,
                        "isDisplayInTaggingMode": false,
                        "value": "360 degree"
                    }
                ],
                "outputs": [
                    {
                        "id": 236,
                        "category": null,
                        "labelName": "Value",
                        "helperText": "",
                        "inputType": "Text",
                        "isReadonly": true,
                        "mandatory": false,
                        "order": 1,
                        "validation": null,
                        "defaultValueType": "Inline",
                        "defaultValue": null,
                        "tag": null,
                        "isActive": true,
                        "createdAt": "2024-08-07T14:35:00.687",
                        "updatedAt": "2024-08-07T14:35:00.687",
                        "displayName": "Values",
                        "sourceTable": null,
                        "propertyGroup": null,
                        "moduleName": "STANDARD",
                        "description": "",
                        "isPropertyWindowEnabled": false,
                        "parentProperty": null,
                        "childPropertyOrder": null,
                        "isDisplayInTaggingMode": false
                    }
                ],
                "status": 0,
                "displayName": "KeyValuePair- Printed",
                "labelname": "Discrete",
                "ComponentID": 8,
                "groupName": "Label Based",
                "apiid": "[{  \"orderId\":2,  \"apiId\":6  } ]",
                "icon": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOC43NiAyOC43NiI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2ZmODEwMDsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjMjkyZDM0OwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xMC45Miw5Ljc3aDExLjc4Yy41MSwwLC44OS0uMzguODktLjg5cy0uMzgtLjg5LS44OS0uODloLTExLjc4Yy0uNTEsMC0uODkuMzgtLjg5Ljg5cy4zOC44OS44OS44OVoiLz4KICA8Zz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEyLjIsMTUuNTJjLS4xNy0uMjEtLjQyLS4zMy0uNjktLjM1LS4wMywwLS4wNiwwLS4wOCwwLS41MiwwLS45Ni40MS0xLjAxLjkzLS4xMSwxLjM4LTEuMDgsMi41Ni0yLjM5LDIuOTd2LTYuNzVoLjk2Yy41NiwwLDEuMDEtLjQ1LDEuMDEtMS4wMXMtLjQ1LTEuMDEtMS4wMS0xLjAxaC0uODdjLjQ5LS4zNS43OS0uOTIuNzktMS41NCwwLTEuMDUtLjg1LTEuOS0xLjktMS45cy0xLjkuODUtMS45LDEuOWMwLC42Mi4zLDEuMTguNzksMS41NGgtLjg3Yy0uNTYsMC0xLjAxLjQ1LTEuMDEsMS4wMXMuNDUsMS4wMSwxLjAxLDEuMDFoLjk2djYuNzVjLTEuMzEtLjQxLTIuMjgtMS41OS0yLjM5LTIuOTctLjA0LS41Mi0uNDgtLjkzLTEuMDEtLjkzLS4wMywwLS4wNSwwLS4wOCwwLS4yNy4wMi0uNTEuMTUtLjY5LjM1LS4xNy4yMS0uMjYuNDctLjI0Ljc0LjExLDEuMzUuNzIsMi42MSwxLjcyLDMuNTQuNzYuNywxLjY5LDEuMTcsMi43MSwxLjM2LjExLjQ0LjUxLjc2Ljk4Ljc2cy44Ny0uMzIuOTgtLjc2YzEuMDEtLjE4LDEuOTUtLjY1LDIuNzEtMS4zNiwxLS45MywxLjYxLTIuMTgsMS43Mi0zLjU0LjAyLS4yNy0uMDYtLjUzLS4yNC0uNzRaTTcuNzcsOC43NWMwLC40MS0uMzMuNzQtLjc0Ljc0cy0uNzQtLjMzLS43NC0uNzQuMzMtLjc0Ljc0LS43NC43NC4zMy43NC43NFoiLz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI2LjI1LDE5Ljk4aC0xNC4zOGMtLjE2LjE4LS4zLjM3LS40OC41NC0uMzUuMzMtLjc1LjYxLTEuMTYuODUuMTYuMjQuNDEuNC43My40aDE1LjI4Yy41MSwwLC44OS0uMzguODktLjg5cy0uMzgtLjg5LS44OS0uODlaIi8+CiAgPC9nPgogIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI2LjI1LDE1Ljk3aC0xMi44MmMuMDEuMTIuMDIuMjQsMCwuMzctLjA0LjQ5LS4xNS45Ni0uMywxLjQyaDEzLjEyYy41MSwwLC44OS0uMzguODktLjg5cy0uMzgtLjg5LS44OS0uODlaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMjYuMjUsMTEuOTVoLTE1LjI4cy0uMDUuMDEtLjA4LjAyYy0uMTUuNDItLjQyLjc3LS43OSwxLjAxLjA2LjQ1LjQuNzYuODcuNzZoMTUuMjhjLjUyLDAsLjg5LS4zOC44OS0uODlzLS4zOC0uODktLjg5LS44OVoiLz4KPC9zdmc+",
                "componentType": "CMR",
                "allowedDataTypes": null
            }
        },
        {
            "id": "f75e4094-f743-4c78-b183-b55bb7b42c23",
            "ports": {
                "items": [
                    {
                        "id": "in",
                        "group": "in",
                        "position": "left",
                        "attrs": {
                            "circle": {
                                "r": 5,
                                "magnet": true,
                                "stroke": "#0ea5e9",
                                "strokeWidth": 2,
                                "fill": "#fff"
                            },
                            "text": {
                                "fontSize": 12,
                                "fill": "#888"
                            }
                        },
                        "label": {
                            "position": {
                                "name": "outside"
                            }
                        }
                    }
                ]
            },
            "shape": "dag-node",
            "position": {
                "x": 540,
                "y": 70
            },
            "size": {
                "Width": 60,
                "Height": 50
            },
            "data": {
                "id": "f75e4094-f743-4c78-b183-b55bb7b42c23",
                "type": "Activity.End",
                "version": 1,
                "metadata": {
                    "designer": {
                        "position": {
                            "x": 540,
                            "y": 70
                        },
                        "size": {
                            "Width": 60,
                            "Height": 50
                        }
                    }
                },
                "canStartWorkflow": false,
                "runAsynchronously": false,
                "customProperties": null,
                "inputs": [],
                "outputs": [],
                "status": 0,
                "displayName": "End",
                "labelname": "End",
                "ComponentID": 6,
                "groupName": "Looping",
                "apiid": null,
                "icon": "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOC43NiAyOC43NiI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogI2MzMWQyNjsKICAgICAgfQoKICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjE0LjM2IiBjeT0iMTQuNzciIHI9IjkuOTMiLz4KICA8Zz4KICAgIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE3LjUxLDE5Ljk1Yy0uMjksMC0uNTMtLjI0LS41My0uNTN2LTEwLjIyYzAtLjI5LjI0LS41My41My0uNTNzLjUzLjI0LjUzLjUzdjEwLjIyYzAsLjI5LS4yNC41My0uNTMuNTNaIi8+CiAgICA8cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNC40MywxNC44NGgtNi4yM2MtLjI5LDAtLjUzLS4yNC0uNTMtLjUzcy4yNC0uNTMuNTMtLjUzaDYuMjNjLjI5LDAsLjUzLjI0LjUzLjUzcy0uMjQuNTMtLjUzLjUzWiIvPgogICAgPHBhdGggY2xhc3M9ImNscy0yIiBkPSJNMTIuMzksMTcuODVjLS4xNCwwLS4yNy0uMDUtLjM3LS4xNS0uMjEtLjIxLS4yMS0uNTQsMC0uNzVsMi42My0yLjYzLTIuNjMtMi42M2MtLjIxLS4yMS0uMjEtLjU0LDAtLjc1LjIxLS4yMS41NC0uMjEuNzUsMGwzLjM4LDMuMzgtMy4zOCwzLjM4Yy0uMS4xLS4yNC4xNS0uMzcuMTVaIi8+CiAgPC9nPgo8L3N2Zz4=",
                "componentType": "STANDARD",
                "allowedDataTypes": null
            }
        }
    ]
};


export default nestedJSON;