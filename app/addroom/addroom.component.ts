import { Component, Directive } from 'angular2/core';
import {FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'

@Component({
 selector: 'AddRoom',
 templateUrl: 'app/addroom/addroom.html',
 styleUrls: ['css/style.css']
})
export class AddRoomComponent {
<<<<<<< HEAD
 signupForm: ControlGroup;
=======
 registerForm: ControlGroup;
>>>>>>> 7a70f28431ca3535d6a9150c6595038a3061bc89
  http: Http;
  router: Router;
  postResponse: String;
  constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
<<<<<<< HEAD
    this.signupForm = builder.group({
=======
    this.registerForm = builder.group({
>>>>>>> 7a70f28431ca3535d6a9150c6595038a3061bc89
     newRoomName: ["", Validators.none],
     tv: ["", Validators.none],
     beds: ["", Validators.none],
     kvadratura: ["", Validators.none]
   });
}


 onAddRoom(): void {
<<<<<<< HEAD
	var data = "newRoomName="+this.signupForm.value.newRoomName+"&tv="+this.signupForm.value.tv+"&beds="+this.signupForm.value.beds+"&kvadratura="+this.signupForm.value.kvadratura;
=======
	var data = "newRoomName="+this.registerForm.value.newRoomName+"&tv="+this.registerForm.value.tv+"&beds="+this.registerForm.value.beds+"&kvadratura="+this.registerForm.value.kvadratura;
>>>>>>> 7a70f28431ca3535d6a9150c6595038a3061bc89
	var headers = new Headers();
	headers.append('Content-Type', 'application/x-www-form-urlencoded');
	this.http.post('http://localhost/php/addroom.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
	err => alert(JSON.stringify(err)),
	() => { 
	if(this.postResponse._body.indexOf("error") === -1){
		alert("Uspesno dodavanje sobe");
	    this.router.parent.navigate(['./Home']);
	 }else{
		alert("Neuspesno dodavanje sobe");
	 }
	 }
	);
	
  }
}