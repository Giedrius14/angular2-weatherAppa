System.register(["angular2/core", "./weather.service", "./weather-item.component"], function(exports_1, context_1) {
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
    var core_1, weather_service_1, weather_item_component_1;
    var WeatherListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_service_1_1) {
                weather_service_1 = weather_service_1_1;
            },
            function (weather_item_component_1_1) {
                weather_item_component_1 = weather_item_component_1_1;
            }],
        execute: function() {
            WeatherListComponent = (function () {
                function WeatherListComponent(_weatherService) {
                    this._weatherService = _weatherService;
                }
                WeatherListComponent.prototype.ngOnInit = function () {
                    this.weatherItems = this._weatherService.getWeatherItems();
                };
                WeatherListComponent = __decorate([
                    core_1.Component({
                        selector: 'weather-list',
                        template: "\n        <section class=\"weather-list\">\n            <weather-item *ngFor=\"#item of weatherItems\" [weatherItem]=\"item\"></weather-item>\n        </section>\n    ",
                        directives: [weather_item_component_1.WeatherItemComponent]
                    }), 
                    __metadata('design:paramtypes', [weather_service_1.WeatherService])
                ], WeatherListComponent);
                return WeatherListComponent;
            }());
            exports_1("WeatherListComponent", WeatherListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWFBO2dCQUdJLDhCQUFvQixlQUErQjtvQkFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO2dCQUFHLENBQUM7Z0JBRXZELHVDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUMvRCxDQUFDO2dCQWhCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxjQUFjO3dCQUN4QixRQUFRLEVBQUUseUtBSVQ7d0JBQ0QsVUFBVSxFQUFFLENBQUMsNkNBQW9CLENBQUM7cUJBQ3JDLENBQUM7O3dDQUFBO2dCQVNGLDJCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCx1REFRQyxDQUFBIiwiZmlsZSI6IndlYXRoZXIvd2VhdGhlci1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQge1dlYXRoZXJTZXJ2aWNlfSBmcm9tIFwiLi93ZWF0aGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7V2VhdGhlckl0ZW1Db21wb25lbnR9IGZyb20gXCIuL3dlYXRoZXItaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7V2VhdGhlckl0ZW19IGZyb20gXCIuL3dlYXRoZXItaXRlbVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd3ZWF0aGVyLWxpc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwid2VhdGhlci1saXN0XCI+XG4gICAgICAgICAgICA8d2VhdGhlci1pdGVtICpuZ0Zvcj1cIiNpdGVtIG9mIHdlYXRoZXJJdGVtc1wiIFt3ZWF0aGVySXRlbV09XCJpdGVtXCI+PC93ZWF0aGVyLWl0ZW0+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtXZWF0aGVySXRlbUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgV2VhdGhlckxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHdlYXRoZXJJdGVtczogV2VhdGhlckl0ZW1bXTtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF93ZWF0aGVyU2VydmljZTogV2VhdGhlclNlcnZpY2UpIHt9XG5cbiAgICBuZ09uSW5pdCgpOmFueSB7XG4gICAgICAgIHRoaXMud2VhdGhlckl0ZW1zID0gdGhpcy5fd2VhdGhlclNlcnZpY2UuZ2V0V2VhdGhlckl0ZW1zKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
