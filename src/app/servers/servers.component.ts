import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
})
export class ServersComponent {
  serverName = 'Test Server';
  allowNewServer = false;
  serverCreationStatus = 'No server created.';
  servers = [];
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server created! Name: ' + this.serverName;
  }
}
