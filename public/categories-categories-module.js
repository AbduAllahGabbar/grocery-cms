(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"],{

/***/ "./src/app/categories/add-edit-category/add-edit-category.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/categories/add-edit-category/add-edit-category.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddEditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditCategoryComponent", function() { return AddEditCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category.service */ "./src/app/categories/category.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/util.service */ "./src/service/util.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/custom-loader/custom-loader.component */ "./src/app/shared/custom-loader/custom-loader.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");














function AddEditCategoryComponent_app_custom_loader_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-custom-loader");
} }
function AddEditCategoryComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"));
} }
function AddEditCategoryComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](3, 1, "THIS_FIELD_IS_REQUIRED*"));
} }
var AddEditCategoryComponent = /** @class */ (function () {
    function AddEditCategoryComponent(router, http, categoryService, utilService, activatedRoute) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.categoryService = categoryService;
        this.utilService = utilService;
        this.activatedRoute = activatedRoute;
        this.isLoading = false;
        this.imageUrl = 'assets/img/blank.png';
        this.category = {
            title: '',
            description: '',
            imageId: '',
            imageUrl: '',
            filePath: '',
        };
        this.categoryId = null;
        this.activatedRoute.params.subscribe(function (params) {
            _this.categoryId = params['id'];
            if (_this.categoryId)
                _this.getCategoryDetail();
        });
    }
    AddEditCategoryComponent.prototype.ngOnInit = function () {
    };
    // Get category info
    AddEditCategoryComponent.prototype.getCategoryDetail = function () {
        var _this = this;
        this.isLoading = true;
        this.categoryService.getById(this.categoryId).subscribe(function (res) {
            _this.isLoading = false;
            _this.category = res.response_data;
            _this.imageUrl = _this.category.imageUrl;
        }, function (error) { return _this.isLoading = false; });
    };
    AddEditCategoryComponent.prototype.uploadImage = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var formData = new FormData();
            formData.append('file', event.target.files[0]);
            this.isLoading = true;
            this.utilService.uploadImage(formData).subscribe(function (res) {
                _this.isLoading = false;
                _this.utilService.successMessage("IMAGE_UPLOADED", true);
                _this.imageUrl = res.response_data.url;
                _this.category.imageUrl = res.response_data.url;
                _this.category.imageId = res.response_data.key;
                _this.category.filePath = res.response_data.filePath;
            }, function (error) { return _this.isLoading = false; });
        }
    };
    // check operation type
    AddEditCategoryComponent.prototype.checkOperationType = function () {
        if (this.category.imageUrl === undefined || this.category.imageUrl === '' || this.category.imageUrl === null) {
            return this.utilService.errorMessage("IMAGE_REQUEST", true);
        }
        if (!this.category.filePath) {
            return this.utilService.infoMessage("CHANGE_CATEGORY_IMAGE");
        }
        if (!this.categoryId)
            this.saveCategory();
        else
            this.updateCategory();
    };
    // Create category
    AddEditCategoryComponent.prototype.saveCategory = function () {
        var _this = this;
        this.isLoading = true;
        this.categoryService.save(this.category).subscribe(function (res) {
            _this.isLoading = false;
            _this.utilService.successMessage(res.response_data);
            _this.router.navigate(['/categories']);
        }, function (error) { return _this.isLoading = false; });
    };
    // Updates category
    AddEditCategoryComponent.prototype.updateCategory = function () {
        var _this = this;
        this.isLoading = true;
        this.categoryService.update(this.categoryId, this.category).subscribe(function (res) {
            _this.isLoading = false;
            _this.utilService.successMessage(res.response_data);
            _this.router.navigate(['/categories']);
        }, function (error) { return _this.isLoading = false; });
    };
    AddEditCategoryComponent.??fac = function AddEditCategoryComponent_Factory(t) { return new (t || AddEditCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
    AddEditCategoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AddEditCategoryComponent, selectors: [["app-add-edit-category"]], decls: 56, vars: 33, consts: [[1, "row", "text-left"], [1, "col-sm-12"], [1, "content-header", "text-center", "text-primary"], [4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-md-6"], [1, "card"], [1, "card-header", "pb-2"], [1, "card-content"], [1, "px-3"], [1, "form", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-body"], [1, "form-group"], ["type", "text", "id", "title", "name", "title", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["class", "help-block", "style", "color: red;", 4, "ngIf"], ["id", "description", "rows", "5", "name", "description", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["description", "ngModel"], [1, "row", "form-label-group"], [1, "col-3"], ["for", "imageUrl"], [1, "col-8"], [1, "mb-4"], ["alt", "category image", 1, "doctors-img", "img-fluid", 3, "src"], ["type", "button", 1, "btn", "btn-info", "button-upload"], ["aria-hidden", "true", 1, "fa", "fa-upload"], ["type", "file", "accept", "image/*", "name", "imageUrl", 1, "upload", "file-upload", 3, "change"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-raised", "btn-raised", "add-modules", "mr-2", 3, "disabled"], [1, "fa", "fa-check-square-o"], ["type", "button", "routerLink", "/categories", 1, "btn", "btn-raised", "btn-raised", "btn-warning", "mr-1"], [1, "ft-x"], [1, "help-block", 2, "color", "red"]], template: function AddEditCategoryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, AddEditCategoryComponent_app_custom_loader_6_Template, 1, 0, "app-custom-loader", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "form", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function AddEditCategoryComponent_Template_form_ngSubmit_13_listener($event) { return ctx.checkOperationType(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](19, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 14, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditCategoryComponent_Template_input_ngModelChange_20_listener($event) { return ctx.category.title = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, AddEditCategoryComponent_span_22_Template, 4, 3, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](26, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "textarea", 17, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function AddEditCategoryComponent_Template_textarea_ngModelChange_27_listener($event) { return ctx.category.description = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "                                ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](30, AddEditCategoryComponent_span_30_Template, 4, 3, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "label", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](35, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "div", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "img", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "i", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](42, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "input", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function AddEditCategoryComponent_Template_input_change_43_listener($event) { return ctx.uploadImage($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](46, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](51, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "i", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](55, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            var _r334 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](14);
            var _r335 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](21);
            var _r337 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", !ctx.categoryId ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 15, "ADD_NEW_CATEGORY") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](5, 17, "EDIT_CATEGORY"), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](19, 19, "TITLE"), "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.category.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r335 == null ? null : _r335.touched) && (_r335 == null ? null : _r335.errors == null ? null : _r335.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](26, 21, "DESCRIPTION"), "*");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.category.description);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", (_r337 == null ? null : _r337.touched) && (_r337 == null ? null : _r337.errors == null ? null : _r337.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](35, 23, "SELECT_FILE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](42, 25, "SELECT_FILE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](46, 27, "IMAGE_400_400"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("disabled", _r334.invalid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](51, 29, "SUBMIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](55, 31, "CANCEL"), " ");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_7__["CustomLoaderComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: [".doctors-img[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.button-upload[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.file-upload[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  opacity: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9hZGQtZWRpdC1jYXRlZ29yeS9FOlxcZ3JvY2VyeTIwMjFcXGdyb2NlcnktY21zL3NyY1xcYXBwXFxjYXRlZ29yaWVzXFxhZGQtZWRpdC1jYXRlZ29yeVxcYWRkLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZXMvYWRkLWVkaXQtY2F0ZWdvcnkvYWRkLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FDQ2Q7O0FEQ0E7RUFDRSx1QkFBdUI7QUNFekI7O0FEQUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFVBQVU7QUNHWiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvYWRkLWVkaXQtY2F0ZWdvcnkvYWRkLWVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jdG9ycy1pbWcge1xuICB3aWR0aDogMTAwcHg7XG59XG4uYnV0dG9uLXVwbG9hZCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmZpbGUtdXBsb2FkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xufVxuIiwiLmRvY3RvcnMtaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uYnV0dG9uLXVwbG9hZCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uZmlsZS11cGxvYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG59XG4iXX0= */"] });
    return AddEditCategoryComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AddEditCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-edit-category',
                templateUrl: './add-edit-category.component.html',
                styleUrls: ['./add-edit-category.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"] }, { type: _service_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/categories/categories-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function() { return CategoriesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _add_edit_category_add_edit_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-edit-category/add-edit-category.component */ "./src/app/categories/add-edit-category/add-edit-category.component.ts");
/* harmony import */ var _view_category_view_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-category/view-category.component */ "./src/app/categories/view-category/view-category.component.ts");







var routes = [
    {
        path: '',
        component: _categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"],
        data: {
            title: 'Categories'
        }
    },
    {
        path: 'add-category',
        component: _add_edit_category_add_edit_category_component__WEBPACK_IMPORTED_MODULE_3__["AddEditCategoryComponent"],
        data: {
            title: 'Add category'
        }
    },
    {
        path: 'edit-category/:id',
        component: _add_edit_category_add_edit_category_component__WEBPACK_IMPORTED_MODULE_3__["AddEditCategoryComponent"],
        data: {
            title: 'Edit category'
        }
    },
    {
        path: 'view-category/:id',
        component: _view_category_view_category_component__WEBPACK_IMPORTED_MODULE_4__["ViewCategoryComponent"],
        data: {
            title: 'View category'
        }
    }
];
var CategoriesRoutingModule = /** @class */ (function () {
    function CategoriesRoutingModule() {
    }
    CategoriesRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: CategoriesRoutingModule });
    CategoriesRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function CategoriesRoutingModule_Factory(t) { return new (t || CategoriesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return CategoriesRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CategoriesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CategoriesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.service */ "./src/app/categories/category.service.ts");
/* harmony import */ var _service_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/util.service */ "./src/service/util.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/custom-loader/custom-loader.component */ "./src/app/shared/custom-loader/custom-loader.component.ts");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/__ivy_ngcc__/ui-switch.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");

















var _c0 = ["searchCategory"];
function CategoryComponent_app_custom_loader_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-custom-loader");
} }
function CategoryComponent_tr_55_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    var _r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "ui-switch", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function CategoryComponent_tr_55_ng_container_12_Template_ui_switch_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r223); var list_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit; var ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r221.statusUpdate(list_r216._id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainerEnd"]();
} if (rf & 2) {
    var ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    var i_r217 = ctx_r224.index;
    var list_r216 = ctx_r224.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("name", "stat", i_r217, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("checked", list_r216.status);
} }
function CategoryComponent_tr_55_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](1, 1, "CATEGORY_DEAL_LINK"));
} }
var _c1 = function (a0) { return [a0]; };
function CategoryComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    var _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "em", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](12, CategoryComponent_tr_55_ng_container_12_Template, 2, 2, "ng-container", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, CategoryComponent_tr_55_ng_template_13_Template, 2, 3, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function CategoryComponent_tr_55_Template_button_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r226); var list_r216 = ctx.$implicit; var ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r225.deleteCategory(list_r216._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "em", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var list_r216 = ctx.$implicit;
    var _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](list_r216.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", list_r216.isDealAvailable ? list_r216.dealPercent + "%" : "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](7, _c1, "/categories/edit-category/" + list_r216._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](9, _c1, "/categories/view-category/" + list_r216._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !list_r216.isDealAvailable)("ngIfElse", _r219);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", list_r216.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
} }
function CategoryComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    var _r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "pagination-controls", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("pageChange", function CategoryComponent_div_57_Template_pagination_controls_pageChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r228); var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](); return ctx_r227.pageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
var _c2 = function () { return ["/categories/add-category"]; };
var _c3 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService, utilService) {
        this.categoryService = categoryService;
        this.utilService = utilService;
        this.isLoading = false;
        this.categories = [];
        this.total = 0;
        this.page = 1;
        this.limit = 25;
        this.search = '';
        this.getAllCategory();
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(this.searchCategory.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) { return event.target.value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])()).subscribe(function (search) {
            _this.page = 1;
            if (search.length > 2) {
                _this.search = search;
                _this.getAllCategory();
            }
            else if (search.length == 0) {
                _this.search = '';
                _this.getAllCategory();
            }
            return;
        });
    };
    // Get all category
    CategoryComponent.prototype.getAllCategory = function () {
        var _this = this;
        this.isLoading = true;
        this.categoryService.getAll(this.page, this.limit, this.search).subscribe(function (res) {
            _this.isLoading = false;
            _this.categories = res.response_data;
            _this.total = res.total || _this.categories.length;
        }, function (error) { return _this.isLoading = false; });
    };
    // Update category status
    CategoryComponent.prototype.statusUpdate = function (id, status) {
        var _this = this;
        var body = { status: status };
        this.isLoading = true;
        this.categoryService.updateStatus(id, body).subscribe(function (res) {
            _this.isLoading = false;
            _this.utilService.successMessage(res.response_data);
            _this.getAllCategory();
        }, function (error) { return _this.isLoading = false; });
    };
    // Pagination
    CategoryComponent.prototype.pageChange = function (page) {
        this.page = page;
        this.getAllCategory();
    };
    // Delete category
    CategoryComponent.prototype.deleteCategory = function (categoryId) {
        var _this = this;
        if (confirm(this.utilService.getAlertField())) {
            this.isLoading = true;
            this.categoryService.delete(categoryId).subscribe(function (res) {
                _this.isLoading = false;
                _this.utilService.successMessage(res.response_data);
                _this.getAllCategory();
            }, function (error) { return _this.isLoading = false; });
        }
    };
    CategoryComponent.??fac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_service_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"])); };
    CategoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: CategoryComponent, selectors: [["app-categories"]], viewQuery: function CategoryComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????staticViewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????loadQuery"]()) && (ctx.searchCategory = _t.first);
        } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]])], decls: 58, vars: 42, consts: [[1, "row"], [1, "col", "text-primary"], [4, "ngIf"], [1, "col"], ["id", "multiple-buttons"], [1, "row", "text-left"], [1, "col-sm-12", "pull-right"], [1, "col-lg-12"], [1, "input-group"], [1, "input-group-prepend"], ["type", "button", "aria-label", "Add", 1, "btn", "btn-raised", "add-button", 3, "routerLink"], [1, "ft-plus"], ["id", "ng-tables"], [1, "col-12"], [1, "card"], [1, "card-content"], [1, "card-body"], [1, "form-group", "form-inline"], ["type", "text", "name", "searchCategory", 1, "form-control", "searchinput", "filterSearch", 3, "placeholder"], ["searchCategory", ""], [1, "table-responsive"], [1, "table", "table-striped"], ["scope", "col "], ["scope", "col"], [4, "ngFor", "ngForOf"], ["class", "d-flex justify-content-between p-2", 4, "ngIf"], ["scope", "row"], ["type", "button", "aria-label", "Edit", 1, "btn", "btn-raised", "btn-success", 3, "routerLink"], [1, "ft-edit-2"], ["type", "button", 1, "btn", "btn-raised", "btn-secondary", 3, "routerLink"], [1, "fa", "fa-eye"], [4, "ngIf", "ngIfElse"], ["dealLinked", ""], ["type", "button", 1, "btn", "btn-raised", "btn-danger", 3, "click"], [1, "fa", "fa-trash"], [2, "width", "50px", 3, "src"], [3, "checked", "name", "change"], [1, "fa", "fa-info", 3, "ngbTooltip"], [1, "d-flex", "justify-content-between", "p-2"], [3, "pageChange"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](4, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](5, CategoryComponent_app_custom_loader_5_Template, 1, 0, "app-custom-loader", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "section", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](17, "translate");
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "section", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 5);
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "th", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](38, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "th", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](41, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "th", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](44, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "th", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](47, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "th", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](50, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "th", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](53, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](55, CategoryComponent_tr_55_Template, 20, 11, "tr", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](56, "paginate");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](57, CategoryComponent_div_57_Template, 2, 0, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](4, 14, "CATEGORIES"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](37, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" \u00A0 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](17, 16, "ADD_NEW_CATEGORY"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](28, 18, "SEARCH_PLACEHOLDER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](35, 20, "NAME"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](38, 22, "DEAL_OFFER"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](41, 24, "EDIT"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](44, 26, "VIEW"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](47, 28, "ENABLE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](50, 30, "DELETE"), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](53, 32, "IMAGE"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind2"](56, 34, ctx.categories, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction3"](38, _c3, ctx.limit, ctx.page, ctx.total)));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.total > 0);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_8__["CustomLoaderComponent"], ngx_ui_switch__WEBPACK_IMPORTED_MODULE_9__["UiSwitchComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltip"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationControlsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginatePipe"]], styles: [".custom-switch[_ngcontent-%COMP%] {\n  padding-left: 2.25rem;\n  padding-bottom: 1rem;\n}\n\n.custom-control-label[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  padding-left: 2rem;\n  padding-bottom: 0.1rem;\n}\n\n.custom-switch[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before {\n  left: -2.25rem;\n  height: 2rem;\n  width: 3.5rem;\n  pointer-events: all;\n  border-radius: 1rem;\n}\n\n.custom-switch[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::after {\n  top: calc(0.25rem + 2px);\n  left: calc(-2.25rem + 2px);\n  width: calc(2rem - 4px);\n  height: calc(2rem - 4px);\n  background-color: #adb5bd;\n  border-radius: 2rem;\n  transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .custom-switch[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::after {\n    transition: none;\n  }\n}\n\n.custom-switch[_ngcontent-%COMP%]   .custom-control-input[_ngcontent-%COMP%]:checked    ~ .custom-control-label[_ngcontent-%COMP%]::after {\n  background-color: #fff;\n  transform: translateX(1.5rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcmllcy9FOlxcZ3JvY2VyeTIwMjFcXGdyb2NlcnktY21zL3NyY1xcYXBwXFxjYXRlZ29yaWVzXFxjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsb0JBQW9CO0FDQ3hCOztBREVFO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7QUNDMUI7O0FERUU7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FDQ3ZCOztBREVFO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFFbkIseUlBQXlJO0FDRTdJOztBRENFO0VBQ0U7SUFDRSxnQkFBZ0I7RUNFcEI7QUFDRjs7QURDRTtFQUNFLHNCQUFzQjtFQUV0Qiw2QkFBNkI7QUNFakMiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLXN3aXRjaCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjI1cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtOyAvLyBhZGRlZCBmb3IgcG9zaXRpb25pbmdcbiAgfVxuICBcbiAgLmN1c3RvbS1jb250cm9sLWxhYmVsIHsgLy8gYWRkZWQgZm9yIGFsaWdubWVudCB3aXRoIHRoZSBzd2l0Y2hcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xuICB9XG4gIFxuICAuY3VzdG9tLXN3aXRjaCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgbGVmdDogLTIuMjVyZW07XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAzLjVyZW07ICAgIC8vIGl0IHdhcyAxLjc1cmVtIGJlZm9yZS4gU2xpZGluZyB3YXkgaXMgbG9uZ2VyIHRoYW4gYmVmb3JlLlxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgfVxuICBcbiAgLmN1c3RvbS1zd2l0Y2ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gICAgdG9wOiBjYWxjKDAuMjVyZW0gKyAycHgpO1xuICAgIGxlZnQ6IGNhbGMoLTIuMjVyZW0gKyAycHgpO1xuICAgIHdpZHRoOiBjYWxjKDJyZW0gLSA0cHgpOyAgIC8vIGl0IHdhcyBjYWxjKDFyZW0gLSA0cHgpIGJlZm9yZS4gT3ZhbCBpcyBiaWdnZXIgdGhhbiBiZWZvcmUuXG4gICAgaGVpZ2h0OiBjYWxjKDJyZW0gLSA0cHgpOyAgLy8gaXQgd2FzIGNhbGMoMXJlbSAtIDRweCkgYmVmb3JlLiBPdmFsIGlzIGJpZ2dlciB0aGFuIGJlZm9yZS5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRiNWJkO1xuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07IC8vICAgaXQgd2FzIDAuNXJlbSBiZWZvcmUuIE92YWwgaXMgYmlnZ2VyIHRoYW4gYmVmb3JlLlxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIEBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICAgLmN1c3RvbS1zd2l0Y2ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgLmN1c3RvbS1zd2l0Y2ggLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNXJlbSk7IC8vdHJhbnNsYXRlWCgwLjc1cmVtKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS41cmVtKTsgLy90cmFuc2xhdGVYKDAuNzVyZW0pO1xuICB9XG4iLCIuY3VzdG9tLXN3aXRjaCB7XG4gIHBhZGRpbmctbGVmdDogMi4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi5jdXN0b20tY29udHJvbC1sYWJlbCB7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcbn1cblxuLmN1c3RvbS1zd2l0Y2ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xuICBsZWZ0OiAtMi4yNXJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMy41cmVtO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uY3VzdG9tLXN3aXRjaCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmFmdGVyIHtcbiAgdG9wOiBjYWxjKDAuMjVyZW0gKyAycHgpO1xuICBsZWZ0OiBjYWxjKC0yLjI1cmVtICsgMnB4KTtcbiAgd2lkdGg6IGNhbGMoMnJlbSAtIDRweCk7XG4gIGhlaWdodDogY2FsYygycmVtIC0gNHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkYjViZDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAwLjE1cyBlYXNlLWluLW91dDtcbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLmN1c3RvbS1zd2l0Y2ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxufVxuXG4uY3VzdG9tLXN3aXRjaCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjVyZW0pO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS41cmVtKTtcbn1cbiJdfQ== */"] });
    return CategoryComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-categories',
                templateUrl: './categories.component.html',
                styleUrls: ['./categories.component.scss'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]]
            }]
    }], function () { return [{ type: _category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }, { type: _service_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] }]; }, { searchCategory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchCategory', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/categories/categories-routing.module.ts");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_ui_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-switch */ "./node_modules/ngx-ui-switch/__ivy_ngcc__/ui-switch.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _custom_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../custom-loader */ "./src/app/custom-loader.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./category.service */ "./src/app/categories/category.service.ts");
/* harmony import */ var _add_edit_category_add_edit_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-edit-category/add-edit-category.component */ "./src/app/categories/add-edit-category/add-edit-category.component.ts");
/* harmony import */ var _view_category_view_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-category/view-category.component */ "./src/app/categories/view-category/view-category.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");

















