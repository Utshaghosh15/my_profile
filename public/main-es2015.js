(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n  \n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/education-edit/education-edit.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/education-edit/education-edit.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div id=\"bgc\">\n    <div id=\"login\">\n        <form (submit)=\"UpdateEducation($event)\"> \n          <input type=\"text\" name=\"Btech\" placeholder=\"Btech\" id=\"Btech\"><br><br>\n          <input type=\"text\" name=\"twelve\" placeholder=\"XIIth\" id=\"twelve\"><br><br>\n          <input type=\"text\" name=\"ten\" placeholder=\"Xth\" id=\"ten\"><br><br>\n          <input type=\"submit\" value=\"Save\" class=\"btn btn-primary\" style=\"margin-left: 45px;\">\n        </form>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/experience-edit/experience-edit.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/experience-edit/experience-edit.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  <div id=\"container\">\n <div id=\"divleft\">\n  <h1 id=\"websitename\" (click)=\"HomePage()\" style=\"cursor: pointer;\">MY PROFILE</h1>\n\n </div>\n <div id=\"divright\">\n  <button id=\"LogOut\" (click)=\"LoggingOut()\">LogOut</button>\n      <form (submit)=\"UpdateExperience($event)\" id=\"username\"> \n        <input type=\"text\" name=\"Company\" placeholder=\"Company\" id=\"Company\"><br><br>\n        <input type=\"text\" name=\"Role\" placeholder=\"Role\" id=\"Role\"><br><br>\n        <input type=\"text\" name=\"Locations\" placeholder=\"Locations\" id=\"Locations\"><br><br>\n        <input type=\"date\" name=\"dateOfBirth\" id=\"dateOfBirth1\"><br><br>\n        <input type=\"date\" name=\"dateOfBirth\" id=\"dateOfBirth2\" placeholder=\"From\"><br><br>\n        <input type=\"submit\" value=\"Save\" id=\"Save\">\n      </form>\n  </div>\n</div>\n\n   "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"sticky-header\" class=\"sticky\">\n    <div class=\"main-menu-area\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <div class=\"logo\">\n                        <a style=\"color: #000;\" id=\"ug\">MyProfile</a>\n                    </div>\n                </div>\n                <div class=\"col-md-9\">\n                    <div class=\"main-menu\">\n                            <ul>\n                                <li><button (click)=\"LoggingOut()\">Logout</button></li>\n                            </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n <div id=\"divleft\">\n  <h1 id=\"websitename\">MY PROFILE</h1>\n  <!-- <h1 id=\"websitename\">MY PROFILE</h1><br> -->\n  <img src=\"../../assets/boy2.png\" alt=\"men\" id=\"profilepic\">\n </div>\n <div id=\"divright\">\n  <button id=\"LogOut\" (click)=\"LoggingOut()\">LogOut</button>\n  <h2 id=\"username\">{{UserProfile.name}}</h2>\n  <button id=\"Edit\" (click)=\"EditTitle(UserProfile.name)\">Edit</button>\n  <h3 id=\"status\">{{UserProfile.status}}</h3>\n  <h4 id=\"about\">{{UserProfile.Description}}</h4>\n    <div id=\"skill-contents\">\n      <h3 id=\"skill\">SKILLS</h3>\n      <button id=\"Edit\" (click)= \"AddSkills(UserProfile.name)\">Add</button><br><br>\n        <ul id=\"skill-list\">   \n          <li *ngFor = \"let skill of UserProfile.Skills\" id=\"skill-content\"><h4>{{skill}}</h4>\n            <button id=\"Delete\" (click)= \"deleteSkills(UserProfile.name,skill)\">Delete</button> \n          </li>  \n        </ul>\n    </div>\n     <div id=\"experience-contents\">\n      <h3 id=\"experience\">EXPERIENCE</h3>\n      <button id=\"Edit\" (click)=\"AddExperience(UserProfile.name)\">Add</button><br><br>\n      <ul id=\"exp\">\n        <li id=\"experience-content\" *ngFor = \"let exp of UserProfile.Experience\">\n          <h3 id=\"position\">{{exp.Role}}</h3>\n          <button id=\"Delete\" (click)= \"deleteExperience(UserProfile.name,exp.company)\">Delete</button>\n          <h4 id=\"company\">{{ exp.company }}, {{exp.Locations}}</h4>\n          <p id=\"date\">{{exp.from}} - {{exp.to}}</p>\n          <h4 id=\"job-decription\">Lorem ipsum dolor sit, amet consectetur adipisicing elit. \n            Molestias ullam quae architecto aspernatur debitis exercitationem consectetur, \n            quam quasi totam porro. Voluptate, at a saepe in ducimus harum fugiat ut amet.</h4> \n        </li>\n      </ul> \n    </div>\n    <div id=\"project-contents\">\n      <h3 id=\"project\">PROJECTS</h3>\n      <button id=\"Edit\" (click)=\"AddProject(UserProfile.name)\">Add</button><br><br>\n      <ul id=\"pro\">\n        <li id=\"project-content\" *ngFor = \"let project of UserProfile.Project\">\n          <h3 id=\"project-title\">{{project.title}}</h3> \n          <button id=\"Delete\" (click)=\"DeleteProject(UserProfile.name,project.title)\">Delete</button>\n          <h4 id=\"project-desc\">{{project.Description}}</h4>\n          <a id=\"project-link\" href=\"{{project.URL}}\" target=\"_blank\">{{project.URL}}</a>\n        </li>\n      </ul>\n    </div>\n </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project-edit/project-edit.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project-edit/project-edit.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div id=\"container\">\n    <div id=\"divleft\">\n     <h1 id=\"websitename\"  (click)=\"HomePage()\">MY PROFILE</h1> \n    </div>\n    <div id=\"divright\">\n     <button id=\"LogOut\" (click)=\"LoggingOut()\">LogOut</button>\n         <form (submit)=\"AddProject($event)\" id=\"username\"> \n           <input type=\"text\" name=\"Tilte\" placeholder=\"Title\" id=\"Company\"><br><br>\n           <textarea name=\"Description\" id=\"Description\" cols=\"52\" rows=\"5\" placeholder=\"Description\"></textarea><br><br>\n           <input type=\"text\" name=\"URL\" placeholder=\"URL\" id=\"Locations\"><br><br>\n           <input type=\"submit\" value=\"Save\" id=\"Save\">\n         </form>\n     </div>\n   </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search-profile/search-profile.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search-profile/search-profile.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div id=\"divleft\">\n   <h1 id=\"websitename\" (click)=\"HomePage()\" style=\"cursor: pointer;\">MY PROFILE</h1>\n   <!-- <h1 id=\"websitename\">MY PROFILE</h1><br> -->\n   <img src=\"../../assets/boy2.png\" alt=\"men\" id=\"profilepic\">\n  </div>\n  <div id=\"divright\">\n   <h2 id=\"username\">{{UserProfile.name}}</h2>\n   <h3 id=\"status\">{{UserProfile.status}}</h3>\n   <h4 id=\"about\">{{UserProfile.Description}}</h4>\n     <div id=\"skill-contents\">\n       <h3 id=\"skill\">SKILLS</h3>\n         <ul id=\"skill-list\">   \n           <li *ngFor = \"let skill of UserProfile.Skills\" id=\"skill-content\"><h4>{{skill}}</h4>\n           </li>  \n         </ul>\n     </div>\n      <div id=\"experience-contents\">\n       <h3 id=\"experience\">EXPERIENCE</h3>\n       <ul id=\"exp\">\n         <li id=\"experience-content\" *ngFor = \"let exp of UserProfile.Experience\">\n           <h3 id=\"position\">{{exp.Role}}</h3>\n           <h4 id=\"company\">{{ exp.company }}, {{exp.Locations}}</h4>\n           <p id=\"date\">{{exp.from}} - {{exp.to}}</p>\n           <h4 id=\"job-decription\">Lorem ipsum dolor sit, amet consectetur adipisicing elit. \n             Molestias ullam quae architecto aspernatur debitis exercitationem consectetur, \n             quam quasi totam porro. Voluptate, at a saepe in ducimus harum fugiat ut amet.</h4> \n         </li>\n       </ul> \n     </div>\n     <div id=\"project-contents\">\n       <h3 id=\"project\">PROJECTS</h3>\n       <ul id=\"pro\">\n         <li id=\"project-content\" *ngFor = \"let project of UserProfile.Project\">\n           <h3 id=\"project-title\">{{project.title}}</h3> \n           <h4 id=\"project-desc\">{{project.Description}}</h4>\n           <a id=\"project-link\" href=\"{{project.URL}}\" target=\"_blank\">{{project.URL}}</a>\n         </li>\n       </ul>\n     </div>\n  </div>\n </div>\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bgc\">\n    <div id=\"login\">\n        <form (submit)=\"registerUser($event)\"> \n          <input type=\"text\" name=\"username\" placeholder=\"User Name\" id=\"username\"><br><br>\n          <input type=\"password\" name=\"create_password\" placeholder=\"Create Password\" id=\"password\"><br><br>\n          <input type=\"password\" name=\"rewrite_password\" placeholder=\"Rewrite Password\" id=\"cpassword\"><br><br>\n          <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary\" style=\"margin-left: 45px;\">\n        </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/start-page/start-page.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/start-page/start-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class = \"mainpage\">\n    <div class=\"box\">\n       <div style=\"margin-left:27%;\"> \n        <ngx-typed-js [strings]=\"['Make Your Profile', 'See Your Profile','Show Your Profile']\" [shuffle]=\"true\" [typeSpeed]=\"80\" [loop]=\"true\">\n            <h1 class=\"typing\"></h1>\n          </ngx-typed-js>\n        </div> \n        <form> \n            <input type=\"text\" name=\"username\" placeholder=\"User Name\" [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\"><br><br>\n            <input type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\"><br><br>\n            <input type=\"submit\" value=\"Login\" class=\"btn btn-primary\" style=\"margin-left: 45px;\" (click) =\"Validate()\">\n        </form>\n        <form class=\"secondform\">    \n            <h4 style=\"margin-left: 65px;\">or</h4>\n            <input type=\"submit\" value=\"Sign Up\" class=\"btn btn-primary\" style=\"margin-left: 35px;\" (click) =\"SignUp()\">\n            <br><br><br>\n            <input type=\"text\" placeholder=\"Search\" name=\"name\" [(ngModel)]=\"name\" >\n            <input type=\"submit\" value=\"Search\" class=\"btn btn-primary\" style=\"margin-left: 5%;\" (click) =\"Search()\">\n        </form>\n    </div>\n</div> -->\n\n<div class=\"hero\">\n  <div class=\"form-box\">\n     <div class=\"button-box\">\n         <div id=\"btn\"></div>\n        <button type=\"button\" class=\"toggle-btn\" (click)=\"login()\">Login</button>\n        <button type=\"button\" class=\"toggle-btn\" (click)=\"register()\">Register</button>\n     </div>\n     <form id=\"login\" class=\"input-group\" (submit)=\"Validate($event)\">\n       <input type=\"text\" class=\"input-field\" placeholder=\"UserName\" id=\"loginusername\" required>\n       <input type=\"password\" class=\"input-field\" placeholder=\"Enter Password\" id=\"loginpassword\" required>\n       <button type=\"submit\" class=\"submit-btn\" (click)=\"Validate()\">Login</button>\n     </form>\n     <form id=\"register\" class=\"input-group\" (submit)=\"registerUser($event)\">\n        <input type=\"text\" class=\"input-field\" placeholder=\"UserName\" id=\"username\" required>\n        <input type=\"password\" class=\"input-field\" placeholder=\"Enter Password\" id=\"password\" required>\n        <input type=\"password\" class=\"input-field\" placeholder=\"Confirm Password\" id=\"cpassword\" required>\n        <button type=\"submit\" class=\"submit-btn\">Register</button>\n      </form>\n      <input type=\"text\" id=\"SearchInput\" placeholder=\"Search\" name=\"name\" [(ngModel)]=\"name\" >\n      <button id=\"search\" (click) =\"Search()\">Search</button>\n  </div>\n</div>  \n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/title-edit/title-edit.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/title-edit/title-edit.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <div id=\"divleft\">\n     <h1 id=\"websitename\">MY PROFILE</h1> \n    </div>\n    <div id=\"divright\">\n     <button id=\"LogOut\" (click)=\"LoggingOut()\">LogOut</button>\n         <form (submit)=\"UpdateTitle($event)\" id=\"username\"> \n           <input type=\"text\" name=\"Status\" placeholder=\"Status\" id=\"Status\"><br><br>\n           <textarea name=\"Description\" id=\"Description\" cols=\"52\" rows=\"5\" placeholder=\"Description\"></textarea><br><br>\n           <input type=\"submit\" value=\"Save\" id=\"Save\">\n         </form>\n     </div>\n   </div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start-page/start-page.component */ "./src/app/start-page/start-page.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _search_profile_search_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-profile/search-profile.component */ "./src/app/search-profile/search-profile.component.ts");
/* harmony import */ var _education_edit_education_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./education-edit/education-edit.component */ "./src/app/education-edit/education-edit.component.ts");
/* harmony import */ var _experience_edit_experience_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./experience-edit/experience-edit.component */ "./src/app/experience-edit/experience-edit.component.ts");
/* harmony import */ var _project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project-edit/project-edit.component */ "./src/app/project-edit/project-edit.component.ts");
/* harmony import */ var _title_edit_title_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./title-edit/title-edit.component */ "./src/app/title-edit/title-edit.component.ts");











