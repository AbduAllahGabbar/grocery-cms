(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/add-edit-admin/add-edit-admin.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/add-edit-admin/add-edit-admin.component.ts ***!
  \******************************************************************/
/*! exports provided: AddEditAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditAdminComponent", function() { return AddEditAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/util.service */ "./src/service/util.service.ts");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/custom-loader/custom-loader.component */ "./src/app/shared/custom-loader/custom-loader.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");












function AddEditAdminComponent_app_custom_loader_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-custom-loader");
} }
function AddEditAdminComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"));
} }
function AddEditAdminComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"));
} }
function AddEditAdminComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"));
} }
function AddEditAdminComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"));
} }
function AddEditAdminComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"));
} }
var _c0 = function () { return ["/admins"]; };
var AddEditAdminComponent = /** @class */ (function () {
    function AddEditAdminComponent(router, utilService, adminService) {
        this.router = router;
        this.utilService = utilService;
        this.adminService = adminService;
        this.isLoading = false;
        this.admin = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            mobileNumber: '',
        };
    }
    // save admin details
    AddEditAdminComponent.prototype.saveAdmin = function () {
        var _this = this;
        this.isLoading = true;
        this.adminService.save(this.admin).subscribe(function (res) {
            _this.isLoading = false;
            _this.utilService.successMessage(res.response_data);
            _this.router.navigate(['/admins']);
        }, function (error) { return _this.isLoading = false; });
    };
    AddEditAdminComponent.??fac = function AddEditAdminComponent_Factory(t) { return new (t || AddEditAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"])); };
    AddEditAdminComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AddEditAdminComponent, selectors: [["app-add-edit-admin"]], decls: 59, vars: 38, consts: [[1, "row", "text-left"], [1, "col-sm-12"], [1, "content-header", "text-center", "text-primary"], [4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-6"], [1, "card"], [1, "card-header", "pb-2"], [1, "card-content"], [1, "px-3"], [1, "form", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-body"], [1, "form-group"], ["type", "text", "id", "firstName", "name", "firstName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["class", "help-block", "style", "color: red;", 4, "ngIf"], ["type", "text", "id", "lastName", "name", "lastName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["type", "text", "id", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["type", "text", "id", "mobileNumber", "name", "mobileNumber", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["mobileNumber", "ngModel"], ["type", "password", "id", "password", "minlength", "5", "maxlength", "35", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-raised", "btn-raised", "add-modules", "mr-2", 3, "disabled"], [1, "fa", "fa-check-square-o"], ["type", "button", 1, "btn", "btn-raised", "btn-raised", "btn-warning", "mr-1", 3, "routerLink"], [1, "ft-x"], [1, "help-block", 2, "color", "red"]], template: function AddEditAdminComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, AddEditAdminComponent_app_custom_loader_5_Template, 1, 0, "app-custom-loader", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "form", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AddEditAdminComponent_Template_form_ngSubmit_12_listener($event) { return ctx.saveAdmin(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](18, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "input", 14, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditAdminComponent_Template_input_ngModelChange_19_listener($event) { return ctx.admin.firstName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](21, AddEditAdminComponent_span_21_Template, 4, 3, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](25, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "input", 17, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditAdminComponent_Template_input_ngModelChange_26_listener($event) { return ctx.admin.lastName = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](28, AddEditAdminComponent_span_28_Template, 4, 3, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](32, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "input", 19, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditAdminComponent_Template_input_ngModelChange_33_listener($event) { return ctx.admin.email = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](35, AddEditAdminComponent_span_35_Template, 4, 3, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](39, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "input", 21, 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditAdminComponent_Template_input_ngModelChange_40_listener($event) { return ctx.admin.mobileNumber = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](42, AddEditAdminComponent_span_42_Template, 4, 3, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](46, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "input", 23, 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditAdminComponent_Template_input_ngModelChange_47_listener($event) { return ctx.admin.password = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](49, AddEditAdminComponent_span_49_Template, 4, 3, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "button", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](54, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](56, "i", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](58, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            var _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](13);
            var _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](20);
            var _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](27);
            var _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](34);
            var _r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](41);
            var _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 21, "ADD_ADMIN"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](18, 23, "FIRST_NAME"), "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.admin.firstName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r190 == null ? null : _r190.touched) && (_r190 == null ? null : _r190.errors == null ? null : _r190.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](25, 25, "LAST_NAME"), "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.admin.lastName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r192 == null ? null : _r192.touched) && (_r192 == null ? null : _r192.errors == null ? null : _r192.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](32, 27, "EMAIL"), "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.admin.email);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r194 == null ? null : _r194.touched) && (_r194 == null ? null : _r194.errors == null ? null : _r194.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](39, 29, "MOBILE_NUMBER"), "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.admin.mobileNumber);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r196 == null ? null : _r196.touched) && (_r196 == null ? null : _r196.errors == null ? null : _r196.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](46, 31, "PASSWORD"), "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.admin.password);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r198 == null ? null : _r198.touched) && (_r198 == null ? null : _r198.errors == null ? null : _r198.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r189.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](54, 33, "SUBMIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](37, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](58, 35, "CANCEL"), " ");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MaxLengthValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_6__["CustomLoaderComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".button-upload[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.file-upload[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRkLWVkaXQtYWRtaW4vRTpcXGdyb2NlcnkyMDIxXFxncm9jZXJ5LWNtcy9zcmNcXGFwcFxcYWRtaW5cXGFkZC1lZGl0LWFkbWluXFxhZGQtZWRpdC1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRkLWVkaXQtYWRtaW4vYWRkLWVkaXQtYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUNDekI7O0FERUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFVBQVU7QUNDWiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC1lZGl0LWFkbWluL2FkZC1lZGl0LWFkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi11cGxvYWQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmZpbGUtdXBsb2FkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xufVxuIiwiLmJ1dHRvbi11cGxvYWQge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmZpbGUtdXBsb2FkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xufVxuIl19 */"] });
    return AddEditAdminComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddEditAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-admin',
                templateUrl: './add-edit-admin.component.html',
                styleUrls: ['./add-edit-admin.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }, { type: _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _add_edit_admin_add_edit_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-admin/add-edit-admin.component */ "./src/app/admin/add-edit-admin/add-edit-admin.component.ts");






var routes = [
    {
        path: '',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        data: {
            title: 'Admin'
        }
    },
    {
        path: 'add-admins',
        component: _add_edit_admin_add_edit_admin_component__WEBPACK_IMPORTED_MODULE_3__["AddEditAdminComponent"],
        data: {
            title: 'Add Admin'
        }
    },
    {
        path: 'edit-admins/:id',
        component: _add_edit_admin_add_edit_admin_component__WEBPACK_IMPORTED_MODULE_3__["AddEditAdminComponent"],
        data: {
            title: 'Edit Admin'
        }
    },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AdminRoutingModule });
    AdminRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AdminRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/util.service */ "./src/service/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/custom-loader/custom-loader.component */ "./src/app/shared/custom-loader/custom-loader.component.ts");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/__ivy_ngcc__/ui-switch.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");













function AdminComponent_app_custom_loader_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-custom-loader");
} }
function AdminComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    var _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ui-switch", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AdminComponent_tr_45_Template_ui_switch_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r183); var list_r180 = ctx.$implicit; return (list_r180["status"] = $event); })("change", function AdminComponent_tr_45_Template_ui_switch_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r183); var list_r180 = ctx.$implicit; var ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r184.updateStatus($event, list_r180._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function AdminComponent_tr_45_Template_button_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r183); var list_r180 = ctx.$implicit; var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r185.deleteAdmin(list_r180._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "em", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var list_r180 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", list_r180.firstName, "", list_r180.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](list_r180.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](list_r180.mobileNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", list_r180["status"])("name", list_r180._id);
} }
function AdminComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    var _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "pagination-controls", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function AdminComponent_div_47_Template_pagination_controls_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r187); var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r186.pageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
var _c0 = function () { return ["/admins/add-admins"]; };
var _c1 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
var AdminComponent = /** @class */ (function () {
    function AdminComponent(adminService, utilService) {
        this.adminService = adminService;
        this.utilService = utilService;
        this.adminList = [];
        this.isLoading = false;
        this.page = 0;
        this.limit = 25;
        this.total = 0;
        this.search = '';
        this.getAllAdmin();
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    // Get all admin
    AdminComponent.prototype.getAllAdmin = function () {
        var _this = this;
        this.isLoading = true;
        this.adminService.getAll(this.page, this.limit, this.search).subscribe(function (res) {
            _this.isLoading = false;
            _this.adminList = res.response_data;
            _this.total = res.response_data.total;
        }, function (error) { return _this.isLoading = false; });
    };
    //status of Admin
    AdminComponent.prototype.updateStatus = function (event, id) {
        var _this = this;
        var body = { status: event };
        this.isLoading = true;
        this.adminService.updateStatus(id, body).subscribe(function (res) {
            _this.isLoading = false;
            _this.utilService.successMessage(res.response_data);
        }, function (error) { return _this.isLoading = false; });
    };
    // Pagination
    AdminComponent.prototype.pageChange = function (page) {
        this.page = page;
        this.getAllAdmin();
    };
    //delete Admin
    AdminComponent.prototype.deleteAdmin = function (adminId) {
        var _this = this;
        if (confirm(this.utilService.getAlertField())) {
            this.isLoading = true;
            this.adminService.deleteAdmin(adminId).subscribe(function (res) {
                _this.isLoading = false;
                _this.utilService.successMessage(res.response_data);
                _this.getAllAdmin();
            }, function (error) { return _this.isLoading = false; });
        }
    };
    AdminComponent.??fac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"])); };
    AdminComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 48, vars: 33, consts: [[1, "row"], [1, "col", "text-primary"], [1, "col"], ["id", "multiple-buttons"], [1, "row", "text-left"], [1, "col-sm-12", "pull-right"], [1, "col-lg-12"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", "aria-label", "Add", 1, "btn", "btn-raised", "add-button", 3, "routerLink"], [1, "ft-plus"], [4, "ngIf"], ["id", "ng-tables"], [1, "col-12"], [1, "card"], [1, "card-content"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-between p-2", 4, "ngIf"], ["scope", "row"], [3, "ngModel", "name", "ngModelChange", "change"], ["type", "button", 1, "btn", "btn-raised", "btn-danger", 3, "click"], [1, "fa", "fa-trash"], [1, "d-flex", "justify-content-between", "p-2"], [3, "pageChange"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, AdminComponent_app_custom_loader_17_Template, 1, 0, "app-custom-loader", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "section", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "table", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](31, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](34, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](37, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](40, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](43, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](45, AdminComponent_tr_45_Template, 12, 6, "tr", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](46, "paginate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](47, AdminComponent_div_47_Template, 2, 0, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 11, "ADMINS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](28, _c0));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" \u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](16, 13, "ADD_NEW_ADMIN"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](31, 15, "NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](34, 17, "EMAIL"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](37, 19, "MOBILE_NUMBER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](40, 21, "STATUS"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](43, 23, "DELETE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](46, 25, ctx.adminList, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](29, _c1, ctx.limit, ctx.page, ctx.total)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.adminList.length > 0);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_6__["CustomLoaderComponent"], ngx_ui_switch__WEBPACK_IMPORTED_MODULE_7__["UiSwitchComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"]], styles: [".button-upload[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.file-upload[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vRTpcXGdyb2NlcnkyMDIxXFxncm9jZXJ5LWNtcy9zcmNcXGFwcFxcYWRtaW5cXGFkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtBQ0N6Qjs7QURDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtBQ0VaIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLXVwbG9hZCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmZpbGUtdXBsb2FkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMDtcbn1cbiIsIi5idXR0b24tdXBsb2FkIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5maWxlLXVwbG9hZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG59XG4iXX0= */"] });
    return AdminComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss'],
            }]
    }], function () { return [{ type: _admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] }, { type: _service_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm5/ng-select-ng-select.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm5/ng2-file-upload.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _custom_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../custom-loader */ "./src/app/custom-loader.ts");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _add_edit_admin_add_edit_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-edit-admin/add-edit-admin.component */ "./src/app/admin/add-edit-admin/add-edit-admin.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/__ivy_ngcc__/ui-switch.es5.js");


















