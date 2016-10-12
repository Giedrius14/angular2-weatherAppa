System.register(["angular2/core", "./profile"], function(exports_1, context_1) {
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
    var core_1, profile_1;
    var ProfileService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_1_1) {
                profile_1 = profile_1_1;
            }],
        execute: function() {
            ProfileService = (function () {
                function ProfileService() {
                    this.profiles = [
                        new profile_1.Profile('Default Profile', ['Kaunas', 'Barcelona', 'LosAngeles'])
                    ];
                }
                ProfileService.prototype.saveNewProfile = function (cities) {
                    var profileName = 'Profile ' + (this.profiles.length);
                    var profile = new profile_1.Profile(profileName, cities);
                    this.profiles.push(profile);
                    return null;
                };
                ProfileService.prototype.getProfiles = function () {
                    return this.profiles;
                };
                ProfileService.prototype.deleteProfile = function (profile) {
                    this.profiles = this.profiles.splice(this.profiles.indexOf(profile), 1);
                    console.log(this.profiles);
                    return null;
                };
                ProfileService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ProfileService);
                return ProfileService;
            }());
            exports_1("ProfileService", ProfileService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBO29CQUNZLGFBQVEsR0FBYzt3QkFDMUIsSUFBSSxpQkFBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztxQkFDeEUsQ0FBQztnQkFrQk4sQ0FBQztnQkFoQkcsdUNBQWMsR0FBZCxVQUFlLE1BQWdCO29CQUMzQixJQUFNLFdBQVcsR0FBRyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4RCxJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDaEIsQ0FBQztnQkFFRCxvQ0FBVyxHQUFYO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUN6QixDQUFDO2dCQUVELHNDQUFhLEdBQWIsVUFBYyxPQUFnQjtvQkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7Z0JBckJMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQXNCYixxQkFBQztZQUFELENBckJBLEFBcUJDLElBQUE7WUFyQkQsMkNBcUJDLENBQUEiLCJmaWxlIjoicHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IHtQcm9maWxlfSBmcm9tIFwiLi9wcm9maWxlXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9maWxlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBwcm9maWxlczogUHJvZmlsZVtdID0gW1xuICAgICAgICBuZXcgUHJvZmlsZSgnRGVmYXVsdCBQcm9maWxlJywgWydLYXVuYXMnLCAnQmFyY2Vsb25hJywgJ0xvc0FuZ2VsZXMnXSlcbiAgICBdO1xuXG4gICAgc2F2ZU5ld1Byb2ZpbGUoY2l0aWVzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgICAgIGNvbnN0IHByb2ZpbGVOYW1lID0gJ1Byb2ZpbGUgJyArICh0aGlzLnByb2ZpbGVzLmxlbmd0aCk7XG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBuZXcgUHJvZmlsZShwcm9maWxlTmFtZSwgY2l0aWVzKTtcbiAgICAgICAgdGhpcy5wcm9maWxlcy5wdXNoKHByb2ZpbGUpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBnZXRQcm9maWxlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZXM7XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvZmlsZShwcm9maWxlOiBQcm9maWxlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgdGhpcy5wcm9maWxlcyA9IHRoaXMucHJvZmlsZXMuc3BsaWNlKHRoaXMucHJvZmlsZXMuaW5kZXhPZihwcm9maWxlKSwgMSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZmlsZXMpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