var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: CategoriesModule });
    CategoriesModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function CategoriesModule_Factory(t) { return new (t || CategoriesModule)(); }, providers: [_category_service__WEBPACK_IMPORTED_MODULE_11__["CategoryService"]], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoriesRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ngx_ui_switch__WEBPACK_IMPORTED_MODULE_6__["UiSwitchModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useClass: _custom_loader__WEBPACK_IMPORTED_MODULE_10__["CustomLoader"],
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                    }
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltipModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
            ]] });
    return CategoriesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](CategoriesModule, { declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"],
        _add_edit_category_add_edit_category_component__WEBPACK_IMPORTED_MODULE_12__["AddEditCategoryComponent"],
        _view_category_view_category_component__WEBPACK_IMPORTED_MODULE_13__["ViewCategoryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoriesRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ngx_ui_switch__WEBPACK_IMPORTED_MODULE_6__["UiSwitchModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltipModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CategoriesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoriesRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    ngx_ui_switch__WEBPACK_IMPORTED_MODULE_6__["UiSwitchModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                            useClass: _custom_loader__WEBPACK_IMPORTED_MODULE_10__["CustomLoader"],
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                        }
                    }),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTooltipModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
                ],
                exports: [],
                declarations: [
                    _categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoryComponent"],
                    _add_edit_category_add_edit_category_component__WEBPACK_IMPORTED_MODULE_12__["AddEditCategoryComponent"],
                    _view_category_view_category_component__WEBPACK_IMPORTED_MODULE_13__["ViewCategoryComponent"]
                ],
                providers: [_category_service__WEBPACK_IMPORTED_MODULE_11__["CategoryService"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/categories/view-category/view-category.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/categories/view-category/view-category.component.ts ***!
  \*********************************************************************/
/*! exports provided: ViewCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCategoryComponent", function() { return ViewCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category.service */ "./src/app/categories/category.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/custom-loader/custom-loader.component */ "./src/app/shared/custom-loader/custom-loader.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm5/ngx-translate-core.js");









function ViewCategoryComponent_app_custom_loader_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-custom-loader");
} }
function ViewCategoryComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    var ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("src", ctx_r340.category.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](6, 7, "TITLE"), " : ", ctx_r340.category.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](9, 9, "DESCRIPTION"), " : ", ctx_r340.category.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](12, 11, "DEAL_OFFER"), " : ", ctx_r340.category.isDealAvailable ? ctx_r340.category.dealPercent + "%" : _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](13, 13, "NO_DEAL-LINKED"), " ");
} }
var ViewCategoryComponent = /** @class */ (function () {
    function ViewCategoryComponent(route, categoryService) {
        var _this = this;
        this.route = route;
        this.categoryService = categoryService;
        this.isLoading = false;
        this.route.params.subscribe(function (response) {
            _this.categoryId = response.id;
            _this.getCategoryDetail();
        });
    }
    ViewCategoryComponent.prototype.ngOnInit = function () {
    };
    // Get category info
    ViewCategoryComponent.prototype.getCategoryDetail = function () {
        var _this = this;
        this.isLoading = true;
        this.categoryService.getById(this.categoryId).subscribe(function (res) {
            _this.isLoading = false;
            _this.category = res.response_data;
        }, function (error) { return _this.isLoading = false; });
    };
    ViewCategoryComponent.??fac = function ViewCategoryComponent_Factory(t) { return new (t || ViewCategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"])); };
    ViewCategoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: ViewCategoryComponent, selectors: [["app-view-category"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "row showproductimage", 4, "ngIf"], [1, "row", "showproductimage"], [1, "col-md-5"], ["alt", "example placeholder avatar", 1, "doctors-img", "img-fluid", 3, "src"], [1, "col-md-5", "title"]], template: function ViewCategoryComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ViewCategoryComponent_app_custom_loader_0_Template, 1, 0, "app-custom-loader", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ViewCategoryComponent_div_1_Template, 14, 15, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.isLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.category);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_custom_loader_custom_loader_component__WEBPACK_IMPORTED_MODULE_4__["CustomLoaderComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvdmlldy1jYXRlZ29yeS92aWV3LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"] });
    return ViewCategoryComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ViewCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-category',
                templateUrl: './view-category.component.html',
                styleUrls: ['./view-category.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=categories-categories-module.js.map