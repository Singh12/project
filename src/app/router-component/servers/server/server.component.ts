import { Component, OnInit, Input } from '@angular/core';
import { ServerServiceService } from '../server-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {'id': number, 'serverName': string, 'status': string};
  serverName = '';
  serverStatus = '';
  id: number;
  constructor(private serviceServe: ServerServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        this.id = param['id'];
       // console.log(this.id);
       this.server = this.serviceServe.getServer(+this.id);
       this.serverName = this.server.serverName;
       this.serverStatus = this.server.status;
      }
    );
  }
  editServer() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
