"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_guard_service_1 = require("src/services/auth-guard.service");
var routes = [
    {
        path: 'home',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../pages/home/home.module'); }).then(function (m) { return m.HomePageModule; }); },
        canActivate: [auth_guard_service_1.AuthGuard]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'my-ads',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../pages/my-ads/my-ads.module'); }).then(function (m) { return m.MyAdsPageModule; }); }
    },
    {
        path: 'contact-us',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../pages/contact-us/contact-us.module'); }).then(function (m) { return m.ContactUsPageModule; }); }
    },
    {
        path: 'create-ad',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../pages/create-ad/create-ad.module'); }).then(function (m) { return m.CreateAdPageModule; }); }
    },
    {
        path: 'detail-ad/:id',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../pages/detail-ad/detail-ad.module'); }).then(function (m) { return m.DetailAdPageModule; }); }
    },
    {
        path: 'login',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../pages/auth/login/login.module'); }).then(function (m) { return m.LoginPageModule; }); }
    },
    {
        path: 'signup',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../pages/auth/signup/signup.module'); }).then(function (m) { return m.SignupPageModule; }); }
    },
    {
        path: 'reset-password',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../pages/auth/reset-password/reset-password.module'); }).then(function (m) { return m.ResetPasswordPageModule; }); }
    },
    {
        path: 'profile',
        loadChildren: function () { return Promise.resolve().then(function () { return require('../pages/profile/profile.module'); }).then(function (m) { return m.ProfilePageModule; }); }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
