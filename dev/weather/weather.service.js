"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mock_weather_1 = require("./mock-weather");
var Observable_1 = require("rxjs/Observable");
require('rxjs/Rx');
var core_1 = require("angular2/core");
var WeatherService = (function () {
    function WeatherService(_http) {
        this._http = _http;
    }
    WeatherService.prototype.getWeatherItems = function () {
        return mock_weather_1.WEATHER_ITEMS;
    };
    WeatherService.prototype.addWeatherItem = function (item) {
        mock_weather_1.WEATHER_ITEMS.push(item);
    };
    WeatherService.prototype.clearWeatherItems = function () {
        mock_weather_1.WEATHER_ITEMS.splice(0);
    };
    WeatherService.prototype.searchWeatherInfo = function (city) {
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=KEY8&units=metric')
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            console.error(error);
            return Observable_1.Observable.throw(error.json().error);
        });
    };
    WeatherService = __decorate([
        core_1.Injectable()
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;
//# sourceMappingURL=weather.service.js.map