const routes = [
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'profile/:uname', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'searchprofile/:name', component: _search_profile_search_profile_component__WEBPACK_IMPORTED_MODULE_6__["SearchProfileComponent"] },
    { path: 'EditBtech/:username', component: _education_edit_education_edit_component__WEBPACK_IMPORTED_MODULE_7__["EducationEditComponent"] },
    { path: 'EditTitle/:username', component: _title_edit_title_edit_component__WEBPACK_IMPORTED_MODULE_10__["TitleEditComponent"] },
    { path: 'EditExperience/:username', component: _experience_edit_experience_edit_component__WEBPACK_IMPORTED_MODULE_8__["ExperienceEditComponent"] },
    { path: 'EditProject/:username', component: _project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProjectEditComponent"] },
    { path: '', component: _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_3__["StartPageComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-typed-js */ "./node_modules/ngx-typed-js/fesm2015/ngx-typed-js.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./start-page/start-page.component */ "./src/app/start-page/start-page.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile.service */ "./src/app/profile.service.ts");
/* harmony import */ var _search_profile_search_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./search-profile/search-profile.component */ "./src/app/search-profile/search-profile.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _education_edit_education_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./education-edit/education-edit.component */ "./src/app/education-edit/education-edit.component.ts");
/* harmony import */ var _experience_edit_experience_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./experience-edit/experience-edit.component */ "./src/app/experience-edit/experience-edit.component.ts");
/* harmony import */ var _project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./project-edit/project-edit.component */ "./src/app/project-edit/project-edit.component.ts");
/* harmony import */ var _title_edit_title_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./title-edit/title-edit.component */ "./src/app/title-edit/title-edit.component.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
            _start_page_start_page_component__WEBPACK_IMPORTED_MODULE_10__["StartPageComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_12__["SignupComponent"],
            _search_profile_search_profile_component__WEBPACK_IMPORTED_MODULE_14__["SearchProfileComponent"],
            _education_edit_education_edit_component__WEBPACK_IMPORTED_MODULE_16__["EducationEditComponent"],
            _experience_edit_experience_edit_component__WEBPACK_IMPORTED_MODULE_17__["ExperienceEditComponent"],
            _project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_18__["ProjectEditComponent"],
            _title_edit_title_edit_component__WEBPACK_IMPORTED_MODULE_19__["TitleEditComponent"]
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            ngx_typed_js__WEBPACK_IMPORTED_MODULE_6__["NgxTypedJsModule"]
        ],
        providers: [_profile_service__WEBPACK_IMPORTED_MODULE_13__["ProfileService"], _auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthGuard = class AuthGuard {
    canActivate(next, state) {
        return true;
    }
};
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/education-edit/education-edit.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/education-edit/education-edit.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bgc {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: auto;\n  background-color: #F0F0F0;\n}\n\n#login {\n  margin: 0 auto;\n  border-radius: 10px;\n  margin-top: 80px;\n  width: 800px;\n  height: 500px;\n  background-color: #fff;\n}\n\nform {\n  padding-top: 200px;\n  padding-left: 300px;\n}\n\ninput {\n  outline: 0;\n  border-width: 0 0 1.5px;\n  border-color: blue;\n}\n\ninput:focus {\n  border-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uLWVkaXQvQzpcXFVzZXJzXFxraWl0XFxWaWRlb3NcXG15X3Byb2ZpbGVcXG15cHJvZmlsZS9zcmNcXGFwcFxcZWR1Y2F0aW9uLWVkaXRcXGVkdWNhdGlvbi1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZHVjYXRpb24tZWRpdC9lZHVjYXRpb24tZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QUREQTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkU7RUFDRSxtQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvZWR1Y2F0aW9uLWVkaXQvZWR1Y2F0aW9uLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmdje1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGMEYwRjA7XHJcbn1cclxuI2xvZ2lue1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7IFxyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuZm9ybXtcclxuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzAwcHg7XHJcbn1cclxuaW5wdXQge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlci13aWR0aDogMCAwIDEuNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xyXG4gIH1cclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuXHJcbiAgIiwiI2JnYyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcbn1cblxuI2xvZ2luIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuZm9ybSB7XG4gIHBhZGRpbmctdG9wOiAyMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzMDBweDtcbn1cblxuaW5wdXQge1xuICBvdXRsaW5lOiAwO1xuICBib3JkZXItd2lkdGg6IDAgMCAxLjVweDtcbiAgYm9yZGVyLWNvbG9yOiBibHVlO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XG59Il19 */"

/***/ }),

/***/ "./src/app/education-edit/education-edit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/education-edit/education-edit.component.ts ***!
  \************************************************************/
/*! exports provided: EducationEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationEditComponent", function() { return EducationEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let EducationEditComponent = class EducationEditComponent {
    constructor(route, user, router) {
        this.route = route;
        this.user = user;
        this.router = router;
        this.username = this.route.snapshot.params['username'];
    }
    ngOnInit() {
    }
    UpdateEducation(event) {
        const Btech = event.target.querySelector('#Btech').value;
        const twelve = event.target.querySelector('#twelve').value;
        const ten = event.target.querySelector('#ten').value;
        this.user.EditEducaton(Btech, twelve, ten, this.username).subscribe(data => {
            console.log(data);
        });
        alert('Education Details Update');
        this.router.navigate(['profile', this.username]);
    }
};
EducationEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EducationEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-education-edit',
        template: __webpack_require__(/*! raw-loader!./education-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/education-edit/education-edit.component.html"),
        styles: [__webpack_require__(/*! ./education-edit.component.scss */ "./src/app/education-edit/education-edit.component.scss")]
    })
], EducationEditComponent);



/***/ }),

