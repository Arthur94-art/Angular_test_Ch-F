import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { countryList } from './country-list';

@Component({
	selector: 'app-add-user',
	templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

	arrayOfCountry: string[] = countryList;
	selectedQuantity: string = this.arrayOfCountry[0];
	createUserForm!: FormGroup;
	constructor(public sharedService: SharedService) { }

	ngOnInit(): void {
		this.createUserForm = new FormGroup({
			name: new FormControl('', [Validators.required]),
			lastName: new FormControl('', [Validators.required]),
			phoneNumber: new FormControl('', [Validators.required, Validators.required]),
			birthday: new FormControl('', [Validators.required]),
			country: new FormControl(''),
			longitude: new FormControl('', [Validators.required]),
			latitude: new FormControl('', [Validators.required]),
			id: new FormControl(2)
		})
	}
	sendUsersRequest() {
		console.log(this.createUserForm.value)
	}
}
