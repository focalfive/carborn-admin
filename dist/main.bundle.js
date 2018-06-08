webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/data/data.module": [
		"./src/app/data/data.module.ts"
	],
	"app/login/login.module": [
		"./src/app/login/login.module.ts"
	],
	"app/play/play.module": [
		"./src/app/play/play.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_guard__ = __webpack_require__("./src/app/shared/auth-guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'data',
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_auth_guard__["a" /* AuthGuard */]],
        loadChildren: 'app/data/data.module#DataModule',
    },
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule',
    },
    {
        path: 'play',
        loadChildren: 'app/play/play.module#PlayModule',
    },
    {
        path: '',
        redirectTo: 'data',
        pathMatch: 'full',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_auth_guard__["a" /* AuthGuard */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-gnb></app-gnb>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_data_module__ = __webpack_require__("./src/app/data/data.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_module__ = __webpack_require__("./src/app/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__play_play_module__ = __webpack_require__("./src/app/play/play.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__data_data_module__["DataModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__login_login_module__["LoginModule"],
                __WEBPACK_IMPORTED_MODULE_8__play_play_module__["PlayModule"],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/dictionary.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseDictionary; });
var BaseDictionary = /** @class */ (function () {
    function BaseDictionary(init) {
        if (init === void 0) { init = {}; }
        this._keys = [];
        this._values = [];
        for (var key in init) {
            if (null !== init[key]) {
                var value = init[key];
                this[key] = value;
                this._keys.push(key);
                this._values.push(value);
            }
        }
    }
    Object.defineProperty(BaseDictionary.prototype, "length", {
        get: function () {
            return this._keys.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDictionary.prototype, "keys", {
        get: function () {
            return this._keys;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDictionary.prototype, "values", {
        get: function () {
            return this._values;
        },
        enumerable: true,
        configurable: true
    });
    BaseDictionary.prototype.add = function (key, value) {
        this[key] = value;
        this._keys.push(key);
        this._values.push(value);
    };
    BaseDictionary.prototype.remove = function (key) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
        delete this[key];
    };
    BaseDictionary.prototype.containsOfKey = function (key) {
        if (typeof this[key] === 'undefined') {
            return false;
        }
        return true;
    };
    BaseDictionary.prototype.containsOfValue = function (value) {
        if (this._values.indexOf(value) >= 0) {
            return true;
        }
        return false;
    };
    BaseDictionary.prototype.keysForValue = function (value) {
        var keys = [];
        var i;
        var count = this._values.length;
        for (i = 0; i < count; ++i) {
            var item = this._values[i];
            if (item === value) {
                keys.push(this._keys[i]);
            }
        }
        return keys;
    };
    BaseDictionary.prototype.toLookup = function () {
        return this;
    };
    return BaseDictionary;
}());



/***/ }),

/***/ "./src/app/core/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BaseModelMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BaseModelFilter; });
/* unused harmony export BaseModelRequired */
/* unused harmony export BaseModelTypes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dictionary__ = __webpack_require__("./src/app/core/dictionary.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__("./src/app/core/object.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var BaseModel = /** @class */ (function (_super) {
    __extends(BaseModel, _super);
    function BaseModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseModel.prototype.init = function () { };
    BaseModel.prototype.initWithObject = function (object) {
        var thisClass = this.constructor;
        object = this.pipe(thisClass._map, 'run', object);
        object = this.pipe(thisClass._filter, 'run', object);
        if (thisClass._required) {
            thisClass._required.check(object);
        }
        for (var key in object) {
            if (null !== this[key]) {
                this[key] = object[key];
            }
        }
    };
    BaseModel.prototype.pipe = function (target, selector, argument) {
        if (typeof target === 'object' &&
            typeof selector === 'string' &&
            typeof target[selector] === 'function') {
            return target[selector](argument);
        }
        return argument;
    };
    return BaseModel;
}(__WEBPACK_IMPORTED_MODULE_1__object__["a" /* BaseObject */]));

var BaseModelMap = /** @class */ (function (_super) {
    __extends(BaseModelMap, _super);
    function BaseModelMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseModelMap.prototype.init = function () { };
    BaseModelMap.prototype.initWithObject = function (object) {
        for (var key in object) {
            if (null !== object[key]) {
                var item = object[key];
                if (typeof item !== 'string') {
                    console.log('RModelMap argument must be {string: string} key value type');
                    return;
                }
            }
        }
        this.dictionary = new __WEBPACK_IMPORTED_MODULE_0__dictionary__["a" /* BaseDictionary */](object);
    };
    BaseModelMap.prototype.run = function (origin) {
        if (!this.dictionary) {
            return origin;
        }
        var mapped = {};
        for (var key in origin) {
            if (null !== origin[key]) {
                var value = origin[key];
                var mappedkeys = this.dictionary.containsOfValue(key) ? (this.dictionary.keysForValue(key)) : ([key]);
                for (var _i = 0, mappedkeys_1 = mappedkeys; _i < mappedkeys_1.length; _i++) {
                    var mappedKey = mappedkeys_1[_i];
                    mapped[mappedKey] = value;
                }
            }
        }
        return mapped;
    };
    return BaseModelMap;
}(__WEBPACK_IMPORTED_MODULE_1__object__["a" /* BaseObject */]));

var BaseModelFilter = /** @class */ (function (_super) {
    __extends(BaseModelFilter, _super);
    function BaseModelFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseModelFilter.prototype.init = function () { };
    BaseModelFilter.prototype.initWithObject = function (object) {
        for (var key in object) {
            if (null !== object[key]) {
                var item = object[key];
                if (typeof item !== 'function') {
                    console.log('ModelFilter argument must be {string: function} key value type');
                    return;
                }
            }
        }
        this.dictionary = new __WEBPACK_IMPORTED_MODULE_0__dictionary__["a" /* BaseDictionary */](object);
    };
    BaseModelFilter.prototype.run = function (origin) {
        if (!this.dictionary) {
            return origin;
        }
        var filtered = {};
        for (var key in origin) {
            if (null !== origin[key]) {
                var value = origin[key];
                filtered[key] = this.dictionary.containsOfKey(key) ? (filtered[key] = this.dictionary[key](value)) : (value);
            }
        }
        return filtered;
    };
    return BaseModelFilter;
}(__WEBPACK_IMPORTED_MODULE_1__object__["a" /* BaseObject */]));

var BaseModelRequired = /** @class */ (function (_super) {
    __extends(BaseModelRequired, _super);
    function BaseModelRequired() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseModelRequired.prototype.init = function () { };
    BaseModelRequired.prototype.initWithArray = function (array) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            if (typeof item !== 'string') {
                console.log('ModelRequired argument must be string[] array type');
                return;
            }
        }
        this.requires = array;
    };
    BaseModelRequired.prototype.check = function (origin) {
        if (!this.requires) {
            return true;
        }
        for (var _i = 0, _a = this.requires; _i < _a.length; _i++) {
            var item = _a[_i];
            if (typeof origin[item] === 'undefined') {
                console.error('Attribute required error: This model must have ' + item + ' property!');
                return false;
            }
        }
        return true;
    };
    return BaseModelRequired;
}(__WEBPACK_IMPORTED_MODULE_1__object__["a" /* BaseObject */]));

var BaseModelTypes = /** @class */ (function (_super) {
    __extends(BaseModelTypes, _super);
    function BaseModelTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseModelTypes.prototype.init = function () { };
    BaseModelTypes.prototype.initWithObject = function (object) {
        for (var key in object) {
            if (null !== object[key]) {
                var item = object[key];
                if (typeof item !== 'string') {
                    console.log('ModelTypes argument must be {string: string} key value type');
                    return;
                }
            }
        }
        this.dictionary = new __WEBPACK_IMPORTED_MODULE_0__dictionary__["a" /* BaseDictionary */](object);
    };
    BaseModelTypes.prototype.check = function (origin) {
        if (!this.dictionary) {
            return true;
        }
        var validated = true;
        for (var key in origin) {
            if (null !== origin[key]) {
                var value = origin[key];
                var typeOrigin = typeof value;
                var typeValid = this.dictionary[key];
                if (this.dictionary.containsOfKey(key) &&
                    typeOrigin !== typeValid) {
                    validated = false;
                    console.error('Type error: The type of ' + key + ' is ' + typeOrigin + ' must be ' + typeValid + '!');
                }
            }
        }
        return validated;
    };
    return BaseModelTypes;
}(__WEBPACK_IMPORTED_MODULE_1__object__["a" /* BaseObject */]));



/***/ }),

