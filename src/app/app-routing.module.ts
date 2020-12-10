import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { UsersComponent } from "./users/users.component";

@NgModule({
  declarations: [UsersComponent, HomeComponent, LoginComponent],
  imports: [
    RouterModule.forRoot([
      { path: "login", component: LoginComponent },
      { path: "home", component: HomeComponent },
      { path: "users", component: UsersComponent },
      { path: "**", redirectTo: "login" }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
