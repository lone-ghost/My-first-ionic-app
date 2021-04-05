"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FirestoreService = void 0;
var core_1 = require("@angular/core");
require("firebase/firestore");
var FirestoreService = /** @class */ (function () {
    function FirestoreService(firestore) {
        this.firestore = firestore;
    }
    FirestoreService.prototype.genAd = function (adTitle, adDetails) {
        var id = this.firestore.createId();
        return this.firestore.doc("adList/" + id).set({
            id: id,
            adTitle: adTitle,
            adDetails: adDetails
        });
    };
    FirestoreService.prototype.genUAd = function (adTitle, adDetails) {
        var id = this.firestore.createId();
        return this.firestore.doc("u_adList/" + id).set({
            id: id,
            adTitle: adTitle,
            adDetails: adDetails
        });
    };
    FirestoreService.prototype.getAdList = function () {
        return this.firestore.collection("adList").valueChanges();
    };
    FirestoreService.prototype.getUAdList = function () {
        return this.firestore.collection("u_adList").valueChanges();
    };
    FirestoreService.prototype.getAdDetail = function (adId) {
        return this.firestore.collection('adList').doc(adId).valueChanges();
    };
    FirestoreService.prototype.getUAdDetail = function (adId) {
        return this.firestore.collection('u_adList').doc(adId).valueChanges();
    };
    FirestoreService.prototype.deleteAd = function (adId) {
        return this.firestore.doc("adList/" + adId)["delete"]();
    };
    FirestoreService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FirestoreService);
    return FirestoreService;
}());
exports.FirestoreService = FirestoreService;
