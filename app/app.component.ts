import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import { LoginComponent } from 'app/login/login.component';
import { SignupComponent } from 'app/signup/signup.component';
import { HomeComponent } from 'app/home/home.component';
import { FindRoomComponent } from 'app/findroom/findroom.component';
import { AddRoomComponent } from 'app/addroom/addroom.component';

@Component({
selector: 'moja-aplikacija',
templateUrl: 'app/router.html',
directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
{path:'/Login', name: 'Login', component: LoginComponent},
{path:'/FindRoom', name: 'FindRoom', component: FindRoomComponent},
{path:'/Signup', name:'Signup', component: SignupComponent},
{path:'/AddRoom', name:'AddRoom', component: AddRoomComponent},
{path:'/Home', name:'Home', component: HomeComponent, useAsDefault: true},
])
export class AppComponent { 
	router: Router;
	isAuth: String;
	
	constructor(router: Router) {
		this.router = router;
		  router.subscribe((val) => {
		  if(localStorage.getItem('token') !== null){
				this.isAuth = "yes";
		  }else{
			    this.isAuth = "no";
		  }
		  });
	}
	
 onLogout(): void {
	localStorage.removeItem("token");
	 this.router.navigate(['./Home']);
	if(localStorage.getItem('token') !== null){
		this.isAuth = "yes";
	}else{
		this.isAuth = "no";
	}
 }
}