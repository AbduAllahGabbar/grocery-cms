(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Notifications-notifications-module"],{

/***/ "./src/app/Notifications/notifications.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/util.service */ "./src/service/util.service.ts");
/* harmony import */ var _notification_list_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notification-list/notification.service */ "./src/app/notification-list/notification.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");









var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(utilService, notificationService) {
        this.utilService = utilService;
        this.notificationService = notificationService;
        this.notificationData = {
            title: '',
            body: ''
        };
    }
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    // sends notification data
    NotificationsComponent.prototype.sendNotification = function (form) {
        var _this = this;
        this.notificationService.sendNotification(this.notificationData).subscribe(function (res) {
            _this.utilService.successMessage(res.response_data);
            form.reset();
        });
    };
    NotificationsComponent.??fac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_notification_list_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"])); };
    NotificationsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications-component"]], decls: 34, vars: 10, consts: [[1, "row", "text-left"], [1, "col-sm-12"], ["translate", "", 1, "content-header", "text-center", "text-primary"], ["translate", "", 1, "content-header", "text-center", "info"], [1, "row", "justify-content-center"], [1, "col-md-6"], [1, "card"], [1, "card-header", "pb-2"], [1, "card-content"], [1, "px-3"], [1, "form"], [3, "ngSubmit"], ["notificationForm", "ngForm"], [1, "form-body"], [1, "form-group"], ["translate", ""], ["type", "text", "name", "title", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "desc", "required", "", 1, "form-control", 3, "rows", "ngModel", "ngModelChange"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-raised", "btn-raised", "add-modules", "mr-2", 3, "disabled"], [1, "fa", "fa-check-square-o"], ["type", "button", "routerLink", "/dashboard", 1, "btn", "btn-raised", "btn-raised", "btn-warning", "mr-1"], [1, "ft-x"]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
            var _r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "NOTIFICATIONS");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "NOTIFICATION_INFO");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "form", 11, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function NotificationsComponent_Template_form_ngSubmit_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r332); var _r331 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](14); return ctx.sendNotification(_r331); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "TITLE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NotificationsComponent_Template_input_ngModelChange_19_listener($event) { return ctx.notificationData.title = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "DESCRIPTION");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "textarea", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function NotificationsComponent_Template_textarea_ngModelChange_23_listener($event) { return ctx.notificationData.body = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "                                    ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            var _r331 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.notificationData.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("rows", 3)("ngModel", ctx.notificationData.body);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r331.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](29, 6, "SUBMIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](33, 8, "CANCEL"), " ");
        } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".info[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTm90aWZpY2F0aW9ucy9FOlxcZ3JvY2VyeTIwMjFcXGdyb2NlcnktY21zL3NyY1xcYXBwXFxOb3RpZmljYXRpb25zXFxub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Ob3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7QUNDcEIiLCJmaWxlIjoic3JjL2FwcC9Ob3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mbyB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn0iLCIuaW5mbyB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG4iXX0= */"] });
    return NotificationsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notifications-component',
                templateUrl: './notifications.component.html',
                styleUrls: ['./notifications.component.scss']
            }]
    }], function () { return [{ type: _service_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"] }, { type: _notification_list_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/Notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _notifications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notifications.component */ "./src/app/Notifications/notifications.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _custom_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom-loader */ "./src/app/custom-loader.ts");
/* harmony import */ var _notification_list_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../notification-list/notification.service */ "./src/app/notification-list/notification.service.ts");












var routes = [
    { path: '', component: _notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"] }
];
var NotificationsModule = /** @class */ (function () {
    function NotificationsModule() {
    }
    NotificationsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: NotificationsModule });
    NotificationsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function NotificationsModule_Factory(t) { return new (t || NotificationsModule)(); }, providers: [_notification_list_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useClass: _custom_loader__WEBPACK_IMPORTED_MODULE_7__["CustomLoader"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                    }
                })],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return NotificationsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](NotificationsModule, { declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotificationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                            useClass: _custom_loader__WEBPACK_IMPORTED_MODULE_7__["CustomLoader"],
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]]
                        }
                    })],
                declarations: [_notifications_component__WEBPACK_IMPORTED_MODULE_2__["NotificationsComponent"]],
                providers: [_notification_list_notification_service__WEBPACK_IMPORTED_MODULE_8__["NotificationService"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=Notifications-notifications-module.js.map