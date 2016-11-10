/* global angular */

angular.module('sovaj-editable', [])
        /**
         * Options.
         *
         * @namespace editable-options
         */
        .value('editableOptions', {
            /**
             * Theme. Possible values `bs3`.
             *
             * @var {string} theme
             * @memberOf editable-options
             */
            theme: 'bs3',
            /**
             * Whether to show buttons on the left or on the right.
             * Possible values `right`.
             *
             * @var {string} buttons
             * @memberOf editable-options
             */
            buttons: 'right'

        });

function validString(str) {
    return str !== undefined && str !== null & str.trim() !== "";
}

angular.module('sovaj-editable').directive('editText', function () {
    return {
        restrict: 'A',
        transclude: false,
        scope: {
            editText: '=',
            required: '@',
            afterUpdate: '&'
        },
        replace: true,
        controller: function ($scope, $element, $timeout, editableOptions) {
            $scope.buttons = editableOptions.buttons;
            $scope.copyObject;
            $scope.required = $scope.required === 'true';
            $scope.textCopy = "";
            $scope.visible = false;
            $scope.overEditable = false;
            $scope.show = function () {
                $scope.visible = true;
            };
            $scope.submit = function () {
                $scope.hasError = false;
                if ($scope.required && !validString($scope.textCopy)) {
                    $scope.hasError = true;
                } else {
                    $scope.editText = $scope.textCopy;
                    $scope.visible = false;
                    $timeout(function () {
                        $scope.afterUpdate();
                    });
                }
            };

            $scope.cancel = function () {
                $scope.textCopy = $scope.editText;
                $scope.visible = false;
                $scope.hasError = false;
            };
            $scope.$watch('editText', function (value) {
                if (value) {
                    $scope.textCopy = value;
                }
            });
            $scope.$watch('visible', function (value) {
                if (value === true) {
                    $timeout(function () {
                        $element.find('input').focus()
                    });
                }
            });
        },
        templateUrl: function (elem, attr) {
            return 'theme/directives/editable/editableText.html';
        }
    };
});
angular.module('sovaj-editable').directive('editNumber', function () {
    return {
        restrict: 'A',
        transclude: false,
        scope: {
            editNumber: '=',
            required: '@',
            afterUpdate: '&'
        },
        replace: true,
        controller: function ($scope, $element, $timeout, editableOptions) {
            $scope.buttons = editableOptions.buttons;
            $scope.copyObject;
            $scope.textCopy = "";
            $scope.required = $scope.required === 'true';
            $scope.visible = false;
            $scope.overEditable = false;
            $scope.show = function () {
                $scope.visible = true;
            };
            $scope.submit = function () {
                $scope.hasError = false;
                if ($scope.required && !validString($scope.textCopy)) {
                    $scope.hasError = true;
                } else {
                    $scope.editNumber = $scope.textCopy;
                    $scope.visible = false;
                    $timeout(function () {
                        $scope.afterUpdate();
                    });
                }
            };

            $scope.cancel = function () {
                $scope.textCopy = $scope.editNumber;
                $scope.visible = false;
                $scope.hasError = false;
            };
            $scope.$watch('editNumber', function (value) {
                if (value) {
                    $scope.textCopy = value;
                }
            });
            $scope.$watch('visible', function (value) {
                if (value === true) {
                    $timeout(function () {
                        $element.find('input').focus()
                    });
                }
            });
        },
        templateUrl: function (elem, attr) {
            return 'theme/directives/editable/editableNumber.html';
        }
    };
});
angular.module('sovaj-editable').directive('editTextarea', function () {
    return {
        restrict: 'A',
        transclude: false,
        scope: {
            editTextarea: '=',
            afterUpdate: '&',
            required: '@',
            eRows: '='
        },
        replace: true,
        controller: function ($scope, $element, $timeout, editableOptions) {
            $scope.buttons = editableOptions.buttons;
            $scope.copyObject;
            $scope.required = $scope.required === 'true';
            $scope.textCopy = "";
            $scope.visible = false;
            $scope.overEditable = false;
            $scope.show = function () {
                $scope.visible = true;
            };
            $scope.submit = function () {
                $scope.hasError = false;
                if ($scope.required && !validString($scope.textCopy)) {
                    $scope.hasError = true;
                } else {
                    $scope.editTextarea = $scope.textCopy;
                    $scope.visible = false;

                    $timeout(function () {
                        $scope.afterUpdate();
                    });
                }
            };
            $scope.cancel = function () {
                $scope.textCopy = $scope.editTextarea;
                $scope.visible = false;
                $scope.hasError = false;
            };
            $scope.$watch('editTextarea', function (value) {
                if (value) {
                    $scope.textCopy = value;
                }
            });
            $scope.$watch('visible', function (value) {
                if (value === true) {
                    $timeout(function () {
                        $element.find('input').focus()
                    });
                }
            });
        },
        templateUrl: function (elem, attr) {
            return 'theme/directives/editable/editableTextarea.html';
        }
    };
});
angular.module('sovaj-editable').directive('editFulltext', function () {
    return {
        restrict: 'A',
        transclude: false,
        scope: {
            editFulltext: '=',
            required: '@',
            afterUpdate: '&'
        },
        replace: true,
        controller: function ($scope, $element, $timeout, editableOptions) {
            $scope.buttons = editableOptions.buttons;
            $scope.copyObject;
            $scope.required = $scope.required === 'true';
            $scope.textCopy = "";
            $scope.visible = false;
            $scope.overEditable = false;
            $scope.show = function () {
                $scope.visible = true;
            };
            $scope.submit = function () {
                $scope.hasError = false;
                if ($scope.required && !validString($scope.textCopy)) {
                    $scope.hasError = true;
                } else {
                    $scope.editFulltext = $scope.textCopy;
                    $scope.visible = false;
                    ;
                    $timeout(function () {
                        $scope.afterUpdate();
                    });
                }
            };
            $scope.cancel = function () {
                $scope.textCopy = $scope.editFulltext;
                $scope.visible = false;
                $scope.hasError = false;
            };
            $scope.$watch('editFulltext', function (value) {
                if (value) {
                    $scope.textCopy = value;
                }
            });
            $scope.$watch('visible', function (value) {
                if (value === true) {
                    $timeout(function () {
                        $element.find('input').focus()
                    });
                }
            });
        },
        templateUrl: function (elem, attr) {
            return 'theme/directives/editable/editableFulltext.html';
        }
    };
});
angular.module('sovaj-editable').directive('editSelect', function () {
    return {
        restrict: 'A',
        transclude: false,
        scope: {
            editSelect: '=',
            options: '=',
            required: '@',
            afterUpdate: '&'
        },
        replace: true,
        controller: function ($scope, $element, $timeout, editableOptions) {
            $scope.buttons = editableOptions.buttons;
            $scope.copyObject;
            $scope.required = $scope.required === 'true';
            $scope.textCopy = "";
            $scope.visible = false;
            $scope.overEditable = false;
            $scope.show = function () {
                $scope.visible = true;
            };
            $scope.submit = function () {
                $scope.hasError = false;
                if ($scope.required && !validString($scope.keyCopy)) {
                    $scope.hasError = true;
                } else {
                    $scope.editSelect = $scope.keyCopy;
                    for (var i = 0; i < $scope.options.length; i++) {
                        var option = $scope.options[i];
                        if (option.key == $scope.keyCopy) {
                            $scope.valueCopy = option.value;
                        }
                    }
                    $scope.visible = false;
                    $timeout(function () {
                        $scope.afterUpdate();
                    });
                }
            };
            $scope.cancel = function () {
                $scope.keyCopy = $scope.editSelect;
                $scope.visible = false;
                $scope.hasError = false;
            };
            $scope.$watch('editSelect', function (value) {
                if (value) {
                    $scope.keyCopy = value;
                    for (var i = 0; i < $scope.options.length; i++) {
                        var option = $scope.options[i];
                        if (option.key == value) {
                            $scope.valueCopy = option.value;
                        }
                    }
                }
            });
            $scope.$watch('visible', function (value) {
                if (value === true) {
                    $timeout(function () {
                        $element.find('input').focus()
                    });
                }
            });
        },
        templateUrl: function (elem, attr) {
            return 'theme/directives/editable/editableSelect.html';
        }
    };
});
angular.module('sovaj-editable').directive('editTypeahead', function () {
    return {
        restrict: 'A',
        scope: {
            editTypeahead: '=',
            url: '@',
            addUrl: '@',
            titleField: '@',
            required: '@',
            afterUpdate: '&'
        },
        controller: function ($scope, $element, $timeout, $resource, editableOptions) {
            $scope.buttons = editableOptions.buttons;
            $scope.textCopy = "";
            $scope.required = $scope.required === 'true';
            $scope.selectedChoise = $scope.editTypeahead;
            if ($scope.addUrl !== undefined) {
                $scope.addResource = $resource($scope.addUrl, {}, {'add': {method: 'PUT'}});
            }
            if ($scope.titleField === undefined) {
                $scope.titleField = "title";
            }
            $scope.selected = function (obj) {
                $scope.selectedChoise = obj.originalObject;
                $scope.newValue = undefined;
            };
            $scope.show = function () {
                $scope.visible = true;
            };
            $scope.submit = function () {
                if ($scope.selectedChoise !== undefined) {
                    $scope.editTypeahead = $scope.selectedChoise;
                    $scope.visible = false;

                    $timeout(function () {
                        $scope.afterUpdate();
                    });
                } else {
                    if ($scope.newValue === undefined || $scope.newValue === "") {

                        $scope.hasError = false;
                        if ($scope.required ) {
                            $scope.hasError = true;
                        } else {
                            $scope.editTypeahead = undefined;
                            $scope.visible = false;

                            $timeout(function () {
                                $scope.afterUpdate();
                            });
                        }
                    } else {
                        if ($scope.addResource != undefined) {
                            //Add new value and save
                            var newResource = {};
                            newResource[$scope.titleField] = $scope.newValue;
                            $scope.addResource.add(newResource, function (resource) {
                                $scope.editTypeahead = resource;
                                $scope.visible = false;

                                $timeout(function () {
                                    $scope.afterUpdate();
                                });
                            });
                        } else {
                            $scope.hasError = true;
                        }
                    }
                }
            };
            $scope.cancel = function () {
                $scope.editTypeahead = $scope.textCopy;
                $scope.visible = false;
                $scope.hasError = false;
            };
            $scope.newInput = function (newValue) {
                $scope.selectedChoise = undefined;
                $scope.newValue = newValue;
                $scope.hasError = false;
            };

            $scope.$watch('editTypeahead', function (value) {
                if (value) {
                    $scope.textCopy = value;
                    $scope.selectedChoise = $scope.editTypeahead;
                }
            });
            $scope.$watch('visible', function (value) {
                if (value === true) {
                    $timeout(function () {
                        $element.find('input').focus()
                    });
                }
            });
        },
        templateUrl: function (elem, attr) {
            return 'theme/directives/editable/editableTypeahead.html';
        }
    };
});