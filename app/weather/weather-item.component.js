System.register(["angular2/core", "./temperature.directive"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, temperature_directive_1;
    var WeatherItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (temperature_directive_1_1) {
                temperature_directive_1 = temperature_directive_1_1;
            }],
        execute: function() {
            WeatherItemComponent = (function () {
                function WeatherItemComponent() {
                }
                WeatherItemComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-item',
                        template: "\n        <article class=\"weather-element\">\n            <div class=\"col-1\">\n                <h3>{{ item.city }}</h3>\n                <p class=\"info\">{{ item.description | uppercase }}</p>\n            </div>\n            <div class=\"col-2\">\n                <span class=\"temperature\" [temperatureCelsius]=\"item.temperature\">{{ item.temperature }}\u00B0C</span>\n            </div>\n        </article>\n    ",
                        inputs: ['item: weatherItem'],
                        styleUrls: ['src/css/weather-item.css'],
                        directives: [temperature_directive_1.TemperatureDirective]
                    }), 
                    __metadata('design:paramtypes', [])
                ], WeatherItemComponent);
                return WeatherItemComponent;
            }());
            exports_1("WeatherItemComponent", WeatherItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW9CQTtnQkFBQTtnQkFFQSxDQUFDO2dCQW5CRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUsdWFBVVQ7d0JBQ0QsTUFBTSxFQUFFLENBQUMsbUJBQW1CLENBQUM7d0JBQzdCLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO3dCQUN2QyxVQUFVLEVBQUUsQ0FBQyw0Q0FBb0IsQ0FBQztxQkFDckMsQ0FBQzs7d0NBQUE7Z0JBR0YsMkJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVEQUVDLENBQUEiLCJmaWxlIjoid2VhdGhlci93ZWF0aGVyLWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1dlYXRoZXJJdGVtfSBmcm9tIFwiLi93ZWF0aGVyLWl0ZW1cIjtcbmltcG9ydCB7VGVtcGVyYXR1cmVEaXJlY3RpdmV9IGZyb20gXCIuL3RlbXBlcmF0dXJlLmRpcmVjdGl2ZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWl0ZW0nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwid2VhdGhlci1lbGVtZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj5cbiAgICAgICAgICAgICAgICA8aDM+e3sgaXRlbS5jaXR5IH19PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImluZm9cIj57eyBpdGVtLmRlc2NyaXB0aW9uIHwgdXBwZXJjYXNlIH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlXCIgW3RlbXBlcmF0dXJlQ2Vsc2l1c109XCJpdGVtLnRlbXBlcmF0dXJlXCI+e3sgaXRlbS50ZW1wZXJhdHVyZSB9fcKwQzwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgYCxcbiAgICBpbnB1dHM6IFsnaXRlbTogd2VhdGhlckl0ZW0nXSxcbiAgICBzdHlsZVVybHM6IFsnc3JjL2Nzcy93ZWF0aGVyLWl0ZW0uY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW1RlbXBlcmF0dXJlRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBXZWF0aGVySXRlbUNvbXBvbmVudCB7XG4gICAgaXRlbTpXZWF0aGVySXRlbTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
