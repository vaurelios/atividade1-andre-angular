webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about-page/about-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column bg-light\">\n  <div class=\"mx-auto p-2\"><h2 class=\"d-inline-block\">A Nossa empresa foi fundada em 29/08/2017</h2></div>\n  <div class=\"p-2\">\n    <img alt=\"Moto 2\" class=\"img-fluid\" src=\"assets/images/moto-2.jpg\"/>\n  </div>\n  <div class=\"p-2\">\n    <p>\n      Sing long her way size. Waited end mutual missed myself the little sister one. So in pointed or chicken cheered neither spirits invited. Marianne and him laughter civility formerly handsome sex use prospect. Hence we doors is given rapid scale above am. Difficult ye mr delivered behaviour by an. If their woman could do wound on. You folly taste hoped their above are and but.\n\n      May musical arrival beloved luckily adapted him. Shyness mention married son she his started now. Rose if as past near were. To graceful he elegance oh moderate attended entrance pleasure. Vulgar saw fat sudden edward way played either. Thoughts smallest at or peculiar relation breeding produced an. At depart spirit on stairs. She the either are wisdom praise things she before. Be mother itself vanity favour do me of. Begin sex was power joy after had walls miles.\n\n      Ask especially collecting terminated may son expression. Extremely eagerness principle estimable own was man. Men received far his dashwood subjects new. My sufficient surrounded an companions dispatched in on. Connection too unaffected expression led son possession. New smiling friends and her another. Leaf she does none love high yet. Snug love will up bore as be. Pursuit man son musical general pointed. It surprise informed mr advanced do outweigh.\n\n      As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built gay party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.\n    </p>\n  </div>\n  <div class=\"p-2\">\n    <img alt=\"Moto 1\" class=\"img-fluid\" src=\"assets/images/moto-1.jpg\"/>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about-page/about-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPageComponent = (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    return AboutPageComponent;
}());
AboutPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about-page',
        template: __webpack_require__("../../../../../src/app/about-page/about-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about-page/about-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutPageComponent);

//# sourceMappingURL=about-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main-menu class=\"row my-3\"></app-main-menu>\n<router-outlet></router-outlet>\n<footer class=\"py-3\">\n  <div class=\"row\">\n    <span class=\"mx-auto text-light\"><strong>Copyright © MotoPeças 2017</strong></span>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_menu_main_menu_component__ = __webpack_require__("../../../../../src/app/main-menu/main-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__index_page_index_page_component__ = __webpack_require__("../../../../../src/app/index-page/index-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_page_about_page_component__ = __webpack_require__("../../../../../src/app/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__products_page_products_page_component__ = __webpack_require__("../../../../../src/app/products-page/products-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__contact_page_contact_page_component__ = __webpack_require__("../../../../../src/app/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_page_login_page_component__ = __webpack_require__("../../../../../src/app/login-page/login-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__singup_page_singup_page_component__ = __webpack_require__("../../../../../src/app/singup-page/singup-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__product_page_product_page_component__ = __webpack_require__("../../../../../src/app/product-page/product-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__main_menu_main_menu_component__["a" /* MainMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_8__index_page_index_page_component__["a" /* IndexPageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__about_page_about_page_component__["a" /* AboutPageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__products_page_products_page_component__["a" /* ProductsPageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__product_page_product_page_component__["a" /* ProductPageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__contact_page_contact_page_component__["a" /* ContactPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_page_login_page_component__["a" /* LoginPageComponent */],
            __WEBPACK_IMPORTED_MODULE_13__singup_page_singup_page_component__["a" /* SingupPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                {
                    path: '',
                    redirectTo: '/index',
                    pathMatch: 'full'
                },
                {
                    path: 'index',
                    component: __WEBPACK_IMPORTED_MODULE_8__index_page_index_page_component__["a" /* IndexPageComponent */]
                },
                {
                    path: 'about',
                    component: __WEBPACK_IMPORTED_MODULE_9__about_page_about_page_component__["a" /* AboutPageComponent */]
                },
                {
                    path: 'products',
                    component: __WEBPACK_IMPORTED_MODULE_10__products_page_products_page_component__["a" /* ProductsPageComponent */]
                },
                {
                    path: 'product/:cod',
                    component: __WEBPACK_IMPORTED_MODULE_14__product_page_product_page_component__["a" /* ProductPageComponent */]
                },
                {
                    path: 'contact',
                    component: __WEBPACK_IMPORTED_MODULE_11__contact_page_contact_page_component__["a" /* ContactPageComponent */]
                },
                {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_12__login_page_login_page_component__["a" /* LoginPageComponent */]
                },
                {
                    path: 'singup',
                    component: __WEBPACK_IMPORTED_MODULE_13__singup_page_singup_page_component__["a" /* SingupPageComponent */]
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__auth_service__["a" /* AuthService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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


var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.getUser = function () {
        if (this.isLogged()) {
        }
        throw new Error("Not logged in!!!");
    };
    AuthService.prototype.newUser = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.post('http://localhost:8080/MotoPecas/auth/newUser', data).subscribe(function (res) {
                            resolve(true);
                        }, function (err) {
                            if (err.error instanceof Error) {
                                console.log('AuthService: Client side error:', err.error.message);
                                resolve(false);
                            }
                            else {
                                reject({ status: err.error.status, error: err.error.body });
                            }
                        });
                    })];
            });
        });
    };
    AuthService.prototype.isLogged = function () {
        return true;
    };
    AuthService.prototype.login = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.http.post('http://localhost:8080/MotoPecas/auth/login', data).subscribe(function (res) {
                            resolve(res);
                        }, function (err) {
                            if (err.error instanceof Error) {
                                console.log('AuthService: Client side error:', err.error.message);
                                reject();
                            }
                            else {
                                reject({ status: err.error.status, error: err.error.body });
                            }
                        });
                    })];
            });
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-10 mx-auto py-3 bg-light\">\n  <h2>Entre em contato conosco</h2>\n\n  <p class=\"lead\">Preencha o formulário abaixo para entrar em contato conosco</p>\n\n  <form (ngSubmit)=\"onSubmit(contactForm)\" #contactForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"nome\">Nome</label>\n      <input type=\"text\" class=\"form-control\" name=\"name\" id=\"nome\" ngModel placeholder=\"Digite seu Nome\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Endereço de E-Mail</label>\n      <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" ngModel placeholder=\"Digite seu E-Mail\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"mensagem\">Mensagem</label>\n      <textarea class=\"form-control\" name=\"message\" id=\"mensagem\" rows=\"5\" ngModel></textarea>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Enviar Mensagem</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact-page/contact-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactPageComponent = (function () {
    function ContactPageComponent() {
    }
    ContactPageComponent.prototype.ngOnInit = function () {
    };
    ContactPageComponent.prototype.onSubmit = function (f) {
        console.log(f.value);
    };
    return ContactPageComponent;
}());
ContactPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact-page',
        host: {
            class: "row mt-5"
        },
        template: __webpack_require__("../../../../../src/app/contact-page/contact-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact-page/contact-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactPageComponent);

//# sourceMappingURL=contact-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/index-page/index-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".offerLabel {\n  position: absolute;\n  top: 0;\n  right: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/index-page/index-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row bg-light my-3 p-3\">\n  <div class=\"col\">\n    <div class=\"row px-3\">\n      <h3>Últimas ofertas</h3>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-3\" *ngFor=\"let oferta of ofertas\">\n        <a class=\"d-block h-100 text-center\" [routerLink]=\"['/product', oferta.cod]\">\n          <img class=\"img-fluid img-thumbnail\" src=\"assets/images/produtos/{{oferta.image_name}}\">\n          <p class=\"my-1 mx-atuo\"><small>Cod: {{oferta.cod}}</small></p>\n          <p class=\"my-1 mx-auto\"><strong>{{oferta.name}}</strong></p>\n          <p class=\"my-1 mx-auto\"><del><strong>R$ {{oferta.price | number: '1.2-2'}}</strong></del> | <strong>R$ {{((100 - oferta.promo) / 100) * oferta.price | number: '1.2-2'}}</strong></p>\n          <span class=\"bg-danger text-light p-1 offerLabel\">{{oferta.promo}}% Off</span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row bg-light my-3 px-3\">\n  <div class=\"col\">\n    <div class=\"row\">\n      <h2 class=\"mx-auto\">A Nossa empresta está localizada no seguinte endereço</h2>\n    </div>\n    <div class=\"row mt-3\">\n      <address>\n        Estado da Paraíba, Campina Grande<br>\n        Bairo: Centro<br>\n        CEP: 12345-000<br>\n        Telefone: (83) 33xx-xxxx\n      </address>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/index-page/index-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("../../../../../src/app/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexPageComponent = (function () {
    function IndexPageComponent(productsService) {
        this.productsService = productsService;
        this.ofertas = productsService.getOffers();
    }
    IndexPageComponent.prototype.ngOnInit = function () {
    };
    return IndexPageComponent;
}());
IndexPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-index-page',
        template: __webpack_require__("../../../../../src/app/index-page/index-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/index-page/index-page.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */]) === "function" && _a || Object])
], IndexPageComponent);