/***/ "./src/app/core/object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseObject; });
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var initializerName = BaseObject.InitializerName(args);
        if (typeof this[initializerName] === 'function') {
            this[initializerName].apply(this, args);
        }
        else {
            BaseObject.InitError(this, initializerName, BaseObject.Types(args));
        }
    }
    BaseObject.InitError = function (context, initializerName, argTypeNames) {
        if (argTypeNames === void 0) { argTypeNames = []; }
        var className = context.constructor.name;
        var funcString = [
            className,
            '(',
            argTypeNames.map(function (type, index) { return 'arg' + (index + 1) + ': ' + type.toLowerCase(); }).join(', '),
            ')'
        ].join('');
        console.error('There is no initializer of', className + '.' + initializerName, 'but it called', funcString);
    };
    BaseObject.Types = function (args) {
        var types = [];
        for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
            var arg = args_1[_i];
            var argType = typeof arg;
            var argName = void 0;
            if (argType === 'object') {
                argName = arg.constructor.name;
            }
            else {
                argName = argType.charAt(0).toUpperCase() + argType.slice(1);
            }
            types.push(argName);
        }
        return types;
    };
    BaseObject.InitializerName = function (args) {
        var name = 'init';
        var types = BaseObject.Types(args);
        var isFirst = true;
        for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
            var type = types_1[_i];
            if (type === 'Undefined') {
                continue;
            }
            name += (isFirst ? 'With' : 'And') + type;
            isFirst = false;
        }
        return name;
    };
    return BaseObject;
}());



/***/ }),

/***/ "./src/app/data/data-editor/data-editor.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  position: relative;\n}\n\n.mat-icon {\n  font-size: 14px;\n}\n\n.table-box {\n  padding: 20px;\n}\n\n.data-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n}\n\n.no-data-selected {\n    text-align: center;\n    line-height: 200px;\n}\n\n.mat-table {\n  overflow: auto;\n}\n\nmat-row.selected {\n  background: #FFE51F;\n}\n\n.cdk-overlay-pane {\n  overflow: auto;\n}\n\n.progress-cover {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  min-height: 300px;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\nmat-spinner {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n}\n"

/***/ }),

