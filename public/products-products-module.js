(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/products/add-edit-product/add-edit-product.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/products/add-edit-product/add-edit-product.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddEditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditProductComponent", function() { return AddEditProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var _categories_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../categories/category.service */ "./src/app/categories/category.service.ts");
/* harmony import */ var _sub_category_sub_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sub-category/sub-category.service */ "./src/app/sub-category/sub-category.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/util.service */ "./src/service/util.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm5/ng-select-ng-select.js");
/* harmony import */ var _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/custom-loader/custom-loader.component */ "./src/app/shared/custom-loader/custom-loader.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");

















function AddEditProductComponent_app_custom_loader_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-custom-loader");
} }
function AddEditProductComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"), "");
} }
function AddEditProductComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"), "");
} }
function AddEditProductComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"), "");
} }
function AddEditProductComponent_ng_option_49_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "CATEGORY_DISABLED"), ") ");
} }
function AddEditProductComponent_ng_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ng-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AddEditProductComponent_ng_option_49_ng_container_2_Template, 3, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var category_r265 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", category_r265._id)("disabled", !category_r265.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](category_r265.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !category_r265.status);
} }
function AddEditProductComponent_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"), "");
} }
function AddEditProductComponent_div_51_ng_option_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" (", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](2, 1, "SUB_CATEGORY_DISABLED"), ") ");
} }
function AddEditProductComponent_div_51_ng_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ng-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AddEditProductComponent_div_51_ng_option_6_ng_container_2_Template, 3, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var subCategory_r270 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", subCategory_r270._id)("disabled", !subCategory_r270.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](subCategory_r270.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !subCategory_r270.status);
} }
function AddEditProductComponent_div_51_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"), "");
} }
function AddEditProductComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    var _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ng-select", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditProductComponent_div_51_Template_ng_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r273); var ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r272.product.subCategoryId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AddEditProductComponent_div_51_ng_option_6_Template, 3, 4, "ng-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, AddEditProductComponent_div_51_span_7_Template, 4, 3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var _r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](5);
    var ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 4, "SUB_CATEGORY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r262.product.subCategoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r262.subCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r267 == null ? null : _r267.touched) && (_r267 == null ? null : _r267.errors == null ? null : _r267.errors.required));
} }
function AddEditProductComponent_div_54_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "ENTER_CAPACITY"));
} }
function AddEditProductComponent_div_54_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "ENTER_PRICE"));
} }
function AddEditProductComponent_div_54_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "ENTER_STOCK"));
} }
function AddEditProductComponent_div_54_div_39_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "ENTER_AMOUNT"));
} }
var _c0 = function () { return { standalone: true }; };
function AddEditProductComponent_div_54_div_39_Template(rf, ctx) { if (rf & 1) {
    var _r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "input", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditProductComponent_div_54_div_39_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r291); var data_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; return data_r274.subScriptionAmount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](7, AddEditProductComponent_div_54_div_39_span_7_Template, 4, 3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var _r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](6);
    var data_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 4, "AMOUNT"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c0))("ngModel", data_r274.subScriptionAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r287 == null ? null : _r287.touched) && (_r287 == null ? null : _r287.errors == null ? null : _r287.errors.required));
} }
function AddEditProductComponent_div_54_div_41_Template(rf, ctx) { if (rf & 1) {
    var _r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddEditProductComponent_div_54_div_41_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r294); var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2); return ctx_r293.addVariant(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "em", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddEditProductComponent_div_54_div_42_Template(rf, ctx) { if (rf & 1) {
    var _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddEditProductComponent_div_54_div_42_Template_button_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r297); var i_r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().index; var ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r295.removeVariant(i_r275); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "em", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function AddEditProductComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    var _r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditProductComponent_div_54_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r299); var data_r274 = ctx.$implicit; return data_r274.unit = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, AddEditProductComponent_div_54_span_8_Template, 4, 3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "input", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditProductComponent_div_54_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r299); var data_r274 = ctx.$implicit; return data_r274.price = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, AddEditProductComponent_div_54_span_16_Template, 4, 3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 54, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditProductComponent_div_54_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r299); var data_r274 = ctx.$implicit; return data_r274.offerPercent = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditProductComponent_div_54_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r299); var data_r274 = ctx.$implicit; return data_r274.productStock = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, AddEditProductComponent_div_54_span_31_Template, 4, 3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "input", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditProductComponent_div_54_Template_input_ngModelChange_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r299); var data_r274 = ctx.$implicit; return data_r274.isSubScriptionAllowed = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](39, AddEditProductComponent_div_54_div_39_Template, 8, 7, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](41, AddEditProductComponent_div_54_div_41_Template, 3, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, AddEditProductComponent_div_54_div_42_Template, 4, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var data_r274 = ctx.$implicit;
    var i_r275 = ctx.index;
    var _r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](7);
    var _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](15);
    var _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("data-index", i_r275);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 26, "CAPACITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("name", "uni", i_r275, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](36, _c0))("ngModel", data_r274.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r276 == null ? null : _r276.touched) && (_r276 == null ? null : _r276.errors == null ? null : _r276.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](13, 28, "PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("name", "pric", i_r275, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](37, _c0))("ngModel", data_r274.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r278 == null ? null : _r278.touched) && (_r278 == null ? null : _r278.errors == null ? null : _r278.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](21, 30, "OFFER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("name", "offer", i_r275, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](38, _c0))("ngModel", data_r274.offerPercent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](28, 32, "STOCK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("name", "prodstock", i_r275, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](39, _c0))("ngModel", data_r274.productStock);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r281 == null ? null : _r281.touched) && (_r281 == null ? null : _r281.errors == null ? null : _r281.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](36, 34, "SUBSCRIBE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](40, _c0))("ngModel", data_r274.isSubScriptionAllowed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", data_r274.isSubScriptionAllowed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r275 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", i_r275 !== 0);
} }
function AddEditProductComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    var _r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddEditProductComponent_div_61_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r307); var i_r305 = ctx.index; var ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r306.removeProductImage(i_r305); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var image_r304 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", image_r304.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
var AddEditProductComponent = /** @class */ (function () {
    function AddEditProductComponent(router, utilService, productService, categoryService, subCategoryService, route) {
        var _this = this;
        this.router = router;
        this.utilService = utilService;
        this.productService = productService;
        this.categoryService = categoryService;
        this.subCategoryService = subCategoryService;
        this.route = route;
        this.isLoading = false;
        this.categories = [];
        this.subCategories = [];
        this.imageUrl = 'assets/img/emptyimg.png';
        this.product = {
            title: '',
            keyWords: '',
            description: '',
            imageUrl: '',
            categoryId: '',
            imageId: '',
            type: '',
            variant: [{
                    enable: true,
                    productStock: 0,
                    unit: '',
                    price: 0,
                    offerPercent: 0,
                    isSubScriptionAllowed: false,
                    subScriptionAmount: 0
                }],
            subCategoryId: null,
            filePath: '',
            sku: null,
            productImages: []
        };
        this.isDisabled = false;
        this.productId = null;
        this.route.params.subscribe(function (params) {
            _this.productId = params['id'];
            if (_this.productId)
                _this.getProductDetail();
        });
        this.getAllCategory();
    }
    AddEditProductComponent.prototype.ngOnInit = function () {
    };
    // Get all category
    AddEditProductComponent.prototype.getAllCategory = function () {
        var _this = this;
        this.isLoading = true;
        this.categoryService.getAllEnabled().subscribe(function (res) {
            _this.isLoading = false;
            _this.categories = res.response_data || [];
        }, function (error) { return _this.isLoading = false; });
    };
    // Get all sub category by categoryId
    AddEditProductComponent.prototype.getAllSubCategoryByCategoryId = function (categoryId) {
        var _this = this;
        this.isLoading = true;
        this.subCategoryService.getAllByCategoryId(categoryId).subscribe(function (res) {
            _this.isLoading = false;
            _this.subCategories = res.response_data || [];
        }, function (error) { return _this.isLoading = false; });
    };
    // Get product detail
    AddEditProductComponent.prototype.getProductDetail = function () {
        var _this = this;
        this.isLoading = true;
        this.productService.getById(this.productId).subscribe(function (res) {
            _this.isLoading = false;
            _this.product = res.response_data;
            _this.imageUrl = _this.product.imageUrl;
            if (!_this.product.productImages) {
                _this.product.productImages = [];
            }
            if (_this.product.productImages.length === 0) {
                _this.product.productImages.push({
                    imageId: _this.product.imageId,
                    imageUrl: _this.product.imageUrl,
                    filePath: _this.product.filePath
                });
            }
            if (_this.product.categoryId) {
                _this.getAllSubCategoryByCategoryId(_this.product.categoryId);
            }
        }, function (error) { return _this.isLoading = false; });
    };
    // Load sub categories by categoryId
    AddEditProductComponent.prototype.changeCategory = function () {
        this.product.subCategoryId = null;
        this.getAllSubCategoryByCategoryId(this.product.categoryId);
    };
    // Add to variant list
    AddEditProductComponent.prototype.addVariant = function () {
        var check = this.product.variant.find(function (v) { return v.unit === '' || v.price === null || v.price === 0
            || v.price < 0 || v.enable === null || v.productStock === null || v.productStock === 0 || v.productStock < 0; });
        if (check)
            return this.utilService.warningMessage("VARIANT_ERROR", true);
        this.product.variant.push({ enable: true, productStock: 0, unit: '', price: 0, offerPercent: 0, isSubScriptionAllowed: false,
            subScriptionAmount: 0 });
    };
    // remove from variant list
    AddEditProductComponent.prototype.removeVariant = function (removeIndex) {
        if (this.product.variant.length > 1) {
            this.product.variant.splice(removeIndex, 1);
        }
    };
    // Upload product image
    AddEditProductComponent.prototype.uploadProductImage = function (event) {
        var _this = this;
        this.isDisabled = true;
        var formData = new FormData();
        for (var file in event.target.files) {
            var fileItem = event.target.files[Number(file)];
            if (fileItem) {
                formData.append('file', fileItem);
            }
        }
        this.isDisabled = true;
        this.isLoading = true;
        this.utilService.uploadMultipleImage(formData).subscribe(function (res) {
            _this.isLoading = false;
            _this.isDisabled = false;
            var images = [];
            res.response_data.forEach(function (image) {
                var imageData = {
                    imageUrl: image.url,
                    imageId: image.key,
                    filePath: image.filePath
                };
                images.push(imageData);
            });
            _this.product.productImages = _this.product.productImages.concat(images);
            _this.utilService.successMessage("IMAGE_UPLOADED", true);
        }, function (error) {
            _this.isLoading = false;
            _this.isDisabled = false;
            _this.product.imageUrl = null;
        });
    };
    // opens image picker dialog
    AddEditProductComponent.prototype.openImagePickerWindow = function () {
        if (this.product.productImages.length < 8) {
            var imageInputElement = document.getElementById('product-img-inp');
            imageInputElement.click();
        }
        else {
            this.utilService.infoMessage("MAX_PRODUCT_IMAGES", true);
        }
    };
    // removes product images
    AddEditProductComponent.prototype.removeProductImage = function (index) {
        if (this.product.productImages.length > 1) {
            this.product.productImages.splice(index, 1);
        }
        else {
            this.utilService.infoMessage("MIN_PRODUCT_IMAGES", true);
        }
    };
    // check operation type
    AddEditProductComponent.prototype.checkOperationType = function () {
        if (this.product.productImages.length === 0)
            return this.utilService.warningMessage("IMAGE_REQUEST", true);
        var check = this.product.variant.find(function (v) { return v.unit === '' || v.price === null || v.price === 0
            || v.price < 0 || v.enable === null || v.productStock === null || v.productStock === 0 || v.productStock < 0; });
        if (check)
            return this.utilService.warningMessage("VARIANT_ERROR", true);
        if (!this.product.sku)
            this.product.sku = null;
        if (this.productId)
            this.updateProduct();
        else
            this.saveProduct();
    };
    // Save product
    AddEditProductComponent.prototype.saveProduct = function () {
        var _this = this;
        this.isLoading = true;
        this.productService.save(this.product).subscribe(function (res) {
            _this.isLoading = false;
            _this.utilService.successMessage(res.response_data);
            _this.router.navigate(['/products']);
        }, function (error) { return _this.isLoading = false; });
    };
    // Update product
    AddEditProductComponent.prototype.updateProduct = function () {
        var _this = this;
        this.isLoading = true;
        this.productService.update(this.productId, this.product).subscribe(function (res) {
            _this.isLoading = false;
            _this.utilService.successMessage(res.response_data);
            _this.router.navigate(['/products']);
        }, function (error) { return _this.isLoading = false; });
    };
    AddEditProductComponent.??fac = function AddEditProductComponent_Factory(t) { return new (t || AddEditProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_categories_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_sub_category_sub_category_service__WEBPACK_IMPORTED_MODULE_4__["SubCategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    AddEditProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AddEditProductComponent, selectors: [["app-add-edit-product"]], decls: 76, vars: 47, consts: [[1, "row", "text-left"], [1, "col-sm-12"], [1, "content-header", "text-center", "text-primary"], [4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-10"], [1, "card"], [1, "card-header", "pb-2"], [1, "card-content"], [1, "px-3"], [1, "form", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-body"], [1, "form-group"], ["for", "companyName"], ["type", "text", "id", "companyName", "name", "Enter Product Name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["class", "help-block", "style", "color:red", 4, "ngIf"], ["for", "keywordinput"], ["id", "keywordinput", "rows", "1", "name", "keyword", 1, "form-control", 3, "ngModel", "ngModelChange"], ["keyword", "ngModel"], ["for", "projectinput8"], ["id", "projectinput8", "rows", "5", "name", "desc", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["desc", "ngModel"], ["type", "text", "id", "skua", "name", "Enter sku Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["skua", "ngModel"], ["name", "category", "required", "", 3, "ngModel", "ngModelChange", "change"], ["cat", "ngModel"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["class", "form-group", 4, "ngIf"], ["class", "row form-label-group", 4, "ngFor", "ngForOf"], [1, "row", "form-label-group"], [1, "col-3"], ["for", "inputEmail"], [1, "preview-images-zone", "ml-2"], ["class", "preview-image", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-info", "button-upload", "ml-2", "mt-2", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-upload"], ["type", "file", "id", "product-img-inp", "accept", "image/*", "multiple", "", "name", "image", 1, "upload", "file-upload", 3, "change"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-raised", "btn-raised", "add-modules", "mr-2", 3, "disabled"], [1, "fa", "fa-check-square-o"], ["type", "button", "routerLink", "/products", 1, "btn", "btn-raised", "btn-raised", "btn-warning", "mr-1"], [1, "ft-x"], [1, "help-block", 2, "color", "red"], [3, "value", "disabled"], ["name", "subCategory", 3, "ngModel", "ngModelChange"], ["subcat", "ngModel"], [1, "col-2"], ["type", "text", "id", "sdasdasd", "required", "", 1, "form-control", 3, "ngModelOptions", "name", "ngModel", "ngModelChange"], ["uni", "ngModel"], ["type", "number", "id", "sadprice", "min", "0", "required", "", 1, "form-control", 3, "ngModelOptions", "name", "ngModel", "ngModelChange"], ["pric", "ngModel"], [1, "col-1"], ["type", "text", "id", "productoffer", 1, "form-control", 3, "ngModelOptions", "name", "ngModel", "ngModelChange"], ["type", "number", "id", "prfgfgdfice", "min", "0", "required", "", 1, "form-control", 3, "ngModelOptions", "name", "ngModel", "ngModelChange"], ["prodstock", "ngModel"], [1, "checkbox-inline"], ["type", "checkbox", "id", "isSubScriptionAllowed", "name", "isSubScriptionAllowed", 1, "form-control", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["isSubScriptionAllowed", "ngModel"], ["class", "col-2", 4, "ngIf"], ["class", "col-md-2 added-block", 4, "ngIf"], ["class", "col-1", 4, "ngIf"], ["for", "companyName", 1, "ml-2"], ["type", "number", "id", "subScriptionAmount", "name", "subScriptionAmount", "required", "", 1, "form-control", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["subScriptionAmount", "ngModel"], [1, "col-md-2", "added-block"], ["type", "button", 1, "btn", "btn-raised", "btn-info", "plus", 3, "click"], [1, "fa", "fa-plus"], ["type", "button", 1, "btn", "btn-raised", "btn-danger", "danger-button", 3, "click"], [1, "fa", "fa-trash"], [1, "preview-image"], ["data-no", "1", 1, "image-cancel", 3, "click"], [1, "image-zone"], ["id", "pro-img-1", 3, "src"], [1, "tools-edit-image"], ["href", "javascript:void(0)", "data-no", "1", 1, "btn", "btn-light", "btn-edit-image"]], template: function AddEditProductComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AddEditProductComponent_app_custom_loader_6_Template, 1, 0, "app-custom-loader", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "form", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AddEditProductComponent_Template_form_ngSubmit_13_listener($event) { return ctx.checkOperationType(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 15, 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditProductComponent_Template_input_ngModelChange_20_listener($event) { return ctx.product.title = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, AddEditProductComponent_span_22_Template, 4, 3, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "textarea", 19, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditProductComponent_Template_textarea_ngModelChange_27_listener($event) { return ctx.product.keyWords = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "textarea", 22, 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditProductComponent_Template_textarea_ngModelChange_33_listener($event) { return ctx.product.description = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, AddEditProductComponent_span_35_Template, 4, 3, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "input", 24, 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditProductComponent_Template_input_ngModelChange_40_listener($event) { return ctx.product.sku = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, AddEditProductComponent_span_42_Template, 4, 3, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](46, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "ng-select", 26, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditProductComponent_Template_ng_select_ngModelChange_47_listener($event) { return ctx.product.categoryId = $event; })("change", function AddEditProductComponent_Template_ng_select_change_47_listener($event) { return ctx.changeCategory(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, AddEditProductComponent_ng_option_49_Template, 3, 4, "ng-option", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](50, AddEditProductComponent_span_50_Template, 4, 3, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](51, AddEditProductComponent_div_51_Template, 8, 6, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](54, AddEditProductComponent_div_54_Template, 43, 41, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "label", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](59, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](61, AddEditProductComponent_div_61_Template, 8, 1, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AddEditProductComponent_Template_button_click_62_listener($event) { return ctx.openImagePickerWindow(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "i", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](65, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "input", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function AddEditProductComponent_Template_input_change_66_listener($event) { return ctx.uploadProductImage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "button", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](69, "i", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](71, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "button", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "i", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](75, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            var _r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](14);
            var _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](21);
            var _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](34);
            var _r257 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](41);
            var _r259 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", !ctx.productId ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 25, "ADD_NEW_PRODUCT") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 27, "UPDATE_PRODUCT"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](19, 29, "TITLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.product.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r252 == null ? null : _r252.touched) && (_r252 == null ? null : _r252.errors == null ? null : _r252.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](26, 31, "KEYWORDS"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.product.keyWords);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](32, 33, "DESCRIPTION"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.product.description);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r255 == null ? null : _r255.touched) && (_r255 == null ? null : _r255.errors == null ? null : _r255.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](39, 35, "SKU"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.product.sku);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r257 == null ? null : _r257.touched) && (_r257 == null ? null : _r257.errors == null ? null : _r257.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](46, 37, "SELECT_CATEGORY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.product.categoryId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.categories);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r259 == null ? null : _r259.touched) && (_r259 == null ? null : _r259.errors == null ? null : _r259.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.subCategories.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.product.variant);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](59, 39, "PRODUCT_IMAGES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.product.productImages);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](65, 41, "SELECT_FILE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r251.invalid || ctx.isDisabled || ctx.product.productImages.length === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](71, 43, "SUBMIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](75, 45, "CANCEL"), " ");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["NgSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_9__["CustomLoaderComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__["??r"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]], styles: [".radio[_ngcontent-%COMP%] {\n  width: 22px;\n  margin-top: 28px;\n}\n\n.doctors-img[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 150px;\n}\n\n.fa-plus[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.added-block[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin: 30px 0 0 14px;\n}\n\n.added-block[_ngcontent-%COMP%]   .plus[_ngcontent-%COMP%] {\n  margin: 30px 0px 0 46px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n\n\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n\n\n\n.checkmark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35px;\n  left: 0;\n  height: 25px;\n  width: 25px;\n  background-color: transparent;\n  border: 1px solid;\n  border-color: rgba(0, 0, 0, 0.4);\n  border-radius: 3px;\n}\n\n\n\n.container[_ngcontent-%COMP%]:hover   input[_ngcontent-%COMP%]    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n\n\n\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n}\n\n\n\n.checkmark[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n\n\n\n.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .checkmark[_ngcontent-%COMP%]:after {\n  display: block;\n}\n\n\n\n.container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after {\n  left: 9px;\n  top: 5px;\n  width: 5px;\n  height: 10px;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  transform: rotate(45deg);\n}\n\n.danger-button[_ngcontent-%COMP%] {\n  position: relative;\n  right: 43px;\n}\n\n.button-upload[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.file-upload[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  opacity: 0;\n}\n\n.preview-images-zone[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ddd;\n  min-height: 180px;\n  \n  padding: 5px 5px 0px 5px;\n  position: relative;\n  overflow: auto;\n}\n\n.preview-images-zone[_ngcontent-%COMP%]    > .preview-image[_ngcontent-%COMP%]:first-child {\n  height: 185px;\n  width: 185px;\n  position: relative;\n  margin-right: 5px;\n}\n\n.preview-images-zone[_ngcontent-%COMP%]    > .preview-image[_ngcontent-%COMP%] {\n  height: 185px;\n  width: 185px;\n  position: relative;\n  margin-right: 5px;\n  float: left;\n  margin-bottom: 5px;\n}\n\n.preview-images-zone[_ngcontent-%COMP%]    > .preview-image[_ngcontent-%COMP%]    > .image-zone[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.preview-images-zone[_ngcontent-%COMP%]    > .preview-image[_ngcontent-%COMP%]    > .image-zone[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.preview-images-zone[_ngcontent-%COMP%]    > .preview-image[_ngcontent-%COMP%]    > .tools-edit-image[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 100;\n  color: #fff;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  margin-bottom: 10px;\n  display: none;\n}\n\n.preview-images-zone[_ngcontent-%COMP%]    > .preview-image[_ngcontent-%COMP%]    > .image-cancel[_ngcontent-%COMP%] {\n  font-size: 18px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  font-weight: bold;\n  margin-right: 10px;\n  cursor: pointer;\n  z-index: 100;\n}\n\n.preview-image[_ngcontent-%COMP%]:hover    > .image-zone[_ngcontent-%COMP%] {\n  cursor: move;\n  opacity: .5;\n}\n\n.preview-image[_ngcontent-%COMP%]:hover    > .tools-edit-image[_ngcontent-%COMP%], .preview-image[_ngcontent-%COMP%]:hover    > .image-cancel[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.ui-sortable-helper[_ngcontent-%COMP%] {\n  width: 90px !important;\n  height: 90px !important;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvYWRkLWVkaXQtcHJvZHVjdC9FOlxcZ3JvY2VyeTIwMjFcXGdyb2NlcnktY21zL3NyY1xcYXBwXFxwcm9kdWN0c1xcYWRkLWVkaXQtcHJvZHVjdFxcYWRkLWVkaXQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvYWRkLWVkaXQtcHJvZHVjdC9hZGQtZWRpdC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQ0NsQjs7QURFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FDQ2Q7O0FERUE7RUFDRSxZQUFZO0FDQ2Q7O0FERUE7RUFFSSxxQkFBcUI7QUNBekI7O0FERkE7RUFNSSx1QkFBdUI7QUNBM0I7O0FESUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUNEbkI7O0FESUEsNENBQUE7O0FBcURBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0FDckRuQjs7QUR3REEsd0NBQUE7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtBQ3JEVjs7QUR3REEsNkJBQUE7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtBQ3JEcEI7O0FEd0RBLCtDQUFBOztBQUNBO0VBQ0Usc0JBQXNCO0FDckR4Qjs7QUR3REEsd0RBQUE7O0FBQ0E7RUFDRSx5QkFBeUI7QUNyRDNCOztBRHdEQSw2REFBQTs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtBQ3JEZjs7QUR3REEsb0NBQUE7O0FBQ0E7RUFDRSxjQUFjO0FDckRoQjs7QUR3REEsa0NBQUE7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUd6Qix3QkFBd0I7QUNyRDFCOztBRHdEQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FDckRiOztBRHdEQTtFQUNFLHVCQUF1QjtBQ3JEekI7O0FEd0RBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxVQUFVO0FDckRaOztBRHdEQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG1CQUFBO0VBQ0Esd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixjQUFjO0FDckRoQjs7QUR3REE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUNyRG5COztBRHdEQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0FDckRwQjs7QUR3REE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQ3JEZDs7QUR3REE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQ3JEZDs7QUR3REE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtBQ3JEZjs7QUR3REE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtBQ3JEZDs7QUR3REE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQ3JEYjs7QUR3REE7O0VBRUUsY0FBYztBQ3JEaEI7O0FEd0RBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQ3JEekI7O0FEd0RBO0VBQ0UsaUJBQWlCO0FDckRuQiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2FkZC1lZGl0LXByb2R1Y3QvYWRkLWVkaXQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yYWRpbyB7XG4gIHdpZHRoOiAyMnB4O1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuXG4uZG9jdG9ycy1pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5mYS1wbHVzIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYWRkZWQtYmxvY2sge1xuICAuYnRuIHtcbiAgICBtYXJnaW46IDMwcHggMCAwIDE0cHg7XG4gIH1cblxuICAucGx1cyB7XG4gICAgbWFyZ2luOiAzMHB4IDBweCAwIDQ2cHg7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IHJhZGlvIGJ1dHRvbiAqL1xuLy8gLmNvbnRhaW5lciBpbnB1dCB7XG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgb3BhY2l0eTogMDtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gfVxuXG4vLyAvKiBDcmVhdGUgYSBjdXN0b20gcmFkaW8gYnV0dG9uICovXG4vLyAuY2hlY2ttYXJrIHtcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICB0b3A6IDA7XG4vLyAgIGxlZnQ6IDA7XG4vLyAgIGhlaWdodDogMjVweDtcbi8vICAgd2lkdGg6IDI1cHg7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vIH1cblxuLy8gLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXG4vLyAuY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4vLyB9XG5cbi8vIC8qIFdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cbi8vIC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuLy8gfVxuXG4vLyAvKiBDcmVhdGUgdGhlIGluZGljYXRvciAodGhlIGRvdC9jaXJjbGUgLSBoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cbi8vIC5jaGVja21hcms6YWZ0ZXIge1xuLy8gICBjb250ZW50OiBcIlwiO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIGRpc3BsYXk6IG5vbmU7XG4vLyB9XG5cbi8vIC8qIFNob3cgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgd2hlbiBjaGVja2VkICovXG4vLyAuY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyB9XG5cbi8vIC8qIFN0eWxlIHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpICovXG4vLyAuY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xuLy8gICAgICB0b3A6IDlweDtcbi8vICAgICBsZWZ0OiA5cHg7XG4vLyAgICAgd2lkdGg6IDhweDtcbi8vICAgICBoZWlnaHQ6IDhweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyB9XG4vLyAuY2hlY2ttYXJre1xuLy8gICAgIG1hcmdpbi10b3A6IDM0cHg7O1xuLy8gfVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgY2hlY2tib3ggKi9cbi5jb250YWluZXIgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cblxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXG4uY2hlY2ttYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1cHg7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXG4uY29udGFpbmVyOmhvdmVyIGlucHV0fi5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbn1cblxuLyogQ3JlYXRlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yIChoaWRkZW4gd2hlbiBub3QgY2hlY2tlZCkgKi9cbi5jaGVja21hcms6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZH4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXG4uY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xuICBsZWZ0OiA5cHg7XG4gIHRvcDogNXB4O1xuICB3aWR0aDogNXB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogc29saWQgd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5kYW5nZXItYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogNDNweDtcbn1cblxuLmJ1dHRvbi11cGxvYWQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmZpbGUtdXBsb2FkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucHJldmlldy1pbWFnZXMtem9uZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBtaW4taGVpZ2h0OiAxODBweDtcbiAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgcGFkZGluZzogNXB4IDVweCAwcHggNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucHJldmlldy1pbWFnZXMtem9uZT4ucHJldmlldy1pbWFnZTpmaXJzdC1jaGlsZCB7XG4gIGhlaWdodDogMTg1cHg7XG4gIHdpZHRoOiAxODVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnByZXZpZXctaW1hZ2VzLXpvbmU+LnByZXZpZXctaW1hZ2Uge1xuICBoZWlnaHQ6IDE4NXB4O1xuICB3aWR0aDogMTg1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5wcmV2aWV3LWltYWdlcy16b25lPi5wcmV2aWV3LWltYWdlPi5pbWFnZS16b25lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByZXZpZXctaW1hZ2VzLXpvbmU+LnByZXZpZXctaW1hZ2U+LmltYWdlLXpvbmU+aW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByZXZpZXctaW1hZ2VzLXpvbmU+LnByZXZpZXctaW1hZ2U+LnRvb2xzLWVkaXQtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByZXZpZXctaW1hZ2VzLXpvbmU+LnByZXZpZXctaW1hZ2U+LmltYWdlLWNhbmNlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLnByZXZpZXctaW1hZ2U6aG92ZXI+LmltYWdlLXpvbmUge1xuICBjdXJzb3I6IG1vdmU7XG4gIG9wYWNpdHk6IC41O1xufVxuXG4ucHJldmlldy1pbWFnZTpob3Zlcj4udG9vbHMtZWRpdC1pbWFnZSxcbi5wcmV2aWV3LWltYWdlOmhvdmVyPi5pbWFnZS1jYW5jZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnVpLXNvcnRhYmxlLWhlbHBlciB7XG4gIHdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogOTBweCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59IiwiLnJhZGlvIHtcbiAgd2lkdGg6IDIycHg7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG5cbi5kb2N0b3JzLWltZyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLmZhLXBsdXMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5hZGRlZC1ibG9jayAuYnRuIHtcbiAgbWFyZ2luOiAzMHB4IDAgMCAxNHB4O1xufVxuXG4uYWRkZWQtYmxvY2sgLnBsdXMge1xuICBtYXJnaW46IDMwcHggMHB4IDAgNDZweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IHJhZGlvIGJ1dHRvbiAqL1xuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8qIEhpZGUgdGhlIGJyb3dzZXIncyBkZWZhdWx0IGNoZWNrYm94ICovXG4uY29udGFpbmVyIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG59XG5cbi8qIENyZWF0ZSBhIGN1c3RvbSBjaGVja2JveCAqL1xuLmNoZWNrbWFyayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNXB4O1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xuLmNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4vKiBXaGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cbi5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xufVxuXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuLmNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU2hvdyB0aGUgY2hlY2ttYXJrIHdoZW4gY2hlY2tlZCAqL1xuLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBTdHlsZSB0aGUgY2hlY2ttYXJrL2luZGljYXRvciAqL1xuLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgbGVmdDogOXB4O1xuICB0b3A6IDVweDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uZGFuZ2VyLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDQzcHg7XG59XG5cbi5idXR0b24tdXBsb2FkIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5maWxlLXVwbG9hZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnByZXZpZXctaW1hZ2VzLXpvbmUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgbWluLWhlaWdodDogMTgwcHg7XG4gIC8qIGRpc3BsYXk6IGZsZXg7ICovXG4gIHBhZGRpbmc6IDVweCA1cHggMHB4IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnByZXZpZXctaW1hZ2VzLXpvbmUgPiAucHJldmlldy1pbWFnZTpmaXJzdC1jaGlsZCB7XG4gIGhlaWdodDogMTg1cHg7XG4gIHdpZHRoOiAxODVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLnByZXZpZXctaW1hZ2VzLXpvbmUgPiAucHJldmlldy1pbWFnZSB7XG4gIGhlaWdodDogMTg1cHg7XG4gIHdpZHRoOiAxODVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnByZXZpZXctaW1hZ2VzLXpvbmUgPiAucHJldmlldy1pbWFnZSA+IC5pbWFnZS16b25lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByZXZpZXctaW1hZ2VzLXpvbmUgPiAucHJldmlldy1pbWFnZSA+IC5pbWFnZS16b25lID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnByZXZpZXctaW1hZ2VzLXpvbmUgPiAucHJldmlldy1pbWFnZSA+IC50b29scy1lZGl0LWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcmV2aWV3LWltYWdlcy16b25lID4gLnByZXZpZXctaW1hZ2UgPiAuaW1hZ2UtY2FuY2VsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwO1xufVxuXG4ucHJldmlldy1pbWFnZTpob3ZlciA+IC5pbWFnZS16b25lIHtcbiAgY3Vyc29yOiBtb3ZlO1xuICBvcGFjaXR5OiAuNTtcbn1cblxuLnByZXZpZXctaW1hZ2U6aG92ZXIgPiAudG9vbHMtZWRpdC1pbWFnZSxcbi5wcmV2aWV3LWltYWdlOmhvdmVyID4gLmltYWdlLWNhbmNlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udWktc29ydGFibGUtaGVscGVyIHtcbiAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA5MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cbiJdfQ== */"] });
    return AddEditProductComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddEditProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-product',
                templateUrl: './add-edit-product.component.html',
                styleUrls: ['./add-edit-product.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _categories_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }, { type: _sub_category_sub_category_service__WEBPACK_IMPORTED_MODULE_4__["SubCategoryService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/products/products-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-product/add-edit-product.component */ "./src/app/products/add-edit-product/add-edit-product.component.ts");
/* harmony import */ var _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-product/view-product.component */ "./src/app/products/view-product/view-product.component.ts");







var routes = [
    {
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"],
        data: {
            title: 'Products'
        }
    },
    {
        path: 'add-product',
        component: _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_3__["AddEditProductComponent"],
        data: {
            title: 'Add product'
        }
    },
    {
        path: 'edit-product/:id',
        component: _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_3__["AddEditProductComponent"],
        data: {
            title: 'Edit product'
        }
    },
    {
        path: 'view-product/:id',
        component: _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_4__["ViewProductComponent"],
        data: {
            title: 'View product'
        }
    }
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ProductRoutingModule });
    ProductRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ProductRoutingModule_Factory(t) { return new (t || ProductRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ProductRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ProductRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/crud.service */ "./src/service/crud.service.ts");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var _categories_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../categories/category.service */ "./src/app/categories/category.service.ts");
/* harmony import */ var _sub_category_sub_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sub-category/sub-category.service */ "./src/app/sub-category/sub-category.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/util.service */ "./src/service/util.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm5/ng-select-ng-select.js");
/* harmony import */ var _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/custom-loader/custom-loader.component */ "./src/app/shared/custom-loader/custom-loader.component.ts");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/__ivy_ngcc__/ui-switch.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
























var _c0 = ["searchProduct"];
function ProductComponent_app_custom_loader_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-custom-loader");
} }
function ProductComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    var _r235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ng-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductComponent_div_34_Template_ng_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r235); var ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r234.selectedSubCategory = $event; })("change", function ProductComponent_div_34_Template_ng_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r235); var ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r236.filterBySubCategory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx_r231.isLoading)("items", ctx_r231.subCategories)("bindLabel", "title")("bindValue", "_id")("ngModel", ctx_r231.selectedSubCategory)("searchable", true);
} }
function ProductComponent_tr_77_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    var _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ui-switch", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductComponent_tr_77_ng_container_13_Template_ui_switch_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r244); var list_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; var ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r242.updateStatus(list_r237._id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    var list_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", list_r237.status === true);
} }
function ProductComponent_tr_77_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](1, 1, "PRODUCT-DEAL-LINK"));
} }
var _c1 = function (a0) { return [a0]; };
function ProductComponent_tr_77_Template(rf, ctx) { if (rf & 1) {
    var _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ProductComponent_tr_77_ng_container_13_Template, 2, 1, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, ProductComponent_tr_77_ng_template_14_Template, 2, 3, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "em", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductComponent_tr_77_Template_button_click_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r247); var list_r237 = ctx.$implicit; var ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r246.deleteProduct(list_r237._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "em", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var list_r237 = ctx.$implicit;
    var _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](list_r237.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](list_r237.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", list_r237.subCategoryName || "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", list_r237.isDealAvailable ? list_r237.dealPercent + "%" : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](9, _c1, "/products/edit-product/" + list_r237._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !list_r237.isDealAvailable)("ngIfElse", _r240);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](11, _c1, "/products/view-product/" + list_r237._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", list_r237.productImages && list_r237.productImages.length > 0 ? list_r237.productImages[0].imageUrl : list_r237.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function ProductComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    var _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "pagination-controls", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function ProductComponent_div_79_Template_pagination_controls_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r249); var ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r248.pageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
var _c2 = function () { return ["/products/add-product"]; };
var _c3 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
var ProductComponent = /** @class */ (function () {
    function ProductComponent(api, utilService, productService, categoryService, subCategoryService) {
        this.api = api;
        this.utilService = utilService;
        this.productService = productService;
        this.categoryService = categoryService;
        this.subCategoryService = subCategoryService;
        this.products = [];
        this.page = 1;
        this.limit = 25;
        this.total = 0;
        this.categories = [];
        this.subCategories = [];
        this.selectedCategory = null;
        this.selectedSubCategory = null;
        this.isLoading = false;
        this.search = '';
        this.loadProduct();
        this.getAllCategory();
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["fromEvent"])(this.searchProduct.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (event) { return event.target.value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (search) {
            var _a;
            _this.page = 1;
            if (search.length > 2) {
                _this.search = search;
                _this.getAllProductBySearch();
            }
            else if (((_a = search) === null || _a === void 0 ? void 0 : _a.length) == 0) {
                _this.search = '';
                _this.getAllProduct();
            }
            return;
        });
    };
    // Get all product
    ProductComponent.prototype.loadProduct = function () {
        if (!this.selectedCategory && !this.selectedSubCategory) {
            this.getAllProduct();
        }
        else if (this.selectedCategory && !this.selectedSubCategory) {
            this.getAllProductByCategory();
        }
        else if (this.selectedCategory && this.selectedSubCategory) {
            this.getAllProductBySubCategory();
        }
    };
    ProductComponent.prototype.getAllCategory = function () {
        var _this = this;
        this.isLoading = true;
        this.categoryService.getAllEnabled().subscribe(function (res) {
            _this.isLoading = false;
            _this.categories = res.response_data || [];
        }, function (error) { return _this.isLoading = false; });
    };
    // Filter products by category and sub category
    ProductComponent.prototype.filterByCategory = function () {
        var _this = this;
        this.selectedSubCategory = null;
        this.subCategories = [];
        if (this.selectedCategory) {
            this.isLoading = true;
            this.subCategoryService.getAllByCategoryId(this.selectedCategory).subscribe(function (res) {
                _this.isLoading = false;
                _this.subCategories = res.response_data || [];
            }, function (error) { return _this.isLoading = false; });
        }
        this.loadProduct();
    };
    // Pagination
    ProductComponent.prototype.pageChange = function (page) {
        this.page = page;
        this.loadProduct();
    };
    // filters products by categories
    ProductComponent.prototype.filterBySubCategory = function () {
        if (!this.selectedSubCategory)
            this.subCategories = [];
        this.loadProduct();
    };
    // Get all product by category
    ProductComponent.prototype.getAllProductByCategory = function () {
        var _this = this;
        this.isLoading = true;
        this.productService.getAllByCategoryId(this.selectedCategory, this.page, this.limit).subscribe(function (res) {
            _this.isLoading = false;
            _this.products = res.response_data;
            _this.total = res.total;
        }, function (error) { return _this.isLoading = false; });
    };
    // Get all product by sub category
    ProductComponent.prototype.getAllProductBySubCategory = function () {
        var _this = this;
        this.isLoading = true;
        this.productService.getAllBySubCategoryId(this.selectedSubCategory, this.page, this.limit).subscribe(function (res) {
            _this.isLoading = false;
            _this.products = res.response_data;
            _this.total = res.total;
        }, function (error) { return _this.isLoading = false; });
    };
    // Get all product
    ProductComponent.prototype.getAllProduct = function () {
        var _this = this;
        this.isLoading = true;
        this.productService.getAll(this.page, this.limit).subscribe(function (res) {
            _this.isLoading = false;
            _this.products = res.response_data || [];
            _this.total = res.total || 0;
        }, function (error) { return _this.isLoading = false; });
    };
    // Update product status
    ProductComponent.prototype.updateStatus = function (id, status) {
        var _this = this;
        var body = { status: status };
        this.isLoading = true;
        this.productService.updateStatus(id, body).subscribe(function (res) {
            _this.isLoading = false;
            _this.utilService.successMessage(res.response_data);
            _this.loadProduct();
        }, function (error) { return _this.isLoading = false; });
    };
    // Import products
    ProductComponent.prototype.importProduct = function (event) {
        var _this = this;
        var formData = new FormData();
        formData.append('file', event.target.files[0]);
        this.productService.import(formData).subscribe(function (res) {
            _this.utilService.successMessage(res.response_data);
        });
    };
    // Export products
    ProductComponent.prototype.exportProduct = function () {
        var _this = this;
        this.isLoading = true;
        this.productService.export().subscribe(function (res) {
            _this.isLoading = false;
            _this.utilService.successMessage("REPORT_REQUEST", true);
            _this.api.setProductExportRequest(true);
        }, function (error) { return _this.isLoading = false; });
    };
    // Download base template for import
    ProductComponent.prototype.downloadBaseTemplate = function () {
        this.productService.getImportTemplate().subscribe(function (res) {
            window.open(res.response_data.url, 'blank');
        });
    };
    // opens file picker input
    ProductComponent.prototype.openFilePickerInput = function () {
        var element = document.getElementById('file-input');
        if (element) {
            element.click();
        }
    };
    // Delete product
    ProductComponent.prototype.deleteProduct = function (productId) {
        var _this = this;
        if (confirm(this.utilService.getAlertField())) {
            this.isLoading = true;
            this.productService.delete(productId).subscribe(function (res) {
                _this.isLoading = false;
                _this.utilService.successMessage(res.response_data);
                _this.loadProduct();
            }, function (error) { return _this.isLoading = false; });
        }
    };
    //get all product By Search
    ProductComponent.prototype.getAllProductBySearch = function () {
        var _this = this;
        this.productService.getPOSProductInfoBySearch(this.search, this.page, this.limit).subscribe(function (res) {
            _this.products = (res != null) && (res.response_code === 200) ? res.response_data : [];
            _this.total = (res ? res.total : 0) || 0;
        });
    };
    ProductComponent.??fac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_categories_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_sub_category_sub_category_service__WEBPACK_IMPORTED_MODULE_5__["SubCategoryService"])); };
    ProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ProductComponent, selectors: [["app-products"]], viewQuery: function ProductComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.searchProduct = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]])], decls: 80, vars: 64, consts: [[1, "row"], [1, "col", "text-primary"], [1, "col"], ["id", "multiple-buttons"], [1, "row", "text-left"], [1, "col-sm-12", "pull-right"], [1, "col-lg-12"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", "aria-label", "Add", 1, "btn", "btn-raised", "add-button", 3, "routerLink"], [1, "ft-plus"], [4, "ngIf"], ["id", "ng-tables"], [1, "col-12"], [1, "card"], [1, "card-content"], [1, "card-body"], [1, "form-group", "form-inline"], ["type", "text", "name", "searchProduct", 1, "form-control", "searchinput", "filterSearch", 3, "placeholder"], ["searchProduct", ""], [1, "col-md-3"], ["name", "category", 1, "mt-2", 3, "disabled", "items", "bindLabel", "bindValue", "ngModel", "searchable", "ngModelChange", "change"], ["class", "col-md-3", 4, "ngIf"], [1, "btn", "btn-outline-dark", "mt-2", "ml-3", 3, "click"], [1, "btn", "btn-outline-dark", "mt-2", "ml-2", 3, "click"], ["type", "file", "accept", ".csv,.xlsx", "id", "file-input", 2, "display", "none", 3, "change"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-between p-2", 4, "ngIf"], ["name", "subCategory", 1, "mt-2", 3, "disabled", "items", "bindLabel", "bindValue", "ngModel", "searchable", "ngModelChange", "change"], ["type", "button", "aria-label", "Edit", 1, "btn", "btn-raised", "btn-success", 3, "routerLink"], [1, "ft-edit-2"], [4, "ngIf", "ngIfElse"], ["dealLinked", ""], ["type", "button", 1, "btn", "btn-raised", "btn-secondary", 3, "routerLink"], [1, "fa", "fa-eye"], [2, "width", "50px", 3, "src"], ["type", "button", 1, "btn", "btn-raised", "btn-danger", 3, "click"], [1, "fa", "fa-trash"], [3, "checked", "change"], [1, "fa", "fa-info", 3, "ngbTooltip"], [1, "d-flex", "justify-content-between", "p-2"], [3, "pageChange"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, ProductComponent_app_custom_loader_17_Template, 1, 0, "app-custom-loader", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "section", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "\u00A0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 18, 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](30, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "ng-select", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function ProductComponent_Template_ng_select_ngModelChange_33_listener($event) { return ctx.selectedCategory = $event; })("change", function ProductComponent_Template_ng_select_change_33_listener($event) { return ctx.filterByCategory(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](34, ProductComponent_div_34_Template, 2, 6, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "button", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductComponent_Template_button_click_35_listener($event) { return ctx.exportProduct(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductComponent_Template_button_click_38_listener($event) { return ctx.openFilePickerInput(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](40, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function ProductComponent_Template_input_change_41_listener($event) { return ctx.importProduct($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "button", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ProductComponent_Template_button_click_42_listener($event) { return ctx.downloadBaseTemplate(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "table", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](51, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](57, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](60, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](63, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](66, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](69, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](72, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](73, "th", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](75, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](77, ProductComponent_tr_77_Template, 24, 13, "tr", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](78, "paginate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](79, ProductComponent_div_79_Template, 2, 0, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 26, "PRODUCTS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](59, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" \u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](16, 28, "ADD_NEW_PRODUCT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](30, 30, "SEARCH_PLACEHOLDER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", ctx.isLoading)("items", ctx.categories)("bindLabel", "title")("bindValue", "_id")("ngModel", ctx.selectedCategory)("searchable", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.subCategories.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](37, 32, "EXPORT_PRODUCT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](40, 34, "IMPORT_PRODUCT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](44, 36, "BASE_TEMPLATE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](51, 38, "NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](54, 40, "CATEGORY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](57, 42, "SUB_CATEGORY"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](60, 44, "DEAL_OFFER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](63, 46, "EDIT"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](66, 48, "ENABLE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](69, 50, "VIEW"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](72, 52, "IMAGE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](75, 54, "DELETE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](78, 56, ctx.products, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](60, _c3, ctx.limit, ctx.page, ctx.total)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.total > 0);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgForm"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_12__["CustomLoaderComponent"], ngx_ui_switch__WEBPACK_IMPORTED_MODULE_13__["UiSwitchComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbTooltip"], ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginationControlsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_15__["PaginatePipe"]], styles: [".custom-switch[_ngcontent-%COMP%] {\n  padding-left: 2.25rem;\n  padding-bottom: 1rem;\n}\n\n.custom-control-label[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-left: 2rem;\n  padding-bottom: 0.1rem;\n}\n\n.custom-switch[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before {\n  left: -2.25rem;\n  height: 2rem;\n  width: 3.5rem;\n  pointer-events: all;\n  border-radius: 1rem;\n}\n\n.custom-switch[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::after {\n  top: calc(0.25rem + 2px);\n  left: calc(-2.25rem + 2px);\n  width: calc( 2rem - 4px);\n  height: calc( 2rem - 4px);\n  background-color: #adb5bd;\n  border-radius: 2rem;\n  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-switch[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::after {\n    transition: none;\n  }\n}\n\n.custom-switch[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::after {\n  background-color: #fff;\n  transform: translateX(1.5rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvRTpcXGdyb2NlcnkyMDIxXFxncm9jZXJ5LWNtcy9zcmNcXGFwcFxccHJvZHVjdHNcXHByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7QUNDdEI7O0FERUE7RUFFRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQ0F4Qjs7QURHQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUNBckI7O0FER0E7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHdCQUVDO0VBQ0QseUJBRUM7RUFDRCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBR25CLHlJQUM4RDtBQ0xoRTs7QURVQTtFQUNFO0lBQ0UsZ0JBQWdCO0VDUGxCO0FBQ0Y7O0FEVUE7RUFDRSxzQkFBc0I7RUFFdEIsNkJBQTZCO0FDUC9CIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXN3aXRjaCB7XG4gIHBhZGRpbmctbGVmdDogMi4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07IC8vIGFkZGVkIGZvciBwb3NpdGlvbmluZ1xufVxuXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xuICAvLyBhZGRlZCBmb3IgYWxpZ25tZW50IHdpdGggdGhlIHN3aXRjaFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjFyZW07XG59XG5cbi5jdXN0b20tc3dpdGNoIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3JlIHtcbiAgbGVmdDogLTIuMjVyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDMuNXJlbTsgLy8gaXQgd2FzIDEuNzVyZW0gYmVmb3JlLiBTbGlkaW5nIHdheSBpcyBsb25nZXIgdGhhbiBiZWZvcmUuXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5jdXN0b20tc3dpdGNoIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICB0b3A6IGNhbGMoMC4yNXJlbSArIDJweCk7XG4gIGxlZnQ6IGNhbGMoLTIuMjVyZW0gKyAycHgpO1xuICB3aWR0aDogY2FsYyhcbiAgICAycmVtIC0gNHB4XG4gICk7IC8vIGl0IHdhcyBjYWxjKDFyZW0gLSA0cHgpIGJlZm9yZS4gT3ZhbCBpcyBiaWdnZXIgdGhhbiBiZWZvcmUuXG4gIGhlaWdodDogY2FsYyhcbiAgICAycmVtIC0gNHB4XG4gICk7IC8vIGl0IHdhcyBjYWxjKDFyZW0gLSA0cHgpIGJlZm9yZS4gT3ZhbCBpcyBiaWdnZXIgdGhhbiBiZWZvcmUuXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07IC8vICAgaXQgd2FzIDAuNXJlbSBiZWZvcmUuIE92YWwgaXMgYmlnZ2VyIHRoYW4gYmVmb3JlLlxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcbiAgICBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuY3VzdG9tLXN3aXRjaCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG59XG5cbi5jdXN0b20tc3dpdGNoIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNXJlbSk7IC8vdHJhbnNsYXRlWCgwLjc1cmVtKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNXJlbSk7IC8vdHJhbnNsYXRlWCgwLjc1cmVtKTtcbn1cbiIsIi5jdXN0b20tc3dpdGNoIHtcbiAgcGFkZGluZy1sZWZ0OiAyLjI1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbn1cblxuLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xufVxuXG4uY3VzdG9tLXN3aXRjaCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gIGxlZnQ6IC0yLjI1cmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAzLjVyZW07XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5jdXN0b20tc3dpdGNoIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICB0b3A6IGNhbGMoMC4yNXJlbSArIDJweCk7XG4gIGxlZnQ6IGNhbGMoLTIuMjVyZW0gKyAycHgpO1xuICB3aWR0aDogY2FsYyggMnJlbSAtIDRweCk7XG4gIGhlaWdodDogY2FsYyggMnJlbSAtIDRweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZGI1YmQ7XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5jdXN0b20tc3dpdGNoIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cbn1cblxuLmN1c3RvbS1zd2l0Y2ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS41cmVtKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNXJlbSk7XG59XG4iXX0= */"] });
    return ProductComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]]
            }]
    }], function () { return [{ type: _service_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }, { type: _service_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _categories_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }, { type: _sub_category_sub_category_service__WEBPACK_IMPORTED_MODULE_5__["SubCategoryService"] }]; }, { searchProduct: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchProduct', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/products/products.module.ts":
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/__ivy_ngcc__/ui-switch.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/__ivy_ngcc__/fesm5/ng-chartist.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/products/products-routing.module.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _custom_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../custom-loader */ "./src/app/custom-loader.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm5/ng-select-ng-select.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var _categories_category_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../categories/category.service */ "./src/app/categories/category.service.ts");
/* harmony import */ var _sub_category_sub_category_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../sub-category/sub-category.service */ "./src/app/sub-category/sub-category.service.ts");
/* harmony import */ var _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-edit-product/add-edit-product.component */ "./src/app/products/add-edit-product/add-edit-product.component.ts");
/* harmony import */ var _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view-product/view-product.component */ "./src/app/products/view-product/view-product.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






