/***/ "./src/app/experience-edit/experience-edit.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/experience-edit/experience-edit.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 100%;\n  height: 100%;\n  display: table;\n  position: absolute;\n}\n\n#divleft {\n  width: 28%;\n  height: 100%;\n  float: none;\n  display: table-cell;\n  height: auto;\n  background-color: #0f2177;\n}\n\n#divright {\n  background-color: #fffdf0;\n  height: 100%;\n  float: none;\n  display: table-cell;\n  height: auto;\n  width: 72%;\n}\n\n#websitename {\n  margin-top: 2%;\n  margin-bottom: 50%;\n  margin-right: 25%;\n  color: #fffdf0;\n  float: right;\n}\n\n#LogOut {\n  margin-top: 2%;\n  margin-right: 3%;\n  border-radius: 30px;\n  background-color: #0f2177;\n  display: block;\n  color: #fffdf0;\n  border: 0;\n  outline: none;\n  padding: 1% 2% 1% 2%;\n  float: right;\n}\n\n#username {\n  margin-top: 23%;\n  margin-left: 21%;\n  color: #0f2177;\n  font-weight: 450;\n}\n\n#status {\n  margin-left: 2%;\n  color: #0f2177;\n  font-weight: 300;\n}\n\n#about {\n  margin-top: 5%;\n  margin-left: 2%;\n  font-weight: 400;\n  color: #0f2177;\n  line-height: 28px;\n}\n\n#Edit {\n  margin-right: 4%;\n  margin-top: -5%;\n  border-radius: 30px;\n  background-color: #0f2177;\n  display: block;\n  color: #fffdf0;\n  border: 0;\n  outline: none;\n  padding: 1% 2% 1% 2%;\n  float: right;\n}\n\n#Save {\n  border-radius: 30px;\n  background-color: #0f2177;\n  display: block;\n  color: #fffdf0;\n  border: 0;\n  outline: none;\n  width: 50%;\n  padding: 1% 2% 1% 2%;\n}\n\n#Company {\n  padding: 7px;\n  width: 50%;\n}\n\n#Role {\n  padding: 7px;\n  width: 50%;\n}\n\n#Locations {\n  padding: 6px;\n  width: 50%;\n}\n\n#dateOfBirth1 {\n  padding: 6px;\n  width: 50%;\n}\n\n#dateOfBirth2 {\n  padding: 6px;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZS1lZGl0L0M6XFxVc2Vyc1xca2lpdFxcVmlkZW9zXFxteV9wcm9maWxlXFxteXByb2ZpbGUvc3JjXFxhcHBcXGV4cGVyaWVuY2UtZWRpdFxcZXhwZXJpZW5jZS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9leHBlcmllbmNlLWVkaXQvZXhwZXJpZW5jZS1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsVUFBQTtBQ0RKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FDS0o7O0FESEE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQ01KOztBREhBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUNNSjs7QURKQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDT0o7O0FETEE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQ1FKOztBRE5BO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UtZWRpdC9leHBlcmllbmNlLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2NvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuI2RpdmxlZnR7XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgLy9vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYyMTc3O1xyXG4gICAgLy9vdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG4jZGl2cmlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZGYwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgLy9vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICB3aWR0aDogNzIlO1xyXG59XHJcbiN3ZWJzaXRlbmFtZXtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XHJcbiAgICBjb2xvcjogI2ZmZmRmMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuI0xvZ091dHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYyMTc3O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZmRmMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxJSAyJSAxJSAyJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4jdXNlcm5hbWV7XHJcbiAgICBtYXJnaW4tdG9wOiAyMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjElO1xyXG4gICAgY29sb3I6ICMwZjIxNzc7XHJcbiAgICBmb250LXdlaWdodDogNDUwO1xyXG59XHJcbiNzdGF0dXN7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBjb2xvcjogIzBmMjE3NztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuI2Fib3V0e1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwZjIxNzc7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG4jRWRpdHtcclxuICAgIG1hcmdpbi1yaWdodDogNCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMjE3NztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmZkZjA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMSUgMiUgMSUgMiU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuI1NhdmV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMjE3NztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmZkZjA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDElIDIlIDElIDIlOyAgXHJcbn1cclxuI0NvbXBhbnl7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB3aWR0aDogNTAlOyAgICBcclxuICAgXHJcbn1cclxuI1JvbGV7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbiNMb2NhdGlvbnN7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbiNkYXRlT2ZCaXJ0aDF7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbiNkYXRlT2ZCaXJ0aDJ7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5cclxuXHJcbiAgIiwiI2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNkaXZsZWZ0IHtcbiAgd2lkdGg6IDI4JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYyMTc3O1xufVxuXG4jZGl2cmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZGYwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBub25lO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3MiU7XG59XG5cbiN3ZWJzaXRlbmFtZSB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tYm90dG9tOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMjUlO1xuICBjb2xvcjogI2ZmZmRmMDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jTG9nT3V0IHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjIxNzc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2ZmZmRmMDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxJSAyJSAxJSAyJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jdXNlcm5hbWUge1xuICBtYXJnaW4tdG9wOiAyMyU7XG4gIG1hcmdpbi1sZWZ0OiAyMSU7XG4gIGNvbG9yOiAjMGYyMTc3O1xuICBmb250LXdlaWdodDogNDUwO1xufVxuXG4jc3RhdHVzIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBjb2xvcjogIzBmMjE3NztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuI2Fib3V0IHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwZjIxNzc7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG4jRWRpdCB7XG4gIG1hcmdpbi1yaWdodDogNCU7XG4gIG1hcmdpbi10b3A6IC01JTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMjE3NztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmZGYwO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDElIDIlIDElIDIlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNTYXZlIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMjE3NztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmZGYwO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDElIDIlIDElIDIlO1xufVxuXG4jQ29tcGFueSB7XG4gIHBhZGRpbmc6IDdweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuI1JvbGUge1xuICBwYWRkaW5nOiA3cHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbiNMb2NhdGlvbnMge1xuICBwYWRkaW5nOiA2cHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbiNkYXRlT2ZCaXJ0aDEge1xuICBwYWRkaW5nOiA2cHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbiNkYXRlT2ZCaXJ0aDIge1xuICBwYWRkaW5nOiA2cHg7XG4gIHdpZHRoOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/experience-edit/experience-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/experience-edit/experience-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: ExperienceEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceEditComponent", function() { return ExperienceEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile.service.ts");




let ExperienceEditComponent = class ExperienceEditComponent {
    constructor(route, user, router) {
        this.route = route;
        this.user = user;
        this.router = router;
        this.username = this.route.snapshot.params['username'];
    }
    ngOnInit() {
    }
    UpdateExperience(event) {
        const Company = event.target.querySelector('#Company').value;
        const Role = event.target.querySelector('#Role').value;
        const Locations = event.target.querySelector('#Locations').value;
        const FromDate = event.target.querySelector('#dateOfBirth1').value;
        const ToDate = event.target.querySelector('#dateOfBirth2').value;
        console.log(Company);
        console.log(Role);
        console.log(Locations);
        console.log(FromDate);
        console.log(ToDate);
        this.user.EditExperience(this.username, Role, Company, Locations, FromDate, ToDate).subscribe(data => {
            if (data != null) {
                alert('Experience Added');
                this.router.navigate(['/profile', this.username]);
            }
        });
    }
    HomePage() {
        return this.router.navigate(['profile', this.username]);
    }
};
ExperienceEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ExperienceEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience-edit',
        template: __webpack_require__(/*! raw-loader!./experience-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/experience-edit/experience-edit.component.html"),
        styles: [__webpack_require__(/*! ./experience-edit.component.scss */ "./src/app/experience-edit/experience-edit.component.scss")]
    })
], ExperienceEditComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-menu ul li a {\n  color: #000;\n  display: block;\n  font-weight: 700;\n  padding: 30px 20px;\n  text-transform: uppercase;\n}\n\n.main-menu ul li {\n  display: inline-block;\n  float: right;\n}\n\nheader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 11;\n}\n\n.logo a {\n  color: #000;\n  display: inline-block;\n  font-size: 30px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.logo {\n  margin-top: 20px;\n  transition: all 0.3s ease 0s;\n}\n\nheader.sticky {\n  background: none repeat scroll 0 0;\n  position: fixed;\n  background-color: #fff;\n}\n\n.sticky .main-menu ul li a {\n  padding: 10px 10px;\n}\n\n.sticky .logo {\n  margin-top: 10px;\n}\n\n#resize {\n  color: #000;\n}\n\n.about {\n  font-family: Calibri;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xca2lpdFxcVmlkZW9zXFxteV9wcm9maWxlXFxteXByb2ZpbGUvc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNDRDs7QURDQTtFQUNDLHFCQUFBO0VBQ0csWUFBQTtBQ0VKOztBREFBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDR0Q7O0FEREE7RUFDQyxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ0lEOztBREZBO0VBQ0EsZ0JBQUE7RUFDRSw0QkFBQTtBQ0tGOztBREhBO0VBQ0ksa0NBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNNSjs7QURKSTtFQUNJLGtCQUFBO0FDT1I7O0FETEk7RUFDSSxnQkFBQTtBQ1FSOztBRE5JO0VBQ0EsV0FBQTtBQ1NKOztBRFBJO0VBQ0ksb0JBQUE7QUNVUiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1tZW51IHVsIGxpIGEge1xyXG5cdGNvbG9yOiMwMDA7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRwYWRkaW5nOiAzMHB4IDIwcHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4ubWFpbi1tZW51IHVsIGxpe1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5oZWFkZXJ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHotaW5kZXg6IDExO1xyXG59XHJcbi5sb2dvIGF7XHJcbiBjb2xvcjogIzAwMDtcclxuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuIGZvbnQtc2l6ZTogMzBweDtcclxuIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbi5sb2dve1xyXG5tYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XHJcbn1cclxuaGVhZGVyLnN0aWNreXtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLnN0aWNreSAubWFpbi1tZW51IHVsIGxpIGF7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnN0aWNreSAubG9nb3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgI3Jlc2l6ZXtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgfVxyXG4gICAgLmFib3V0e1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4gICAgfSIsIi5tYWluLW1lbnUgdWwgbGkgYSB7XG4gIGNvbG9yOiAjMDAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMzBweCAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubWFpbi1tZW51IHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTE7XG59XG5cbi5sb2dvIGEge1xuICBjb2xvcjogIzAwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuaGVhZGVyLnN0aWNreSB7XG4gIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLnN0aWNreSAubWFpbi1tZW51IHVsIGxpIGEge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG59XG5cbi5zdGlja3kgLmxvZ28ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4jcmVzaXplIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5hYm91dCB7XG4gIGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NavbarComponent = class NavbarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    LoggingOut() {
        this.router.navigate(['']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/profile.service.ts":
/*!************************************!*\
  !*** ./src/app/profile.service.ts ***!
  \************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProfileService = class ProfileService {
    constructor(http) {
        this.http = http;
    }
    GetProfile(uname) {
        return this.http.get(`/profile/${uname}`);
    }
    Authenticate(username, password) {
        return this.http.post(`/authenticate`, {
            username,
            password
        });
    }
    DeleteSkill(user, skill) {
        return this.http.delete(`/profile/deleteSkill/${user}/${skill}`);
    }
    DeleteExperience(username, company) {
        return this.http.delete(`/profile/deleteExperience/${username}/${company}`);
    }
    SearchTrue(name) {
        return this.http.post(`/searchprofile`, {
            name
        });
    }
    AddSkill(name, skill) {
        return this.http.get(`/profile/AddSkill/${name}/${skill}`);
    }
    AddStatus(name, status) {
        return this.http.post('/EditTitle', {
            name,
            status
        });
    }
    AddProject(name, title, Description, URL) {
        return this.http.post('/AddProject', {
            name,
            title,
            Description,
            URL
        });
    }
    DeleteProject(name, title) {
        return this.http.delete(`/profile/deleteProject/${name}/${title}`);
    }
    SearchUser(name) {
        return this.http.get(`/searchprofile/${name}`);
    }
    RegisterUser(username, password) {
        return this.http.post('/newuser', {
            username,
            password
        });
    }
    EditEducaton(Btech, Twelve, Ten, username) {
        return this.http.post('/EditEducation', {
            username,
            Btech,
            Twelve,
            Ten
        });
    }
    EditExperience(username, Role, company, location, from, to) {
        return this.http.post('/EditExperience', {
            username,
            Role,
            company,
            location,
            from,
            to
        });
    }
    EditTitle(username, Status, Description) {
        return this.http.post('/EditTitle', {
            username,
            Status,
            Description
        });
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfileService);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 100%;\n  height: 100%;\n  display: table;\n  position: absolute;\n}\n\n#divleft {\n  width: 28%;\n  float: none;\n  display: table-cell;\n  height: auto;\n  background-color: #0f2177;\n}\n\n#divright {\n  background-color: #fffdf0;\n  float: none;\n  display: table-cell;\n  height: auto;\n  width: 72%;\n}\n\n#websitename {\n  margin-top: 2%;\n  margin-right: 25%;\n  color: #fffdf0;\n  float: right;\n}\n\n#profilepic {\n  margin-left: 5%;\n  border-radius: 50%;\n}\n\n#LogOut {\n  margin-top: 2%;\n  margin-right: 3%;\n  border-radius: 30px;\n  background-color: #0f2177;\n  display: block;\n  color: #fffdf0;\n  border: 0;\n  outline: none;\n  padding: 1% 2% 1% 2%;\n  float: right;\n}\n\n#username {\n  margin-top: 23%;\n  margin-left: 2%;\n  color: #0f2177;\n  font-weight: 450;\n}\n\n#status {\n  margin-left: 2%;\n  color: #0f2177;\n  font-weight: 300;\n}\n\n#about {\n  margin-top: 5%;\n  margin-left: 2%;\n  font-weight: 400;\n  color: #0f2177;\n  line-height: 28px;\n}\n\n#skill {\n  color: #fffdf0;\n  margin-left: -10%;\n}\n\n#skill-contents {\n  margin-top: 23%;\n}\n\n#skill-list {\n  margin-top: -5%;\n}\n\n#skill-content {\n  margin-top: 3%;\n  margin-left: -2%;\n  list-style: none;\n  font-weight: 400;\n  color: #0f2177;\n}\n\n#experience {\n  color: #fffdf0;\n  margin-left: -16%;\n}\n\n#exp {\n  margin-top: -12%;\n}\n\n#experience-contents {\n  margin-top: 20%;\n}\n\n#experience-content {\n  margin-top: 10%;\n  margin-left: 0;\n  list-style: none;\n  color: #0f2177;\n}\n\n#position {\n  font-weight: 400;\n  margin-left: -2%;\n}\n\n#company {\n  font-weight: 300;\n  margin-left: -2%;\n}\n\n#date {\n  margin-left: -2%;\n}\n\n#job-decription {\n  margin-left: -2%;\n  margin-right: 3%;\n  font-weight: 400;\n  color: #0f2177;\n  line-height: 28px;\n}\n\n#project {\n  color: #fffdf0;\n  margin-left: -14%;\n}\n\n#pro {\n  margin-top: -12%;\n}\n\n#project-contents {\n  margin-top: 30%;\n}\n\n#project-content {\n  margin-top: 10%;\n  margin-left: 0;\n  list-style: none;\n  color: #0f2177;\n}\n\n#project-title {\n  font-weight: 400;\n  margin-left: -2%;\n}\n\n#project-desc {\n  margin-left: -2%;\n  margin-right: 3%;\n  font-weight: 400;\n  color: #0f2177;\n  line-height: 28px;\n}\n\n#project-link {\n  margin-left: -2%;\n}\n\n#Edit {\n  margin-right: 4%;\n  margin-top: -5%;\n  border-radius: 30px;\n  background-color: #0f2177;\n  display: block;\n  color: #fffdf0;\n  border: 0;\n  outline: none;\n  padding: 1% 2% 1% 2%;\n  float: right;\n}\n\n#Delete {\n  margin-right: 4%;\n  margin-top: -3%;\n  float: right;\n  border-radius: 30px;\n  background-color: #c40000;\n  display: block;\n  color: #fffdf0;\n  border: 0;\n  outline: none;\n  padding: 1% 2% 1% 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9DOlxcVXNlcnNcXGtpaXRcXFZpZGVvc1xcbXlfcHJvZmlsZVxcbXlwcm9maWxlL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsVUFBQTtBQ0RKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDS0o7O0FESEE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURIQTtFQUNJLGVBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7QUNPSjs7QURMQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDUUo7O0FETkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNTSjs7QURQQTtFQUNJLGdCQUFBO0FDVUo7O0FEUkE7RUFDSSxlQUFBO0FDV0o7O0FEVEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1lKOztBRFZBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ2FKOztBRFhBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ2NKOztBRFpBO0VBQ0ksZ0JBQUE7QUNlSjs7QURiQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ2dCSjs7QURkQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ2lCSjs7QURmQTtFQUNJLGdCQUFBO0FDa0JKOztBRGhCQTtFQUNFLGVBQUE7QUNtQkY7O0FEaEJBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNtQko7O0FEakJBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ29CSjs7QURsQkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNxQko7O0FEbkJBO0VBQ0ksZ0JBQUE7QUNzQko7O0FEcEJBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUN1Qko7O0FEckJBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUN3QkoiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2NvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuI2RpdmxlZnR7XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgLy9vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYyMTc3O1xyXG4gICAgLy9vdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG4jZGl2cmlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZGYwO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgLy9vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICB3aWR0aDogNzIlO1xyXG59XHJcbiN3ZWJzaXRlbmFtZXtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XHJcbiAgICBjb2xvcjogI2ZmZmRmMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4jcHJvZmlsZXBpY3tcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4jTG9nT3V0e1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjIxNzc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZmZmZGYwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDElIDIlIDElIDIlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiN1c2VybmFtZXtcclxuICAgIG1hcmdpbi10b3A6IDIzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIGNvbG9yOiAjMGYyMTc3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQ1MDtcclxufVxyXG4jc3RhdHVze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgY29sb3I6ICMwZjIxNzc7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbiNhYm91dHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMGYyMTc3O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuI3NraWxse1xyXG4gICAgY29sb3I6ICNmZmZkZjA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwJTtcclxuICAgIC8vbWFyZ2luLXRvcDogMjAlO1xyXG59XHJcbiNza2lsbC1jb250ZW50c3tcclxuICAgIG1hcmdpbi10b3A6IDIzJTtcclxufVxyXG4jc2tpbGwtbGlzdHtcclxuICAgIG1hcmdpbi10b3A6IC01JTtcclxufVxyXG4jc2tpbGwtY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwZjIxNzc7XHJcbn1cclxuI2V4cGVyaWVuY2V7XHJcbiAgICBjb2xvcjogI2ZmZmRmMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTYlO1xyXG59XHJcbiNleHB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTIlO1xyXG59XHJcbiNleHBlcmllbmNlLWNvbnRlbnRze1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG59XHJcbiNleHBlcmllbmNlLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBmMjE3NztcclxufVxyXG4jcG9zaXRpb257XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcclxufVxyXG4jY29tcGFueXtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIlO1xyXG59XHJcbiNkYXRle1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcclxufVxyXG4jam9iLWRlY3JpcHRpb257XHJcbiAgICBtYXJnaW4tbGVmdDogLTIlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzBmMjE3NztcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcbiNwcm9qZWN0e1xyXG4gICAgY29sb3I6ICNmZmZkZjA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE0JTtcclxufVxyXG4jcHJve1xyXG4gICAgbWFyZ2luLXRvcDogLTEyJTtcclxufVxyXG4jcHJvamVjdC1jb250ZW50c3tcclxuICBtYXJnaW4tdG9wOiAzMCU7IFxyXG5cclxufVxyXG4jcHJvamVjdC1jb250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6ICMwZjIxNzc7XHJcbn1cclxuI3Byb2plY3QtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcclxufVxyXG4jcHJvamVjdC1kZXNje1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwZjIxNzc7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG4jcHJvamVjdC1saW5re1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcclxufVxyXG4jRWRpdHtcclxuICAgIG1hcmdpbi1yaWdodDogNCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMjE3NztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmZkZjA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMSUgMiUgMSUgMiU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuI0RlbGV0ZXtcclxuICAgIG1hcmdpbi1yaWdodDogNCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMyU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0MDAwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmZkZjA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMSUgMiUgMSUgMiU7XHJcbn1cclxuIiwiI2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNkaXZsZWZ0IHtcbiAgd2lkdGg6IDI4JTtcbiAgZmxvYXQ6IG5vbmU7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMjE3Nztcbn1cblxuI2RpdnJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmMDtcbiAgZmxvYXQ6IG5vbmU7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDcyJTtcbn1cblxuI3dlYnNpdGVuYW1lIHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1yaWdodDogMjUlO1xuICBjb2xvcjogI2ZmZmRmMDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jcHJvZmlsZXBpYyB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4jTG9nT3V0IHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjIxNzc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2ZmZmRmMDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxJSAyJSAxJSAyJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jdXNlcm5hbWUge1xuICBtYXJnaW4tdG9wOiAyMyU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgY29sb3I6ICMwZjIxNzc7XG4gIGZvbnQtd2VpZ2h0OiA0NTA7XG59XG5cbiNzdGF0dXMge1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIGNvbG9yOiAjMGYyMTc3O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4jYWJvdXQge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzBmMjE3NztcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbiNza2lsbCB7XG4gIGNvbG9yOiAjZmZmZGYwO1xuICBtYXJnaW4tbGVmdDogLTEwJTtcbn1cblxuI3NraWxsLWNvbnRlbnRzIHtcbiAgbWFyZ2luLXRvcDogMjMlO1xufVxuXG4jc2tpbGwtbGlzdCB7XG4gIG1hcmdpbi10b3A6IC01JTtcbn1cblxuI3NraWxsLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAzJTtcbiAgbWFyZ2luLWxlZnQ6IC0yJTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwZjIxNzc7XG59XG5cbiNleHBlcmllbmNlIHtcbiAgY29sb3I6ICNmZmZkZjA7XG4gIG1hcmdpbi1sZWZ0OiAtMTYlO1xufVxuXG4jZXhwIHtcbiAgbWFyZ2luLXRvcDogLTEyJTtcbn1cblxuI2V4cGVyaWVuY2UtY29udGVudHMge1xuICBtYXJnaW4tdG9wOiAyMCU7XG59XG5cbiNleHBlcmllbmNlLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBjb2xvcjogIzBmMjE3Nztcbn1cblxuI3Bvc2l0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IC0yJTtcbn1cblxuI2NvbXBhbnkge1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tbGVmdDogLTIlO1xufVxuXG4jZGF0ZSB7XG4gIG1hcmdpbi1sZWZ0OiAtMiU7XG59XG5cbiNqb2ItZGVjcmlwdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAtMiU7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMGYyMTc3O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuI3Byb2plY3Qge1xuICBjb2xvcjogI2ZmZmRmMDtcbiAgbWFyZ2luLWxlZnQ6IC0xNCU7XG59XG5cbiNwcm8ge1xuICBtYXJnaW4tdG9wOiAtMTIlO1xufVxuXG4jcHJvamVjdC1jb250ZW50cyB7XG4gIG1hcmdpbi10b3A6IDMwJTtcbn1cblxuI3Byb2plY3QtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiAjMGYyMTc3O1xufVxuXG4jcHJvamVjdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1sZWZ0OiAtMiU7XG59XG5cbiNwcm9qZWN0LWRlc2Mge1xuICBtYXJnaW4tbGVmdDogLTIlO1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzBmMjE3NztcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG5cbiNwcm9qZWN0LWxpbmsge1xuICBtYXJnaW4tbGVmdDogLTIlO1xufVxuXG4jRWRpdCB7XG4gIG1hcmdpbi1yaWdodDogNCU7XG4gIG1hcmdpbi10b3A6IC01JTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMjE3NztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmZGYwO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDElIDIlIDElIDIlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNEZWxldGUge1xuICBtYXJnaW4tcmlnaHQ6IDQlO1xuICBtYXJnaW4tdG9wOiAtMyU7XG4gIGZsb2F0OiByaWdodDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0MDAwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmZGYwO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDElIDIlIDElIDIlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProfileComponent = class ProfileComponent {
    constructor(route, user, router) {
        this.route = route;
        this.user = user;
        this.router = router;
        this.name = this.route.snapshot.params['uname'];
    }
    ngOnInit() {
        // Initialise it when the component is rendered.
        this.getProfileUser();
    }
    LoggingOut() {
        this.router.navigate(['']);
    }
    // Get user all details. 
    getProfileUser() {
        this.user.GetProfile(this.name).subscribe(data => {
            this.UserProfile = data;
        });
    }
    deleteExperience(username, company) {
        this.user.DeleteExperience(username, company).subscribe(data => {
            console.log(data);
            if (data != null)
                alert('Deleted Experience');
            this.ngOnInit();
        });
    }
    deleteSkills(name, skill) {
        this.user.DeleteSkill(name, skill).subscribe(data => {
            console.log(data);
            if (data != null)
                alert('Deleted');
            this.ngOnInit();
        });
    }
    AddSkills(name) {
        this.skill = prompt('Skill');
        console.log(name);
        if (this.skill != null) {
            this.user.AddSkill(name, this.skill).subscribe(data => {
                console.log(data);
            });
            this.ngOnInit();
        }
    }
    //Add Project
    AddProject(name) {
        return this.router.navigate(['EditProject', name]);
    }
    //Delete Project
    DeleteProject(name, title) {
        console.log(name);
        console.log(title);
        this.user.DeleteProject(name, title).subscribe(data => {
            console.log(data);
            if (data != null)
                alert('Deleted');
            this.ngOnInit();
        });
    }
    EditEdu(username) {
        return this.router.navigate(['EditBtech', username]);
    }
    AddExperience(username) {
        return this.router.navigate(['EditExperience', username]);
    }
    EditTitle(username) {
        return this.router.navigate(['EditTitle', username]);
        //  this.status = prompt('Status');
        // console.log(this.status);
        //  if(this.status != null){
        //    this.user.AddStatus(username,this.status).subscribe(data => {
        //      console.log(data);
        //    })
        //    this.ngOnInit(); 
        //  }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/project-edit/project-edit.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/project-edit/project-edit.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 100%;\n  height: 100%;\n  display: table;\n  position: absolute;\n}\n\n#divleft {\n  width: 28%;\n  height: 100%;\n  float: none;\n  display: table-cell;\n  height: auto;\n  background-color: #0f2177;\n}\n\n#divright {\n  background-color: #fffdf0;\n  height: 100%;\n  float: none;\n  display: table-cell;\n  height: auto;\n  width: 72%;\n}\n\n#websitename {\n  margin-top: 2%;\n  margin-bottom: 50%;\n  margin-right: 25%;\n  color: #fffdf0;\n  float: right;\n}\n\n#LogOut {\n  margin-top: 2%;\n  margin-right: 3%;\n  border-radius: 30px;\n  background-color: #0f2177;\n  display: block;\n  color: #fffdf0;\n  border: 0;\n  outline: none;\n  padding: 1% 2% 1% 2%;\n  float: right;\n}\n\n#username {\n  margin-top: 23%;\n  margin-left: 21%;\n  color: #0f2177;\n  font-weight: 450;\n}\n\n#status {\n  margin-left: 2%;\n  color: #0f2177;\n  font-weight: 300;\n}\n\n#about {\n  margin-top: 5%;\n  margin-left: 2%;\n  font-weight: 400;\n  color: #0f2177;\n  line-height: 28px;\n}\n\n#Edit {\n  margin-right: 4%;\n  margin-top: -5%;\n  border-radius: 30px;\n  background-color: #0f2177;\n  display: block;\n  color: #fffdf0;\n  border: 0;\n  outline: none;\n  padding: 1% 2% 1% 2%;\n  float: right;\n}\n\n#Save {\n  border-radius: 30px;\n  background-color: #0f2177;\n  display: block;\n  color: #fffdf0;\n  border: 0;\n  outline: none;\n  width: 50%;\n  padding: 1% 2% 1% 2%;\n}\n\n#Company {\n  padding: 7px;\n  width: 50%;\n}\n\n#Role {\n  padding: 7px;\n  height: 90px;\n  width: 50%;\n}\n\n#Locations {\n  padding: 6px;\n  width: 50%;\n}\n\n#dateOfBirth1 {\n  padding: 6px;\n  width: 50%;\n}\n\n#dateOfBirth2 {\n  padding: 6px;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1lZGl0L0M6XFxVc2Vyc1xca2lpdFxcVmlkZW9zXFxteV9wcm9maWxlXFxteXByb2ZpbGUvc3JjXFxhcHBcXHByb2plY3QtZWRpdFxccHJvamVjdC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0LWVkaXQvcHJvamVjdC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7QUNLSjs7QURIQTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0FDTUo7O0FESkE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQ09KOztBREpBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDT0o7O0FETEE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQ1FKOztBRE5BO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUNTSjs7QURQQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0LWVkaXQvcHJvamVjdC1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuI2RpdmxlZnR7XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgLy9vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYyMTc3O1xyXG4gICAgLy9vdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG4jZGl2cmlnaHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZGYwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgLy9vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OmF1dG87XHJcbiAgICB3aWR0aDogNzIlO1xyXG59XHJcbiN3ZWJzaXRlbmFtZXtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNSU7XHJcbiAgICBjb2xvcjogI2ZmZmRmMDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuI0xvZ091dHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYyMTc3O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZmRmMDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxJSAyJSAxJSAyJTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4jdXNlcm5hbWV7XHJcbiAgICBtYXJnaW4tdG9wOiAyMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjElO1xyXG4gICAgY29sb3I6ICMwZjIxNzc7XHJcbiAgICBmb250LXdlaWdodDogNDUwO1xyXG59XHJcbiNzdGF0dXN7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBjb2xvcjogIzBmMjE3NztcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuI2Fib3V0e1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwZjIxNzc7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG4jRWRpdHtcclxuICAgIG1hcmdpbi1yaWdodDogNCU7XHJcbiAgICBtYXJnaW4tdG9wOiAtNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMjE3NztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmZkZjA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMSUgMiUgMSUgMiU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuI1NhdmV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMjE3NztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmZkZjA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDElIDIlIDElIDIlOyAgXHJcbn1cclxuI0NvbXBhbnl7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB3aWR0aDogNTAlOyAgICBcclxuICAgXHJcbn1cclxuI1JvbGV7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbiNMb2NhdGlvbnN7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbiNkYXRlT2ZCaXJ0aDF7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbiNkYXRlT2ZCaXJ0aDJ7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59IiwiI2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNkaXZsZWZ0IHtcbiAgd2lkdGg6IDI4JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYyMTc3O1xufVxuXG4jZGl2cmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZGYwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBub25lO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3MiU7XG59XG5cbiN3ZWJzaXRlbmFtZSB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tYm90dG9tOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMjUlO1xuICBjb2xvcjogI2ZmZmRmMDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jTG9nT3V0IHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjIxNzc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2ZmZmRmMDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxJSAyJSAxJSAyJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jdXNlcm5hbWUge1xuICBtYXJnaW4tdG9wOiAyMyU7XG4gIG1hcmdpbi1sZWZ0OiAyMSU7XG4gIGNvbG9yOiAjMGYyMTc3O1xuICBmb250LXdlaWdodDogNDUwO1xufVxuXG4jc3RhdHVzIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBjb2xvcjogIzBmMjE3NztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuI2Fib3V0IHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwZjIxNzc7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG4jRWRpdCB7XG4gIG1hcmdpbi1yaWdodDogNCU7XG4gIG1hcmdpbi10b3A6IC01JTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMjE3NztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmZGYwO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDElIDIlIDElIDIlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNTYXZlIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMjE3NztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmZGYwO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDElIDIlIDElIDIlO1xufVxuXG4jQ29tcGFueSB7XG4gIHBhZGRpbmc6IDdweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuI1JvbGUge1xuICBwYWRkaW5nOiA3cHg7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuI0xvY2F0aW9ucyB7XG4gIHBhZGRpbmc6IDZweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuI2RhdGVPZkJpcnRoMSB7XG4gIHBhZGRpbmc6IDZweDtcbiAgd2lkdGg6IDUwJTtcbn1cblxuI2RhdGVPZkJpcnRoMiB7XG4gIHBhZGRpbmc6IDZweDtcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/project-edit/project-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/project-edit/project-edit.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEditComponent", function() { return ProjectEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProjectEditComponent = class ProjectEditComponent {
    constructor(route, user, router) {
        this.route = route;
        this.user = user;
        this.router = router;
        this.username = this.route.snapshot.params['username'];
    }
    ngOnInit() {
    }
    AddProject(event) {
        const title = event.target.querySelector('#Company').value;
        const Description = event.target.querySelector('#Description').value;
        const URL = event.target.querySelector('#Locations').value;
        console.log(title);
        console.log(Description);
        console.log(URL);
        console.log(this.username);
        this.user.AddProject(this.username, title, Description, URL).subscribe(data => {
            console.log(data);
        });
        alert('Project Added');
        this.router.navigate(['profile', this.username]);
    }
    HomePage() {
        return this.router.navigate(['profile', this.username]);
    }
};
ProjectEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProjectEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-edit',
        template: __webpack_require__(/*! raw-loader!./project-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/project-edit/project-edit.component.html"),
        styles: [__webpack_require__(/*! ./project-edit.component.scss */ "./src/app/project-edit/project-edit.component.scss")]
    })
], ProjectEditComponent);



