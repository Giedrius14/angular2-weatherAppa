"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var Subject_1 = require("rxjs/Subject");
var weather_item_1 = require("./weather-item");
var WeatherSearchComponent = (function () {
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
        })
    ], WeatherSearchComponent);
    return WeatherSearchComponent;
}());
exports.WeatherSearchComponent = WeatherSearchComponent;
//# sourceMappingURL=weather-search.component.js.map