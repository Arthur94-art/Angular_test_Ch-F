import { SharedService } from './shared.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(public sharedService: SharedService) {
	}
	title = 'Ch-F';
}
