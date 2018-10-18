import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ServerServiceService {
 @Output() statusChange = new EventEmitter<any>();
 private servers = [
  {'id': 1, 'serverName': 'production', 'status': 'online'},
  {'id': 2, 'serverName': 'staging', 'status': 'online'},
  {'id': 3, 'serverName': 'TestServer', 'status': 'offLine'}
];
  constructor() { }
  getSetvers() {
    return this.servers;
  }
  getServer(id: number) {
    const server = this.servers.find(
      (s) => {
          return s.id === id;
      }
    );
    return server;
  }
  updateServer(obj) {
  }
}
