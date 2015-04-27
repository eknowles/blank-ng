angular
    .module('app', [])

    .controller('MyCtrl', function ($scope) {
        $scope.data = {
            "workflows": [{
                "New": {
                    "All": {
                        "sections": [{
                            "id": "section_1",
                            "section": "",
                            "title": "Checklist",
                            "rows": [{
                                "id": "0",
                                "label": "How do you establish and maintain the description of the process needs and objectives for the organization?",
                                "2ndCol": {
                                    "type": "select",
                                    "source": [{
                                        "id": "Yes",
                                        "value": "Yes"
                                    }, {
                                        "id": "No",
                                        "value": "No"
                                    }, {
                                        "id": "N/A",
                                        "value": "N/A"
                                    }],
                                    "value": [],
                                    "required": true,
                                    "disabled": false,
                                    "hidden": false
                                },
                                "3rdCol": {
                                    "type": "select",
                                    "source": [{
                                        "id": "Yes",
                                        "value": "Yes"
                                    }, {
                                        "id": "No",
                                        "value": "No"
                                    }],
                                    "value": [],
                                    "required": true,
                                    "disabled": false,
                                    "hidden": false
                                },
                                "4thCol": {
                                    "type": "textarea",
                                    "label": "Comments",
                                    "PlaceHolder": "Enter Comment",
                                    "Value": ""
                                }
                            }, {
                                "id": "1",
                                "label": "Explain Organizational process performance objectives?",
                                "2ndCol": {
                                    "type": "select",
                                    "source": [{
                                        "id": "Yes",
                                        "value": "Yes"
                                    }, {
                                        "id": "No",
                                        "value": "No"
                                    }, {
                                        "id": "N/A",
                                        "value": "N/A"
                                    }],
                                    "value": [],
                                    "required": true,
                                    "disabled": false,
                                    "hidden": false
                                },
                                "3rdCol": {
                                    "type": "select",
                                    "source": [{
                                        "id": "Yes",
                                        "value": "Yes"
                                    }, {
                                        "id": "No",
                                        "value": "No"
                                    }],
                                    "value": [],
                                    "required": true,
                                    "disabled": false,
                                    "hidden": false
                                },
                                "4thCol": {
                                    "type": "textarea",
                                    "label": "Comments",
                                    "PlaceHolder": "Enter Comment",
                                    "Value": ""
                                }
                            }, {
                                "id": "2",
                                "label": "How do you track the objectives?",
                                "2ndCol": {
                                    "type": "select",
                                    "source": [{
                                        "id": "Yes",
                                        "value": "Yes"
                                    }, {
                                        "id": "No",
                                        "value": "No"
                                    }, {
                                        "id": "N/A",
                                        "value": "N/A"
                                    }],
                                    "value": [],
                                    "required": true,
                                    "disabled": false,
                                    "hidden": false
                                },
                                "3rdCol": {
                                    "type": "select",
                                    "source": [{
                                        "id": "Yes",
                                        "value": "Yes"
                                    }, {
                                        "id": "No",
                                        "value": "No"
                                    }],
                                    "value": [],
                                    "required": true,
                                    "disabled": false,
                                    "hidden": false
                                },
                                "4thCol": {
                                    "type": "textarea",
                                    "label": "Comments",
                                    "PlaceHolder": "Enter Comment",
                                    "Value": ""
                                }
                            }]
                        }]
                    }
                }
            }]
        };

        angular.forEach($scope.data, function (workflow, workflowIndex) {
            angular.forEach(workflow, function (workflowValue, workflowKey) {
                angular.forEach(workflowValue, function (value, roleKey) {
                    angular.forEach(value, function (section, sectionIndx) {
                        angular.forEach(section, function (row, rowIndx) {
                            angular.forEach(row[0].rows, function (row, rowIndx) {
                                console.log(row['2ndCol']);
                            });
                        });
                    });
                });
            });
        });
    });