"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dataService_1 = require("../shared/dataService");
var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(data) {
        var _this = this;
        this.data = data;
        this.tableHeader = 'Clipboard Categories';
        this.categories = [];
        this.data.loadCategories().
            subscribe(function (result) {
            if (result) {
                _this.categories = _this.data.categories;
                _this.categories = [{
                        idCategory: "1",
                        categoryName: "Car related",
                        lastUsed: "2018-02-15",
                        linkCount: 9
                    }];
            }
            else {
                _this.categories = [{
                        description: "Car related",
                        lastUsed: "2018-02-15",
                        linkCount: 9
                    }, {
                        description: "Azure",
                        lastUsed: "2018-02-15",
                        linkCount: 13
                    }];
            }
        });
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'roamclip-categories',
            templateUrl: './categories.component.html'
        }),
        __metadata("design:paramtypes", [dataService_1.DataService])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=categories.component.js.map