import { Component, OnInit, Input } from '@angular/core';
import { ServersComponent } from '../servers/servers.component';
@Component({
   // selector: '.app-server',
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent implements OnInit {
    serverListing = 'This is not running';
    serverId;
    serverCheckStstus = Math.random();
    serverStatus = 'offline';
    @Input() server: number;
    constructor() {
        this.serverStatus = Math.random() < 0.5 ? 'offline' : 'online';
    }
    ngOnInit() {
    }
    getServerStstus(): string {
        return this.serverStatus;
    }
    serverEvent(event: Event) {
        this.serverListing = (<HTMLInputElement>event.target).value;
        console.log(event);
    }
    changeBackGround(): string {
        return this.serverStatus === 'offline' ? 'red' : 'green';
    }
}