var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: ProductModule });
    ProductModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function ProductModule_Factory(t) { return new (t || ProductModule)(); }, providers: [_products_service__WEBPACK_IMPORTED_MODULE_14__["ProductService"], _categories_category_service__WEBPACK_IMPORTED_MODULE_15__["CategoryService"], _sub_category_sub_category_service__WEBPACK_IMPORTED_MODULE_16__["SubCategoryService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _products_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_3__["ChartistModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_5__["MatchHeightModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_1__["UiSwitchModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                        useClass: _custom_loader__WEBPACK_IMPORTED_MODULE_12__["CustomLoader"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                    }
                }),
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"]
            ]] });
    return ProductModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ProductModule, { declarations: [_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
        _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_17__["AddEditProductComponent"],
        _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_18__["ViewProductComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _products_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ng_chartist__WEBPACK_IMPORTED_MODULE_3__["ChartistModule"],
        _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_5__["MatchHeightModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
        ngx_ui_switch__WEBPACK_IMPORTED_MODULE_1__["UiSwitchModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _products_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    ng_chartist__WEBPACK_IMPORTED_MODULE_3__["ChartistModule"],
                    _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_5__["MatchHeightModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                    ngx_ui_switch__WEBPACK_IMPORTED_MODULE_1__["UiSwitchModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"].forChild({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateLoader"],
                            useClass: _custom_loader__WEBPACK_IMPORTED_MODULE_12__["CustomLoader"],
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]
                        }
                    }),
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__["NgSelectModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltipModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"]
                ],
                exports: [],
                declarations: [
                    _products_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
                    _add_edit_product_add_edit_product_component__WEBPACK_IMPORTED_MODULE_17__["AddEditProductComponent"],
                    _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_18__["ViewProductComponent"]
                ],
                providers: [_products_service__WEBPACK_IMPORTED_MODULE_14__["ProductService"], _categories_category_service__WEBPACK_IMPORTED_MODULE_15__["CategoryService"], _sub_category_sub_category_service__WEBPACK_IMPORTED_MODULE_16__["SubCategoryService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/products/view-product/view-product.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/products/view-product/view-product.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductComponent", function() { return ViewProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products.service */ "./src/app/products/products.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/custom-loader/custom-loader.component */ "./src/app/shared/custom-loader/custom-loader.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");









function ViewProductComponent_app_custom_loader_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-custom-loader");
} }
function ViewProductComponent_div_1_h5_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 2, "SUB_CATEGORY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](":\u00A0", ctx_r310.product.subCategoryName, "");
} }
function ViewProductComponent_div_1_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var variant_r312 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](variant_r312.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](variant_r312.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](variant_r312.productStock);
} }
function ViewProductComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, ViewProductComponent_div_1_h5_13_Template, 5, 4, "h5", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](48, ViewProductComponent_div_1_tr_48_Template, 7, 3, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r309.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r309.product.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r309.product.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](11, 18, "CATEGORY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](":\u00A0", ctx_r309.product.categoryName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx_r309.product.subcategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](17, 20, "DEAL_OFFER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" :\u00A0", ctx_r309.product.isDealAvailable ? ctx_r309.product.dealPercent : _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](19, 22, "NO_DEAL-LINKED"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](23, 24, "TOTAL_RATING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](":\u00A0", ctx_r309.product.totalRating || 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](28, 26, "AVERAGE_RATING"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](":\u00A0", ctx_r309.product.averageRating || 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](33, 28, "NO_USERS_RATED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](":\u00A0", ctx_r309.product.noOfUsersRated || 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](40, 30, "CAPACITY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](43, 32, "PRICE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](46, 34, "STOCK"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx_r309.product.variant);
} }
var ViewProductComponent = /** @class */ (function () {
    function ViewProductComponent(router, route, productService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.isLoading = false;
        this.route.params.subscribe(function (response) {
            _this.productId = response.id;
            if (_this.productId)
                _this.getProductDetail();
        });
    }
    ViewProductComponent.prototype.ngOnInit = function () {
    };
    // Get product detail
    ViewProductComponent.prototype.getProductDetail = function () {
        var _this = this;
        this.isLoading = true;
        this.productService.getById(this.productId).subscribe(function (res) {
            _this.isLoading = false;
            _this.product = res.response_data;
        }, function (error) { return _this.isLoading = false; });
    };
    ViewProductComponent.??fac = function ViewProductComponent_Factory(t) { return new (t || ViewProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"])); };
    ViewProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ViewProductComponent, selectors: [["app-view-product"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "row showproductimage", 4, "ngIf"], [1, "row", "showproductimage"], [1, "col-md-5"], ["alt", "example placeholder avatar", 1, "doctors-img", "img-fluid", 3, "src"], [1, "col-md-7", "title"], [1, "table"], [1, "text-center"], ["class", "text-center", 4, "ngFor", "ngForOf"]], template: function ViewProductComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ViewProductComponent_app_custom_loader_0_Template, 1, 0, "app-custom-loader", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ViewProductComponent_div_1_Template, 49, 36, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.product);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_4__["CustomLoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: [".showproductimage[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n}\n\n.showproductimage[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .showproductimage[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n}\n\n.showproductimage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding: 2rem 0 2rem 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvdmlldy1wcm9kdWN0L0U6XFxncm9jZXJ5MjAyMVxcZ3JvY2VyeS1jbXMvc3JjXFxhcHBcXHByb2R1Y3RzXFx2aWV3LXByb2R1Y3RcXHZpZXctcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdHMvdmlldy1wcm9kdWN0L3ZpZXctcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFxQjtBQ0N6Qjs7QURGQTtFQUdJLGlCQUFpQjtBQ0dyQjs7QUROQTtFQU1RLHlCQUF3QjtBQ0loQyIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3ZpZXctcHJvZHVjdC92aWV3LXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2hvd3Byb2R1Y3RpbWFnZXtcbiAgICBib3JkZXI6MXB4IHNvbGlkIGdyYXk7XG4gICAgLnRpdGxlLCAuZGVzY3JpcHRpb257XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG4gICAgfVxuICAgIGltZ3tcbiAgICAgICAgcGFkZGluZzoycmVtIDAgMnJlbSAycmVtO1xuICAgIH1cbn0iLCIuc2hvd3Byb2R1Y3RpbWFnZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5zaG93cHJvZHVjdGltYWdlIC50aXRsZSwgLnNob3dwcm9kdWN0aW1hZ2UgLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZy10b3A6IDJyZW07XG59XG5cbi5zaG93cHJvZHVjdGltYWdlIGltZyB7XG4gIHBhZGRpbmc6IDJyZW0gMCAycmVtIDJyZW07XG59XG4iXX0= */"] });
    return ViewProductComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ViewProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-product',
                templateUrl: './view-product.component.html',
                styleUrls: ['./view-product.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=products-products-module.js.map