var _a;
//# sourceMappingURL=index-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"bg-light py-3 col-lg-6 mx-auto\" (ngSubmit)=\"onSubmit(loginForm)\" #loginForm=\"ngForm\">\n  <div class=\"form-group\">\n    <label for=\"email\">E-Mail</label>\n    <input class=\"form-control\" type=\"email\" name=\"email\" ngModel placeholder=\"Endereço de E-Mail\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Senha</label>\n    <input class=\"form-control\" type=\"password\" name=\"password\" ngModel placeholder=\"Senha\" />\n  </div>\n  <button class=\"btn btn-primary\" type=\"submit\">Login</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login-page/login-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginPageComponent = (function () {
    function LoginPageComponent() {
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.onSubmit = function (f) {
        console.log("Works!");
    };
    return LoginPageComponent;
}());
LoginPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login-page',
        template: __webpack_require__("../../../../../src/app/login-page/login-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-page/login-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginPageComponent);

//# sourceMappingURL=login-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"col navbar navbar-expand-lg navbar-dark bg-primary\">\n  <a class=\"navbar-brand\" href=\"index.html\">MotoPeças</a>\n  <button class=\"navbar-toggler hidden-md-up\" type=\"button\" (click)=\"isNavbarCollapsed = !isNavbarCollapsed\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isNavbarCollapsed\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngFor=\"let item of getLeftMenuItems()\">\n        <a class=\"nav-link\" *ngIf=\"!item.separator\" routerLink=\"/{{item.page}}\">{{item.title}}</a>\n        <span class=\"nav-link\" *ngIf=\"item.separator\">|</span>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngFor=\"let item of getRightMenuItems()\">\n        <a class=\"nav-link\" *ngIf=\"!item.separator\" routerLink=\"/{{item.page}}\">{{item.title}}</a>\n        <span class=\"nav-link\" *ngIf=\"item.separator\">|</span>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/main-menu/main-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_item__ = __webpack_require__("../../../../../src/app/main-menu/menu-item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MENUITEMS = [
    { align: __WEBPACK_IMPORTED_MODULE_1__menu_item__["a" /* MenuItemAlign */].Left, page: 'index', title: 'Ínicio' },
    { align: __WEBPACK_IMPORTED_MODULE_1__menu_item__["a" /* MenuItemAlign */].Left, page: 'about', title: 'A Empresa' },
    { align: __WEBPACK_IMPORTED_MODULE_1__menu_item__["a" /* MenuItemAlign */].Left, page: 'products', title: 'Produtos' },
    { align: __WEBPACK_IMPORTED_MODULE_1__menu_item__["a" /* MenuItemAlign */].Left, page: 'contact', title: 'Contato' },
    { align: __WEBPACK_IMPORTED_MODULE_1__menu_item__["a" /* MenuItemAlign */].Right, page: 'login', title: 'Login' },
    { align: __WEBPACK_IMPORTED_MODULE_1__menu_item__["a" /* MenuItemAlign */].Right, separator: true },
    { align: __WEBPACK_IMPORTED_MODULE_1__menu_item__["a" /* MenuItemAlign */].Right, page: 'singup', title: 'Cadastrar' }
];
var MainMenuComponent = (function () {
    function MainMenuComponent() {
        this.menuitems = MENUITEMS;
        this.isNavbarCollapsed = true;
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    MainMenuComponent.prototype.getLeftMenuItems = function () {
        return this.menuitems.filter(function (item) { return item.align === __WEBPACK_IMPORTED_MODULE_1__menu_item__["a" /* MenuItemAlign */].Left; });
    };
    MainMenuComponent.prototype.getRightMenuItems = function () {
        return this.menuitems.filter(function (item) { return item.align === __WEBPACK_IMPORTED_MODULE_1__menu_item__["a" /* MenuItemAlign */].Right; });
    };
    return MainMenuComponent;
}());
MainMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-menu',
        template: __webpack_require__("../../../../../src/app/main-menu/main-menu.component.html")
    }),
    __metadata("design:paramtypes", [])
], MainMenuComponent);