var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AdminModule });
    AdminModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, providers: [_admin_service__WEBPACK_IMPORTED_MODULE_11__["AdminService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_15__["UiSwitchModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                        useClass: _custom_loader__WEBPACK_IMPORTED_MODULE_10__["CustomLoader"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                    }
                }),
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_14__["AdminRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ]] });
    return AdminModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AdminModule, { declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"], _add_edit_admin_add_edit_admin_component__WEBPACK_IMPORTED_MODULE_12__["AddEditAdminComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        ngx_ui_switch__WEBPACK_IMPORTED_MODULE_15__["UiSwitchModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_14__["AdminRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    ngx_ui_switch__WEBPACK_IMPORTED_MODULE_15__["UiSwitchModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                    ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                            useClass: _custom_loader__WEBPACK_IMPORTED_MODULE_10__["CustomLoader"],
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]]
                        }
                    }),
                    _admin_routing_module__WEBPACK_IMPORTED_MODULE_14__["AdminRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
                ],
                declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"], _add_edit_admin_add_edit_admin_component__WEBPACK_IMPORTED_MODULE_12__["AddEditAdminComponent"]],
                providers: [_admin_service__WEBPACK_IMPORTED_MODULE_11__["AdminService"]],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/admin/admin.service.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.service.ts ***!
  \****************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/crud.service */ "./src/service/crud.service.ts");




var AdminService = /** @class */ (function () {
    function AdminService(crud) {
        this.crud = crud;
    }
    // Get all admin
    AdminService.prototype.getAll = function (page, limit, search) {
        return this.crud.getData("/users/super-admin/list-admin?page=" + page + "&limit=" + limit + "&q=" + search);
    };
    // Save admin
    AdminService.prototype.save = function (admin) {
        return this.crud.saveData('/users/super-admin/create/admin', admin);
    };
    // Update admin  status
    AdminService.prototype.updateStatus = function (userId, statusData) {
        return this.crud.updateData("/users/super-admin/status-update/" + userId, statusData);
    };
    // delete admin boy 
    AdminService.prototype.deleteAdmin = function (userId) {
        return this.crud.deleteData("/users/super-admin/delete/" + userId);
    };
    AdminService.??fac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"])); };
    AdminService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AdminService, factory: AdminService.??fac });
    return AdminService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map