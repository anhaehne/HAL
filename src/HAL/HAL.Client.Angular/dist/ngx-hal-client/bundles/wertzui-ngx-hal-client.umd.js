(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@angular/core'), require('uri-templates'), require('lodash')) :
    typeof define === 'function' && define.amd ? define('@wertzui/ngx-hal-client', ['exports', '@angular/common/http', '@angular/core', 'uri-templates', 'lodash'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.wertzui = global.wertzui || {}, global.wertzui["ngx-hal-client"] = {}), global.ng.common.http, global.ng.core, global.utpl, global._));
})(this, (function (exports, i1, i0, utpl, _) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var utpl__namespace = /*#__PURE__*/_interopNamespace(utpl);
    var ___namespace = /*#__PURE__*/_interopNamespace(_);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var HalClient = /** @class */ (function () {
        function HalClient(_httpClient) {
            this._httpClient = _httpClient;
        }
        HalClient.prototype.get = function (uri, TResource, TError, headers) {
            return __awaiter(this, void 0, void 0, function () {
                var options, dtoResponse, e_1, resourceResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            options = HalClient.createOptions(headers);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this._httpClient.get(uri, options).toPromise()];
                        case 2:
                            dtoResponse = _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            if (e_1 instanceof i1.HttpErrorResponse)
                                dtoResponse = HalClient.convertErrorResponse(e_1);
                            else
                                throw new Error("GET " + uri + " - options: " + options + " failed with error " + e_1);
                            return [3 /*break*/, 4];
                        case 4:
                            if (!dtoResponse)
                                throw new Error("GET " + uri + " - options: " + options + " did not return a response.");
                            resourceResponse = HalClient.convertResponse(dtoResponse.ok ? TResource : TError, dtoResponse);
                            return [2 /*return*/, resourceResponse];
                    }
                });
            });
        };
        HalClient.prototype.post = function (uri, body, TResource, TError, headers) {
            return __awaiter(this, void 0, void 0, function () {
                var options, dtoResponse, e_2, resourceResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            options = HalClient.createOptions(headers);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this._httpClient.post(uri, body, options).toPromise()];
                        case 2:
                            dtoResponse = _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_2 = _a.sent();
                            if (e_2 instanceof i1.HttpErrorResponse)
                                dtoResponse = HalClient.convertErrorResponse(e_2);
                            else
                                throw new Error("POST " + uri + " - options: " + options + " - body: " + body + " failed with error " + e_2);
                            return [3 /*break*/, 4];
                        case 4:
                            if (!dtoResponse)
                                throw new Error("POST " + uri + " - options: " + options + " - body: " + body + " did not return a response.");
                            resourceResponse = HalClient.convertResponse(dtoResponse.ok ? TResource : TError, dtoResponse);
                            return [2 /*return*/, resourceResponse];
                    }
                });
            });
        };
        HalClient.prototype.put = function (uri, body, TResource, TError, headers) {
            return __awaiter(this, void 0, void 0, function () {
                var options, dtoResponse, e_3, resourceResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            options = HalClient.createOptions(headers);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this._httpClient.put(uri, body, options).toPromise()];
                        case 2:
                            dtoResponse = _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_3 = _a.sent();
                            if (e_3 instanceof i1.HttpErrorResponse)
                                dtoResponse = HalClient.convertErrorResponse(e_3);
                            else
                                throw new Error("PUT " + uri + " - options: " + options + " - body: " + body + " failed with error " + e_3);
                            return [3 /*break*/, 4];
                        case 4:
                            if (!dtoResponse)
                                throw new Error("PUT " + uri + " - options: " + options + " - body: " + body + " did not return a response.");
                            resourceResponse = HalClient.convertResponse(dtoResponse.ok ? TResource : TError, dtoResponse);
                            return [2 /*return*/, resourceResponse];
                    }
                });
            });
        };
        HalClient.prototype.delete = function (uri, TError, headers) {
            return __awaiter(this, void 0, void 0, function () {
                var options, response, e_4, errorResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            options = HalClient.createOptions(headers);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this._httpClient.delete(uri, options).toPromise()];
                        case 2:
                            response = _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_4 = _a.sent();
                            if (e_4 instanceof i1.HttpErrorResponse)
                                response = HalClient.convertErrorResponse(e_4);
                            else
                                throw new Error("DELETE " + uri + " - options: " + options + " failed with error " + e_4);
                            return [3 /*break*/, 4];
                        case 4:
                            if (!response)
                                throw new Error("DELETE " + uri + " - options: " + options + " did not return a response.");
                            if (!response.ok) {
                                errorResponse = HalClient.convertResponse(TError, response);
                                return [2 /*return*/, errorResponse];
                            }
                            return [2 /*return*/, response];
                    }
                });
            });
        };
        HalClient.createOptions = function (headers) {
            headers === null || headers === void 0 ? void 0 : headers.append('Accept', 'application/hal+json');
            return {
                headers: headers,
                responseType: 'json',
                observe: 'response'
            };
        };
        HalClient.convertResponse = function (TResource, response) {
            var resource = new TResource(response.body);
            var resourceResponse = response.clone({ body: resource });
            return resourceResponse;
        };
        HalClient.convertErrorResponse = function (e) {
            var dtoResponse = new i1.HttpResponse({ body: e.error, headers: e.headers, status: e.status, statusText: e.statusText, url: e.url ? e.url : undefined });
            return dtoResponse;
        };
        return HalClient;
    }());
    HalClient.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: HalClient, deps: [{ token: i1__namespace.HttpClient }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    HalClient.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: HalClient, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: HalClient, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return [{ type: i1__namespace.HttpClient }]; } });

    var HalClientModule = /** @class */ (function () {
        function HalClientModule() {
        }
        return HalClientModule;
    }());
    HalClientModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: HalClientModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    HalClientModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: HalClientModule });
    HalClientModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: HalClientModule, providers: [
            HalClient
        ], imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.11", ngImport: i0__namespace, type: HalClientModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [],
                        imports: [],
                        exports: [],
                        providers: [
                            HalClient
                        ]
                    }]
            }] });

    /**
     *  A Link Object represents a hyperlink from the containing resource to a URI.
     */
    var Link = /** @class */ (function () {
        function Link() {
        }
        Link.prototype.fillTemplate = function (parameters) {
            return utpl__namespace(this.href).fill(parameters);
        };
        Link.fromDto = function (dto) {
            var link = Object.assign(new Link(), dto);
            return link;
        };
        Link.fromDtos = function (dtos) {
            if (!dtos)
                return [];
            var links = dtos
                .filter(function (dto) { return !!(dto === null || dto === void 0 ? void 0 : dto.href); })
                .map(function (dto) { return Link.fromDto(dto); });
            return links;
        };
        return Link;
    }());

    /**
     *  A Resource Object represents a resource.
     *  It has two reserved properties:
     *  (1)  "_links": contains links to other resources.
     *  (2)  "_embedded": contains embedded resources.
     */
    var Resource = /** @class */ (function () {
        function Resource(dto) {
            var links = !(dto === null || dto === void 0 ? void 0 : dto._links) ? {} : Object.fromEntries(Object.entries(dto._links).map(function (_b) {
                var _c = __read(_b, 2), rel = _c[0], links = _c[1];
                return [rel, Link.fromDtos(links)];
            }));
            if (!links['self'])
                throw new Error("The self link is missing in the given ResourceDto: " + JSON.stringify(dto));
            var embedded = !(dto === null || dto === void 0 ? void 0 : dto._embedded) ? {} : Object.fromEntries(Object.entries(dto._embedded).map(function (_b) {
                var _c = __read(_b, 2), rel = _c[0], resources = _c[1];
                return [rel, Resource.fromDtos(resources)];
            }));
            var dtoWithParsedDates = Resource.parseDates(dto);
            Object.assign(this, dtoWithParsedDates);
            // We ensured that it has a self property
            this._links = links;
            this._embedded = embedded;
        }
        Resource.prototype.findLinks = function (rel) {
            var linksWithRel = this._links[rel];
            if (!linksWithRel)
                return [];
            return linksWithRel;
        };
        Resource.prototype.findLink = function (rel, name) {
            var linksWithRel = this.findLinks(rel);
            if (linksWithRel.length === 0)
                return undefined;
            if (name)
                return linksWithRel.find(function (link) { return link.name === name; });
            return linksWithRel[0];
        };
        Resource.prototype.findEmbedded = function (rel) {
            var embeddedWithRel = this._embedded[rel];
            if (!embeddedWithRel)
                return [];
            return embeddedWithRel;
        };
        Resource.prototype.getFormLinkHrefs = function () {
            var allLinks = this._links;
            if (!allLinks)
                return [];
            return Object.keys(allLinks)
                .filter(function (key) { return Resource.isUrl(key); });
        };
        Resource.isUrl = function (possibleUrl) {
            try {
                new URL(possibleUrl);
                return true;
            }
            catch (_a) {
                return false;
            }
        };
        //public static fromDto(dto: ResourceDto): Resource;
        //public static fromDto<TResource extends Resource>(dto: ResourceDto, TResource: { new(dto: ResourceDto): TResource }): TResource;
        Resource.fromDto = function (dto, TResource) {
            var links = !(dto === null || dto === void 0 ? void 0 : dto._links) ? {} : Object.fromEntries(Object.entries(dto._links).map(function (_b) {
                var _c = __read(_b, 2), rel = _c[0], links = _c[1];
                return [rel, Link.fromDtos(links)];
            }));
            var embedded = !(dto === null || dto === void 0 ? void 0 : dto._embedded) ? {} : Object.fromEntries(Object.entries(dto._embedded).map(function (_b) {
                var _c = __read(_b, 2), rel = _c[0], embeddedResourceDtos = _c[1];
                return [rel, Resource.fromDtos(embeddedResourceDtos, TResource)];
            }));
            var dtoWithParsedDates = Resource.parseDates(dto);
            var resource = Object.assign(TResource ? new TResource(dto) : new Resource(dto), dtoWithParsedDates, { _embedded: embedded, _links: links });
            return resource;
        };
        Resource.fromDtos = function (dtos, TResource) {
            if (!dtos)
                return [];
            var resources = dtos
                .filter(function (dto) { return !!dto; })
                .map(function (dto) { return Resource.fromDto(dto, TResource); });
            return resources;
        };
        Resource.parseDates = function (dto) {
            var e_1, _b;
            if (dto === null || dto === undefined)
                return dto;
            if (___namespace.isString(dto)) {
                if (this._iso8601RegEx.test(dto))
                    return new Date(dto);
            }
            else if (___namespace.isArray(dto)) {
                for (var i = 0; i < dto.length; i++) {
                    dto[i] = this.parseDates(dto[i]);
                }
            }
            else if (___namespace.isPlainObject(dto)) {
                try {
                    for (var _c = __values(Object.entries(dto)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var _e = __read(_d.value, 2), key = _e[0], value = _e[1];
                        dto[key] = this.parseDates(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            return dto;
        };
        return Resource;
    }());
    Resource._iso8601RegEx = /^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;

    ;
    exports.PropertyType = void 0;
    (function (PropertyType) {
        PropertyType["Hidden"] = "hidden";
        PropertyType["Text"] = "text";
        PropertyType["Textarea"] = "textarea";
        PropertyType["Search"] = "search";
        PropertyType["Tel"] = "tel";
        PropertyType["Url"] = "url";
        PropertyType["Email"] = "email";
        PropertyType["Password"] = "password";
        PropertyType["Date"] = "date";
        PropertyType["Month"] = "month";
        PropertyType["Week"] = "week";
        PropertyType["Time"] = "time";
        PropertyType["DatetimeLocal"] = "datetime-local";
        PropertyType["Number"] = "number";
        PropertyType["Range"] = "range";
        PropertyType["Color"] = "color";
        PropertyType["Bool"] = "bool";
        PropertyType["DatetimeOffset"] = "datetime-offset";
        PropertyType["Duration"] = "duration";
        PropertyType["Image"] = "image";
        PropertyType["File"] = "file";
        PropertyType["Collection"] = "collection";
        PropertyType["Object"] = "object";
    })(exports.PropertyType || (exports.PropertyType = {}));
    var Options = /** @class */ (function () {
        function Options(dto) {
            this.inline = [];
            Object.assign(this, dto);
            if (!this.inline)
                this.inline = [];
        }
        return Options;
    }());
    var Property = /** @class */ (function () {
        function Property(dto) {
            Object.assign(this, dto);
            this._templates = !(dto === null || dto === void 0 ? void 0 : dto._templates) ? {} : Object.fromEntries(Object.entries(dto._templates).map(function (_a) {
                var _b = __read(_a, 2), rel = _b[0], templateDto = _b[1];
                return [rel, new Template(templateDto)];
            }));
            if (this.options)
                this.options = new Options(dto === null || dto === void 0 ? void 0 : dto.options);
        }
        return Property;
    }());
    ;
    var Template = /** @class */ (function () {
        function Template(dto) {
            Object.assign(this, dto);
            this.properties = !(dto === null || dto === void 0 ? void 0 : dto.properties) ? [] : dto.properties.map(function (propertyDto) { return new Property(propertyDto); });
        }
        Object.defineProperty(Template.prototype, "values", {
            get: function () {
                return !this.properties ? {} : Object.fromEntries(this.properties.map(function (property) { return [property.name, property.value]; }));
            },
            enumerable: false,
            configurable: true
        });
        return Template;
    }());
    var FormsResource = /** @class */ (function (_super) {
        __extends(FormsResource, _super);
        function FormsResource(dto) {
            var _this = _super.call(this, dto) || this;
            _this._templates = !(dto === null || dto === void 0 ? void 0 : dto._templates) ? {} : Object.fromEntries(Object.entries(dto._templates).map(function (_a) {
                var _b = __read(_a, 2), rel = _b[0], templateDto = _b[1];
                return [rel, new Template(templateDto)];
            }));
            return _this;
        }
        FormsResource.prototype.getTemplate = function (name) {
            var templateNames = Object.getOwnPropertyNames(this._templates);
            if (!templateNames.includes(name))
                throw new Error("The form " + this + " does not have a _template with the name '" + name + "'. It only has " + templateNames + ".");
            var template = this._templates[name];
            return template;
        };
        return FormsResource;
    }(Resource));

    var ListResource = /** @class */ (function (_super) {
        __extends(ListResource, _super);
        function ListResource(dto) {
            var _this = _super.call(this, dto) || this;
            if (!ListResource.isListResource(_this))
                throw new TypeError("The resource " + dto + " is not a ListResource.");
            return _this;
        }
        ListResource.isListResource = function (resource) {
            var _a, _b;
            return !!((_b = (_a = resource) === null || _a === void 0 ? void 0 : _a._embedded) === null || _b === void 0 ? void 0 : _b.items);
        };
        return ListResource;
    }(Resource));

    var PagedListResource = /** @class */ (function (_super) {
        __extends(PagedListResource, _super);
        function PagedListResource(dto) {
            return _super.call(this, dto) || this;
        }
        return PagedListResource;
    }(ListResource));

    /*
     * Public API Surface of ngx-hal-client
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FormsResource = FormsResource;
    exports.HalClient = HalClient;
    exports.HalClientModule = HalClientModule;
    exports.Link = Link;
    exports.ListResource = ListResource;
    exports.Options = Options;
    exports.PagedListResource = PagedListResource;
    exports.Property = Property;
    exports.Resource = Resource;
    exports.Template = Template;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=wertzui-ngx-hal-client.umd.js.map
