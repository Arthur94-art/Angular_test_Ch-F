import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	isShowLoader: boolean = false;
	isUserLogged: boolean = false;
	submitted: boolean = false;
	constructor() { }
}