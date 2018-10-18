import { Component, OnInit} from '@angular/core';
import { ServerServiceService } from '../server-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {'id': number, 'serverName': string, 'status': string};
  serverName = '';
  serverStatus = '';
  allowAdded: boolean;
  id: number;
  constructor(private serviceServe: ServerServiceService, private router: Router, private route: ActivatedRoute) {
    this.allowAdded = false;
  }
  ngOnInit() {
    this.route.queryParams.subscribe(
      (param: Params) => {
        if (param.allowAdd === '1') {
          this.id = +this.route.snapshot.params['id'];
          this.server = this.serviceServe.getServer(this.id);
          this.serverName = this.server.serverName;
          this.serverStatus = this.server.status;
          this.allowAdded = true;
        } else {
          this.allowAdded = false;
        }
      }
    );
   // console.log(this.serverName);
  }
}