/***/ }),

/***/ "./src/app/search-profile/search-profile.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/search-profile/search-profile.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 100%;\n  height: 100%;\n  display: table;\n  position: absolute;\n}\n\n#divleft {\n  width: 28%;\n  float: none;\n  display: table-cell;\n  height: auto;\n  background-color: #0f2177;\n}\n\n#divright {\n  background-color: #fffdf0;\n  float: none;\n  display: table-cell;\n  height: auto;\n  width: 72%;\n}\n\n#websitename {\n  margin-top: 2%;\n  margin-right: 25%;\n  color: #fffdf0;\n  float: right;\n}\n\n#profilepic {\n  margin-left: 5%;\n  border-radius: 50%;\n}\n\n#username {\n  margin-top: 23%;\n  margin-left: 2%;\n  color: #0f2177;\n  font-weight: 450;\n}\n\n#status {\n  margin-left: 2%;\n  color: #0f2177;\n  font-weight: 300;\n}\n\n#about {\n  margin-top: 5%;\n  margin-left: 2%;\n  font-weight: 400;\n  color: #0f2177;\n  line-height: 28px;\n}\n\n#skill {\n  color: #fffdf0;\n  margin-left: -10%;\n}\n\n#skill-contents {\n  margin-top: 23%;\n}\n\n#skill-list {\n  margin-top: -5%;\n}\n\n#skill-content {\n  margin-top: 3%;\n  margin-left: -2%;\n  list-style: none;\n  font-weight: 400;\n  color: #0f2177;\n}\n\n#experience {\n  color: #fffdf0;\n  margin-left: -16%;\n}\n\n#exp {\n  margin-top: -12%;\n}\n\n#experience-contents {\n  margin-top: 20%;\n}\n\n#experience-content {\n  margin-top: 10%;\n  margin-left: 0;\n  list-style: none;\n  color: #0f2177;\n}\n\n#position {\n  font-weight: 400;\n  margin-left: -2%;\n}\n\n#company {\n  font-weight: 300;\n  margin-left: -2%;\n}\n\n#date {\n  margin-left: -2%;\n}\n\n#job-decription {\n  margin-left: -2%;\n  margin-right: 3%;\n  font-weight: 400;\n  color: #0f2177;\n  line-height: 28px;\n}\n\n#project {\n  color: #fffdf0;\n  margin-left: -14%;\n}\n\n#pro {\n  margin-top: -12%;\n}\n\n#project-contents {\n  margin-top: 25%;\n}\n\n#project-content {\n  margin-top: 10%;\n  margin-left: 0;\n  list-style: none;\n  color: #0f2177;\n}\n\n#project-title {\n  font-weight: 400;\n  margin-left: -2%;\n}\n\n#project-desc {\n  margin-left: -2%;\n  margin-right: 3%;\n  font-weight: 400;\n  color: #0f2177;\n  line-height: 28px;\n}\n\n#project-link {\n  margin-left: -2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXByb2ZpbGUvQzpcXFVzZXJzXFxraWl0XFxWaWRlb3NcXG15X3Byb2ZpbGVcXG15cHJvZmlsZS9zcmNcXGFwcFxcc2VhcmNoLXByb2ZpbGVcXHNlYXJjaC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWFyY2gtcHJvZmlsZS9zZWFyY2gtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxVQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDTUo7O0FESEE7RUFDSSxlQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0FDT0o7O0FETEE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1FKOztBRE5BO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDU0o7O0FEUEE7RUFDSSxnQkFBQTtBQ1VKOztBRFJBO0VBQ0ksZUFBQTtBQ1dKOztBRFRBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNZSjs7QURWQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNhSjs7QURYQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNjSjs7QURaQTtFQUNJLGdCQUFBO0FDZUo7O0FEYkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNnQko7O0FEZEE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNpQko7O0FEZkE7RUFDSSxnQkFBQTtBQ2tCSjs7QURoQkE7RUFDRSxlQUFBO0FDbUJGOztBRGhCQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDbUJKOztBRGpCQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNvQko7O0FEbEJBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDcUJKOztBRG5CQTtFQUNJLGdCQUFBO0FDc0JKIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXByb2ZpbGUvc2VhcmNoLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4jZGl2bGVmdHtcclxuICAgIHdpZHRoOiAyOCU7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAvL292ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjIxNzc7XHJcbiAgICAvL292ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcbiNkaXZyaWdodHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZkZjA7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAvL292ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIHdpZHRoOiA3MiU7XHJcbn1cclxuI3dlYnNpdGVuYW1le1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcclxuICAgIGNvbG9yOiAjZmZmZGYwO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiNwcm9maWxlcGlje1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbiN1c2VybmFtZXtcclxuICAgIG1hcmdpbi10b3A6IDIzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIGNvbG9yOiAjMGYyMTc3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQ1MDtcclxufVxyXG4jc3RhdHVze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgY29sb3I6ICMwZjIxNzc7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbiNhYm91dHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMGYyMTc3O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuI3NraWxse1xyXG4gICAgY29sb3I6ICNmZmZkZjA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwJTtcclxuICAgIC8vbWFyZ2luLXRvcDogMjAlO1xyXG59XHJcbiNza2lsbC1jb250ZW50c3tcclxuICAgIG1hcmdpbi10b3A6IDIzJTtcclxufVxyXG4jc2tpbGwtbGlzdHtcclxuICAgIG1hcmdpbi10b3A6IC01JTtcclxufVxyXG4jc2tpbGwtY29udGVudHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwZjIxNzc7XHJcbn1cclxuI2V4cGVyaWVuY2V7XHJcbiAgICBjb2xvcjogI2ZmZmRmMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTYlO1xyXG59XHJcbiNleHB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTIlO1xyXG59XHJcbiNleHBlcmllbmNlLWNvbnRlbnRze1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG59XHJcbiNleHBlcmllbmNlLWNvbnRlbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBmMjE3NztcclxufVxyXG4jcG9zaXRpb257XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcclxufVxyXG4jY29tcGFueXtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTIlO1xyXG59XHJcbiNkYXRle1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcclxufVxyXG4jam9iLWRlY3JpcHRpb257XHJcbiAgICBtYXJnaW4tbGVmdDogLTIlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzBmMjE3NztcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcbiNwcm9qZWN0e1xyXG4gICAgY29sb3I6ICNmZmZkZjA7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE0JTtcclxufVxyXG4jcHJve1xyXG4gICAgbWFyZ2luLXRvcDogLTEyJTtcclxufVxyXG4jcHJvamVjdC1jb250ZW50c3tcclxuICBtYXJnaW4tdG9wOiAyNSU7IFxyXG5cclxufVxyXG4jcHJvamVjdC1jb250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgY29sb3I6ICMwZjIxNzc7XHJcbn1cclxuI3Byb2plY3QtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcclxufVxyXG4jcHJvamVjdC1kZXNje1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICMwZjIxNzc7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG4jcHJvamVjdC1saW5re1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yJTtcclxufVxyXG4iLCIjY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogdGFibGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI2RpdmxlZnQge1xuICB3aWR0aDogMjglO1xuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYyMTc3O1xufVxuXG4jZGl2cmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZGYwO1xuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzIlO1xufVxuXG4jd2Vic2l0ZW5hbWUge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLXJpZ2h0OiAyNSU7XG4gIGNvbG9yOiAjZmZmZGYwO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNwcm9maWxlcGljIHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiN1c2VybmFtZSB7XG4gIG1hcmdpbi10b3A6IDIzJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBjb2xvcjogIzBmMjE3NztcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcbn1cblxuI3N0YXR1cyB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgY29sb3I6ICMwZjIxNzc7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbiNhYm91dCB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMGYyMTc3O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuI3NraWxsIHtcbiAgY29sb3I6ICNmZmZkZjA7XG4gIG1hcmdpbi1sZWZ0OiAtMTAlO1xufVxuXG4jc2tpbGwtY29udGVudHMge1xuICBtYXJnaW4tdG9wOiAyMyU7XG59XG5cbiNza2lsbC1saXN0IHtcbiAgbWFyZ2luLXRvcDogLTUlO1xufVxuXG4jc2tpbGwtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tbGVmdDogLTIlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzBmMjE3Nztcbn1cblxuI2V4cGVyaWVuY2Uge1xuICBjb2xvcjogI2ZmZmRmMDtcbiAgbWFyZ2luLWxlZnQ6IC0xNiU7XG59XG5cbiNleHAge1xuICBtYXJnaW4tdG9wOiAtMTIlO1xufVxuXG4jZXhwZXJpZW5jZS1jb250ZW50cyB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbn1cblxuI2V4cGVyaWVuY2UtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGNvbG9yOiAjMGYyMTc3O1xufVxuXG4jcG9zaXRpb24ge1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tbGVmdDogLTIlO1xufVxuXG4jY29tcGFueSB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1sZWZ0OiAtMiU7XG59XG5cbiNkYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IC0yJTtcbn1cblxuI2pvYi1kZWNyaXB0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IC0yJTtcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwZjIxNzc7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG4jcHJvamVjdCB7XG4gIGNvbG9yOiAjZmZmZGYwO1xuICBtYXJnaW4tbGVmdDogLTE0JTtcbn1cblxuI3BybyB7XG4gIG1hcmdpbi10b3A6IC0xMiU7XG59XG5cbiNwcm9qZWN0LWNvbnRlbnRzIHtcbiAgbWFyZ2luLXRvcDogMjUlO1xufVxuXG4jcHJvamVjdC1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgY29sb3I6ICMwZjIxNzc7XG59XG5cbiNwcm9qZWN0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IC0yJTtcbn1cblxuI3Byb2plY3QtZGVzYyB7XG4gIG1hcmdpbi1sZWZ0OiAtMiU7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMGYyMTc3O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cblxuI3Byb2plY3QtbGluayB7XG4gIG1hcmdpbi1sZWZ0OiAtMiU7XG59Il19 */"

