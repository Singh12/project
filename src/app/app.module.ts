import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { Recipe } from './recipes/recipe.model';
import { MenustyleDecoretorDirective } from './decoretor/menustyle-decoretor.directive';
import { RecipeShoppingServiceService } from './shopping-list/service/recipe-shopping-service.service';
import { RouterComponentComponent } from './router-component/router-component.component';
import { HomeComponent } from './router-component/home/home.component';
import { UsersComponent } from './router-component/users/users.component';
import { ServersComponent } from './router-component/servers/servers.component';
import { EditServerComponent } from './router-component/servers/edit-server/edit-server.component';
import { ServerComponent } from './router-component/servers/server/server.component';
import { UserComponent } from './router-component/users/user/user.component';
import { AppRouterModule } from './router-component/app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    MenustyleDecoretorDirective,
    RouterComponentComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule
  ],
  providers: [RecipeShoppingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
