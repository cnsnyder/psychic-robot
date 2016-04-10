/// <reference path="../../../typings/browser.d.ts" />
import {Component} from 'angular2/core';

@Component({
    selector: 'chat-app',
    templateUrl: 'templates/chat.html'
})

export class AppComponent {
    message:string = "COOL CHAT BRO!";
    socket = null;
    sendMessage:string = '';

    constructor(){
        this.socket = io();
        this.socket.on('messageUpdate', function(data){
            this.message = data;
        }.bind(this));
    }

    click(){
        this.socket.emit('sendMessage', this.sendMessage);
    }
}
