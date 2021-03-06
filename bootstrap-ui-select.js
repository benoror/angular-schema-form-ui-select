angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/uiselect/multi.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\" ng-init=\"form.select_models=(form.schema.items| whereMulti : \'value\' : ($$value$$||[]))\">\r\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\r\n  <div class=\"form-group\" ng-controller=\"UiSelectController\">\r\n    <ui-select multiple sortable-options=\"{{form.sortableOptions}}\" ng-if=\"!(form.options.tagging||false)\" ng-model=\"form.select_models\" theme=\"bootstrap\" on-select=\"$$value$$.push($item.value)\" on-remove=\"$$value$$.splice($$value$$.indexOf($item.value), 1)\" class=\"{{form.options.uiClass}}\">\r\n      <ui-select-match placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\' | translate)}}\">{{$item.label}}</ui-select-match>\r\n      <ui-select-choices refresh=\"fetchResult(form.schema, form.options, $select.search)\"\r\n         refresh-delay=\"form.options.refreshDelay\" group-by=\"form.options.groupBy\"  repeat=\"item in form.schema.items | propsFilter: {label: $select.search, description: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\') }\">\r\n        <div ng-bind-html=\"item.label | highlight: $select.search\"></div>\r\n        <div ng-if=\"item.description\">\r\n          <span ng-bind-html=\"\'<small>\' + (\'\'+item.description | highlight: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\'))+ \'</small>\'\"></span>\r\n        </div>\r\n    </ui-select-choices>\r\n    </ui-select>\r\n    <ui-select ng-controller=\"UiSelectController\" multiple ng-if=\"(form.options.tagging||false) && !(form.options.groupBy || false)\" tagging=\"form.options.tagging||false\" tagging-label=\"form.options.taggingLabel\" tagging-tokens=\"form.options.taggingTokens\" sortable-options=\"{{form.sortableOptions}}\" ng-model=\"form.select_models\" theme=\"bootstrap\" on-select=\"$$value$$.push($item.value)\" on-remove=\"$$value$$.splice($$value$$.indexOf($item.value), 1)\" class=\"{{form.options.uiClass}}\">\r\n      <ui-select-match placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\' | translate)}}\">{{$item.label}}&nbsp;<small>{{($item.isTag===true ?  form.options.taggingLabel : \'\')}}</small></ui-select-match>\r\n      <ui-select-choices  refresh-delay=\"form.options.refreshDelay\" refresh=\"fetchResult(form.schema, form.options, $select.search)\"\r\n         refresh-delay=\"form.options.refreshDelay\" repeat=\"item in form.schema.items | propsFilter: {label: $select.search, description: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\') }\">\r\n          <div ng-if=\"item.isTag\" ng-bind-html=\"\'<div>\' + (item.label   | highlight: $select.search) + \' \' + form.options.taggingLabel + \'</div><div class=&quot;divider&quot;></div>\'\"></div>\r\n          <div ng-if=\"!item.isTag\" ng-bind-html=\"item.label + item.isTag | highlight: $select.search\"></div>\r\n      <div ng-if=\"item.description\"> \r\n        <span ng-bind-html=\"\'<small>\' + (\'\'+item.description | highlight: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\')) + \'</small>\'\"></span>\r\n      </div>\r\n    </ui-select-choices>\r\n      <!--repeat code because tagging does not display properly under group by but is still useful -->\r\n    </ui-select>\r\n\r\n    <ui-select ng-controller=\"UiSelectController\" multiple ng-if=\"(form.options.tagging||false) && (form.options.groupBy || false)\" tagging=\"form.options.tagging||false\" tagging-label=\"form.options.taggingLabel\" tagging-tokens=\"form.options.taggingTokens\" sortable-options=\"{{form.sortableOptions}}\" ng-model=\"form.select_models\" theme=\"bootstrap\" on-select=\"$$value$$.push($item.value)\" on-remove=\"$$value$$.splice($$value$$.indexOf($item.value), 1)\" class=\"{{form.options.uiClass}}\">\r\n      <ui-select-match placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\' | translate)}}\">{{$item.label}}&nbsp;<small>{{($item.isTag===true ?  form.options.taggingLabel : \'\')}}</small></ui-select-match>\r\n      <ui-select-choices group-by=\"form.options.groupBy\" refresh-delay=\"form.options.refreshDelay\" refresh=\"fetchResult(form.schema, form.options, $select.search)\"\r\n         refresh-delay=\"form.options.refreshDelay\" repeat=\"item in form.schema.items | propsFilter: {label: $select.search, description: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\') }\">\r\n          <div ng-if=\"item.isTag\" ng-bind-html=\"\'<div>\' + (item.label   | highlight: $select.search) + \' \' + form.options.taggingLabel + \'</div><div class=&quot;divider&quot;></div>\'\"></div>\r\n          <div ng-if=\"!item.isTag\" ng-bind-html=\"item.label + item.isTag | highlight: $select.search\"></div>\r\n      <div ng-if=\"item.description\"> \r\n        <span ng-bind-html=\"\'<small>\' + (\'\'+item.description | highlight: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\')) + \'</small>\'\"></span>\r\n      </div>\r\n    </ui-select-choices>\r\n\r\n    </ui-select>\r\n    <input toggle-model type=\"hidden\" ng-model=\"insideModel\" sf-changed=\"form\" schema-validate=\"form\" />\r\n    <span ng-if=\"form.feedback !== false\"\r\n      class=\"form-control-feedback\"\r\n      ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"></span>\r\n    <div class=\"help-block\"\r\n      ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\r\n      ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\r\n  </div>\r\n</div>\r\n");
$templateCache.put("directives/decorators/bootstrap/uiselect/single.html","<!-- <div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false}\" ng-init=\"select_models=(form.schema.items | where : {value: $$value$$})\">\r\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\r\n  <div class=\"form-group\" ng-init=\"select_model.selected=select_models[0]\">\r\n    <ui-select ng-model=\"select_model.selected\" ng-controller=\"UiSelectController\"  ng-if=\"!(form.options.tagging||false)\" theme=\"bootstrap\" ng-disabled=\"form.disabled\" on-select=\"$$value$$=$item.value\" class=\"{{form.options.uiClass}}\">\r\n      <ui-select-match placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\' | translate)}}\">{{select_model.selected.label}}</ui-select-match>\r\n      <ui-select-choices refresh=\"fetchResult(form.schema, form.options, $select.search)\"\r\n             refresh-delay=\"form.options.refreshDelay\" group-by=\"form.options.groupBy\"  repeat=\"item in form.schema.items | propsFilter: {label: $select.search, description: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\') }\">\r\n                <div ng-bind-html=\"item.label | highlight: $select.search\"></div>\r\n      <div ng-if=\"item.description\"> \r\n        <span ng-bind-html=\"\'<small>\' + (\'\'+item.description | highlight: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\'))+ \'</small>\'\"></span></div>\r\n      </ui-select-choices>\r\n    </ui-select>\r\n    <ui-select ng-controller=\"UiSelectController\"  ng-model=\"select_model.selected\" ng-if=\"(form.options.tagging||false) && !(form.options.groupBy || false)\" tagging=\"form.options.tagging||false\" tagging-label=\"form.options.taggingLabel\" tagging-tokens=\"form.options.taggingTokens\"\r\n      theme=\"bootstrap\" ng-disabled=\"form.disabled\" on-select=\"$$value$$=$item.value\" class=\"{{form.options.uiClass}}\">\r\n      <ui-select-match placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\' | translate)}}\">{{select_model.selected.label}}&nbsp;<small>{{(select_model.selected.isTag===true ? form.options.taggingLabel : \'\')}}</small></ui-select-match> -->\r\n      <!--repeat code because tagging does not display properly under group by but is still useful -->\r\n<!--       <ui-select-choices  refresh=\"form.options.refreshMethod(form.schema, $select.search)\"\r\n             refresh-delay=\"form.options.refreshDelay\" repeat=\"item in form.schema.items | propsFilter: {label: $select.search, description: (form.options.searchDescription===true ? $select.search : \'NOTSEARCHINGFORTHIS\') }\">\r\n        <div ng-if=\"item.isTag\" ng-bind-html=\"\'<div>\' + (item.label   | highlight: $select.search) + \' \' + form.options.taggingLabel + \'</div><div class=&quot;divider&quot;></div>\'\"></div><div ng-if=\"!item.isTag\" ng-bind-html=\"item.label + item.isTag| highlight: $select.search\"></div>\r\n      <div ng-if=\"item.description\"> \r\n        <span  ng-bind-html=\"\'<small>\' + (\'\'+item.description | highlight: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\')) + \'</small>\'\"></span>\r\n      </div>\r\n    </ui-select-choices>\r\n    </ui-select> -->\r\n\r\n      <!--repeat code because tagging does not display properly under group by but is still useful -->\r\n\r\n<!--     <ui-select ng-controller=\"UiSelectController\"  ng-model=\"select_model.selected\" ng-if=\"(form.options.tagging||false) && (form.options.groupBy || false)\"  tagging=\"form.options.tagging||false\" tagging-label=\"form.options.taggingLabel\" tagging-tokens=\"form.options.taggingTokens\"\r\n      theme=\"bootstrap\" ng-disabled=\"form.disabled\" on-select=\"$$value$$=$item.value\" class=\"{{form.options.uiClass}}\">\r\n      <ui-select-match placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\' | translate)}}\">{{select_model.selected.label}}&nbsp;<small>{{(select_model.selected.isTag===true ? form.options.taggingLabel : \'\')}}</small></ui-select-match>\r\n      <ui-select-choices group-by=\"form.options.groupBy\" refresh=\"form.options.refreshMethod(form.schema, $select.search)\"\r\n             refresh-delay=\"form.options.refreshDelay\" repeat=\"item in form.schema.items | propsFilter: {label: $select.search, description: (form.options.searchDescription===true ? $select.search : \'NOTSEARCHINGFORTHIS\') }\">\r\n        <div ng-if=\"item.isTag\" ng-bind-html=\"\'<div>\' + (item.label   | highlight: $select.search) + \' \' + form.options.taggingLabel + \'</div><div class=&quot;divider&quot;></div>\'\"></div><div ng-if=\"!item.isTag\" ng-bind-html=\"item.label + item.isTag| highlight: $select.search\"></div>\r\n      <div ng-if=\"item.description\"> \r\n        <span  ng-bind-html=\"\'<small>\' + (\'\'+item.description | highlight: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\')) + \'</small>\'\"></span>\r\n      </div>\r\n    </ui-select-choices>\r\n    </ui-select>\r\n    <input type=\"hidden\" toggle-single-model sf-changed=\"form\" ng-model=\"insideModel\" schema-validate=\"form\" />\r\n    <span ng-if=\"form.feedback !== false\"\r\n      class=\"form-control-feedback\"\r\n      ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"></span>\r\n    <div class=\"help-block\"\r\n      ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\r\n      ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"form-group {{form.htmlClass}}\" ng-class=\"{\'has-error\': hasError()}\">\r\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\r\n\r\n  <div ng-class=\"{\'input-group\': (form.fieldAddonLeft || form.fieldAddonRight)}\">\r\n    <span ng-if=\"form.fieldAddonLeft\"\r\n          class=\"input-group-addon\"\r\n          ng-bind-html=\"form.fieldAddonLeft\"></span>\r\n\r\n    <ui-select ng-model=\"$$value$$\" \r\n    					 ng-controller=\"UiSelectController\"\r\n    					 theme=\"bootstrap\"\r\n    					 ng-disabled=\"form.disabled\"\r\n    					 on-select=\"$$value$$=$item\" \r\n    					 class=\"{{form.options.uiClass}}\">\r\n\r\n      <ui-select-match placeholder=\"{{form.placeholder || form.schema.placeholder || (\'placeholders.select\' | translate)}}\">\r\n      	{{$$value$$.label}}\r\n      </ui-select-match>\r\n\r\n      <ui-select-choices refresh=\"fetchResult(form.schema, form.options, $select.search)\"\r\n             						 refresh-delay=\"form.options.refreshDelay\" \r\n             						 group-by=\"form.options.groupBy\"  \r\n             						 repeat=\"item in form.schema.items\">\r\n      <!--        						 repeat=\"item in form.schema.items | propsFilter: {label: $select.search, description: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\') }\"> -->\r\n      	\r\n      	<div ng-bind-html=\"item.label | highlight: $select.search\"></div>\r\n\r\n	      <div ng-if=\"item.description\"> \r\n	        <span ng-bind-html=\"\'<small>\' + (\'\'+item.description | highlight: (form.options.searchDescriptions===true ? $select.search : \'NOTSEARCHINGFORTHIS\'))+ \'</small>\'\"></span>\r\n	      </div>\r\n\r\n      </ui-select-choices>\r\n\r\n    </ui-select>\r\n\r\n    <span ng-if=\"form.fieldAddonRight\"\r\n          class=\"input-group-addon\"\r\n          ng-bind-html=\"form.fieldAddonRight\">\r\n    </span>\r\n\r\n  </div>\r\n  <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\r\n</div>\r\n");}]);
angular.module('schemaForm').config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var uiselect = function(name, schema, options) {
      if ((schema.type === 'string' || schema.type === 'number' || schema.type === 'object') 
      		&& schema.format == 'uiselect') {
        var f = schemaFormProvider.stdFormObj(name, schema, options);
        f.key  = options.path;
        f.type = 'uiselect';
        options.lookup[sfPathProvider.stringify(options.path)] = f;
        return f;
      }
    };

    schemaFormProvider.defaults.string.unshift(uiselect);
    schemaFormProvider.defaults.number.unshift(uiselect);
    schemaFormProvider.defaults.object.unshift(uiselect);

    // var uimultiselect = function(name, schema, options) {
    //   if (schema.type === 'array' && schema.format == 'uiselect') {
    //     var f = schemaFormProvider.stdFormObj(name, schema, options);
    //     f.key  = options.path;
    //     f.type = 'uimultiselect';
    //     options.lookup[sfPathProvider.stringify(options.path)] = f;
    //     return f;
    //   }
    // };
    // 
    // schemaFormProvider.defaults.array.unshift(uimultiselect);

  	//Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'uiselect',
    'directives/decorators/bootstrap/uiselect/single.html');
    schemaFormDecoratorsProvider.createDirective('uiselect',
    'directives/decorators/bootstrap/uiselect/single.html');
    // schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'uimultiselect',
    // 'directives/decorators/bootstrap/uiselect/multi.html');
    // schemaFormDecoratorsProvider.createDirective('uimultiselect',
    // 'directives/decorators/bootstrap/uiselect/multi.html');
  }])
  // .directive("toggleSingleModel", function() {
  //   // some how we get this to work ...
  //   return {
  //     require: 'ngModel',
  //     restrict: "A",
  //     scope: {},
  //     replace: true,
  //     controller: ['$scope', function($scope)  {
  //       $scope.$parent.$watch('select_model.selected',function(){
  //         if($scope.$parent.select_model.selected != undefined) {
  //           $scope.$parent.insideModel = $scope.$parent.select_model.selected.value;
  //           $scope.$parent.ngModel.$setViewValue($scope.$parent.select_model.selected.value);
  //         }
  //       });
  //     }],
  //   };
  // })
  // .directive("toggleModel", function() {
  //   // some how we get this to work ...
  //   return {
  //     require: 'ngModel',
  //     restrict: "A",
  //     scope: {},
  //     replace: true,
  //     controller: ['$scope','sfSelect', function($scope,  sfSelect)  {
  //       var list = sfSelect($scope.$parent.form.key, $scope.$parent.model);
  //       //as per base array implemenation if the array is undefined it must be set as empty for data binding to work
  //       if (angular.isUndefined(list)) {
  //           list = [];
  //           sfSelect($scope.$parent.form.key, $scope.$parent.model, list);
  //       }
  //       $scope.$parent.$watch('form.select_models',function(){
  //         if($scope.$parent.form.select_models.length == 0) {
  //           $scope.$parent.insideModel = $scope.$parent.$$value$$;
  //           if($scope.$parent.ngModel.$viewValue != undefined) {
  //             $scope.$parent.ngModel.$setViewValue($scope.$parent.form.select_models);
  //           }
  //         } else {
  //           $scope.$parent.insideModel = $scope.$parent.form.select_models;
  //           $scope.$parent.ngModel.$setViewValue($scope.$parent.form.select_models);
  //         }
  //       }, true);
  //     }],
  //   };
  // })
  // .filter('whereMulti', function() {
  //   return function(items, key, values) {
  //     var out = [];

  //     if (angular.isArray(values)) {
  //       values.forEach(function(value) {
  //         for (var i = 0; i < items.length; i++) {
  //           if (value == items[i][key]) {
  //             out.push(items[i]);
  //             break;
  //           }
  //         }
  //       });
  //     } else {
  //       // Let the output be the input untouched
  //       out = items;
  //     }

  //     return out;
  //   };
  // })
  // .filter('propsFilter', function() {
  //   return function(items, props) {
  //     var out = [];

  //     if (angular.isArray(items)) {
  //       items.forEach(function(item) {
  //         var itemMatches = false;

  //         var keys = Object.keys(props);
  //         for (var i = 0; i < keys.length; i++) {
  //           var prop = keys[i];
  //           if (item.hasOwnProperty(prop)){
  //             //only match if this property is actually in the item to avoid
  //             var text = props[prop].toLowerCase();
  //             //search for either a space before the text or the textg at the start of the string so that the middle of words are not matched
  //             if (item[prop].toString().toLowerCase().indexOf(text) === 0 || ( item[prop].toString()).toLowerCase().indexOf(' ' + text) !== -1  ) {
  //               itemMatches = true;
  //               break;
  //             }
  //           }
  //         }

  //         if (itemMatches) {
  //           out.push(item);
  //         }
  //       });
  //     } else {
  //       // Let the output be the input untouched
  //       out = items;
  //     }

  //     return out;
  //   };
  // })
  .controller('UiSelectController', ['$scope', '$http', function($scope, $http) {
    
    $scope.fetchResult = function (schema, options, search) {
        if(options) {
          if (options.callback) {
              schema.items = options.callback(schema, options, search);
              console.log('items', schema.items);
          }
          else if (options.http_post) {
              return $http.post(options.http_post.url, options.http_post.parameter).then(
                  function (_data) {
                      schema.items = _data.data;
                      console.log('items', schema.items);
                  },
                  function (data, status) {
                      alert("Loading select items failed (URL: '" + String(options.http_post.url) +
                          "' Parameter: " + String(options.http_post.parameter) + "\nError: "  + status);
                  });
          }
          else if (options.http_get) {
              return $http.get(options.http_get.url, options.http_get.parameter).then(
                  function (_data) {
                      schema.items = _data.data;
                      console.log('items', schema.items);
                  },
                  function (data, status) {
                      alert("Loading select items failed (URL: '" + String(options.http_get.url) +
                          "\nError: "  + status);
                  });
          }
          else if (options.async) {
              return options.async.call(schema, options, search).then(
                  function (_data) {
                      schema.items = _data.data;
                      console.log('items', schema.items);
                  },
                  function (data, status) {
                      alert("Loading select items failed(Options: '" + String(options) +
                          "\nError: "  + status);
                  });
          }
          
        }
    };
  }])