/***/ "./src/app/data/data-editor/data-editor.component.html":
/***/ (function(module, exports) {

module.exports = "\n<button mat-button [matMenuTriggerFor]=\"versionMenu\">Version {{ data?.title }}</button>\n<mat-menu #versionMenu=\"matMenu\">\n  <button mat-menu-item *ngFor=\"let item of dataList\" (click)=\"versionMenuDidSelect($event, item.id)\">{{ item.title }}</button>\n</mat-menu>\n\n<button mat-button [matMenuTriggerFor]=\"columnMenu\">Custom Column</button>\n<mat-menu #columnMenu=\"matMenu\">\n  <button mat-menu-item *ngFor=\"let item of columns\" (click)=\"columnMenuDidSelect($event, item.key)\"><mat-icon *ngIf=\"item.selected\">done</mat-icon>{{ item.name }}</button>\n</mat-menu>\n<div class=\"progress-cover\" *ngIf=\"isLoading\">\n  <mat-spinner color=\"accent\"></mat-spinner>\n</div>\n<div class=\"table-box\" *ngIf=\"!isLoading\">\n  <div *ngIf=\"dataSource\" class=\"data-container mat-elevation-z8\">\n    <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n      <ng-container *ngFor=\"let column of displayedColumns\" [matColumnDef]=\"column\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> {{column}} </mat-header-cell>\n        <mat-cell *matCellDef=\"let car\"> {{car[column]}} </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns; let i = index\"\n          (click)=\"rowDidClick(i)\" (dblclick)=\"rowDidDoubleClick(i)\"\n          (touchstart)=\"rowDidTouchStart($event, i)\" (touchmove)=\"rowDidTouchMove($event, i)\" [class.selected]=\"i === selectedIndex\">\n      </mat-row>\n    </mat-table>\n  </div>\n  <div *ngIf=\"!dataSource\" class=\"no-data-selected\">\n    Select any version!\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/data/data-editor/data-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_row_editor_dialog_component__ = __webpack_require__("./src/app/data/data-editor/data-row-editor-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_data_service__ = __webpack_require__("./src/app/data/shared/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataEditorComponent = /** @class */ (function () {
    function DataEditorComponent(dataService, dialog, router) {
        var _this = this;
        this.dataService = dataService;
        this.dialog = dialog;
        this.router = router;
        this.longTapCancelDistanceX = 10;
        this.longTapCancelDistanceY = 10;
        this.longTapSelectedIndex = null;
        this.longTapTimeoutDelay = 1000;
        this.isLoading = true;
        this.dataList = [];
        this.displayedColumns = [];
        this.columns = [];
        this.id = null;
        this.rowDidLongTap = function () {
            if (_this.longTapTimeout >= 0) {
                clearTimeout(_this.longTapTimeout);
            }
            var index = _this.longTapSelectedIndex;
            console.log('rowDidLongTap', index);
            if (typeof index !== 'number' ||
                index < 0 ||
                index >= _this.data.cars.length) {
                return;
            }
            _this.editRow(index);
            _this.longTapSelectedIndex = null;
        };
    }
    Object.defineProperty(DataEditorComponent.prototype, "dataId", {
        get: function () {
            return this.id;
        },
        set: function (newValue) {
            if (this.id !== newValue) {
                this.id = newValue;
                if (!!newValue) {
                    this.loadData();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    DataEditorComponent.prototype.ngOnInit = function () {
        this.loadList();
    };
    DataEditorComponent.prototype.ngOnChanges = function (changes) {
        if (this.id) {
            this.loadData();
        }
    };
    DataEditorComponent.prototype.loadList = function () {
        var _this = this;
        this.dataService.getList().subscribe(function (list) {
            _this.isLoading = false;
            _this.dataList = [];
            list.map(function (model) {
                if (model.title) {
                    _this.dataList.push(model);
                }
            });
        }, function (err) {
            console.error('Error', err);
        });
    };
    DataEditorComponent.prototype.loadData = function () {
        var _this = this;
        this.isLoading = true;
        this.dataService.get(this.id).subscribe(function (data) {
            _this.isLoading = false;
            _this.parseData(data);
        }, function (err) {
            _this.isLoading = false;
            console.error('Error', err);
        });
    };
    DataEditorComponent.prototype.updateData = function (index, car) {
        var _this = this;
        this.isLoading = true;
        var cars = this.data.cars;
        cars[index] = car;
        this.dataService.setCars(this.id, cars).subscribe(function (data) {
            _this.isLoading = false;
            _this.parseData(data);
        }, function (err) {
            _this.isLoading = false;
            console.error('Error', err);
        });
    };
    DataEditorComponent.prototype.parseData = function (data) {
        var _this = this;
        this.data = data;
        var keys = this.dataService.getAllKeys(data.cars);
        this.columns = this.dataService.getStoredColumns(this.id);
        if (!Array.isArray(this.columns) || this.columns.length === 0) {
            this.columns = keys.map(function (key, index) {
                return { key: key, name: key, selected: index < 5 };
            });
            this.dataService.setStoredColumns(this.id, this.columns);
        }
        this.displayedColumns = this.dataService.getDispayColumnKeys(this.columns);
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatTableDataSource */](data.cars);
        setTimeout(function () {
            _this.dataSource.sort = _this.sort;
        }, 0);
    };
    DataEditorComponent.prototype.versionMenuDidSelect = function (event, id) {
        // this.dataId = id;
        var queryParams = {
            dataId: id,
        };
        this.router.navigate(['data'], { queryParams: queryParams });
    };
    DataEditorComponent.prototype.columnMenuDidSelect = function (event, id) {
        var _this = this;
        if (!Array.isArray(this.columns)) {
            return;
        }
        var count = this.columns.length;
        if (count === 0) {
            return;
        }
        var hasChanges = false;
        this.columns.map(function (column, index) {
            if (column.key === id) {
                _this.columns[index].selected = !_this.columns[index].selected;
                hasChanges = true;
            }
        });
        if (hasChanges) {
            this.displayedColumns = this.dataService.getDispayColumnKeys(this.columns);
            this.dataService.setStoredColumns(this.id, this.columns);
        }
        event.stopPropagation();
    };
    DataEditorComponent.prototype.rowDidClick = function (index) {
        this.selectedIndex = this.selectedIndex === index ? undefined : index;
    };
    DataEditorComponent.prototype.rowDidDoubleClick = function (index) {
        this.editRow(index);
    };
    DataEditorComponent.prototype.editRow = function (index) {
        var _this = this;
        this.selectedIndex = this.selectedIndex === index ? undefined : index;
        var car = Object.assign({}, this.data.cars[index]);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__data_row_editor_dialog_component__["a" /* DataRowEditorDialogComponent */], {
            width: '80%',
            maxHeight: '80%',
            data: car,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('result', result, typeof result);
            if (typeof result !== 'object' || result === null) {
                return;
            }
            _this.updateData(_this.selectedIndex, result);
        });
    };
    DataEditorComponent.prototype.rowDidTouchStart = function (event, index) {
        console.log('rowDidTouchStart', event.targetTouches, index);
        if (event.targetTouches.length === 0) {
            return;
        }
        this.cancelLongTap();
        var firstTouch = event.targetTouches[0];
        this.touchX = firstTouch.clientX;
        this.touchY = firstTouch.clientY;
        console.log('rowDidTouchStart', index);
        this.longTapSelectedIndex = index;
        this.longTapTimeout = setTimeout(this.rowDidLongTap, this.longTapTimeoutDelay);
    };
    DataEditorComponent.prototype.rowDidTouchMove = function (event, index) {
        console.log('rowDidTouchMove', event.targetTouches, index);
        if (event.targetTouches.length === 0) {
            return;
        }
        var firstTouch = event.targetTouches[0];
        if (Math.abs(firstTouch.clientX - this.touchX) > this.longTapCancelDistanceX ||
            Math.abs(firstTouch.clientY - this.touchY) > this.longTapCancelDistanceY) {
            this.cancelLongTap();
        }
    };
    DataEditorComponent.prototype.cancelLongTap = function () {
        this.longTapSelectedIndex = null;
        if (this.longTapTimeout >= 0) {
            clearTimeout(this.longTapTimeout);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], DataEditorComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatSort */])
    ], DataEditorComponent.prototype, "sort", void 0);
    DataEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-data-editor',
            template: __webpack_require__("./src/app/data/data-editor/data-editor.component.html"),
            styles: [__webpack_require__("./src/app/data/data-editor/data-editor.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DataEditorComponent);
    return DataEditorComponent;
}());



/***/ }),

/***/ "./src/app/data/data-editor/data-row-editor-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ".field-box {\n  overflow-x: auto;\n  white-space: nowrap;\n}\n"

/***/ }),

/***/ "./src/app/data/data-editor/data-row-editor-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Modify</h2>\n<mat-dialog-content>\n  <div class=\"field-box\">\n    <mat-form-field *ngFor=\"let key of keys\">\n      <input matInput [placeholder]=\"key\" [(ngModel)]=\"data[key]\">\n    </mat-form-field>\n  </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Save</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/data/data-editor/data-row-editor-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataRowEditorDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_car_model__ = __webpack_require__("./src/app/data/shared/car.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DataRowEditorDialogComponent = /** @class */ (function () {
    function DataRowEditorDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.keys = Object.keys(data);
        console.log(this.keys);
    }
    DataRowEditorDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-data-row-editor',
            template: __webpack_require__("./src/app/data/data-editor/data-row-editor-dialog.component.html"),
            styles: [__webpack_require__("./src/app/data/data-editor/data-row-editor-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_2__shared_car_model__["a" /* Car */]])
    ], DataRowEditorDialogComponent);
    return DataRowEditorDialogComponent;
}());



/***/ }),

/***/ "./src/app/data/data-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_component__ = __webpack_require__("./src/app/data/data.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__data_component__["a" /* DataComponent */],
    }
];
var DataRoutingModule = /** @class */ (function () {
    function DataRoutingModule() {
    }
    DataRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], DataRoutingModule);
    return DataRoutingModule;
}());



/***/ }),