//# sourceMappingURL=main-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-menu/menu-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItemAlign; });
/* unused harmony export MenuItem */
var MenuItemAlign;
(function (MenuItemAlign) {
    MenuItemAlign[MenuItemAlign["Left"] = 0] = "Left";
    MenuItemAlign[MenuItemAlign["Right"] = 1] = "Right";
})(MenuItemAlign || (MenuItemAlign = {}));
var MenuItem = (function () {
    function MenuItem() {
        this.align = MenuItemAlign.Left;
        this.separator = false;
    }
    return MenuItem;
}());

//# sourceMappingURL=menu-item.js.map

/***/ }),

/***/ "../../../../../src/app/mock-products.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PRODUCTS; });
var PRODUCTS = [
    { cod: '0001', image_name: 'aro.jpg', name: 'Aro NXR 150 Dianteiro', description: 'Aro Dianteiro Cromado<br>Compativel Com:<br>NXR 125 Bros<br>NXR 150 Bros', price: 50.00 },
    { cod: '0002', image_name: 'pneu.jpg', name: 'Pneu NXR 150 Dianteiro', price: 150.00, promo: 20 },
    { cod: '0003', image_name: 'farol-fan125.jpg', name: 'Farol Fan 125', price: 60.00, promo: 15 },
    { cod: '0004', image_name: 'bateria-7ah-moura.jpg', name: 'Bateria 7Ah - Moura', price: 90.00 },
    { cod: '0005', image_name: 'ignicao-titan160.jpg', name: 'Chave Ignição Titan 160', price: 110.00 }
];
//# sourceMappingURL=mock-products.js.map

