var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../../typings/browser.d.ts" />
var core_1 = require('angular2/core');
var AppComponent = (function () {
    function AppComponent() {
        this.message = "COOL CHAT BRO!";
        this.socket = null;
        this.sendMessage = '';
        this.socket = io();
        this.socket.on('messageUpdate', function (data) {
            this.message = data;
        }.bind(this));
    }
    AppComponent.prototype.click = function () {
        this.socket.emit('sendMessage', this.sendMessage);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'chat-app',
            templateUrl: 'templates/chat.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map