/***/ "./src/app/data/data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"msg\" *ngIf=\"isCheckingPermissions\">\n  <div class=\"msg-text\">Checking permissions...</div>\n  <mat-spinner color=\"accent\"></mat-spinner>\n</div>\n<div *ngIf=\"!isCheckingPermissions\">\n  <div *ngIf=\"isAdmin\">\n    <app-data-editor [id]=\"id\"></app-data-editor>\n  </div>\n  <div class=\"msg\" *ngIf=\"!isAdmin\">\n    <div class=\"msg-title\">Permission denined!</div>\n    <div class=\"msg-text\">Get your unique identifier below button and send to administrator.</div>\n    <div class=\"field-id\">{{userId}}</div>\n    <button mat-raised-button color=\"primary\" (click)=\"showUserId()\">Show User Identifier</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/data/data.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-elevation-z0 {\n  -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z1 {\n  -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z2 {\n  -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z3 {\n  -webkit-box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z4 {\n  -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z5 {\n  -webkit-box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z6 {\n  -webkit-box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z7 {\n  -webkit-box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z8 {\n  -webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z9 {\n  -webkit-box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z10 {\n  -webkit-box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z11 {\n  -webkit-box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z12 {\n  -webkit-box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z13 {\n  -webkit-box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z14 {\n  -webkit-box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z15 {\n  -webkit-box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z16 {\n  -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z17 {\n  -webkit-box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z18 {\n  -webkit-box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z19 {\n  -webkit-box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z20 {\n  -webkit-box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z21 {\n  -webkit-box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z22 {\n  -webkit-box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z23 {\n  -webkit-box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z24 {\n  -webkit-box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h5, .mat-typography h5 {\n  font: 400 11.62px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-h6, .mat-typography h6 {\n  font: 400 9.38px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button, .mat-flat-button,\n.mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n.mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n.mat-cell {\n  font-size: 14px; }\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-calendar-body {\n  font-size: 13px; }\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n.mat-form-field-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.33335333%; }\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n.mat-form-field-label {\n  top: 1.28125em; }\n.mat-form-field-underline {\n  bottom: 1.25em; }\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n.mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select-trigger {\n  height: 1.125em; }\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.mat-tooltip-handset {\n  font-size: 14px;\n  padding-top: 9px;\n  padding-bottom: 9px; }\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n.mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n.mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n.mat-ripple {\n  overflow: hidden; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-ripple {\n      display: none; } }\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-overlay-container:empty {\n    display: none; }\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 1000; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 1; }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.288); }\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #00bcd4; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #00acc1; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #00acc1; }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n.mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-pseudo-checkbox::after {\n    color: #fafafa; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #00acc1; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #00bcd4; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #00acc1; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  background: transparent; }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(0, 188, 212, 0.12); }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(0, 172, 193, 0.12); }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(0, 172, 193, 0.12); }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n    color: #00bcd4; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n    color: #00acc1; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n    color: #00acc1; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n.mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #00bcd4; }\n.mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #00acc1; }\n.mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #00acc1; }\n.mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-button.mat-primary .mat-ripple-element {\n  background-color: rgba(0, 188, 212, 0.1); }\n.mat-button.mat-accent .mat-ripple-element {\n  background-color: rgba(0, 172, 193, 0.1); }\n.mat-button.mat-warn .mat-ripple-element {\n  background-color: rgba(0, 172, 193, 0.1); }\n.mat-flat-button {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-flat-button.mat-primary {\n    color: white; }\n.mat-flat-button.mat-accent {\n    color: white; }\n.mat-flat-button.mat-warn {\n    color: white; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-flat-button.mat-primary {\n    background-color: #00bcd4; }\n.mat-flat-button.mat-accent {\n    background-color: #00acc1; }\n.mat-flat-button.mat-warn {\n    background-color: #00acc1; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-flat-button.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-flat-button.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(0, 188, 212, 0.2); }\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(0, 172, 193, 0.2); }\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(0, 172, 193, 0.2); }\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #00bcd4; }\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #00acc1; }\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #00acc1; }\n:host {\n  height: 100%; }\n.msg {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 256px;\n  height: 256px;\n  margin: -128px 0 0 -128px;\n  text-align: center; }\n.msg-title {\n  font-size: 28px;\n  font-weight: 300; }\n.msg-text {\n  font-size: 16px;\n  line-height: 20px; }\n.msg-title,\n.msg-text,\n.field-id {\n  margin-bottom: 20px; }\n.field-id {\n  height: 50px;\n  overflow: hidden;\n  border: solid #ccc 1px;\n  line-height: 52px; }\n.msg > mat-spinner {\n  margin-left: 78px; }\n.mat-raised-button {\n  font-weight: 100; }\n"

/***/ }),

/***/ "./src/app/data/data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_model__ = __webpack_require__("./src/app/shared/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataComponent = /** @class */ (function () {
    function DataComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.isCheckingPermissions = false;
        this.isAdmin = false;
        this.userId = '';
        this.id = null;
    }
    DataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isCheckingPermissions = true;
        __WEBPACK_IMPORTED_MODULE_2__shared_user_model__["a" /* User */].shared.getIsAdmin().subscribe(function (isAdmin) {
            _this.isCheckingPermissions = false;
            if (isAdmin) {
                _this.isAdmin = true;
            }
            else {
                _this.isAdmin = false;
            }
        }, function (err) {
            console.error('Check admin error');
        });
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params['dataId']) {
                _this.id = params['dataId'];
            }
        });
    };
    DataComponent.prototype.showUserId = function () {
        this.userId = __WEBPACK_IMPORTED_MODULE_2__shared_user_model__["a" /* User */].shared.id;
    };
    DataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-data',
            template: __webpack_require__("./src/app/data/data.component.html"),
            styles: [__webpack_require__("./src/app/data/data.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], DataComponent);
    return DataComponent;
}());



/***/ }),

/***/ "./src/app/data/data.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModule", function() { return DataModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_routing_module__ = __webpack_require__("./src/app/data/data-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_component__ = __webpack_require__("./src/app/data/data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_editor_data_editor_component__ = __webpack_require__("./src/app/data/data-editor/data-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_editor_data_row_editor_dialog_component__ = __webpack_require__("./src/app/data/data-editor/data-row-editor-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_data_service__ = __webpack_require__("./src/app/data/shared/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DataModule = /** @class */ (function () {
    function DataModule() {
    }
    DataModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__data_routing_module__["a" /* DataRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["h" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatSortModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__data_component__["a" /* DataComponent */],
                __WEBPACK_IMPORTED_MODULE_6__data_editor_data_editor_component__["a" /* DataEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__data_editor_data_row_editor_dialog_component__["a" /* DataRowEditorDialogComponent */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__data_editor_data_row_editor_dialog_component__["a" /* DataRowEditorDialogComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__shared_data_service__["a" /* DataService */]],
        })
    ], DataModule);
    return DataModule;
}());



/***/ }),

