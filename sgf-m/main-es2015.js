(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+JMX":
/*!*****************************************!*\
  !*** ./src/app/service/crud.service.ts ***!
  \*****************************************/
/*! exports provided: CrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudService", function() { return CrudService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "/IUn");




class CrudService {
    constructor(http, apollo) {
        this.http = http;
        this.apollo = apollo;
        this.base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].serverUrl;
    }
    postObject(data, endPoint) {
        // let headers = new HttpHeaders({
        //   "Content-Type": contentType,
        // });
        // let options =  {
        //   headers: headers
        // };
        return this.http.post(this.base_url + endPoint, data);
    }
    pullData(query, data) {
        return this.apollo
            .query({
            query: query,
            variables: data,
            fetchPolicy: "network-only",
            errorPolicy: 'all'
        });
    }
    postData(query, postData) {
        return this.apollo
            .mutate({
            mutation: query,
            variables: postData,
            errorPolicy: 'all'
        });
    }
    calculatePercantage(a, b, t, aggregation) {
        let value = 0;
        switch (aggregation) {
            case '+':
                value = (a - b) / (t - b) * 100;
                break;
            case '-':
                value = (b - a) / (b - t) * 100;
                break;
            default:
                break;
        }
        if (value < 0) {
            value = 0;
        }
        else if (value > 100) {
            value = 100;
        }
        return value;
    }
}
CrudService.ɵfac = function CrudService_Factory(t) { return new (t || CrudService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"])); };
CrudService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CrudService, factory: CrudService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "/de2":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class UserProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 2, vars: 0, template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "user-profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/natview/sgf/SGF-Dashboard/src/main.ts */"zUnb");


/***/ }),

/***/ "07TT":
/*!************************************************!*\
  !*** ./src/app/guage/guage/guage.component.ts ***!
  \************************************************/
/*! exports provided: GuageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuageComponent", function() { return GuageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = function (a0) { return { "color": a0 }; };
class GuageComponent {
    constructor() { }
    ngOnInit() {
        var gauge = this.Gauge(document.getElementById("gauge"));
        let percent = (this.getPercentage() / 100);
        gauge.value(this.getPercentage() / 100);
        document.getElementById("gauge-container").addEventListener("mouseenter", function () {
            gauge.value(0.01);
        });
        document.getElementById("gauge-container").addEventListener("mouseover", function () {
            gauge.value(percent);
        });
        document.getElementById("gauge-container").addEventListener("mouseout", function () {
            gauge.value(percent);
        });
    }
    getPercentage() {
        this.baseline = this.childIndicator.baseline;
        this.actual = this.childIndicator.actual;
        this.target = this.childIndicator.target;
        let percentage = 0;
        percentage = (this.actual / (this.target - this.baseline)) * 100;
        return percentage;
    }
    setColor() {
        let r = this.getPercentage();
        if (r <= 33.3) {
            return 'red';
        }
        if (r > 33.3 && r <= 66.6) {
            return '#ffbf00';
        }
        if (r > 66.6) {
            return 'green';
        }
    }
    Gauge(el) {
        // ##### Private Properties and Attributes
        var element, // Containing element for the info component
        data, // `.gauge--data` element
        needle, // `.gauge--needle` element
        value = 0.0, // Current gauge value from 0 to 1
        prop; // Style for transform
        // ##### Private Methods and Functions
        var setElement = function (el) {
            // Keep a reference to the various elements and sub-elements
            element = el;
            data = element.querySelector(".gauge--data");
            needle = element.querySelector(".gauge--needle");
        };
        var setValue = function (x) {
            value = x;
            var turns = -0.5 + (x * 0.5);
            data.style[prop] = "rotate(" + turns + "turn)";
            needle.style[prop] = "rotate(" + turns + "turn)";
        };
        // ##### Object to be Returned
        var exports = {
            element: function (el) {
                if (!arguments.length) {
                    return element;
                }
                setElement(el);
                return this;
            },
            value: function (x) {
                if (!arguments.length) {
                    return value;
                }
                setValue(x);
                return this;
            }
        };
        // ##### Public API Methods
        // ##### Initialization
        var body = document.getElementsByTagName("body")[0];
        ["webkitTransform", "mozTransform", "msTransform", "oTransform", "transform"].
            forEach(function (p) {
            if (typeof body.style[p] !== "undefined") {
                prop = p;
            }
        });
        if (arguments.length) {
            setElement(el);
        }
        return exports;
    }
    ;
}
GuageComponent.ɵfac = function GuageComponent_Factory(t) { return new (t || GuageComponent)(); };
GuageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuageComponent, selectors: [["app-guage"]], inputs: { childIndicator: "childIndicator" }, decls: 14, vars: 9, consts: [["id", "gauge", 1, "gauge", "gauge__liveupdate"], ["id", "gauge-container", 1, "gauge--container"], [1, "gauge--marker"], [1, "gauge--background"], [1, "gauge--center"], [1, "gauge--data", 3, "ngStyle"], [1, "gauge--needle"], [1, "gauge--labels", "mdl-typography--headline"], [1, "gauge--label__low"], [1, "gauge--label__spacer", 2, "text-align", "center", "font-size", "1.5rem", 3, "ngStyle"], [1, "gauge--label__high"]], template: function GuageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.setColor()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.baseline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.setColor()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actual);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.target);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".gauge[_ngcontent-%COMP%] {\n  position: relative;\n}\n.gauge--container[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  left: 50%;\n  overflow: hidden;\n  text-align: center;\n  transform: translateX(-50%);\n}\n.gauge--background[_ngcontent-%COMP%] {\n  z-index: 0;\n  position: absolute;\n  background-color: var(--font-color);\n  top: 0;\n  border-radius: 300px 300px 0 0;\n}\n.gauge--data[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  background-color: #007979;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 300px 300px 0 0;\n  transform-origin: center bottom;\n}\n.gauge--center[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: absolute;\n  background-color: var(--card-bkg);\n  margin-right: auto;\n  border-radius: 300px 300px 0px 0px;\n}\n.gauge--marker[_ngcontent-%COMP%] {\n  z-index: 3;\n  background-color: #C0D3D3;\n  position: absolute;\n  width: 1px;\n}\n.gauge--needle[_ngcontent-%COMP%] {\n  z-index: 4;\n  background-color: #F77C15;\n  height: 3px;\n  position: absolute;\n  transform-origin: left center;\n}\n.gauge--labels[_ngcontent-%COMP%] {\n  display: table;\n  margin: 0 auto;\n  position: relative;\n}\n.gauge--label__low[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n}\n.gauge--label__spacer[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n.gauge--label__high[_ngcontent-%COMP%] {\n  display: table-cell;\n  text-align: center;\n}\n\n.gauge[_ngcontent-%COMP%] {\n  height: calc(120px + 3em);\n}\n.gauge--container[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 120px;\n}\n.gauge--marker[_ngcontent-%COMP%] {\n  height: 10px;\n  left: 119.5px;\n}\n.gauge--background[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 120px;\n}\n\n.gauge--center[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 110px;\n  top: 10px;\n  margin-left: 10px;\n}\n.gauge--data[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 120px;\n}\n.gauge--needle[_ngcontent-%COMP%] {\n  left: 120px;\n  top: 117px;\n  width: 120px;\n}\n.gauge--labels[_ngcontent-%COMP%] {\n  top: 120px;\n  width: 240px;\n}\n.gauge--label__low[_ngcontent-%COMP%] {\n  width: 48px;\n}\n.gauge--label__spacer[_ngcontent-%COMP%] {\n  width: 144px;\n}\n.gauge--label__high[_ngcontent-%COMP%] {\n  width: 48px;\n}\n\n.gauge__liveupdate[_ngcontent-%COMP%]   .gauge--data[_ngcontent-%COMP%], .gauge__liveupdate[_ngcontent-%COMP%]   .gauge--needle[_ngcontent-%COMP%] {\n  transition: all 1s ease-in-out;\n}\n\n.gauge--data[_ngcontent-%COMP%] {\n  transform: rotate(-0.5turn);\n}\n.gauge--needle[_ngcontent-%COMP%] {\n  transform: rotate(-0.5turn);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2d1YWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOztLQUFBO0FBSUE7Ozs7S0FBQTtBQU1BO0VBQ0ksa0JBQUE7QUFGSjtBQUtBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBS1EsMkJBQUE7QUFGWjtBQUtBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxNQUFBO0VBQ0EsOEJBQUE7QUFGSjtBQUtBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFLUSwrQkFBQTtBQUZaO0FBS0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFGSjtBQUtBO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRko7QUFLQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUtRLDZCQUFBO0FBRlo7QUFLQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUtBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUZKO0FBS0E7RUFDSSxtQkFBQTtBQUZKO0FBS0E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFLQTs7Q0FBQTtBQUdBO0VBQVMseUJBQUE7QUFEVDtBQUVBO0VBQW9CLFlBQUE7RUFBYyxhQUFBO0FBR2xDO0FBRkE7RUFBaUIsWUFBQTtFQUFjLGFBQUE7QUFPL0I7QUFOQTtFQUFxQixZQUFBO0VBQWMsYUFBQTtBQVduQztBQVZBLG9GQUFBO0FBQ0E7RUFBaUIsWUFBQTtFQUFjLGFBQUE7RUFBZSxTQUFBO0VBQVcsaUJBQUE7QUFpQnpEO0FBaEJBO0VBQWUsWUFBQTtFQUFjLGFBQUE7QUFxQjdCO0FBcEJBO0VBQWlCLFdBQUE7RUFBYSxVQUFBO0VBQVksWUFBQTtBQTBCMUM7QUF6QkE7RUFBaUIsVUFBQTtFQUFZLFlBQUE7QUE4QjdCO0FBN0JBO0VBQXFCLFdBQUE7QUFpQ3JCO0FBaENBO0VBQXdCLFlBQUE7QUFvQ3hCO0FBbkNBO0VBQXNCLFdBQUE7QUF1Q3RCO0FBckNBOzs7Ozs7Ozs7O0NBQUE7QUFZQTs7RUFNWSw4QkFBQTtBQXVDWjtBQXBDQTs7Ozs7Q0FBQTtBQU9BO0VBS1ksMkJBQUE7QUFzQ1o7QUFwQ0E7RUFLWSwyQkFBQTtBQXVDWiIsImZpbGUiOiJndWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLypcbiAgICAqICMjIyMgR2F1Z2UgQ29tcG9uZW50XG4gICAgKi9cblxuLypcbiAgICAqIEZpcnN0IGRlZmluZSBhbGwgb2YgdGhlIHJlbGV2YW50IHJ1bGVzIHRoYXQgYXJlbid0IGRlcGVuZGVudFxuICAgICogb24gdGhlIHNpemUgb2YgdGhlIGdhdWdlLiBXZSB3YW50IHRvIGNvbGxlY3QgdGhlIHNpemUtZGVwZW5lbnRcbiAgICAqIHJ1bGVzIGluIG9uZSBwbGFjZSB0byBtYWtlIGl0IGVhc2llciB0byBhZGp1c3QgdGhlIHNpemUuXG4gICAgKi9cblxuLmdhdWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5nYXVnZS0tY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmdhdWdlLS1iYWNrZ3JvdW5kIHtcbiAgICB6LWluZGV4OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgICB0b3A6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMzAwcHggMzAwcHggMCAwO1xufVxuXG4uZ2F1Z2UtLWRhdGEge1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc5Nzk7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwMHB4IDMwMHB4IDAgMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICAgICAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbn1cblxuLmdhdWdlLS1jZW50ZXIge1xuICAgIHotaW5kZXg6IDI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmtnKTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMzAwcHggMzAwcHggMHB4IDBweDtcbn1cblxuLmdhdWdlLS1tYXJrZXIge1xuICAgIHotaW5kZXg6IDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0MwRDNEMztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDtcbn1cblxuLmdhdWdlLS1uZWVkbGUge1xuICAgIHotaW5kZXg6IDQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3N0MxNTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICAgICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICAgICAgLW1zLXRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICAgICAgICAgICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbn1cblxuLmdhdWdlLS1sYWJlbHMge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmdhdWdlLS1sYWJlbF9fbG93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdhdWdlLS1sYWJlbF9fc3BhY2VyIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uZ2F1Z2UtLWxhYmVsX19oaWdoIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLypcbiAgICAqIEluY3JlYXNlIHRoZSBnYXVnZSBzaXplIHNsaWdodGx5IG9uIGxhcmdlciB2aWV3cG9ydHMuXG4qL1xuLmdhdWdlIHsgaGVpZ2h0OiBjYWxjKDEyMHB4ICsgM2VtKTsgfVxuLmdhdWdlLS1jb250YWluZXIgeyB3aWR0aDogMjQwcHg7IGhlaWdodDogMTIwcHg7IH1cbi5nYXVnZS0tbWFya2VyIHsgaGVpZ2h0OiAxMHB4OyBsZWZ0OiAxMTkuNXB4OyB9XG4uZ2F1Z2UtLWJhY2tncm91bmQgeyB3aWR0aDogMjQwcHg7IGhlaWdodDogMTIwcHg7IH1cbi8qIFx0XHRcdC5nYXVnZS0tY2VudGVyIHsgd2lkdGg6IDE0NHB4OyBoZWlnaHQ6IDcycHg7IHRvcDogNDhweDsgbWFyZ2luLWxlZnQ6IDQ4cHg7IH0gKi9cbi5nYXVnZS0tY2VudGVyIHsgd2lkdGg6IDIyMHB4OyBoZWlnaHQ6IDExMHB4OyB0b3A6IDEwcHg7IG1hcmdpbi1sZWZ0OiAxMHB4OyB9XG4uZ2F1Z2UtLWRhdGEgeyB3aWR0aDogMjQwcHg7IGhlaWdodDogMTIwcHg7IH1cbi5nYXVnZS0tbmVlZGxlIHsgbGVmdDogMTIwcHg7IHRvcDogMTE3cHg7IHdpZHRoOiAxMjBweDsgfVxuLmdhdWdlLS1sYWJlbHMgeyB0b3A6IDEyMHB4OyB3aWR0aDogMjQwcHg7IH1cbi5nYXVnZS0tbGFiZWxfX2xvdyB7IHdpZHRoOiA0OHB4OyB9XG4uZ2F1Z2UtLWxhYmVsX19zcGFjZXIgeyB3aWR0aDogMTQ0cHg7IH1cbi5nYXVnZS0tbGFiZWxfX2hpZ2ggeyB3aWR0aDogNDhweDsgfVxuXG4vKlxuICAgICogQXMgYW4gb3B0aW9uLCB0aGUgYGdhdWdlX19saXZldXBkYXRlYCBjbGFzcyBjYW4gYmUgYWRkZWRcbiAgICAqIHRvIHRoZSBtYWluIGdhdWdlIGVsZW1lbnQuIFdoZW4gdGhpcyBjbGFzcyBpcyBwcmVzZW50LFxuICAgICogd2UgYWRkIGEgdHJhbnNpdGlvbiB0aGF0IGFuaW1hdGVzIGFueSBjaGFuZ2VzIHRvIHRoZSBnYXVnZVxuICAgICogdmFsdWUuIEN1cnJlbnRseSwgdGhlIGFwcCBkb2VzIG5vdCB1c2UgdGhpcyBvcHRpb24gYmVjYXVzZVxuICAgICogYWxsIHRoZSBpbnB1dHMgdGhhdCBjYW4gY2hhbmdlIGdhdWdlIHZhbHVlcyBhcmUgcHJlc2VudFxuICAgICogb24gdGFiIHBhbmVscyB0aGF0IGFyZSBkaWZmZXJlbnQgZnJvbSB0aGUgZ2F1Z2UgaXRzZWxmLlxuICAgICogVGhlcmVmb3JlLCB1c2VycyB3b24ndCBiZSBhYmxlIHRvIHNlZSBhbnkgZ2F1Z2UgY2hhbmdlc1xuICAgICogd2hlbiB0aGV5IG1ha2UgaW5wdXQgY2hhbmdlcy4gVGhlIGNvZGUgaXMgYXZhaWxhYmxlLCB0aG91Z2gsXG4gICAgKiBzaG91bGQgdGhpcyBjaGFuZ2UuXG4qL1xuXG4uZ2F1Z2VfX2xpdmV1cGRhdGUgLmdhdWdlLS1kYXRhLFxuLmdhdWdlX19saXZldXBkYXRlIC5nYXVnZS0tbmVlZGxlIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG59ICAgICAgICAgICAgXG5cbi8qXG4gICAgKiBGb3IgYSBnaXZlbiBnYXVnZSB2YWx1ZSwgeCwgcmFuZ2luZyBmcm9tIDAuMCB0byAxLjAsIHNldFxuICAgICogdGhlIGB0cmFuc2Zvcm06IHJvdGF0ZSgpYCBwcm9wZXJ0eSBhY2NvcmRpbmcgdG8gdGhlXG4gICAgKiBmb2xsb3dpbmcgZXF1YXRpb246IGAtMC41ICsgMC41eCB0dXJuc2AgVGhlIGRlZmF1bHRcbiAgICAqIHByb3BlcnRpZXMgYmVsb3cgcmVwcmVzZW50IGFuIHggdmFsdWUgb2YgMC5cbiovXG5cbi5nYXVnZS0tZGF0YSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtLjUwdHVybik7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLS41MHR1cm4pO1xuICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLS41MHR1cm4pO1xuICAgICAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoLS41MHR1cm4pO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLS41MHR1cm4pO1xufVxuLmdhdWdlLS1uZWVkbGUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLS41MHR1cm4pO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0uNTB0dXJuKTtcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC0uNTB0dXJuKTtcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKC0uNTB0dXJuKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0uNTB0dXJuKTtcbn0iXX0= */"] });


/***/ }),

/***/ "3dTk":
/*!*****************************!*\
  !*** ./src/app/mda/sp.json ***!
  \*****************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"ref\":0,\"baseline\":0,\"actual\":0,\"factual\":0,\"target\":0,\"ftarget\":0,\"fbaseline\":0,\"aggregation\":\"+\",\"rt\":\"#\",\"currency\":\"₦\",\"active\":1,\"_id\":\"5c584fa29edc054ec01a16f2\",\"outputs\":[{\"ref\":0,\"baseline\":200,\"actual\":80,\"factual\":0,\"target\":300,\"ftarget\":100000000,\"fbaseline\":20000000,\"projects\":[{\"ref\":0,\"baseline\":0,\"currency\":\"₦\",\"_id\":\"5c5850709edc054ec01a16f6\",\"title\":\"ICT resource center training\",\"budget\":81000000,\"type\":\"1\",\"start_date\":\"2018-03-02T00:00:00.000Z\",\"end_date\":\"2019-04-01T00:00:00.000Z\",\"createdAt\":\"2019-02-04T14:47:12.325Z\",\"updatedAt\":\"2019-02-04T14:57:08.518Z\",\"__v\":7},{\"ref\":0,\"baseline\":0,\"currency\":\"₦\",\"_id\":\"5c5850709edc054ec01a16f6\",\"title\":\"Food center training\",\"budget\":92100000,\"type\":\"1\",\"start_date\":\"2018-03-02T00:00:00.000Z\",\"end_date\":\"2019-04-01T00:00:00.000Z\",\"createdAt\":\"2019-02-04T14:47:12.325Z\",\"updatedAt\":\"2019-02-04T14:57:08.518Z\",\"__v\":7}],\"rt\":\"#\",\"currency\":\"₦\",\"aggregation\":\"+\",\"active\":1,\"_id\":\"5c584fd09edc054ec01a16f4\",\"title\":\"Number of people with skilled ICT Knowledge\",\"outcome\":\"5c584fa29edc054ec01a16f2\",\"hub\":\"5c543aa39fed15780d1538de\",\"createdAt\":\"2019-02-04T14:44:32.055Z\",\"updatedAt\":\"2019-02-05T11:54:57.999Z\",\"__v\":1,\"frequency\":null},{\"ref\":0,\"baseline\":200,\"actual\":80,\"factual\":0,\"target\":300,\"ftarget\":100000000,\"fbaseline\":20000000,\"rt\":\"#\",\"currency\":\"₦\",\"aggregation\":\"+\",\"projects\":[{\"ref\":0,\"baseline\":0,\"currency\":\"₦\",\"states\":[\"Borno\",\"Yobe\",\"Adamawa\"],\"stakeholder\":[\"5c584d9e9edc054ec01a16e3\",\"5c584d9e9edc054ec01a16e3\"],\"int_shs\":[\"5c5850709edc054ec01a16f7\"],\"active\":0,\"projects\":[\"5c5851359edc054ec01a16fb\",\"5c58518d9edc054ec01a16fe\",\"5c5851e19edc054ec01a1700\"],\"releases\":[\"5c58526b9edc054ec01a1704\",\"5c58528d9edc054ec01a1706\",\"5c5852c49edc054ec01a1708\"],\"total_releases\":105000000,\"_id\":\"5c5850709edc054ec01a16f6\",\"title\":\"ICT resource center training\",\"budget\":81000000,\"type\":\"1\",\"start_date\":\"2018-03-02T00:00:00.000Z\",\"end_date\":\"2019-04-01T00:00:00.000Z\",\"output\":\"5c584fd09edc054ec01a16f4\",\"creator\":\"5c584d9e9edc054ec01a16e3\",\"createdAt\":\"2019-02-04T14:47:12.325Z\",\"updatedAt\":\"2019-02-04T14:57:08.518Z\",\"__v\":7}],\"active\":1,\"_id\":\"5c584fd09edc054ec01a16f4\",\"title\":\"Number of people with skilled ICT Knowledge\",\"outcome\":\"5c584fa29edc054ec01a16f2\",\"hub\":\"5c543aa39fed15780d1538de\",\"createdAt\":\"2019-02-04T14:44:32.055Z\",\"updatedAt\":\"2019-02-05T11:54:57.999Z\",\"__v\":1,\"frequency\":null}],\"title\":\"% of Population with Skilled ICT\",\"objective\":\"5c584f859edc054ec01a16f0\",\"createdAt\":\"2019-02-04T14:43:46.623Z\",\"updatedAt\":\"2019-02-04T14:47:12.345Z\",\"__v\":1},{\"ref\":0,\"baseline\":0,\"actual\":0,\"factual\":0,\"target\":0,\"ftarget\":0,\"fbaseline\":0,\"aggregation\":\"+\",\"rt\":\"#\",\"currency\":\"₦\",\"outputs\":[{\"ref\":0,\"baseline\":200,\"actual\":80,\"factual\":0,\"target\":300,\"ftarget\":100000000,\"fbaseline\":20000000,\"rt\":\"#\",\"currency\":\"₦\",\"aggregation\":\"+\",\"projects\":[{\"ref\":0,\"baseline\":0,\"currency\":\"₦\",\"_id\":\"5c5850709edc054ec01a16f6\",\"title\":\"ICT resource center training\",\"budget\":81000000,\"type\":\"1\",\"start_date\":\"2018-03-02T00:00:00.000Z\",\"end_date\":\"2019-04-01T00:00:00.000Z\",\"createdAt\":\"2019-02-04T14:47:12.325Z\",\"updatedAt\":\"2019-02-04T14:57:08.518Z\",\"__v\":7},{\"ref\":0,\"baseline\":0,\"currency\":\"₦\",\"_id\":\"5c5850709edc054ec01a16f6\",\"title\":\"Food center training\",\"budget\":92100000,\"type\":\"1\",\"start_date\":\"2018-03-02T00:00:00.000Z\",\"end_date\":\"2019-04-01T00:00:00.000Z\",\"createdAt\":\"2019-02-04T14:47:12.325Z\",\"updatedAt\":\"2019-02-04T14:57:08.518Z\",\"__v\":7}],\"active\":1,\"_id\":\"5c584fd09edc054ec01a16f4\",\"title\":\"Number of people with skilled ICT Knowledge\",\"outcome\":\"5c584fa29edc054ec01a16f2\",\"hub\":\"5c543aa39fed15780d1538de\",\"createdAt\":\"2019-02-04T14:44:32.055Z\",\"updatedAt\":\"2019-02-05T11:54:57.999Z\",\"__v\":1,\"frequency\":null}],\"active\":1,\"_id\":\"5c584fa29edc054ec01a16f2\",\"title\":\"% of Population ICT\",\"objective\":\"5c584f859edc054ec01a16f0\",\"createdAt\":\"2019-02-04T14:43:46.623Z\",\"updatedAt\":\"2019-02-04T14:47:12.345Z\",\"__v\":1}]");

/***/ }),

/***/ "4KHl":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client/core */ "ALmS");
/* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular/http */ "E21e");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





const uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverUrl + "graphql"; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri }),
        cache: new _apollo_client_core__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"](),
    };
}
class GraphQLModule {
}
GraphQLModule.ɵfac = function GraphQLModule_Factory(t) { return new (t || GraphQLModule)(); };
GraphQLModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: GraphQLModule });
GraphQLModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        {
            provide: apollo_angular__WEBPACK_IMPORTED_MODULE_0__["APOLLO_OPTIONS"],
            useFactory: createApollo,
            deps: [apollo_angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]],
        },
    ] });


/***/ }),

/***/ "6nnL":
/*!************************************************************!*\
  !*** ./src/app/account/user-login/user-login.component.ts ***!
  \************************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-angular */ "/IUn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/crud.service */ "+JMX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function UserLoginComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.error);
} }
function UserLoginComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserLoginComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UserLoginComponent_div_22_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
} }
function UserLoginComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserLoginComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, UserLoginComponent_div_25_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.required);
} }
const _c0 = function () { return ["/"]; };
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class UserLoginComponent {
    constructor(formBuilder, router, crud) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.crud = crud;
        this.postForm = this.formBuilder.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
        let token = localStorage.getItem('token');
        if (token) {
            this.router.navigate(['/dashboard']);
        }
    }
    get f() {
        return this.postForm.controls;
    }
    ngOnInit() {
    }
    login() {
        this.submitted = true;
        if (this.postForm.invalid) {
            return;
        }
        // let query = gql`
        let query = apollo_angular__WEBPACK_IMPORTED_MODULE_1__["gql"] `
    mutation login(
      $email: String!
      $password: String!){
        login(email: $email, password: $password) {
          token,
          user{
            id 
            name
            access
            email
            role{
              name
              permissions
            }
            mda{
              id
              name
              shortcode
            }
          }
        }
      }
    `;
        this.crud.postData(query, this.postForm.value).subscribe((result) => {
            if (!result.data['login']) {
                this.error = result.errors[0].message;
            }
            let access;
            localStorage.setItem('token', result.data['login'].token);
            localStorage.setItem('permissions', JSON.stringify(result.data['login'].user.role.permissions));
            localStorage.setItem('user', JSON.stringify(result.data['login'].user));
            localStorage.setItem('mda', JSON.stringify(result.data['login'].user.mda));
            localStorage.setItem('activeYear', '' + new Date().getFullYear());
            let activityInput = {
                type: 'Admin Access',
                operation: 'login',
                userId: result.data['login'].user.id,
            };
            this.router.navigate(['/dashboard']);
        });
    }
}
UserLoginComponent.ɵfac = function UserLoginComponent_Factory(t) { return new (t || UserLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"])); };
UserLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserLoginComponent, selectors: [["app-user-login"]], decls: 31, vars: 12, consts: [[1, "wrapper", "d-flex", "justify-content-center", "align-items-center", "justify-content-center"], [1, "primary-border", "d-flex", "p-0", "col-7", "h-75"], [1, "image-content", "d-flex", "justify-content-around", "flex-column", "col-5", "text-center"], [3, "routerLink"], ["src", "assets/images/Coat_of_arms_of_Nigeria.png", "height", "200px"], [1, "col-7", "d-flex", "justify-content-center", "align-items-center"], [1, "w-75"], [1, "text-center", "mb-5"], [1, "mb-4"], [1, "text-warning"], [3, "formGroup", "ngSubmit"], ["class", "text-center m-2 error", 4, "ngIf"], [1, "form-group"], ["type", "text", "formControlName", "email", "required", "", "placeholder", "Email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "password", "formControlName", "password", "required", "", "placeholder", "Password", 1, "form-control", 3, "ngClass"], [1, "form-group", "text-right"], [1, "cursor"], [1, "form-group", "text-center"], ["type", "submit", "value", "Login", 1, "btn", "btn-success", "px-5"], [1, "text-center", "m-2", "error"], [1, "invalid-feedback"], [4, "ngIf"]], template: function UserLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Office of the secretary to the government of the federation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Central Delivery Cordination Unit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "WELCOME !");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "This is the Performance Dashboard highlighting the 9 Priority Areas of the Federal Government.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Please Insert Your Details to Proceed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function UserLoginComponent_Template_form_ngSubmit_18_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, UserLoginComponent_p_19_Template, 2, 1, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, UserLoginComponent_div_22_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, UserLoginComponent_div_25_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.postForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](8, _c1, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c1, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n  width: 100%;\n  background: var(--body-bkg);\n  background-position: center;\n  background-size: cover;\n}\n\n.primary-border[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n\n.image-content[_ngcontent-%COMP%] {\n  background: var(--font-color);\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n\n.image-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .image-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: var(--body-bkg);\n  text-transform: uppercase;\n}\n\n.login-container[_ngcontent-%COMP%] {\n  box-shadow: -2px 0px 5px #f5f5f5, 2px 2px 5px #f5f5f5;\n  background: var(--card-bks);\n}\n\n.banner[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 172, 86, 0.7);\n}\n\n.is-invalid[_ngcontent-%COMP%] {\n  border: soild 1px red;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #CC2615;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  background: var(--body-bkg);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3VzZXItbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBR0E7RUFDRSxxREFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7QUFBRjs7QUFHQTtFQUNFLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSwyQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtBQUFGIiwiZmlsZSI6InVzZXItbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJvZHktYmtnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucHJpbWFyeS1ib3JkZXJ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5pbWFnZS1jb250ZW50e1xuICBiYWNrZ3JvdW5kOnZhcigtLWZvbnQtY29sb3IpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuXG4gIGg0LCBoNXtcbiAgICBjb2xvcjogdmFyKC0tYm9keS1ia2cpO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIH1cbn1cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IC0ycHggMHB4IDVweCAjZjVmNWY1LCAycHggMnB4IDVweCAjZjVmNWY1O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJrcyk7XG59XG5cbi5iYW5uZXIgLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTcyLCA4NiwgLjcpO1xufVxuXG4uaXMtaW52YWxpZCB7XG4gIGJvcmRlcjogc29pbGQgMXB4IHJlZDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6ICNDQzI2MTVcbn1cblxuLmZvcm0tY29udHJvbHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9keS1ia2cpO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXI6IG5vbmU7XG59XG4iXX0= */"] });


/***/ }),

/***/ "70H3":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function SettingsComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SettingsComponent_div_87_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.activeYear = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.activeYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "year" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", "year" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1, " ");
} }
const _c0 = function () { return ["/dashboard/mandates"]; };
class SettingsComponent {
    constructor(toastr) {
        this.toastr = toastr;
        if (!localStorage.getItem('years')) {
            this.years = ['2019', '2020', '2021'];
            localStorage.setItem('years', JSON.stringify(this.years));
        }
        else {
            this.years = JSON.parse(localStorage.getItem('years'));
        }
        this.years.reverse();
    }
    ngOnInit() {
    }
    setCurrentYear() {
        localStorage.setItem('activeYear', this.activeYear);
        this.toastr.success("Focus year changed to " + this.activeYear + " successfully", "Success");
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 90, vars: 3, consts: [[1, "col-11", "mx-auto", "mt-5"], [1, "row"], [1, "col-3"], [1, "position-relative"], [1, "list-group", "primary-border", "text-center", "position-fixed", 2, "width", "inherit"], [1, "list-group-item", "py-4", 2, "width", "inherit"], [1, "list-group-item", 2, "width", "inherit", "padding", "1.5rem 6rem"], [1, "col-9"], [1, "list-group", "primary-border", "text-center", "mb-3"], [1, "list-group-item", "py-4", "d-flex", "justify-content-between"], [1, "list-group-item", "py-3", "d-flex", "justify-content-between", "mb-0", "pr-5", 3, "routerLink"], ["src", "assets/icons/edit.svg", "alt", ""], [1, "list-group-item", "py-3", "d-flex", "justify-content-between", "mb-0", "pr-5"], [1, "list-group-item", "py-4", "d-flex", "justify-content-between", "mb-0"], [1, "text-secondary"], [1, "list-group-item", "py-3", "text-left"], [1, "d-flex", "justify-content-between", "mb-0"], [1, "text-danger"], [1, "fas", "fa-pencil-alt", "fa-lg", "text-danger"], [1, "fas", "fa-pencil-alt", "fa-lg", "text-secondary"], [1, "fas", "fa-arrow-right", "text-success", "fa-2x"], [1, "primary-border", "my-5"], [1, "container-header", "p-4", "pb-3", "d-flex", "justify-content-between"], [1, "mb-0", "label"], [1, "btn-group"], ["type", "button", "data-toggle", "modal", "data-target", "#addYearModal", 1, "btn", "btn-outline-success", "btn-sm"], [1, "fas", "fa-plus-circle", "fa-lg"], [1, "p-4"], ["class", "form-check mb-3", 4, "ngFor", "ngForOf"], [1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "form-check", "mb-3"], ["type", "radio", "name", "flexRadioDefault", 1, "form-check-input", 3, "value", "ngModel", "ngModelChange"], [1, "form-check-label"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "System Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "System Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Customize your dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Set Active Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Login Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "C.C Anna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "****************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "ccanns@caton.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Calendar Year Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Add Calendar Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, SettingsComponent_div_87_Template, 4, 5, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_88_listener() { return ctx.setCurrentYear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Set Calendar Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".list-group-item[_ngcontent-%COMP%] {\n  background-color: var(--card-bkg);\n  color: var(--font-color);\n  border: 1px solid rgba(111, 111, 118, 0.58);\n  border-left: hidden;\n  border-right: hidden;\n}\n\n.list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0.625rem;\n  border-top-right-radius: 0.625rem;\n  border-top: hidden;\n}\n\n.list-group-item[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 0.625rem;\n  border-bottom-right-radius: 0.625rem;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJzZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWl0ZW17XG4gICAgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1jYXJkLWJrZyk7XG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTExLCAxMTEsIDExOCwgMC41OCk7XG4gICAgYm9yZGVyLWxlZnQ6IGhpZGRlbjtcbiAgICBib3JkZXItcmlnaHQ6IGhpZGRlbjtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNjI1cmVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNjI1cmVtO1xuICAgIGJvcmRlci10b3A6IGhpZGRlbjtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxke1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC42MjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC42MjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn0iXX0= */"] });


/***/ }),

/***/ "7TvS":
/*!************************************************************************!*\
  !*** ./src/app/presidential-mandate/presidential-mandate.component.ts ***!
  \************************************************************************/
/*! exports provided: PresidentialMandateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresidentialMandateComponent", function() { return PresidentialMandateComponent; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/crud.service */ "+JMX");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/data.service */ "AwSQ");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "S8xs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-2-dropdown-multiselect */ "HoCe");











function PresidentialMandateComponent_accordion_group_8_li_5_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 15);
} }
function PresidentialMandateComponent_accordion_group_8_li_5_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 16);
} }
function PresidentialMandateComponent_accordion_group_8_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PresidentialMandateComponent_accordion_group_8_li_5_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const ind_r6 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.addToPreffered(ind_r6, "outcome"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PresidentialMandateComponent_accordion_group_8_li_5_img_1_Template, 1, 0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PresidentialMandateComponent_accordion_group_8_li_5_img_2_Template, 1, 0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ind_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.checkPref(ind_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.checkPref(ind_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0\u00A0 ", ind_r6.title, "");
} }
function PresidentialMandateComponent_accordion_group_8_li_8_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 15);
} }
function PresidentialMandateComponent_accordion_group_8_li_8_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 16);
} }
function PresidentialMandateComponent_accordion_group_8_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PresidentialMandateComponent_accordion_group_8_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const out_r11 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.addToPreffered(out_r11, "output"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PresidentialMandateComponent_accordion_group_8_li_8_img_1_Template, 1, 0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PresidentialMandateComponent_accordion_group_8_li_8_img_2_Template, 1, 0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const out_r11 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.checkPref(out_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.checkPref(out_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" \u00A0\u00A0 ", out_r11.title, "");
} }
function PresidentialMandateComponent_accordion_group_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "accordion-group", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Outcome Indicators ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PresidentialMandateComponent_accordion_group_8_li_5_Template, 4, 3, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Output Indicators ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PresidentialMandateComponent_accordion_group_8_li_8_Template, 4, 3, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("heading", item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("panelClass", ctx_r0.customClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r3.indicators);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r3.outputs);
} }
function PresidentialMandateComponent_ng_template_9_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " of Presidential Mandate is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PresidentialMandateComponent_ng_template_9_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Name of Presidential Mandate is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PresidentialMandateComponent_ng_template_9_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Target of Presidential Mandate is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PresidentialMandateComponent_ng_template_9_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Baseline of Presidential Mandate is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PresidentialMandateComponent_ng_template_9_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r20.mandateForm.deadline.errors.min.actual, " is Wrong, deadline cannot be less than 2021 ");
} }
function PresidentialMandateComponent_ng_template_9_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r21.mandateForm.deadline.errors.max.actual, " is Wrong, deadline cannot be greater than 2023 ");
} }
function PresidentialMandateComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Presidential Mandate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PresidentialMandateComponent_ng_template_9_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Add Presidential Mandate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PresidentialMandateComponent_ng_template_9_Template_form_ngSubmit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.addMandate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Select MDA(s)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "ss-multiselect-dropdown", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PresidentialMandateComponent_ng_template_9_span_16_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Name of Presidential Mandate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, PresidentialMandateComponent_ng_template_9_span_21_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Target for Presidential Mandate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, PresidentialMandateComponent_ng_template_9_span_26_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Baseline for Presidential Mandate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, PresidentialMandateComponent_ng_template_9_span_31_Template, 2, 0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Deadline for Presidential Mandate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, PresidentialMandateComponent_ng_template_9_span_36_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, PresidentialMandateComponent_ng_template_9_span_37_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Add Mandate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.newMandate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx_r2.myOptions)("texts", ctx_r2.myTexts)("settings", ctx_r2.mySettings);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.mandateForm.optionsModel.invalid && ctx_r2.mandateForm.optionsModel.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.mandateForm.title.invalid && ctx_r2.mandateForm.title.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.mandateForm.target.invalid && ctx_r2.mandateForm.target.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.mandateForm.baseline.invalid && ctx_r2.mandateForm.baseline.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.mandateForm.deadline.errors == null ? null : ctx_r2.mandateForm.deadline.errors.min) && ctx_r2.mandateForm.deadline.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r2.mandateForm.deadline.errors == null ? null : ctx_r2.mandateForm.deadline.errors.max) && ctx_r2.mandateForm.deadline.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.newMandate.invalid);
} }
class PresidentialMandateComponent {
    // tslint:disable-next-line:max-line-length
    constructor(fb, crudService, modalService, router, data) {
        this.fb = fb;
        this.crudService = crudService;
        this.modalService = modalService;
        this.router = router;
        this.data = data;
        this.config = {
            animated: true
        };
        this.customClass = 'customClass';
        this.preffered = [];
        // Settings configuration
        this.mySettings = {
            enableSearch: true,
            checkedStyle: 'fontawesome',
            buttonClasses: 'btn btn-default btn-block',
            dynamicTitleMaxItems: 3,
            displayAllSelectedText: true
        };
        // Text configuration
        this.myTexts = {
            checkAll: 'check all',
            uncheckAll: 'uncheck all',
            checked: 'item selected',
            checkedPlural: 'items selected',
            searchPlaceholder: 'Find',
            searchEmptyResult: 'Nothing found...',
            searchNoRenderText: 'Type in search box to see results...',
            defaultTitle: 'Select',
            allSelected: '',
        };
        this.p = 1;
        this.newMandate = this.fb.group(this.mandateFormGroup());
    }
    ngOnInit() {
        this.initiateChart();
        this.getPriorities();
        let pref = JSON.parse(localStorage.getItem('preffered'));
        if (pref != undefined)
            this.preffered = pref;
    }
    mandateFormGroup() {
        return {
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            optionsModel: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            target: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            baseline: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ]),
            deadline: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(2019),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(2023)
            ]),
        };
    }
    get mandateForm() {
        return {
            title: this.newMandate.get('title'),
            deadline: this.newMandate.get('deadline'),
            target: this.newMandate.get('target'),
            baseline: this.newMandate.get('baseline'),
            optionsModel: this.newMandate.get('optionsModel'),
        };
    }
    addMandate() {
    }
    openModal(template) {
        this.modalRef = this.modalService.show(template, this.config);
    }
    initiateChart() {
        // setTimeout(() => {
        //   let counter = 0;
        //   this.collection.forEach(element => {
        //     counter = counter + 1;
        //     this.chart = new Chart('myChart' + (counter), {
        //       type: "tsgauge",
        //       data: {
        //         datasets: [{
        //           backgroundColor: ["red", "#fd9704", "#0fdc63"],
        //           borderWidth: 0,
        //           gaugeData: {
        //             value: element.actual,
        //             valueColor: "#ff7143"
        //           },
        //           gaugeLimits: [0, element.poor, element.average, element.excellent]
        //         }]
        //       },
        //       options: {
        //         events: [],
        //         showMarkers: true
        //       }
        //     })
        //   });
        // }, 2000);
    }
    openMandate(id) {
        this.data.changeMessage(id);
        this.router.navigate(['dashboard/mandates/result']);
    }
    getPriorities() {
        const data = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
    {
      priorities(tree: 1){
        id
        title
        indicators{
            id
            title
            ref
            type
            baseline
            actual
            target
            aggregation
            rt
            currency
            active
            mdaId
            driver
            outputs{
              id
              title
              ref
              baseline
              actual
              target
              aggregation
              rt
              currency
              active
              mdaId
              mda{
                id
                name
                shortcode
              }
              projects{
                id
                title
                status
              }
            }
          }
        }
      }
  `;
        this.crudService.pullData(data, {})
            .subscribe((result) => {
            // this.currentPriorities = ''
            this.priorities = result.data.priorities;
            // this.temp = result.data.priorities;
            // localStorage.setItem('priorities', JSON.stringify(this.priorities))
            // this.openModal()
        });
    }
    addToPreffered(ind, type) {
        console.log(this.preffered, ind);
        // let pref = { indicator: ind.id };
        console.log(this.checkPref(ind.id));
        if (this.checkPref(ind)) {
            let index = this.preffered.indexOf(ind);
            this.preffered.splice(index, 1);
            localStorage.setItem('preffered', JSON.stringify(this.preffered));
            return;
        }
        if (this.preffered.length === 9) {
            alert('you can only select 9');
            return;
        }
        this.preffered.push(ind);
        localStorage.setItem('preffered', JSON.stringify(this.preffered));
    }
    checkPref(data) {
        let check = false;
        this.preffered.forEach(element => {
            if (element.id == data.id)
                check = true;
        });
        return check;
    }
    clearSetting() {
        localStorage.removeItem('preffered');
    }
}
PresidentialMandateComponent.ɵfac = function PresidentialMandateComponent_Factory(t) { return new (t || PresidentialMandateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"])); };
PresidentialMandateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PresidentialMandateComponent, selectors: [["app-presidential-mandate"]], decls: 11, vars: 3, consts: [[1, "container-fluid"], [1, "row", "justify-content-between"], [1, "mb-4"], [1, "btn", "btn-outline-warning", "btn-sm", 3, "click"], [1, "container"], [3, "isAnimated", "closeOthers"], [3, "heading", "panelClass", 4, "ngFor", "ngForOf"], ["template", ""], [3, "heading", "panelClass"], [1, "header"], ["style", "cursor: pointer;", 3, "click", 4, "ngFor", "ngForOf"], [3, "click", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"], ["width", "16", "src", "assets/icons/bookmark.svg", "alt", "", 4, "ngIf"], ["width", "16", "src", "assets/icons/bookmark-selected.svg", "alt", "", 4, "ngIf"], ["width", "16", "src", "assets/icons/bookmark.svg", "alt", ""], ["width", "16", "src", "assets/icons/bookmark-selected.svg", "alt", ""], [3, "click"], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "p-3"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "optionsModel"], ["formControlName", "optionsModel", "id", "optionsModel", 1, "multi-select", 3, "options", "texts", "settings"], ["class", "text-danger", 4, "ngIf"], ["for", "title"], ["type", "text", "formControlName", "title", "id", "title", 1, "form-control"], ["for", "target"], ["type", "text", "formControlName", "target", "id", "target", 1, "form-control"], ["for", "baseline"], ["type", "text", "formControlName", "baseline", "id", "baseline", 1, "form-control"], ["for", "dealine"], ["type", "number", "formControlName", "deadline", "id", "deadline", 1, "form-control"], ["type", "submit", 3, "disabled"], [1, "text-danger"]], template: function PresidentialMandateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Customize your indicators");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PresidentialMandateComponent_Template_button_click_4_listener() { return ctx.clearSetting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Clear Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "accordion", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PresidentialMandateComponent_accordion_group_8_Template, 9, 4, "accordion-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PresidentialMandateComponent_ng_template_9_Template, 40, 11, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isAnimated", true)("closeOthers", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.priorities);
    } }, directives: [ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionPanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_9__["MultiselectDropdownComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".multi-select[_ngcontent-%COMP%] {\n  width: 100%;\n  background: white;\n}\n.multi-select[_ngcontent-%COMP%]   .dropdown-inline[_ngcontent-%COMP%] {\n  display: block !important;\n  width: 100%;\n}\n.accordion-group[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: none;\n}\n.card.customClass[_ngcontent-%COMP%], .card.customClass[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%], .panel.customClass[_ngcontent-%COMP%] {\n  background-color: #5bc0de !important;\n  color: #fff;\n  border: none;\n}\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.header[_ngcontent-%COMP%] {\n  color: orange;\n  border-bottom: solid 1px orange;\n  margin-top: 30px;\n  margin-left: 0px;\n}\n.container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding: 15px;\n  border-bottom: solid 1px rgba(255, 255, 255, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByZXNpZGVudGlhbC1tYW5kYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFDRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBR0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFBRjtBQUdBOzs7RUFHRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7QUFJQTtFQUNFLGdCQUFBO0FBREY7QUFHRTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlFO0VBQ0UsaUJBQUE7RUFFQSxhQUFBO0VBQ0EsaURBQUE7QUFISiIsImZpbGUiOiJwcmVzaWRlbnRpYWwtbWFuZGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdWx0aS1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgLmRyb3Bkb3duLWlubGluZSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uYWNjb3JkaW9uLWdyb3VwIC5wYW5lbC1oZWFkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY2FyZC5jdXN0b21DbGFzcyxcbi5jYXJkLmN1c3RvbUNsYXNzIC5jYXJkLWhlYWRlcixcbi5wYW5lbC5jdXN0b21DbGFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcblxufVxuXG4uY29udGFpbmVyIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcblxuICBsaS5oZWFkZXIge1xuICAgIGNvbG9yOiBvcmFuZ2U7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IG9yYW5nZTtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cblxuICBsaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG5cbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKCRjb2xvcjogI2ZmZiwgJGFscGhhOiAuMyk7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AwSQ":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DataService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(message) {
        this.messageSource.next(message);
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
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
    production: false,
    // serverUrl: 'https://api-dot-pdu-osgf.uc.r.appspot.com/',
    serverUrl: 'http://localhost:4000/',
    log: true,
    flags: {
        useNewHeader: true
    }
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

/***/ "CJl5":
/*!**************************************!*\
  !*** ./src/app/ews/ews.component.ts ***!
  \**************************************/
/*! exports provided: EwsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EwsComponent", function() { return EwsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class EwsComponent {
    constructor() { }
    ngOnInit() {
    }
}
EwsComponent.ɵfac = function EwsComponent_Factory(t) { return new (t || EwsComponent)(); };
EwsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EwsComponent, selectors: [["app-ews"]], decls: 49, vars: 0, consts: [[1, "container"], [1, "form-group", "has-search"], [1, "fa", "fa-search", "form-control-feedback"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "col-12"], [1, "list-group", "primary-border", "text-center", "mb-3"], [1, "list-group-item", "py-4", "d-flex", "justify-content-between"], [1, "list-group-item", "py-3", "text-left", "mb-0", "pr-5"], [1, "mr-3"], [1, "ml-3"], ["src", "assets/icons/red-warning.svg", 1, "cursor", "mr-3"], [2, "text-decoration", "underline"], ["src", "assets/icons/slight-warning.svg", 1, "cursor", "mr-3"]], template: function EwsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Federal Ministry of Agriculture and Rural Developement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Achieve Agriculture and Food Security ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Leading Indicator: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Annual production of staple foods (metric tons)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " is behind target: 0 out of 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Leading Indicator: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Increase in Agricultural Sector contribution to GDP (Absolute in US$ terms & not in %)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " is behind target: 0 out of 1B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Leading Indicator: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Food price index (Consumer Food Price Index)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " is behind target: 0 out of 500 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Metric: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Number of Trained Agriculture Extension Workers deployed (#) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " is behind target : 5k out of 75k ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Project: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "em", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Alaita/Bwari Access Road ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " is behind schedule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".list-group-item[_ngcontent-%COMP%] {\n  background-color: var(--card-bkg);\n  color: var(--font-color);\n  border: 1px solid rgba(111, 111, 118, 0.58);\n  border-left: hidden;\n  border-right: hidden;\n}\n\n.list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0.625rem;\n  border-top-right-radius: 0.625rem;\n  border-top: hidden;\n}\n\n.list-group-item[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 0.625rem;\n  border-bottom-right-radius: 0.625rem;\n  border-bottom: none;\n}\n\n\n\n.main[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 50px auto;\n}\n\n\n\n.has-search[_ngcontent-%COMP%] {\n  width: 350px;\n  margin: 0 auto;\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  padding-left: 2.375rem;\n  background-color: var(--card-bkg);\n  border: none;\n  box-shadow: none;\n}\n\n.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 2.375rem;\n  height: 2.375rem;\n  line-height: 2.375rem;\n  text-align: center;\n  pointer-events: none;\n  color: #aaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2V3cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUEsdUNBQUE7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQSw0Q0FBQTs7QUFDQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFERiIsImZpbGUiOiJld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1ia2cpO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTExLCAxMTEsIDExOCwgMC41OCk7XG4gIGJvcmRlci1sZWZ0OiBoaWRkZW47XG4gIGJvcmRlci1yaWdodDogaGlkZGVuO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjYyNXJlbTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC42MjVyZW07XG4gIGJvcmRlci10b3A6IGhpZGRlbjtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjYyNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC42MjVyZW07XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi8qIFN0eWxlcyBmb3Igd3JhcHBpbmcgdGhlIHNlYXJjaCBib3ggKi9cblxuLm1haW4ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuLyogQm9vdHN0cmFwIDQgdGV4dCBpbnB1dCB3aXRoIHNlYXJjaCBpY29uICovXG4uaGFzLXNlYXJjaCB7XG4gIHdpZHRoOiAzNTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogMi4zNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmtnKTtcbiAgYm9yZGVyOiBub25lO1xuXG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMi4zNzVyZW07XG4gIGhlaWdodDogMi4zNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjM3NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY29sb3I6ICNhYWE7XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Lz8j":
/*!**********************************************************************!*\
  !*** ./src/app/project-details/photo-story/photo-story.component.ts ***!
  \**********************************************************************/
/*! exports provided: PhotoStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoStoryComponent", function() { return PhotoStoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function PhotoStoryComponent_div_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PhotoStoryComponent_div_0_video_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "video", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "source", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Your browser does not support the video tag. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PhotoStoryComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhotoStoryComponent_div_0_img_1_Template, 1, 1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PhotoStoryComponent_div_0_video_2_Template, 3, 1, "video", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r1.type == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r1.type == "video");
} }
class PhotoStoryComponent {
    constructor() {
        this.itemsPerSlide = 5;
        this.singleSlideOffset = true;
        this.noWrap = true;
        this.slides = [
            { image: 'assets/images/construction/1.jpeg' },
            { image: 'assets/images/construction/2.jpeg' },
            { image: 'assets/images/construction/3.jpeg' },
            { image: 'assets/images/construction/4.jpeg' },
            { image: 'assets/images/construction/5.jpeg' },
        ];
    }
    ngOnInit() {
        // console.log(JSONthis.images);
        let slides;
        slides = JSON.parse(this.images);
        this.slides = JSON.parse(slides);
        console.log(this.slides);
    }
}
PhotoStoryComponent.ɵfac = function PhotoStoryComponent_Factory(t) { return new (t || PhotoStoryComponent)(); };
PhotoStoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhotoStoryComponent, selectors: [["app-photo-story"]], inputs: { images: "images" }, decls: 1, vars: 1, consts: [["class", "img-container", 4, "ngFor", "ngForOf"], [1, "img-container"], ["alt", "image slide", "style", "display: block; width: 100%; height: 12.5rem;", 3, "src", 4, "ngIf"], ["width", "200", "height", "120", "controls", "", 4, "ngIf"], ["alt", "image slide", 2, "display", "block", "width", "100%", "height", "12.5rem", 3, "src"], ["width", "200", "height", "120", "controls", ""], ["type", "video/mp4", 3, "src"]], template: function PhotoStoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhotoStoryComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".img-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 250px;\n  margin: 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Bob3RvLXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJwaG90by1zdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luOiA1cHggMTBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "N58W":
/*!********************************************************!*\
  !*** ./src/app/all-mandates/all-mandates.component.ts ***!
  \********************************************************/
/*! exports provided: AllMandatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMandatesComponent", function() { return AllMandatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AllMandatesComponent {
    constructor() {
        this.p = 1;
        this.collection = [
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
            {
                id: 'hgjkas98', title: 'Real Economic Growth', checkedId: 'jigu789',
                mda: 'Fed. Ministry of Agriculture and Rural Development',
                poor: 3000,
                average: 7000,
                excellent: 10000,
                actual: 2545
            },
        ];
    }
    ngOnInit() {
        setTimeout(() => {
            this.initiateChart();
        }, 2000);
    }
    initiateChart() {
        let counter = 0;
        this.collection.forEach(element => {
            counter = counter + 1;
            this.chart = new Chart('myChart' + (counter), {
                type: "tsgauge",
                data: {
                    datasets: [{
                            backgroundColor: ["red", "#fd9704", "#0fdc63"],
                            borderWidth: 0,
                            gaugeData: {
                                value: element.actual,
                                valueColor: "#ff7143"
                            },
                            gaugeLimits: [0, element.poor, element.average, element.excellent]
                        }]
                },
                options: {
                    events: [],
                    showMarkers: true
                }
            });
        });
    }
}
AllMandatesComponent.ɵfac = function AllMandatesComponent_Factory(t) { return new (t || AllMandatesComponent)(); };
AllMandatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllMandatesComponent, selectors: [["app-all-mandates"]], decls: 0, vars: 0, template: function AllMandatesComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtbWFuZGF0ZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "OVWj":
/*!**************************************************************!*\
  !*** ./src/app/project-details/project-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "MO+k");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_service_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/crud.service */ "+JMX");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "oW1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _photo_story_photo_story_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./photo-story/photo-story.component */ "Lz8j");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _suffixes_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../suffixes.pipe */ "WHRT");










function ProjectDetailsComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "canvas", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ProjectDetailsComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "canvas", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "dr": a0, "cr": a1, "sc": a2 }; };
function ProjectDetailsComponent_tr_119_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailsComponent_tr_119_Template_span_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const project_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](138); ctx_r7.singleReport = project_r5; return _r3.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](1 + i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](18, _c0, project_r5.type == "Desk Review", project_r5.type == "Citizens Review", project_r5.type == "Spot Checks"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", project_r5.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.data.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r2.data.currency, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 12, project_r5.budget), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r2.data.currency, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 14, project_r5.released), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r2.data.currency, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 16, project_r5.utilized), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r5.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", project_r5.loc, "%");
} }
function ProjectDetailsComponent_div_149_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Quality of Work: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.singleReport.qow);
} }
function ProjectDetailsComponent_div_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ProjectDetailsComponent_div_149_li_19_Template, 4, 1, "li", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Challenges: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Comment: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Budget: ", ctx_r4.singleReport.budget, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Approved: ", ctx_r4.singleReport.approved, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Released: ", ctx_r4.singleReport.released, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Utilized: ", ctx_r4.singleReport.utilized, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Latitude: ", ctx_r4.singleReport.latitude, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Longitude: ", ctx_r4.singleReport.longitude, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Status: ", ctx_r4.singleReport.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Level of Completion: ", ctx_r4.singleReport.loc, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.singleReport.qow);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.singleReport.challenges);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.singleReport.comments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Output Indicator Value: ", ctx_r4.singleReport.outputValue, "");
} }
const _c1 = function () { return { "1": "Project", "2": "Policy" }; };
const _c2 = function (a0) { return { "background-color": a0 }; };
const _c3 = function (a0) { return { "margin-left": a0 }; };
const _c4 = function (a0) { return { "bg-warning text-dark": a0 }; };
class ProjectDetailsComponent {
    constructor(router, crud, modalService) {
        this.router = router;
        this.crud = crud;
        this.modalService = modalService;
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.p = 1;
        this.images = [
            'https://via.placeholder.com/300.png/09f/fff',
            'https://via.placeholder.com/300.png/09f/fff',
            'https://via.placeholder.com/300.png/09f/fff'
        ];
        this.activeChart = 'utilization';
        if (history.state.log) {
            this.data = JSON.parse(history.state.log);
            this.output = JSON.parse(history.state.output);
            //console.log(this.data);
        }
        else {
            this.router.navigate(['/home/projects']);
        }
        this.initiateCarousel();
    }
    ngOnInit() {
        this.initiateUtilizationChart();
        // $('[data-toggle="tooltip"]').tooltip();
        setInterval(() => {
            $('.logframes').DataTable();
        }, 1000);
    }
    calcPercentage(item) {
        let r = this.crud.calculatePercantage(item.actual, item.baseline, item.target, item.aggregation);
        if (r <= 33.3) {
            return 'red';
        }
        if (r > 33.3 && r <= 66.6) {
            return '#ffbf00';
        }
        if (r > 66.6) {
            return 'green';
        }
    }
    calc(r) {
        if (r <= 33.3) {
            return 'red';
        }
        if (r > 33.3 && r <= 66.6) {
            return '#ffbf00';
        }
        if (r > 66.6) {
            return 'green';
        }
    }
    initiateUtilizationChart() {
        if (this.activeChart != 'utilization') {
            this.activeChart = 'utilization';
            if (this.budgetChart) {
                this.budgetChart.clear();
                this.budgetChart.destroy();
            }
        }
        setTimeout(() => {
            this.utilizationChart = new chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('myUtilizationChart', {
                type: 'line',
                data: {
                    labels: ['QTR-1', 'QTR-2', 'QTR-3', 'QTR-4'],
                    datasets: [
                        {
                            // label: ["Stabilize the Macro Economic Environment", "Achieve Agriculture and Food Security", "Ensure Energy Sufficiency in Power and Petroleum Product", "Improve Transportation and Other Infrastructure", "Drive Industrilisation", "Improve health education and productivity of Nigerians", "Enhance social inclusion and reduce poverty", "Fight corruption and improve governance", "provide security for all citizens"],
                            borderWidth: 2,
                            borderColor: "#0277BD",
                            data: [54, 34, 94, 62]
                        },
                    ]
                },
                options: {
                    responsive: true,
                    scaleFontColor: "#FFFFFF",
                    legend: {
                        display: false,
                        labels: {
                            fontColor: "#f7f7f2",
                        }
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                                display: true,
                                barPercentage: 0.1,
                                gridLines: {
                                    color: "#dadada4d"
                                },
                            }],
                        yAxes: [{
                                display: true,
                                gridLines: {
                                    color: "#dadada4d"
                                },
                            }],
                    }
                }
            });
        }, 200);
    }
    initiateBudgetChart() {
        if (this.activeChart != 'financial') {
            this.activeChart = 'financial';
            this.utilizationChart.clear();
            this.utilizationChart.destroy();
        }
        setTimeout(() => {
            this.budgetChart = new chart_js__WEBPACK_IMPORTED_MODULE_0__["Chart"]('myFinancialChart', {
                type: 'bar',
                data: {
                    labels: ['QTR-1', 'QTR-2', 'QTR-3', 'QTR-4'],
                    datasets: [
                        {
                            label: "Released",
                            borderColor: "#FEA041",
                            borderWidth: 2,
                            backgroundColor: "#fea0411f",
                            data: [62, 23, 73, 70, 46, 58, 38, 69, 98]
                        },
                        {
                            label: "Utilized",
                            borderColor: "#0277BD",
                            borderWidth: 2,
                            backgroundColor: "#0277bd1a",
                            data: [23, 31, 16, 45, 92, 37, 76, 80, 76]
                        },
                    ]
                },
                options: {
                    // onClick:this.initiateChartInterativity.bind(this),
                    responsive: true,
                    scaleFontColor: "#FFFFFF",
                    legend: {
                        display: false,
                        labels: {
                            fontColor: "#f7f7f2",
                        }
                    },
                    scales: {
                        xAxes: [{
                                display: true,
                                barPercentage: 0.5,
                                categoryPercentage: 0.5,
                                gridLines: {
                                    color: "#dadada4d"
                                },
                            }],
                        yAxes: [{
                                display: true,
                                gridLines: {
                                    color: "#dadada4d"
                                },
                            }],
                    }
                }
            });
        }, 200);
    }
    getNumberOfDays(start_date) {
        let currentDate = new Date().getTime();
        let start = new Date(start_date).getTime();
        return Math.floor((currentDate - start) / 86400000);
    }
    getLoc(data) {
        return (data + '%');
    }
    initiateCarousel() {
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            autoplay: true,
            navText: ['<img src="assets/icons/001-left-chevron.svg">', '<img src="assets/icons/002-right-chevron.svg">'],
            nav: true,
            responsive: {
                740: {
                    items: 1
                },
                940: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        };
    }
}
ProjectDetailsComponent.ɵfac = function ProjectDetailsComponent_Factory(t) { return new (t || ProjectDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"])); };
ProjectDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectDetailsComponent, selectors: [["app-project-details"]], decls: 150, vars: 36, consts: [[1, "container-fluid"], [1, "row", "pb-3"], [1, "col-lg-4"], [1, "primary-border"], [1, "container-header", "px-4", "pt-4", "pb-3"], [1, "mb-0", "label"], [1, "p-4"], [1, "type"], [1, "label"], [1, "m-0"], [1, "pt-5", 2, "position", "relative"], [1, "d-flex", "justify-content-between"], [2, "margin-left", "5px", "display", "inline-block", "color", "#fff", "padding", "5px 5px", "border-radius", "5px", 3, "ngStyle"], [1, "col-lg-3"], [1, "mb-0"], [1, "mt-5"], [1, "linearguageWrapper"], [1, "traffic"], [1, "base"], ["data-toggle", "tooltip", "data-placement", "top", 1, "tick", 3, "ngStyle", "title"], [1, "target"], [1, "col-lg-5"], [1, "container-header", "d-flex", "justify-content-between", "px-4", "pt-4", "pb-3"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-sm", "btn-secondary", 3, "ngClass", "click"], [1, "row", "w-75", "mx-auto", "justify-content-around", "text-center", "mb-4"], [1, ""], [4, "ngIf"], [1, "col-12", "pr-0"], [1, "table-responsive"], [1, "table", "table-bordered", "logframes"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "text-center"], [3, "pageChange"], [1, "col-lg-8", "pr-0"], [3, "images"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-sizes-name1", 1, "modal", "fade"], ["reportDetails", "bs-modal"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-sizes-name1", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["class", "row", 4, "ngIf"], ["id", "myUtilizationChart", "height", "100px"], ["id", "myFinancialChart", "height", "100px"], [1, "type", 3, "ngClass"], [1, "cursor", 3, "click"], [1, "row"], [1, "col-md-6"], [1, "list-group"], [1, "list-group-item"], ["class", "list-group-item", 4, "ngIf"]], template: function ProjectDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Project Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Project Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Deliverable:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Indicator:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Project Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Project Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Level of completion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " 0% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " 100% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Days Expended");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Financials");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailsComponent_Template_button_click_64_listener() { return ctx.initiateUtilizationChart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailsComponent_Template_button_click_66_listener() { return ctx.initiateBudgetChart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](75, "suffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Released");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](81, "suffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Utilized");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](87, "suffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](89, ProjectDetailsComponent_div_89_Template, 2, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](90, ProjectDetailsComponent_div_90_Template, 2, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Projects Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "table", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "S/N");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Released");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Utilized");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Project Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "% of Completion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "More");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](119, ProjectDetailsComponent_tr_119_Template, 24, 22, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "pagination-controls", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ProjectDetailsComponent_Template_pagination_controls_pageChange_121_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "app-photo-story", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Projects Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "h4", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Report Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProjectDetailsComponent_Template_button_click_144_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](138); return _r3.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](149, ProjectDetailsComponent_div_149_Template, 31, 12, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c1)[ctx.data == null ? null : ctx.data.type], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.output.mandates[0].title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.output.actual);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.output == null ? null : ctx.output.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c2, ctx.calcPercentage(ctx.output)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", (ctx.output == null ? null : ctx.output.actual) - (ctx.output == null ? null : ctx.output.baseline), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.status, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx.data.logframes[(ctx.data.logframes == null ? null : ctx.data.logframes.length) - 1].loc + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](30, _c3, "calc(" + ctx.data.logframes[(ctx.data.logframes == null ? null : ctx.data.logframes.length) - 1].loc + "% - 8px)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.getNumberOfDays(ctx.data.start_date), " days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](32, _c4, ctx.activeChart === "utilization"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](34, _c4, ctx.activeChart === "financial"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20A6", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](75, 21, ctx.data.budget), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20A6", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](81, 23, ctx.data.logframes[(ctx.data.logframes == null ? null : ctx.data.logframes.length) - 1].released), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20A6", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](87, 25, ctx.data.logframes[(ctx.data.logframes == null ? null : ctx.data.logframes.length) - 1].utilized), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeChart == "utilization");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.activeChart == "financial");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.logframes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("images", ctx.data.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.singleReport);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"], _photo_story_photo_story_component__WEBPACK_IMPORTED_MODULE_7__["PhotoStoryComponent"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalDirective"]], pipes: [_suffixes_pipe__WEBPACK_IMPORTED_MODULE_9__["SuffixesPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"]], styles: [".btn-outline-success[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.status[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background-color: gray;\n  border-radius: 100%;\n}\n\n.type[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: white;\n  padding: 0px 10px;\n  font-size: 12px;\n  border-radius: 15px;\n}\n\n.ab[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n}\n\n.cp[_ngcontent-%COMP%] {\n  background-color: #18a972 !important;\n}\n\n.dr[_ngcontent-%COMP%] {\n  background-color: blue !important;\n}\n\n.cr[_ngcontent-%COMP%] {\n  background-color: #18a972 !important;\n}\n\n.sc[_ngcontent-%COMP%] {\n  background-color: orange !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  min-height: 150px;\n  height: 100%;\n}\n\n.card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n\nagm-map[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n}\n\n.type[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: gray;\n  color: white;\n  padding: 0px 10px;\n  font-size: 12px;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBSUE7RUFDRSxvQ0FBQTtBQURGOztBQUlBO0VBQ0UsaUNBQUE7QUFERjs7QUFJQTtFQUNFLG9DQUFBO0FBREY7O0FBSUE7RUFDRSxtQ0FBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBS0E7RUFDRSwwQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFGRiIsImZpbGUiOiJwcm9qZWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc3RhdHVzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4udHlwZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4uYWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xuXG59XG5cbi5jcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOGE5NzIgIWltcG9ydGFudDtcbn1cblxuLmRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZSAhaW1wb3J0YW50O1xufVxuXG4uY3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThhOTcyICFpbXBvcnRhbnRcbn1cblxuLnNjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlICFpbXBvcnRhbnRcbn1cblxuLmNhcmQge1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvLyBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY2FyZCBoNSB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuXG5hZ20tbWFwIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50eXBlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/crud.service */ "+JMX");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-loading-bar/core */ "lPP5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








function DashboardComponent_img_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 52);
} }
function DashboardComponent_img_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 53);
} }
function DashboardComponent_img_49_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_img_49_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.mdasidebar = !ctx_r19.mdasidebar; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_img_50_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_img_50_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.mdasidebar = !ctx_r21.mdasidebar; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_img_54_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_img_54_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.gotoEsw(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_img_55_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_img_55_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.gotoEsw(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_span_56_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.gotoEsw(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Early Warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_span_57_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_span_57_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r29.gotoEsw(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Early Warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_img_59_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_img_59_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r31.lightmode = !ctx_r31.lightmode; return ctx_r31.switchmode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_img_60_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_img_60_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r33.lightmode = !ctx_r33.lightmode; return ctx_r33.switchmode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_span_61_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_span_61_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r35.lightmode = !ctx_r35.lightmode; return ctx_r35.switchmode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Light Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_span_62_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_span_62_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r37.lightmode = !ctx_r37.lightmode; return ctx_r37.switchmode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Dark Mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_img_64_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_img_64_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r39.gotoSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_img_65_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_img_65_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r41.gotoSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "transform": a0 }; };
function DashboardComponent_img_69_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_img_69_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r43.setactive = !ctx_r43.setactive; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r14.setactive ? "rotate(180deg)" : "rotate(360deg)"));
} }
function DashboardComponent_img_70_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_img_70_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.setactive = !ctx_r45.setactive; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx_r15.setactive ? "rotate(180deg)" : "rotate(360deg)"));
} }
function DashboardComponent_img_74_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_img_74_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r47.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_img_75_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_img_75_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r49.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_79_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r51.onTrack, " on Track");
} }
function DashboardComponent_div_79_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " 1 on Track");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_79_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r51.slow, " not on Track");
} }
function DashboardComponent_div_79_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " 4 not on Track ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_79_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59); const item_r51 = ctx.$implicit; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r58.openMdaDashboard(item_r51.shortcode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_div_79_li_4_Template, 4, 1, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DashboardComponent_div_79_li_5_Template, 4, 0, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DashboardComponent_div_79_li_10_Template, 4, 1, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DashboardComponent_div_79_li_11_Template, 4, 0, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r51.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r51.shortcode != "FMARD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r51.shortcode == "FMARD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", item_r51.inProgress, " in Progress ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r51.shortcode != "FMARD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r51.shortcode == "FMARD");
} }
const _c1 = function (a0) { return { active: a0 }; };
const _c2 = function (a0) { return { "display": a0 }; };
class DashboardComponent {
    constructor(route, crud, toastr, router) {
        this.route = route;
        this.crud = crud;
        this.toastr = toastr;
        this.router = router;
        this.setactive = false;
        this.mdasidebar = false;
        this.lightmode = false;
        this.year = ['2019', '2020', '2021', '2022', '2023', '20124', '2025', '2026'];
        this.menu = [
            {
                title: "Dashboard",
                url: "/dashboard/home",
            },
            {
                title: "Mandate",
                url: "/dashboard/mandates",
            },
            {
                title: "Budget",
                url: "/dashboard/user-management",
            },
        ];
        this.activeYear = '2020';
        this.search = { query: '' };
        if (localStorage.getItem('mode')) {
            this.lightmode = JSON.parse(localStorage.getItem('mode'));
        }
        this.switchmode();
        this.current = (route.snapshot['_routerState'].url);
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user != null) {
            this.userAvailable = true;
        }
        let activeYear = localStorage.getItem('activeYear');
        //console.log(activeYear);
        if (activeYear)
            this.activeYear = activeYear;
    }
    ngOnInit() {
        $(document).ready(function () {
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        });
        // this.pullMdaByPerformance()
    }
    gotoProfile() {
        this.router.navigate(['/dashboard/user-profile']);
    }
    gotoSettings() {
        this.router.navigate(['/dashboard/system-settings']);
    }
    gotoDashboard() {
        this.router.navigate(['/']);
    }
    gotoEsw() {
        this.router.navigate(['/dashboard/early-warning']);
    }
    openMdaDashboard(id) {
        this.mdasidebar = false;
        this.router.navigate(['/dashboard/mda-dashboard/' + id]);
        setTimeout(() => {
            location.reload();
        }, 500);
    }
    pullMdaByPerformance() {
        let data = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
        {
          mdasByPerformance {
          data
          }
        }
      `;
        this.crud.pullData(data, {})
            .subscribe(result => {
            this.mdas = JSON.parse(result.data["mdasByPerformance"].data);
            // this.assignCopy();
            // setInterval(() => {
            // 	// $('.usersTable').DataTable();
            // }, 2000);
        }, error => {
            // this.toastr.error("Oops, we could not get you user's data, please check your network and try again", "Unsuccessful")
        });
    }
    switchmode() {
        if (this.lightmode) {
            localStorage.setItem('mode', 'true');
            document.documentElement.setAttribute('data-theme', 'light');
            return;
        }
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('mode', 'false');
    }
    logout() {
        this.user = null;
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        this.router.navigate(['/login']);
    }
    selectYear(year) {
        localStorage.setItem('activeYear', year);
        this.activeYear = year;
        this.toastr.success("Focus year changed to " + year + " successfully", "Success");
    }
    onSearch() {
        this.router.navigate(['/dashboard/search/' + this.search.query]);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 82, vars: 27, consts: [["color", "#FEC009"], [1, "wrapper"], [1, "navbar", "navbar-expand-lg", "mb-0"], [1, "container-fluid"], ["href", "#", 1, "cursor"], ["src", "assets/images/Coat_of_arms_of_Nigeria.png", "height", "40"], ["type", "button", "id", "sidebarCollapse", 1, "btn", "btn-light", "d-inline-block", "d-lg-none"], [1, "fas", "fa-align-left"], [1, "btn-group", "mx-3", "w-50", "has-search", "center"], [1, "card", "w-100", "card-sm", "p-0", 3, "ngSubmit"], [1, "card-body", "p-0", "row", "no-gutters", "align-items-center"], [1, "col-auto"], ["src", "assets/icons/search.svg", 1, "ml-2"], [1, "col"], ["name", "query", "type", "search", "placeholder", "Search titles or keywords", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-lg", "btn-success", "btn-sm", "py-2", 2, "border-radius", "0", 3, "disabled"], [1, "d-inline-block"], ["for", "profile2", 1, "float-right", "d-inline-block", "profile-dropdown"], ["type", "checkbox", "id", "profile2"], ["href", "javascript:void(0)", 3, "click"], [1, "mdi", "mdi-settings"], [1, "mdi", "mdi-logout"], ["src", "https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_hipster_guy-512.png"], ["id", "content"], [1, "sidebar", 3, "ngClass"], [1, "list-unstyled", "fiscal-list"], ["src", "assets/icons/yellow-dash-icon.svg", 1, "cursor", 3, "click"], [1, "cursor", "sidebar-label"], ["class", "cursor", "src", "assets/icons/second-white-icon.svg", 4, "ngIf"], ["class", "cursor", "src", "assets/icons/second-dark-icon.svg", 4, "ngIf"], ["class", "cursor", "src", "assets/icons/third-white-icon.svg", 3, "click", 4, "ngIf"], ["class", "cursor", "src", "assets/icons/third-dark-icon.svg", 3, "click", 4, "ngIf"], [1, "cursor", "sidebar-label", 3, "click"], [1, "pb-3"], ["class", "cursor", "src", "assets/icons/warning.svg", 3, "click", 4, "ngIf"], ["class", "cursor", "src", "assets/icons/warning-dark.svg", 3, "click", 4, "ngIf"], ["class", "cursor sidebar-label", 3, "click", 4, "ngIf"], ["class", "cursor", "src", "assets/icons/fourth-white-icon.svg", 3, "click", 4, "ngIf"], ["class", "cursor", "src", "assets/icons/fourth-dark-icon.svg", 3, "click", 4, "ngIf"], ["class", "cursor", "src", "assets/icons/fifth-white-icon.svg", 3, "click", 4, "ngIf"], ["class", "cursor", "src", "assets/icons/fifth-dark-icon.svg", 3, "click", 4, "ngIf"], [1, "sidebar-toggler"], ["class", "cursor", "src", "assets/icons/sixth-white-icon.svg", "style", "transition: .3s ease-in-out;", 3, "ngStyle", "click", 4, "ngIf"], ["class", "cursor", "src", "assets/icons/sixth-dark-icon.svg", "style", "transition: .3s ease-in-out;", 3, "ngStyle", "click", 4, "ngIf"], [1, "mt-auto"], [1, "list-unstyled"], [1, "mb-3"], ["class", "cursor", "src", "assets/icons/seventh-white-icon.svg", 3, "click", 4, "ngIf"], ["class", "cursor", "src", "assets/icons/seventh-dark-icon.svg", 3, "click", 4, "ngIf"], [1, "mda-sidebar", "p-4", 3, "ngStyle"], ["class", "primary-border py-3 px-2", 4, "ngFor", "ngForOf"], [1, "main", 2, "margin-top", "100px", "overflow-y", "auto"], ["src", "assets/icons/second-white-icon.svg", 1, "cursor"], ["src", "assets/icons/second-dark-icon.svg", 1, "cursor"], ["src", "assets/icons/third-white-icon.svg", 1, "cursor", 3, "click"], ["src", "assets/icons/third-dark-icon.svg", 1, "cursor", 3, "click"], ["src", "assets/icons/warning.svg", 1, "cursor", 3, "click"], ["src", "assets/icons/warning-dark.svg", 1, "cursor", 3, "click"], ["src", "assets/icons/fourth-white-icon.svg", 1, "cursor", 3, "click"], ["src", "assets/icons/fourth-dark-icon.svg", 1, "cursor", 3, "click"], ["src", "assets/icons/fifth-white-icon.svg", 1, "cursor", 3, "click"], ["src", "assets/icons/fifth-dark-icon.svg", 1, "cursor", 3, "click"], ["src", "assets/icons/sixth-white-icon.svg", 1, "cursor", 2, "transition", ".3s ease-in-out", 3, "ngStyle", "click"], ["src", "assets/icons/sixth-dark-icon.svg", 1, "cursor", 2, "transition", ".3s ease-in-out", 3, "ngStyle", "click"], ["src", "assets/icons/seventh-white-icon.svg", 1, "cursor", 3, "click"], ["src", "assets/icons/seventh-dark-icon.svg", 1, "cursor", 3, "click"], [1, "primary-border", "py-3", "px-2"], [1, "cursor", 3, "click"], [1, "list-unstyled", "mb-0", "d-flex", "justify-content-center"], ["class", "d-flex mx-2 mb-0", 4, "ngIf"], [1, "d-flex", "mx-2", "mb-0"], [1, "oval-warning", "mr-2"], [1, "oval-success", "mr-2"], [1, "oval-danger", "mr-2"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ngx-loading-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DashboardComponent_Template_form_ngSubmit_9_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_14_listener($event) { return ctx.search.query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_23_listener() { return ctx.gotoProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_a_click_27_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_img_click_40_listener() { return ctx.gotoDashboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, DashboardComponent_img_44_Template, 1, 0, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, DashboardComponent_img_45_Template, 1, 0, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "PMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, DashboardComponent_img_49_Template, 1, 0, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, DashboardComponent_img_50_Template, 1, 0, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_51_listener() { return ctx.mdasidebar = !ctx.mdasidebar; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "MDAs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, DashboardComponent_img_54_Template, 1, 0, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, DashboardComponent_img_55_Template, 1, 0, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, DashboardComponent_span_56_Template, 2, 0, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, DashboardComponent_span_57_Template, 2, 0, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, DashboardComponent_img_59_Template, 1, 0, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, DashboardComponent_img_60_Template, 1, 0, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, DashboardComponent_span_61_Template, 2, 0, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, DashboardComponent_span_62_Template, 2, 0, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, DashboardComponent_img_64_Template, 1, 0, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, DashboardComponent_img_65_Template, 1, 0, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_66_listener() { return ctx.gotoSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, DashboardComponent_img_69_Template, 1, 3, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, DashboardComponent_img_70_Template, 1, 3, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "ul", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, DashboardComponent_img_74_Template, 1, 0, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, DashboardComponent_img_75_Template, 1, 0, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_span_click_76_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, DashboardComponent_div_79_Template, 12, 6, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.search.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.search.query == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c1, ctx.setactive));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lightmode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c2, ctx.mdasidebar ? "block" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.mdas);
    } }, directives: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_5__["LoadingBarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\n  color: inherit;\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.navbar[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n  border: none;\n  border-radius: 0;\n  margin-bottom: 40px;\n  color: beige;\n  background: var(--card-bkg);\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  z-index: 500;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n}\n.navbar-btn[_ngcontent-%COMP%] {\n  box-shadow: none;\n  outline: none !important;\n  border: none;\n}\n.line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  border-bottom: 1px dashed #ddd;\n  margin: 40px 0;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: stretch;\n  height: 100vh;\n  background: var(--body-bkg);\n}\n\n#content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 100vh;\n  transition: all 0.3s;\n  overflow-y: hidden;\n  display: flex;\n  align-items: stretch;\n}\n#content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n  background: var(--card-bkg);\n  width: 50px;\n  text-align: center;\n  position: relative;\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  transition: 0.3s ease-in-out;\n}\n#content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .fiscal-list[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin-top: 0.5rem;\n  position: relative;\n  z-index: 7;\n}\n#content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 70px;\n}\n#content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n}\n#content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-label[_ngcontent-%COMP%] {\n  display: none;\n}\n#content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .sidebar-toggler[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 57%;\n  left: -10px;\n  background: var(--card-bkg);\n  border-radius: 50%;\n  width: 80px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  text-align: right;\n  justify-content: flex-end;\n  padding-right: 10px;\n  z-index: 6;\n}\n#content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .mda-sidebar[_ngcontent-%COMP%] {\n  position: fixed;\n  display: none;\n  height: 100%;\n  width: 400px;\n  top: 70px;\n  left: 60px;\n  background: var(--body-bkg);\n  overflow: auto;\n  z-index: 5;\n}\n#content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .mda-sidebar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n#content[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]   .mda-sidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n#content[_ngcontent-%COMP%]   .sidebar.active[_ngcontent-%COMP%] {\n  width: 160px;\n  transition: 0.3s ease-in-out;\n  text-align: left;\n  position: fixed;\n  z-index: 6;\n}\n#content[_ngcontent-%COMP%]   .sidebar.active[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n#content[_ngcontent-%COMP%]   .sidebar.active[_ngcontent-%COMP%]   .sidebar-label[_ngcontent-%COMP%] {\n  display: inline;\n  font-size: small;\n  margin-left: 1rem;\n}\n#content[_ngcontent-%COMP%]   .sidebar.active[_ngcontent-%COMP%]   .sidebar-toggler[_ngcontent-%COMP%] {\n  left: 95px;\n  transition: 0.3s ease-in-out;\n}\n#content[_ngcontent-%COMP%]   .sidebar.active[_ngcontent-%COMP%]   .sidebar-toggler[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  z-index: 8;\n}\n#content[_ngcontent-%COMP%]   .sidebar.active[_ngcontent-%COMP%]   .mda-sidebar[_ngcontent-%COMP%] {\n  left: 155px;\n}\n#content[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  width: 95%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media (max-width: 768px) {\n  #sidebar[_ngcontent-%COMP%] {\n    position: absolute;\n    margin-left: -250px;\n    z-index: 2000;\n    height: 100vh;\n    max-height: 100vh;\n  }\n\n  #sidebar.active[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  #sidebarCollapse[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.profile-dropdown[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  margin: auto;\n  font-weight: bold;\n  font-size: 1.3rem;\n  border-radius: 3px;\n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  \n  user-select: none;\n  \n}\n.profile-dropdown[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n  \n  -moz-user-select: none;\n  \n  \n  user-select: none;\n  \n}\n.profile-dropdown[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.profile-dropdown[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ ul[_ngcontent-%COMP%] {\n  display: block;\n  -webkit-animation: pulse 0.5s;\n          animation: pulse 0.5s;\n}\n.profile-dropdown[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ img[_ngcontent-%COMP%] {\n  background: #048811;\n}\n.profile-dropdown[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {\n  background: #048811;\n}\n.profile-dropdown[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #f2f2f2;\n}\n.profile-dropdown[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  right: calc(50% - 10px);\n  display: block;\n  border-style: solid;\n  border-width: 7px 10px 0 10px;\n  border-color: #048811 transparent transparent transparent;\n  width: 0;\n  height: 0;\n}\n.profile-dropdown[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #d9d9d9;\n  height: 2.5rem;\n  vertical-align: middle;\n  margin: 0rem 1rem 0rem 0.5rem;\n  border-radius: 50%;\n}\n.profile-dropdown[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 14px;\n  margin-top: -4px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: right;\n}\n.profile-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: none;\n  list-style: none;\n  padding: 0;\n  margin: 5px 15px 0 0;\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  right: 0;\n  width: 150px;\n  border-radius: 3px;\n  border: solid 1px #ddd;\n}\n.profile-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.75rem 1rem;\n  text-decoration: none;\n  color: #737373;\n  font-size: 1rem;\n}\n.profile-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  vertical-align: middle;\n  margin: 0 0.75rem 0 -0.25rem;\n}\n.profile-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #e5e5e5;\n}\n.profile-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%]:hover {\n  border-radius: 3px 3px 0 0;\n}\n.profile-dropdown[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%]:hover {\n  border-radius: 0 0 3px 3px;\n}\n.profile-dropdown[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  position: relative;\n  height: 2.5rem;\n  display: block;\n  text-decoration: none;\n  background: transparent;\n  color: #333;\n  box-sizing: border-box;\n  padding: 0.4rem;\n  float: right;\n  border-radius: 0 3px 3px 0;\n}\n.profile-dropdown[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #b2b2b2;\n  font-size: 1.75rem;\n}\n.profile-dropdown[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.bs-popover-auto[x-placement^=bottom][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::before, .bs-popover-bottom[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::before {\n  border-bottom-color: #272a3d;\n}\n.bs-popover-auto[x-placement^=bottom][_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::after, .bs-popover-bottom[_ngcontent-%COMP%]    > .arrow[_ngcontent-%COMP%]::after {\n  border-bottom-color: #272a3d;\n}\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: var(--card-bkg);\n  color: var(--font-color);\n  border: 1px solid rgba(111, 111, 118, 0.58);\n  border-left: hidden;\n  border-right: hidden;\n}\n.list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0.625rem;\n  border-top-right-radius: 0.625rem;\n  border-top: hidden;\n}\n.list-group-item[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 0.625rem;\n  border-bottom-right-radius: 0.625rem;\n  border-bottom: none;\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 50px auto;\n}\n\n.has-search[_ngcontent-%COMP%] {\n  width: 45%;\n  margin: 0 auto;\n  position: relative;\n  border: solid 1px #777 !important;\n  border-radius: 5px;\n}\n.form-control[_ngcontent-%COMP%] {\n  padding-left: 2.375rem;\n  background-color: var(--card-bkg);\n  border: none;\n  box-shadow: none;\n}\n.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 2.375rem;\n  height: 2.375rem;\n  line-height: 2.375rem;\n  text-align: center;\n  pointer-events: none;\n  color: #aaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FBQTtBQUdBOzs7RUFHRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQUNGO0FBRUE7RUFDRSxrQkFBQTtFQUdBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0FBREY7QUFJQTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBREY7QUFJQTs7dURBQUE7QUFLQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFIRjtBQU1BOzt1REFBQTtBQUlBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFFQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUxGO0FBT0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUxKO0FBT0k7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFMTjtBQVFJO0VBQ0UsbUJBQUE7QUFOTjtBQVNJO0VBQ0UsV0FBQTtBQVBOO0FBVUk7RUFDRSxhQUFBO0FBUk47QUFXSTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFUTjtBQVlJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQVZOO0FBWU07RUFDRSxlQUFBO0FBVlI7QUFhTTtFQUNFLGVBQUE7QUFYUjtBQWdCRTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFkSjtBQWdCSTtFQUNFLGlCQUFBO0FBZE47QUFpQkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWZOO0FBa0JJO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0FBaEJOO0FBa0JNO0VBQ0UsVUFBQTtBQWhCUjtBQW9CSTtFQUNFLFdBQUE7QUFsQk47QUF1QkU7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQXJCSjtBQXlCQTs7dURBQUE7QUFJQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7RUF2QkY7O0VBMEJBO0lBQ0UsY0FBQTtFQXZCRjs7RUEwQkE7SUFDRSxhQUFBO0VBdkJGO0FBQ0Y7QUFrQ0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFaYztFQWFkLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBRUEsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFqQ0Y7QUFtQ0U7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUVBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBakNKO0FBb0NFO0VBQ0UsYUFBQTtBQWxDSjtBQXFDTTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FBbkNSO0FBc0NNO0VBQ0UsbUJBekNDO0FBS1Q7QUF1Q007RUFDRSxtQkE3Q0M7QUFRVDtBQXVDUTtFQUNFLGNBakRBO0FBWVY7QUF3Q1E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHlEQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUF0Q1Y7QUE0Q0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBRUEsNkJBQUE7RUFDQSxrQkFBQTtBQTNDSjtBQStDRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQTlDSjtBQWlERTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxrQkF0R1k7RUF1R1osc0JBQUE7QUEvQ0o7QUFrRE07RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBaERSO0FBa0RRO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FBaERWO0FBbURRO0VBQ0UsbUJBQUE7QUFqRFY7QUFxRE07RUFDRSwwQkFBQTtBQW5EUjtBQXNETTtFQUNFLDBCQUFBO0FBcERSO0FBeURFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBdkRKO0FBeURJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBdkROO0FBMkRFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBekRKO0FBNkRBOztFQUVFLDRCQUFBO0FBMURGO0FBNkRBOztFQUVFLDRCQUFBO0FBMURGO0FBNkRBO0VBQ0UsaUNBQUE7RUFDQSx3QkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQTFERjtBQTZEQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQTFERjtBQTZEQTtFQUNFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBQTFERjtBQTZEQSx1Q0FBQTtBQUVBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBM0RGO0FBOERBLDRDQUFBO0FBQ0E7RUFDRSxVQUFBO0VBR0EsY0FBQTtFQUNBLGtCQUFBO0VBRUEsaUNBQUE7RUFDQSxrQkFBQTtBQTlERjtBQWlFQTtFQUNFLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7QUEvREY7QUFrRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQS9ERiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIERFTU8gU1RZTEVcbiovXG5hLFxuYTpob3ZlcixcbmE6Zm9jdXMge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm5hdmJhciB7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgLy8gbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIC8vIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBjb2xvcjogYmVpZ2U7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtYmtnKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDUwMDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLm5hdmJhci1idG4ge1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcbiAgbWFyZ2luOiA0MHB4IDA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFNJREVCQVIgU1RZTEVcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblxuLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJvZHktYmtnKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgQ09OVEVOVCBTVFlMRVxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuI2NvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwNDA0O1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gIC5zaWRlYmFyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJrZyk7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG5cbiAgICAuZmlzY2FsLWxpc3R7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDc7XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNzBweDtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDE4cHg7XG4gICAgfVxuXG4gICAgLnNpZGViYXItbGFiZWwge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuc2lkZWJhci10b2dnbGVyIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogNTclO1xuICAgICAgbGVmdDogLTEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJrZyk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgIHotaW5kZXg6IDY7XG4gICAgfVxuXG4gICAgLm1kYS1zaWRlYmFyIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogNDAwcHg7XG4gICAgICB0b3A6IDcwcHg7XG4gICAgICBsZWZ0OiA2MHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYm9keS1ia2cpO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB6LWluZGV4OiA1O1xuXG4gICAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuXG4gICAgICBsaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2lkZWJhci5hY3RpdmUge1xuICAgIHdpZHRoOiAxNjBweDtcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogNjtcblxuICAgIGxpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIH1cblxuICAgIC5zaWRlYmFyLWxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB9XG5cbiAgICAuc2lkZWJhci10b2dnbGVyIHtcbiAgICAgIGxlZnQ6IDk1cHg7XG4gICAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBcbiAgICAgIGltZ3tcbiAgICAgICAgei1pbmRleDogODtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWRhLXNpZGViYXIge1xuICAgICAgbGVmdDogMTU1cHg7XG4gICAgfVxuXG4gIH1cblxuICAubWFpbiB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgTUVESUFRVUVSSUVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI3NpZGViYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xuICAgIHotaW5kZXg6IDIwMDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG4gICNzaWRlYmFyLmFjdGl2ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAjc2lkZWJhckNvbGxhcHNlIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG4vLyBQUk9KRUNUIFNUWUxJTkdcblxuJGJvcmRlci1yYWRpdXM6IDNweDtcbiRwcmltYXJ5OiAjZjJmMmYyO1xuJGFjdGl2ZTogIzA0ODgxMTtcbiRhbmltYXRpb246IHB1bHNlO1xuXG4ucHJvZmlsZS1kcm9wZG93biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBDaHJvbWUgYWxsIC8gU2FmYXJpIGFsbCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBGaXJlZm94IGFsbCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIElFIDEwKyAqL1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogTGlrZWx5IGZ1dHVyZSAqL1xuXG4gICoge1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLyogQ2hyb21lIGFsbCAvIFNhZmFyaSBhbGwgKi9cbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIEZpcmVmb3ggYWxsICovXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIElFIDEwKyAqL1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC8qIExpa2VseSBmdXR1cmUgKi9cbiAgfVxuXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgZGlzcGxheTogbm9uZTtcblxuICAgICY6Y2hlY2tlZCB7XG4gICAgICAmfnVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGFuaW1hdGlvbjogJGFuaW1hdGlvbiAuNXM7XG4gICAgICB9XG5cbiAgICAgICZ+aW1nIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGFjdGl2ZTtcbiAgICAgIH1cblxuICAgICAgJn5sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRhY3RpdmU7XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xuICAgICAgICB9XG5cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICByaWdodDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogN3B4IDEwcHggMCAxMHB4O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGFjdGl2ZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbWcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJHByaW1hcnksIDEwJSk7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgbWFyZ2luOiAwcmVtIDFyZW0gMHJlbSAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgfVxuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgIC8vIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cblxuICB1bCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiA1cHggMTVweCAwIDA7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMDAlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZGRkO1xuXG4gICAgbGkge1xuICAgICAgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAuNzVyZW0gMXJlbTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogZGFya2VuKCRwcmltYXJ5LCA1MCUpO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBtYXJnaW46IDAgLjc1cmVtIDAgLS4yNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkcHJpbWFyeSwgNSUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQgYTpob3ZlciB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzICRib3JkZXItcmFkaXVzIDAgMDtcbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIGE6aG92ZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgJGJvcmRlci1yYWRpdXMgJGJvcmRlci1yYWRpdXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJj5sYWJlbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IC40cmVtO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiAwICRib3JkZXItcmFkaXVzICRib3JkZXItcmFkaXVzIDA7XG5cbiAgICBpIHtcbiAgICAgIGNvbG9yOiBkYXJrZW4oJHByaW1hcnksIDI1JSk7XG4gICAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgfVxuICB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbn1cblxuLmJzLXBvcG92ZXItYXV0b1t4LXBsYWNlbWVudF49Ym90dG9tXT4uYXJyb3c6OmJlZm9yZSxcbi5icy1wb3BvdmVyLWJvdHRvbT4uYXJyb3c6OmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMyNzJhM2Q7XG59XG5cbi5icy1wb3BvdmVyLWF1dG9beC1wbGFjZW1lbnRePWJvdHRvbV0+LmFycm93OjphZnRlcixcbi5icy1wb3BvdmVyLWJvdHRvbT4uYXJyb3c6OmFmdGVyIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzI3MmEzZDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmtnKTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDExMSwgMTExLCAxMTgsIDAuNTgpO1xuICBib3JkZXItbGVmdDogaGlkZGVuO1xuICBib3JkZXItcmlnaHQ6IGhpZGRlbjtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC42MjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNjI1cmVtO1xuICBib3JkZXItdG9wOiBoaWRkZW47XG59XG5cbi5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC42MjVyZW07XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNjI1cmVtO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4vKiBTdHlsZXMgZm9yIHdyYXBwaW5nIHRoZSBzZWFyY2ggYm94ICovXG5cbi5tYWluIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbi8qIEJvb3RzdHJhcCA0IHRleHQgaW5wdXQgd2l0aCBzZWFyY2ggaWNvbiAqL1xuLmhhcy1zZWFyY2gge1xuICB3aWR0aDogNDUlO1xuICAvLyBoZWlnaHQ6IDMxcHg7XG4gIC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICM3NzcgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZy1sZWZ0OiAyLjM3NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1ia2cpO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmhhcy1zZWFyY2ggLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyLjM3NXJlbTtcbiAgaGVpZ2h0OiAyLjM3NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuMzc1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogI2FhYTtcblxufVxuIl19 */"] });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-SG": "zavE",
	"./en-SG.js": "zavE",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-loading-bar/core */ "lPP5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'sgf-m';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [["color", "#FEC009"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-loading-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_1__["LoadingBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "Um58":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-home1/dashboard-home.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardHomeOutcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHomeOutcomeComponent", function() { return DashboardHomeOutcomeComponent; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/crud.service */ "+JMX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _suffixes_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../suffixes.pipe */ "WHRT");






function DashboardHomeOutcomeComponent_section_0_div_1_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " No indicators added ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = function (a0) { return { "color": a0 }; };
function DashboardHomeOutcomeComponent_section_0_div_1_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardHomeOutcomeComponent_section_0_div_1_div_8_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const item_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r9.gotoOutcome(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ind_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", item_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "priority" + ind_r3 + "gauge" + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "gauge-container" + i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx_r6.setColor(item_r7)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 9, item_r7.baseline));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c1, ctx_r6.setColor(item_r7)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 11, item_r7.actual));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 13, ctx_r6.prepareTarget(item_r7.target, 0).target));
} }
function DashboardHomeOutcomeComponent_section_0_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardHomeOutcomeComponent_section_0_div_1_div_8_div_1_Template, 21, 19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", p_r2.lIndicators.slice(0, 3));
} }
function DashboardHomeOutcomeComponent_section_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardHomeOutcomeComponent_section_0_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const p_r2 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r13.viewPriorityDetails(p_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " View more");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DashboardHomeOutcomeComponent_section_0_div_1_p_7_Template, 4, 0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardHomeOutcomeComponent_section_0_div_1_div_8_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ind_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Priority ", ind_r3 + 1, ": ", p_r2.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", p_r2.lIndicators.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", p_r2.lIndicators.length != 0);
} }
function DashboardHomeOutcomeComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardHomeOutcomeComponent_section_0_div_1_Template, 9, 4, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.priorities);
} }
class DashboardHomeOutcomeComponent {
    constructor(crud, router) {
        this.crud = crud;
        this.router = router;
        this.preffered = [];
        this.tab = 'revenue';
        this.pmore = false;
        this.mdamore = false;
        this.projectmore = false;
        this.policymore = false;
        this.fundmore = false;
        this.activeChart = 'priority';
        this.budgetPriority = false;
        this.getPriorities();
    }
    finPoliciesByMdas(arg0) {
        throw new Error('Method not implemented.');
    }
    ngOnInit() {
    }
    initializeGuage(data, id) {
        for (let i = 0; i < data.length; i++) {
            let currentGuage = document.getElementById(id + 'gauge' + i);
            const gauge = this.Gauge(currentGuage);
            const target = this.prepareTarget(data[i].target, 0).target;
            const percent = (this.crud.calculatePercantage(data[i].actual, data[i].baseline, target, data[i].aggregation)) / 100;
            gauge.value(percent);
        }
    }
    Gauge(el) {
        // ##### Private Properties and Attributes
        let element, // Containing element for the info component
        data, // `.gauge--data` element
        needle, // `.gauge--needle` element
        value = 0.0, // Current gauge value from 0 to 1
        prop; // Style for transform
        // ##### Private Methods and Functions
        let setElement = function (el) {
            // Keep a reference to the various elements and sub-elements
            element = el;
            if (element != undefined) {
                data = element.querySelector(".gauge--data");
                needle = element.querySelector(".gauge--needle");
            }
        };
        var setValue = function (x) {
            value = x;
            var turns = -0.5 + (x * 0.5);
            if (data != undefined) {
                data.style[prop] = "rotate(" + turns + "turn)";
                needle.style[prop] = "rotate(" + turns + "turn)";
            }
        };
        // ##### Object to be Returned
        var exports = {
            element: function (el) {
                if (!arguments.length) {
                    return element;
                }
                setElement(el);
                return this;
            },
            value: function (x) {
                if (!arguments.length) {
                    return value;
                }
                setValue(x);
                return this;
            }
        };
        // ##### Public API Methods
        // ##### Initialization
        var body = document.getElementsByTagName("body")[0];
        ["webkitTransform", "mozTransform", "msTransform", "oTransform", "transform"].
            forEach(function (p) {
            if (typeof body.style[p] !== "undefined") {
                prop = p;
            }
        });
        if (arguments.length) {
            setElement(el);
        }
        return exports;
    }
    prepareTarget(data, index) {
        if (data == null)
            return [];
        if (typeof data === 'number') {
            return { target: data };
        }
        const tar = JSON.parse(data);
        return tar[index];
    }
    viewPriorityDetails(p) {
        // localStorage.setItem('priority', JSON.stringify(p));
        this.router.navigate(['/dashboard/priority/' + p]);
    }
    setColor(data) {
        const target = this.prepareTarget(data.target, 0).target;
        const r = (this.crud.calculatePercantage(parseFloat(data.actual), parseFloat(data.baseline), parseFloat(target), data.aggregation));
        this.priorities.forEach(e => {
        });
        for (let i = 0; i < this.priorities.length; i++) {
            this.initializeGuage(this.priorities[i].lIndicators, 'priority' + i);
        }
        if (r <= 33.3) {
            return 'red';
        }
        if (r > 33.3 && r <= 66.6) {
            return '#ffbf00';
        }
        if (r > 66.6) {
            return 'green';
        }
    }
    getPriorities() {
        let data = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
    {
      priorities(tree: 2){
        id
        title
        order
        lIndicators{
            id
            title
            ref
            type
            baseline
            actual
            target
            aggregation
            rt
            currency
            active
            mdaId
            driver
            
          }
        }
      }
  `;
        this.crud.pullData(data, {})
            .subscribe((result) => {
            this.priorities = result.data.priorities;
            for (let i = 0; i < this.priorities.length; i++) {
                this.initializeGuage(this.priorities[i].lIndicators, 'priority' + i);
            }
        });
    }
    gotoOutcome(item) {
        this.router.navigate(['/dashboard/outcome'], {
            state: {
                log: JSON.stringify(item)
            }
        });
    }
}
DashboardHomeOutcomeComponent.ɵfac = function DashboardHomeOutcomeComponent_Factory(t) { return new (t || DashboardHomeOutcomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DashboardHomeOutcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardHomeOutcomeComponent, selectors: [["app-dashboard-outcome-home"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["class", "container-fluid my-5 px-3", 4, "ngFor", "ngForOf"], [1, "container-fluid", "my-5", "px-3"], [1, "d-flex", "justify-content-between"], [1, "mb-4"], [1, "btn", "btn-sm", "btn-outline-warning", "mx-3", 3, "click"], ["style", "color: #ccc", "class", "text-center my-5", 4, "ngIf"], ["class", "d-flex horizontal-scroll", 4, "ngIf"], [1, "text-center", "my-5", 2, "color", "#ccc"], ["width", "20", "src", "assets/icons/box.svg", "alt", ""], [1, "d-flex", "horizontal-scroll"], ["class", "col-md-4 px-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "px-2"], [1, "primary-border", "text-center", "p-3", "cursor", 3, "click"], [1, "chart-small-label", 3, "title"], [1, "gauge", "gauge__liveupdate", "mt-3"], [1, "gauge--container"], [1, "gauge--marker"], [1, "gauge--background"], [1, "gauge--center"], [1, "gauge--data", 3, "ngStyle"], [1, "gauge--needle"], [1, "gauge--labels", "mdl-typography--headline"], [1, "gauge--label__low"], [1, "gauge--label__spacer", 2, "text-align", "center", "font-size", "1.5rem", 3, "ngStyle"], [1, "gauge--label__high"]], template: function DashboardHomeOutcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DashboardHomeOutcomeComponent_section_0_Template, 2, 1, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.priorities);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], pipes: [_suffixes_pipe__WEBPACK_IMPORTED_MODULE_5__["SuffixesPipe"]], styles: [".primary-border[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  border-radius: 5px;\n}\n\n.tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n.tabs[_ngcontent-%COMP%]   .tab-color[_ngcontent-%COMP%] {\n  background: #A06220;\n  color: #c6c0b3;\n  border-radius: 2px;\n}\n\n.aggregation[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.mandate-label[_ngcontent-%COMP%] {\n  height: 16px;\n  overflow: hidden;\n}\n\n.projectmore[_ngcontent-%COMP%], .policymore[_ngcontent-%COMP%], .fundmore[_ngcontent-%COMP%] {\n  height: 140px;\n  transition: 0.3s all ease-in-out;\n  overflow: hidden;\n}\n\n.mdamore[_ngcontent-%COMP%] {\n  transition: 0.3s ease-in-out;\n  overflow: hidden;\n}\n\nsmall.chart-small-label[_ngcontent-%COMP%] {\n  font-size: smaller;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: var(--secondary-card-bkg);\n  color: var(--font-color);\n  border-top: 1px solid #A06220 !important;\n  border-bottom: 1px solid #A06220 !important;\n  border-left: hidden;\n  border-right: hidden;\n  border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHRTtFQUNFLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZKOztBQU9FO0VBQ0UsZ0JBQUE7QUFKSjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSwyQ0FBQTtFQUNBLHdCQUFBO0VBRUEsd0NBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQU5GIiwiZmlsZSI6ImRhc2hib2FyZC1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW1hcnktYm9yZGVyIHtcbiAgaDYge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuXG4udGFicyB7XG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICBzcGFuOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuXG4gIC50YWItY29sb3Ige1xuICAgIGJhY2tncm91bmQ6ICNBMDYyMjA7XG4gICAgY29sb3I6ICNjNmMwYjM7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB9XG59XG5cbi5hZ2dyZWdhdGlvbiB7XG4gIGgxIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cbi5tYW5kYXRlLWxhYmVsIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvamVjdG1vcmUsIC5wb2xpY3ltb3JlLCAuZnVuZG1vcmV7XG4gIGhlaWdodDogMTQwcHg7XG4gIHRyYW5zaXRpb246LjNzIGFsbCBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1kYW1vcmV7XG4gIHRyYW5zaXRpb246LjNzIGVhc2UtaW4tb3V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5zbWFsbC5jaGFydC1zbWFsbC1sYWJlbHtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG4ubGlzdC1ncm91cC1pdGVte1xuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXNlY29uZGFyeS1jYXJkLWJrZyk7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI0EwNjIyMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNBMDYyMjAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBMDYyMjAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWxlZnQ6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZHtcbiAgLy8gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjYyNXJlbTtcbiAgLy8gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC42MjVyZW07XG4gIC8vIGJvcmRlci10b3A6IGhpZGRlbjtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxke1xuICAvLyBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNjI1cmVtO1xuICAvLyBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjYyNXJlbTtcbiAgLy8gYm9yZGVyLWJvdHRvbTogbm9uZTtcbn0iXX0= */"] });


/***/ }),

/***/ "WHRT":
/*!**********************************!*\
  !*** ./src/app/suffixes.pipe.ts ***!
  \**********************************/
/*! exports provided: SuffixesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuffixesPipe", function() { return SuffixesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SuffixesPipe {
    transform(input, args) {
        var exp, rounded, suffixes = ['k', 'M', 'B', 'T', 'P', 'E'];
        if (Number.isNaN(input)) {
            return null;
        }
        if (input < 1000) {
            return input;
        }
        exp = Math.floor(Math.log(input) / Math.log(1000));
        return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
    }
}
SuffixesPipe.ɵfac = function SuffixesPipe_Factory(t) { return new (t || SuffixesPipe)(); };
SuffixesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "suffix", type: SuffixesPipe, pure: true });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-moment */ "QUrN");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard-home/dashboard-home.component */ "lr2i");
/* harmony import */ var _all_outcomes_all_outcomes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all-outcomes/all-outcomes.component */ "cQWv");
/* harmony import */ var _all_mandates_all_mandates_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./all-mandates/all-mandates.component */ "N58W");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "S8xs");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _strategic_plan_strategic_plan_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./strategic-plan/strategic-plan.component */ "nM3Y");
/* harmony import */ var _presidential_mandate_presidential_mandate_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./presidential-mandate/presidential-mandate.component */ "7TvS");
/* harmony import */ var angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-2-dropdown-multiselect */ "HoCe");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _mda_mda_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mda/mda.component */ "a3qC");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var _suffixes_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./suffixes.pipe */ "WHRT");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _account_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./account/user-login/user-login.component */ "6nnL");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./graphql.module */ "4KHl");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _guage_guage_guage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./guage/guage/guage.component */ "07TT");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./settings/settings.component */ "70H3");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "/de2");
/* harmony import */ var _ews_ews_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ews/ews.component */ "CJl5");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./project-details/project-details.component */ "OVWj");
/* harmony import */ var _output_output_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./output/output.component */ "z+Vf");
/* harmony import */ var _priority_priority_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./priority/priority.component */ "pZjM");
/* harmony import */ var _project_details_photo_story_photo_story_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./project-details/photo-story/photo-story.component */ "Lz8j");
/* harmony import */ var _dashboard_home1_dashboard_home_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dashboard-home1/dashboard-home.component */ "Um58");
/* harmony import */ var _dashboard_home2_dashboard_home_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./dashboard-home2/dashboard-home.component */ "sHMU");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ngx-loading-bar/core */ "lPP5");
/* harmony import */ var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @ngx-loading-bar/http-client */ "XJCJ");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ngx-loading-bar/router */ "F34d");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./search/search.component */ "tq2C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/core */ "fXoL");















































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵdefineInjector"]({ providers: [
    // { provide: APP_BASE_HREF, useValue: '/dashboard' }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"].forRoot(),
            angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_14__["MultiselectDropdownModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_34__["ToastrModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["ModalModule"].forRoot(),
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
            ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_20__["PopoverModule"].forRoot(),
            _graphql_module__WEBPACK_IMPORTED_MODULE_22__["GraphQLModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_0__["MomentModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_35__["CarouselModule"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_36__["LoadingBarModule"],
            _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_37__["LoadingBarHttpClientModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"].forRoot(),
            // for Router use:
            _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_38__["LoadingBarRouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_40__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
        _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_7__["DashboardHomeComponent"],
        _dashboard_home1_dashboard_home_component__WEBPACK_IMPORTED_MODULE_32__["DashboardHomeOutcomeComponent"],
        _dashboard_home2_dashboard_home_component__WEBPACK_IMPORTED_MODULE_33__["DashboardOutputHomeComponent"],
        _all_outcomes_all_outcomes_component__WEBPACK_IMPORTED_MODULE_8__["AllOutcomesComponent"],
        _all_mandates_all_mandates_component__WEBPACK_IMPORTED_MODULE_9__["AllMandatesComponent"],
        _strategic_plan_strategic_plan_component__WEBPACK_IMPORTED_MODULE_12__["StrategicPlanComponent"],
        _presidential_mandate_presidential_mandate_component__WEBPACK_IMPORTED_MODULE_13__["PresidentialMandateComponent"],
        _mda_mda_component__WEBPACK_IMPORTED_MODULE_17__["MdaComponent"],
        _suffixes_pipe__WEBPACK_IMPORTED_MODULE_19__["SuffixesPipe"],
        _account_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_21__["UserLoginComponent"],
        _guage_guage_guage_component__WEBPACK_IMPORTED_MODULE_24__["GuageComponent"],
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_25__["SettingsComponent"],
        _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_26__["UserProfileComponent"],
        _ews_ews_component__WEBPACK_IMPORTED_MODULE_27__["EwsComponent"],
        _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_28__["ProjectDetailsComponent"],
        _output_output_component__WEBPACK_IMPORTED_MODULE_29__["OutputComponent"],
        _priority_priority_component__WEBPACK_IMPORTED_MODULE_30__["PriorityComponent"],
        _project_details_photo_story_photo_story_component__WEBPACK_IMPORTED_MODULE_31__["PhotoStoryComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_39__["SearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_10__["AccordionModule"], angular_2_dropdown_multiselect__WEBPACK_IMPORTED_MODULE_14__["MultiselectDropdownModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_34__["ToastrModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["ModalModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_20__["PopoverModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_22__["GraphQLModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
        ngx_moment__WEBPACK_IMPORTED_MODULE_0__["MomentModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_35__["CarouselModule"],
        _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_36__["LoadingBarModule"],
        _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_37__["LoadingBarHttpClientModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"], 
        // for Router use:
        _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_38__["LoadingBarRouterModule"]] }); })();


/***/ }),

/***/ "a3qC":
/*!**************************************!*\
  !*** ./src/app/mda/mda.component.ts ***!
  \**************************************/
/*! exports provided: MdaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdaComponent", function() { return MdaComponent; });
/* harmony import */ var _sp_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sp.json */ "3dTk");
var _sp_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./sp.json */ "3dTk", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data.service */ "AwSQ");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/popover */ "EDFS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "S8xs");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var _suffixes_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../suffixes.pipe */ "WHRT");









function MdaComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Strategic Objective");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MdaComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ministry of Petroluem Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MdaComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Ministry of Power");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MdaComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Minsitry of Finance Budget & National Planning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MdaComponent_ng_template_11_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_ng_template_11_li_3_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const item_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.changeView(item_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.mda);
} }
function MdaComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Strategic Objective");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MdaComponent_ng_template_11_li_3_Template, 2, 1, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.accordionData);
} }
function MdaComponent_li_50_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MdaComponent_li_50_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MdaComponent_li_50_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MdaComponent_li_50_ul_34_li_1_ul_17_li_1_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MdaComponent_li_50_ul_34_li_1_ul_17_li_1_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 72);
} }
const _c0 = function () { return { "1": "Project", "2": "Policy" }; };
function MdaComponent_li_50_ul_34_li_1_ul_17_li_1_ul_38_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r30 = ctx.$implicit;
    const indicator_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", indicator_r24.active == 0 && ctx_r29.active == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c0)[project_r30.type], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r30.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20A6", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 6, project_r30.budget), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", project_r30.status || "Not Started", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](project_r30.state || "FCT");
} }
function MdaComponent_li_50_ul_34_li_1_ul_17_li_1_ul_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MdaComponent_li_50_ul_34_li_1_ul_17_li_1_ul_38_li_1_Template, 42, 9, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const indicator_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", indicator_r24.projects);
} }
function MdaComponent_li_50_ul_34_li_1_ul_17_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, MdaComponent_li_50_ul_34_li_1_ul_17_li_1_span_23_Template, 2, 0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, MdaComponent_li_50_ul_34_li_1_ul_17_li_1_span_33_Template, 1, 0, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, MdaComponent_li_50_ul_34_li_1_ul_17_li_1_ul_38_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const indicator_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", indicator_r24.active == 0 && ctx_r23.active == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Indicators ", i_r25 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", indicator_r24.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Baseline \u00BB ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 10, indicator_r24.baseline), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", indicator_r24.rt == "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Targets \u00BB ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 12, indicator_r24.target), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", indicator_r24.rt != "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 14, ctx_r23.getIndicatorValue(indicator_r24)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", indicator_r24.rt == "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (indicator_r24.projects == null ? null : indicator_r24.projects.length) > 0);
} }
function MdaComponent_li_50_ul_34_li_1_ul_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MdaComponent_li_50_ul_34_li_1_ul_17_li_1_Template, 39, 16, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mandate_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", mandate_r20.indicators);
} }
function MdaComponent_li_50_ul_34_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MdaComponent_li_50_ul_34_li_1_ul_17_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mandate_r20 = ctx.$implicit;
    const i_r21 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", mandate_r20.active == 0 && ctx_r19.active == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Mandates ", i_r21 + 1 || 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mandate_r20.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", mandate_r20.projects == null ? null : mandate_r20.projects.length, " Activities");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (mandate_r20.indicators == null ? null : mandate_r20.indicators.length) > 0);
} }
function MdaComponent_li_50_ul_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MdaComponent_li_50_ul_34_li_1_Template, 18, 5, "li", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priority_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", priority_r13.mandates);
} }
function MdaComponent_li_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Baseline \u00BB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, MdaComponent_li_50_span_20_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Targets \u00BB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, MdaComponent_li_50_span_24_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, MdaComponent_li_50_span_28_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, MdaComponent_li_50_ul_34_Template, 2, 1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const priority_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Priority ", i_r14 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](priority_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", priority_r13.rt == "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](priority_r13.baseline);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", priority_r13.rt == "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](priority_r13.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", priority_r13.rt == "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](priority_r13.actual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (priority_r13.mandates == null ? null : priority_r13.mandates.length) > 0);
} }
const _c1 = function () { return { "margin-left": "40%" }; };
class MdaComponent {
    constructor(data, modalService) {
        this.data = data;
        this.modalService = modalService;
        this.sp = _sp_json__WEBPACK_IMPORTED_MODULE_0__;
        this.welcome = true;
        this.id = 0;
        this.isFirstOpen = true;
        this.oneAtATime = true;
        this.currentView = 'so';
        this.priorities = [
            {
                "title": "Stabilize the Macro Economic Environment",
                "indicator": "",
                "baseline": 0,
                "actual": 0,
                "factual": 0,
                "target": 0,
                "ftarget": 0,
                "fbaseline": 0,
                "aggregation": "+",
                "rt": "#",
                "currency": "₦",
                "active": 1,
                "ref": 0,
                "mandates": [
                    {
                        "title": "Ensure full nationwide migration to the JTB-TIN database and Integrated Tax Administration System",
                        "projects": [
                            1,
                            2,
                            3,
                            4
                        ],
                        "mdas": [
                            "fmfbnp"
                        ],
                        "indicators": [
                            {
                                "title": "GDP growth rate (%)",
                                "ref": 0,
                                "baseline": 2.27,
                                "actual": -6.1,
                                "factual": 100000,
                                "target": 7,
                                "ftarget": 20000000,
                                "fbaseline": 10000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "%",
                                "mdas": [
                                    "fmfbnp"
                                ]
                            },
                            {
                                "title": "Revenue/GDP (%)",
                                "ref": 0,
                                "baseline": 8.2,
                                "actual": 8,
                                "factual": 100000,
                                "target": 15,
                                "ftarget": 20000000,
                                "fbaseline": 10000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "%",
                                "mdas": [
                                    "fmfbnp"
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Increase public revenue by implementing the Public Finance Transformation (Strategic Revenue Growth Initiatives) Programme",
                        "projects": [
                            1,
                            2,
                            3,
                            4
                        ],
                        "mdas": [
                            "fmfbnp"
                        ],
                        "indicators": [
                            {
                                "title": "Revenue/GDP (%)",
                                "ref": 0,
                                "baseline": 8.2,
                                "actual": 8,
                                "factual": 100000,
                                "target": 15,
                                "ftarget": 20000000,
                                "fbaseline": 10000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "%",
                                "mdas": [
                                    "fmfbnp"
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Ensure full nationwide migration to the JTB-TIN database and Integrated Tax Administration System",
                        "projects": [
                            1,
                            2
                        ],
                        "mdas": [
                            "fmfbnp"
                        ],
                        "indicators": [
                            {
                                "title": "Revenue/GDP (%)",
                                "ref": 0,
                                "baseline": 8.2,
                                "actual": 8,
                                "factual": 100000,
                                "target": 15,
                                "ftarget": 20000000,
                                "fbaseline": 10000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "%",
                                "mdas": [
                                    "fmfbnp"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Achieve Agriculture and Food Security",
                "mandates": [],
                "ref": 0,
                "baseline": 0,
                "actual": 0,
                "factual": 0,
                "target": 0,
                "ftarget": 0,
                "fbaseline": 0,
                "aggregation": "+",
                "rt": "#",
                "currency": "₦",
                "active": 1
            },
            {
                "title": "Ensure Energy Sufficiency in Power and Petroleum Product",
                "ref": 0,
                "baseline": 0,
                "actual": 0,
                "factual": 0,
                "target": 0,
                "ftarget": 0,
                "fbaseline": 0,
                "aggregation": "+",
                "rt": "#",
                "currency": "₦",
                "active": 1,
                "mandates": [
                    {
                        "title": "Reduce the cost of crude oil extraction by at least 5%",
                        "projects": [
                            1,
                            2,
                            3,
                            4
                        ],
                        "mdas": [
                            "mpr"
                        ],
                        "indicators": [
                            {
                                "title": "Oil reserves (bn barrels)",
                                "ref": 0,
                                "baseline": 2.3,
                                "actual": 1.9,
                                "factual": 100000,
                                "target": 3,
                                "ftarget": 20000000,
                                "fbaseline": 10000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "#",
                                "mdas": [
                                    "mpr", "fmfbnp"
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Aggressively increase domestic refining capacity",
                        "projects": [
                            1,
                            2
                        ],
                        "mdas": [
                            "mpr"
                        ],
                        "indicators": [
                            {
                                "title": "Oil production(MBPD)",
                                "ref": 0,
                                "baseline": 2.3,
                                "actual": 1.9,
                                "factual": 100000,
                                "target": 3,
                                "ftarget": 20000000,
                                "fbaseline": 10000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "#",
                                "mdas": [
                                    "mpr"
                                ],
                            }
                        ]
                    },
                    {
                        "title": "Complete Gas Flare CommercializationProgramme",
                        "projects": [
                            1
                        ],
                        "mdas": [
                            "mpr", "fmfbnp"
                        ],
                        "indicators": [
                            {
                                "title": "Gas production (mmscf/d)",
                                "ref": 0,
                                "baseline": 7924,
                                "actual": 7801,
                                "factual": 100000,
                                "target": 15000,
                                "ftarget": 20000000,
                                "fbaseline": 10000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "#",
                                "mdas": [
                                    "mpr, fmfbnp"
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Implement the Siemens Grid and Distribution Enhancement Project",
                        "projects": [
                            1
                        ],
                        "mdas": [
                            "mop"
                        ],
                        "indicators": [
                            {
                                "title": "Transmission and distribution capacity(MW)",
                                "ref": 0,
                                "baseline": 4000,
                                "actual": 5200,
                                "factual": 100000,
                                "target": 11000,
                                "ftarget": 20000000,
                                "fbaseline": 10000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "#",
                                "mdas": [
                                    "mop"
                                ]
                            },
                            {
                                "title": "Electrification rate (%)",
                                "ref": 0,
                                "baseline": 4000,
                                "actual": 5200,
                                "factual": 100000,
                                "target": 11000,
                                "ftarget": 20000000,
                                "fbaseline": 10000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "%",
                                "mdas": [
                                    "mop"
                                ]
                            },
                            {
                                "title": "# of connections to businesses",
                                "ref": 0,
                                "baseline": 11179,
                                "actual": 12523,
                                "factual": 100000,
                                "target": 500000,
                                "ftarget": 20000000,
                                "fbaseline": 10000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "#",
                                "mdas": [
                                    "mop"
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Increase generation capacity by at least 1,000 MW annually",
                        "projects": [
                            1,
                            2,
                            4
                        ],
                        "mdas": [
                            "mop"
                        ],
                        "indicators": [
                            {
                                "title": "Annual additional generation capacity(MW)",
                                "ref": 0,
                                "baseline": 0,
                                "actual": 80,
                                "factual": 100000,
                                "target": 1000,
                                "ftarget": 20000000,
                                "fbaseline": 10000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "#",
                                "mdas": [
                                    "mop"
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Increase distribution and transmission capacity to 11,000 MW",
                        "projects": [
                            1,
                            2,
                            4
                        ],
                        "mdas": [
                            "mop"
                        ],
                        "indicators": [
                            {
                                "title": "Transmission and distribution capacity(MW)",
                                "ref": 0,
                                "baseline": 4000,
                                "actual": 5200,
                                "factual": 100000,
                                "target": 11000,
                                "ftarget": 20000000,
                                "fbaseline": 10000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "#",
                                "mdas": [
                                    "mop"
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Improve Transportation and Other Infrastructure",
                "ref": 0,
                "baseline": 0,
                "actual": 0,
                "factual": 0,
                "target": 0,
                "ftarget": 0,
                "fbaseline": 0,
                "aggregation": "+",
                "rt": "#",
                "currency": "₦",
                "active": 1,
                "mandates": [],
            },
            {
                "title": "Drive Industrilisation",
                "ref": 0,
                "baseline": 0,
                "actual": 0,
                "factual": 0,
                "target": 0,
                "ftarget": 0,
                "fbaseline": 0,
                "aggregation": "+",
                "rt": "#",
                "currency": "₦",
                "active": 1,
                "mandates": [],
            },
            {
                "title": "Improve health education and productivity of Nigerians",
                "ref": 0,
                "baseline": 0,
                "actual": 0,
                "factual": 0,
                "target": 0,
                "ftarget": 0,
                "fbaseline": 0,
                "aggregation": "+",
                "rt": "#",
                "currency": "₦",
                "active": 1,
                "mandates": [],
            },
            {
                "title": "Enhance social inclusion and reduce poverty",
                "ref": 0,
                "baseline": 0,
                "actual": 0,
                "factual": 0,
                "target": 0,
                "ftarget": 0,
                "fbaseline": 0,
                "aggregation": "+",
                "rt": "#",
                "currency": "₦",
                "active": 1,
                "mandates": [
                    {
                        "title": "Enhance the Social Protection Program of Government",
                        "mdas": [''],
                        "indicators": [
                            {
                                "title": "Number of Young Nigeria engaged on the N-Power Program",
                                "ref": 0,
                                "baseline": 300000,
                                "actual": 300000,
                                "factual": 0,
                                "target": 1000000,
                                "ftarget": 1000000,
                                "fbaseline": 20000000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "#"
                            },
                            {
                                "title": "Total Number of Household benefitting from CCT",
                                "ref": 0,
                                "baseline": 300000,
                                "actual": 60,
                                "factual": 0,
                                "target": 5000000,
                                "ftarget": 100000000,
                                "fbaseline": 20000000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "#"
                            },
                            {
                                "title": "Total Number of Pupils benefiting from School Feeding Program",
                                "ref": 0,
                                "baseline": 4000000,
                                "actual": 6,
                                "factual": 0,
                                "target": 10000000,
                                "ftarget": 10000000,
                                "fbaseline": 20000000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "#"
                            },
                            {
                                "title": "Total New Employment Numbers reported",
                                "ref": 0,
                                "baseline": 3000000,
                                "actual": 40,
                                "factual": 0,
                                "target": 80,
                                "ftarget": 10000000,
                                "fbaseline": 20000000,
                                "projects": []
                            },
                            {
                                "title": "Total Number of Nigerians with Digital Identity|",
                                "ref": 0,
                                "baseline": 10000000,
                                "actual": 11.75,
                                "factual": 0,
                                "target": 180000000,
                                "ftarget": 180000000,
                                "fbaseline": 20000000,
                                "projects": [],
                                "aggregation": "+",
                                "rt": "#"
                            }
                        ]
                    }
                ]
            },
            {
                "title": "Fight corruption and improve governance",
                "ref": 0,
                "baseline": 0,
                "actual": 0,
                "factual": 0,
                "target": 0,
                "ftarget": 0,
                "fbaseline": 0,
                "aggregation": "+",
                "rt": "#",
                "currency": "₦",
                "active": 1,
                "mandates": [],
            },
            {
                "title": "provide security for all citizens",
                "ref": 0,
                "baseline": 0,
                "actual": 0,
                "factual": 0,
                "target": 0,
                "ftarget": 0,
                "fbaseline": 0,
                "aggregation": "+",
                "rt": "#",
                "currency": "₦",
                "active": 1,
                "mandates": [],
            }
        ];
        this.accordionData = [
            {
                mda: "Ministry of Power",
                id: 'mop'
            },
            {
                mda: "Ministry of Finance, Budget and National Planning",
                id: 'fmfbnp'
            },
            {
                mda: "Ministry of Petroleum Resources",
                id: "mpr"
            }
        ];
        localStorage.setItem('mdapriorities', JSON.stringify(this.priorities));
    }
    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.mandateId = message);
        // this.openModal()
        this.filterData('so');
    }
    getIndicatorValue(ind) {
        let value = 0;
        ind.projects.forEach(element => {
            value += parseInt(element.drs[element.drs.length - 1].output);
            // //console.log(parseInt(element.drs[element.drs.length - 1].output));
            if (ind.projects[ind.projects.length - 1] == element) {
                // //console.log(value);
            }
        });
        return value;
    }
    filterData(id) {
        let prorityToFilter = JSON.parse(localStorage.getItem('mdapriorities'));
        let priorities = [];
        this.mandates = [];
        if (id == 'so') {
            this.mandates = this.priorities;
            return;
        }
        prorityToFilter.forEach(element => {
            if (element.mandates) {
                let mandate = element.mandates.filter(el => el.mdas.includes(id));
                element.mandates = mandate;
                priorities.push(element);
            }
        });
        this.mandates = priorities;
    }
    changeView(id) {
        this.currentView = id;
        this.filterData(id);
    }
}
MdaComponent.ɵfac = function MdaComponent_Factory(t) { return new (t || MdaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"])); };
MdaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MdaComponent, selectors: [["app-mda"]], decls: 343, vars: 15, consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-9", "pb-4"], [1, "primary-border", "p-3"], [1, "p-4"], ["type", "button", "placement", "bottom", 1, "mx-4", "btn", "btn-outline-warning", "btn-sm", 3, "popover"], [4, "ngIf"], ["popTemplate", ""], [1, "content"], [1, "tree"], [1, "my-container"], ["id", "org_tmp", 1, "org-box", "rel", 2, "padding-bottom", "0px", "display", "inline-block"], [1, "org-name", 2, "width", "66%"], [2, "display", "block"], [1, "clearfix"], [1, "title"], [2, "font-weight", "normal", "font-size", "1.3em", "margin", "20px"], [1, "org-result", 2, "display", "block"], [1, "org-settings", 2, "display", "none"], [1, "btn-group", "btn-group-justified"], ["href", "javascript:void(0);", "ng-click", "epm_pull_request('eyJsZXZlbCI6Ik9iamVjdGl2ZSIsImRhdGEiOnsibmFtZSI6IkVxdWl0YWJsZSBwcm92aXNpb24gb2YgYmFzaWMgc2VydmljZXMgYW5kIGVtcGxveW1lbnRcbm9wcG9ydHVuaXRpZXMgZW5oYW5jZWQgaW4gdGhlIE5vcnRoZWFzdCIsIjAiOiIifSwicmVmIjpbMSwxNiw0XSwia3JhIjp7InRhcmdldF95ZWFycyI6bnVsbH0sInRhcmdldF95ZWFycyI6W3siaWQiOiIyIiwieWVhciI6IjIwMTYiLCJhY3RpdmUiOiIxIn0seyJpZCI6IjMiLCJ5ZWFyIjoiMjAxNyIsImFjdGl2ZSI6IjAifSx7ImlkIjoiNCIsInllYXIiOiIyMDE4IiwiYWN0aXZlIjoiMCJ9XX0=')", 1, "btn", "btn-default"], [4, "ngFor", "ngForOf"], [1, "col-xl-3"], [3, "closeOthers", "isAnimated"], ["heading", "MDA Intervention Summary", 3, "isOpen"], [1, "linearguageWrapper"], [1, "traffic"], [1, "base"], ["tooltip", "23B", 1, "tick", 3, "ngStyle"], [1, "target"], [1, "text-center"], [2, "background", "#c6c0b3"], [1, "mb-4"], [1, "mb-3"], ["heading", "Project Report"], [1, "cursor", 3, "click"], ["heading", "Policy Report"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-nested-name1", 1, "modal", "fade"], ["childModal", "bs-modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "dialog-nested-name2", 1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "py-4", "list-group"], [1, "list-group-item", "clearfix"], [1, "float-left"], [1, "float-right", "cursor", 3, "click"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-nested-name2", 1, "modal", "fade"], ["lgModal", "bs-modal"], [1, "modal-dialog", "modal-xl"], ["id", "dialog-sizes-name1", 1, "modal-title", "pull-left"], [1, "col-lg-5"], [1, "list-group"], [1, "list-group-item"], [1, "col-lg-7"], ["id", "timeline-content"], [1, "timeline"], ["data-date", "25/05/2019", 1, "event"], ["class", "list-group-item cursor", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "cursor", 3, "click"], [2, "font-weight", "normal", "font-size", "1.3em"], [3, "hidden", 4, "ngFor", "ngForOf"], [3, "hidden"], [1, "org-name", 2, "width", "100%"], [1, "py-3", 2, "border-top", "solid 1px #ddd"], [2, "font-weight", "normal", "font-size", "1.3em", "color", "#ddd"], [2, "font-weight", "normal", "font-size", "1.3em", "padding-bottom", "10px", "display", "inline-block"], ["style", "display: inline; font-size: inherit", 4, "ngIf"], [2, "display", "inline", "font-size", "inherit", 3, "hidden"], [2, "display", "inline", "font-size", "inherit"], ["id", "org_tmp", 1, "org-box", "rel", 2, "padding-bottom", "47px", "display", "inline-block"], [2, "font-weight", "normal", "font-size", "1.5em"], [1, "org-metrics", 2, "border-top", "1px solid #18a972", "display", "block"], [1, "clearfix", "p-2", "space5"], [1, "container", "d-inline-block", "text-center", "no-padding"], [1, "col-3"], [1, "m-0"], [1, "font-weight-bold", "text-extra-large"], [1, "col-6"]], template: function MdaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "FGN Priorities");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MdaComponent_span_7_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MdaComponent_span_8_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MdaComponent_span_9_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MdaComponent_span_10_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MdaComponent_ng_template_11_Template, 4, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Strategic Objective");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Lift 100 million Nigerians out of poverty in 10 years ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Baseline \u00BB 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Actual \u00BB 0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, " EPM Pull request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, MdaComponent_li_50_Template, 35, 9, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "accordion", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "accordion-group", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Progress on MDA Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " 0% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " 100% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Total Budget For MDA Delivery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "\u20A643B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Total Budget Release");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\u20A615.8B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Total Percentage Released");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "33.7%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Total Budget Utilised");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h1", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "\u20A615.8B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Total Percentage Utilised");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "33.7%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Remaining Budget To Completion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h1", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "\u20A615.8B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "Total Percentage of Budget To Completion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "33.7%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "accordion-group", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Average Level of Completion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " 0% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " 100% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Total Number Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "45 Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_Template_small_click_118_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](236); return _r7.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Total of Completed Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "5 Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_Template_small_click_125_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](236); return _r7.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Total Percentage of Completed Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Total of Projects Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "11 Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_Template_small_click_137_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](236); return _r7.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Total Percentage of Started Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "33.7%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Total Number of Pending Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "h1", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "34 Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_Template_small_click_149_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](236); return _r7.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Total Percentage of Pending Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "66.3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Total Number of Abandoned Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "h1", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "34 Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_Template_small_click_161_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](236); return _r7.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](162, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "Total Percentage of Abandoned Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "66.3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "accordion-group", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Progress on Policy Intervention");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, " 0% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, " 100% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "Total Number Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "45 Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_Template_small_click_185_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](236); return _r7.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "Total of Executed Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "5 Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_Template_small_click_192_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](236); return _r7.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "Total Percentage of Executed Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Total of Policies Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "11 Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_Template_small_click_204_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](236); return _r7.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Total Percentage of Policies Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "33.7%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Total Number of Pending Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "h1", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "34 Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_Template_small_click_216_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](236); return _r7.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Total Percentage of Pending Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "66.3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Total Number of Abandoned Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "h1", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "34 Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_Template_small_click_228_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](236); return _r7.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "hr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Total Percentage of Abandoned Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "66.3%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "h4", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "List of Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_Template_button_click_242_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](236); return _r7.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "ul", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "On-goin Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Lagos-Ibadan Express Way");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_Template_span_click_252_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](265); return _r8.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Lagos-Ibadan Express Way");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_Template_span_click_257_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](265); return _r8.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "Lagos-Ibadan Express Way");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_Template_span_click_262_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](265); return _r8.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "h4", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](270, "Project Details & Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MdaComponent_Template_button_click_271_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](265); return _r8.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "Project Meta Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "ul", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "Title:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](286, "LGA:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Longitude:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Latitude:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Cost Implication:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, "Start Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](298, "End Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "Agency-In-Charge:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302, "Contrator:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "Project Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "ul", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "li", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "Title: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "Report Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, "Details of this report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "li", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "Title: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319, "Report Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "Details of this report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "li", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "Title: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, "Report Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](328, "Details of this report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "li", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "Title: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](333, "Report Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](334, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Details of this report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "li", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "Title: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, "Report Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "Details of this report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("popover", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentView == "so");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentView == "mpr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentView == "mop");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentView == "fmfbnp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.mandates);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true)("isAnimated", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isOpen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c1));
    } }, directives: [ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_4__["PopoverDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionComponent"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_6__["AccordionPanelComponent"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"]], pipes: [_suffixes_pipe__WEBPACK_IMPORTED_MODULE_8__["SuffixesPipe"]], styles: [".finish[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  background-color: #604621;\n  margin: 0;\n  padding: 10px;\n  width: 100%;\n  opacity: 1;\n  z-index: 1000;\n}\n.finish[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: right;\n  font-size: 16px;\n  padding: 5px 34px;\n}\n\n\n.primary-border[_ngcontent-%COMP%] {\n  overflow: auto !important;\n}\n.content[_ngcontent-%COMP%] {\n  background-color: transparent;\n  position: relative;\n  z-index: 10;\n  min-width: 20000px;\n  height: auto;\n}\nh3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n\n.tree[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  position: relative;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  width: 100%;\n}\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  text-align: center;\n  list-style-type: none;\n  position: relative;\n  padding: 20px 5px 0px 5px;\n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 50%;\n  border-top: 1px solid #fff;\n  width: 50%;\n  height: 20px;\n}\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  right: auto;\n  left: 50%;\n  border-left: 1px solid #fff;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:only-child::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:only-child::before {\n  display: none;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:only-child {\n  padding-top: 0;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::after {\n  border: 0 none;\n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::before {\n  border-right: 1px solid #fff;\n  border-radius: 0 5px 0 0;\n  -webkit-border-radius: 0 5px 0 0;\n  -moz-border-radius: 0 5px 0 0;\n}\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child::after {\n  border-radius: 5px 0 0 0;\n  -webkit-border-radius: 5px 0 0 0;\n  -moz-border-radius: 5px 0 0 0;\n}\n\n.tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: -5px;\n  left: 50%;\n  border-left: 1px solid #fff;\n  width: 50%;\n  height: 25px;\n}\n.tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul.ignore[_ngcontent-%COMP%]::before {\n  border: none;\n}\n.tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul.ignore[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  padding: 1em 0.75em;\n  text-decoration: none;\n  color: #666767;\n  font-family: arial, verdana, tahoma;\n  font-size: 0.85em;\n  display: inline-block;\n  width: 250px;\n  \n  transition: all 0.5s;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n}\n\n\n\n.tree[_ngcontent-%COMP%]   ul.vertical[_ngcontent-%COMP%], ul.vertical[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-top: 0px;\n  left: 50%;\n}\n\n.tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ul.vertical[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.tree[_ngcontent-%COMP%]   ul.vertical[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: none;\n  text-align: left;\n}\n.tree[_ngcontent-%COMP%]   ul.vertical[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  right: auto;\n  border: none;\n}\n.tree[_ngcontent-%COMP%]   ul.vertical[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.tree[_ngcontent-%COMP%]   ul.vertical[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px 0.75em;\n  margin-left: 16px;\n}\n.tree[_ngcontent-%COMP%]   ul.vertical[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  top: -20px;\n  left: 0px;\n  border-bottom: 1px solid #fff;\n  border-left: 1px solid #fff;\n  width: 20px;\n  height: 60px;\n}\n.tree[_ngcontent-%COMP%]   ul.vertical[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child::before {\n  top: 0px;\n  height: 40px;\n}\n\ndiv.tree[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  width: 11em;\n}\ndiv.tree[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-size: 1em;\n  font-weight: bold;\n}\ndiv.tree[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: bold;\n}\n\n\n\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #604621;\n  color: white;\n  \n}\n\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]::before, .tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover    + ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]::before {\n  border-color: #aaa;\n}\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.org-box[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  \n  text-decoration: none;\n  color: #fff;\n  font-weight: bold;\n  font-size: 0.85em;\n  display: inline-block;\n  width: 320px;\n  padding-bottom: 50px;\n  position: relative;\n  background-color: #a35e32 !important;\n}\n.tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   div.org-box[_ngcontent-%COMP%]:HOVER   .org-settings[_ngcontent-%COMP%] {\n  display: block;\n}\n.rel[_ngcontent-%COMP%] {\n  position: relative;\n}\n.org-settings[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  display: none;\n  background: #fff;\n  padding: 2px;\n}\n.org-metrics[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -5px;\n  width: 100%;\n  padding-bottom: 10px;\n}\n.org-metrics[_ngcontent-%COMP%]   [class*=col-][_ngcontent-%COMP%] {\n  border-right: solid 1px #eee;\n  padding: 0;\n}\n.org-metrics[_ngcontent-%COMP%]   [class*=col-][_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.org-metrics[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 15px;\n}\n.org-name[_ngcontent-%COMP%] {\n  width: 66%;\n  padding: 0px !important;\n  font-size: 13px;\n  float: left;\n}\n.org-result[_ngcontent-%COMP%] {\n  width: 33%;\n  height: 100%;\n  border-left: 1px solid #fff;\n  text-align: center;\n  float: left;\n}\n.org-result[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: bold;\n  display: block;\n}\n.org-name[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.h50[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.indicator[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 150px;\n  border: 1px solid #fff;\n  margin-left: 10px;\n  margin-top: 10px;\n  float: left;\n}\n.indicator[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]::first-child {\n  margin-left: 0px;\n}\n.indicator[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  width: 33%;\n  height: 100%;\n  float: right;\n  border-left: 1px solid #fff;\n  text-align: center;\n  display: inline-block;\n}\n.indicator[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 66%;\n  height: 100%;\n  float: left;\n}\n.indicator[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: bold;\n  display: block;\n}\n.org-settings[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n}\n.rel[_ngcontent-%COMP%] {\n  position: relative;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background: #222;\n  opacity: 0.5;\n  \n}\n.overlay-view[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 95%;\n  height: 100%;\n  background: #fff;\n  z-index: 10;\n}\n.submission-box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 95%;\n  height: 100%;\n  background: #fafafa;\n}\n.hover[_ngcontent-%COMP%]:hover {\n  background-color: #BDE6F2;\n}\n.plan-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 5px;\n  height: 100%;\n  background: #F0AD4E;\n  z-index: 9999;\n  display: none;\n}\n.input-group[_ngcontent-%COMP%]:hover   .plan-indicator[_ngcontent-%COMP%] {\n  display: block;\n}\n.hori-scrollable-box[_ngcontent-%COMP%] {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  width: 100%;\n  height: 500px;\n}\n.hori-scrollable-box-inner[_ngcontent-%COMP%] {\n  width: 10000px;\n}\n.hori-scrollable-box[_ngcontent-%COMP%]   div.thumbnail[_ngcontent-%COMP%]:not(last-child) {\n  margin-right: 5px;\n}\nmain[_ngcontent-%COMP%] {\n  min-width: 320px;\n  max-width: 800px;\n  padding: 50px;\n  margin: 0 auto;\n  background: #fff;\n}\ns[_ngcontent-%COMP%] {\n  display: none;\n  padding: 20px 0 0;\n  border-top: 1px solid #ddd;\n}\ninput[_ngcontent-%COMP%] {\n  display: none !important;\n}\nlabel[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  display: inline-block;\n  margin: 0 0 -1px;\n  padding: 5px 10px;\n  font-weight: 600;\n  text-align: center;\n  color: #bbb;\n  border: 1px solid transparent;\n  text-transform: capitalize;\n}\nlabel[_ngcontent-%COMP%]:before {\n  font-family: fontawesome;\n  font-weight: normal;\n  margin-right: 10px;\n}\nlabel[_ngcontent-%COMP%]:hover {\n  color: #888;\n  cursor: pointer;\n}\ninput[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  color: #555;\n  border: 1px solid #ddd;\n  border-top: 2px solid #fff;\n  border-bottom: 1px solid #fff;\n}\n#tab1[_ngcontent-%COMP%]:checked    ~ #content1[_ngcontent-%COMP%], #tab2[_ngcontent-%COMP%]:checked    ~ #content2[_ngcontent-%COMP%], #tab3[_ngcontent-%COMP%]:checked    ~ #content3[_ngcontent-%COMP%], #tab4[_ngcontent-%COMP%]:checked    ~ #content4[_ngcontent-%COMP%] {\n  display: block;\n}\n@media screen and (max-width: 650px) {\n  label[_ngcontent-%COMP%] {\n    font-size: 0;\n  }\n\n  label[_ngcontent-%COMP%]:before {\n    margin: 0;\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 400px) {\n  label[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n  width: 0px;\n  background-color: transparent;\n}\n.org-settings[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem !important;\n}\n.padding-5[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n.space5[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px !important;\n  clear: both;\n}\n.text-extra-large[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n}\n.btn[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n}\n.spinner-three-bounce[_ngcontent-c3][_ngcontent-%COMP%] {\n  margin: 10px auto;\n  position: relative;\n}\nspan.link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.list-group-item[_ngcontent-%COMP%] {\n  background: transparent;\n}\n#timeline-content[_ngcontent-%COMP%] {\n  \n}\n#timeline-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #6c6d6d;\n  text-decoration: none;\n  text-transform: uppercase;\n  display: block;\n  letter-spacing: 0.3em;\n  font-size: 0.6em;\n  font-weight: 400;\n  background: #252727;\n  padding: 0.3rem 1rem;\n  margin: 1.9rem 0 0 0;\n  float: right;\n}\n#timeline-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  background: #a35e32;\n  border-bottom: 0.35em solid black;\n}\n#timeline-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n#timeline-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  letter-spacing: 1.5px;\n  color: #ffffff;\n  font-weight: 400;\n  font-size: 2.4em;\n}\n#timeline-content[_ngcontent-%COMP%]   #timeline-content[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  text-align: center;\n}\n#timeline-content[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%] {\n  border-left: 5px solid #a35e32;\n  border-bottom-right-radius: 5px;\n  border-top-right-radius: 5px;\n  background: fade(#ffffff, 3%);\n  color: fade(white, 80%);\n  margin: 50px auto;\n  letter-spacing: 0.5px;\n  position: relative;\n  line-height: 1.4em;\n  font-size: 1.03em;\n  padding: 50px;\n  list-style: none;\n  text-align: left;\n  font-weight: 100;\n  max-width: 60%;\n}\n#timeline-content[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  letter-spacing: 1.5px;\n  font-weight: 100;\n  font-size: 1.4em;\n}\n#timeline-content[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], #timeline-content[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  letter-spacing: 1.5px;\n  font-weight: 400;\n  font-size: 1.4em;\n}\n#timeline-content[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed fade(#ffffff, 10%);\n  padding-bottom: 25px;\n  margin-bottom: 50px;\n  position: relative;\n}\n#timeline-content[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:last-of-type {\n  padding-bottom: 0;\n  margin-bottom: 0;\n  border: none;\n}\n#timeline-content[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:before, #timeline-content[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:after {\n  position: absolute;\n  display: block;\n  top: 0;\n}\n#timeline-content[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:before {\n  left: -219px;\n  color: fade(#ffffff, 40%);\n  content: attr(data-date);\n  text-align: right;\n  font-weight: 100;\n  font-size: 0.9em;\n  min-width: 120px;\n}\n#timeline-content[_ngcontent-%COMP%]   .timeline[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%]:after {\n  box-shadow: 0 0 0 4px #a35e32;\n  left: -58.85px;\n  background: #313534;\n  border-radius: 50%;\n  height: 11px;\n  width: 11px;\n  content: \"\";\n  top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21kYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFFQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFBRjtBQUVFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUFKO0FBS0Esb0ZBQUE7QUFFQSxjQUFBO0FBQ0E7RUFDRSx5QkFBQTtBQUhGO0FBS0E7RUFDRSw2QkFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUhGO0FBTUE7RUFDRSxXQUFBO0FBSEY7QUFNQSxvRkFBQTtBQUVBLGNBQUE7QUFDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBSkY7QUFRQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBTkY7QUFRQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUVBLG9CQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQU5GO0FBVUEsMERBQUE7QUFFQTs7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFSRjtBQVlBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQVRGO0FBYUE7YUFBQTtBQUVBOztFQUVFLGFBQUE7QUFWRjtBQWFBLCtDQUFBO0FBQ0E7RUFDRSxjQUFBO0FBVkY7QUFhQTtnQ0FBQTtBQUVBOztFQUVFLGNBQUE7QUFWRjtBQWFBLHVEQUFBO0FBQ0E7RUFDRSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQVZGO0FBYUE7RUFDRSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUFWRjtBQWFBLCtDQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFWRjtBQWFBO0VBRUUsWUFBQTtBQVhGO0FBY0E7RUFFRSx1QkFBQTtBQVpGO0FBaUJBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFFQTs7OztJQUFBO0VBTUEsb0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FBaEJGO0FBdUJBLHFDQUFBO0FBQ0EscUNBQUE7QUFDQSxxQ0FBQTtBQUVBOztFQUVFLGdCQUFBO0VBQ0EsU0FBQTtBQXJCRjtBQXdCQSxnREFBQTtBQUNBO0VBQ0UsYUFBQTtBQXJCRjtBQXdCQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQXJCRjtBQXdCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBckJGO0FBd0JBO0VBQ0UsYUFBQTtBQXJCRjtBQXdCQTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7QUFyQkY7QUF3QkE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXJCRjtBQXdCQTtFQUNFLFFBQUE7RUFDQSxZQUFBO0FBckJGO0FBd0JBLCtCQUFBO0FBRUE7RUFDRSxXQUFBO0FBdEJGO0FBeUJBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBdEJGO0FBeUJBO0VBRUUsMEJBQUE7RUFDQSxpQkFBQTtBQXZCRjtBQTJCQSx1RUFBQTtBQUNBLHVFQUFBO0FBQ0EsdUVBQUE7QUFDQSx1RUFBQTtBQUNBOztFQUVFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBeEJGO0FBMkJBLDRCQUFBO0FBQ0E7Ozs7RUFJRSxrQkFBQTtBQXhCRjtBQTRCQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FBekJGO0FBNkJBO0VBRUUsY0FBQTtBQTNCRjtBQThCQTtFQUVFLGtCQUFBO0FBNUJGO0FBK0JBO0VBRUUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUE3QkY7QUFpQ0E7RUFFRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUEvQkY7QUFpQ0U7RUFDRSw0QkFBQTtFQUNBLFVBQUE7QUEvQko7QUFrQ0U7RUFDRSxrQkFBQTtBQWhDSjtBQW1DRTtFQUNFLGlCQUFBO0FBakNKO0FBMkNBO0VBRUUsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUExQ0Y7QUE2Q0E7RUFFRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBM0NGO0FBK0NBO0VBRUUsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQTdDRjtBQWlEQTtFQUVFLGVBQUE7RUFDQSx5QkFBQTtBQS9DRjtBQWtEQTtFQUVFLFlBQUE7QUFoREY7QUFzREE7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFwREY7QUF1REE7RUFFRSxnQkFBQTtBQXJERjtBQXdEQTtFQUVFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQXRERjtBQXlEQTtFQUVFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQXZERjtBQTBEQTtFQUVFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUF4REY7QUE0REE7RUFFRSxzQkFBQTtBQTFERjtBQTZEQTtFQUNFLGtCQUFBO0FBMURGO0FBNkRBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUExREY7QUE2REE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUExREY7QUE2REE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTFERjtBQThEQTtFQUVFLHlCQUFBO0FBNURGO0FBK0RBO0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQTdERjtBQWdFQTtFQUNFLGNBQUE7QUE3REY7QUFpRUE7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUEvREY7QUFrRUE7RUFFRSxjQUFBO0FBaEVGO0FBb0VBO0VBQ0UsaUJBQUE7QUFqRUY7QUFvRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWpFRjtBQW9FQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBakVGO0FBb0VBO0VBQ0Usd0JBQUE7QUFqRUY7QUFvRUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtBQWpFRjtBQXFFQTtFQUNFLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQWxFRjtBQXVFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBcEVGO0FBdUVBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtBQXBFRjtBQXVFQTs7OztFQUlFLGNBQUE7QUFwRUY7QUF1RUE7RUFDRTtJQUNFLFlBQUE7RUFwRUY7O0VBdUVBO0lBQ0UsU0FBQTtJQUNBLGVBQUE7RUFwRUY7QUFDRjtBQXVFQTtFQUNFO0lBQ0UsYUFBQTtFQXJFRjtBQUNGO0FBd0VBO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQXRFRjtBQXlFQTtFQUNFLCtCQUFBO0FBdEVGO0FBMEVBO0VBQ0UsdUJBQUE7QUF2RUY7QUEwRUE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBdkVGO0FBMEVBO0VBQ0UsMEJBQUE7QUF2RUY7QUEwRUE7RUFDRSxnQkFBQTtBQXZFRjtBQTBFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUF2RUY7QUEwRUE7RUFDRSwwQkFBQTtBQXZFRjtBQTBFQTtFQUNJLHVCQUFBO0FBdkVKO0FBMEVBO0VBcUNJLGFBQUE7QUEzR0o7QUF1RUk7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBckVKO0FBd0VJO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUF0RUo7QUF5RUk7RUFDQSxnQkFBQTtBQXZFSjtBQTBFSTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUF4RUo7QUEyRUk7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBekVKO0FBOEVJO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQTVFSjtBQThFSTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQTVFSjtBQStFSTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQTdFSjtBQWdGSTtFQUNJLDRDQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBOUVSO0FBZ0ZRO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUE5RVI7QUFpRlE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxNQUFBO0FBL0VSO0FBa0ZRO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWhGUjtBQW1GUTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBakZSIiwiZmlsZSI6Im1kYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maW5pc2gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA0NjIxO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDA7XG5cbiAgYSB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBwYWRkaW5nOiA1cHggMzRweDtcblxuICB9XG59XG5cbi8qIENvZGUgYmFzZWQgb24gdGhpcyBzYW1wbGUgaHR0cDovL3RoZWNvZGVwbGF5ZXIuY29tL3dhbGt0aHJvdWdoL2NzczMtZmFtaWx5LXRyZWUgKi9cblxuLypOb3cgdGhlIENTUyovXG4ucHJpbWFyeS1ib3JkZXJ7XG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG59XG4uY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvLyBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7ICAgICBcbiAgei1pbmRleDogMTA7IFxuICBtaW4td2lkdGg6IDIwMDAwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaDMge1xuICBjb2xvcjogI2ZmZlxufVxuXG4vKiBDb2RlIGJhc2VkIG9uIHRoaXMgc2FtcGxlIGh0dHA6Ly90aGVjb2RlcGxheWVyLmNvbS93YWxrdGhyb3VnaC9jc3MzLWZhbWlseS10cmVlICovXG5cbi8qTm93IHRoZSBDU1MqL1xuLnRyZWUgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuXG4udHJlZSB1bCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnRyZWUgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjBweCA1cHggMHB4IDVweDtcblxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcblxufVxuXG4vKldlIHdpbGwgdXNlIDo6YmVmb3JlIGFuZCA6OmFmdGVyIHRvIGRyYXcgdGhlIGNvbm5lY3RvcnMqL1xuXG4udHJlZSBsaTo6YmVmb3JlLFxuLnRyZWUgbGk6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogNTAlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ZmZjtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG5cbi50cmVlIGxpOjphZnRlciB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiA1MCU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjtcbn1cblxuXG4vKldlIG5lZWQgdG8gcmVtb3ZlIGxlZnQtcmlnaHQgY29ubmVjdG9ycyBmcm9tIGVsZW1lbnRzIHdpdGhvdXQgXG5hbnkgc2libGluZ3MqL1xuLnRyZWUgbGk6b25seS1jaGlsZDo6YWZ0ZXIsXG4udHJlZSBsaTpvbmx5LWNoaWxkOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKlJlbW92ZSBzcGFjZSBmcm9tIHRoZSB0b3Agb2Ygc2luZ2xlIGNoaWxkcmVuKi9cbi50cmVlIGxpOm9ubHktY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLypSZW1vdmUgbGVmdCBjb25uZWN0b3IgZnJvbSBmaXJzdCBjaGlsZCBhbmQgXG5yaWdodCBjb25uZWN0b3IgZnJvbSBsYXN0IGNoaWxkKi9cbi50cmVlIGxpOmZpcnN0LWNoaWxkOjpiZWZvcmUsXG4udHJlZSBsaTpsYXN0LWNoaWxkOjphZnRlciB7XG4gIGJvcmRlcjogMCBub25lO1xufVxuXG4vKkFkZGluZyBiYWNrIHRoZSB2ZXJ0aWNhbCBjb25uZWN0b3IgdG8gdGhlIGxhc3Qgbm9kZXMqL1xuLnRyZWUgbGk6bGFzdC1jaGlsZDo6YmVmb3JlIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggMCAwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgNXB4IDAgMDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwIDVweCAwIDA7XG59XG5cbi50cmVlIGxpOmZpcnN0LWNoaWxkOjphZnRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHggMCAwIDA7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4IDAgMCAwO1xufVxuXG4vKlRpbWUgdG8gYWRkIGRvd253YXJkIGNvbm5lY3RvcnMgZnJvbSBwYXJlbnRzKi9cbi50cmVlIHVsIHVsOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC01cHg7XG4gIGxlZnQ6IDUwJTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmO1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi50cmVlIHVsIHVsLmlnbm9yZTo6YmVmb3JlIHtcblxuICBib3JkZXI6IG5vbmU7XG59XG5cbi50cmVlIHVsIHVsLmlnbm9yZSB7XG5cbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG5cbn1cblxuXG4udHJlZSBsaSBhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgcGFkZGluZzogMWVtIDAuNzVlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzY2Njc2NztcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCB2ZXJkYW5hLCB0YWhvbWE7XG4gIGZvbnQtc2l6ZTogMC44NWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNTBweDtcblxuICAvKlxuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgKi9cblxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cztcblxuXG59XG5cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogTm93IHN0YXJ0cyB0aGUgdmVydGljYWwgZWxlbWVudHMgKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi50cmVlIHVsLnZlcnRpY2FsLFxudWwudmVydGljYWwgdWwge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIFJlbW92ZSB0aGUgZG93bndhcmQgY29ubmVjdG9ycyBmcm9tIHBhcmVudHMgKi9cbi50cmVlIHVsIHVsLnZlcnRpY2FsOjpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udHJlZSB1bC52ZXJ0aWNhbCBsaSB7XG4gIGZsb2F0OiBub25lO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udHJlZSB1bC52ZXJ0aWNhbCBsaTo6YmVmb3JlIHtcbiAgcmlnaHQ6IGF1dG87XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnRyZWUgdWwudmVydGljYWwgbGk6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRyZWUgdWwudmVydGljYWwgbGkgYSB7XG4gIHBhZGRpbmc6IDEwcHggMC43NWVtO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLnRyZWUgdWwudmVydGljYWwgbGk6OmJlZm9yZSB7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ZmZjtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnRyZWUgdWwudmVydGljYWwgbGk6Zmlyc3QtY2hpbGQ6OmJlZm9yZSB7XG4gIHRvcDogMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi8qIExldHMgYWRkIHNvbWUgZXh0cmEgc3R5bGVzICovXG5cbmRpdi50cmVlPnVsPmxpPnVsPmxpPmEge1xuICB3aWR0aDogMTFlbTtcbn1cblxuZGl2LnRyZWU+dWw+bGk+YSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2LnRyZWUgYSBzcGFuIHtcblxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBUaW1lIGZvciBzb21lIGhvdmVyIGVmZmVjdHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbi8qIFdlIHdpbGwgYXBwbHkgdGhlIGhvdmVyIGVmZmVjdCB0aGUgdGhlIGxpbmVhZ2Ugb2YgdGhlIGVsZW1lbnQgYWxzbyAqL1xuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4udHJlZSBsaSBhOmhvdmVyLFxuLnRyZWUgbGkgYTpob3Zlcit1bCBsaSBhIHtcbiAgYmFja2dyb3VuZDogIzYwNDYyMTtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCAjYWFhOyAqL1xufVxuXG4vKkNvbm5lY3RvciBzdHlsZXMgb24gaG92ZXIqL1xuLnRyZWUgbGkgYTpob3Zlcit1bCBsaTo6YWZ0ZXIsXG4udHJlZSBsaSBhOmhvdmVyK3VsIGxpOjpiZWZvcmUsXG4udHJlZSBsaSBhOmhvdmVyK3VsOjpiZWZvcmUsXG4udHJlZSBsaSBhOmhvdmVyK3VsIHVsOjpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICNhYWE7XG59XG5cblxuLnRyZWUgbGkgZGl2Lm9yZy1ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAvKiBwYWRkaW5nOiAxZW0gMC43NWVtOyAqL1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjg1ZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTM1ZTMyICFpbXBvcnRhbnQ7XG5cbn1cblxuLnRyZWUgbGkgZGl2Lm9yZy1ib3g6SE9WRVIgLm9yZy1zZXR0aW5ncyB7XG5cbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5yZWwge1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm9yZy1zZXR0aW5ncyB7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMnB4O1xuXG59XG5cbi5vcmctbWV0cmljcyB7XG5cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcblxuICBbY2xhc3MqPVwiY29sLVwiXSB7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggI2VlZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgW2NsYXNzKj1cImNvbC1cIl06bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG5cbiAgcCB7XG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XG5cbiAgfVxuXG4gIHN1YiB7XG4gICAgLy8gZGlzcGxheTogYmxvY2sgIWltcG9ydGFudFxuICB9XG59XG5cblxuLm9yZy1uYW1lIHtcblxuICB3aWR0aDogNjYlO1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm9yZy1yZXN1bHQge1xuXG4gIHdpZHRoOiAzMyU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5cbi5vcmctcmVzdWx0IHNwYW4ge1xuXG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG59XG5cbi5vcmctbmFtZSBzcGFuLnRpdGxlIHtcblxuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oNTAge1xuXG4gIGhlaWdodDogNTBweDtcbn1cblxuXG4uaW5kaWNhdG9yIHt9XG5cbi5pbmRpY2F0b3IgLmJveCB7XG5cbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pbmRpY2F0b3IgLmJveDo6Zmlyc3QtY2hpbGQge1xuXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5pbmRpY2F0b3IgLmJveCAudG90YWwge1xuXG4gIHdpZHRoOiAzMyU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaW5kaWNhdG9yIC5ib3ggLmNvbnRlbnQge1xuXG4gIHdpZHRoOiA2NiU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5pbmRpY2F0b3IgLmJveCAudG90YWwgc3BhbiB7XG5cbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG5cbn1cblxuLm9yZy1zZXR0aW5ncyAuYnRuLWdyb3VwIGE6aG92ZXIge1xuXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5yZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMjIyO1xuICBvcGFjaXR5OiAwLjU7XG4gIC8qIHotaW5kZXg6IDEwOyAqL1xufVxuXG4ub3ZlcmxheS12aWV3IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnN1Ym1pc3Npb24tYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuXG59XG5cbi5ob3Zlcjpob3ZlciB7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI0JERTZGMjtcbn1cblxuLnBsYW4taW5kaWNhdG9yIHtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjRjBBRDRFO1xuICB6LWluZGV4OiA5OTk5O1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaW5wdXQtZ3JvdXA6aG92ZXIgLnBsYW4taW5kaWNhdG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuLmhvcmktc2Nyb2xsYWJsZS1ib3gge1xuXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLmhvcmktc2Nyb2xsYWJsZS1ib3gtaW5uZXIge1xuXG4gIHdpZHRoOiAxMDAwMHB4O1xuXG59XG5cbi5ob3JpLXNjcm9sbGFibGUtYm94IGRpdi50aHVtYm5haWw6bm90KGxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbm1haW4ge1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICBwYWRkaW5nOiA1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxucyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmc6IDIwcHggMCAwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbn1cblxuaW5wdXQge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmxhYmVsIHtcbiAgZm9udC1zaXplOiAuOGVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCAwIC0xcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYmJiO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cblxubGFiZWw6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IGZvbnRhd2Vzb21lO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cblxuXG5sYWJlbDpob3ZlciB7XG4gIGNvbG9yOiAjODg4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmlucHV0OmNoZWNrZWQrbGFiZWwge1xuICBjb2xvcjogIzU1NTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xufVxuXG4jdGFiMTpjaGVja2VkfiNjb250ZW50MSxcbiN0YWIyOmNoZWNrZWR+I2NvbnRlbnQyLFxuI3RhYjM6Y2hlY2tlZH4jY29udGVudDMsXG4jdGFiNDpjaGVja2VkfiNjb250ZW50NCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xuICBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAwO1xuICB9XG5cbiAgbGFiZWw6YmVmb3JlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIGxhYmVsIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm9yZy1zZXR0aW5ncyAuYnRuIHtcbiAgcGFkZGluZzogLjVyZW0gMXJlbSAhaW1wb3J0YW50O1xuXG59XG5cbi5wYWRkaW5nLTUge1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbn1cblxuLnNwYWNlNSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50ZXh0LWV4dHJhLWxhcmdlIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4ge1xuICBmb250LXNpemU6IC43ZW07XG59XG5cbi5zcGlubmVyLXRocmVlLWJvdW5jZVtfbmdjb250ZW50LWMzXSB7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbnNwYW4ubGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ubGlzdC1ncm91cC1pdGVte1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4jdGltZWxpbmUtY29udGVudHtcbiAgICBhIHsgXG4gICAgY29sb3I6ICM2YzZkNmQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4zZW07XG4gICAgZm9udC1zaXplOiAuNmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgYmFja2dyb3VuZDogIzI1MjcyNztcbiAgICBwYWRkaW5nOiAuM3JlbSAxcmVtO1xuICAgIG1hcmdpbjogMS45cmVtIDAgMCAwO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB9XG5cbiAgICBhOmhvdmVyIHsgXG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZDogI2EzNWUzMjtcbiAgICBib3JkZXItYm90dG9tOiAuMzVlbSBzb2xpZCBibGFjaztcbiAgICB9XG5cbiAgICBzdHJvbmcge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgaDEge1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjVweDtcbiAgICBjb2xvcjogI2ZmZmZmZjsgIFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAyLjRlbTtcbiAgICB9XG5cbiAgICAjdGltZWxpbmUtY29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICBcbiAgICB9XG5cbiAgICAvKiBUaW1lbGluZSAqL1xuXG4gICAgLnRpbWVsaW5lIHtcbiAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNhMzVlMzI7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4OyAgICBcbiAgICBiYWNrZ3JvdW5kOiBmYWRlKCNmZmZmZmYsIDMlKTtcbiAgICBjb2xvcjogZmFkZSh3aGl0ZSwgODAlKTtcbiAgICBtYXJnaW46IDUwcHggYXV0bzsgIFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDsgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgIGZvbnQtc2l6ZTogMS4wM2VtOyAgIFxuICAgIHBhZGRpbmc6IDUwcHg7ICAgXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyAgXG4gICAgZm9udC13ZWlnaHQ6IDEwMDsgIFxuICAgIG1heC13aWR0aDogNjAlOyBcbiAgICBcbiAgICBoMSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAxLjRlbTsgICAgXG4gICAgfVxuICAgIFxuICAgIGgyLCBoMyB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICB9XG4gICAgXG4gICAgLmV2ZW50IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBmYWRlKCNmZmZmZmYsIDEwJSk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAoNTBweCAqIDAuNSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7ICBcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICY6bGFzdC1vZi10eXBlIHsgXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyBcbiAgICAgICAgYm9yZGVyOiBub25lOyAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgJjpiZWZvcmUsICY6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6ICgoKDEyMHB4ICogMC42KSArIDUwcHggKyA1cHggKyAxMXB4ICsgKDRweCAqIDIpKSAqIDEuNSkgKiAtMTsgICAgXG4gICAgICAgIGNvbG9yOiBmYWRlKCNmZmZmZmYsIDQwJSk7ICAgIFxuICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtZGF0ZSk7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXdlaWdodDogMTAwOyAgICBcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCA0cHggI2EzNWUzMjsgICAgXG4gICAgICAgIGxlZnQ6ICg1MHB4ICsgNXB4ICsgKDExcHggKiAwLjM1KSkgKiAtMTsgICAgICAgIFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCMyNTI4MjcsNSUpOyAgICBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyAgXG4gICAgICAgIGhlaWdodDogMTFweDtcbiAgICAgICAgd2lkdGg6IDExcHg7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "cQWv":
/*!********************************************************!*\
  !*** ./src/app/all-outcomes/all-outcomes.component.ts ***!
  \********************************************************/
/*! exports provided: AllOutcomesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOutcomesComponent", function() { return AllOutcomesComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _states_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states.json */ "vumz");
var _states_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./states.json */ "vumz", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/data.service */ "AwSQ");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/crud.service */ "+JMX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "S8xs");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _suffixes_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../suffixes.pipe */ "WHRT");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-moment */ "QUrN");















function AllOutcomesComponent_div_0_div_5_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AllOutcomesComponent_div_0_div_5_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Km");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AllOutcomesComponent_div_0_div_5_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AllOutcomesComponent_div_0_div_5_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Km");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AllOutcomesComponent_div_0_div_5_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AllOutcomesComponent_div_0_div_5_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Km");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = function (a0) { return { "color": a0 }; };
function AllOutcomesComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AllOutcomesComponent_div_0_div_5_span_13_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AllOutcomesComponent_div_0_div_5_span_16_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AllOutcomesComponent_div_0_div_5_span_18_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, AllOutcomesComponent_div_0_div_5_span_21_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, AllOutcomesComponent_div_0_div_5_span_23_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AllOutcomesComponent_div_0_div_5_span_26_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r5.indicator);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", "gauge" + i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", "gauge-container" + i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c0, ctx_r4.setColor(item_r5)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 14, item_r5.baseline));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](22, _c1, ctx_r4.setColor(item_r5)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 16, item_r5.actual));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 18, item_r5.target));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r6 == 2);
} }
function AllOutcomesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Annual production of staple foods (metric tons)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AllOutcomesComponent_div_0_div_5_Template, 27, 24, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.indicator);
} }
function AllOutcomesComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "21");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "small", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Abandoned projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AllOutcomesComponent_li_33_accordion_group_1_ul_53_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllOutcomesComponent_li_33_accordion_group_1_ul_53_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const item_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r25.filterByMda(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r24.name);
} }
function AllOutcomesComponent_li_33_accordion_group_1_ul_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AllOutcomesComponent_li_33_accordion_group_1_ul_53_li_1_Template, 3, 1, "li", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r18.mdas);
} }
function AllOutcomesComponent_li_33_accordion_group_1_ul_58_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllOutcomesComponent_li_33_accordion_group_1_ul_58_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const item_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r29.filterByState(item_r28.state); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r28.state.name);
} }
function AllOutcomesComponent_li_33_accordion_group_1_ul_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AllOutcomesComponent_li_33_accordion_group_1_ul_58_li_1_Template, 3, 1, "li", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r19.states);
} }
function AllOutcomesComponent_li_33_accordion_group_1_p_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No projects available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AllOutcomesComponent_li_33_accordion_group_1_table_64_tr_20_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AllOutcomesComponent_li_33_accordion_group_1_table_64_tr_20_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c2 = function (a0, a1, a2) { return { "on": a0, "ab": a1, "cp": a2 }; };
function AllOutcomesComponent_li_33_accordion_group_1_table_64_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AllOutcomesComponent_li_33_accordion_group_1_table_64_tr_20_span_4_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AllOutcomesComponent_li_33_accordion_group_1_table_64_tr_20_span_5_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "amFromUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "small", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "em", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllOutcomesComponent_li_33_accordion_group_1_table_64_tr_20_Template_em_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const item_r32 = ctx.$implicit; const ind_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r36.openProjectReports(item_r32, ind_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    const i_r33 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](1 + i_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r32.flag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r32.warning);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r32.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20A6", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 10, item_r32.budget), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r32.mda.shortcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r32.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 15, item_r32.start_date), "YYYY-MM-DD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](17, _c2, item_r32.status == "Ongoing", item_r32.status == "Abandoned", item_r32.status == "Completed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r32.status, "");
} }
const _c3 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
function AllOutcomesComponent_li_33_accordion_group_1_table_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "MDA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, AllOutcomesComponent_li_33_accordion_group_1_table_64_tr_20_Template, 26, 21, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ind_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](21, 1, ind_r13.projects, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](4, _c3, ctx_r21.pageSize, ctx_r21.p)));
} }
function AllOutcomesComponent_li_33_accordion_group_1_pagination_controls_65_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "pagination-controls", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function AllOutcomesComponent_li_33_accordion_group_1_pagination_controls_65_Template_pagination_controls_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r40.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c4 = function (a0) { return { "margin-left": a0 }; };
function AllOutcomesComponent_li_33_accordion_group_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "accordion-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "small", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "small", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "small", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Tap to view contributing projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Contributing Projects / Policies / Programmes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "-Behind Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " \u00A0 \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "-At risk of results delivery ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "input", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, AllOutcomesComponent_li_33_accordion_group_1_ul_53_Template, 2, 1, "ul", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, AllOutcomesComponent_li_33_accordion_group_1_ul_58_Template, 2, 1, "ul", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AllOutcomesComponent_li_33_accordion_group_1_Template_a_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44); const ind_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r42.clearFilters(ind_r13.projects); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Clear filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, AllOutcomesComponent_li_33_accordion_group_1_p_63_Template, 2, 0, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, AllOutcomesComponent_li_33_accordion_group_1_table_64_Template, 22, 7, "table", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, AllOutcomesComponent_li_33_accordion_group_1_pagination_controls_65_Template, 1, 0, "pagination-controls", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const man_r15 = ctx.$implicit;
    const ind_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ind_r13.mda.shortcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](man_r15.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ind_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 13, ind_r13.actual));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](19, _c4, ctx_r14.getPercentage(ind_r13.actual, ind_r13.baseline, ind_r13.target, ind_r13.aggregation) - 4 + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 15, ind_r13.baseline), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 17, ctx_r14.prepareTarget(ind_r13.target, 0).target), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx_r14.searchControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Filter by MDAs : ", ctx_r14.mdaFilter, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Filter by State: ", ctx_r14.stateFilter, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ind_r13.projects.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ind_r13.projects.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ind_r13.projects.length > 0);
} }
function AllOutcomesComponent_li_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AllOutcomesComponent_li_33_accordion_group_1_Template, 66, 21, "accordion-group", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ind_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ind_r13.mandates);
} }
function AllOutcomesComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "List of Projects ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "li", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "1.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Achieve Agriculture and Food Security ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Ongoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Level of Completion: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "56%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "li", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "1.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Achieve Agriculture and Food Security ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Ongoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Level of Completion: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "56%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "li", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "1.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " Achieve Agriculture and Food Security ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "span", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " Status: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Ongoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Level of Completion: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "56%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AllOutcomesComponent {
    constructor(data, crud, router) {
        this.data = data;
        this.crud = crud;
        this.router = router;
        this.states = _states_json__WEBPACK_IMPORTED_MODULE_2__;
        this.userFilter = { name: '' };
        this.budgetPriority = false;
        this.pageSize = 10;
        this.oneAtATime = true;
        this.counts = { low: 0, mid: 0, high: 0 };
        this.indicator = [
            {
                priority: 'Vol. of Cargo transported through Inland Waterways',
                indicator: 'Number of Trained Agriculture Extension Workers deployed (#)',
                baseline: 4,
                actual: 6,
                target: 20
            },
            {
                priority: 'Real Economic Growth Rate (%)',
                indicator: 'Additional Annual Revenue from APZ (US$)',
                baseline: 0,
                actual: 500,
                target: 5000
            },
            {
                priority: 'Consumer Price Index (Food Items) (%)',
                indicator: 'Length of Rural Roads constructed (Km) Additional produce reaching key distribution markets (MT)',
                baseline: 80,
                actual: 90,
                target: 120
            },
            {
                priority: 'Total No. of Jobs Created',
                indicator: 'Improve Transportation and Other Infrastructure',
                baseline: -3,
                actual: 2,
                target: 7
            },
        ];
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        if (history.state.log) {
            this.outComeData = JSON.parse(history.state.log);
        }
        else {
            this.router.navigate(['/dashboard/priority']);
        }
    }
    ngOnInit() {
        // this.setFilteredItems("");
        this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(100))
            .subscribe(search => {
            // this.search(search);
            this.setFilteredItems(search, this.currentProject);
        });
        this.filterOutcome();
    }
    // openProjectReports(item) {
    // }
    // ngAfterViewInit() {
    //     this.initializeGuage(this.indicator)
    // }
    prepareTarget(data, index) {
        if (data == null)
            return [];
        if (typeof data === 'number') {
            return { target: data };
        }
        let tar = JSON.parse(data);
        return tar[index];
    }
    initializeGuage(data) {
        const currentGuage = document.getElementsByClassName('gauge');
        for (let i = 0; i < data.length; i++) {
            const gauge = this.Gauge(currentGuage[i]);
            const target = this.prepareTarget(data[i].target, 0).target;
            const percent = (this.crud.calculatePercantage(data[i].actual, data[i].baseline, target, data[i].aggregation)) / 100;
            gauge.value(percent);
        }
    }
    filterOutcome() {
        //console.log(this.outComeData.outputs);
        this.outComeData.outputs.forEach(element => {
            let percent = this.crud.calculatePercantage(element.actual, element.baseline, element.target, element.aggregation);
            //console.log(percent);
            if (percent <= 33.3) {
                this.counts.low += 1;
            }
            if (percent > 33.3 && percent <= 66.6) {
                this.counts.mid += 1;
            }
            if (percent > 66.6) {
                this.counts.high += 1;
            }
        });
    }
    Gauge(el) {
        // ##### Private Properties and Attributes
        var element, // Containing element for the info component
        data, // `.gauge--data` element
        needle, // `.gauge--needle` element
        value = 0.0, // Current gauge value from 0 to 1
        prop; // Style for transform
        // ##### Private Methods and Functions
        var setElement = function (el) {
            // Keep a reference to the various elements and sub-elements
            element = el;
            data = element.querySelector(".gauge--data");
            needle = element.querySelector(".gauge--needle");
        };
        var setValue = function (x) {
            value = x;
            var turns = -0.5 + (x * 0.5);
            data.style[prop] = "rotate(" + turns + "turn)";
            needle.style[prop] = "rotate(" + turns + "turn)";
        };
        // ##### Object to be Returned
        var exports = {
            element: function (el) {
                if (!arguments.length) {
                    return element;
                }
                setElement(el);
                return this;
            },
            value: function (x) {
                if (!arguments.length) {
                    return value;
                }
                setValue(x);
                return this;
            }
        };
        // ##### Public API Methods
        // ##### Initialization
        var body = document.getElementsByTagName("body")[0];
        ["webkitTransform", "mozTransform", "msTransform", "oTransform", "transform"].
            forEach(function (p) {
            if (typeof body.style[p] !== "undefined") {
                prop = p;
            }
        });
        if (arguments.length) {
            setElement(el);
        }
        return exports;
    }
    getPercentage(actual, baseline, target, aggr) {
        const percentage = this.crud.calculatePercantage(actual, baseline, this.prepareTarget(target, 0).target, aggr);
        return percentage;
    }
    setColor(data) {
        this.initializeGuage(this.indicator);
        const target = this.prepareTarget(data.target, 0).target;
        const r = (this.crud.calculatePercantage(parseFloat(data.actual), parseFloat(data.baseline), parseFloat(target), data.aggregation));
        // console.log(r);
        if (r <= 33.3) {
            return 'red';
        }
        if (r > 33.3 && r <= 66.6) {
            return '#ffbf00';
        }
        if (r > 66.6) {
            return 'green';
        }
    }
    calcPercentage(a, b) {
        let percent = a / b * 100;
        if (percent > 100)
            percent = 100;
        if (percent < 0)
            percent = 0;
        return percent + '%';
    }
    gotoOutput(item) {
        //console.log(item);
        let itemObj = {
            indicator: this.outComeData,
            output: item
        };
        this.router.navigate(['/dashboard/output'], {
            state: {
                log: JSON.stringify(itemObj)
            }
        });
    }
    filterByState(state) {
        this.stateFilter = state.name;
        if (state == '')
            this.assignCopy(this.currentProject);
        this.filteredItems = this.filteredItems.filter(item => {
            return item.state == state.name;
            // //console.log(item.state, state.name);
        });
    }
    filterByMda(mda) {
        this.mdaFilter = mda.shortcode;
        if (mda == '')
            this.assignCopy(this.currentProject);
        this.filteredItems = this.filteredItems.filter(item => {
            return item.mda.id == mda.id;
            // //console.log(item.state, state.name);
        });
    }
    assignCopy(project) {
        this.currentProject = project;
        this.filteredItems = this.currentProject;
    }
    setFilteredItems(search, projects) {
        //console.log(search);
        if (search == '')
            this.assignCopy(projects);
        this.filteredItems = this.filteredItems.filter(item => {
            let name = item.title.toLowerCase();
            return name.indexOf(search.toLowerCase()) > -1;
        });
    }
    clearFilters(projects) {
        this.assignCopy(projects);
        this.searchControl.setValue('');
        this.stateFilter = '';
        this.mdaFilter = '';
    }
    openProjectReports(item, ind) {
        this.router.navigate(['/dashboard/project-details'], {
            state: {
                log: JSON.stringify(item),
                output: JSON.stringify(ind)
            }
        });
    }
}
AllOutcomesComponent.ɵfac = function AllOutcomesComponent_Factory(t) { return new (t || AllOutcomesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
AllOutcomesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AllOutcomesComponent, selectors: [["app-all-outcomes"]], decls: 35, vars: 10, consts: [["class", "container-fluid my-5 px-3", 4, "ngIf"], [1, "container-fluid", "px-4", "my-5"], [1, "mb-0"], [1, "p-4", "primary-border"], [1, "d-flex", "pt-4", "text-center", "flex-wrap"], [1, "col-md-4", "px-5", "mb-3"], [1, "p-2", "py-4", "secondary-card", "on-track"], ["title", "Stabilize the Macro Economic Environment", 1, "chart-small-label"], [1, "p-2", "py-4", "secondary-card", "in-progress"], [1, "p-2", "py-4", "secondary-card", "not-on-track"], ["class", "col-md-3 px-2 mb-3", 4, "ngIf"], [1, "container-fluid", "my-5"], [3, "closeOthers"], [1, "list-group"], ["class", "list-group-item cursor px-0", 4, "ngFor", "ngForOf"], ["class", "container-fluid", 4, "ngIf"], [1, "container-fluid", "my-5", "px-3"], [1, "d-flex", "justify-content-between"], [1, "mb-4"], [1, "d-flex", "horizontal-scroll"], ["class", "col-md-4 px-2", 4, "ngFor", "ngForOf"], [1, "col-md-4", "px-2"], [1, "primary-border", "text-center", "p-3"], ["title", "Improve Transportation and Other Infrastructure", 1, "chart-small-label"], [1, "gauge", "gauge__liveupdate", "mt-3"], [1, "gauge--container"], [1, "gauge--marker"], [1, "gauge--background"], [1, "gauge--center"], [1, "gauge--data", 3, "ngStyle"], [1, "gauge--needle"], [1, "gauge--labels", "mdl-typography--headline"], [1, "gauge--label__low"], [4, "ngIf"], [1, "gauge--label__spacer", 2, "text-align", "center", "font-size", "1.5rem", 3, "ngStyle"], [1, "gauge--label__high"], [1, "col-md-3", "px-2", "mb-3"], [1, "p-2", "secondary-card"], [1, "list-group-item", "cursor", "px-0"], [4, "ngFor", "ngForOf"], ["accordion-heading", "", 1, ""], [1, "row", "align-items-center"], [1, "col-md-6"], [1, "badge", "badge-success", 2, "font-size", "10px"], [1, "mb-1"], [1, ""], [1, "col-md-4"], [1, "linearguageWrapper", "mb-4", "py-3"], [1, "traffic"], [1, "tick", 3, "ngStyle", "tooltip"], [1, "base"], [1, "target"], [1, "text-center", "m-0"], [2, "left", "50%", "font-size", "12px", "color", "#18a972", "font-weight", "normal", "cursor", "pointer"], ["width", "10", "src", "assets/icons/information.svg", "alt", ""], [1, "projects"], [1, "container-header", "px-4", "pt-4", "pb-3"], [1, "row"], [1, "col-md-5"], [1, "mb-0", "label"], [1, "text-left"], [1, "mr-2"], ["width", "20", "src", "assets/icons/flag.svg"], ["width", "20", "src", "assets/icons/red-warning.svg"], [1, "col-md-7"], ["type", "text", "name", "search", "placeholder", "Search...", 1, "form-control", "search-input", 3, "formControl"], ["search", ""], ["dropdown", "", 1, "btn-group", "mr-3"], ["id", "button-basic", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-basic", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-basic", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-basic", 4, "dropdownMenu"], ["dropdown", "", 1, "btn-group"], [1, "ml-3", "green"], ["href", "javascript:void(0)", 3, "click"], [1, "table-responsive", "p-4"], ["class", "gray text-center ", 4, "ngIf"], ["class", "table table-bordered mt-3", "id", "projectTabel", "style", "width:100%", 4, "ngIf"], [3, "pageChange", 4, "ngIf"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-basic", 1, "dropdown-menu"], ["role", "menuitem", 4, "ngFor", "ngForOf"], ["role", "menuitem"], [1, "dropdown-item", 3, "click"], [1, "gray", "text-center"], ["id", "projectTabel", 1, "table", "table-bordered", "mt-3", 2, "width", "100%"], ["colspan", "2"], [1, "status", 2, "margin-top", "2px", "margin-right", "2px", "vertical-align", "middle", 3, "ngClass"], [1, "d-inline-block", 2, "vertical-align", "middle"], [1, "cursor", 3, "click"], ["src", "assets/icons/flag.svg", 1, "mr-2"], ["src", "assets/icons/red-warning.svg", 1, "mr-2"], [3, "pageChange"], [1, "container-fluid"], [1, "primary-border", "p-4"], [1, "container"], [1, "form-group", "has-search"], [1, "fa", "fa-search", "form-control-feedback"], ["type", "text", "placeholder", "Search", 1, "form-control"], [1, "col-12"], [1, "list-group", "text-center", "mb-3"], [1, "list-group-item", "py-4", "d-flex", "justify-content-between"], [1, "list-group-item", "py-3", "text-left", "mb-0", "pr-5"], [1, "mr-3"], [1, "ml-4"], [1, "badge", "badge-warning"], [1, "ml-3"]], template: function AllOutcomesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AllOutcomesComponent_div_0_Template, 6, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " On Track");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " In Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "small", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Not On Track");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AllOutcomesComponent_div_29_Template, 7, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "accordion", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AllOutcomesComponent_li_33_Template, 2, 1, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AllOutcomesComponent_div_34_Template, 56, 0, "div", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.budgetPriority);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.outComeData.driver);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.outComeData.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.counts.high);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.counts.mid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.counts.low);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.budgetPriority);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("closeOthers", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.outComeData.outputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.budgetPriority);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_8__["AccordionPanelComponent"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_9__["TooltipDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_10__["BsDropdownMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationControlsComponent"]], pipes: [_suffixes_pipe__WEBPACK_IMPORTED_MODULE_12__["SuffixesPipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"], ngx_moment__WEBPACK_IMPORTED_MODULE_13__["DateFormatPipe"], ngx_moment__WEBPACK_IMPORTED_MODULE_13__["FromUtcPipe"]], styles: [".card[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n}\n\n\n\n\n\n.has-search[_ngcontent-%COMP%] {\n  width: 350px;\n  margin: 0 auto;\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  padding-left: 2.375rem;\n  background-color: var(--secondary-card-bkg);\n  border: none;\n  box-shadow: none;\n}\n\n.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 2.375rem;\n  height: 2.375rem;\n  line-height: 2.375rem;\n  text-align: center;\n  pointer-events: none;\n  color: #aaa;\n}\n\n.on-track[_ngcontent-%COMP%] {\n  border: 1px solid #06AA49;\n  border-top-width: 5px;\n}\n\n.in-progress[_ngcontent-%COMP%] {\n  border: 1px solid #FEA041;\n  border-top-width: 5px;\n}\n\n.not-on-track[_ngcontent-%COMP%] {\n  border: 1px solid #FF0202;\n  border-top-width: 5px;\n}\n\n.primary-border[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  border-radius: 5px;\n}\n\n.tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n.tabs[_ngcontent-%COMP%]   .tab-color[_ngcontent-%COMP%] {\n  background: #A06220;\n  color: #c6c0b3;\n  border-radius: 2px;\n}\n\n.aggregation[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.mandate-label[_ngcontent-%COMP%] {\n  height: 16px;\n  overflow: hidden;\n}\n\n.projectmore[_ngcontent-%COMP%], .policymore[_ngcontent-%COMP%], .fundmore[_ngcontent-%COMP%] {\n  height: 140px;\n  transition: 0.3s all ease-in-out;\n  overflow: hidden;\n}\n\n.mdamore[_ngcontent-%COMP%] {\n  transition: 0.3s ease-in-out;\n  overflow: hidden;\n}\n\n@media (min-width: 768px) {\n  .horizontal-scroll[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\n    flex: 0 0 32.333333%;\n    max-width: 32.333333%;\n  }\n}\n\n.linearguageWrapper[_ngcontent-%COMP%]   .tick[_ngcontent-%COMP%] {\n  display: block;\n  transform: translateY(0px);\n}\n\nsmall.chart-small-label[_ngcontent-%COMP%] {\n  font-size: smaller;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: var(--secondary-card-bkg);\n  color: var(--font-color);\n  border: none;\n  border-radius: 0px;\n}\n\n.btn-outline-success[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.btn-outline-success[_ngcontent-%COMP%]:hover {\n  background-color: #28a745;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n}\n\n.status[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  background-color: gray;\n  border-radius: 100%;\n}\n\n.type[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: gray;\n  color: white;\n  padding: 0px 10px;\n  font-size: 12px;\n  border-radius: 15px;\n}\n\n.on[_ngcontent-%COMP%] {\n  background-color: #007bff;\n}\n\n.ab[_ngcontent-%COMP%] {\n  background-color: #dc3545;\n}\n\n.cp[_ngcontent-%COMP%] {\n  background-color: #18a972;\n}\n\n.label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.dropdown-toggle.btn-primary[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  background-color: #28a745;\n  border: solid 1px #28a745;\n  box-shadow: none;\n}\n\n.btn-primary.dropdown-toggle[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  background-color: #28a745;\n  border: solid 1px #28a745;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:active {\n  background-color: #ddd;\n}\n\n.green[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FsbC1vdXRjb21lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdBLHVDQUFBOztBQUVBLDRDQUFBOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQUZGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQUhGOztBQU9FO0VBQ0Usa0JBQUE7QUFKSjs7QUFRQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFPRTtFQUNFLGtCQUFBO0FBTEo7O0FBUUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVdFO0VBQ0UsZ0JBQUE7QUFSSjs7QUFZQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBOzs7RUFHRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtBQVRGOztBQVlBO0VBRUk7SUFDRSxvQkFBQTtJQUNBLHFCQUFBO0VBVko7QUFDRjs7QUFjQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtBQVpGOztBQWVBO0VBQ0Usa0JBQUE7QUFaRjs7QUFlQTtFQUNFLDJDQUFBO0VBQ0Esd0JBQUE7RUFJQSxZQUFBO0VBQ0Esa0JBQUE7QUFmRjs7QUFrQkE7RUFDRSx1QkFBQTtBQWZGOztBQWtCQTtFQUNFLHlCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBZkY7O0FBa0JBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFmRjs7QUFrQkE7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBZkY7O0FBa0JBO0VBQ0UseUJBQUE7QUFmRjs7QUFtQkE7RUFDRSx5QkFBQTtBQWhCRjs7QUFvQkE7RUFDRSx5QkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxrQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFqQkY7O0FBb0JBO0VBQ0Usc0JBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsY0FBQTtBQWpCRiIsImZpbGUiOiJhbGwtb3V0Y29tZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5cblxuLyogU3R5bGVzIGZvciB3cmFwcGluZyB0aGUgc2VhcmNoIGJveCAqL1xuXG4vKiBCb290c3RyYXAgNCB0ZXh0IGlucHV0IHdpdGggc2VhcmNoIGljb24gKi9cbi5oYXMtc2VhcmNoIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgcGFkZGluZy1sZWZ0OiAyLjM3NXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNhcmQtYmtnKTtcbiAgYm9yZGVyOiBub25lO1xuXG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMi4zNzVyZW07XG4gIGhlaWdodDogMi4zNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAyLjM3NXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY29sb3I6ICNhYWE7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jYXJkLWJrZyk7XG59XG5cbi5vbi10cmFjayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwNkFBNDk7XG4gIGJvcmRlci10b3Atd2lkdGg6IDVweDtcbn1cblxuLmluLXByb2dyZXNzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZFQTA0MTtcbiAgYm9yZGVyLXRvcC13aWR0aDogNXB4O1xufVxuXG4ubm90LW9uLXRyYWNrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGMDIwMjtcbiAgYm9yZGVyLXRvcC13aWR0aDogNXB4O1xufVxuXG4ucHJpbWFyeS1ib3JkZXIge1xuICBoNiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG5cbi50YWJzIHtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gIHNwYW46bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG5cbiAgLnRhYi1jb2xvciB7XG4gICAgYmFja2dyb3VuZDogI0EwNjIyMDtcbiAgICBjb2xvcjogI2M2YzBiMztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cbn1cblxuLmFnZ3JlZ2F0aW9uIHtcbiAgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuLm1hbmRhdGUtbGFiZWwge1xuICBoZWlnaHQ6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9qZWN0bW9yZSxcbi5wb2xpY3ltb3JlLFxuLmZ1bmRtb3JlIHtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1kYW1vcmUge1xuICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaG9yaXpvbnRhbC1zY3JvbGwge1xuICAgIC5jb2wtbWQtNCB7XG4gICAgICBmbGV4OiAwIDAgMzIuMzMzMzMzJTtcbiAgICAgIG1heC13aWR0aDogMzIuMzMzMzMzJTtcbiAgICB9XG4gIH1cbn1cblxuLmxpbmVhcmd1YWdlV3JhcHBlciAudGlja3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xufVxuXG5zbWFsbC5jaGFydC1zbWFsbC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jYXJkLWJrZyk7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI0EwNjIyMDtcbiAgLy8gYm9yZGVyLXRvcDogMXB4IHNvbGlkICNBMDYyMjAgIWltcG9ydGFudDtcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBMDYyMjAgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5idG4tb3V0bGluZS1zdWNjZXNzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdGF0dXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi50eXBlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbi5vbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG5cbn1cblxuLmFiIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcblxufVxuXG4uY3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThhOTcyO1xufVxuXG4ubGFiZWwgaDMge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5kcm9wZG93bi10b2dnbGUuYnRuLXByaW1hcnkge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gIGJvcmRlcjogc29saWQgMXB4ICMyOGE3NDU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5idG4tcHJpbWFyeS5kcm9wZG93bi10b2dnbGU6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gIGJvcmRlcjogc29saWQgMXB4ICMyOGE3NDU7XG59XG5cbi5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5ncmVlbiBhIHtcbiAgY29sb3I6ICMyOGE3NDU7XG59XG5cbi5zaG93IHt9XG4iXX0= */"] });


/***/ }),

/***/ "lr2i":
/*!************************************************************!*\
  !*** ./src/app/dashboard-home/dashboard-home.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHomeComponent", function() { return DashboardHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/crud.service */ "+JMX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_home1_dashboard_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard-home1/dashboard-home.component */ "Um58");




class DashboardHomeComponent {
    constructor(crud, router) {
        this.crud = crud;
        this.router = router;
        this.preffered = [];
        this.tab = "revenue";
        this.pmore = false;
        this.mdamore = false;
        this.projectmore = false;
        this.policymore = false;
        this.fundmore = false;
        this.activeChart = 'output';
        this.budgetPriority = false;
        this.priorities = JSON.parse(localStorage.getItem('preffered'));
        // this.getPriorities();
    }
    finPoliciesByMdas(arg0) {
        throw new Error("Method not implemented.");
    }
    ngOnInit() {
        // let pref = JSON.parse(localStorage.getItem('preffered'))
        // if (pref != undefined) this.preffered = pref
    }
    changeActive(text) {
        this.activeChart = text;
    }
}
DashboardHomeComponent.ɵfac = function DashboardHomeComponent_Factory(t) { return new (t || DashboardHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_1__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DashboardHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardHomeComponent, selectors: [["app-dashboard-home"]], decls: 1, vars: 0, template: function DashboardHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-dashboard-outcome-home");
    } }, directives: [_dashboard_home1_dashboard_home_component__WEBPACK_IMPORTED_MODULE_3__["DashboardHomeOutcomeComponent"]], styles: [".primary-border[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  border-radius: 5px;\n}\n\n.tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n.tabs[_ngcontent-%COMP%]   .tab-color[_ngcontent-%COMP%] {\n  background: #A06220;\n  color: #c6c0b3;\n  border-radius: 2px;\n}\n\n.aggregation[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.mandate-label[_ngcontent-%COMP%] {\n  height: 16px;\n  overflow: hidden;\n}\n\n.projectmore[_ngcontent-%COMP%], .policymore[_ngcontent-%COMP%], .fundmore[_ngcontent-%COMP%] {\n  height: 140px;\n  transition: 0.3s all ease-in-out;\n  overflow: hidden;\n}\n\n.mdamore[_ngcontent-%COMP%] {\n  transition: 0.3s ease-in-out;\n  overflow: hidden;\n}\n\n@media (min-width: 768px) {\n  .horizontal-scroll[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\n    flex: 0 0 32.333333%;\n    max-width: 32.333333%;\n  }\n}\n\nsmall.chart-small-label[_ngcontent-%COMP%] {\n  font-size: smaller;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: var(--secondary-card-bkg);\n  color: var(--font-color);\n  border-top: 1px solid #A06220 !important;\n  border-bottom: 1px solid #A06220 !important;\n  border-left: hidden;\n  border-right: hidden;\n  border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHRTtFQUNFLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZKOztBQU9FO0VBQ0UsZ0JBQUE7QUFKSjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTtFQUVJO0lBQ0ksb0JBQUE7SUFDQSxxQkFBQTtFQU5OO0FBQ0Y7O0FBVUE7RUFDRSxrQkFBQTtBQVJGOztBQVdBO0VBQ0UsMkNBQUE7RUFDQSx3QkFBQTtFQUVBLHdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFURiIsImZpbGUiOiJkYXNoYm9hcmQtaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmltYXJ5LWJvcmRlciB7XG4gIGg2IHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn1cblxuLnRhYnMge1xuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgc3BhbjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cblxuICAudGFiLWNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kOiAjQTA2MjIwO1xuICAgIGNvbG9yOiAjYzZjMGIzO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgfVxufVxuXG4uYWdncmVnYXRpb24ge1xuICBoMSB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufVxuXG4ubWFuZGF0ZS1sYWJlbCB7XG4gIGhlaWdodDogMTZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnByb2plY3Rtb3JlLCAucG9saWN5bW9yZSwgLmZ1bmRtb3Jle1xuICBoZWlnaHQ6IDE0MHB4O1xuICB0cmFuc2l0aW9uOi4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tZGFtb3Jle1xuICB0cmFuc2l0aW9uOi4zcyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgLmhvcml6b250YWwtc2Nyb2xse1xuICAgIC5jb2wtbWQtNCB7XG4gICAgICAgIGZsZXg6IDAgMCAzMi4zMzMzMzMlO1xuICAgICAgICBtYXgtd2lkdGg6IDMyLjMzMzMzMyU7XG4gICAgfVxuICB9XG59XG5cbnNtYWxsLmNoYXJ0LXNtYWxsLWxhYmVse1xuICBmb250LXNpemU6IHNtYWxsZXI7XG59XG5cbi5saXN0LWdyb3VwLWl0ZW17XG4gIGJhY2tncm91bmQtY29sb3I6dmFyKC0tc2Vjb25kYXJ5LWNhcmQtYmtnKTtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjQTA2MjIwO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI0EwNjIyMCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0EwNjIyMCAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogaGlkZGVuO1xuICBib3JkZXItcmlnaHQ6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4ubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxke1xuICAvLyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNjI1cmVtO1xuICAvLyBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjYyNXJlbTtcbiAgLy8gYm9yZGVyLXRvcDogaGlkZGVuO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGR7XG4gIC8vIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC42MjVyZW07XG4gIC8vIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNjI1cmVtO1xuICAvLyBib3JkZXItYm90dG9tOiBub25lO1xufSJdfQ== */"] });


/***/ }),

/***/ "nM3Y":
/*!************************************************************!*\
  !*** ./src/app/strategic-plan/strategic-plan.component.ts ***!
  \************************************************************/
/*! exports provided: StrategicPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategicPlanComponent", function() { return StrategicPlanComponent; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data.service */ "AwSQ");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/crud.service */ "+JMX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var _suffixes_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../suffixes.pipe */ "WHRT");








function StrategicPlanComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.mdaId[0].name);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = function (a0) { return { "color": a0 }; };
function StrategicPlanComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StrategicPlanComponent_div_15_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const item_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.gotoOutcome(item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "gauge" + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "gauge-container" + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx_r3.setColor(item_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 9, item_r4.baseline));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c1, ctx_r3.setColor(item_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 11, item_r4.actual));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 13, ctx_r3.prepareTarget(item_r4.target, 0).target));
} }
function StrategicPlanComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StrategicPlanComponent_div_15_div_2_Template, 21, 19, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StrategicPlanComponent_div_15_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.scrollElementPrev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StrategicPlanComponent_div_15_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.scrollElementNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.indicator);
} }
const _c2 = function (a0) { return { "margin-left": a0 }; };
function StrategicPlanComponent_div_56_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "small", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const man_r14 = ctx.$implicit;
    const ind_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ind_r12.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Delieverable: ", man_r14.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 8, ind_r12.baseline), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c2, ctx_r13.calcPercentage(ind_r12.actual, ind_r12.target)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 10, ind_r12.actual), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("tooltip", ind_r12.actual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c2, ctx_r13.calcPercentage(ind_r12.actual, ind_r12.target)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 12, ctx_r13.prepareTarget(ind_r12.target, 0).target), " ");
} }
function StrategicPlanComponent_div_56_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StrategicPlanComponent_div_56_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ind_r12 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r17.gotoOutput(ind_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StrategicPlanComponent_div_56_div_6_div_2_Template, 17, 18, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ind_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ind_r12.mandates);
} }
function StrategicPlanComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ministerial Deliverables");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, StrategicPlanComponent_div_56_div_6_Template, 3, 1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.output);
} }
const _c3 = function () { return { "margin-left": "95%", "background": "#06AA49" }; };
const _c4 = function () { return { "margin-left": "40%" }; };
const _c5 = function (a0) { return { "bg-warning text-dark": a0 }; };
const _c6 = function (a0) { return { "height": a0 }; };
class StrategicPlanComponent {
    constructor(data, crudService, router, route) {
        this.data = data;
        this.crudService = crudService;
        this.router = router;
        this.route = route;
        this.pmore = false;
        this.mdamore = false;
        this.projectmore = false;
        this.policymore = false;
        this.fundmore = false;
        this.activeChart = 'priority';
        this.activeImp = 'Project';
        this.activeYear = '2020';
        this.col = 0;
        // this.changeView();
        this.getMda();
        this.router.params.subscribe(params => {
            this.shortCode = params.data;
        });
        const activeYear = localStorage.getItem('activeYear');
        if (activeYear)
            this.activeYear = activeYear;
    }
    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.mandateId = message);
        setTimeout(() => { this.initiateChart(); }, 2000);
        this.initiateBudgetChart();
        setInterval(() => {
            this.scrollElementNext();
        }, 5000);
    }
    getMdaId() {
        this.mdaId = this.ministries.filter((el) => el.shortcode === this.shortCode);
        this.getIndicator();
    }
    initiateChart() {
        this.chart = new Chart('myChart1', {
            type: "tsgauge",
            data: {
                datasets: [{
                        backgroundColor: ["red", "#fd9704", "#0fdc63"],
                        borderWidth: 0,
                        gaugeData: {
                            value: 2530,
                            valueColor: "#ff7143"
                        },
                        gaugeLimits: [0, 3000, 7000, 10000]
                    }]
            },
            options: {
                events: [],
                showMarkers: true
            }
        });
        this.chart = new Chart('myChart2', {
            type: "tsgauge",
            data: {
                datasets: [{
                        backgroundColor: ["red", "#fd9704", "#0fdc63"],
                        borderWidth: 0,
                        gaugeData: {
                            value: 2530,
                            valueColor: "#ff7143"
                        },
                        gaugeLimits: [0, 3000, 7000, 10000]
                    }]
            },
            options: {
                events: [],
                showMarkers: true
            }
        });
        this.chart = new Chart('myChart3', {
            type: "tsgauge",
            data: {
                datasets: [{
                        backgroundColor: ["red", "#fd9704", "#0fdc63"],
                        borderWidth: 0,
                        gaugeData: {
                            value: 2530,
                            valueColor: "#ff7143"
                        },
                        gaugeLimits: [0, 3000, 7000, 10000]
                    }]
            },
            options: {
                events: [],
                showMarkers: true
            }
        });
        this.chart = new Chart('myChart4', {
            type: "tsgauge",
            data: {
                datasets: [{
                        backgroundColor: ["red", "#fd9704", "#0fdc63"],
                        borderWidth: 0,
                        gaugeData: {
                            value: 2530,
                            valueColor: "#ff7143"
                        },
                        gaugeLimits: [0, 3000, 7000, 10000]
                    }]
            },
            options: {
                events: [],
                showMarkers: true
            }
        });
        this.chart = new Chart('myChart9', {
            type: 'bar',
            data: {
                labels: this.mdaId[0].agencies,
                datasets: [
                    {
                        label: "Appropriated",
                        borderColor: "#5bb85d",
                        borderWidth: 1,
                        data: [54, 34, 94, 62, 64, 23]
                    },
                    {
                        label: "Disbursed",
                        borderColor: "#ec260c",
                        borderWidth: 1,
                        data: [62, 23, 73, 70, 46, 58]
                    },
                    {
                        label: "Utilised",
                        borderColor: "#00d6b4",
                        borderWidth: 1,
                        data: [23, 31, 16, 45, 92, 37]
                    },
                ]
            },
            options: {
                responsive: true,
                legend: {
                    display: true
                },
                scales: {
                    xAxes: [{
                            display: true
                        }],
                    yAxes: [{
                            display: true
                        }],
                }
            }
        });
    }
    initiateChartInterativity(evt, array) {
        // let activeElement = this.testBudgetChart.getElementAtEvent(evt);
        // //console.log(activeElement);
        // this.testBudgetChart.clear()
        // this.testBudgetChart.destroy()
        let data = {
            labels: ['MDA1', 'MDA2', 'MDA3', 'MDA4', 'MDA5', 'MDA6'],
            datasets: [
                {
                    fill: false,
                    borderWidth: 1,
                    borderColor: "#56bc41",
                    data: [62, 64, 23, 87, 43, 78]
                },
            ]
        };
        this.testBudgetChart.data = data;
        this.testBudgetChart.update();
        // document.getElementById('replaceDataObject').addEventListener('click', function() {
        //   var newDataObject = {
        //     labels: ["January", "February", "March", "April", "May", "June", "July"],
        //     datasets: [{
        //       label: "My First dataset",
        //       fill: false,
        //       lineTension: 0.1,
        //       backgroundColor: "rgba(75,192,192,0.4)",
        //       borderColor: "rgba(75,192,192,1)",
        //       borderCapStyle: 'butt',
        //       borderDash: [],
        //       borderDashOffset: 0.0,
        //       borderJoinStyle: 'miter',
        //       pointBorderColor: "rgba(75,192,192,1)",
        //       pointBackgroundColor: "#fff",
        //       pointBorderWidth: 1,
        //       pointHoverRadius: 5,
        //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
        //       pointHoverBorderColor: "rgba(220,220,220,1)",
        //       pointHoverBorderWidth: 2,
        //       pointRadius: 1,
        //       pointHitRadius: 10,
        //       data: [100, 200, 300, 81, 56, 55, 40],
        //       spanGaps: false,
        //     }]
        //   };
        // //console.log(myLine.data);
        // // the newDataObject does not override myLine.data object: why???
        // myLine.data = newDataObject;
        // // ... but updating a single value works: why??? 
        // myLine.data.datasets[0].data[0] = 5000;
        // //console.log(myLine.data);
        // this.testBudgetChart.update();
        // });
    }
    initiatePriorityChart() {
        if (this.activeChart != 'priority') {
            this.activeChart = 'priority';
            this.budgetChart.clear();
            this.budgetChart.destroy();
        }
        setTimeout(() => {
            this.priorityChart = new Chart('myPriorityChart', {
                type: 'bar',
                data: {
                    labels: ['Priority 1', 'Priority 2', 'Priority 3', 'Priority 4', 'Priority 5', 'Priority 6', 'Priority 7', 'Priority 8', 'Priority 9'],
                    datasets: [
                        {
                            label: ["Stabilize the Macro Economic Environment", "Achieve Agriculture and Food Security", "Ensure Energy Sufficiency in Power and Petroleum Product", "Improve Transportation and Other Infrastructure", "Drive Industrilisation", "Improve health education and productivity of Nigerians", "Enhance social inclusion and reduce poverty", "Fight corruption and improve governance", "provide security for all citizens"],
                            borderWidth: 2,
                            borderColor: "#5bb85d",
                            data: [54, 34, 94, 62, 64, 23, 87, 43, 78]
                        },
                    ]
                },
                options: {
                    onClick: this.initiateChartInterativity.bind(this),
                    responsive: true,
                    scaleFontColor: "#FFFFFF",
                    legend: {
                        display: false,
                        labels: {
                            fontColor: "#f7f7f2",
                        }
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                                display: true,
                                barPercentage: 0.1
                            }],
                        yAxes: [{
                                display: true
                            }],
                    }
                }
            });
        }, 200);
        // this.budgetCanvas = document.getElementById('myChart9');
        // this.budgetCanvas.onclick = function(evt) {
        //   //console.log(evt);
        //   var activePoints = this.budgetChart.getElementsAtEvent(evt);
        //   if (activePoints[0]) {
        //     var chartData = activePoints[0]['_chart'].config.data;
        //     var idx = activePoints[0]['_index'];
        //     var label = chartData.labels[idx];
        //     var value = chartData.datasets[0].data[idx];
        //     var url = "http://example.com/?label=" + label + "&value=" + value;
        //     //console.log(url);
        //     alert(url);
        //   }
        // };
    }
    initiateBudgetChart() {
        // if (this.activeChart != 'budget') {
        //   this.activeChart = 'budget';
        //   this.priorityChart.clear();
        //   this.priorityChart.destroy();
        // }
        setTimeout(() => {
            this.budgetChart = new Chart('myBudgetChart', {
                type: 'bar',
                data: {
                    labels: ['Outcome 1', 'Outcome 2', 'Outcome 3', 'Outcome 4', 'Outcome 5', 'Outcome 6', 'Outcome 7', 'Outcome 8'],
                    datasets: [
                        {
                            label: "Appropriated",
                            borderColor: "#06AA49",
                            borderWidth: 2,
                            backgroundColor: "#06aa4933",
                            data: [34, 94, 62, 64, 23, 87, 34, 52]
                        },
                        {
                            label: "Released",
                            borderColor: "#FEA041",
                            borderWidth: 2,
                            backgroundColor: "#fea0411f",
                            data: [23, 73, 70, 46, 58, 38, 69, 98]
                        },
                        {
                            label: "Utilized",
                            borderColor: "#0277BD",
                            borderWidth: 2,
                            backgroundColor: "#0277bd1a",
                            data: [31, 16, 45, 92, 37, 76, 80, 76]
                        },
                    ]
                },
                options: {
                    // onClick:this.initiateChartInterativity.bind(this),
                    responsive: true,
                    scaleFontColor: "#FFFFFF",
                    legend: {
                        display: false,
                        labels: {
                            fontColor: "#f7f7f2",
                        }
                    },
                    scales: {
                        xAxes: [{
                                display: true,
                                barPercentage: 0.3
                            }],
                        yAxes: [{
                                display: true
                            }],
                    }
                }
            });
        }, 200);
    }
    getMda() {
        const data = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
      {
        mdas{
          id
          name
          shortcode
        }
      }
    `;
        this.crudService.pullData(data, {})
            .subscribe((result) => {
            this.ministries = result.data.mdas;
            this.getMdaId();
        });
    }
    getIndicator() {
        const query = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
      query indicatorsByMda($mdaId: ID!){
        indicatorsByMda(mdaId: $mdaId){
          id
          title
          driver
          datasource
          type
          ref
          unitType
          unit
          baseline
          actual
          target
          aggregation
          rt
          currency
          score
          active
          mdaId
          priorityId
          outputs{
            id
            title
            ref
            baseline
            actual
            target
            aggregation
            rt
            currency
            active
            type
            unit
            unitType
            mdaId
            mandates{
              id
              title
            },
            datasource
            projects{
              id
              puid
              title
              ref
              budget
              cost
              type
              start_date
              end_date
              status
              state
              lga
              currency
              score
              active
            }
          }
          jobs{
           id
           title
           ref
           baseline
           actual
           target
           aggregation
           rt
           currency
           active
           type
            unit
            unitType
           mdaId
           mandates{
             id
             title
           }
           datasource

         }
         gender{
           id
           title
           ref
           baseline
           actual
           target
           aggregation
           rt
           currency
           active
           type
            unit
            unitType
           mdaId
           mandates{
             id
             title
           }
           datasource
          }
        }
      }
    `;
        this.crudService.pullData(query, { mdaId: this.mdaId[0].id })
            .subscribe((res) => {
            this.indicator = res.data.indicatorsByMda;
            console.log(this.indicator);
            this.drive1 = this.indicator.filter(e => {
                return e.driver == "Increase Agricultural production while deploying productivity improvement measures";
            });
            this.drive2 = this.indicator.filter(e => {
                return e.driver == "Deepen/Broaden the Agricultural chain through value addition";
            });
            this.drive3 = this.indicator.filter(e => {
                return e.driver == "Ensure Affodability of Staple Foods";
            });
            let output = [];
            this.indicator.forEach(e => {
                if (e.outputs.length > 0) {
                    output = output.concat(e.outputs);
                }
            });
            this.output = output;
            console.log(this.output);
            this.initializeGuage(this.indicator);
            this.getBudget();
        });
    }
    getBudget() {
        const query = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
      query budgetByMDAYear($mdaId: ID!, $year: String!){
        budgetByMDAYear(mdaId: $mdaId, year: $year){
          id
          budget_line_item
          budget_code
          amount
          year
        }
      }
    `;
        this.crudService.pullData(query, { mdaId: this.mdaId[0].id, year: this.activeYear })
            .subscribe((res) => {
            console.log(res);
        });
    }
    gotoOutcome(item) {
        this.route.navigate(['/dashboard/outcome'], {
            state: {
                log: JSON.stringify(item)
            }
        });
    }
    gotoOutput(i) {
        const itemObj = {
            output: i
        };
        this.route.navigate(['/dashboard/output'], {
            state: {
                log: JSON.stringify(itemObj)
            }
        });
    }
    initializeGuage(data) {
        let currentGuage = document.getElementsByClassName('gauge');
        for (let i = 0; i < data.length; i++) {
            const gauge = this.Gauge(currentGuage[i]);
            const target = this.prepareTarget(data[i].target, 0).target;
            const percent = (this.crudService.calculatePercantage(data[i].actual, data[i].baseline, target, data[i].aggregation)) / 100;
            gauge.value(percent);
        }
    }
    prepareTarget(data, index) {
        if (data === null)
            return { target: 0.0 };
        if (typeof data === 'number') {
            return { target: data };
        }
        const tar = JSON.parse(data);
        if (tar[index].target === null) {
            return { target: 0.0 };
        }
        if (tar[index].annual) {
            return { target: tar[index].annual };
        }
        return tar[index];
    }
    Gauge(el) {
        // ##### Private Properties and Attributes
        let element, // Containing element for the info component
        data, // `.gauge--data` element
        needle, // `.gauge--needle` element
        value = 0.0, // Current gauge value from 0 to 1
        prop; // Style for transform
        // ##### Private Methods and Functions
        let setElement = function (el) {
            // Keep a reference to the various elements and sub-elements
            element = el;
            if (element != undefined) {
                data = element.querySelector(".gauge--data");
                needle = element.querySelector(".gauge--needle");
            }
        };
        var setValue = function (x) {
            value = x;
            var turns = -0.5 + (x * 0.5);
            if (data != undefined) {
                data.style[prop] = "rotate(" + turns + "turn)";
                needle.style[prop] = "rotate(" + turns + "turn)";
            }
        };
        // ##### Object to be Returned
        var exports = {
            element: function (el) {
                if (!arguments.length) {
                    return element;
                }
                setElement(el);
                return this;
            },
            value: function (x) {
                if (!arguments.length) {
                    return value;
                }
                setValue(x);
                return this;
            }
        };
        // ##### Public API Methods
        // ##### Initialization
        var body = document.getElementsByTagName("body")[0];
        ["webkitTransform", "mozTransform", "msTransform", "oTransform", "transform"].
            forEach(function (p) {
            if (typeof body.style[p] !== "undefined") {
                prop = p;
            }
        });
        if (arguments.length) {
            setElement(el);
        }
        return exports;
    }
    setColor(data) {
        const target = this.prepareTarget(data.target, 0).target;
        // tslint:disable-next-line:max-line-length
        const r = (this.crudService.calculatePercantage(parseFloat(data.actual), parseFloat(data.baseline), parseFloat(target), data.aggregation));
        this.initializeGuage(this.indicator);
        if (r <= 33.3) {
            return 'red';
        }
        if (r > 33.3 && r <= 66.6) {
            return '#ffbf00';
        }
        if (r > 66.6) {
            return 'green';
        }
    }
    calcPercentage(a, b) {
        b = this.prepareTarget(b, 0).target;
        let percent = a / b * 100;
        if (percent > 100)
            percent = 100;
        if (percent < 0)
            percent = 0;
        return percent + '%';
    }
    scrollElementNext() {
        const el = document.querySelector('.horizontal-scroll');
        this.col = document.querySelector('.col-4').offsetWidth + this.col;
        if (this.col > el.offsetWidth) {
            this.col = 0;
        }
        el.scroll({
            top: 0,
            left: this.col,
            behavior: 'smooth'
        });
    }
    scrollElementPrev() {
        const el = document.querySelector('.horizontal-scroll');
        if (this.col <= 0) {
            this.col = el.offsetWidth;
        }
        this.col = this.col - document.querySelector('.col-4').offsetWidth;
        el.scroll({
            top: 0,
            left: this.col,
            behavior: 'smooth'
        });
    }
}
StrategicPlanComponent.ɵfac = function StrategicPlanComponent_Factory(t) { return new (t || StrategicPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
StrategicPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StrategicPlanComponent, selectors: [["app-strategic-plan"]], decls: 107, vars: 25, consts: [[1, "container-fluid", "my-5", "px-3"], ["class", "d-flex justify-content-between", 4, "ngIf"], [1, "list-unstyled", "m-0", "d-flex"], [1, "d-flex", "mx-2", "mb-0"], [1, "oval-success", "mr-2"], [1, "oval-warning", "mr-2"], [1, "oval-danger", "mr-2"], ["class", "carousel", 4, "ngIf"], [1, "container-fluid", "my-5", "px-4"], [1, "d-flex"], [1, "col-md-9", "py-2", "pr-2", "pl-0"], [1, "primary-border", "p-4"], ["id", "myBudgetChart", "height", "95px"], [1, "col-md-3", "py-2", "pl-2", "pr-0", "text-center"], [1, "primary-border", "mb-4", "py-4", "px-3", "aggregation"], [1, "mb-0"], [1, "linearguageWrapper", "text-center"], [1, "traffic", 2, "background", "#0FDC63"], ["tooltip", "23B", 1, "tick", 3, "ngStyle"], [1, "target", "p-0", "m-0", 2, "display", "block"], [1, "linearguageWrapper", "text-left"], [1, "traffic"], [1, "base"], [1, "target"], [4, "ngIf"], [1, "d-flex", "justify-content-between"], [1, "mb-4"], [1, "container-fluid", "px-4", "my-5"], [1, "p-4", "primary-border"], [1, "row"], [1, "col"], [1, "chart-title-label", "mt-2"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "mb-3", "float-right"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-warning", 3, "ngClass", "click"], [1, "d-flex", "py-4", "mb-3", "text-center", "fundmore", 3, "ngStyle"], [1, "col-md-3", "px-2", "mb-3"], [1, "p-3", "secondary-card"], [1, "cursor"], [1, "carousel"], [1, "row", "horizontal-scroll"], ["class", "px-2 col-4", 4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-outline-light", "prev", 3, "click"], [1, "fas", "fa-angle-left"], [1, "btn", "btn-sm", "btn-outline-light", "next", 3, "click"], [1, "fas", "fa-angle-right"], [1, "px-2", "col-4"], [1, "primary-border", "text-center", "p-3", "cursor", 3, "click"], [1, "chart-small-label", 3, "title"], [1, "gauge", "gauge__liveupdate", "mt-3"], [1, "gauge--container"], [1, "gauge--marker"], [1, "gauge--background"], [1, "gauge--center"], [1, "gauge--data", 3, "ngStyle"], [1, "gauge--needle"], [1, "gauge--labels", "mdl-typography--headline"], [1, "gauge--label__low"], [1, "gauge--label__spacer", 2, "text-align", "center", "font-size", "1.5rem", 3, "ngStyle"], [1, "gauge--label__high"], [1, "container-fluid", "primary-border", "my-5", "px-4"], [1, "d-flex", "mt-5", "pt-5", "justify-content-between"], [1, ""], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "outputs", "linearguageWrapper", "my-4", "cursor", 3, "click"], ["class", "secondary-card mx-3 py-4 h-100", 4, "ngFor", "ngForOf"], [1, "secondary-card", "mx-3", "py-4", "h-100"], [1, "chart-small-label"], [1, "chart-small-label", "mb-0"], [1, "actual", 3, "ngStyle"], [1, "tick", 3, "ngStyle", "tooltip"]], template: function StrategicPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StrategicPlanComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " 9 mandates on Track");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " 5 mandates In Progress ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "4 mandates not on Track");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, StrategicPlanComponent_div_15_Template, 7, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "canvas", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Total Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "\u20A643B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " 100% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Total Budget Released");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "15B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " 0% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " 100% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Total Budget Utilised");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "\u20A610B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " 0% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " 100% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, StrategicPlanComponent_div_56_Template, 7, 1, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h6", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Implementation Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StrategicPlanComponent_Template_button_click_68_listener() { return ctx.activeImp = "Project"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StrategicPlanComponent_Template_button_click_70_listener() { return ctx.activeImp = "Policy"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StrategicPlanComponent_Template_button_click_72_listener() { return ctx.activeImp = "Programmes"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Programmes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "45 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "small", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "5 (15%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "small", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "11 (33.7%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "small", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "34 (66.3%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "small", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "See All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mdaId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.indicator);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.output == null ? null : ctx.output.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c5, ctx.activeImp == "Project"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c5, ctx.activeImp == "Policies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c5, ctx.activeImp == "Programmes"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c6, ctx.fundmore ? "auto" : "150px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Number ", ctx.activeImp, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total of Completed ", ctx.activeImp, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total of ", ctx.activeImp, " Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total Number of Abandoned ", ctx.activeImp, "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_suffixes_pipe__WEBPACK_IMPORTED_MODULE_7__["SuffixesPipe"]], styles: [".primary-border[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  border-radius: 5px;\n}\n\n.tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n.tabs[_ngcontent-%COMP%]   .tab-color[_ngcontent-%COMP%] {\n  background: #A06220;\n  color: #c6c0b3;\n  border-radius: 2px;\n}\n\n.aggregation[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.mandate-label[_ngcontent-%COMP%] {\n  height: 16px;\n  overflow: hidden;\n}\n\n.projectmore[_ngcontent-%COMP%], .policymore[_ngcontent-%COMP%], .fundmore[_ngcontent-%COMP%] {\n  height: 140px;\n  transition: 0.3s all ease-in-out;\n  overflow: hidden;\n}\n\n.mdamore[_ngcontent-%COMP%] {\n  transition: 0.3s ease-in-out;\n  overflow: hidden;\n}\n\n@media (min-width: 768px) {\n  .horizontal-scroll[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\n    flex: 0 0 32.333333%;\n    max-width: 32.333333%;\n  }\n}\n\nsmall.chart-small-label[_ngcontent-%COMP%] {\n  font-size: smaller;\n}\n\n.outputs[_ngcontent-%COMP%] {\n  background-color: var(--secondary-card-bkg);\n  color: var(--font-color);\n  border-top: 1px solid #A06220 !important;\n  border-bottom: 1px solid #A06220 !important;\n  border-left: hidden;\n  border-right: hidden;\n  border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0cmF0ZWdpYy1wbGFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHRTtFQUNFLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZKOztBQU9FO0VBQ0UsZ0JBQUE7QUFKSjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBOzs7RUFHRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBRUk7SUFDRSxvQkFBQTtJQUNBLHFCQUFBO0VBTko7QUFDRjs7QUFVQTtFQUNFLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSwyQ0FBQTtFQUNBLHdCQUFBO0VBRUEsd0NBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQVRGIiwiZmlsZSI6InN0cmF0ZWdpYy1wbGFuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW1hcnktYm9yZGVyIHtcbiAgaDYge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuXG4udGFicyB7XG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICBzcGFuOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuXG4gIC50YWItY29sb3Ige1xuICAgIGJhY2tncm91bmQ6ICNBMDYyMjA7XG4gICAgY29sb3I6ICNjNmMwYjM7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB9XG59XG5cbi5hZ2dyZWdhdGlvbiB7XG4gIGgxIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cbi5tYW5kYXRlLWxhYmVsIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvamVjdG1vcmUsXG4ucG9saWN5bW9yZSxcbi5mdW5kbW9yZSB7XG4gIGhlaWdodDogMTQwcHg7XG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tZGFtb3JlIHtcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmhvcml6b250YWwtc2Nyb2xsIHtcbiAgICAuY29sLW1kLTQge1xuICAgICAgZmxleDogMCAwIDMyLjMzMzMzMyU7XG4gICAgICBtYXgtd2lkdGg6IDMyLjMzMzMzMyU7XG4gICAgfVxuICB9XG59XG5cbnNtYWxsLmNoYXJ0LXNtYWxsLWxhYmVsIHtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG4ub3V0cHV0cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jYXJkLWJrZyk7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI0EwNjIyMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNBMDYyMjAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBMDYyMjAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWxlZnQ6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIC8vIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC42MjVyZW07XG4gIC8vIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNjI1cmVtO1xuICAvLyBib3JkZXItdG9wOiBoaWRkZW47XG59XG5cbi5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XG4gIC8vIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC42MjVyZW07XG4gIC8vIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNjI1cmVtO1xuICAvLyBib3JkZXItYm90dG9tOiBub25lO1xufVxuIl19 */"] });


/***/ }),

/***/ "nm/J":
/*!********************************************!*\
  !*** ./src/app/service/auth/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (localStorage.getItem('token')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pZjM":
/*!************************************************!*\
  !*** ./src/app/priority/priority.component.ts ***!
  \************************************************/
/*! exports provided: PriorityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriorityComponent", function() { return PriorityComponent; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/crud.service */ "+JMX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var _suffixes_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../suffixes.pipe */ "WHRT");







function PriorityComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Briefing Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PriorityComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Briefing Notes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = function (a0) { return { "color": a0 }; };
function PriorityComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PriorityComponent_div_10_div_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const item_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r10.gotoOutcome(item_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "gauge" + i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "gauge-container" + i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c0, ctx_r7.setColor(item_r8)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 8, item_r8.baseline, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c1, ctx_r7.setColor(item_r8)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 11, item_r8.actual, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 14, ctx_r7.prepareTarget(item_r8.target, 0).target, 2));
} }
function PriorityComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PriorityComponent_div_10_div_2_Template, 21, 21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PriorityComponent_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.scrollElementPrev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PriorityComponent_div_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.scrollElementNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.priority == null ? null : ctx_r2.priority.lIndicators);
} }
const _c2 = function (a0) { return { "margin-left": a0 }; };
function PriorityComponent_div_11_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const man_r18 = ctx.$implicit;
    const ind_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    let tmp_8_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](man_r18.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ind_r16.mda.shortcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ind_r16.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 9, ind_r16.baseline), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c2, ctx_r17.calcPercentage(ind_r16.actual, ind_r16.target)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 11, ind_r16.actual), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("tooltip", ind_r16.actual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c2, ctx_r17.calcPercentage(ind_r16.actual, ind_r16.target)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 13, ((tmp_8_0 = ctx_r17.prepareCurrentTarget(ind_r16.target)) == null ? null : tmp_8_0.annual) || 0), " ");
} }
function PriorityComponent_div_11_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PriorityComponent_div_11_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ind_r16 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r21.gotoOutput(ind_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PriorityComponent_div_11_div_6_div_2_Template, 20, 19, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ind_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ind_r16.mandates);
} }
function PriorityComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ministerial Deliverables");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PriorityComponent_div_11_div_6_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.output);
} }
function PriorityComponent_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Number of new jobs created via increased agricultural and productivity improvement measures");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "FEDERAL MINISTRY OF AGRICULTURE & RURAL DEVELOPMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Number of new jobs created (#)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " 500 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c2, ctx_r4.calcPercentage(0, 500)));
} }
function PriorityComponent_li_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Number of new jobs created via the deepening of the agricultural value chain through value addition initiatives");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "FEDERAL MINISTRY OF AGRICULTURE & RURAL DEVELOPMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Number of new jobs created (#)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " 500 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c2, ctx_r5.calcPercentage(0, 500)));
} }
function PriorityComponent_li_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Number of new jobs created via initiatives aimed at ensuring the affordability of staple foods initiatives initiatives");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "FEDERAL MINISTRY OF AGRICULTURE & RURAL DEVELOPMENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Number of new jobs created (#)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " 500 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c2, ctx_r6.calcPercentage(0, 500)));
} }
class PriorityComponent {
    constructor(crud, activeRoute, router) {
        this.crud = crud;
        this.activeRoute = activeRoute;
        this.router = router;
        this.preffered = [];
        this.priority = JSON.parse(localStorage.getItem('priority'));
        this.tab = "revenue";
        this.pmore = false;
        this.mdamore = false;
        this.projectmore = false;
        this.policymore = false;
        this.fundmore = false;
        this.activeChart = 'B';
        this.budgetPriority = false;
        this.col = 0;
        this.output = [];
        // 
        // this.initiateCarousel();
        this.activeYear = localStorage.getItem('activeYear');
    }
    finPoliciesByMdas(arg0) {
        throw new Error("Method not implemented.");
    }
    ngOnInit() {
        // this.getMdas();
        this.activeRoute.paramMap.subscribe((param) => {
            // this.staffId = param.params.id
            // this.prepareSearch(true);
            console.log(param.params.id);
            this.pullDataByPriority(param.params.id);
        });
        // this.getIndicator();
        // let pref = JSON.parse(localStorage.getItem('preffered'));
        // if (pref != undefined) this.preffered = pref;
        var d = new Date();
        var date = d.getDate();
        // var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
        var year = d.getFullYear();
        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
        var monthText = month[d.getMonth()];
        this.date = monthText + ' ' + year;
    }
    initializeGuage(data) {
        let currentGuage = document.getElementsByClassName('gauge');
        for (let i = 0; i < data.length; i++) {
            let gauge = this.Gauge(currentGuage[i]);
            let target = this.prepareTarget(data[i].target, 0).target;
            let percent = (this.crud.calculatePercantage(data[i].actual, data[i].baseline, target, data[i].aggregation)) / 100;
            gauge.value(percent);
        }
    }
    pullDataByPriority(id) {
        let data = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
     query priority(
        $id: ID!
    ){
      priority(id: $id) {
           id
        title
        order
        lIndicators{
            id
            title
            ref
            type
            baseline
            actual
            target
            aggregation
            rt
            currency
            active
            mdaId
            driver
            outputs{
              id
              title
              ref
              baseline
              actual
              target
              aggregation
              rt
              currency
              active
              mdaId
              mda{
                id
                name
                shortcode
              }
              projects{
                id
                puid
                title
                ref
                budget
                type
                images
                start_date
                end_date
                status
                state
                lga
                currency
                active
                userId
                logframes{
                  id
                  comments
                  challenges
                  outputValue
                  longitude
                  latitude
                  images
                  status
                  qow
                  loc
                  type
                  budget
                  approved
                  released
                  utilized
                  logframeStatus
                  project{
                    id
                    title
                  }

                 }

                mda{
                  id
                  name
                  shortcode
                }
              }
              mandates{
              id
              title
            }
            }
          }
          
        }
    }
    
  
    `;
        this.crud.pullData(data, { id: id })
            .subscribe((result) => {
            // this.currentPriorities = ''
            this.priority = result.data['priority'];
            this.priority.lIndicators.forEach(e => {
                //   // tslint:disable-next-line:curly
                if (e.outputs.length > 0) {
                    this.output = this.output.concat(e.outputs);
                }
            });
            this.initializeGuage(this.priority.lIndicators);
            setInterval(() => {
                this.scrollElementNext();
            }, 5000);
            // this.temp = result.data.priorities;
            // localStorage.setItem('priorities', JSON.stringify(this.priorities))
            // this.openModal()
        });
    }
    prepareTarget(data, index) {
        if (data == null)
            return [];
        if (typeof data === 'number') {
            return { target: data };
        }
        let tar = JSON.parse(data);
        return tar[index];
    }
    Gauge(el) {
        // ##### Private Properties and Attributes
        let element, // Containing element for the info component
        data, // `.gauge--data` element
        needle, // `.gauge--needle` element
        value = 0.0, // Current gauge value from 0 to 1
        prop; // Style for transform
        // ##### Private Methods and Functions
        let setElement = function (el) {
            // Keep a reference to the various elements and sub-elements
            element = el;
            if (element != undefined) {
                data = element.querySelector(".gauge--data");
                needle = element.querySelector(".gauge--needle");
            }
        };
        var setValue = function (x) {
            value = x;
            var turns = -0.5 + (x * 0.5);
            if (data != undefined) {
                data.style[prop] = "rotate(" + turns + "turn)";
                needle.style[prop] = "rotate(" + turns + "turn)";
            }
        };
        // ##### Object to be Returned
        var exports = {
            element: function (el) {
                if (!arguments.length) {
                    return element;
                }
                setElement(el);
                return this;
            },
            value: function (x) {
                if (!arguments.length) {
                    return value;
                }
                setValue(x);
                return this;
            }
        };
        // ##### Public API Methods
        // ##### Initialization
        var body = document.getElementsByTagName("body")[0];
        ["webkitTransform", "mozTransform", "msTransform", "oTransform", "transform"].
            forEach(function (p) {
            if (typeof body.style[p] !== "undefined") {
                prop = p;
            }
        });
        if (arguments.length) {
            setElement(el);
        }
        return exports;
    }
    getPercentage(data) {
        let percentage = 0;
        percentage = (data.actual / data.target) * 100;
        if (percentage > 100)
            percentage = 100;
        if (percentage < 0)
            percentage = 0;
        return percentage;
    }
    setColor(data) {
        const target = this.prepareTarget(data.target, 0).target;
        const r = (this.crud.calculatePercantage(parseFloat(data.actual), parseFloat(data.baseline), parseFloat(target), data.aggregation));
        this.initializeGuage(this.priority.lIndicators);
        if (r <= 33.3) {
            return 'red';
        }
        if (r > 33.3 && r <= 66.6) {
            return '#ffbf00';
        }
        if (r > 66.6) {
            return 'green';
        }
    }
    calcPercentage(a, b) {
        b = this.prepareCurrentTarget(b).annual;
        let percent = a / b * 100;
        if (percent > 100)
            percent = 100;
        if (percent < 0)
            percent = 0;
        return percent + '%';
    }
    getMdas() {
        const data = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
    {
      mdas{
        id
        name
        indicators{
            id
            title
            ref
            type
            baseline
            actual
            target
            aggregation
            rt
            currency
            active
            mdaId
          }
          outputs{
            id
            title
            ref
            baseline
            actual
            target
            aggregation
            rt
            currency
            active
            mdaId
          }
        }
      }
  `;
        this.crud.pullData(data, {})
            .subscribe((result) => {
            // this.currentPriorities = ''
            this.mdas = result.data.mdas;
            // this.temp = result.data.priorities;
            // localStorage.setItem('priorities', JSON.stringify(this.priorities))
            // this.openModal()
        });
    }
    gotoOutcome(item) {
        this.router.navigate(['/dashboard/outcome'], {
            state: {
                log: JSON.stringify(item)
            }
        });
    }
    gotoOutput(i) {
        const itemObj = {
            output: i
        };
        this.router.navigate(['/dashboard/output'], {
            state: {
                log: JSON.stringify(itemObj)
            }
        });
    }
    initiateCarousel() {
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            autoplay: true,
            navText: ['<img src="assets/icons/001-left-chevron.svg">', '<img src="assets/icons/002-right-chevron.svg">'],
            nav: true,
            autoplayHoverPause: true,
            responsive: {
                740: {
                    items: 2
                },
                940: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        };
    }
    scrollElementNext() {
        const el = document.querySelector('.horizontal-scroll');
        this.col = document.querySelector('.col-4').offsetWidth + this.col;
        if (this.col > el.offsetWidth) {
            this.col = 0;
        }
        el.scroll({
            top: 0,
            left: this.col,
            behavior: 'smooth'
        });
    }
    scrollElementPrev() {
        const el = document.querySelector('.horizontal-scroll');
        if (this.col <= 0) {
            this.col = el.offsetWidth;
        }
        this.col = this.col - document.querySelector('.col-4').offsetWidth;
        el.scroll({
            top: 0,
            left: this.col,
            behavior: 'smooth'
        });
    }
    prepareCurrentTarget(data) {
        // console.log(data);
        if (data == null)
            return [];
        let pre = JSON.parse(data);
        let rdata;
        // if (index == null) {
        pre.forEach(element => {
            if (element.year == this.activeYear)
                rdata = element;
        });
        // console.log(rdata);
        return rdata;
        // }
        // return pre[index];
    }
}
PriorityComponent.ɵfac = function PriorityComponent_Factory(t) { return new (t || PriorityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PriorityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PriorityComponent, selectors: [["app-priority"]], decls: 38, vars: 10, consts: [[1, "container-fluid", "my-5", "px-3"], [1, "d-flex", "justify-content-between"], [1, "mb-4"], ["class", "btn btn-sm btn-outline-warning mx-3", "href", "#", 4, "ngIf"], ["class", "btn btn-sm btn-outline-warning mx-3", "href", "https://res.cloudinary.com/natview-tech/raw/upload/v1627019619/SGF/Briefing_Notes_-Priority_1_b0ebow.docx", 4, "ngIf"], ["class", "carousel", 4, "ngIf"], [4, "ngIf"], [1, "container-fluid", "my-5", "px-4"], [1, "primary-border", "p-4"], [1, "d-flex", "flex-wrap", "mb-3"], [1, "col-md-4", "px-2", "mb-3"], [1, "secondary-card", "px-3", "py-4", "h-100"], [1, "list-group"], ["class", "list-group-item linearguageWrapper my-4", 4, "ngFor", "ngForOf"], ["href", "#", 1, "btn", "btn-sm", "btn-outline-warning", "mx-3"], ["href", "https://res.cloudinary.com/natview-tech/raw/upload/v1627019619/SGF/Briefing_Notes_-Priority_1_b0ebow.docx", 1, "btn", "btn-sm", "btn-outline-warning", "mx-3"], [1, "carousel"], [1, "row", "horizontal-scroll"], ["class", "px-2 col-4", 4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-outline-light", "prev", 3, "click"], [1, "fas", "fa-angle-left"], [1, "btn", "btn-sm", "btn-outline-light", "next", 3, "click"], [1, "fas", "fa-angle-right"], [1, "px-2", "col-4"], [1, "primary-border", "text-center", "p-3", "cursor", 3, "click"], ["title", "Improve Transportation and Other Infrastructure", 1, "chart-small-label"], [1, "gauge", "gauge__liveupdate", "mt-3"], [1, "gauge--container"], [1, "gauge--marker"], [1, "gauge--background"], [1, "gauge--center"], [1, "gauge--data", 3, "ngStyle"], [1, "gauge--needle"], [1, "gauge--labels", "mdl-typography--headline"], [1, "gauge--label__low"], [1, "gauge--label__spacer", 2, "text-align", "center", "font-size", "1.5rem", 3, "ngStyle"], [1, "gauge--label__high"], [1, "container-fluid", "primary-border", "my-5", "px-4"], [1, "d-flex", "mt-5", "pt-5", "justify-content-between"], [1, ""], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "outputs", "linearguageWrapper", "my-4", "cursor", 3, "click"], ["class", "secondary-card mx-3 py-4 h-100", 4, "ngFor", "ngForOf"], [1, "secondary-card", "mx-3", "py-4", "h-100"], [1, "chart-small-label", "mb-0"], [1, "badge", "badge-success", 2, "font-size", "10px"], [1, "chart-small-label"], [1, "traffic"], [1, "base"], [1, "actual", 3, "ngStyle"], [1, "tick", 3, "ngStyle", "tooltip"], [1, "target"], [1, "list-group-item", "linearguageWrapper", "my-4"], [1, "mb-0"], ["tooltip", "0", 1, "tick", 3, "ngStyle"]], template: function PriorityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PriorityComponent_a_8_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PriorityComponent_a_9_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PriorityComponent_div_10_Template, 7, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PriorityComponent_div_11_Template, 7, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Job Creation Index");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Increase Agricultural production while deploying productivity improvement measures");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, PriorityComponent_li_23_Template, 16, 3, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Deepen/Broaden the Agricultural chain through value addition");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, PriorityComponent_li_29_Template, 16, 3, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Ensure Affodability of Staple ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Foods");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, PriorityComponent_li_37_Template, 16, 3, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Priority ", ctx.priority == null ? null : ctx.priority.order, ": ", ctx.priority == null ? null : ctx.priority.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("as At ", ctx.date, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.priority == null ? null : ctx.priority.order) != 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.priority == null ? null : ctx.priority.order) == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.priority == null ? null : ctx.priority.lIndicators.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.output.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.drive1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.drive1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.drive1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipDirective"]], pipes: [_suffixes_pipe__WEBPACK_IMPORTED_MODULE_6__["SuffixesPipe"]], styles: [".primary-border[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  border-radius: 5px;\n}\n\n.tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n.tabs[_ngcontent-%COMP%]   .tab-color[_ngcontent-%COMP%] {\n  background: #A06220;\n  color: #c6c0b3;\n  border-radius: 2px;\n}\n\n.aggregation[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.mandate-label[_ngcontent-%COMP%] {\n  height: 16px;\n  overflow: hidden;\n}\n\n.projectmore[_ngcontent-%COMP%], .policymore[_ngcontent-%COMP%], .fundmore[_ngcontent-%COMP%] {\n  height: 140px;\n  transition: 0.3s all ease-in-out;\n  overflow: hidden;\n}\n\n.mdamore[_ngcontent-%COMP%] {\n  transition: 0.3s ease-in-out;\n  overflow: hidden;\n}\n\n@media (min-width: 768px) {\n  .horizontal-scroll[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\n    flex: 0 0 32.333333%;\n    max-width: 32.333333%;\n  }\n}\n\nsmall.chart-small-label[_ngcontent-%COMP%] {\n  font-size: smaller;\n}\n\n.outputs[_ngcontent-%COMP%] {\n  background-color: var(--secondary-card-bkg);\n  color: var(--font-color);\n  border-top: 1px solid #A06220 !important;\n  border-bottom: 1px solid #A06220 !important;\n  border-left: hidden;\n  border-right: hidden;\n  border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3ByaW9yaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHRTtFQUNFLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZKOztBQU9FO0VBQ0UsZ0JBQUE7QUFKSjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBOzs7RUFHRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBRUk7SUFDRSxvQkFBQTtJQUNBLHFCQUFBO0VBTko7QUFDRjs7QUFVQTtFQUNFLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSwyQ0FBQTtFQUNBLHdCQUFBO0VBRUEsd0NBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQVRGIiwiZmlsZSI6InByaW9yaXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaW1hcnktYm9yZGVyIHtcbiAgaDYge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxufVxuXG4udGFicyB7XG4gIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICBzcGFuOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuXG4gIC50YWItY29sb3Ige1xuICAgIGJhY2tncm91bmQ6ICNBMDYyMjA7XG4gICAgY29sb3I6ICNjNmMwYjM7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB9XG59XG5cbi5hZ2dyZWdhdGlvbiB7XG4gIGgxIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG59XG5cbi5tYW5kYXRlLWxhYmVsIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvamVjdG1vcmUsXG4ucG9saWN5bW9yZSxcbi5mdW5kbW9yZSB7XG4gIGhlaWdodDogMTQwcHg7XG4gIHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5tZGFtb3JlIHtcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2UtaW4tb3V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmhvcml6b250YWwtc2Nyb2xsIHtcbiAgICAuY29sLW1kLTQge1xuICAgICAgZmxleDogMCAwIDMyLjMzMzMzMyU7XG4gICAgICBtYXgtd2lkdGg6IDMyLjMzMzMzMyU7XG4gICAgfVxuICB9XG59XG5cbnNtYWxsLmNoYXJ0LXNtYWxsLWxhYmVsIHtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xufVxuXG4ub3V0cHV0cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jYXJkLWJrZyk7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgI0EwNjIyMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNBMDYyMjAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNBMDYyMjAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWxlZnQ6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIC8vIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC42MjVyZW07XG4gIC8vIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNjI1cmVtO1xuICAvLyBib3JkZXItdG9wOiBoaWRkZW47XG59XG5cbi5saXN0LWdyb3VwLWl0ZW06bGFzdC1jaGlsZCB7XG4gIC8vIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC42MjVyZW07XG4gIC8vIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNjI1cmVtO1xuICAvLyBib3JkZXItYm90dG9tOiBub25lO1xufVxuIl19 */"] });


/***/ }),

/***/ "sHMU":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-home2/dashboard-home.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardOutputHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardOutputHomeComponent", function() { return DashboardOutputHomeComponent; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/crud.service */ "+JMX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "Mfq2");
/* harmony import */ var _suffixes_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../suffixes.pipe */ "WHRT");








const _c0 = function (a0) { return { "background-color": a0 }; };
const _c1 = function (a0) { return { "color": a0 }; };
function DashboardOutputHomeComponent_6_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "small", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const item_r4 = ctx_r7.$implicit;
    const i_r5 = ctx_r7.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "gauge" + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", "gauge-container" + i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, ctx_r6.setColor(item_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 8, item_r4.baseline));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c1, ctx_r6.setColor(item_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 10, item_r4.actual));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 12, ctx_r6.prepareTarget(item_r4.target, 0).target));
} }
function DashboardOutputHomeComponent_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DashboardOutputHomeComponent_6_ng_template_0_Template, 21, 18, "ng-template", 24);
} if (rf & 2) {
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "id" + i_r5);
} }
const _c2 = function (a0) { return { "margin-left": a0 }; };
function DashboardOutputHomeComponent_owl_carousel_o_55_ng_container_1_ng_template_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "small", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardOutputHomeComponent_owl_carousel_o_55_ng_container_1_ng_template_1_div_4_Template_small_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const i_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4); return ctx_r14.gotoOutcome(i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", i_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 6, i_r13.baseline), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("tooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 8, i_r13.actual));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c2, ctx_r12.getPercentage(i_r13.actual, i_r13.baseline, i_r13.target, i_r13.aggregation) - 4 + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 10, ctx_r12.prepareTarget(i_r13.target, 0).target), "");
} }
function DashboardOutputHomeComponent_owl_carousel_o_55_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardOutputHomeComponent_owl_carousel_o_55_ng_container_1_ng_template_1_Template_h6_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const p_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.viewPriorityDetails(p_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardOutputHomeComponent_owl_carousel_o_55_ng_container_1_ng_template_1_div_4_Template, 12, 14, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "NB: Click Priority Title or Outcome Title To View More");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", p_r9.indicators.slice(0, 4));
} }
function DashboardOutputHomeComponent_owl_carousel_o_55_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardOutputHomeComponent_owl_carousel_o_55_ng_container_1_ng_template_1_Template, 9, 2, "ng-template", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ind_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", "id" + ind_r10);
} }
function DashboardOutputHomeComponent_owl_carousel_o_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "owl-carousel-o", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardOutputHomeComponent_owl_carousel_o_55_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.customOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.priorities);
} }
function DashboardOutputHomeComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " projects");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", item_r20.name.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r20.name.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r20.actual, "/", item_r20.total, "");
} }
function DashboardOutputHomeComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " policies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", item_r21.name.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r21.name.toLowerCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r21.actual, "/", item_r21.total, "");
} }
class DashboardOutputHomeComponent {
    constructor(crud, router) {
        this.crud = crud;
        this.router = router;
        this.noWrap = true;
        this.preffered = [];
        this.tab = 'revenue';
        this.pmore = false;
        this.mdamore = false;
        this.projectmore = false;
        this.policymore = false;
        this.fundmore = false;
        this.activeChart = 'priority';
        this.budgetPriority = false;
        const indicators = JSON.parse(localStorage.getItem('preffered'));
        if (indicators)
            this.indicator = indicators;
        this.getPriorities();
        this.initiateCarousel();
    }
    ngOnInit() {
        // this.initiatePriorityChart();
        this.initiateBudgetChart();
        this.pullFinancials();
        this.getMdas();
        // this.pullfinProductsByMdas();
        // this.pullfinPoliciesByMdas();
        // this.getIndicator();
    }
    initializeGuage(data) {
        const currentGuage = document.getElementsByClassName('gauge');
        for (let i = 0; i < data.length; i++) {
            const gauge = this.Gauge(currentGuage[i]);
            const target = this.prepareTarget(data[i].target, 0).target;
            const percent = (this.crud.calculatePercantage(data[i].actual, data[i].baseline, target, data[i].aggregation)) / 100;
            gauge.value(percent);
        }
    }
    prepareTarget(data, index) {
        if (data == null)
            return [];
        if (typeof data === 'number') {
            return { target: data };
        }
        const tar = JSON.parse(data);
        return tar[index];
    }
    Gauge(el) {
        // ##### Private Properties and Attributes
        let element, // Containing element for the info component
        data, // `.gauge--data` element
        needle, // `.gauge--needle` element
        value = 0.0, // Current gauge value from 0 to 1
        prop; // Style for transform
        // ##### Private Methods and Functions
        let setElement = function (el) {
            // Keep a reference to the various elements and sub-elements
            element = el;
            if (element !== undefined) {
                data = element.querySelector(".gauge--data");
                needle = element.querySelector(".gauge--needle");
            }
        };
        var setValue = function (x) {
            value = x;
            var turns = -0.5 + (x * 0.5);
            if (data != undefined) {
                data.style[prop] = "rotate(" + turns + "turn)";
                needle.style[prop] = "rotate(" + turns + "turn)";
            }
        };
        // ##### Object to be Returned
        var exports = {
            element: function (el) {
                if (!arguments.length) {
                    return element;
                }
                setElement(el);
                return this;
            },
            value: function (x) {
                if (!arguments.length) {
                    return value;
                }
                setValue(x);
                return this;
            }
        };
        // ##### Public API Methods
        // ##### Initialization
        var body = document.getElementsByTagName("body")[0];
        ["webkitTransform", "mozTransform", "msTransform", "oTransform", "transform"].
            forEach(function (p) {
            if (typeof body.style[p] !== "undefined") {
                prop = p;
            }
        });
        if (arguments.length) {
            setElement(el);
        }
        return exports;
    }
    viewPriorityDetails(p) {
        localStorage.setItem('priority', JSON.stringify(p));
        this.router.navigate(['/dashboard/priority']);
    }
    initiateChartInterativity(evt, array) {
        // let activeElement = this.testBudgetChart.getElementAtEvent(evt);
        // //console.log(activeElement);
        // this.testBudgetChart.clear()
        // this.testBudgetChart.destroy()
        let data = {
            labels: ['MDA1', 'MDA2', 'MDA3', 'MDA4', 'MDA5', 'MDA6'],
            datasets: [
                {
                    fill: false,
                    borderWidth: 1,
                    borderColor: "#56bc41",
                    data: [62, 64, 23, 87, 43, 78]
                },
            ]
        };
        this.testBudgetChart.data = data;
        this.testBudgetChart.update();
        // document.getElementById('replaceDataObject').addEventListener('click', function() {
        //   var newDataObject = {
        //     labels: ["January", "February", "March", "April", "May", "June", "July"],
        //     datasets: [{
        //       label: "My First dataset",
        //       fill: false,
        //       lineTension: 0.1,
        //       backgroundColor: "rgba(75,192,192,0.4)",
        //       borderColor: "rgba(75,192,192,1)",
        //       borderCapStyle: 'butt',
        //       borderDash: [],
        //       borderDashOffset: 0.0,
        //       borderJoinStyle: 'miter',
        //       pointBorderColor: "rgba(75,192,192,1)",
        //       pointBackgroundColor: "#fff",
        //       pointBorderWidth: 1,
        //       pointHoverRadius: 5,
        //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
        //       pointHoverBorderColor: "rgba(220,220,220,1)",
        //       pointHoverBorderWidth: 2,
        //       pointRadius: 1,
        //       pointHitRadius: 10,
        //       data: [100, 200, 300, 81, 56, 55, 40],
        //       spanGaps: false,
        //     }]
        //   };
        // //console.log(myLine.data);
        // // the newDataObject does not override myLine.data object: why???
        // myLine.data = newDataObject;
        // // ... but updating a single value works: why??? 
        // myLine.data.datasets[0].data[0] = 5000;
        // //console.log(myLine.data);
        // this.testBudgetChart.update();
        // });
    }
    initiatePriorityChart() {
        if (this.activeChart != 'priority') {
            this.activeChart = 'priority';
            this.budgetChart.clear();
            this.budgetChart.destroy();
        }
        setTimeout(() => {
            this.priorityChart = new Chart('myPriorityChart', {
                type: 'bar',
                data: {
                    labels: ['Priority 1', 'Priority 2', 'Priority 3', 'Priority 4', 'Priority 5', 'Priority 6', 'Priority 7', 'Priority 8', 'Priority 9'],
                    datasets: [
                        {
                            label: ['Priority 1', 'Priority 2', 'Priority 3', 'Priority 4', 'Priority 5', 'Priority 6', 'Priority 7', 'Priority 8', 'Priority 9'],
                            // label: ["Sntabilize the Macro Economic Environment", "Achieve Agriculture and Food Security", "Ensure Energy Sufficiency in Power and Petroleum Product", "Improve Transportation and Other Infrastructure", "Drive Industrilisation", "Improve health education and productivity of Nigerians", "Enhance social inclusion and reduce poverty", "Fight corruption and improve governance", "provide security for all citizens"],
                            borderWidth: 2,
                            borderColor: "#5bb85d",
                            backgroundColor: "#06aa4933",
                            data: [54, 34, 94, 62, 64, 23, 87, 43, 78]
                        },
                    ]
                },
                options: {
                    onClick: this.initiateChartInterativity.bind(this),
                    responsive: true,
                    scaleFontColor: "#FFFFFF",
                    legend: {
                        display: false,
                        labels: {
                            fontColor: "#f7f7f2",
                        }
                    },
                    tooltips: {
                        mode: 'index',
                        intersect: false,
                    },
                    hover: {
                        mode: 'nearest',
                        intersect: true
                    },
                    scales: {
                        xAxes: [{
                                display: true,
                                barPercentage: 0.4,
                                gridLines: {
                                    color: "#dadada4d"
                                },
                            }],
                        yAxes: [{
                                display: true,
                                gridLines: {
                                    color: "#dadada4d"
                                },
                            }],
                    }
                }
            });
        }, 200);
        // this.budgetCanvas = document.getElementById('myChart9');
        // this.budgetCanvas.onclick = function(evt) {
        //   //console.log(evt);
        //   var activePoints = this.budgetChart.getElementsAtEvent(evt);
        //   if (activePoints[0]) {
        //     var chartData = activePoints[0]['_chart'].config.data;
        //     var idx = activePoints[0]['_index'];
        //     var label = chartData.labels[idx];
        //     var value = chartData.datasets[0].data[idx];
        //     var url = "http://example.com/?label=" + label + "&value=" + value;
        //     //console.log(url);
        //     alert(url);
        //   }
        // };
    }
    initiateBudgetChart() {
        // if (this.activeChart != 'budget') {
        //   this.activeChart = 'budget';
        //   this.priorityChart.clear();
        //   this.priorityChart.destroy();
        // }
        // setTimeout(() => {
        this.budgetChart = new Chart('myBudgetChart', {
            type: 'bar',
            data: {
                labels: ['Priority 1', 'Priority 2', 'Priority 3', 'Priority 4', 'Priority 5', 'Priority 6', 'Priority 7', 'Priority 8', 'Priority 9'],
                datasets: [
                    {
                        label: "Appropriated",
                        borderColor: "#06AA49",
                        borderWidth: 2,
                        backgroundColor: "#06aa4933",
                        data: [54, 34, 94, 62, 64, 23, 87, 34, 52]
                    },
                    {
                        label: "Released",
                        borderColor: "#FEA041",
                        borderWidth: 2,
                        backgroundColor: "#fea0411f",
                        data: [62, 23, 73, 70, 46, 58, 38, 69, 98]
                    },
                    {
                        label: "Utilized",
                        borderColor: "#0277BD",
                        borderWidth: 2,
                        backgroundColor: "#0277bd1a",
                        data: [23, 31, 16, 45, 92, 37, 76, 80, 76]
                    },
                ]
            },
            options: {
                // onClick:this.initiateChartInterativity.bind(this),
                responsive: true,
                scaleFontColor: "#FFFFFF",
                legend: {
                    display: false,
                    labels: {
                        fontColor: "#f7f7f2",
                    }
                },
                scales: {
                    xAxes: [{
                            display: true,
                            barPercentage: 0.9,
                            categoryPercentage: 0.5,
                            gridLines: {
                                color: "#dadada4d"
                            },
                        }],
                    yAxes: [{
                            display: true,
                            gridLines: {
                                color: "#dadada4d"
                            },
                        }],
                }
            }
        });
        // }, 200);
    }
    getPercentage(actual, baseline, target, aggr) {
        const percentage = this.crud.calculatePercantage(actual, baseline, this.prepareTarget(target, 0).target, aggr);
        return percentage;
    }
    setColor(data) {
        this.initializeGuage(this.indicator);
        const target = this.prepareTarget(data.target, 0).target;
        const r = (this.crud.calculatePercantage(parseFloat(data.actual), parseFloat(data.baseline), parseFloat(target), data.aggregation));
        // console.log(r);
        if (r <= 33.3) {
            return 'red';
        }
        if (r > 33.3 && r <= 66.6) {
            return '#ffbf00';
        }
        if (r > 66.6) {
            return 'green';
        }
    }
    pullFinancials() {
        // console.log('pulling');
        const data = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
        {
          financials {
          data

          }
        }
      `;
        this.crud.pullData(data, {})
            .subscribe(result => {
            this.financials = JSON.parse(result.data["financials"].data);
            // this.assignCopy();
            // setInterval(() => {
            // 	// $('.usersTable').DataTable();
            // }, 2000);
            // console.log(this.financials);
        }, error => {
            // console.log(error)
            // this.toastr.error("Oops, we could not get you user's data, please check your network and try again", "Unsuccessful")
        });
    }
    calcPercentage(a, b) {
        let percent = a / b * 100;
        if (percent > 100)
            percent = 100;
        if (percent < 0)
            percent = 0;
        return percent + '%';
    }
    pullfinProductsByMdas() {
        const data = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
        {
          finProjectsByMdas {
          data
          }
        }
      `;
        this.crud.pullData(data, {})
            .subscribe(result => {
            this.finProjectsByMdas = JSON.parse(result.data["finProjectsByMdas"].data);
            // this.assignCopy();
            // setInterval(() => {
            // 	// $('.usersTable').DataTable();
            // }, 2000);
            // console.log(this.finProjectsByMdas);
        }, error => {
            // console.log(error)
            // this.toastr.error("Oops, we could not get you user's data, please check your network and try again", "Unsuccessful")
        });
    }
    pullfinPoliciesByMdas() {
        const data = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
        {
          finPoliciesByMdas {
          data
          }
        }
      `;
        this.crud.pullData(data, {})
            .subscribe(result => {
            this.finPoliciesByMdas = JSON.parse(result.data["finPoliciesByMdas"].data);
            // this.assignCopy();
            // setInterval(() => {
            // 	// $('.usersTable').DataTable();
            // }, 2000);
            // //console.log(this.finPoliciesByMdas);
        }, error => {
            // //console.log(error)
            // this.toastr.error("Oops, we could not get you user's data, please check your network and try again", "Unsuccessful")
        });
    }
    getMdas() {
        const data = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
    {
      mdas{
        id
        name
        indicators{
            id
            title
            ref
            type
            baseline
            actual
            target
            aggregation
            rt
            currency
            active
            mdaId
            outputs{
            id
            title
            ref
            baseline
            actual
            target
            aggregation
            rt
            currency
            active
            mda{
              id
              name
              shortcode
            }
          }
          }
        }
      }
  `;
        this.crud.pullData(data, {})
            .subscribe((result) => {
            // this.currentPriorities = ''
            this.mdas = result.data.mdas;
            // for (let el of this.mdas) {
            //   el.data = [...el.indicators];
            // }
            // console.log(this.mdas);
            // this.temp = result.data.priorities;
            // localStorage.setItem('priorities', JSON.stringify(this.priorities))
            // this.openModal()
        });
    }
    getPriorities() {
        const data = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
    {
      priorities{
        id
        title
        order
        indicators{
            id
            title
            ref
            type
            baseline
            actual
            target
            aggregation
            rt
            currency
            active
            mdaId
            driver
            outputs{
              id
              title
              ref
              baseline
              actual
              target
              aggregation
              rt
              currency
              active
              mdaId
              mda{
                id
                name
                shortcode
              }
              projects{
                id
                puid
                title
                ref
                budget
                type
                start_date
                end_date
                status
                state
                lga
                currency
                active
                userId
                logframes{
                  id
                  comments
                  challenges
                  outputValue
                  longitude
                  latitude
                  images
                  status
                  qow
                  loc
                  type
                  budget
                  approved
                  released
                  utilized
                  logframeStatus
                  project{
                    id
                    title
                  }

                 }

                mda{
                  id
                  name
                  shortcode
                }
              }
              mandates{
              id
              title
            }
            }
          }
        }
      }


  `;
        this.crud.pullData(data, {})
            .subscribe((result) => {
            this.priorities = result.data.priorities;
        });
    }
    gotoOutcome(item) {
        this.router.navigate(['/dashboard/outcome'], {
            state: {
                log: JSON.stringify(item)
            }
        });
    }
    initiateCarousel() {
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            autoplay: true,
            navText: ['<img src="assets/icons/001-left-chevron.svg">', '<img src="assets/icons/002-right-chevron.svg">'],
            nav: true,
            autoplayHoverPause: true,
            responsive: {
                740: {
                    items: 2
                },
                940: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        };
    }
}
DashboardOutputHomeComponent.ɵfac = function DashboardOutputHomeComponent_Factory(t) { return new (t || DashboardOutputHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DashboardOutputHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardOutputHomeComponent, selectors: [["app-dashboard-output-home"]], decls: 68, vars: 26, consts: [[1, "container-fluid", "my-5", "px-4"], [1, "d-flex", "justify-content-between"], [1, "mb-4"], [3, "options"], [4, "ngFor", "ngForOf"], [1, "d-flex"], [1, "col-md-9", "py-2", "pr-2", "pl-0"], [1, "primary-border", "p-4"], [1, "pb-5"], ["id", "myBudgetChart", "height", "88px"], [1, "col-md-3", "py-2", "pl-2", "pr-0", "text-center"], [1, "primary-border", "mb-4", "py-4", "px-3", "aggregation"], [1, "mb-0"], [1, "linearguageWrapper", "text-left"], [1, "traffic"], [1, "base"], [1, "tick", 3, "ngStyle", "tooltip"], [1, "target"], [3, "options", 4, "ngIf"], [1, "container-fluid", "px-4", "my-5"], [1, "p-4", "primary-border"], [1, "chart-title-label"], [1, "d-flex", "flex-wrap", "py-4", "text-center"], ["class", "col-md-3 px-2 mb-3", 4, "ngFor", "ngForOf"], ["carouselSlide", "", 3, "id"], [1, "px-2"], [1, "primary-border", "text-center", "p-3"], ["title", "Improve Transportation and Other Infrastructure", 1, "chart-small-label"], [1, "gauge", "gauge__liveupdate", "mt-3"], [1, "gauge--container"], [1, "gauge--marker"], [1, "gauge--background"], [1, "gauge--center"], [1, "gauge--data", 3, "ngStyle"], [1, "gauge--needle"], [1, "gauge--labels", "mdl-typography--headline"], [1, "gauge--label__low"], [1, "gauge--label__spacer", 2, "text-align", "center", "font-size", "1.5rem", 3, "ngStyle"], [1, "gauge--label__high"], [1, "px-2", "mb-3"], [1, "secondary-card", "px-3", "py-4"], [1, "chart-title-label", "text-center", "cursor", "mb-4", 3, "click"], ["class", "linearguageWrapper mb-4 py-3", 4, "ngFor", "ngForOf"], [1, "text-center", "text-success"], [1, "linearguageWrapper", "mb-4", "py-3"], [1, "chart-small-label", "cursor", "mb-2", 3, "title", "click"], [1, "col-md-3", "px-2", "mb-3"], [1, "p-2", "secondary-card"], [1, "chart-small-label", "text-capitalize", 3, "title"], ["title", "Stabilize the Macro Economic Environment", 1, "chart-small-label"]], template: function DashboardOutputHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Prioritized Indicators");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "owl-carousel-o", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DashboardOutputHomeComponent_6_Template, 1, 1, undefined, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Budget Breakdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "canvas", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Total Budget");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "suffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Total Budget Released");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "suffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " 0% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "suffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " 100% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Total Budget Utilised");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "suffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " 0% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "suffix");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " 100% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Presidential Priority Areas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, DashboardOutputHomeComponent_owl_carousel_o_55_Template, 2, 2, "owl-carousel-o", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "h6", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Project Financed by MDAs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, DashboardOutputHomeComponent_div_61_Template, 9, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h6", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Policies Financed by MDAs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](67, DashboardOutputHomeComponent_div_67_Template, 9, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.indicator);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20A6", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 12, ctx.financials == null ? null : ctx.financials.budget), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20A6", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 14, ctx.financials == null ? null : ctx.financials.released), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("tooltip", "\u20A6", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 16, ctx.financials == null ? null : ctx.financials.released), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c2, ctx.calcPercentage(ctx.financials == null ? null : ctx.financials.released, ctx.financials == null ? null : ctx.financials.budget)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u20A6", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 18, ctx.financials == null ? null : ctx.financials.utilized), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("tooltip", "\u20A6", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 20, ctx.financials == null ? null : ctx.financials.utilized), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c2, ctx.calcPercentage(ctx.financials == null ? null : ctx.financials.utilized, ctx.financials == null ? null : ctx.financials.released)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.priorities == null ? null : ctx.priorities.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.finProjectsByMdas);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.finPoliciesByMdas);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__["CarouselSlideDirective"]], pipes: [_suffixes_pipe__WEBPACK_IMPORTED_MODULE_7__["SuffixesPipe"]], styles: [".primary-border[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  border-radius: 5px;\n}\n\n.tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n.tabs[_ngcontent-%COMP%]   .tab-color[_ngcontent-%COMP%] {\n  background: #A06220;\n  color: #c6c0b3;\n  border-radius: 2px;\n}\n\n.aggregation[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.mandate-label[_ngcontent-%COMP%] {\n  height: 16px;\n  overflow: hidden;\n}\n\n.projectmore[_ngcontent-%COMP%], .policymore[_ngcontent-%COMP%], .fundmore[_ngcontent-%COMP%] {\n  height: 140px;\n  transition: 0.3s all ease-in-out;\n  overflow: hidden;\n}\n\n.mdamore[_ngcontent-%COMP%] {\n  height: 418px;\n  transition: 0.3s ease-in-out;\n  overflow: hidden;\n}\n\n@media (min-width: 768px) {\n  .horizontal-scroll[_ngcontent-%COMP%]   .col-md-4[_ngcontent-%COMP%] {\n    flex: 0 0 32.333333%;\n    max-width: 32.333333%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Rhc2hib2FyZC1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjs7QUFJQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHRTtFQUNFLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZKOztBQU9FO0VBQ0UsZ0JBQUE7QUFKSjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBOzs7RUFHRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTtFQUVJO0lBQ0Usb0JBQUE7SUFDQSxxQkFBQTtFQU5KO0FBQ0YiLCJmaWxlIjoiZGFzaGJvYXJkLWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbWFyeS1ib3JkZXIge1xuICBoNiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG5cbi50YWJzIHtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gIHNwYW46bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG5cbiAgLnRhYi1jb2xvciB7XG4gICAgYmFja2dyb3VuZDogI0EwNjIyMDtcbiAgICBjb2xvcjogI2M2YzBiMztcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gIH1cbn1cblxuLmFnZ3JlZ2F0aW9uIHtcbiAgaDEge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cblxuLm1hbmRhdGUtbGFiZWwge1xuICBoZWlnaHQ6IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wcm9qZWN0bW9yZSxcbi5wb2xpY3ltb3JlLFxuLmZ1bmRtb3JlIHtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgdHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1kYW1vcmUge1xuICBoZWlnaHQ6IDQxOHB4O1xuICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaG9yaXpvbnRhbC1zY3JvbGwge1xuICAgIC5jb2wtbWQtNCB7XG4gICAgICBmbGV4OiAwIDAgMzIuMzMzMzMzJTtcbiAgICAgIG1heC13aWR0aDogMzIuMzMzMzMzJTtcbiAgICB9XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/crud.service */ "+JMX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _suffixes_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../suffixes.pipe */ "WHRT");








function SearchComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SearchComponent_div_14_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const type_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.filter($event, type_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", type_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", type_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r3);
} }
function SearchComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6);
} }
function SearchComponent_div_19_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7.title, " ");
} }
function SearchComponent_div_19_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7.title, " ");
} }
function SearchComponent_div_19_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Baseline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "suffix");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Target");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "MDA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, item_r7.baseline), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 6, item_r7.actual), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 8, ctx_r10.prepareTarget(item_r7.target, 0).target), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7.mda == null ? null : item_r7.mda.shortcode, " ");
} }
function SearchComponent_div_19_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "MDA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7.mda.shortcode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7.status, " ");
} }
function SearchComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_div_19_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const item_r7 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.openProjectReports(item_r7, item_r7.output); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SearchComponent_div_19_span_8_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SearchComponent_div_19_span_9_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SearchComponent_div_19_div_10_Template, 32, 10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SearchComponent_div_19_div_11_Template, 25, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.__typename);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r7.__typename != "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r7.__typename == "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r7.__typename != "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r7.__typename == "Project");
} }
const _c0 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
class SearchComponent {
    constructor(crud, router, route) {
        this.crud = crud;
        this.router = router;
        this.route = route;
        this.types = ['Outcome', 'Output', 'Project'];
        this.filters = [];
    }
    ngOnInit() {
        this.route.paramMap.subscribe((param) => {
            this.query = param.params.query;
            console.log(this.query);
            this.search();
        });
    }
    search() {
        const data = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a `
    query search($query: String!,) { 
      search(query:$query) 
      {
      projects{
        id
        title
        score
        images
        status
        logframes{
                  id
                  comments
                  challenges
                  outputValue
                  longitude
                  latitude
                  images
                  status
                  qow
                  loc
                  type
                  budget
                  approved
                  released
                  utilized
                  logframeStatus
                  project{
                    id
                    title
                  }

                 }
        budget
        mda{
          shortcode
        }
        output {
          id
        title
        actual
        baseline
        target
        
        mandates  {
          id 
          title
        }
        }
      }
        outputs {
          id
        title
        score
        actual
        baseline
        target
        mda{
          shortcode
        }
        }
        indicators {
          id
        title
        score
        actual
        baseline
        target
        mda{
          shortcode
        }
        }
        results
  }
}
`;
        this.crud.pullData(data, { query: this.query })
            .subscribe((result) => {
            let res = [...result.data['search'].projects, ...result.data['search'].outputs, ...result.data['search'].indicators];
            this.results = res.sort((a, b) => b.score - a.score);
            this.reset();
            this.filter(null, 'All');
            console.log(this.results);
            this.resultsCount = result.data['search'].results;
            this.loaded = true;
        });
    }
    prepareTarget(data, index) {
        if (data == null)
            return [];
        let tar = JSON.parse(data);
        // //console.log(tar);
        return tar[index];
    }
    // openProjectReports(item) {
    //   this.router.navigate(['/home/project/project-report-log'], {
    //     state: {
    //       log: JSON.stringify(item)
    //     }
    //   })
    // }
    reset() {
        this.filtered = this.results;
    }
    filter(ev, type) {
        if (ev.currentTarget.checked) {
            console.log(ev, type);
            this.filters.push(type);
        }
        else {
            this.filters.splice(this.filters.indexOf(type), 1);
            if (this.filters.length == 0)
                this.filtered = this.results;
            return;
        }
        this.filtered = this.results.filter(res => this.filters.includes(res.__typename));
    }
    openProjectReports(item, ind) {
        this.router.navigate(['/dashboard/project-details'], {
            state: {
                log: JSON.stringify(item),
                output: JSON.stringify(ind)
            }
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 23, vars: 11, consts: [[1, "container-fluid"], [1, "m-3", "mr-5", "pr-5"], [1, "m-4"], [1, "row"], [1, "col-3"], [1, "filter", "primary-border"], [1, "list-unstyled", "p-3", "filter"], [1, "pt-4"], ["class", "cats", 4, "ngFor", "ngForOf"], [1, "col-9", "primary-border"], [1, "mt-3"], ["style", "background-color:#28a745; color:white !important; border-radius: 5px; font-size:11px;", "class", "d-inline-block p-1 mr-2   mb-2", 4, "ngFor", "ngForOf"], ["class", "card my-2", 4, "ngFor", "ngForOf"], [1, "text-center", "my-5"], [3, "pageChange"], [1, "cats"], ["type", "checkbox", "name", "type", "value", "", 1, "mr-3", 3, "id", "change"], [3, "for"], [1, "d-inline-block", "p-1", "mr-2", "mb-2", 2, "background-color", "#28a745", "color", "white !important", "border-radius", "5px", "font-size", "11px"], [1, "card", "my-2"], [1, "card-body", "cursor", 3, "click"], [1, "col-6"], [1, "badge"], [4, "ngIf"], ["class", "col-6 text-center d-flex align-items-center", 4, "ngIf"], [1, "col-6", "text-center", "d-flex", "align-items-center"], [1, "w-25"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SearchComponent_div_14_Template, 5, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Filter: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SearchComponent_span_18_Template, 2, 1, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SearchComponent_div_19_Template, 12, 5, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "pagination-controls", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function SearchComponent_Template_pagination_controls_pageChange_22_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Search Results: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, ctx.resultsCount || 0), " Results");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](20, 6, ctx.filtered, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.p)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DecimalPipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"], _suffixes_pipe__WEBPACK_IMPORTED_MODULE_7__["SuffixesPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-home/dashboard-home.component */ "lr2i");
/* harmony import */ var _all_outcomes_all_outcomes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-outcomes/all-outcomes.component */ "cQWv");
/* harmony import */ var _strategic_plan_strategic_plan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./strategic-plan/strategic-plan.component */ "nM3Y");
/* harmony import */ var _presidential_mandate_presidential_mandate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presidential-mandate/presidential-mandate.component */ "7TvS");
/* harmony import */ var _mda_mda_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mda/mda.component */ "a3qC");
/* harmony import */ var _account_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account/user-login/user-login.component */ "6nnL");
/* harmony import */ var _service_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/auth/auth.guard */ "nm/J");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settings/settings.component */ "70H3");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "/de2");
/* harmony import */ var _ews_ews_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ews/ews.component */ "CJl5");
/* harmony import */ var _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./project-details/project-details.component */ "OVWj");
/* harmony import */ var _output_output_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./output/output.component */ "z+Vf");
/* harmony import */ var _priority_priority_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./priority/priority.component */ "pZjM");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/search.component */ "tq2C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");


















const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _account_user_login_user_login_component__WEBPACK_IMPORTED_MODULE_7__["UserLoginComponent"]
    },
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        canActivate: [_service_auth_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_2__["DashboardHomeComponent"]
            },
            {
                path: 'early-warning',
                component: _ews_ews_component__WEBPACK_IMPORTED_MODULE_11__["EwsComponent"]
            },
            {
                path: 'system-settings',
                component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_9__["SettingsComponent"]
            },
            {
                path: 'user-profile',
                component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"]
            },
            {
                path: 'mda-dashboard/:data',
                component: _strategic_plan_strategic_plan_component__WEBPACK_IMPORTED_MODULE_4__["StrategicPlanComponent"]
            },
            {
                path: 'mandates',
                component: _presidential_mandate_presidential_mandate_component__WEBPACK_IMPORTED_MODULE_5__["PresidentialMandateComponent"],
            },
            {
                path: 'mandates/result',
                component: _mda_mda_component__WEBPACK_IMPORTED_MODULE_6__["MdaComponent"]
            },
            {
                path: 'project-details',
                component: _project_details_project_details_component__WEBPACK_IMPORTED_MODULE_12__["ProjectDetailsComponent"]
            },
            {
                path: 'outcome',
                component: _all_outcomes_all_outcomes_component__WEBPACK_IMPORTED_MODULE_3__["AllOutcomesComponent"]
            },
            {
                path: 'output',
                component: _output_output_component__WEBPACK_IMPORTED_MODULE_13__["OutputComponent"]
            },
            {
                path: 'priority/:id',
                component: _priority_priority_component__WEBPACK_IMPORTED_MODULE_14__["PriorityComponent"]
            },
            { path: 'search/:query', component: _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], data: { title: 'Search' } },
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy', useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vumz":
/*!******************************************!*\
  !*** ./src/app/all-outcomes/states.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"state\":{\"name\":\"Abia State\",\"id\":1,\"locals\":[{\"name\":\"Aba South\",\"id\":1},{\"name\":\"Arochukwu\",\"id\":2},{\"name\":\"Bende\",\"id\":3},{\"name\":\"Ikwuano\",\"id\":4},{\"name\":\"Isiala Ngwa North\",\"id\":5},{\"name\":\"Isiala Ngwa South\",\"id\":6},{\"name\":\"Isuikwuato\",\"id\":7},{\"name\":\"Obi Ngwa\",\"id\":8},{\"name\":\"Ohafia\",\"id\":9},{\"name\":\"Osisioma\",\"id\":10},{\"name\":\"Ugwunagbo\",\"id\":11},{\"name\":\"Ukwa East\",\"id\":12},{\"name\":\"Ukwa West\",\"id\":13},{\"name\":\"Umuahia North\",\"id\":14},{\"name\":\"Umuahia South\",\"id\":15},{\"name\":\"Umu Nneochi\",\"id\":16}]}},{\"state\":{\"name\":\"Adamawa State\",\"id\":2,\"locals\":[{\"name\":\"Fufure\",\"id\":1},{\"name\":\"Ganye\",\"id\":2},{\"name\":\"Gayuk\",\"id\":3},{\"name\":\"Gombi\",\"id\":4},{\"name\":\"Grie\",\"id\":5},{\"name\":\"Hong\",\"id\":6},{\"name\":\"Jada\",\"id\":7},{\"name\":\"Lamurde\",\"id\":8},{\"name\":\"Madagali\",\"id\":9},{\"name\":\"Maiha\",\"id\":10},{\"name\":\"Mayo Belwa\",\"id\":11},{\"name\":\"Michika\",\"id\":12},{\"name\":\"Mubi North\",\"id\":13},{\"name\":\"Mubi South\",\"id\":14},{\"name\":\"Numan\",\"id\":15},{\"name\":\"Shelleng\",\"id\":16},{\"name\":\"Song\",\"id\":17},{\"name\":\"Toungo\",\"id\":18},{\"name\":\"Yola North\",\"id\":19},{\"name\":\"Yola South\",\"id\":20}]}},{\"state\":{\"name\":\"Akwa Ibom State\",\"id\":3,\"locals\":[{\"name\":\"Eastern Obolo\",\"id\":1},{\"name\":\"Eket\",\"id\":2},{\"name\":\"Esit Eket\",\"id\":3},{\"name\":\"Essien Udim\",\"id\":4},{\"name\":\"Etim Ekpo\",\"id\":5},{\"name\":\"Etinan\",\"id\":6},{\"name\":\"Ibeno\",\"id\":7},{\"name\":\"Ibesikpo Asutan\",\"id\":8},{\"name\":\"Ibiono-Ibom\",\"id\":9},{\"name\":\"Ika\",\"id\":10},{\"name\":\"Ikono\",\"id\":11},{\"name\":\"Ikot Abasi\",\"id\":12},{\"name\":\"Ikot Ekpene\",\"id\":13},{\"name\":\"Ini\",\"id\":14},{\"name\":\"Itu\",\"id\":15},{\"name\":\"Mbo\",\"id\":16},{\"name\":\"Mkpat-Enin\",\"id\":17},{\"name\":\"Nsit-Atai\",\"id\":18},{\"name\":\"Nsit-Ibom\",\"id\":19},{\"name\":\"Nsit-Ubium\",\"id\":20},{\"name\":\"Obot Akara\",\"id\":21},{\"name\":\"Okobo\",\"id\":22},{\"name\":\"Onna\",\"id\":23},{\"name\":\"Oron\",\"id\":24},{\"name\":\"Oruk Anam\",\"id\":25},{\"name\":\"Udung-Uko\",\"id\":26},{\"name\":\"Ukanafun\",\"id\":27},{\"name\":\"Uruan\",\"id\":28},{\"name\":\"Urue-Offong/Oruko\",\"id\":29},{\"name\":\"Uyo\",\"id\":30}]}},{\"state\":{\"name\":\"Anambra State\",\"id\":4,\"locals\":[{\"name\":\"Anambra East\",\"id\":1},{\"name\":\"Anambra West\",\"id\":2},{\"name\":\"Anaocha\",\"id\":3},{\"name\":\"Awka North\",\"id\":4},{\"name\":\"Awka South\",\"id\":5},{\"name\":\"Ayamelum\",\"id\":6},{\"name\":\"Dunukofia\",\"id\":7},{\"name\":\"Ekwusigo\",\"id\":8},{\"name\":\"Idemili North\",\"id\":9},{\"name\":\"Idemili South\",\"id\":10},{\"name\":\"Ihiala\",\"id\":11},{\"name\":\"Njikoka\",\"id\":12},{\"name\":\"Nnewi North\",\"id\":13},{\"name\":\"Nnewi South\",\"id\":14},{\"name\":\"Ogbaru\",\"id\":15},{\"name\":\"Onitsha North\",\"id\":16},{\"name\":\"Onitsha South\",\"id\":17},{\"name\":\"Orumba North\",\"id\":18},{\"name\":\"Orumba South\",\"id\":19},{\"name\":\"Oyi\",\"id\":20}]}},{\"state\":{\"name\":\"Bauchi State\",\"id\":5,\"locals\":[{\"name\":\"Bauchi\",\"id\":1},{\"name\":\"Bogoro\",\"id\":2},{\"name\":\"Damban\",\"id\":3},{\"name\":\"Darazo\",\"id\":4},{\"name\":\"Dass\",\"id\":5},{\"name\":\"Gamawa\",\"id\":6},{\"name\":\"Ganjuwa\",\"id\":7},{\"name\":\"Giade\",\"id\":8},{\"name\":\"Itas/Gadau\",\"id\":9},{\"name\":\"Jama'are\",\"id\":10},{\"name\":\"Katagum\",\"id\":11},{\"name\":\"Kirfi\",\"id\":12},{\"name\":\"Misau\",\"id\":13},{\"name\":\"Ningi\",\"id\":14},{\"name\":\"Shira\",\"id\":15},{\"name\":\"Tafawa Balewa\",\"id\":16},{\"name\":\"Toro\",\"id\":17},{\"name\":\"Warji\",\"id\":18},{\"name\":\"Zaki\",\"id\":19}]}},{\"state\":{\"name\":\"Bayelsa State\",\"id\":6,\"locals\":[{\"name\":\"Ekeremor\",\"id\":1},{\"name\":\"Kolokuma/Opokuma\",\"id\":2},{\"name\":\"Nembe\",\"id\":3},{\"name\":\"Ogbia\",\"id\":4},{\"name\":\"Sagbama\",\"id\":5},{\"name\":\"Southern Ijaw\",\"id\":6},{\"name\":\"Yenagoa\",\"id\":7}]}},{\"state\":{\"name\":\"Benue State\",\"id\":7,\"locals\":[{\"name\":\"Apa\",\"id\":1},{\"name\":\"Ado\",\"id\":2},{\"name\":\"Buruku\",\"id\":3},{\"name\":\"Gboko\",\"id\":4},{\"name\":\"Guma\",\"id\":5},{\"name\":\"Gwer East\",\"id\":6},{\"name\":\"Gwer West\",\"id\":7},{\"name\":\"Katsina-Ala\",\"id\":8},{\"name\":\"Konshisha\",\"id\":9},{\"name\":\"Kwande\",\"id\":10},{\"name\":\"Logo\",\"id\":11},{\"name\":\"Makurdi\",\"id\":12},{\"name\":\"Obi\",\"id\":13},{\"name\":\"Ogbadibo\",\"id\":14},{\"name\":\"Ohimini\",\"id\":15},{\"name\":\"Oju\",\"id\":16},{\"name\":\"Okpokwu\",\"id\":17},{\"name\":\"Oturkpo\",\"id\":18},{\"name\":\"Tarka\",\"id\":19},{\"name\":\"Ukum\",\"id\":20},{\"name\":\"Ushongo\",\"id\":21},{\"name\":\"Vandeikya\",\"id\":22}]}},{\"state\":{\"name\":\"Borno State\",\"id\":8,\"locals\":[{\"name\":\"Askira/Uba\",\"id\":1},{\"name\":\"Bama\",\"id\":2},{\"name\":\"Bayo\",\"id\":3},{\"name\":\"Biu\",\"id\":4},{\"name\":\"Chibok\",\"id\":5},{\"name\":\"Damboa\",\"id\":6},{\"name\":\"Dikwa\",\"id\":7},{\"name\":\"Gubio\",\"id\":8},{\"name\":\"Guzamala\",\"id\":9},{\"name\":\"Gwoza\",\"id\":10},{\"name\":\"Hawul\",\"id\":11},{\"name\":\"Jere\",\"id\":12},{\"name\":\"Kaga\",\"id\":13},{\"name\":\"Kala/Balge\",\"id\":14},{\"name\":\"Konduga\",\"id\":15},{\"name\":\"Kukawa\",\"id\":16},{\"name\":\"Kwaya Kusar\",\"id\":17},{\"name\":\"Mafa\",\"id\":18},{\"name\":\"Magumeri\",\"id\":19},{\"name\":\"Maiduguri\",\"id\":20},{\"name\":\"Marte\",\"id\":21},{\"name\":\"Mobbar\",\"id\":22},{\"name\":\"Monguno\",\"id\":23},{\"name\":\"Ngala\",\"id\":24},{\"name\":\"Nganzai\",\"id\":25},{\"name\":\"Shani\",\"id\":26}]}},{\"state\":{\"name\":\"Cross River State\",\"id\":9,\"locals\":[{\"name\":\"Akamkpa\",\"id\":1},{\"name\":\"Akpabuyo\",\"id\":2},{\"name\":\"Bakassi\",\"id\":3},{\"name\":\"Bekwarra\",\"id\":4},{\"name\":\"Biase\",\"id\":5},{\"name\":\"Boki\",\"id\":6},{\"name\":\"Calabar Municipal\",\"id\":7},{\"name\":\"Calabar South\",\"id\":8},{\"name\":\"Etung\",\"id\":9},{\"name\":\"Ikom\",\"id\":10},{\"name\":\"Obanliku\",\"id\":11},{\"name\":\"Obubra\",\"id\":12},{\"name\":\"Obudu\",\"id\":13},{\"name\":\"Odukpani\",\"id\":14},{\"name\":\"Ogoja\",\"id\":15},{\"name\":\"Yakuur\",\"id\":16},{\"name\":\"Yala\",\"id\":17}]}},{\"state\":{\"name\":\"Delta State\",\"id\":10,\"locals\":[{\"name\":\"Aniocha South\",\"id\":1},{\"name\":\"Bomadi\",\"id\":2},{\"name\":\"Burutu\",\"id\":3},{\"name\":\"Ethiope East\",\"id\":4},{\"name\":\"Ethiope West\",\"id\":5},{\"name\":\"Ika North East\",\"id\":6},{\"name\":\"Ika South\",\"id\":7},{\"name\":\"Isoko North\",\"id\":8},{\"name\":\"Isoko South\",\"id\":9},{\"name\":\"Ndokwa East\",\"id\":10},{\"name\":\"Ndokwa West\",\"id\":11},{\"name\":\"Okpe\",\"id\":12},{\"name\":\"Oshimili North\",\"id\":13},{\"name\":\"Oshimili South\",\"id\":14},{\"name\":\"Patani\",\"id\":15},{\"name\":\"Sapele\",\"id\":16},{\"name\":\"Udu\",\"id\":17},{\"name\":\"Ughelli North\",\"id\":18},{\"name\":\"Ughelli South\",\"id\":19},{\"name\":\"Ukwuani\",\"id\":20},{\"name\":\"Uvwie\",\"id\":21},{\"name\":\"Warri North\",\"id\":22},{\"name\":\"Warri South\",\"id\":23},{\"name\":\"Warri South West\",\"id\":24}]}},{\"state\":{\"name\":\"Ebonyi State\",\"id\":11,\"locals\":[{\"name\":\"Afikpo North\",\"id\":1},{\"name\":\"Afikpo South\",\"id\":2},{\"name\":\"Ebonyi\",\"id\":3},{\"name\":\"Ezza North\",\"id\":4},{\"name\":\"Ezza South\",\"id\":5},{\"name\":\"Ikwo\",\"id\":6},{\"name\":\"Ishielu\",\"id\":7},{\"name\":\"Ivo\",\"id\":8},{\"name\":\"Izzi\",\"id\":9},{\"name\":\"Ohaozara\",\"id\":10},{\"name\":\"Ohaukwu\",\"id\":11},{\"name\":\"Onicha\",\"id\":12}]}},{\"state\":{\"name\":\"Edo State\",\"id\":12,\"locals\":[{\"name\":\"Egor\",\"id\":1},{\"name\":\"Esan Central\",\"id\":2},{\"name\":\"Esan North-East\",\"id\":3},{\"name\":\"Esan South-East\",\"id\":4},{\"name\":\"Esan West\",\"id\":5},{\"name\":\"Etsako Central\",\"id\":6},{\"name\":\"Etsako East\",\"id\":7},{\"name\":\"Etsako West\",\"id\":8},{\"name\":\"Igueben\",\"id\":9},{\"name\":\"Ikpoba Okha\",\"id\":10},{\"name\":\"Orhionmwon\",\"id\":11},{\"name\":\"Oredo\",\"id\":12},{\"name\":\"Ovia North-East\",\"id\":13},{\"name\":\"Ovia South-West\",\"id\":14},{\"name\":\"Owan East\",\"id\":15},{\"name\":\"Owan West\",\"id\":16},{\"name\":\"Uhunmwonde\",\"id\":17}]}},{\"state\":{\"name\":\"Ekiti State\",\"id\":13,\"locals\":[{\"name\":\"Efon\",\"id\":1},{\"name\":\"Ekiti East\",\"id\":2},{\"name\":\"Ekiti South-West\",\"id\":3},{\"name\":\"Ekiti West\",\"id\":4},{\"name\":\"Emure\",\"id\":5},{\"name\":\"Gbonyin\",\"id\":6},{\"name\":\"Ido Osi\",\"id\":7},{\"name\":\"Ijero\",\"id\":8},{\"name\":\"Ikere\",\"id\":9},{\"name\":\"Ikole\",\"id\":10},{\"name\":\"Ilejemeje\",\"id\":11},{\"name\":\"Irepodun/Ifelodun\",\"id\":12},{\"name\":\"Ise/Orun\",\"id\":13},{\"name\":\"Moba\",\"id\":14},{\"name\":\"Oye\",\"id\":15}]}},{\"state\":{\"name\":\"Enugu State\",\"id\":14,\"locals\":[{\"name\":\"Awgu\",\"id\":1},{\"name\":\"Enugu East\",\"id\":2},{\"name\":\"Enugu North\",\"id\":3},{\"name\":\"Enugu South\",\"id\":4},{\"name\":\"Ezeagu\",\"id\":5},{\"name\":\"Igbo Etiti\",\"id\":6},{\"name\":\"Igbo Eze North\",\"id\":7},{\"name\":\"Igbo Eze South\",\"id\":8},{\"name\":\"Isi Uzo\",\"id\":9},{\"name\":\"Nkanu East\",\"id\":10},{\"name\":\"Nkanu West\",\"id\":11},{\"name\":\"Nsukka\",\"id\":12},{\"name\":\"Oji River\",\"id\":13},{\"name\":\"Udenu\",\"id\":14},{\"name\":\"Udi\",\"id\":15},{\"name\":\"Uzo Uwani\",\"id\":16}]}},{\"state\":{\"name\":\"FCT\",\"id\":15,\"locals\":[{\"name\":\"Bwari\",\"id\":1},{\"name\":\"Gwagwalada\",\"id\":2},{\"name\":\"Kuje\",\"id\":3},{\"name\":\"Kwali\",\"id\":4},{\"name\":\"Municipal Area Council\",\"id\":5}]}},{\"state\":{\"name\":\"Gombe State\",\"id\":16,\"locals\":[{\"name\":\"Balanga\",\"id\":1},{\"name\":\"Billiri\",\"id\":2},{\"name\":\"Dukku\",\"id\":3},{\"name\":\"Funakaye\",\"id\":4},{\"name\":\"Gombe\",\"id\":5},{\"name\":\"Kaltungo\",\"id\":6},{\"name\":\"Kwami\",\"id\":7},{\"name\":\"Nafada\",\"id\":8},{\"name\":\"Shongom\",\"id\":9},{\"name\":\"Yamaltu/Deba\",\"id\":10}]}},{\"state\":{\"name\":\"Imo State\",\"id\":17,\"locals\":[{\"name\":\"Ahiazu Mbaise\",\"id\":1},{\"name\":\"Ehime Mbano\",\"id\":2},{\"name\":\"Ezinihitte\",\"id\":3},{\"name\":\"Ideato North\",\"id\":4},{\"name\":\"Ideato South\",\"id\":5},{\"name\":\"Ihitte/Uboma\",\"id\":6},{\"name\":\"Ikeduru\",\"id\":7},{\"name\":\"Isiala Mbano\",\"id\":8},{\"name\":\"Isu\",\"id\":9},{\"name\":\"Mbaitoli\",\"id\":10},{\"name\":\"Ngor Okpala\",\"id\":11},{\"name\":\"Njaba\",\"id\":12},{\"name\":\"Nkwerre\",\"id\":13},{\"name\":\"Nwangele\",\"id\":14},{\"name\":\"Obowo\",\"id\":15},{\"name\":\"Oguta\",\"id\":16},{\"name\":\"Ohaji/Egbema\",\"id\":17},{\"name\":\"Okigwe\",\"id\":18},{\"name\":\"Orlu\",\"id\":19},{\"name\":\"Orsu\",\"id\":20},{\"name\":\"Oru East\",\"id\":21},{\"name\":\"Oru West\",\"id\":22},{\"name\":\"Owerri Municipal\",\"id\":23},{\"name\":\"Owerri North\",\"id\":24},{\"name\":\"Owerri West\",\"id\":25},{\"name\":\"Unuimo\",\"id\":26}]}},{\"state\":{\"name\":\"Jigawa State\",\"id\":18,\"locals\":[{\"name\":\"Babura\",\"id\":1},{\"name\":\"Biriniwa\",\"id\":2},{\"name\":\"Birnin Kudu\",\"id\":3},{\"name\":\"Buji\",\"id\":4},{\"name\":\"Dutse\",\"id\":5},{\"name\":\"Gagarawa\",\"id\":6},{\"name\":\"Garki\",\"id\":7},{\"name\":\"Gumel\",\"id\":8},{\"name\":\"Guri\",\"id\":9},{\"name\":\"Gwaram\",\"id\":10},{\"name\":\"Gwiwa\",\"id\":11},{\"name\":\"Hadejia\",\"id\":12},{\"name\":\"Jahun\",\"id\":13},{\"name\":\"Kafin Hausa\",\"id\":14},{\"name\":\"Kazaure\",\"id\":15},{\"name\":\"Kiri Kasama\",\"id\":16},{\"name\":\"Kiyawa\",\"id\":17},{\"name\":\"Kaugama\",\"id\":18},{\"name\":\"Maigatari\",\"id\":19},{\"name\":\"Malam Madori\",\"id\":20},{\"name\":\"Miga\",\"id\":21},{\"name\":\"Ringim\",\"id\":22},{\"name\":\"Roni\",\"id\":23},{\"name\":\"Sule Tankarkar\",\"id\":24},{\"name\":\"Taura\",\"id\":25},{\"name\":\"Yankwashi\",\"id\":26}]}},{\"state\":{\"name\":\"Kaduna State\",\"id\":19,\"locals\":[{\"name\":\"Chikun\",\"id\":1},{\"name\":\"Giwa\",\"id\":2},{\"name\":\"Igabi\",\"id\":3},{\"name\":\"Ikara\",\"id\":4},{\"name\":\"Jaba\",\"id\":5},{\"name\":\"Jema'a\",\"id\":6},{\"name\":\"Kachia\",\"id\":7},{\"name\":\"Kaduna North\",\"id\":8},{\"name\":\"Kaduna South\",\"id\":9},{\"name\":\"Kagarko\",\"id\":10},{\"name\":\"Kajuru\",\"id\":11},{\"name\":\"Kaura\",\"id\":12},{\"name\":\"Kauru\",\"id\":13},{\"name\":\"Kubau\",\"id\":14},{\"name\":\"Kudan\",\"id\":15},{\"name\":\"Lere\",\"id\":16},{\"name\":\"Makarfi\",\"id\":17},{\"name\":\"Sabon Gari\",\"id\":18},{\"name\":\"Sanga\",\"id\":19},{\"name\":\"Soba\",\"id\":20},{\"name\":\"Zangon Kataf\",\"id\":21},{\"name\":\"Zaria\",\"id\":22}]}},{\"state\":{\"name\":\"Kano State\",\"id\":20,\"locals\":[{\"name\":\"Albasu\",\"id\":1},{\"name\":\"Bagwai\",\"id\":2},{\"name\":\"Bebeji\",\"id\":3},{\"name\":\"Bichi\",\"id\":4},{\"name\":\"Bunkure\",\"id\":5},{\"name\":\"Dala\",\"id\":6},{\"name\":\"Dambatta\",\"id\":7},{\"name\":\"Dawakin Kudu\",\"id\":8},{\"name\":\"Dawakin Tofa\",\"id\":9},{\"name\":\"Doguwa\",\"id\":10},{\"name\":\"Fagge\",\"id\":11},{\"name\":\"Gabasawa\",\"id\":12},{\"name\":\"Garko\",\"id\":13},{\"name\":\"Garun Mallam\",\"id\":14},{\"name\":\"Gaya\",\"id\":15},{\"name\":\"Gezawa\",\"id\":16},{\"name\":\"Gwale\",\"id\":17},{\"name\":\"Gwarzo\",\"id\":18},{\"name\":\"Kabo\",\"id\":19},{\"name\":\"Kano Municipal\",\"id\":20},{\"name\":\"Karaye\",\"id\":21},{\"name\":\"Kibiya\",\"id\":22},{\"name\":\"Kiru\",\"id\":23},{\"name\":\"Kumbotso\",\"id\":24},{\"name\":\"Kunchi\",\"id\":25},{\"name\":\"Kura\",\"id\":26},{\"name\":\"Madobi\",\"id\":27},{\"name\":\"Makoda\",\"id\":28},{\"name\":\"Minjibir\",\"id\":29},{\"name\":\"Nasarawa\",\"id\":30},{\"name\":\"Rano\",\"id\":31},{\"name\":\"Rimin Gado\",\"id\":32},{\"name\":\"Rogo\",\"id\":33},{\"name\":\"Shanono\",\"id\":34},{\"name\":\"Sumaila\",\"id\":35},{\"name\":\"Takai\",\"id\":36},{\"name\":\"Tarauni\",\"id\":37},{\"name\":\"Tofa\",\"id\":38},{\"name\":\"Tsanyawa\",\"id\":39},{\"name\":\"Tudun Wada\",\"id\":40},{\"name\":\"Ungogo\",\"id\":41},{\"name\":\"Warawa\",\"id\":42},{\"name\":\"Wudil\",\"id\":43}]}},{\"state\":{\"name\":\"Katsina State\",\"id\":21,\"locals\":[{\"name\":\"Batagarawa\",\"id\":1},{\"name\":\"Batsari\",\"id\":2},{\"name\":\"Baure\",\"id\":3},{\"name\":\"Bindawa\",\"id\":4},{\"name\":\"Charanchi\",\"id\":5},{\"name\":\"Dandume\",\"id\":6},{\"name\":\"Danja\",\"id\":7},{\"name\":\"Dan Musa\",\"id\":8},{\"name\":\"Daura\",\"id\":9},{\"name\":\"Dutsi\",\"id\":10},{\"name\":\"Dutsin Ma\",\"id\":11},{\"name\":\"Faskari\",\"id\":12},{\"name\":\"Funtua\",\"id\":13},{\"name\":\"Ingawa\",\"id\":14},{\"name\":\"Jibia\",\"id\":15},{\"name\":\"Kafur\",\"id\":16},{\"name\":\"Kaita\",\"id\":17},{\"name\":\"Kankara\",\"id\":18},{\"name\":\"Kankia\",\"id\":19},{\"name\":\"Katsina\",\"id\":20},{\"name\":\"Kurfi\",\"id\":21},{\"name\":\"Kusada\",\"id\":22},{\"name\":\"Mai'Adua\",\"id\":23},{\"name\":\"Malumfashi\",\"id\":24},{\"name\":\"Mani\",\"id\":25},{\"name\":\"Mashi\",\"id\":26},{\"name\":\"Matazu\",\"id\":27},{\"name\":\"Musawa\",\"id\":28},{\"name\":\"Rimi\",\"id\":29},{\"name\":\"Sabuwa\",\"id\":30},{\"name\":\"Safana\",\"id\":31},{\"name\":\"Sandamu\",\"id\":32},{\"name\":\"Zango\",\"id\":33}]}},{\"state\":{\"name\":\"Kebbi State\",\"id\":22,\"locals\":[{\"name\":\"Arewa Dandi\",\"id\":1},{\"name\":\"Argungu\",\"id\":2},{\"name\":\"Augie\",\"id\":3},{\"name\":\"Bagudo\",\"id\":4},{\"name\":\"Birnin Kebbi\",\"id\":5},{\"name\":\"Bunza\",\"id\":6},{\"name\":\"Dandi\",\"id\":7},{\"name\":\"Fakai\",\"id\":8},{\"name\":\"Gwandu\",\"id\":9},{\"name\":\"Jega\",\"id\":10},{\"name\":\"Kalgo\",\"id\":11},{\"name\":\"Koko/Besse\",\"id\":12},{\"name\":\"Maiyama\",\"id\":13},{\"name\":\"Ngaski\",\"id\":14},{\"name\":\"Sakaba\",\"id\":15},{\"name\":\"Shanga\",\"id\":16},{\"name\":\"Suru\",\"id\":17},{\"name\":\"Wasagu/Danko\",\"id\":18},{\"name\":\"Yauri\",\"id\":19},{\"name\":\"Zuru\",\"id\":20}]}},{\"state\":{\"name\":\"Kogi State\",\"id\":23,\"locals\":[{\"name\":\"Ajaokuta\",\"id\":1},{\"name\":\"Ankpa\",\"id\":2},{\"name\":\"Bassa\",\"id\":3},{\"name\":\"Dekina\",\"id\":4},{\"name\":\"Ibaji\",\"id\":5},{\"name\":\"Idah\",\"id\":6},{\"name\":\"Igalamela Odolu\",\"id\":7},{\"name\":\"Ijumu\",\"id\":8},{\"name\":\"Kabba/Bunu\",\"id\":9},{\"name\":\"Kogi\",\"id\":10},{\"name\":\"Lokoja\",\"id\":11},{\"name\":\"Mopa Muro\",\"id\":12},{\"name\":\"Ofu\",\"id\":13},{\"name\":\"Ogori/Magongo\",\"id\":14},{\"name\":\"Okehi\",\"id\":15},{\"name\":\"Okene\",\"id\":16},{\"name\":\"Olamaboro\",\"id\":17},{\"name\":\"Omala\",\"id\":18},{\"name\":\"Yagba East\",\"id\":19},{\"name\":\"Yagba West\",\"id\":20}]}},{\"state\":{\"name\":\"Kwara State\",\"id\":24,\"locals\":[{\"name\":\"Baruten\",\"id\":1},{\"name\":\"Edu\",\"id\":2},{\"name\":\"Ekiti\",\"id\":3},{\"name\":\"Ifelodun\",\"id\":4},{\"name\":\"Ilorin East\",\"id\":5},{\"name\":\"Ilorin South\",\"id\":6},{\"name\":\"Ilorin West\",\"id\":7},{\"name\":\"Irepodun\",\"id\":8},{\"name\":\"Isin\",\"id\":9},{\"name\":\"Kaiama\",\"id\":10},{\"name\":\"Moro\",\"id\":11},{\"name\":\"Offa\",\"id\":12},{\"name\":\"Oke Ero\",\"id\":13},{\"name\":\"Oyun\",\"id\":14},{\"name\":\"Pategi\",\"id\":15}]}},{\"state\":{\"name\":\"Lagos State\",\"id\":25,\"locals\":[{\"name\":\"Ajeromi-Ifelodun\",\"id\":1},{\"name\":\"Alimosho\",\"id\":2},{\"name\":\"Amuwo-Odofin\",\"id\":3},{\"name\":\"Apapa\",\"id\":4},{\"name\":\"Badagry\",\"id\":5},{\"name\":\"Epe\",\"id\":6},{\"name\":\"Eti Osa\",\"id\":7},{\"name\":\"Ibeju-Lekki\",\"id\":8},{\"name\":\"Ifako-Ijaiye\",\"id\":9},{\"name\":\"Ikeja\",\"id\":10},{\"name\":\"Ikorodu\",\"id\":11},{\"name\":\"Kosofe\",\"id\":12},{\"name\":\"Lagos Island\",\"id\":13},{\"name\":\"Lagos Mainland\",\"id\":14},{\"name\":\"Mushin\",\"id\":15},{\"name\":\"Ojo\",\"id\":16},{\"name\":\"Oshodi-Isolo\",\"id\":17},{\"name\":\"Shomolu\",\"id\":18},{\"name\":\"Surulere\",\"id\":19}]}},{\"state\":{\"name\":\"Nasarawa State\",\"id\":26,\"locals\":[{\"name\":\"Awe\",\"id\":1},{\"name\":\"Doma\",\"id\":2},{\"name\":\"Karu\",\"id\":3},{\"name\":\"Keana\",\"id\":4},{\"name\":\"Keffi\",\"id\":5},{\"name\":\"Kokona\",\"id\":6},{\"name\":\"Lafia\",\"id\":7},{\"name\":\"Nasarawa\",\"id\":8},{\"name\":\"Nasarawa Egon\",\"id\":9},{\"name\":\"Obi\",\"id\":10},{\"name\":\"Toto\",\"id\":11},{\"name\":\"Wamba\",\"id\":12}]}},{\"state\":{\"name\":\"Niger State\",\"id\":27,\"locals\":[{\"name\":\"Agwara\",\"id\":1},{\"name\":\"Bida\",\"id\":2},{\"name\":\"Borgu\",\"id\":3},{\"name\":\"Bosso\",\"id\":4},{\"name\":\"Chanchaga\",\"id\":5},{\"name\":\"Edati\",\"id\":6},{\"name\":\"Gbako\",\"id\":7},{\"name\":\"Gurara\",\"id\":8},{\"name\":\"Katcha\",\"id\":9},{\"name\":\"Kontagora\",\"id\":10},{\"name\":\"Lapai\",\"id\":11},{\"name\":\"Lavun\",\"id\":12},{\"name\":\"Magama\",\"id\":13},{\"name\":\"Mariga\",\"id\":14},{\"name\":\"Mashegu\",\"id\":15},{\"name\":\"Mokwa\",\"id\":16},{\"name\":\"Moya\",\"id\":17},{\"name\":\"Paikoro\",\"id\":18},{\"name\":\"Rafi\",\"id\":19},{\"name\":\"Rijau\",\"id\":20},{\"name\":\"Shiroro\",\"id\":21},{\"name\":\"Suleja\",\"id\":22},{\"name\":\"Tafa\",\"id\":23},{\"name\":\"Wushishi\",\"id\":24}]}},{\"state\":{\"name\":\"Ogun State\",\"id\":28,\"locals\":[{\"name\":\"Abeokuta South\",\"id\":1},{\"name\":\"Ado-Odo/Ota\",\"id\":2},{\"name\":\"Egbado North\",\"id\":3},{\"name\":\"Egbado South\",\"id\":4},{\"name\":\"Ewekoro\",\"id\":5},{\"name\":\"Ifo\",\"id\":6},{\"name\":\"Ijebu East\",\"id\":7},{\"name\":\"Ijebu North\",\"id\":8},{\"name\":\"Ijebu North East\",\"id\":9},{\"name\":\"Ijebu Ode\",\"id\":10},{\"name\":\"Ikenne\",\"id\":11},{\"name\":\"Imeko Afon\",\"id\":12},{\"name\":\"Ipokia\",\"id\":13},{\"name\":\"Obafemi Owode\",\"id\":14},{\"name\":\"Odeda\",\"id\":15},{\"name\":\"Odogbolu\",\"id\":16},{\"name\":\"Ogun Waterside\",\"id\":17},{\"name\":\"Remo North\",\"id\":18},{\"name\":\"Shagamu\",\"id\":19}]}},{\"state\":{\"name\":\"Ondo State\",\"id\":29,\"locals\":[{\"name\":\"Akoko North-West\",\"id\":1},{\"name\":\"Akoko South-West\",\"id\":2},{\"name\":\"Akoko South-East\",\"id\":3},{\"name\":\"Akure North\",\"id\":4},{\"name\":\"Akure South\",\"id\":5},{\"name\":\"Ese Odo\",\"id\":6},{\"name\":\"Idanre\",\"id\":7},{\"name\":\"Ifedore\",\"id\":8},{\"name\":\"Ilaje\",\"id\":9},{\"name\":\"Ile Oluji/Okeigbo\",\"id\":10},{\"name\":\"Irele\",\"id\":11},{\"name\":\"Odigbo\",\"id\":12},{\"name\":\"Okitipupa\",\"id\":13},{\"name\":\"Ondo East\",\"id\":14},{\"name\":\"Ondo West\",\"id\":15},{\"name\":\"Ose\",\"id\":16},{\"name\":\"Owo\",\"id\":17}]}},{\"state\":{\"name\":\"Osun State\",\"id\":30,\"locals\":[{\"name\":\"Atakunmosa West\",\"id\":1},{\"name\":\"Aiyedaade\",\"id\":2},{\"name\":\"Aiyedire\",\"id\":3},{\"name\":\"Boluwaduro\",\"id\":4},{\"name\":\"Boripe\",\"id\":5},{\"name\":\"Ede North\",\"id\":6},{\"name\":\"Ede South\",\"id\":7},{\"name\":\"Ife Central\",\"id\":8},{\"name\":\"Ife East\",\"id\":9},{\"name\":\"Ife North\",\"id\":10},{\"name\":\"Ife South\",\"id\":11},{\"name\":\"Egbedore\",\"id\":12},{\"name\":\"Ejigbo\",\"id\":13},{\"name\":\"Ifedayo\",\"id\":14},{\"name\":\"Ifelodun\",\"id\":15},{\"name\":\"Ila\",\"id\":16},{\"name\":\"Ilesa East\",\"id\":17},{\"name\":\"Ilesa West\",\"id\":18},{\"name\":\"Irepodun\",\"id\":19},{\"name\":\"Irewole\",\"id\":20},{\"name\":\"Isokan\",\"id\":21},{\"name\":\"Iwo\",\"id\":22},{\"name\":\"Obokun\",\"id\":23},{\"name\":\"Odo Otin\",\"id\":24},{\"name\":\"Ola Oluwa\",\"id\":25},{\"name\":\"Olorunda\",\"id\":26},{\"name\":\"Oriade\",\"id\":27},{\"name\":\"Orolu\",\"id\":28},{\"name\":\"Osogbo\",\"id\":29}]}},{\"state\":{\"name\":\"Oyo State\",\"id\":31,\"locals\":[{\"name\":\"Akinyele\",\"id\":1},{\"name\":\"Atiba\",\"id\":2},{\"name\":\"Atisbo\",\"id\":3},{\"name\":\"Egbeda\",\"id\":4},{\"name\":\"Ibadan North\",\"id\":5},{\"name\":\"Ibadan North-East\",\"id\":6},{\"name\":\"Ibadan North-West\",\"id\":7},{\"name\":\"Ibadan South-East\",\"id\":8},{\"name\":\"Ibadan South-West\",\"id\":9},{\"name\":\"Ibarapa Central\",\"id\":10},{\"name\":\"Ibarapa East\",\"id\":11},{\"name\":\"Ibarapa North\",\"id\":12},{\"name\":\"Ido\",\"id\":13},{\"name\":\"Irepo\",\"id\":14},{\"name\":\"Iseyin\",\"id\":15},{\"name\":\"Itesiwaju\",\"id\":16},{\"name\":\"Iwajowa\",\"id\":17},{\"name\":\"Kajola\",\"id\":18},{\"name\":\"Lagelu\",\"id\":19},{\"name\":\"Ogbomosho North\",\"id\":20},{\"name\":\"Ogbomosho South\",\"id\":21},{\"name\":\"Ogo Oluwa\",\"id\":22},{\"name\":\"Olorunsogo\",\"id\":23},{\"name\":\"Oluyole\",\"id\":24},{\"name\":\"Ona Ara\",\"id\":25},{\"name\":\"Orelope\",\"id\":26},{\"name\":\"Ori Ire\",\"id\":27},{\"name\":\"Oyo\",\"id\":28},{\"name\":\"Oyo East\",\"id\":29},{\"name\":\"Saki East\",\"id\":30},{\"name\":\"Saki West\",\"id\":31},{\"name\":\"Surulere\",\"id\":32}]}},{\"state\":{\"name\":\"Plateau State\",\"id\":32,\"locals\":[{\"name\":\"Barkin Ladi\",\"id\":1},{\"name\":\"Bassa\",\"id\":2},{\"name\":\"Jos East\",\"id\":3},{\"name\":\"Jos North\",\"id\":4},{\"name\":\"Jos South\",\"id\":5},{\"name\":\"Kanam\",\"id\":6},{\"name\":\"Kanke\",\"id\":7},{\"name\":\"Langtang South\",\"id\":8},{\"name\":\"Langtang North\",\"id\":9},{\"name\":\"Mangu\",\"id\":10},{\"name\":\"Mikang\",\"id\":11},{\"name\":\"Pankshin\",\"id\":12},{\"name\":\"Qua'an Pan\",\"id\":13},{\"name\":\"Riyom\",\"id\":14},{\"name\":\"Shendam\",\"id\":15},{\"name\":\"Wase\",\"id\":16}]}},{\"state\":{\"name\":\"Rivers State\",\"id\":33,\"locals\":[{\"name\":\"Ahoada East\",\"id\":1},{\"name\":\"Ahoada West\",\"id\":2},{\"name\":\"Akuku-Toru\",\"id\":3},{\"name\":\"Andoni\",\"id\":4},{\"name\":\"Asari-Toru\",\"id\":5},{\"name\":\"Bonny\",\"id\":6},{\"name\":\"Degema\",\"id\":7},{\"name\":\"Eleme\",\"id\":8},{\"name\":\"Emuoha\",\"id\":9},{\"name\":\"Etche\",\"id\":10},{\"name\":\"Gokana\",\"id\":11},{\"name\":\"Ikwerre\",\"id\":12},{\"name\":\"Khana\",\"id\":13},{\"name\":\"Obio/Akpor\",\"id\":14},{\"name\":\"Ogba/Egbema/Ndoni\",\"id\":15},{\"name\":\"Ogu/Bolo\",\"id\":16},{\"name\":\"Okrika\",\"id\":17},{\"name\":\"Omuma\",\"id\":18},{\"name\":\"Opobo/Nkoro\",\"id\":19},{\"name\":\"Oyigbo\",\"id\":20},{\"name\":\"Port Harcourt\",\"id\":21},{\"name\":\"Tai\",\"id\":22}]}},{\"state\":{\"name\":\"Sokoto State\",\"id\":34,\"locals\":[{\"name\":\"Bodinga\",\"id\":1},{\"name\":\"Dange Shuni\",\"id\":2},{\"name\":\"Gada\",\"id\":3},{\"name\":\"Goronyo\",\"id\":4},{\"name\":\"Gudu\",\"id\":5},{\"name\":\"Gwadabawa\",\"id\":6},{\"name\":\"Illela\",\"id\":7},{\"name\":\"Isa\",\"id\":8},{\"name\":\"Kebbe\",\"id\":9},{\"name\":\"Kware\",\"id\":10},{\"name\":\"Rabah\",\"id\":11},{\"name\":\"Sabon Birni\",\"id\":12},{\"name\":\"Shagari\",\"id\":13},{\"name\":\"Silame\",\"id\":14},{\"name\":\"Sokoto North\",\"id\":15},{\"name\":\"Sokoto South\",\"id\":16},{\"name\":\"Tambuwal\",\"id\":17},{\"name\":\"Tangaza\",\"id\":18},{\"name\":\"Tureta\",\"id\":19},{\"name\":\"Wamako\",\"id\":20},{\"name\":\"Wurno\",\"id\":21},{\"name\":\"Yabo\",\"id\":22}]}},{\"state\":{\"name\":\"Taraba State\",\"id\":35,\"locals\":[{\"name\":\"Bali\",\"id\":1},{\"name\":\"Donga\",\"id\":2},{\"name\":\"Gashaka\",\"id\":3},{\"name\":\"Gassol\",\"id\":4},{\"name\":\"Ibi\",\"id\":5},{\"name\":\"Jalingo\",\"id\":6},{\"name\":\"Karim Lamido\",\"id\":7},{\"name\":\"Kumi\",\"id\":8},{\"name\":\"Lau\",\"id\":9},{\"name\":\"Sardauna\",\"id\":10},{\"name\":\"Takum\",\"id\":11},{\"name\":\"Ussa\",\"id\":12},{\"name\":\"Wukari\",\"id\":13},{\"name\":\"Yorro\",\"id\":14},{\"name\":\"Zing\",\"id\":15}]}},{\"state\":{\"name\":\"Yobe State\",\"id\":36,\"locals\":[{\"name\":\"Bursari\",\"id\":1},{\"name\":\"Damaturu\",\"id\":2},{\"name\":\"Fika\",\"id\":3},{\"name\":\"Fune\",\"id\":4},{\"name\":\"Geidam\",\"id\":5},{\"name\":\"Gujba\",\"id\":6},{\"name\":\"Gulani\",\"id\":7},{\"name\":\"Jakusko\",\"id\":8},{\"name\":\"Karasuwa\",\"id\":9},{\"name\":\"Machina\",\"id\":10},{\"name\":\"Nangere\",\"id\":11},{\"name\":\"Nguru\",\"id\":12},{\"name\":\"Potiskum\",\"id\":13},{\"name\":\"Tarmuwa\",\"id\":14},{\"name\":\"Yunusari\",\"id\":15},{\"name\":\"Yusufari\",\"id\":16}]}},{\"state\":{\"name\":\"Zamfara State\",\"id\":37,\"locals\":[{\"name\":\"Bakura\",\"id\":1},{\"name\":\"Birnin Magaji/Kiyaw\",\"id\":2},{\"name\":\"Bukkuyum\",\"id\":3},{\"name\":\"Bungudu\",\"id\":4},{\"name\":\"Gummi\",\"id\":5},{\"name\":\"Gusau\",\"id\":6},{\"name\":\"Kaura Namoda\",\"id\":7},{\"name\":\"Maradun\",\"id\":8},{\"name\":\"Maru\",\"id\":9},{\"name\":\"Shinkafi\",\"id\":10},{\"name\":\"Talata Mafara\",\"id\":11},{\"name\":\"Chafe\",\"id\":12},{\"name\":\"Zurmi\",\"id\":13}]}}]");

/***/ }),

/***/ "z+Vf":
/*!********************************************!*\
  !*** ./src/app/output/output.component.ts ***!
  \********************************************/
/*! exports provided: OutputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputComponent", function() { return OutputComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _all_outcomes_states_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../all-outcomes/states.json */ "vumz");
var _all_outcomes_states_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../all-outcomes/states.json */ "vumz", 1);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/crud.service */ "+JMX");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-moment */ "QUrN");











function OutputComponent_ul_57_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OutputComponent_ul_57_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const item_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.filterByMda(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.name);
} }
function OutputComponent_ul_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, OutputComponent_ul_57_li_1_Template, 3, 1, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.mdas);
} }
function OutputComponent_ul_62_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OutputComponent_ul_62_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const item_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r12.filterByState(item_r11.state); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r11.state.name);
} }
function OutputComponent_ul_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, OutputComponent_ul_62_li_1_Template, 3, 1, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.states);
} }
function OutputComponent_p_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No projects available");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function OutputComponent_table_68_tr_20_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function OutputComponent_table_68_tr_20_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "on": a0, "ab": a1, "cp": a2 }; };
function OutputComponent_table_68_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, OutputComponent_table_68_tr_20_span_4_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, OutputComponent_table_68_tr_20_span_5_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "amDateFormat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "amFromUtc");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "small", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "em", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OutputComponent_table_68_tr_20_Template_em_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const item_r15 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r19.openProjectReports(item_r15, ctx_r19.outputData.output); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](1 + i_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r15.flag);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r15.warning);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r15.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20A6", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 10, item_r15.budget), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r15.mda.shortcode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r15.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 15, item_r15.start_date), "YYYY-MM-DD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](17, _c0, item_r15.status == "Ongoing", item_r15.status == "Abandoned", item_r15.status == "Completed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r15.status, "");
} }
const _c1 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
function OutputComponent_table_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "MDA");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Start Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, OutputComponent_table_68_tr_20_Template, 26, 21, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](21, 1, ctx_r4.outputData.output.projects, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx_r4.p)));
} }
function OutputComponent_pagination_controls_69_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "pagination-controls", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function OutputComponent_pagination_controls_69_Template_pagination_controls_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class OutputComponent {
    constructor(router, crud) {
        this.router = router;
        this.crud = crud;
        this.states = _all_outcomes_states_json__WEBPACK_IMPORTED_MODULE_2__;
        if (history.state.log) {
            this.outputData = JSON.parse(history.state.log);
            console.log(this.outputData);
        }
        else {
            this.router.navigate(['/dashboard/priority']);
        }
    }
    ngOnInit() {
        this.projects = this.outputData.output.projects;
        this.ongoing = this.projects.filter(e => e.status === 'ongoing');
        this.completed = this.projects.filter(e => e.status === 'completed');
        this.abandoned = this.projects.filter(e => e.status === 'abandoned');
        console.log(this.ongoing.length, this.completed.length, this.abandoned.length, this.projects.length);
        this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounceTime"])(100))
            .subscribe(search => {
            // this.search(search);
            // this.setFilteredItems(search, this.currentProject);
        });
        this.filterOutcome();
    }
    filterOutcome() { }
    filterByMda(item) {
    }
    getMdas() {
        const data = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default.a `
    {
      mdas{
        id
        name
        indicators{
            id
            title
            ref
            type
            baseline
            actual
            target
            aggregation
            rt
            currency
            active
            mdaId
            outputs{
            id
            title
            ref
            baseline
            actual
            target
            aggregation
            rt
            currency
            active
            mda{
              id
              name
              shortcode
            }
          }
          }
        }
      }
  `;
        this.crud.pullData(data, {})
            .subscribe((result) => {
            // this.currentPriorities = ''
            this.mdas = result.data.mdas;
            // for (let el of this.mdas) {
            //   el.data = [...el.indicators];
            // }
            // console.log(this.mdas);
            // this.temp = result.data.priorities;
            // localStorage.setItem('priorities', JSON.stringify(this.priorities))
            // this.openModal()
        });
    }
    filterByState(item) {
    }
    clearFilters(item) {
    }
    openProjectReports(item, ind) {
        this.router.navigate(['/dashboard/project-details'], {
            state: {
                log: JSON.stringify(item),
                output: JSON.stringify(ind)
            }
        });
    }
}
OutputComponent.ɵfac = function OutputComponent_Factory(t) { return new (t || OutputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"])); };
OutputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OutputComponent, selectors: [["app-output"]], decls: 70, vars: 10, consts: [[1, "container-fluid", "px-4", "my-5"], [1, "p-4", "primary-border"], [1, "d-flex", "pt-4", "text-center", "flex-wrap"], [1, "col-md-3", "px-2", "mb-3"], [1, "p-2", "secondary-card"], ["title", "Stabilize the Macro Economic Environment", 1, "chart-small-label"], [1, "container-fluid"], [1, "primary-border", "p-4"], [1, "projects"], [1, "container-header", "px-4", "pt-4", "pb-3"], [1, "row"], [1, "col-md-5"], [1, "mb-0", "label"], [1, "text-left"], [1, "mr-2"], ["width", "20", "src", "assets/icons/flag.svg"], ["width", "20", "src", "assets/icons/red-warning.svg"], [1, "col-md-7"], ["type", "text", "name", "search", "placeholder", "Search...", 1, "form-control", "search-input", 3, "formControl"], ["search", ""], ["dropdown", "", 1, "btn-group", "mr-3"], ["id", "button-basic", "dropdownToggle", "", "type", "button", "aria-controls", "dropdown-basic", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "caret"], ["id", "dropdown-basic", "class", "dropdown-menu", "role", "menu", "aria-labelledby", "button-basic", 4, "dropdownMenu"], ["dropdown", "", 1, "btn-group"], [1, "ml-3", "green"], ["href", "javascript:void(0)", 3, "click"], [1, "table-responsive", "p-4"], ["class", "gray text-center ", 4, "ngIf"], ["class", "table table-bordered mt-3", "id", "projectTabel", "style", "width:100%", 4, "ngIf"], [3, "pageChange", 4, "ngIf"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-basic", 1, "dropdown-menu"], ["role", "menuitem", 4, "ngFor", "ngForOf"], ["role", "menuitem"], [1, "dropdown-item", 3, "click"], [1, "gray", "text-center"], ["id", "projectTabel", 1, "table", "table-bordered", "mt-3", 2, "width", "100%"], ["colspan", "2"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, ""], [1, "status", 2, "margin-top", "2px", "margin-right", "2px", "vertical-align", "middle", 3, "ngClass"], [1, "d-inline-block", 2, "vertical-align", "middle"], [1, "cursor", 3, "click"], ["src", "assets/icons/flag.svg", 1, "mr-2"], ["src", "assets/icons/red-warning.svg", 1, "mr-2"], [3, "pageChange"]], template: function OutputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " No. of projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Ongoing projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Completed projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Abandoned projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Contributing Projects / Policies / Programmes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "-Behind Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "-At risk of results delivery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, OutputComponent_ul_57_Template, 2, 1, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](62, OutputComponent_ul_62_Template, 2, 1, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function OutputComponent_Template_a_click_64_listener() { return ctx.clearFilters(ctx.outputData.output.projects); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Clear filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](67, OutputComponent_p_67_Template, 2, 0, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, OutputComponent_table_68_Template, 22, 6, "table", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, OutputComponent_pagination_controls_69_Template, 1, 0, "pagination-controls", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.projects == null ? null : ctx.projects.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.ongoing == null ? null : ctx.ongoing.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.completed == null ? null : ctx.completed.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.abandoned == null ? null : ctx.abandoned.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.searchControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Filter by MDAs : ", ctx.mdaFilter, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Filter by State: ", ctx.stateFilter, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.outputData.output.projects.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.outputData.output.projects.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.outputData.output.projects.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"], ngx_moment__WEBPACK_IMPORTED_MODULE_10__["DateFormatPipe"], ngx_moment__WEBPACK_IMPORTED_MODULE_10__["FromUtcPipe"]], styles: [".card[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n}\n\n.linearguageWrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n}\n\n.linearguageWrapper[_ngcontent-%COMP%]   .traffic[_ngcontent-%COMP%] {\n  height: 5px;\n}\n\n.linearguageWrapper[_ngcontent-%COMP%]   .tick[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 5px;\n  transform: translatey(-11.6px);\n}\n\n.popover-body[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  background-color: var(--secondary-card-bkg);\n  color: var(--font-color);\n  border: 1px solid rgba(111, 111, 118, 0.58);\n  border-left: hidden;\n  border-right: hidden;\n}\n\n.list-group-item[_ngcontent-%COMP%]:first-child {\n  border-top-left-radius: 0.625rem;\n  border-top-right-radius: 0.625rem;\n  border-top: hidden;\n}\n\n.list-group-item[_ngcontent-%COMP%]:last-child {\n  border-bottom-left-radius: 0.625rem;\n  border-bottom-right-radius: 0.625rem;\n  border-bottom: none;\n}\n\n\n\n.main[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 50px auto;\n}\n\n\n\n.has-search[_ngcontent-%COMP%] {\n  width: 350px;\n  margin: 0 auto;\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  padding-left: 2.375rem;\n  background-color: var(--secondary-card-bkg);\n  border: none;\n  box-shadow: none;\n}\n\n.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 2.375rem;\n  height: 2.375rem;\n  line-height: 2.375rem;\n  text-align: center;\n  pointer-events: none;\n  color: #aaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL291dHB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFHSTtFQUNJLFdBQUE7QUFEUjs7QUFJSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUFGUjs7QUFLQTtFQUNJLHVCQUFBO0FBRko7O0FBS0E7RUFDSSwyQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBRko7O0FBS0U7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLRTtFQUNFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtFLHVDQUFBOztBQUVBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUUsNENBQUE7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNRTtFQUNFLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FBSkoiLCJmaWxlIjoib3V0cHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ubGluZWFyZ3VhZ2VXcmFwcGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBzbWFsbHtcbiAgICB9XG4gICAgLnRyYWZmaWN7XG4gICAgICAgIGhlaWdodDogNXB4O1xuICAgIH1cblxuICAgIC50aWNre1xuICAgICAgICB3aWR0aDoycHg7XG4gICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTExLjZweCk7XG4gICAgfVxufVxuLnBvcG92ZXItYm9keXtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNhcmQtYmtnKTtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTEsIDExMSwgMTE4LCAwLjU4KTtcbiAgICBib3JkZXItbGVmdDogaGlkZGVuO1xuICAgIGJvcmRlci1yaWdodDogaGlkZGVuO1xuICB9XG4gIFxuICAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuNjI1cmVtO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNjI1cmVtO1xuICAgIGJvcmRlci10b3A6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNjI1cmVtO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNjI1cmVtO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIH1cbiAgXG4gIC8qIFN0eWxlcyBmb3Igd3JhcHBpbmcgdGhlIHNlYXJjaCBib3ggKi9cbiAgXG4gIC5tYWluIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogNTBweCBhdXRvO1xuICB9XG4gIFxuICAvKiBCb290c3RyYXAgNCB0ZXh0IGlucHV0IHdpdGggc2VhcmNoIGljb24gKi9cbiAgLmhhcy1zZWFyY2gge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgLmZvcm0tY29udHJvbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjM3NXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY2FyZC1ia2cpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgXG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuICBcbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyLjM3NXJlbTtcbiAgICBoZWlnaHQ6IDIuMzc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjM3NXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY29sb3I6ICNhYWE7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNhcmQtYmtnKTtcbn1cbiAgIl19 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! zone.js/dist/zone */ "pDpN");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map