/***/ }),

/***/ "../../../../../src/app/models/singup-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingupData; });
var SingupData = (function () {
    function SingupData() {
    }
    return SingupData;
}());

//# sourceMappingURL=singup-data.js.map

/***/ }),

/***/ "../../../../../src/app/product-page/product-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-page/product-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-4\">\n  <img class=\"img-fluid\" src=\"assets/images/produtos/{{product.image_name}}\" />\n</div>\n<div class=\"col-8 d-flex flex-column justify-content-between\">\n  <div>\n    <small>Código: {{product.cod}}</small>\n    <h1>{{product.name}}</h1>\n  </div>\n  <div>\n    <p [innerHTML]=\"product.description\">\n    </p>\n  </div>\n  <div class=\"d-flex flex-row align-items-center\">\n    <div class=\"mr-2\">\n      <h3 class=\"text-warning\">R$ {{product.price}}</h3>\n    </div>\n    <button class=\"btn btn-warning\">Adicionar ao Carrinho</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-page/product-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_service__ = __webpack_require__("../../../../../src/app/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductPageComponent = (function () {
    function ProductPageComponent(route, productsService) {
        var _this = this;
        this.route = route;
        this.productsService = productsService;
        route.params.subscribe(function (params) {
            _this.product = productsService.getProductByCod(params['cod']);
        });
    }
    ProductPageComponent.prototype.ngOnInit = function () {
    };
    return ProductPageComponent;
}());
ProductPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-product-page',
        host: {
            class: 'row bg-light py-3'
        },
        template: __webpack_require__("../../../../../src/app/product-page/product-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product-page/product-page.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__products_service__["a" /* ProductsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__products_service__["a" /* ProductsService */]) === "function" && _b || Object])
], ProductPageComponent);

