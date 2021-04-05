"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.SignupFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(formBuilder, loadingCtrl, alertCtrl) {
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.formSubmitted = new core_1.EventEmitter();
        this.signupForm = this.formBuilder.group({
            first_name: ['', forms_1.Validators.required],
            last_name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.email])],
            password: ['', forms_1.Validators.minLength(6)],
            password_confirm: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])]
        });
    }
    SignupFormComponent.prototype.ngOnInit = function () { };
    SignupFormComponent.prototype.submitCredentials = function (signupForm) {
        if (!signupForm.valid) {
            console.log('Form is not valid yet, current value:', signupForm.value);
        }
        else {
            this.showLoading();
            var credentials = {
                email: this.signupForm.value.email,
                password: this.signupForm.value.password,
                first_name: this.signupForm.value.first_name,
                last_name: this.signupForm.value.last_name
            };
            this.formSubmitted.emit(credentials);
        }
    };
    SignupFormComponent.prototype.showLoading = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        this.handleError(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SignupFormComponent.prototype.hideLoading = function () {
        return this.loading.dismiss();
    };
    SignupFormComponent.prototype.handleError = function (error) {
        return __awaiter(this, void 0, Promise, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: error.message,
                            buttons: [{ text: 'Ok', role: 'cancel' }]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Output()
    ], SignupFormComponent.prototype, "formSubmitted");
    SignupFormComponent = __decorate([
        core_1.Component({
            selector: 'app-signup-form',
            templateUrl: 'signup-form.component.html',
            styleUrls: ['signup-form.component.scss']
        })
    ], SignupFormComponent);
    return SignupFormComponent;
}());
exports.SignupFormComponent = SignupFormComponent;