/***/ "./src/app/data/shared/car.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Car; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_model__ = __webpack_require__("./src/app/core/model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car._map = new __WEBPACK_IMPORTED_MODULE_0__core_model__["c" /* BaseModelMap */]({
        id: '_id',
    });
    Car._filter = new __WEBPACK_IMPORTED_MODULE_0__core_model__["b" /* BaseModelFilter */]({
        id: function (object) { return object.$oid; },
    });
    return Car;
}(__WEBPACK_IMPORTED_MODULE_0__core_model__["a" /* BaseModel */]));



/***/ }),

/***/ "./src/app/data/shared/data.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_model__ = __webpack_require__("./src/app/core/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__car_model__ = __webpack_require__("./src/app/data/shared/car.model.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Data = /** @class */ (function (_super) {
    __extends(Data, _super);
    function Data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Data._map = new __WEBPACK_IMPORTED_MODULE_0__core_model__["c" /* BaseModelMap */]({
        id: '_id',
        title: 'title',
        cars: 'cars'
    });
    Data._filter = new __WEBPACK_IMPORTED_MODULE_0__core_model__["b" /* BaseModelFilter */]({
        id: function (object) { return object.$oid; },
        cars: function (array) {
            return array.map(function (item) { return new __WEBPACK_IMPORTED_MODULE_1__car_model__["a" /* Car */](item); });
        }
    });
    return Data;
}(__WEBPACK_IMPORTED_MODULE_0__core_model__["a" /* BaseModel */]));



/***/ }),