var _a, _b;
//# sourceMappingURL=product-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/products-page/products-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products-page/products-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center py-3 bg-light\">\n  <div class=\"col-sm-1 col-lg-3\" *ngFor=\"let product of products\">\n    <a class=\"d-block h-100\" [routerLink]=\"['/product', product.cod]\">\n      <img class=\"img-fluid img-thumbnail\" src=\"assets/images/produtos/{{product.image_name}}\">\n      <p class=\"my-1 mx-atuo\"><small>Cod: {{product.cod}}</small></p>\n      <p class=\"my-1 mx-auto\"><strong>{{product.name}}</strong></p>\n      <p class=\"my-1 mx-auto\"><strong>R$ {{product.price | number: '1.2-2'}}</strong></p>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/products-page/products-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_service__ = __webpack_require__("../../../../../src/app/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsPageComponent = (function () {
    function ProductsPageComponent(productsService) {
        this.productsService = productsService;
        this.products = productsService.getProducts();
    }
    ProductsPageComponent.prototype.ngOnInit = function () {
    };
    return ProductsPageComponent;
}());
ProductsPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-products-page',
        template: __webpack_require__("../../../../../src/app/products-page/products-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products-page/products-page.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__products_service__["a" /* ProductsService */]) === "function" && _a || Object])
], ProductsPageComponent);

var _a;
//# sourceMappingURL=products-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_products__ = __webpack_require__("../../../../../src/app/mock-products.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsService = (function () {
    function ProductsService() {
    }
    ProductsService.prototype.getProducts = function () {
        return __WEBPACK_IMPORTED_MODULE_1__mock_products__["a" /* PRODUCTS */];
    };
    ProductsService.prototype.getProductByCod = function (cod) {
        for (var _i = 0, _a = this.getProducts(); _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.cod === cod)
                return product;
        }
        throw new RangeError('Product with code ' + cod + 'doesnt existis!');
    };
    ProductsService.prototype.getOffers = function () {
        return this.getProducts().filter(function (product) {
            if (product.promo === undefined || product.promo < 1)
                return false;
            return true;
        });
    };
    return ProductsService;
}());
ProductsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ProductsService);

//# sourceMappingURL=products.service.js.map

/***/ }),

