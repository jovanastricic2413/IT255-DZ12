import { Component, Directive } from 'angular2/core';
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import {PipeName} from 'app/pipe/pipeName';
import {PipeSqr} from 'app/pipe/pipeSqr';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router';
import {FORM_DIRECTIVES , FORM_BINDINGS, FormBuilder, Validators, ControlGroup, Control} from 'angular2/common';

@Component({
    selector: 'FindRoom',
    templateUrl: 'app/findroom/findroom.html',
	directives: [FORM_DIRECTIVES],
	viewBindings: [FORM_BINDINGS],
    pipes: [PipeName, PipeSqr]
})

export class FindRoomComponent {
	loginForm: ControlGroup;
    http: Http;
    router:Router;
    beds:String ="";
    kvadratura:String ="";
    rooms: Object[];
	postResponse: String ="";


    constructor(http: Http, router: Router, builder:FormBuilder){
        this.http = http;
        this.router = router;
        var headers = new Headers();

        http.get('http://localhost/php/getrooms.php',{headers:headers})
            .map(res => res.json()).share()
            .subscribe(rooms => {this.rooms = rooms.rooms;
			setInterval(function(){
				$('#example').dataTable({
					paging:false;
					searching:false;
				});
			},200);
            });

    }
}