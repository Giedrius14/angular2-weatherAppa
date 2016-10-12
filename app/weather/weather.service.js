System.register(["./mock-weather", "rxjs/Observable", 'rxjs/Rx', "angular2/core", "angular2/http"], function(exports_1, context_1) {
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
    var mock_weather_1, Observable_1, core_1, http_1;
    var WeatherService;
    return {
        setters:[
            function (mock_weather_1_1) {
                mock_weather_1 = mock_weather_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            WeatherService = (function () {
                function WeatherService(_http) {
                    this._http = _http;
                    this._apiKey = "4124d8dd9010cbaa26e25d9061118c85";
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
                    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + this._apiKey + '&units=metric')
                        .map(function (response) { return response.json(); })
                        .catch(function (error) {
                        console.error(error);
                        return Observable_1.Observable.throw(error.json().error);
                    });
                };
                WeatherService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], WeatherService);
                return WeatherService;
            }());
            exports_1("WeatherService", WeatherService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUVJLHdCQUFvQixLQUFXO29CQUFYLFVBQUssR0FBTCxLQUFLLENBQU07b0JBRHZCLFlBQU8sR0FBRyxrQ0FBa0MsQ0FBQztnQkFDbkIsQ0FBQztnQkFFbkMsd0NBQWUsR0FBZjtvQkFDSSxNQUFNLENBQUMsNEJBQWEsQ0FBQztnQkFDekIsQ0FBQztnQkFFRCx1Q0FBYyxHQUFkLFVBQWUsSUFBaUI7b0JBQzVCLDRCQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQUVELDBDQUFpQixHQUFqQjtvQkFDSSw0QkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFFRCwwQ0FBaUIsR0FBakIsVUFBa0IsSUFBWTtvQkFFMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxHQUFHLElBQUksR0FBRyxTQUFTLEdBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQyxlQUFlLENBQUM7eUJBQ3JILEdBQUcsQ0FDQSxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQzlCO3lCQUNBLEtBQUssQ0FDRixVQUFBLEtBQUs7d0JBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDckIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEQsQ0FBQyxDQUNKLENBQUM7Z0JBQ1YsQ0FBQztnQkE3Qkw7b0JBQUMsaUJBQVUsRUFBRTs7a0NBQUE7Z0JBOEJiLHFCQUFDO1lBQUQsQ0E3QkEsQUE2QkMsSUFBQTtZQTdCRCwyQ0E2QkMsQ0FBQSIsImZpbGUiOiJ3ZWF0aGVyL3dlYXRoZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7V2VhdGhlckl0ZW19IGZyb20gXCIuL3dlYXRoZXItaXRlbVwiO1xuaW1wb3J0IHtXRUFUSEVSX0lURU1TfSBmcm9tIFwiLi9tb2NrLXdlYXRoZXJcIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0ICdyeGpzL1J4JztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcImFuZ3VsYXIyL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFdlYXRoZXJTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9hcGlLZXkgPSBcIjQxMjRkOGRkOTAxMGNiYWEyNmUyNWQ5MDYxMTE4Yzg1XCI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cblxuICAgIGdldFdlYXRoZXJJdGVtcygpIHtcbiAgICAgICAgcmV0dXJuIFdFQVRIRVJfSVRFTVM7XG4gICAgfVxuICAgIFxuICAgIGFkZFdlYXRoZXJJdGVtKGl0ZW06IFdlYXRoZXJJdGVtKSB7XG4gICAgICAgIFdFQVRIRVJfSVRFTVMucHVzaChpdGVtKTtcbiAgICB9XG4gICAgXG4gICAgY2xlYXJXZWF0aGVySXRlbXMoKSB7XG4gICAgICAgIFdFQVRIRVJfSVRFTVMuc3BsaWNlKDApO1xuICAgIH1cblxuICAgIHNlYXJjaFdlYXRoZXJJbmZvKGNpdHk6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0nICsgY2l0eSArICcmQVBQSUQ9Jyt0aGlzLl9hcGlLZXkrJyZ1bml0cz1tZXRyaWMnKVxuICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9PiByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaChcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
