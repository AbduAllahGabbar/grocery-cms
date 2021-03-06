(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-list-notification-list-module"],{

/***/ "./src/app/notification-list/notification-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/notification-list/notification-list.component.ts ***!
  \******************************************************************/
/*! exports provided: NotificationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationListComponent", function() { return NotificationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.service */ "./src/app/notification-list/notification.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");










function NotificationListComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    var _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NotificationListComponent_tr_34_Template_button_click_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r122); var notification_r120 = ctx.$implicit; var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r121.viewOrder(notification_r120); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "em", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var notification_r120 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](notification_r120.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](notification_r120.orderID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](7, 3, notification_r120.createdAt));
} }
var _c0 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
var NotificationListComponent = /** @class */ (function () {
    function NotificationListComponent(notificationService, router) {
        this.notificationService = notificationService;
        this.router = router;
        this.notificationList = []; // contains list of notifications
        this.page = 1; // contains default page number
        this.limit = 25; // shows 25 records per page
        this.total = 0; // contains total number of records
        this.getNotificationList();
    }
    // get's notification list
    NotificationListComponent.prototype.getNotificationList = function () {
        var _this = this;
        this.notificationService.getNotificationList(this.page, this.limit).subscribe(function (res) {
            _this.notificationList = res.response_code = 200 ? res.response_data : undefined;
            _this.total = res.response_code = 200 ? res.total : undefined;
        });
    };
    // called when page number is changed
    NotificationListComponent.prototype.pageChanged = function (page) {
        this.page = page;
        this.getNotificationList();
    };
    NotificationListComponent.prototype.ngOnInit = function () {
    };
    NotificationListComponent.prototype.viewOrder = function (notify) {
        var _this = this;
        this.notificationService.readNotification(notify._id).subscribe(function () {
            _this.notificationService.emitNotificationEvent(true);
        });
        this.router.navigate(["/orders/view-order/", notify.orderId]);
    };
    NotificationListComponent.??fac = function NotificationListComponent_Factory(t) { return new (t || NotificationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    NotificationListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: NotificationListComponent, selectors: [["app-notification-list"]], decls: 37, vars: 23, consts: [[1, "row"], [1, "col", "text-primary"], ["id", "ng-tables"], [1, "row", "text-left"], [1, "col-12"], [1, "card"], [1, "card-content"], [1, "card-body"], ["id", "striped-light"], [1, "col-sm-12"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [3, "pageChange"], ["type", "button", 1, "btn", "btn-raised", "btn-secondary", 3, "click"], [1, "fa", "fa-eye"]], template: function NotificationListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "section", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "section", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "table", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](29, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, NotificationListComponent_tr_34_Template, 11, 5, "tr", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](35, "paginate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "pagination-controls", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function NotificationListComponent_Template_pagination_controls_pageChange_36_listener($event) { return ctx.pageChanged($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 6, "NOTIFICATIONS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](23, 8, "TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](26, 10, "ORDER_ID"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](29, 12, "NOTIFICATION_DATE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](32, 14, "VIEW"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](35, 16, ctx.notificationList, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](19, _c0, ctx.limit, ctx.page, ctx.total)));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi1saXN0L25vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudC5jc3MifQ== */"] });
    return NotificationListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NotificationListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification-list',
                templateUrl: './notification-list.component.html',
                styleUrls: ['./notification-list.component.css']
            }]
    }], function () { return [{ type: _notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/notification-list/notification-list.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/notification-list/notification-list.module.ts ***!
  \***************************************************************/
/*! exports provided: NotificationListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationListModule", function() { return NotificationListModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _notification_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notification-list.component */ "./src/app/notification-list/notification-list.component.ts");
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notification.service */ "./src/app/notification-list/notification.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _custom_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom-loader */ "./src/app/custom-loader.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");













var routes = [
    {
        path: "",
        component: _notification_list_component__WEBPACK_IMPORTED_MODULE_4__["NotificationListComponent"],
    },
];
var NotificationListModule = /** @class */ (function () {
    function NotificationListModule() {
    }
    NotificationListModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: NotificationListModule });
    NotificationListModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function NotificationListModule_Factory(t) { return new (t || NotificationListModule)(); }, providers: [_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useClass: _custom_loader__WEBPACK_IMPORTED_MODULE_7__["CustomLoader"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
    return NotificationListModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](NotificationListModule, { declarations: [_notification_list_component__WEBPACK_IMPORTED_MODULE_4__["NotificationListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](NotificationListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                            useClass: _custom_loader__WEBPACK_IMPORTED_MODULE_7__["CustomLoader"],
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                        }
                    }),
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"]
                ],
                declarations: [_notification_list_component__WEBPACK_IMPORTED_MODULE_4__["NotificationListComponent"]],
                providers: [_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=notification-list-notification-list-module.js.map