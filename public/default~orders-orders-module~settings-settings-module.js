(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~orders-orders-module~settings-settings-module"],{

/***/ "./src/app/settings/delivey&Tax/delivery-tax.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/settings/delivey&Tax/delivery-tax.component.ts ***!
  \****************************************************************/
/*! exports provided: ShippingMethodEnum, DeliveryTaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingMethodEnum", function() { return ShippingMethodEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryTaxComponent", function() { return DeliveryTaxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _setting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../setting.service */ "./src/app/settings/setting.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/util.service */ "./src/service/util.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm5/ng-select-ng-select.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/custom-loader/custom-loader.component */ "./src/app/shared/custom-loader/custom-loader.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");












function DeliveryTaxComponent_app_custom_loader_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-custom-loader");
} }
function DeliveryTaxComponent_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "INV_MIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DeliveryTaxComponent_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "INV_MIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DeliveryTaxComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 2, "INVALID_FREE_DEL"), "\u00A0", ctx_r7.deliveryTaxData.minimumOrderAmountToPlaceOrder, "");
} }
function DeliveryTaxComponent_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 2, "INVALID_FREE_AMOUNT"), "\u00A0", ctx_r8.deliveryTaxData.minimumOrderAmountToPlaceOrder, "");
} }
function DeliveryTaxComponent_div_48_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "INVALID_DELIVERY_CHARGE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DeliveryTaxComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DeliveryTaxComponent_div_48_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r18); var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r17.deliveryTaxData.fixedDeliveryCharges = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DeliveryTaxComponent_div_48_span_5_Template, 3, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 4, "DELIVERY_CHARGES"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("min", 0)("ngModel", ctx_r9.deliveryTaxData.fixedDeliveryCharges);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r9.deliveryTaxData.fixedDeliveryCharges < 0);
} }
function DeliveryTaxComponent_div_49_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "INVALID_DELIVERY_CHARGE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DeliveryTaxComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DeliveryTaxComponent_div_49_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r20.deliveryTaxData.deliveryChargePerKm = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DeliveryTaxComponent_div_49_span_5_Template, 3, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 4, "DELIVERY_CHARGES_PER_KM"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("min", 0)("ngModel", ctx_r10.deliveryTaxData.deliveryChargePerKm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r10.deliveryTaxData.deliveryChargePerKm < 0);
} }
function DeliveryTaxComponent_ng_option_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ng-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var shippingMethod_r22 = ctx.$implicit;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", ctx_r12.shippingMethodTypes[shippingMethod_r22.key]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 2, ctx_r12.shippingMethodTypes[shippingMethod_r22.key]), " ");
} }
function DeliveryTaxComponent_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "SELECT_SHIPPING_METHOD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DeliveryTaxComponent_span_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "INVALID_TAX");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DeliveryTaxComponent_span_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "SELECT_PAYMENT_METHOD"));
} }
var ShippingMethodEnum;
(function (ShippingMethodEnum) {
    ShippingMethodEnum["DELIVERY"] = "DELIVERY";
    ShippingMethodEnum["PICK_UP"] = "PICK_UP";
})(ShippingMethodEnum || (ShippingMethodEnum = {}));
var DeliveryTaxComponent = /** @class */ (function () {
    function DeliveryTaxComponent(utilService, settingsService) {
        this.utilService = utilService;
        this.settingsService = settingsService;
        this.isLoading = false;
        this.deliveryTaxData = {
            deliveryType: '',
            taxType: 'INCLUDED',
            taxAmount: 0,
            fixedDeliveryCharges: 0,
            deliveryChargePerKm: 0,
            location: { latitude: null, longitude: null },
            store: null,
            minOrderAmountForFree: null,
            minimumOrderAmountToPlaceOrder: null,
            taxName: null,
            deliveryCoverage: null,
            paymentMethod: [],
            shippingMethod: []
        };
        this.paymentOptions = [
            { title: 'COD', value: "COD" },
            { title: "STRIPE", value: "STRIPE" }
        ];
        this.shippingMethodTypes = ShippingMethodEnum; // contains list of shipping method tyes
        this.getDeliveryTaxInfo();
    }
    DeliveryTaxComponent.prototype.ngOnInit = function () { };
    // Get delivery tax info
    DeliveryTaxComponent.prototype.getDeliveryTaxInfo = function () {
        var _this = this;
        this.isLoading = true;
        this.settingsService.getDeliveryAndTaxInfo().subscribe(function (res) {
            _this.isLoading = false;
            _this.deliveryTaxData = res.response_data;
        }, function (error) { return _this.isLoading = false; });
    };
    // Update delivery tax info
    DeliveryTaxComponent.prototype.updateDeliveryAndTaxInfo = function () {
        var _this = this;
        this.isLoading = true;
        if (!this.deliveryTaxData.minOrderAmountForFree || this.deliveryTaxData.minOrderAmountForFree < 0) {
            this.deliveryTaxData.minOrderAmountForFree = 0;
        }
        this.deliveryTaxData.taxType = 'INCLUDED';
        this.settingsService.updateDeliveryTaxInformation(this.deliveryTaxData).subscribe(function (res) {
            _this.isLoading = false;
            _this.utilService.successMessage(res.response_data);
            _this.getDeliveryTaxInfo();
        }, function (error) { return _this.isLoading = false; });
    };
    DeliveryTaxComponent.??fac = function DeliveryTaxComponent_Factory(t) { return new (t || DeliveryTaxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_setting_service__WEBPACK_IMPORTED_MODULE_1__["SettingService"])); };
    DeliveryTaxComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DeliveryTaxComponent, selectors: [["app-delivery-tax-component"]], decls: 117, vars: 99, consts: [[1, "row", "text-left"], [1, "col-sm-12"], [1, "content-header", "text-center", "text-primary"], [4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-6"], [1, "card"], [1, "card-header", "pb-2"], [1, "card-content"], [1, "px-3"], [1, "form"], [3, "ngSubmit"], ["f", "ngForm"], [1, "form-body"], [1, "text-center"], [1, "form-group"], ["name", "deliveryType", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["disabled", ""], ["value", "FIXED"], ["value", "FLEXIBLE"], ["type", "number", "name", "minimumOrderAmountToPlaceOrder", "required", "", 1, "form-control", 3, "min", "ngModel", "ngModelChange"], ["class", "help-block", 4, "ngIf"], ["type", "number", "name", "minimumOrderAmount", 1, "form-control", 3, "min", "ngModel", "ngModelChange"], ["class", "form-group", 4, "ngIf"], ["type", "number", "name", "deliveryCoverage", "required", "", 1, "form-control", 3, "min", "ngModel", "ngModelChange"], ["required", "", 3, "placeholder", "ngModel", "name", "multiple", "ngModelChange"], ["shippingMethod", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "taxName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "name", "taxAmount", "required", "", 1, "form-control", 3, "min", "ngModel", "ngModelChange"], [1, "row", "form-group"], [1, "col-md-4"], ["type", "number", "name", "lat", "required", "", 1, "form-control", 3, "min", "ngModel", "ngModelChange"], ["type", "number", "name", "lng", "required", "", 1, "form-control", 3, "min", "ngModel", "ngModelChange"], ["name", "paymentMethod", 3, "items", "bindLabel", "bindValue", "ngModel", "multiple", "ngModelChange"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-raised", "btn-raised", "add-modules", "mr-2", 3, "disabled"], [1, "fa", "fa-check-square-o"], ["type", "button", "routerLink", "/dashboard", 1, "btn", "btn-raised", "btn-raised", "btn-warning", "mr-1"], [1, "ft-x"], [1, "help-block"], ["translate", "", 1, "text-danger"], [1, "text-danger"], [1, "text-info"], ["type", "number", "name", "fixedDeliveryCharge", "required", "", 1, "form-control", 3, "min", "ngModel", "ngModelChange"], ["type", "number", "name", "deliveryChargePerKilometre", "required", "", 1, "form-control", 3, "min", "ngModel", "ngModelChange"], [3, "value"]], template: function DeliveryTaxComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, DeliveryTaxComponent_app_custom_loader_5_Template, 1, 0, "app-custom-loader", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "form", 11, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function DeliveryTaxComponent_Template_form_ngSubmit_13_listener($event) { return ctx.updateDeliveryAndTaxInfo(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h4", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "select", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DeliveryTaxComponent_Template_select_ngModelChange_24_listener($event) { return ctx.deliveryTaxData.deliveryType = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](27, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "option", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "option", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](33, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DeliveryTaxComponent_Template_input_ngModelChange_38_listener($event) { return ctx.deliveryTaxData.minimumOrderAmountToPlaceOrder = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, DeliveryTaxComponent_span_39_Template, 3, 0, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DeliveryTaxComponent_Template_input_ngModelChange_44_listener($event) { return ctx.deliveryTaxData.minOrderAmountForFree = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, DeliveryTaxComponent_span_45_Template, 3, 0, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, DeliveryTaxComponent_span_46_Template, 4, 4, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, DeliveryTaxComponent_span_47_Template, 4, 4, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, DeliveryTaxComponent_div_48_Template, 6, 6, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, DeliveryTaxComponent_div_49_Template, 6, 6, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](53, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "input", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DeliveryTaxComponent_Template_input_ngModelChange_54_listener($event) { return ctx.deliveryTaxData.deliveryCoverage = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](58, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "ng-select", 25, 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DeliveryTaxComponent_Template_ng_select_ngModelChange_59_listener($event) { return ctx.deliveryTaxData.shippingMethod = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](61, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](62, DeliveryTaxComponent_ng_option_62_Template, 3, 4, "ng-option", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](63, "keyvalue");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](64, DeliveryTaxComponent_span_64_Template, 3, 0, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "h4", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](69, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](73, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DeliveryTaxComponent_Template_input_ngModelChange_74_listener($event) { return ctx.deliveryTaxData.taxName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](75, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](78, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DeliveryTaxComponent_Template_input_ngModelChange_79_listener($event) { return ctx.deliveryTaxData.taxAmount = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](80, DeliveryTaxComponent_span_80_Template, 3, 0, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](81, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "h4", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](83, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](85, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](86, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](87, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](88, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](90, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](91, "input", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DeliveryTaxComponent_Template_input_ngModelChange_91_listener($event) { return ctx.deliveryTaxData.location.latitude = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](92, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](93, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](95, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](96, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DeliveryTaxComponent_Template_input_ngModelChange_96_listener($event) { return ctx.deliveryTaxData.location.longitude = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](97, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](98, "h4", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](99, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](101, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](102, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](103, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](104);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](105, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](106, "ng-select", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function DeliveryTaxComponent_Template_ng_select_ngModelChange_106_listener($event) { return ctx.deliveryTaxData.paymentMethod = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](107, DeliveryTaxComponent_span_107_Template, 4, 3, "span", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](108, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](109, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](110, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](111);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](112, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](113, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](114, "i", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](115);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](116, "translate");
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
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](14);
            var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 55, "DELIVERY_AND_TAX_INFORMATION"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](19, 57, "DELIVERY_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](23, 59, "DELIVERY_TYPE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.deliveryTaxData.deliveryType);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](27, 61, "DELIVERY_TYPE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](30, 63, "FIXED"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](33, 65, "FLEXIBLE"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](37, 67, "MINIMUM_AMOUNT_TO_PLACE_ORDER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("min", 0)("ngModel", ctx.deliveryTaxData.minimumOrderAmountToPlaceOrder);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.deliveryTaxData.minimumOrderAmountToPlaceOrder < 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](43, 69, "MIN_ORDER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("min", 0)("ngModel", ctx.deliveryTaxData.minOrderAmountForFree);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.deliveryTaxData.minOrderAmountForFree < 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.deliveryTaxData.minOrderAmountForFree > 0 && ctx.deliveryTaxData.minOrderAmountForFree < ctx.deliveryTaxData.minimumOrderAmountToPlaceOrder);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.deliveryTaxData.minOrderAmountForFree === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.deliveryTaxData.deliveryType === "FIXED");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.deliveryTaxData.deliveryType === "FLEXIBLE");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](53, 71, "DELIVERY_COVERAGE"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("min", 0)("ngModel", ctx.deliveryTaxData.deliveryCoverage);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](58, 73, "SHIPPING_METHODS"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](61, 75, "SELECT_SHIPPING_METHOD"))("ngModel", ctx.deliveryTaxData.shippingMethod)("name", "shippingMethod")("multiple", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](63, 77, ctx.shippingMethodTypes));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r11 == null ? null : _r11.touched) && (_r11 == null ? null : _r11.errors == null ? null : _r11.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](69, 79, "TAX_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](73, 81, "TAX_NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.deliveryTaxData.taxName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](78, 83, "TAX_PERCENTAGE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("min", 0)("ngModel", ctx.deliveryTaxData.taxAmount);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.deliveryTaxData.taxAmount < 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](85, 85, "STORE_LOCATION_INFO"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](90, 87, "LATITUDE"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("min", 0)("ngModel", ctx.deliveryTaxData.location.latitude);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](95, 89, "LONGITUDE"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("min", 0)("ngModel", ctx.deliveryTaxData.location.longitude);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](101, 91, "PAYMENT_METHOD"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](105, 93, "SET-PAYMENT_METHOD"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("items", ctx.paymentOptions)("bindLabel", "title")("bindValue", "value")("ngModel", ctx.deliveryTaxData.paymentMethod)("multiple", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.deliveryTaxData.paymentMethod.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r4.invalid || ctx.deliveryTaxData.minOrderAmountForFree < 0 || ctx.deliveryTaxData.taxAmount < 0 || ctx.deliveryTaxData.deliveryChargePerKm < 0 || ctx.deliveryTaxData.fixedDeliveryCharges < 0 || !ctx.deliveryTaxData.minimumOrderAmountToPlaceOrder || ctx.deliveryTaxData.minimumOrderAmountToPlaceOrder < 0 || ctx.deliveryTaxData.minOrderAmountForFree > 0 && ctx.deliveryTaxData.minOrderAmountForFree < ctx.deliveryTaxData.minimumOrderAmountToPlaceOrder || ctx.deliveryTaxData.deliveryCoverage <= 0 || ctx.deliveryTaxData.paymentMethod.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](112, 95, "SUBMIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](116, 97, "CANCEL"), " ");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_7__["CustomLoaderComponent"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["??r"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL2RlbGl2ZXkmVGF4L2RlbGl2ZXJ5LXRheC5jb21wb25lbnQuc2NzcyJ9 */"] });
    return DeliveryTaxComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeliveryTaxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delivery-tax-component',
                templateUrl: './delivery-tax.component.html',
                styleUrls: ['./delivery-tax.component.scss']
            }]
    }], function () { return [{ type: _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }, { type: _setting_service__WEBPACK_IMPORTED_MODULE_1__["SettingService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~orders-orders-module~settings-settings-module.js.map