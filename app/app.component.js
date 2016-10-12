System.register(['angular2/core', "./weather/weather-list.component", "./weather/weather-search.component", "./sidebar.component"], function(exports_1, context_1) {
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
    var core_1, weather_list_component_1, weather_search_component_1, sidebar_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (weather_list_component_1_1) {
                weather_list_component_1 = weather_list_component_1_1;
            },
            function (weather_search_component_1_1) {
                weather_search_component_1 = weather_search_component_1_1;
            },
            function (sidebar_component_1_1) {
                sidebar_component_1 = sidebar_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <header>\n            <h1>Angular 2 Weather</h1>\n        </header>\n        <my-sidebar></my-sidebar>\n        <weather-search></weather-search>\n        <weather-list></weather-list>\n    ",
                        directives: [weather_list_component_1.WeatherListComponent, weather_search_component_1.WeatherSearchComponent, sidebar_component_1.SidebarComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFpQkE7Z0JBQUE7Z0JBQ0EsQ0FBQztnQkFiRDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxRQUFRO3dCQUNsQixRQUFRLEVBQUUsME1BT1Q7d0JBQ0QsVUFBVSxFQUFFLENBQUMsNkNBQW9CLEVBQUUsaURBQXNCLEVBQUUsb0NBQWdCLENBQUM7cUJBQy9FLENBQUM7O2dDQUFBO2dCQUVGLG1CQUFDO1lBQUQsQ0FEQSxBQUNDLElBQUE7WUFERCx1Q0FDQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1dlYXRoZXJMaXN0Q29tcG9uZW50fSBmcm9tIFwiLi93ZWF0aGVyL3dlYXRoZXItbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7V2VhdGhlclNlYXJjaENvbXBvbmVudH0gZnJvbSBcIi4vd2VhdGhlci93ZWF0aGVyLXNlYXJjaC5jb21wb25lbnRcIjtcbmltcG9ydCB7U2lkZWJhckNvbXBvbmVudH0gZnJvbSBcIi4vc2lkZWJhci5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDE+QW5ndWxhciAyIFdlYXRoZXI8L2gxPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG15LXNpZGViYXI+PC9teS1zaWRlYmFyPlxuICAgICAgICA8d2VhdGhlci1zZWFyY2g+PC93ZWF0aGVyLXNlYXJjaD5cbiAgICAgICAgPHdlYXRoZXItbGlzdD48L3dlYXRoZXItbGlzdD5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtXZWF0aGVyTGlzdENvbXBvbmVudCwgV2VhdGhlclNlYXJjaENvbXBvbmVudCwgU2lkZWJhckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