/***/ }),

/***/ "./src/app/search-profile/search-profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/search-profile/search-profile.component.ts ***!
  \************************************************************/
/*! exports provided: SearchProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProfileComponent", function() { return SearchProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile.service.ts");





let SearchProfileComponent = class SearchProfileComponent {
    constructor(route, user, router) {
        this.user = user;
        this.router = router;
        this.name = route.snapshot.params['name'];
    }
    ngOnInit() {
        this.getProfileUser();
    }
    getProfileUser() {
        this.user.SearchUser(this.name).subscribe(data => {
            this.UserProfile = data;
        });
    }
    HomePage() {
        return this.router.navigate(['']);
    }
};
SearchProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SearchProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-profile',
        template: __webpack_require__(/*! raw-loader!./search-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/search-profile/search-profile.component.html"),
        styles: [__webpack_require__(/*! ./search-profile.component.scss */ "./src/app/search-profile/search-profile.component.scss")]
    })
], SearchProfileComponent);



/***/ }),

/***/ "./src/app/signup/signup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bgc {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  overflow: auto;\n  background-color: url('palm.jpg');\n}\n\n#login {\n  margin: 0 auto;\n  border-radius: 10px;\n  margin-top: 80px;\n  width: 800px;\n  height: 500px;\n  background-color: #fff;\n}\n\nform {\n  padding-top: 200px;\n  padding-left: 300px;\n}\n\ninput {\n  outline: 0;\n  border-width: 0 0 1.5px;\n  border-color: blue;\n}\n\ninput:focus {\n  border-color: green;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFxVc2Vyc1xca2lpdFxcVmlkZW9zXFxteV9wcm9maWxlXFxteXByb2ZpbGUvc3JjXFxhcHBcXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGRTtFQUNFLG1CQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JnY3tcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdXJsKC4uLy4uL2Fzc2V0cy9wYWxtLmpwZyk7XHJcbn1cclxuI2xvZ2lue1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7IFxyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuZm9ybXtcclxuICAgIHBhZGRpbmctdG9wOiAyMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMzAwcHg7XHJcbn1cclxuaW5wdXQge1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJvcmRlci13aWR0aDogMCAwIDEuNXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xyXG4gIH1cclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuXHJcbiAgIiwiI2JnYyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdXJsKC4uLy4uL2Fzc2V0cy9wYWxtLmpwZyk7XG59XG5cbiNsb2dpbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nLXRvcDogMjAwcHg7XG4gIHBhZGRpbmctbGVmdDogMzAwcHg7XG59XG5cbmlucHV0IHtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMS41cHg7XG4gIGJvcmRlci1jb2xvcjogYmx1ZTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IGdyZWVuO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SignupComponent = class SignupComponent {
    constructor(user, router) {
        this.user = user;
        this.router = router;
    }
    ngOnInit() {
    }
    registerUser(event) {
        const username = event.target.querySelector('#username').value;
        const password = event.target.querySelector('#password').value;
        const cpassword = event.target.querySelector('#cpassword').value;
        if (password == cpassword && username != "" && password != "" && cpassword != "") {
            return this.user.RegisterUser(username, password).subscribe(data => {
                if (data != null)
                    alert('Redirecting to Login Page');
                this.router.navigate(['']);
            });
        }
        else if (username == "")
            alert('Please type username');
        else if (password == "")
            alert('Please type password');
        else if (cpassword == "")
            alert('Please type confirm password');
        else
            alert('Please fill up the sign in form');
    }
};
SignupComponent.ctorParameters = () => [
    { type: _profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/signup/signup.component.scss")]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/start-page/start-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/start-page/start-page.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  margin: 0;\n  padding: 0;\n}\n\n.hero {\n  height: 100%;\n  width: 100%;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('palm.jpg');\n  background-position: center;\n  background-size: cover;\n  position: absolute;\n}\n\n.form-box {\n  width: 380px;\n  height: 480px;\n  position: relative;\n  margin: 6% auto;\n  background: #fff;\n  padding: 5px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n\n.button-box {\n  width: 220px;\n  margin: 35px auto;\n  position: relative;\n  box-shadow: 0 0 20px 9px #ff61241f;\n  border-radius: 30px;\n}\n\n.toggle-btn {\n  padding: 10px 30px;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  outline: none;\n  position: relative;\n}\n\n#btn {\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 110px;\n  height: 100%;\n  background: #6F99EC;\n  color: #fffdf0;\n  border-radius: 30px;\n  transition: 0.5s;\n}\n\n.input-group {\n  top: 180px;\n  position: absolute;\n  width: 280px;\n  transition: 0.5s;\n}\n\n.input-field {\n  width: 100%;\n  padding: 10px 0;\n  margin: 5px 0;\n  border-left: 0;\n  border-top: 0;\n  border-right: 0;\n  border-bottom: 1px solid #999;\n  outline: none;\n  background: transparent;\n}\n\n.submit-btn {\n  width: 85%;\n  padding: 10px 30px;\n  cursor: pointer;\n  display: block;\n  margin: auto;\n  background-color: #6F99EC;\n  border: 0;\n  outline: none;\n  border-radius: 30px;\n}\n\n#login {\n  left: 50px;\n}\n\n#register {\n  left: 450px;\n}\n\n#search {\n  padding: 10px 30px;\n  cursor: pointer;\n  background-color: #6F99EC;\n  border: 0;\n  outline: none;\n  border-radius: 30px;\n  margin-top: 80%;\n}\n\n#SearchInput {\n  padding: 10px 0;\n  margin-left: 19%;\n  margin-right: 2%;\n  border-left: 0;\n  border-top: 0;\n  border-right: 0;\n  border-bottom: 1px solid #999;\n  outline: none;\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhcnQtcGFnZS9DOlxcVXNlcnNcXGtpaXRcXFZpZGVvc1xcbXlfcHJvZmlsZVxcbXlwcm9maWxlL3NyY1xcYXBwXFxzdGFydC1wYWdlXFxzdGFydC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zdGFydC1wYWdlL3N0YXJ0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNwQ0Y7O0FEc0NBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSwwRkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ25DRjs7QURxQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNsQ0Y7O0FEb0NBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FDakNGOztBRG1DQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ2hDRjs7QURrQ0E7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDL0JGOztBRGlDQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQzlCRjs7QURnQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQzdCRjs7QUQrQkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUM1QkY7O0FEOEJBO0VBQ0UsVUFBQTtBQzNCRjs7QUQ2QkE7RUFDRSxXQUFBO0FDMUJGOztBRDRCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUN6QkY7O0FEMkJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ3hCRiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0LXBhZ2Uvc3RhcnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5tYWlucGFnZXtcclxuLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvcGFsbS5qcGcpO1xyXG4vLyAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgICAgdG9wOiAwO1xyXG4vLyAgICAgbGVmdDogMDtcclxuLy8gICAgIGJvdHRvbTogMDtcclxuLy8gICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbi8vICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4vLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5ib3h7XHJcbi8vICAgICBtYXJnaW46IDAgYXV0bztcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IFxyXG4vLyAgICAgbWFyZ2luLXRvcDogODBweDsgXHJcbi8vICAgICB3aWR0aDogNDAlO1xyXG4vLyAgICAgaGVpZ2h0OiA4MCU7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyB9XHJcbi8vIGZvcm17XHJcbi8vICAgICBwYWRkaW5nLXRvcDogMTMwcHg7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDE4NXB4O1xyXG4vLyB9XHJcbi8vIC5zZWNvbmRmb3Jte1xyXG4vLyAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbi8vIH1cclxuLy8gaW5wdXQge1xyXG4vLyAgICAgb3V0bGluZTogMDtcclxuLy8gICAgIGJvcmRlci13aWR0aDogMCAwIDEuNXB4O1xyXG4vLyAgICAgYm9yZGVyLWNvbG9yOiBibHVlO1xyXG4vLyAgIH1cclxuLy8gICBpbnB1dDpmb2N1cyB7XHJcbi8vICAgICBib3JkZXItY29sb3I6IGdyZWVuO1xyXG4vLyAgIH1cclxuXHJcbip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmhlcm97XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNCkscmdiYSgwLDAsMCwwLjQpKSx1cmwoLi4vLi4vYXNzZXRzL3BhbG0uanBnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLmZvcm0tYm94e1xyXG4gIHdpZHRoOiAzODBweDtcclxuICBoZWlnaHQ6IDQ4MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDYlIGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmJ1dHRvbi1ib3h7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIG1hcmdpbjogMzVweCBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2hhZG93OiAwIDAgMjBweCA5cHggI2ZmNjEyNDFmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuLnRvZ2dsZS1idG57XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuI2J0bntcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjNkY5OUVDO1xyXG4gIGNvbG9yOiAjZmZmZGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxufVxyXG4uaW5wdXQtZ3JvdXB7XHJcbiAgdG9wOiAxODBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuLmlucHV0LWZpZWxke1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBtYXJnaW46IDVweCAwO1xyXG4gIGJvcmRlci1sZWZ0OiAwO1xyXG4gIGJvcmRlci10b3A6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnN1Ym1pdC1idG57XHJcbiAgd2lkdGg6IDg1JTtcclxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkY5OUVDO1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuI2xvZ2lue1xyXG4gIGxlZnQ6IDUwcHg7XHJcbn1cclxuI3JlZ2lzdGVye1xyXG4gIGxlZnQ6IDQ1MHB4O1xyXG59XHJcbiNzZWFyY2h7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkY5OUVDO1xyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogODAlO1xyXG59XHJcbiNTZWFyY2hJbnB1dHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDE5JTtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gIGJvcmRlci1sZWZ0OiAwO1xyXG4gIGJvcmRlci10b3A6IDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn0iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaGVybyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNCksIHJnYmEoMCwgMCwgMCwgMC40KSksIHVybCguLi8uLi9hc3NldHMvcGFsbS5qcGcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmZvcm0tYm94IHtcbiAgd2lkdGg6IDM4MHB4O1xuICBoZWlnaHQ6IDQ4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNiUgYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5idXR0b24tYm94IHtcbiAgd2lkdGg6IDIyMHB4O1xuICBtYXJnaW46IDM1cHggYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAwIDAgMjBweCA5cHggI2ZmNjEyNDFmO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuXG4udG9nZ2xlLWJ0biB7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNidG4ge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM2Rjk5RUM7XG4gIGNvbG9yOiAjZmZmZGYwO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uaW5wdXQtZ3JvdXAge1xuICB0b3A6IDE4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyODBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIHdpZHRoOiA4NSU7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkY5OUVDO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbiNsb2dpbiB7XG4gIGxlZnQ6IDUwcHg7XG59XG5cbiNyZWdpc3RlciB7XG4gIGxlZnQ6IDQ1MHB4O1xufVxuXG4jc2VhcmNoIHtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2Rjk5RUM7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgbWFyZ2luLXRvcDogODAlO1xufVxuXG4jU2VhcmNoSW5wdXQge1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1hcmdpbi1sZWZ0OiAxOSU7XG4gIG1hcmdpbi1yaWdodDogMiU7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItdG9wOiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/start-page/start-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/start-page/start-page.component.ts ***!
  \****************************************************/
/*! exports provided: StartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPageComponent", function() { return StartPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile.service.ts");




let StartPageComponent = class StartPageComponent {
    //public type: any;
    constructor(router, user) {
        this.router = router;
        this.user = user;
    }
    ngOnInit() {
    }
    register() {
        console.log("Register");
        document.getElementById("login").style.left = "-400px";
        document.getElementById("register").style.left = "50px";
        document.getElementById("btn").style.left = "110px";
    }
    login() {
        console.log("Login");
        document.getElementById("login").style.left = "50px";
        document.getElementById("register").style.left = "450px";
        document.getElementById("btn").style.left = "0";
    }
    //Validation of the login User.
    Validate(event) {
        const username = event.target.querySelector('#loginusername').value;
        const password = event.target.querySelector('#loginpassword').value;
        if (!username && !password)
            return alert('Write username and password');
        if (!username)
            return alert('Write username');
        if (!password)
            return alert('Write password');
        this.user.Authenticate(username, password).subscribe(data => {
            if (data.success == true)
                return this.router.navigate(['/profile', username]);
            else
                return alert('Wrong password or username');
        });
    }
    registerUser(event) {
        const username = event.target.querySelector('#username').value;
        const password = event.target.querySelector('#password').value;
        const cpassword = event.target.querySelector('#cpassword').value;
        if (password == cpassword && username != "" && password != "" && cpassword != "") {
            return this.user.RegisterUser(username, password).subscribe(data => {
                if (data != null)
                    alert('Registered');
            });
        }
        else if (username == "")
            alert('Please type username');
        else if (password == "")
            alert('Please type password');
        else if (cpassword == "")
            alert('Please type confirm password');
        else
            alert('Please fill up the sign in form');
    }
    //SignUp process
    SignUp() {
        this.router.navigate(['/signup']);
    }
    //Search User 
    Search() {
        if (!this.name)
            return alert('Write username');
        this.user.SearchTrue(this.name).subscribe(data => {
            if (data.searchsuccess)
                return this.router.navigate(['/searchprofile', this.name]);
            else
                return alert('Username does not exits');
        });
    }
};
StartPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] }
];
StartPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start-page',
        template: __webpack_require__(/*! raw-loader!./start-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/start-page/start-page.component.html"),
        styles: [__webpack_require__(/*! ./start-page.component.scss */ "./src/app/start-page/start-page.component.scss")]
    })
], StartPageComponent);



