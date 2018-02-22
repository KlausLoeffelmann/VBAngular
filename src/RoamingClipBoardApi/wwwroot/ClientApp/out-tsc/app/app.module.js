"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var categories_component_1 = require("./categories/categories.component");
var addCategory_component_1 = require("./categories/addCategory.component");
var links_component_1 = require("./links/links.component");
var categoryDataService_1 = require("./shared/categoryDataService");
var linkDataService_1 = require("./shared/linkDataService");
var addLink_component_1 = require("./links/addLink.component");
var appRoutes = [
    { path: 'categories', component: categories_component_1.CategoriesComponent },
    { path: 'addCategory', component: addCategory_component_1.AddCategoryComponent },
    { path: 'links', component: links_component_1.LinksComponent },
    { path: 'addLink', component: addLink_component_1.AddLinkComponent },
    { path: '', redirectTo: 'links', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                categories_component_1.CategoriesComponent,
                addCategory_component_1.AddCategoryComponent,
                links_component_1.LinksComponent,
                addLink_component_1.AddLinkComponent
            ],
            imports: [
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: true }),
                ngx_bootstrap_1.AlertModule.forRoot(),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule
            ],
            providers: [
                categoryDataService_1.CategoryDataService,
                linkDataService_1.LinkDataService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map