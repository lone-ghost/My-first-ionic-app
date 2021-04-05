"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DetailAdPage = void 0;
var core_1 = require("@angular/core");
var DetailAdPage = /** @class */ (function () {
    function DetailAdPage(firestore, route) {
        this.firestore = firestore;
        this.route = route;
    }
    DetailAdPage.prototype.ngOnInit = function () {
        var _this = this;
        var adId = this.route.snapshot.paramMap.get('id');
        this.firestore.getAdDetail(adId).subscribe(function (ad) {
            _this.ad = ad;
        });
    };
    DetailAdPage = __decorate([
        core_1.Component({
            selector: 'app-detail-ad',
            templateUrl: 'detail-ad.page.html',
            styleUrls: ['detail-ad.page.scss']
        })
    ], DetailAdPage);
    return DetailAdPage;
}());
exports.DetailAdPage = DetailAdPage;
