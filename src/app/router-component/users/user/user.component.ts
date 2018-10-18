import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user: {'id': number, name: string};
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // This will work when we will not change the url from the same component
       this.user = {
         id: this.route.snapshot.params['id'],
         name: this.route.snapshot.params['name']
       };
      this.route.params.subscribe(
        (params: Params) => {
          this.user.id = params.id;
          this.user.name = params.name;
        });
  }
  // parameter() {
  //         this.router.navigate(['/users', 1, 'rajnish'], { queryParams : {'name': 'rajnish'}, fragment: 'loading'});
  // }
}