/***/ "./src/app/data/shared/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_data_model__ = __webpack_require__("./src/app/data/shared/data.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_local_storage_service__ = __webpack_require__("./src/app/shared/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var API_KEY = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].mLabApiKey;
var DataService = /** @class */ (function () {
    function DataService(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
        this.HEADERS = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    DataService.prototype.getList = function () {
        // return this.http.get(`https://api.mlab.com/api/1/databases/carborn/collections/cars/?f={"title": 1}&apiKey=${API_KEY}`)
        //   .map((res: Response) => res.json() as Data[])
        //   .catch((error: any) => Observable.throw(error || 'Server error'));
        return this.http.get("https://api.mlab.com/api/1/databases/carborn/collections/cars/?f={\"title\": 1}&apiKey=" + API_KEY)
            .map(function (res) { return res.json().map(function (item) { return (new __WEBPACK_IMPORTED_MODULE_3__shared_data_model__["a" /* Data */](item)); }); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["b" /* Observable */].throw(error || 'Server error'); });
    };
    DataService.prototype.get = function (id) {
        return this.http.get("https://api.mlab.com/api/1/databases/carborn/collections/cars/" + id + "/?apiKey=" + API_KEY)
            .map(function (res) { return new __WEBPACK_IMPORTED_MODULE_3__shared_data_model__["a" /* Data */](res.json()); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["b" /* Observable */].throw(error || 'Server error'); });
    };
    DataService.prototype.set = function (id, data) {
        return this.http.put("https://api.mlab.com/api/1/databases/carborn/collections/cars/" + id + "/?apiKey=" + API_KEY, JSON.stringify({ '$set': data }), { headers: this.HEADERS })
            .map(function (res) { return new __WEBPACK_IMPORTED_MODULE_3__shared_data_model__["a" /* Data */](res.json()); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["b" /* Observable */].throw(error || 'Server error'); });
    };
    DataService.prototype.setCars = function (id, cars) {
        return this.http.put("https://api.mlab.com/api/1/databases/carborn/collections/cars/" + id + "/?apiKey=" + API_KEY, JSON.stringify({ '$set': { 'cars': cars } }), { headers: this.HEADERS })
            .map(function (res) { return new __WEBPACK_IMPORTED_MODULE_3__shared_data_model__["a" /* Data */](res.json()); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["b" /* Observable */].throw(error || 'Server error'); });
    };
    DataService.prototype.getAllKeys = function (list) {
        var columns = [];
        list.map(function (item) {
            if (Array.isArray(item)) {
                return;
            }
            if (typeof item !== 'object') {
                return;
            }
            Object.keys(item).map(function (key) {
                if (columns.indexOf(key) < 0) {
                    columns.push(key);
                }
            });
        });
        return columns;
    };
    DataService.prototype.getStoredColumnsLocalStorageId = function (id) {
        return "carborn_admin_data_service.column." + id;
    };
    DataService.prototype.getStoredColumns = function (id) {
        var key = this.getStoredColumnsLocalStorageId(id);
        var columns = this.localStorageService.get(key);
        if (columns === null) {
            return [];
        }
        return columns;
    };
    DataService.prototype.setStoredColumns = function (id, columns) {
        var key = this.getStoredColumnsLocalStorageId(id);
        this.localStorageService.set(key, columns);
    };
    DataService.prototype.getDispayColumnKeys = function (columns) {
        var keys = [];
        if (columns.length > 0) {
            columns.map(function (column) {
                if (column.selected) {
                    keys.push(column.key);
                }
            });
        }
        return keys;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__shared_local_storage_service__["a" /* LocalStorageService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__("./src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */],
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"primary\" (click)=\"loginButtonDidSelect()\">G+ LOGIN</button>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.mat-elevation-z0 {\n  -webkit-box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z1 {\n  -webkit-box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z2 {\n  -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z3 {\n  -webkit-box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z4 {\n  -webkit-box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z5 {\n  -webkit-box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z6 {\n  -webkit-box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z7 {\n  -webkit-box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z8 {\n  -webkit-box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z9 {\n  -webkit-box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z10 {\n  -webkit-box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z11 {\n  -webkit-box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z12 {\n  -webkit-box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z13 {\n  -webkit-box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z14 {\n  -webkit-box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z15 {\n  -webkit-box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z16 {\n  -webkit-box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z17 {\n  -webkit-box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z18 {\n  -webkit-box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z19 {\n  -webkit-box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z20 {\n  -webkit-box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z21 {\n  -webkit-box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z22 {\n  -webkit-box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z23 {\n  -webkit-box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z24 {\n  -webkit-box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n          box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h5, .mat-typography h5 {\n  font: 400 11.62px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-h6, .mat-typography h6 {\n  font: 400 9.38px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button, .mat-flat-button,\n.mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n.mat-chip {\n  font-size: 13px;\n  line-height: 18px; }\n.mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n.mat-cell {\n  font-size: 14px; }\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-calendar-body {\n  font-size: 13px; }\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n.mat-form-field-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.33335333%; }\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n.mat-form-field-label {\n  top: 1.28125em; }\n.mat-form-field-underline {\n  bottom: 1.25em; }\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n.mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 400; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select-trigger {\n  height: 1.125em; }\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.mat-tooltip-handset {\n  font-size: 14px;\n  padding-top: 9px;\n  padding-bottom: 9px; }\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item, .mat-selection-list .mat-list-item {\n  font-size: 16px; }\n.mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line, .mat-selection-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-list-option, .mat-nav-list .mat-list-option, .mat-selection-list .mat-list-option {\n  font-size: 16px; }\n.mat-list .mat-list-option .mat-line, .mat-nav-list .mat-list-option .mat-line, .mat-selection-list .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader, .mat-selection-list .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item, .mat-selection-list[dense] .mat-list-item {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line, .mat-selection-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-list-option, .mat-nav-list[dense] .mat-list-option, .mat-selection-list[dense] .mat-list-option {\n  font-size: 12px; }\n.mat-list[dense] .mat-list-option .mat-line, .mat-nav-list[dense] .mat-list-option .mat-line, .mat-selection-list[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2), .mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader, .mat-selection-list[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n.mat-ripple {\n  overflow: hidden; }\n@media screen and (-ms-high-contrast: active) {\n    .mat-ripple {\n      display: none; } }\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  -webkit-transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-overlay-container:empty {\n    display: none; }\n.cdk-global-overlay-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 1000; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 1; }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.288); }\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #f44336; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #e53935; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n    color: #e53935; }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n.mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-pseudo-checkbox::after {\n    color: #fafafa; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #e53935; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #f44336; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #e53935; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  background: transparent; }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: rgba(244, 67, 54, 0.12); }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: rgba(229, 57, 53, 0.12); }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: rgba(229, 57, 53, 0.12); }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n    color: #f44336; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n    color: #e53935; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n    color: #e53935; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n.mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #f44336; }\n.mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #e53935; }\n.mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #e53935; }\n.mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-button.mat-primary .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.1); }\n.mat-button.mat-accent .mat-ripple-element {\n  background-color: rgba(229, 57, 53, 0.1); }\n.mat-button.mat-warn .mat-ripple-element {\n  background-color: rgba(229, 57, 53, 0.1); }\n.mat-flat-button {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-flat-button.mat-primary {\n    color: white; }\n.mat-flat-button.mat-accent {\n    color: white; }\n.mat-flat-button.mat-warn {\n    color: white; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-flat-button.mat-primary {\n    background-color: #f44336; }\n.mat-flat-button.mat-accent {\n    background-color: #e53935; }\n.mat-flat-button.mat-warn {\n    background-color: #e53935; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-flat-button.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-flat-button.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.2); }\n.mat-icon-button.mat-primary .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.2); }\n.mat-icon-button.mat-accent .mat-ripple-element {\n  background-color: rgba(229, 57, 53, 0.2); }\n.mat-icon-button.mat-warn .mat-ripple-element {\n  background-color: rgba(229, 57, 53, 0.2); }\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #f44336; }\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #e53935; }\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #e53935; }\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: #b0b0b0; }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(244, 67, 54, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(229, 57, 53, 0.26); }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: rgba(229, 57, 53, 0.26); }\n:host {\n  display: block;\n  position: relative;\n  height: 100%; }\nbutton {\n  left: 50%;\n  top: 50%;\n  margin: -25px 0 0 -64px;\n  width: 128px;\n  height: 50px; }\n.mat-raised-button {\n  font-weight: 100; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_login_service__ = __webpack_require__("./src/app/login/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_model__ = __webpack_require__("./src/app/shared/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(location, loginService, router) {
        var _this = this;
        this.location = location;
        this.loginService = loginService;
        this.router = router;
        this.code = null;
        this.getToken = function (code) {
            _this.loginService.getAccessToken(code).subscribe(function (res) {
                if (_this.parseAccessToken(res)) {
                    _this.getUserInfo();
                }
                else {
                    _this.code = null;
                    console.error('There is no access token for login with google+');
                }
            }, function (err) {
                _this.code = null;
                _this.router.navigate(['/login']);
            });
        };
        this.getUserInfo = function () {
            var accessToken = __WEBPACK_IMPORTED_MODULE_5__shared_user_model__["a" /* User */].shared.accessToken;
            if (accessToken != null && accessToken.length > 0) {
                _this.loginService.googleUser(accessToken).subscribe(function (res) {
                    __WEBPACK_IMPORTED_MODULE_5__shared_user_model__["a" /* User */].shared.updateUserInfo(res.id, res.name, res.email);
                }, function (err) {
                    return;
                });
            }
        };
        this.parseAccessToken = function (data) {
            if (typeof data.access_token === 'string') {
                if (typeof data.expires_in === 'number') {
                    __WEBPACK_IMPORTED_MODULE_5__shared_user_model__["a" /* User */].shared.updateAuthInfo(_this.code, data.access_token, data.expires_in, _this.getToken);
                }
                return true;
            }
            return false;
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var isLogin = __WEBPACK_IMPORTED_MODULE_5__shared_user_model__["a" /* User */].shared.isLogin;
        if (isLogin) {
        }
        else {
            this.parseUriCode();
        }
    };
    LoginComponent.prototype.parseUriCode = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* URLSearchParams */](this.location.path(true).split('?')[1]);
        var code = params.get('code');
        this.code = code;
        if (code) {
            __WEBPACK_IMPORTED_MODULE_5__shared_user_model__["a" /* User */].shared.loginStatus.subscribe(function (isLogin) {
                if (isLogin) {
                    _this.router.navigate(['/']);
                }
            });
            this.getToken(code);
        }
    };
    LoginComponent.prototype.loginButtonDidSelect = function () {
        this.loginService.navigateToGoogleLogin();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_4__shared_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_routing_module__ = __webpack_require__("./src/app/login/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_login_service__ = __webpack_require__("./src/app/login/shared/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__login_routing_module__["a" /* LoginRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_login_service__["a" /* LoginService */]],
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/shared/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CLIENT_ID = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].googleClientId;
var CLIENT_SECRET = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].googleClientSecret;
var REDIRECT_URI = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].googleRedirectUri;
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        console.log('REDIRECT_URI', REDIRECT_URI);
    }
    LoginService.prototype.navigateToGoogleLogin = function () {
        location.href = 'https://accounts.google.com/o/oauth2/v2/auth?state=state_parameter_passthrough_value&response_type=code&client_id=' + CLIENT_ID +
            '&redirect_uri=' + REDIRECT_URI + '&scope=email%20profile';
    };
    LoginService.prototype.getAccessToken = function (code) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
        body.set('code', decodeURIComponent(code));
        body.set('client_id', CLIENT_ID);
        body.set('client_secret', CLIENT_SECRET);
        body.set('redirect_uri', REDIRECT_URI);
        body.set('grant_type', 'authorization_code');
        return this.http.post('https://www.googleapis.com/oauth2/v4/token', body, options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["b" /* Observable */].throw(error || 'Server error'); });
    };
    LoginService.prototype.googleUser = function (accessToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Authorization': "Bearer " + accessToken,
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get('https://www.googleapis.com/userinfo/v2/me?fields=email%2Cid%2Cname', options)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["b" /* Observable */].throw(error || 'Server error'); });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/play/play-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play_component__ = __webpack_require__("./src/app/play/play.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__play_component__["a" /* PlayComponent */],
    }
];
var PlayRoutingModule = /** @class */ (function () {
    function PlayRoutingModule() {
    }
    PlayRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], PlayRoutingModule);
    return PlayRoutingModule;
}());



/***/ }),

