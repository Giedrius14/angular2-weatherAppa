System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var TemperatureDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TemperatureDirective = (function () {
                function TemperatureDirective(_elRef, _renderer) {
                    this._elRef = _elRef;
                    this._renderer = _renderer;
                    this.tooltip = null;
                }
                TemperatureDirective.prototype.onMouseOver = function (event) {
                    if (this.tooltip === null) {
                        this.tooltip = this._renderer.createElement(this._elRef.nativeElement, 'div');
                    }
                    this.tooltip.innerText = 'Fahrenheit: ' + (this.temperatureCelsius * 1.8 + 32);
                    this._renderer.setElementClass(this.tooltip, 'tooltip', true);
                    this._renderer.setElementStyle(this.tooltip, 'top', '' + (event.clientY + 3));
                    this._renderer.setElementStyle(this.tooltip, 'left', '' + (event.clientX + 10));
                    this._renderer.setElementProperty(this.tooltip, 'hidden', '');
                };
                ;
                TemperatureDirective.prototype.onMouseLeave = function () {
                    this._renderer.setElementProperty(this.tooltip, 'hidden', 'true');
                };
                ;
                __decorate([
                    core_1.HostListener('mousemove', ['$event']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [MouseEvent]), 
                    __metadata('design:returntype', void 0)
                ], TemperatureDirective.prototype, "onMouseOver", null);
                __decorate([
                    core_1.HostListener('mouseleave'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], TemperatureDirective.prototype, "onMouseLeave", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], TemperatureDirective.prototype, "temperatureCelsius", void 0);
                TemperatureDirective = __decorate([
                    core_1.Directive({
                        selector: '.temperature'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
                ], TemperatureDirective);
                return TemperatureDirective;
            }());
            exports_1("TemperatureDirective", TemperatureDirective);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIvdGVtcGVyYXR1cmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBa0JJLDhCQUFvQixNQUFrQixFQUFVLFNBQW1CO29CQUEvQyxXQUFNLEdBQU4sTUFBTSxDQUFZO29CQUFVLGNBQVMsR0FBVCxTQUFTLENBQVU7b0JBakIzRCxZQUFPLEdBQWdCLElBQUksQ0FBQztnQkFrQnBDLENBQUM7Z0JBakJzQywwQ0FBVyxHQUFYLFVBQVksS0FBaUI7b0JBQ2hFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDbEYsQ0FBQztvQkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUMvRSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5RSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2pGLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ2xFLENBQUM7O2dCQUMyQiwyQ0FBWSxHQUFaO29CQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUN0RSxDQUFDOztnQkFaRDtvQkFBQyxtQkFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O3VFQUFBO2dCQVV0QztvQkFBQyxtQkFBWSxDQUFDLFlBQVksQ0FBQzs7Ozt3RUFBQTtnQkFJM0I7b0JBQUMsWUFBSyxFQUFFOztnRkFBQTtnQkFuQlo7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsY0FBYztxQkFDM0IsQ0FBQzs7d0NBQUE7Z0JBcUJGLDJCQUFDO1lBQUQsQ0FwQkEsQUFvQkMsSUFBQTtZQXBCRCx1REFvQkMsQ0FBQSIsImZpbGUiOiJ3ZWF0aGVyL3RlbXBlcmF0dXJlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPbkluaXQsIEhvc3RMaXN0ZW5lciwgUmVuZGVyZXIsIEF0dHJpYnV0ZSwgSW5wdXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJy50ZW1wZXJhdHVyZSdcbn0pXG5leHBvcnQgY2xhc3MgVGVtcGVyYXR1cmVEaXJlY3RpdmUge1xuICAgIHByaXZhdGUgdG9vbHRpcDogSFRNTEVsZW1lbnQgPSBudWxsO1xuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlbW92ZScsIFsnJGV2ZW50J10pIG9uTW91c2VPdmVyKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnRvb2x0aXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudG9vbHRpcCA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RpdicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9vbHRpcC5pbm5lclRleHQgPSAnRmFocmVuaGVpdDogJyArICh0aGlzLnRlbXBlcmF0dXJlQ2Vsc2l1cyAqIDEuOCArIDMyKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudENsYXNzKHRoaXMudG9vbHRpcCwgJ3Rvb2x0aXAnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFN0eWxlKHRoaXMudG9vbHRpcCwgJ3RvcCcsICcnICsgKGV2ZW50LmNsaWVudFkgKyAzKSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEVsZW1lbnRTdHlsZSh0aGlzLnRvb2x0aXAsICdsZWZ0JywgJycgKyAoZXZlbnQuY2xpZW50WCAgKyAxMCkpO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy50b29sdGlwLCAnaGlkZGVuJywgJycpO1xuICAgIH07XG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScpIG9uTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0RWxlbWVudFByb3BlcnR5KHRoaXMudG9vbHRpcCwgJ2hpZGRlbicsICd0cnVlJyk7XG4gICAgfTtcbiAgICBcbiAgICBASW5wdXQoKSB0ZW1wZXJhdHVyZUNlbHNpdXM6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIpIHtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