/***/ "../../../../../src/app/singup-page/singup-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-valid[required] {\n  border-left: 5px solid #42A948;\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442;\n}\n\n.spinner {\n  width: 140px;\n  text-align: center;\n}\n\n.spinner > div {\n  width: 36px;\n  height: 36px;\n  background-color: #FFF;\n\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n  animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n}\n\n.spinner .bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n\n.spinner .bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-bouncedelay {\n  0%, 80%, 100% { -webkit-transform: scale(0) }\n  40% { -webkit-transform: scale(1.0) }\n}\n\n@keyframes sk-bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  } 40% {\n    -webkit-transform: scale(1.0);\n    transform: scale(1.0);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/singup-page/singup-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"submitted\" class=\"bg-light py-3 col-lg-8 mx-auto\">\n  <form (ngSubmit)=\"onSubmit(singupForm)\" #singupForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"usernameInput\">Nome de Usuário</label>\n      <input class=\"form-control\" id=\"usernameInput\" type=\"text\" name=\"username\" [(ngModel)]=\"model.username\" placeholder=\"Nome de Usuário\" required/>\n    </div>\n    <div class=\"row\">\n      <div class=\"form-group col-6\">\n        <label for=\"nameInput\">Nome</label>\n        <input class=\"form-control\" id=\"nameInput\" type=\"text\" name=\"firstName\" [(ngModel)]=\"model.firstName\" placeholder=\"Nome\" required/>\n      </div>\n      <div class=\"form-group col-6\">\n        <label for=\"lastNameInput\">Sobrenome</label>\n        <input class=\"form-control\" id=\"lastNameInput\" type=\"text\" name=\"lastName\" [(ngModel)]=\"model.lastName\" placeholder=\"Sobrenome\" required/>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"emailInput\">Endereço de E-Mail</label>\n      <input class=\"form-control\" id=\"emailInput\" type=\"email\" name=\"email\" [(ngModel)]=\"model.email\" placeholder=\"Endereço de E-Mail\" email required/>\n    </div>\n    <div class=\"form-group\">\n      <div class=\"form-check form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"comprovantePessoaTipo\" [(ngModel)]=\"model.comprovantePessoaTipo\" value=\"cpf\" required/>\n          <abbr title=\"Comprovante Pessoa Física\">CPF</abbr>\n        </label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <label class=\"form-check-label\">\n          <input class=\"form-check-input\" type=\"radio\" name=\"comprovantePessoaTipo\" [(ngModel)]=\"model.comprovantePessoaTipo\" value=\"cnpj\" required/>\n          <abbr title=\"Cadastro Nacional de Pessoas Jurídicas\">CNPJ</abbr>\n        </label>\n      </div>\n      <input class=\"form-control\" id=\"comprovantePessoaInput\" type=\"text\" name=\"comprovantePessoa\" [(ngModel)]=\"model.comprovantePessoa\" placeholder=\"Apenas números\" required/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"rgInput\"><abbr title=\"Registro Geral\">RG</abbr></label>\n      <input class=\"form-control\" id=\"rgInput\" type=\"text\" name=\"rg\" [(ngModel)]=\"model.rg\" placeholder=\"Registro Geral\" required/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"bdayInput\">Data de Nascimento</label>\n      <input class=\"form-control\" id=\"bdayInput\" type=\"date\" name=\"bday\" [(ngModel)]=\"model.bday\" required/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passwordInput\">Senha</label>\n      <input class=\"form-control\" id=\"passwordInput\" type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" placeholder=\"Senha\" minlength=\"6\" required/>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passwordConfirmInput\">Confirmação de Senha</label>\n      <input class=\"form-control\" id=\"passwordConfirmInput\" type=\"password\" name=\"passwordConfirm\" [(ngModel)]=\"model.passwordConfirm\" placeholder=\"Confirmação de Senha\" minlength=\"6\" required/>\n    </div>\n    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!singupForm.form.valid\">Cadastrar</button>\n  </form>\n</div>\n<div [hidden]=\"!submitted\" class=\"col-lg-8 my-5 mx-auto\">\n  <div class=\"spinner mx-auto\">\n    <div class=\"bounce1\"></div>\n    <div class=\"bounce2\"></div>\n    <div class=\"bounce3\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/singup-page/singup-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingupPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_singup_data__ = __webpack_require__("../../../../../src/app/models/singup-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SingupPageComponent = (function () {
    function SingupPageComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.submitted = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_3__models_singup_data__["a" /* SingupData */]();
        this.model.comprovantePessoaTipo = "cpf";
    }
    SingupPageComponent.prototype.ngOnInit = function () {
    };
    SingupPageComponent.prototype.onSubmit = function (f) {
        var _this = this;
        this.submitted = true;
        this.auth.newUser(this.model).then(function (success) {
            if (success)
                _this.router.navigate(['login']);
            else
                _this.submitted = false;
        });
    };
    return SingupPageComponent;
}());
SingupPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-singup-page',
        host: {
            class: 'row'
        },
        template: __webpack_require__("../../../../../src/app/singup-page/singup-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/singup-page/singup-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SingupPageComponent);

var _a, _b;
//# sourceMappingURL=singup-page.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map