/***/ }),

/***/ "./src/app/title-edit/title-edit.component.scss":
/*!******************************************************!*\
  !*** ./src/app/title-edit/title-edit.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\n  width: 100%;\n  height: 100%;\n  display: table;\n  position: absolute;\n}\n\n#divleft {\n  width: 28%;\n  height: 100%;\n  float: none;\n  display: table-cell;\n  height: auto;\n  background-color: #0f2177;\n}\n\n#divright {\n  background-color: #fffdf0;\n  height: 100%;\n  float: none;\n  display: table-cell;\n  height: auto;\n  width: 72%;\n}\n\n#websitename {\n  margin-top: 2%;\n  margin-bottom: 50%;\n  margin-right: 25%;\n  color: #fffdf0;\n  float: right;\n}\n\n#LogOut {\n  margin-top: 2%;\n  margin-right: 3%;\n  border-radius: 30px;\n  background-color: #0f2177;\n  display: block;\n  color: #fffdf0;\n  border: 0;\n  outline: none;\n  padding: 1% 2% 1% 2%;\n  float: right;\n}\n\n#username {\n  margin-top: 23%;\n  margin-left: 21%;\n  color: #0f2177;\n  font-weight: 450;\n}\n\n#status {\n  margin-left: 2%;\n  color: #0f2177;\n  font-weight: 300;\n}\n\n#about {\n  margin-top: 5%;\n  margin-left: 2%;\n  font-weight: 400;\n  color: #0f2177;\n  line-height: 28px;\n}\n\n#Edit {\n  margin-right: 4%;\n  margin-top: -5%;\n  border-radius: 30px;\n  background-color: #0f2177;\n  display: block;\n  color: #fffdf0;\n  border: 0;\n  outline: none;\n  padding: 1% 2% 1% 2%;\n  float: right;\n}\n\n#Save {\n  border-radius: 30px;\n  background-color: #0f2177;\n  display: block;\n  color: #fffdf0;\n  border: 0;\n  outline: none;\n  width: 50%;\n  padding: 1% 2% 1% 2%;\n}\n\n#Status {\n  padding: 7px;\n  width: 50%;\n}\n\n#Role {\n  padding: 7px;\n  height: 90px;\n  width: 50%;\n}\n\n#Locations {\n  padding: 6px;\n  width: 50%;\n}\n\n#dateOfBirth1 {\n  padding: 6px;\n  width: 50%;\n}\n\n#dateOfBirth2 {\n  padding: 6px;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGl0bGUtZWRpdC9DOlxcVXNlcnNcXGtpaXRcXFZpZGVvc1xcbXlfcHJvZmlsZVxcbXlwcm9maWxlL3NyY1xcYXBwXFx0aXRsZS1lZGl0XFx0aXRsZS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aXRsZS1lZGl0L3RpdGxlLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUVBLFlBQUE7RUFDQSxVQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDSUo7O0FERkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREhBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUNNSjs7QURKQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDT0o7O0FESkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNPSjs7QURMQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDUUo7O0FETkE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQ1NKOztBRFBBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL3RpdGxlLWVkaXQvdGl0bGUtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbiNkaXZsZWZ0e1xyXG4gICAgd2lkdGg6IDI4JTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIC8vb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMjE3NztcclxuICAgIC8vb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuI2RpdnJpZ2h0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmRmMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIC8vb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgd2lkdGg6IDcyJTtcclxufVxyXG4jd2Vic2l0ZW5hbWV7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjUlO1xyXG4gICAgY29sb3I6ICNmZmZkZjA7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiNMb2dPdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBmMjE3NztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmZkZjA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogMSUgMiUgMSUgMiU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuI3VzZXJuYW1le1xyXG4gICAgbWFyZ2luLXRvcDogMjMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxJTtcclxuICAgIGNvbG9yOiAjMGYyMTc3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQ1MDtcclxufVxyXG4jc3RhdHVze1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgY29sb3I6ICMwZjIxNzc7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbiNhYm91dHtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjMGYyMTc3O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuI0VkaXR7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG4gICAgbWFyZ2luLXRvcDogLTUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjIxNzc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZmZmZGYwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDElIDIlIDElIDIlO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiNTYXZle1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZjIxNzc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZmZmZGYwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxJSAyJSAxJSAyJTsgIFxyXG59XHJcbiNTdGF0dXN7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB3aWR0aDogNTAlOyAgICBcclxuICAgXHJcbn1cclxuI1JvbGV7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbiNMb2NhdGlvbnN7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbiNkYXRlT2ZCaXJ0aDF7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbiNkYXRlT2ZCaXJ0aDJ7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59IiwiI2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNkaXZsZWZ0IHtcbiAgd2lkdGg6IDI4JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYyMTc3O1xufVxuXG4jZGl2cmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZGYwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsb2F0OiBub25lO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3MiU7XG59XG5cbiN3ZWJzaXRlbmFtZSB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tYm90dG9tOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMjUlO1xuICBjb2xvcjogI2ZmZmRmMDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jTG9nT3V0IHtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIG1hcmdpbi1yaWdodDogMyU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjIxNzc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogI2ZmZmRmMDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxJSAyJSAxJSAyJTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jdXNlcm5hbWUge1xuICBtYXJnaW4tdG9wOiAyMyU7XG4gIG1hcmdpbi1sZWZ0OiAyMSU7XG4gIGNvbG9yOiAjMGYyMTc3O1xuICBmb250LXdlaWdodDogNDUwO1xufVxuXG4jc3RhdHVzIHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBjb2xvcjogIzBmMjE3NztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuI2Fib3V0IHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMwZjIxNzc7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuXG4jRWRpdCB7XG4gIG1hcmdpbi1yaWdodDogNCU7XG4gIG1hcmdpbi10b3A6IC01JTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMjE3NztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmZGYwO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDElIDIlIDElIDIlO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbiNTYXZlIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMjE3NztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjZmZmZGYwO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDElIDIlIDElIDIlO1xufVxuXG4jU3RhdHVzIHtcbiAgcGFkZGluZzogN3B4O1xuICB3aWR0aDogNTAlO1xufVxuXG4jUm9sZSB7XG4gIHBhZGRpbmc6IDdweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4jTG9jYXRpb25zIHtcbiAgcGFkZGluZzogNnB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4jZGF0ZU9mQmlydGgxIHtcbiAgcGFkZGluZzogNnB4O1xuICB3aWR0aDogNTAlO1xufVxuXG4jZGF0ZU9mQmlydGgyIHtcbiAgcGFkZGluZzogNnB4O1xuICB3aWR0aDogNTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/title-edit/title-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/title-edit/title-edit.component.ts ***!
  \****************************************************/
/*! exports provided: TitleEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleEditComponent", function() { return TitleEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile.service.ts");




let TitleEditComponent = class TitleEditComponent {
    constructor(route, user, router) {
        this.route = route;
        this.user = user;
        this.router = router;
        this.username = this.route.snapshot.params['username'];
    }
    ngOnInit() {
    }
    UpdateTitle(event) {
        const Status = event.target.querySelector('#Status').value;
        const Description = event.target.querySelector('#Description').value;
        this.user.EditTitle(this.username, Status, Description).subscribe(data => {
            if (data != null) {
                alert('Status Added');
                this.router.navigate(['/profile', this.username]);
            }
        });
    }
};
TitleEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
TitleEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-title-edit',
        template: __webpack_require__(/*! raw-loader!./title-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/title-edit/title-edit.component.html"),
        styles: [__webpack_require__(/*! ./title-edit.component.scss */ "./src/app/title-edit/title-edit.component.scss")]
    })
], TitleEditComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kiit\Videos\my_profile\myprofile\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map