/***/ "./src/app/play/play.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/play/play.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n    <!--\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"weight\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n    </ng-container>\n    -->\n\n      <ng-container matColumnDef=\"brand\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> brand </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.brand}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"display_name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> display_name </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.display_name}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"year\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> year </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\"> {{element.year}} </mat-cell>\n      </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>\n"

/***/ }),

/***/ "./src/app/play/play.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayComponent; });
/* unused harmony export Element */
/* unused harmony export Car */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayComponent = /** @class */ (function () {
    function PlayComponent() {
        // displayedColumns = ['position', 'name', 'weight', 'symbol'];
        // dataSource: MatTableDataSource<Element>
        this.displayedColumns = ['brand', 'display_name', 'year'];
    }
    PlayComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    PlayComponent.prototype.ngOnInit = function () {
        // this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatTableDataSource */](CARS);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatSort */])
    ], PlayComponent.prototype, "sort", void 0);
    PlayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-play',
            template: __webpack_require__("./src/app/play/play.component.html"),
            styles: [__webpack_require__("./src/app/play/play.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayComponent);
    return PlayComponent;
}());

var Element = /** @class */ (function () {
    function Element() {
    }
    return Element;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());

var CARS = [
    {
        "brand": "BMW",
        "display_name": "BMW M3",
        "year": "2014"
    },
    {
        "brand": "BMW",
        "display_name": "BMW M3",
        "year": "2015"
    },
    {
        "brand": "BMW",
        "display_name": "BMW 318 eda",
        "year": "2014"
    },
    {
        "brand": "BMW",
        "display_name": "BMW 318 eda",
        "year": "2016"
    }
];


/***/ }),

/***/ "./src/app/play/play.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayModule", function() { return PlayModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__play_routing_module__ = __webpack_require__("./src/app/play/play-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__play_component__ = __webpack_require__("./src/app/play/play.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PlayModule = /** @class */ (function () {
    function PlayModule() {
    }
    PlayModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__play_routing_module__["a" /* PlayRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatSortModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__play_component__["a" /* PlayComponent */],
            ],
        })
    ], PlayModule);
    return PlayModule;
}());



/***/ }),

