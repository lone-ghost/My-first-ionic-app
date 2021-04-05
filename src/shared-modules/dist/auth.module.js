"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var login_form_component_1 = require("src/components/login-form/login-form.component");
var signup_form_component_1 = require("src/components/signup-form/signup-form.component");
var password_reset_form_component_1 = require("src/components/password-reset-form/password-reset-form.component");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, angular_1.IonicModule, forms_1.ReactiveFormsModule],
            declarations: [login_form_component_1.LoginFormComponent, signup_form_component_1.SignupFormComponent, password_reset_form_component_1.PasswordResetFormComponent],
            exports: [login_form_component_1.LoginFormComponent, signup_form_component_1.SignupFormComponent, password_reset_form_component_1.PasswordResetFormComponent],
            entryComponents: [login_form_component_1.LoginFormComponent, signup_form_component_1.SignupFormComponent, password_reset_form_component_1.PasswordResetFormComponent]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
