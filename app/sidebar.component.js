System.register(["angular2/core", "./profile.service", "./weather/weather.service", "./weather/weather-item"], function(exports_1, context_1) {
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
    var core_1, profile_service_1, weather_service_1, weather_item_1;
    var SidebarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_item_1_1) {
                weather_item_1 = weather_item_1_1;
            }],
        execute: function() {
            SidebarComponent = (function () {
                function SidebarComponent(_profileService, _weatherService) {
                    this._profileService = _profileService;
                    this._weatherService = _weatherService;
                }
                SidebarComponent.prototype.onSaveNew = function () {
                    var cities = this._weatherService.getWeatherItems().map(function (element) {
                        return element.city;
                    });
                    this._profileService.saveNewProfile(cities);
                };
                SidebarComponent.prototype.onLoadProfile = function (profile) {
                    var _this = this;
                    this._weatherService.clearWeatherItems();
                    for (var i = 0; i < profile.cities.length; i++) {
                        this._weatherService.searchWeatherInfo(profile.cities[i])
                            .retry()
                            .subscribe(function (data) {
                            var weatherItem = new weather_item_1.WeatherItem(data.name + ', ' + data.sys.country, data.weather[0].main, +data.main.temp_min);
                            _this._weatherService.addWeatherItem(weatherItem);
                        });
                    }
                };
                SidebarComponent.prototype.onDeleteProfile = function (event, profile) {
                    event.stopPropagation();
                    this._profileService.deleteProfile(profile);
                };
                SidebarComponent.prototype.ngOnInit = function () {
                    this.profiles = this._profileService.getProfiles();
                };
                SidebarComponent = __decorate([
                    core_1.Component({
                        selector: 'my-sidebar',
                        template: "\n        <h3>Saved Profiles</h3>\n        <button (click)=\"onSaveNew()\">Save List as Profile</button>\n        <article *ngFor=\"#profile of profiles\" class=\"profile\" (click)=\"onLoadProfile(profile)\">\n            <h4>{{ profile.profileName }}</h4>\n            <p>Cities: {{ profile.cities.join(', ') }}</p>\n            <span class=\"delete\" (click)=\"onDeleteProfile($event, profile)\">X</span>\n        </article>\n    ",
                        styleUrls: ['src/css/sidebar.css'],
                        providers: [profile_service_1.ProfileService]
                    }), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService, weather_service_1.WeatherService])
                ], SidebarComponent);
                return SidebarComponent;
            }());
            exports_1("SidebarComponent", SidebarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBb0JBO2dCQUdJLDBCQUFvQixlQUE4QixFQUFVLGVBQThCO29CQUF0RSxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtvQkFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZTtnQkFDMUYsQ0FBQztnQkFFRCxvQ0FBUyxHQUFUO29CQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsT0FBTzt3QkFDbkUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLENBQUMsQ0FBQyxDQUFDO29CQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQUVELHdDQUFhLEdBQWIsVUFBYyxPQUFnQjtvQkFBOUIsaUJBWUM7b0JBWEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO29CQUN6QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7d0JBQzdDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDcEQsS0FBSyxFQUFFOzZCQUNQLFNBQVMsQ0FDTixVQUFBLElBQUk7NEJBQ0EsSUFBTSxXQUFXLEdBQUcsSUFBSSwwQkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDcEgsS0FBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7d0JBQ3JELENBQUMsQ0FDSixDQUFDO29CQUNWLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCwwQ0FBZSxHQUFmLFVBQWdCLEtBQVksRUFBRSxPQUFnQjtvQkFDMUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFRCxtQ0FBUSxHQUFSO29CQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdkQsQ0FBQztnQkFoREw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsWUFBWTt3QkFDdEIsUUFBUSxFQUFFLGtiQVFUO3dCQUNELFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3dCQUNsQyxTQUFTLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO3FCQUM5QixDQUFDOztvQ0FBQTtnQkFvQ0YsdUJBQUM7WUFBRCxDQW5DQSxBQW1DQyxJQUFBO1lBbkNELCtDQW1DQyxDQUFBIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7UHJvZmlsZX0gZnJvbSBcIi4vcHJvZmlsZVwiO1xuaW1wb3J0IHtQcm9maWxlU2VydmljZX0gZnJvbSBcIi4vcHJvZmlsZS5zZXJ2aWNlXCI7XG5pbXBvcnQge1dlYXRoZXJTZXJ2aWNlfSBmcm9tIFwiLi93ZWF0aGVyL3dlYXRoZXIuc2VydmljZVwiO1xuaW1wb3J0IHtXZWF0aGVySXRlbX0gZnJvbSBcIi4vd2VhdGhlci93ZWF0aGVyLWl0ZW1cIjtcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1zaWRlYmFyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8aDM+U2F2ZWQgUHJvZmlsZXM8L2gzPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvblNhdmVOZXcoKVwiPlNhdmUgTGlzdCBhcyBQcm9maWxlPC9idXR0b24+XG4gICAgICAgIDxhcnRpY2xlICpuZ0Zvcj1cIiNwcm9maWxlIG9mIHByb2ZpbGVzXCIgY2xhc3M9XCJwcm9maWxlXCIgKGNsaWNrKT1cIm9uTG9hZFByb2ZpbGUocHJvZmlsZSlcIj5cbiAgICAgICAgICAgIDxoND57eyBwcm9maWxlLnByb2ZpbGVOYW1lIH19PC9oND5cbiAgICAgICAgICAgIDxwPkNpdGllczoge3sgcHJvZmlsZS5jaXRpZXMuam9pbignLCAnKSB9fTwvcD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGVsZXRlXCIgKGNsaWNrKT1cIm9uRGVsZXRlUHJvZmlsZSgkZXZlbnQsIHByb2ZpbGUpXCI+WDwvc3Bhbj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIGAsXG4gICAgc3R5bGVVcmxzOiBbJ3NyYy9jc3Mvc2lkZWJhci5jc3MnXSxcbiAgICBwcm92aWRlcnM6IFtQcm9maWxlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgU2lkZWJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvZmlsZXM6UHJvZmlsZVtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcHJvZmlsZVNlcnZpY2U6UHJvZmlsZVNlcnZpY2UsIHByaXZhdGUgX3dlYXRoZXJTZXJ2aWNlOldlYXRoZXJTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgb25TYXZlTmV3KCkge1xuICAgICAgICBjb25zdCBjaXRpZXMgPSB0aGlzLl93ZWF0aGVyU2VydmljZS5nZXRXZWF0aGVySXRlbXMoKS5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudC5jaXR5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVTZXJ2aWNlLnNhdmVOZXdQcm9maWxlKGNpdGllcyk7XG4gICAgfVxuXG4gICAgb25Mb2FkUHJvZmlsZShwcm9maWxlOiBQcm9maWxlKSB7XG4gICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLmNsZWFyV2VhdGhlckl0ZW1zKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZmlsZS5jaXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3dlYXRoZXJTZXJ2aWNlLnNlYXJjaFdlYXRoZXJJbmZvKHByb2ZpbGUuY2l0aWVzW2ldKVxuICAgICAgICAgICAgICAgIC5yZXRyeSgpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3ZWF0aGVySXRlbSA9IG5ldyBXZWF0aGVySXRlbShkYXRhLm5hbWUgKyAnLCAnICsgZGF0YS5zeXMuY291bnRyeSwgZGF0YS53ZWF0aGVyWzBdLm1haW4sICtkYXRhLm1haW4udGVtcF9taW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2VhdGhlclNlcnZpY2UuYWRkV2VhdGhlckl0ZW0od2VhdGhlckl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVsZXRlUHJvZmlsZShldmVudDogRXZlbnQsIHByb2ZpbGU6IFByb2ZpbGUpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMuX3Byb2ZpbGVTZXJ2aWNlLmRlbGV0ZVByb2ZpbGUocHJvZmlsZSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTphbnkge1xuICAgICAgICB0aGlzLnByb2ZpbGVzID0gdGhpcy5fcHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZXMoKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
