import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { LoginComponent } from 'app/login/login.component';
import { SignupComponent } from 'app/signup/signup.component';
import { HomeComponent } from 'app/home/home.component';
import { FindRoomComponent } from 'app/findroom/findroom.component';

@Component({
selector: 'moja-aplikacija',
templateUrl: 'app/router.html',
directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
{path:'/Login', name: 'Login', component: LoginComponent},
{path:'/FindRoom', name: 'FindRoom', component: FindRoomComponent},
{path:'/Signup', name:'Signup', component: SignupComponent},
{path:'/Home', name:'Home', component: HomeComponent, useAsDefault: true},
])
export class AppComponent {

}