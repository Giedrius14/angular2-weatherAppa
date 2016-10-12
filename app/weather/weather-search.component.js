System.register(["angular2/core", "./weather.service", "rxjs/Subject", "./weather-item"], function(exports_1, context_1) {
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
    var core_1, weather_service_1, Subject_1, weather_item_1;
    var WeatherSearchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            }],
        execute: function() {
            WeatherSearchComponent = (function () {
                function WeatherSearchComponent(_weatherService) {
                    this._weatherService = _weatherService;
                    this.searchStream = new Subject_1.Subject();
                    this.data = {};
                }
                WeatherSearchComponent.prototype.onSearchLocation = function (value) {
                    this.searchStream
                        .next(value);
                };
                WeatherSearchComponent.prototype.onSubmit = function () {
                    var newItem = new weather_item_1.WeatherItem(this.data.name + ', ' + this.data.sys.country, this.data.weather[0].main, +this.data.main.temp_min);
                    this._weatherService.addWeatherItem(newItem);
                };
                WeatherSearchComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.searchStream
                        .debounceTime(300)
                        .distinctUntilChanged()
                        .switchMap(function (term) { return _this._weatherService.searchWeatherInfo(term); })
                        .subscribe(function (data) { return _this.data = data; });
                };
                WeatherSearchComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-search',
                        template: "\n        <section class=\"weather-search\">\n            <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                <label for=\"city\">City</label>\n                <input ngControl=\"location\" type=\"text\" id=\"city\" (input)=\"onSearchLocation(input.value)\" #input required>\n                <button type=\"submit\">Add City</button>\n            </form>\n            <div>\n                <span class=\"info\">City found:</span> {{ data.name }} {{ data.sys?.country }}\n            </div>\n        </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherSearchComponent);
                return WeatherSearchComponent;
            }());
            exports_1("WeatherSearchComponent", WeatherSearchComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUJBO2dCQUlJLGdDQUFvQixlQUE4QjtvQkFBOUIsb0JBQWUsR0FBZixlQUFlLENBQWU7b0JBSDFDLGlCQUFZLEdBQUcsSUFBSSxpQkFBTyxFQUFVLENBQUM7b0JBQzdDLFNBQUksR0FBTyxFQUFFLENBQUM7Z0JBR2QsQ0FBQztnQkFFRCxpREFBZ0IsR0FBaEIsVUFBaUIsS0FBWTtvQkFDekIsSUFBSSxDQUFDLFlBQVk7eUJBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQixDQUFDO2dCQUVELHlDQUFRLEdBQVI7b0JBQ0ksSUFBTSxPQUFPLEdBQUcsSUFBSSwwQkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3BJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQUVELHlDQUFRLEdBQVI7b0JBQUEsaUJBUUM7b0JBUEcsSUFBSSxDQUFDLFlBQVk7eUJBQ1osWUFBWSxDQUFDLEdBQUcsQ0FBQzt5QkFDakIsb0JBQW9CLEVBQUU7eUJBQ3RCLFNBQVMsQ0FBQyxVQUFDLElBQVcsSUFBSyxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQTVDLENBQTRDLENBQUM7eUJBQ3hFLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFoQixDQUFnQixDQUMzQixDQUFDO2dCQUNWLENBQUM7Z0JBeENMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjt3QkFDMUIsUUFBUSxFQUFFLGtoQkFXVDtxQkFDSixDQUFDOzswQ0FBQTtnQkEyQkYsNkJBQUM7WUFBRCxDQTFCQSxBQTBCQyxJQUFBO1lBMUJELDJEQTBCQyxDQUFBIiwiZmlsZSI6IndlYXRoZXIvd2VhdGhlci1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7V2VhdGhlclNlcnZpY2V9IGZyb20gXCIuL3dlYXRoZXIuc2VydmljZVwiO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tIFwicnhqcy9TdWJqZWN0XCI7XG5pbXBvcnQge1dlYXRoZXJJdGVtfSBmcm9tIFwiLi93ZWF0aGVyLWl0ZW1cIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnd2VhdGhlci1zZWFyY2gnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwid2VhdGhlci1zZWFyY2hcIj5cbiAgICAgICAgICAgIDxmb3JtICNmPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPkNpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBuZ0NvbnRyb2w9XCJsb2NhdGlvblwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjaXR5XCIgKGlucHV0KT1cIm9uU2VhcmNoTG9jYXRpb24oaW5wdXQudmFsdWUpXCIgI2lucHV0IHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBDaXR5PC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mb1wiPkNpdHkgZm91bmQ6PC9zcGFuPiB7eyBkYXRhLm5hbWUgfX0ge3sgZGF0YS5zeXM/LmNvdW50cnkgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBXZWF0aGVyU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIHNlYXJjaFN0cmVhbSA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgICBkYXRhOmFueSA9IHt9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfd2VhdGhlclNlcnZpY2U6V2VhdGhlclNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBvblNlYXJjaExvY2F0aW9uKHZhbHVlOnN0cmluZykge1xuICAgICAgICB0aGlzLnNlYXJjaFN0cmVhbVxuICAgICAgICAgICAgLm5leHQodmFsdWUpO1xuICAgIH1cblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICBjb25zdCBuZXdJdGVtID0gbmV3IFdlYXRoZXJJdGVtKHRoaXMuZGF0YS5uYW1lICsgJywgJyArIHRoaXMuZGF0YS5zeXMuY291bnRyeSwgdGhpcy5kYXRhLndlYXRoZXJbMF0ubWFpbiwgK3RoaXMuZGF0YS5tYWluLnRlbXBfbWluKTtcbiAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuYWRkV2VhdGhlckl0ZW0obmV3SXRlbSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLnNlYXJjaFN0cmVhbVxuICAgICAgICAgICAgLmRlYm91bmNlVGltZSgzMDApXG4gICAgICAgICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgICAgICAgLnN3aXRjaE1hcCgodGVybTpzdHJpbmcpID0+IHRoaXMuX3dlYXRoZXJTZXJ2aWNlLnNlYXJjaFdlYXRoZXJJbmZvKHRlcm0pKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHRoaXMuZGF0YSA9IGRhdGFcbiAgICAgICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
