(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivery-boy-delivery-boy-module"],{

/***/ "./src/app/delivery-boy/add-edit-delivery-boy/add-edit-delivery-boy.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/delivery-boy/add-edit-delivery-boy/add-edit-delivery-boy.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AddEditDeliveryBoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditDeliveryBoyComponent", function() { return AddEditDeliveryBoyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/util.service */ "./src/service/util.service.ts");
/* harmony import */ var _delivery_boy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../delivery-boy.service */ "./src/app/delivery-boy/delivery-boy.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/custom-loader/custom-loader.component */ "./src/app/shared/custom-loader/custom-loader.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");












function AddEditDeliveryBoyComponent_app_custom_loader_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-custom-loader");
} }
function AddEditDeliveryBoyComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"));
} }
function AddEditDeliveryBoyComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"));
} }
function AddEditDeliveryBoyComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"));
} }
function AddEditDeliveryBoyComponent_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var dialCode_r396 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", dialCode_r396.dial_code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"](" ", dialCode_r396.dial_code, " (", dialCode_r396.code, ") (", dialCode_r396.name, ") ");
} }
function AddEditDeliveryBoyComponent_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"));
} }
function AddEditDeliveryBoyComponent_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"));
} }
function AddEditDeliveryBoyComponent_span_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"));
} }
var _c0 = function () { return ["/delivery-boy"]; };
var AddEditDeliveryBoyComponent = /** @class */ (function () {
    function AddEditDeliveryBoyComponent(router, dbService, utilService, activatedRoute) {
        var _this = this;
        this.router = router;
        this.dbService = dbService;
        this.utilService = utilService;
        this.activatedRoute = activatedRoute;
        this.isLoading = false;
        this.deliveryBoyId = null;
        this.deliveryBoy = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            mobileNumber: '',
            countryCode: ''
        };
        this.dialCodeList = []; // contains list of dial codes
        this.activatedRoute.params.subscribe(function (params) {
            _this.deliveryBoyId = params['id'];
            _this.getDialCodesList();
        });
    }
    AddEditDeliveryBoyComponent.prototype.ngOnInit = function () {
    };
    AddEditDeliveryBoyComponent.prototype.getDialCodesList = function () {
        var _this = this;
        this.dbService.getDialCodeList().subscribe(function (res) {
            _this.dialCodeList = res;
        });
    };
    // check operation type
    AddEditDeliveryBoyComponent.prototype.checkOperationType = function () {
        if (!this.deliveryBoyId)
            this.saveDeliveryBoy();
        else
            this.updateDeliveryBoy();
    };
    AddEditDeliveryBoyComponent.prototype.saveDeliveryBoy = function () {
        var _this = this;
        this.isLoading = true;
        this.dbService.save(this.deliveryBoy).subscribe(function (res) {
            _this.isLoading = false;
            _this.utilService.successMessage(res.response_data);
            _this.router.navigate(['/delivery-boy']);
        }, function (error) { return _this.isLoading = false; });
    };
    AddEditDeliveryBoyComponent.prototype.updateDeliveryBoy = function () {
    };
    AddEditDeliveryBoyComponent.??fac = function AddEditDeliveryBoyComponent_Factory(t) { return new (t || AddEditDeliveryBoyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_delivery_boy_service__WEBPACK_IMPORTED_MODULE_3__["DeliveryBoyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    AddEditDeliveryBoyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AddEditDeliveryBoyComponent, selectors: [["app-add-edit-delivery-boy"]], decls: 71, vars: 49, consts: [[1, "row", "text-left"], [1, "col-sm-12"], [1, "content-header", "text-center", "text-primary"], [4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-6"], [1, "card"], [1, "card-header", "pb-2"], [1, "card-content"], [1, "px-3"], [1, "form", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-body"], [1, "form-group"], ["type", "text", "id", "firstName", "name", "firstName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["class", "help-block", "style", "color: red;", 4, "ngIf"], ["type", "text", "id", "lastName", "name", "lastName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["type", "text", "id", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["name", "countryCode", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["countryCode", "ngModel"], ["disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "id", "mobileNumber", "name", "mobileNumber", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mobileNumber", "ngModel"], ["type", "password", "id", "password", "minlength", "5", "maxlength", "35", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-raised", "btn-raised", "add-modules", "mr-2", 3, "disabled"], [1, "fa", "fa-check-square-o"], ["type", "button", 1, "btn", "btn-raised", "btn-raised", "btn-warning", "mr-1", 3, "routerLink"], [1, "ft-x"], [1, "help-block", 2, "color", "red"], [3, "value"]], template: function AddEditDeliveryBoyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AddEditDeliveryBoyComponent_app_custom_loader_6_Template, 1, 0, "app-custom-loader", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "form", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AddEditDeliveryBoyComponent_Template_form_ngSubmit_13_listener($event) { return ctx.checkOperationType(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 14, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditDeliveryBoyComponent_Template_input_ngModelChange_20_listener($event) { return ctx.deliveryBoy.firstName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, AddEditDeliveryBoyComponent_span_22_Template, 4, 3, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "input", 17, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditDeliveryBoyComponent_Template_input_ngModelChange_27_listener($event) { return ctx.deliveryBoy.lastName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](29, AddEditDeliveryBoyComponent_span_29_Template, 4, 3, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "input", 19, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditDeliveryBoyComponent_Template_input_ngModelChange_34_listener($event) { return ctx.deliveryBoy.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, AddEditDeliveryBoyComponent_span_36_Template, 4, 3, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](40, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "select", 21, 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditDeliveryBoyComponent_Template_select_ngModelChange_41_listener($event) { return ctx.deliveryBoy.countryCode = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "option", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](45, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, AddEditDeliveryBoyComponent_option_46_Template, 2, 4, "option", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, AddEditDeliveryBoyComponent_span_47_Template, 4, 3, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](51, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "input", 25, 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditDeliveryBoyComponent_Template_input_ngModelChange_52_listener($event) { return ctx.deliveryBoy.mobileNumber = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, AddEditDeliveryBoyComponent_span_54_Template, 4, 3, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](58, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "input", 27, 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditDeliveryBoyComponent_Template_input_ngModelChange_59_listener($event) { return ctx.deliveryBoy.password = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](61, AddEditDeliveryBoyComponent_span_61_Template, 4, 3, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](64, "i", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](66, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](68, "i", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](70, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            var _r382 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](14);
            var _r383 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](21);
            var _r385 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](28);
            var _r387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](35);
            var _r389 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](42);
            var _r392 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](53);
            var _r394 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", !ctx.deliveryBoyId ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 26, "ADD_DELIVERY_BOY") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 28, "UPDATE_DELIVERY_BOY"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](19, 30, "FIRST_NAME"), "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.deliveryBoy.firstName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r383 == null ? null : _r383.touched) && (_r383 == null ? null : _r383.errors == null ? null : _r383.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](26, 32, "LAST_NAME"), "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.deliveryBoy.lastName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r385 == null ? null : _r385.touched) && (_r385 == null ? null : _r385.errors == null ? null : _r385.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](33, 34, "EMAIL"), "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.deliveryBoy.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r387 == null ? null : _r387.touched) && (_r387 == null ? null : _r387.errors == null ? null : _r387.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](40, 36, "COUNTRY_CODE"), "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.deliveryBoy.countryCode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](45, 38, "SELECT_COUNTRY_CODE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.dialCodeList);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r389 == null ? null : _r389.touched) && (_r389 == null ? null : _r389.errors == null ? null : _r389.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](51, 40, "MOBILE_NUMBER"), "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.deliveryBoy.mobileNumber);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r392 == null ? null : _r392.touched) && (_r392 == null ? null : _r392.errors == null ? null : _r392.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](58, 42, "PASSWORD"), "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.deliveryBoy.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r394 == null ? null : _r394.touched) && (_r394 == null ? null : _r394.errors == null ? null : _r394.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r382.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](66, 44, "SUBMIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](48, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](70, 46, "CANCEL"), " ");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_6__["CustomLoaderComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJ5LWJveS9hZGQtZWRpdC1kZWxpdmVyeS1ib3kvYWRkLWVkaXQtZGVsaXZlcnktYm95LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return AddEditDeliveryBoyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddEditDeliveryBoyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-delivery-boy',
                templateUrl: './add-edit-delivery-boy.component.html',
                styleUrls: ['./add-edit-delivery-boy.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _delivery_boy_service__WEBPACK_IMPORTED_MODULE_3__["DeliveryBoyService"] }, { type: _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/delivery-boy/delivery-boy-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/delivery-boy/delivery-boy-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DeliveryBoyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryBoyRoutingModule", function() { return DeliveryBoyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _delivery_boy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delivery-boy.component */ "./src/app/delivery-boy/delivery-boy.component.ts");
/* harmony import */ var _add_edit_delivery_boy_add_edit_delivery_boy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-delivery-boy/add-edit-delivery-boy.component */ "./src/app/delivery-boy/add-edit-delivery-boy/add-edit-delivery-boy.component.ts");






var routes = [
    {
        path: '',
        component: _delivery_boy_component__WEBPACK_IMPORTED_MODULE_2__["DeliveryBoyComponent"],
        data: {
            title: 'Delivery Boys'
        }
    },
    {
        path: 'add-delivery-boy',
        component: _add_edit_delivery_boy_add_edit_delivery_boy_component__WEBPACK_IMPORTED_MODULE_3__["AddEditDeliveryBoyComponent"],
        data: {
            title: 'Add Delivery Boy'
        }
    }
];
var DeliveryBoyRoutingModule = /** @class */ (function () {
    function DeliveryBoyRoutingModule() {
    }
    DeliveryBoyRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: DeliveryBoyRoutingModule });
    DeliveryBoyRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function DeliveryBoyRoutingModule_Factory(t) { return new (t || DeliveryBoyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return DeliveryBoyRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DeliveryBoyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeliveryBoyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/delivery-boy/delivery-boy.component.ts":
/*!********************************************************!*\
  !*** ./src/app/delivery-boy/delivery-boy.component.ts ***!
  \********************************************************/
/*! exports provided: DeliveryBoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryBoyComponent", function() { return DeliveryBoyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _delivery_boy_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery-boy.service */ "./src/app/delivery-boy/delivery-boy.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/util.service */ "./src/service/util.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/custom-loader/custom-loader.component */ "./src/app/shared/custom-loader/custom-loader.component.ts");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/__ivy_ngcc__/ui-switch.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
















var _c0 = ["searchDeliveryBoy"];
function DeliveryBoyComponent_app_custom_loader_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-custom-loader");
} }
var _c1 = function (a0) { return [a0]; };
function DeliveryBoyComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    var _r377 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "ui-switch", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DeliveryBoyComponent_tr_56_Template_ui_switch_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r377); var list_r374 = ctx.$implicit; return (list_r374["status"] = $event); })("change", function DeliveryBoyComponent_tr_56_Template_ui_switch_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r377); var list_r374 = ctx.$implicit; var ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r378.updateStatus($event, list_r374._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "em", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var list_r374 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](list_r374.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](list_r374.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](list_r374.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate3"]("", list_r374.countryCode, "", list_r374.countryCode ? " " : "", "", list_r374.mobileNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](list_r374.orderDelivered);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", list_r374["status"])("name", list_r374._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c1, "/orders/deliveryBoy/" + list_r374._id));
} }
function DeliveryBoyComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    var _r380 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "pagination-controls", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function DeliveryBoyComponent_div_58_Template_pagination_controls_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r380); var ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r379.pageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
var _c2 = function () { return ["/delivery-boy/add-delivery-boy"]; };
var _c3 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
var DeliveryBoyComponent = /** @class */ (function () {
    function DeliveryBoyComponent(utilService, deliveryBoyService, router) {
        this.utilService = utilService;
        this.deliveryBoyService = deliveryBoyService;
        this.router = router;
        this.isLoading = false;
        this.deliveryBoys = [];
        this.page = 1;
        this.limit = 25;
        this.total = 0;
        this.search = '';
        this.getAllDeliveryBoy();
    }
    DeliveryBoyComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.searchDeliveryBoy.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) { return event.target.value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (search) {
            _this.page = 1;
            if (search.length > 2) {
                _this.search = search;
                _this.getAllDeliveryBoy();
            }
            else if (search.length == 0) {
                _this.search = '';
                _this.getAllDeliveryBoy();
            }
            return;
        });
    };
    // Get all delivery boy
    DeliveryBoyComponent.prototype.getAllDeliveryBoy = function () {
        var _this = this;
        this.isLoading = true;
        this.deliveryBoyService.getAll(this.page, this.limit, this.search).subscribe(function (res) {
            _this.isLoading = false;
            _this.deliveryBoys = res.response_data;
            _this.total = res.total || 0;
        }, function (error) { return _this.isLoading = false; });
    };
    // Updates status
    DeliveryBoyComponent.prototype.updateStatus = function (event, id) {
        var _this = this;
        var body = { status: event };
        this.isLoading = true;
        this.deliveryBoyService.updateStatus(id, body).subscribe(function (res) {
            _this.isLoading = false;
            _this.utilService.successMessage(res.response_data);
        }, function (error) { return _this.isLoading = false; });
    };
    // Pagination
    DeliveryBoyComponent.prototype.pageChange = function (page) {
        this.page = page;
        this.getAllDeliveryBoy();
    };
    DeliveryBoyComponent.??fac = function DeliveryBoyComponent_Factory(t) { return new (t || DeliveryBoyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_delivery_boy_service__WEBPACK_IMPORTED_MODULE_1__["DeliveryBoyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
    DeliveryBoyComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DeliveryBoyComponent, selectors: [["app-delivery-boy-component"]], viewQuery: function DeliveryBoyComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.searchDeliveryBoy = _t.first);
        } }, decls: 59, vars: 42, consts: [[1, "row"], [1, "col", "text-primary"], [1, "col"], ["id", "multiple-buttons"], [1, "row", "text-left"], [1, "col-sm-12", "pull-right"], [1, "col-lg-12"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", "aria-label", "Add", 1, "btn", "btn-raised", "add-button", 3, "routerLink"], [1, "ft-plus"], [4, "ngIf"], ["id", "ng-tables"], [1, "col-12"], [1, "card"], [1, "card-content"], [1, "card-body"], [1, "form-group", "form-inline"], ["type", "text", "name", "searchDeliveryBoy", 1, "form-control", "searchinput", "filterSearch", 3, "placeholder"], ["searchDeliveryBoy", ""], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-between p-2", 4, "ngIf"], ["scope", "row"], ["scope", "row", 1, "text-center"], [3, "ngModel", "name", "ngModelChange", "change"], ["type", "button", 1, "btn", "btn-raised", "btn-secondary", 3, "routerLink"], ["_ngcontent-c10", "", 1, "fa", "fa-eye"], [1, "d-flex", "justify-content-between", "p-2"], [3, "pageChange"]], template: function DeliveryBoyComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "section", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](16, "translate");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, DeliveryBoyComponent_app_custom_loader_17_Template, 1, 0, "app-custom-loader", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "section", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "input", 18, 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](28, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "table", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "th", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "th", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "th", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "th", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](50, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "th", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](56, DeliveryBoyComponent_tr_56_Template, 16, 12, "tr", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](57, "paginate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](58, DeliveryBoyComponent_div_58_Template, 2, 0, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 14, "DELIVERY_BOYS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](37, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" \u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](16, 16, "ADD_NEW_DELIVERY_BOY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](28, 18, "SEARCH_PLACEHOLDER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](35, 20, "FIRST_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](38, 22, "LAST_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](41, 24, "EMAIL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](44, 26, "MOBILE_NUMBER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](47, 28, "ORDER_DELIVERED"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](50, 30, "STATUS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](54, 32, "VIEW"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](57, 34, ctx.deliveryBoys, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](38, _c3, ctx.limit, ctx.page, ctx.total)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.total > 0);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_8__["CustomLoaderComponent"], ngx_ui_switch__WEBPACK_IMPORTED_MODULE_9__["UiSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginationControlsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["PaginatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbGl2ZXJ5LWJveS9kZWxpdmVyeS1ib3kuY29tcG9uZW50LnNjc3MifQ== */"] });
    return DeliveryBoyComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeliveryBoyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delivery-boy-component',
                templateUrl: './delivery-boy.component.html',
                styleUrls: ['./delivery-boy.component.scss']
            }]
    }], function () { return [{ type: _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }, { type: _delivery_boy_service__WEBPACK_IMPORTED_MODULE_1__["DeliveryBoyService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, { searchDeliveryBoy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchDeliveryBoy', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/delivery-boy/delivery-boy.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/delivery-boy/delivery-boy.module.ts ***!
  \*****************************************************/
/*! exports provided: DeliveryBoyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryBoyModule", function() { return DeliveryBoyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _delivery_boy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery-boy.component */ "./src/app/delivery-boy/delivery-boy.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/__ivy_ngcc__/ui-switch.es5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _custom_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../custom-loader */ "./src/app/custom-loader.ts");
/* harmony import */ var _delivery_boy_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./delivery-boy.service */ "./src/app/delivery-boy/delivery-boy.service.ts");
/* harmony import */ var _add_edit_delivery_boy_add_edit_delivery_boy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-edit-delivery-boy/add-edit-delivery-boy.component */ "./src/app/delivery-boy/add-edit-delivery-boy/add-edit-delivery-boy.component.ts");
/* harmony import */ var _delivery_boy_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./delivery-boy-routing.module */ "./src/app/delivery-boy/delivery-boy-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
















var DeliveryBoyModule = /** @class */ (function () {
    function DeliveryBoyModule() {
    }
    DeliveryBoyModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: DeliveryBoyModule });
    DeliveryBoyModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function DeliveryBoyModule_Factory(t) { return new (t || DeliveryBoyModule)(); }, providers: [_delivery_boy_service__WEBPACK_IMPORTED_MODULE_10__["DeliveryBoyService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_6__["UiSwitchModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                        useClass: _custom_loader__WEBPACK_IMPORTED_MODULE_9__["CustomLoader"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
                _delivery_boy_routing_module__WEBPACK_IMPORTED_MODULE_12__["DeliveryBoyRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ]] });
    return DeliveryBoyModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](DeliveryBoyModule, { declarations: [_delivery_boy_component__WEBPACK_IMPORTED_MODULE_1__["DeliveryBoyComponent"], _add_edit_delivery_boy_add_edit_delivery_boy_component__WEBPACK_IMPORTED_MODULE_11__["AddEditDeliveryBoyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
        ngx_ui_switch__WEBPACK_IMPORTED_MODULE_6__["UiSwitchModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _delivery_boy_routing_module__WEBPACK_IMPORTED_MODULE_12__["DeliveryBoyRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeliveryBoyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                    ngx_ui_switch__WEBPACK_IMPORTED_MODULE_6__["UiSwitchModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateLoader"],
                            useClass: _custom_loader__WEBPACK_IMPORTED_MODULE_9__["CustomLoader"],
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                        }
                    }),
                    _delivery_boy_routing_module__WEBPACK_IMPORTED_MODULE_12__["DeliveryBoyRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
                ],
                declarations: [_delivery_boy_component__WEBPACK_IMPORTED_MODULE_1__["DeliveryBoyComponent"], _add_edit_delivery_boy_add_edit_delivery_boy_component__WEBPACK_IMPORTED_MODULE_11__["AddEditDeliveryBoyComponent"]],
                providers: [_delivery_boy_service__WEBPACK_IMPORTED_MODULE_10__["DeliveryBoyService"]],
                exports: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=delivery-boy-delivery-boy-module.js.map