import { NgModule } from '@angular/core';
import { RouterComponentComponent } from './router-component.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { Routes, RouterModule } from '@angular/router';
const config: Routes = [
    {path: '', component: RouterComponentComponent, children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'users', component: UsersComponent, children: [
                {path: ':id/:name', component: UserComponent}
            ]},
            {path: 'servers', component: ServersComponent, children: [
                {path: ':id/edit', component: EditServerComponent},
                {path: ':id', component: ServerComponent}
            ]},
        ]}
    ];
@NgModule({
imports: [
RouterModule.forRoot(config)
],
exports: [RouterModule]
})
export class AppRouterModule {
}
