rmsApp.directive('editAutocomplete', function () {
    return {
        restrict: 'A',
        transclude: false,
        scope: {
            editAutocomplete: '=',
            afterUpdate: '&'
        },
        replace: true,
        controller: function ($scope, $element, $timeout) {
            $scope.copyObject;
            $scope.textCopy = "";
            $scope.visible = false;
            $scope.overEditable = false;
            $scope.show = function () {
                $scope.visible = true;
            };
            $scope.hide = function () {
                $scope.visible = false;
            };
            $scope.submit = function () {
                $scope.editAutocomplete = $scope.textCopy;
                $scope.visible = false;
                $timeout(function () {
                    $scope.afterUpdate();
                });
            };
            
            $scope.cancel = function () {
                $scope.textCopy = $scope.editAutocomplete;
                $scope.visible = false;
            };
            $scope.$watch('editAutocomplete', function (value) {
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
            return 'theme/directives/editable/editableAutocomplete.html';
        }
    };
}).directive('editText', function () {
    return {
        restrict: 'A',
        transclude: false,
        scope: {
            editText: '=',
            afterUpdate: '&'
        },
        replace: true,
        controller: function ($scope, $element, $timeout) {
            $scope.copyObject;
            $scope.textCopy = "";
            $scope.visible = false;
            $scope.overEditable = false;
            $scope.show = function () {
                $scope.visible = true;
            };
            $scope.hide = function () {
                $scope.visible = false;
            };
            $scope.submit = function () {
                $scope.editText = $scope.textCopy;
                $scope.visible = false;
                $timeout(function () {
                    $scope.afterUpdate();
                });
            };
            
            $scope.cancel = function () {
                $scope.textCopy = $scope.editText;
                $scope.visible = false;
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
}).directive('editNumber', function () {
    return {
        restrict: 'A',
        transclude: false,
        scope: {
            editNumber: '=',
            afterUpdate: '&'
        },
        replace: true,
        controller: function ($scope, $element, $timeout) {
            $scope.copyObject;
            $scope.textCopy = "";
            $scope.visible = false;
            $scope.overEditable = false;
            $scope.show = function () {
                $scope.visible = true;
            };
            $scope.hide = function () {
                $scope.visible = false;
            };
            $scope.submit = function () {
                $scope.editNumber = $scope.textCopy;
                $scope.visible = false;
                $timeout(function () {
                    $scope.afterUpdate();
                });
            };
            
            $scope.cancel = function () {
                $scope.textCopy = $scope.editNumber;
                $scope.visible = false;
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
}).directive('editTextarea', function () {
    return {
        restrict: 'A',
        transclude: false,
        scope: {
            editTextarea: '=',
            afterUpdate: '&',
            eRows: '='
        },
        replace: true,
        controller: function ($scope, $element, $timeout) {
            $scope.copyObject;
            $scope.textCopy = "";
            $scope.visible = false;
            $scope.overEditable = false;
            $scope.show = function () {
                $scope.visible = true;
            };
            $scope.hide = function () {
                $scope.visible = false;
            };
            $scope.submit = function () {
                $scope.editTextarea = $scope.textCopy;
                $scope.visible = false;
                
                $timeout(function () {
                    $scope.afterUpdate();
                });
            };
            $scope.cancel = function () {
                $scope.textCopy = $scope.editTextarea;
                $scope.visible = false;
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
}).directive('editFulltext', function () {
    return {
        restrict: 'A',
        transclude: false,
        scope: {
            editFulltext: '=',
            afterUpdate: '&'
        },
        replace: true,
        controller: function ($scope, $element, $timeout) {
            $scope.copyObject;
            $scope.textCopy = "";
            $scope.visible = false;
            $scope.overEditable = false;
            $scope.show = function () {
                $scope.visible = true;
            };
            $scope.hide = function () {
                $scope.visible = false;
            };
            $scope.submit = function () {
                $scope.editFulltext = $scope.textCopy;
                $scope.visible = false;;
                $timeout(function () {
                    $scope.afterUpdate();
                });
            };
            $scope.cancel = function () {
                $scope.textCopy = $scope.editFulltext;
                $scope.visible = false;
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
}).directive('editSelect', function () {
    return {
        restrict: 'A',
        transclude: false,
        scope: {
            editSelect: '=',
            options: '=',
            afterUpdate: '&'
        },
        replace: true,
        controller: function ($scope, $element, $timeout) {
            $scope.copyObject;
            $scope.textCopy = "";
            $scope.visible = false;
            $scope.overEditable = false;
            $scope.show = function () {
                $scope.visible = true;
            };
            $scope.hide = function () {
                $scope.visible = false;
            };
            $scope.submit = function () {
                $scope.editSelect = $scope.keyCopy;
                for (let i = 0; i < $scope.options.length; i++) {
                    let option = $scope.options[i];
                    if(option.key == $scope.keyCopy){
                        $scope.valueCopy = option.value;
                    }
                }
                $scope.visible = false;
                $timeout(function () {
                    $scope.afterUpdate();
                });
                
            };
            $scope.cancel = function () {
                $scope.keyCopy = $scope.editSelect;
                $scope.visible = false;
            };
            $scope.$watch('editSelect', function (value) {
                if (value) {
                    $scope.keyCopy = value;
                    for (let i = 0; i < $scope.options.length; i++) {
                        let option = $scope.options[i];
                        if(option.key == value){
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
}).directive('editTypeahead', function () {
    return {
        restrict: 'A',
        templateUrl: function (elem, attr) {
            return 'theme/directives/editable/editableTypeahead.html';
        }
    };
}).directive('editWysiwyg', function () {
    return {
        restrict: 'A',
        templateUrl: function (elem, attr) {
            return 'theme/directives/editable/editableWysiwyg.html';
        }
    };
});