/***/ "./src/app/shared/auth-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_model__ = __webpack_require__("./src/app/shared/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    Object.defineProperty(AuthGuard.prototype, "isLogged", {
        get: function () {
            // TODO: Develop about roogin or not
            return __WEBPACK_IMPORTED_MODULE_2__user_model__["a" /* User */].shared.isLogin;
        },
        enumerable: true,
        configurable: true
    });
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.isLogged) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuard.prototype.canLoad = function () {
        if (!this.isLogged) {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/gnb/gnb.component.html":
/***/ (function(module, exports) {

module.exports = "<h1><a href=\"/\" routerLink=\"/\">Carborn</a></h1>\n<ul *ngIf=\"!isLoginComponent\">\n    <li><a mat-button color=\"primary\" routerLink=\"/data\">Data</a></li>\n    <li *ngIf=\"isLogin\"><a mat-button color=\"primary\" (click)=\"logoutDidSelect()\">Logout</a></li>\n    <li *ngIf=\"!isLogin\"><a mat-button color=\"primary\" routerLink=\"/login\">Login</a></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/shared/gnb/gnb.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 60px;\n  background-color: #000;\n  line-height: 60px; }\n\nh1 {\n  padding: 0 10px;\n  font-size: 30px;\n  color: #fff; }\n\nh1 a {\n  color: #fff;\n  text-decoration: none;\n  font-weight: 100; }\n\nul {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding-left: 100px; }\n\nul > li {\n  display: inline-block; }\n\nul > li > a {\n  font-weight: 100; }\n"

/***/ }),

/***/ "./src/app/shared/gnb/gnb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GnbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_model__ = __webpack_require__("./src/app/shared/user.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GnbComponent = /** @class */ (function () {
    function GnbComponent(location, router) {
        var _this = this;
        this.location = location;
        this.router = router;
        this.isLogin = __WEBPACK_IMPORTED_MODULE_3__user_model__["a" /* User */].shared.isLogin;
        this.isLoginComponent = false;
        router.events.subscribe(function (event) {
            _this.isLoginComponent = window.location.pathname === '/login';
        });
    }
    GnbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoginComponent = window.location.pathname === '/login';
        __WEBPACK_IMPORTED_MODULE_3__user_model__["a" /* User */].shared.loginStatus.subscribe(function (isLogin) {
            _this.isLogin = isLogin;
            if (!_this.isLoginComponent && !isLogin) {
                _this.router.navigate(['/login']);
            }
        });
    };
    GnbComponent.prototype.logoutDidSelect = function () {
        __WEBPACK_IMPORTED_MODULE_3__user_model__["a" /* User */].shared.clean();
    };
    GnbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gnb',
            template: __webpack_require__("./src/app/shared/gnb/gnb.component.html"),
            styles: [__webpack_require__("./src/app/shared/gnb/gnb.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], GnbComponent);
    return GnbComponent;
}());



/***/ }),

/***/ "./src/app/shared/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.get = function (id, type) {
        if (type === void 0) { type = 'object'; }
        try {
            var value = JSON.parse(localStorage.getItem(id));
            if (typeof value === type) {
                return value;
            }
        }
        catch (e) { }
        return null;
    };
    LocalStorageService.prototype.set = function (id, value) {
        try {
            localStorage.setItem(id, JSON.stringify(value));
        }
        catch (e) { }
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gnb_gnb_component__ = __webpack_require__("./src/app/shared/gnb/gnb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__local_storage_service__ = __webpack_require__("./src/app/shared/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_service__ = __webpack_require__("./src/app/shared/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SharedModule = /** @class */ (function () {
    function SharedModule(injector) {
        SharedModule_1.injector = injector;
    }
    SharedModule_1 = SharedModule;
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__gnb_gnb_component__["a" /* GnbComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__local_storage_service__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__gnb_gnb_component__["a" /* GnbComponent */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Injector */]])
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "./src/app/shared/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_cookie__ = __webpack_require__("./src/app/util/cookie.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("./src/app/shared/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var User = /** @class */ (function () {
    function User() {
        this.dataObjectId = null;
        this._isLogin = __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.getItem('user_id') != null;
        this._isLoginBehavior = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* BehaviorSubject */](this.isLogin);
        this._tokenRefreshTimeout = -1;
        this.isAdmin = '';
        this.userService = __WEBPACK_IMPORTED_MODULE_3__shared_module__["a" /* SharedModule */].injector.get(__WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]);
        var tokenExpireDateString = __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.getItem('user_tokenExpireDate');
        if (tokenExpireDateString !== null && tokenExpireDateString.length > 0, !isNaN(Number(tokenExpireDateString))) {
            var tokenExpireDate = new Date(Number(tokenExpireDateString));
            if (new Date() > tokenExpireDate) {
                this.clean();
            }
        }
    }
    User_1 = User;
    Object.defineProperty(User, "shared", {
        get: function () {
            if (null === User_1._shared) {
                User_1._shared = new User_1();
            }
            return User_1._shared;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "isLogin", {
        get: function () {
            return this._isLogin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "loginStatus", {
        get: function () {
            return this._isLoginBehavior.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "id", {
        // private _id: string = null;
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.getItem('user_id');
            // return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "name", {
        // private _name: string = null;
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.getItem('user_name');
            // return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        // private _email: string = null;
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.getItem('user_email');
            // return this._email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "accessToken", {
        // private _accessToken: string = null;
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.getItem('user_accessToken');
            // return this._accessToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "code", {
        // private _code: string = null;
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.getItem('user_code');
            // return this._accessToken;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.updateAuthInfo = function (code, accessToken, expiresIn, refreshCallback) {
        var _this = this;
        var now = (new Date()).getTime();
        var expireAfter = Math.max(30, expiresIn - 30) * 1000;
        var expireDate = new Date(now + expireAfter);
        __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.setItem('user_accessToken', accessToken);
        // this._accessToken = accessToken;
        __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.setItem('user_code', code);
        __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.setItem('user_tokenExpireDate', expireDate.getTime().toString());
        // this._code = code;
        if (this._tokenRefreshTimeout >= 0) {
            clearTimeout(this._tokenRefreshTimeout);
        }
        this._tokenRefreshTimeout = setTimeout(function () {
            refreshCallback(_this.code);
        }, expireAfter);
    };
    User.prototype.updateUserInfo = function (userId, userName, userEmail) {
        if (userId === void 0) { userId = null; }
        if (userName === void 0) { userName = null; }
        if (userEmail === void 0) { userEmail = null; }
        var isChanged = this.id !== userId;
        __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.setItem('user_id', userId);
        // this._id = userId;
        __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.setItem('user_name', userName);
        // this._name = userName;
        __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.setItem('user_email', userEmail);
        // this._email = userEmail;
        this._isLogin = userId !== null;
        if (isChanged) {
            if (this._isLogin) {
                this.getIsAdmin();
            }
            this._isLoginBehavior.next(this._isLogin);
        }
    };
    User.prototype.getIsAdmin = function () {
        var _this = this;
        if (this.isAdmin === 'T' || this.isAdmin === 'F' || !this.isLogin) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["b" /* Observable */].create(function (observer) {
                observer.next(_this.isAdmin === 'T');
                observer.complete();
            });
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["b" /* Observable */].create(function (observer) {
            _this.userService.getUser(_this.id).subscribe(function (res) {
                var isAdmin = 'F';
                var ids = res.admin_ids;
                if (ids.length > 0) {
                    for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
                        var id = ids_1[_i];
                        if (id === _this.id) {
                            isAdmin = 'T';
                            break;
                        }
                    }
                }
                if (_this.isAdmin !== isAdmin) {
                    _this.isAdmin = isAdmin;
                }
                _this.dataObjectId = res.data_id;
                observer.next(_this.isAdmin === 'T');
                observer.complete();
            }, function (err) {
                console.error(err);
                _this.isAdmin = '';
                observer.next(false);
                observer.complete();
            });
        });
    };
    User.prototype.clean = function () {
        var isChanged = this._isLogin;
        __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.removeItem('user_id');
        __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.removeItem('user_name');
        __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.removeItem('user_email');
        __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.removeItem('user_accessToken');
        __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.removeItem('user_code');
        __WEBPACK_IMPORTED_MODULE_2__util_cookie__["a" /* Cookie */].shared.removeItem('user_tokenExpireDate');
        this._isLogin = false;
        if (isChanged) {
            this._isLoginBehavior.next(this._isLogin);
        }
    };
    User._shared = null;
    User = User_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], User);
    return User;
    var User_1;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var API_KEY = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].mLabApiKey;
var ADMIN_ID = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].mLabApiAdminObjectId;
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function (userId) {
        return this.http.get("https://api.mlab.com/api/1/databases/carborn/collections/env/" + ADMIN_ID + "?apiKey=" + API_KEY)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["b" /* Observable */].throw(error || 'Server error'); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/util/cookie.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cookie; });
var Cookie = /** @class */ (function () {
    function Cookie() {
    }
    Object.defineProperty(Cookie, "shared", {
        get: function () {
            if (null === Cookie._shared) {
                Cookie._shared = new Cookie();
            }
            return Cookie._shared;
        },
        enumerable: true,
        configurable: true
    });
    // behaviors: { string: BehaviorSubject<string> }[];
    //
    // constructor() {
    //     this.behaviors = [];
    // }
    //
    // cookieForKey(key: string): Observable<string> {
    //     const index = Object.keys(this.behaviors).indexOf(key);
    //     let behavior: BehaviorSubject<string>;
    //     if (index < 0) {
    //         const value = this.getItem(key);
    //         behavior = new BehaviorSubject<string>(value);
    //         this.behaviors[key] = behavior;
    //     } else {
    //         behavior = this.behaviors[key];
    //     }
    //     return behavior.asObservable();
    // }
    Cookie.prototype.getItem = function (key) {
        return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
    };
    Cookie.prototype.setItem = function (key, value, end, domain, path, secure) {
        if (end === void 0) { end = null; }
        if (domain === void 0) { domain = null; }
        if (path === void 0) { path = null; }
        if (secure === void 0) { secure = null; }
        if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
            return false;
        }
        var expires = '';
        if (end) {
            switch (end.constructor) {
                case Number:
                    expires = end === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + end;
                    break;
                case String:
                    expires = '; expires=' + end;
                    break;
                case Date:
                    expires = '; expires=' + end.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(key) + '=' + encodeURIComponent(value) +
            expires +
            (domain ? '; domain=' + domain : '') +
            (path ? '; path=' + path : '') +
            (secure ? '; secure' : '');
        return true;
    };
    Cookie.prototype.removeItem = function (key, domain, path) {
        if (domain === void 0) { domain = null; }
        if (path === void 0) { path = null; }
        if (!key || !this.hasItem(key)) {
            return false;
        }
        document.cookie = encodeURIComponent(key) + '=; expires = Thu, 01 Jan 1970 00:00:00 GMT' +
            (domain ? '; domain=' + domain : '') +
            (path ? '; path=' + path : '');
        return true;
    };
    Cookie.prototype.hasItem = function (key) {
        return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(key).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=')).test(document.cookie);
    };
    Cookie.prototype.keys = function () {
        var keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/);
        var index;
        for (index = 0; index < keys.length; ++index) {
            keys[index] = decodeURIComponent(keys[index]);
        }
        return keys;
    };
    Cookie._shared = null;
    return Cookie;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    mLabApiKey: 'RVBlmzNJ6hMYAruIrDZtDfhUaKGKbbvQ',
    mLabApiAdminObjectId: '5a168f0b734d1d3ed22d2509',
    googleClientId: '598923188772-mnusf73277ui7pq88o4lh2tpqkhml460.apps.googleusercontent.com',
    googleClientSecret: 'LeJR4jQbfvsazbFYk5L_-1Ui',
    googleRedirectUri: 'http://slows.me/login',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map