import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SharedService {
	isShowLoader: boolean = false;
	isUserLogged: boolean = false;
	submitted: boolean = false;
	modalRef?: BsModalRef;
	constructor(private modalService: BsModalService) { }

	openModal(template: TemplateRef<any>) {
		this.modalRef = this.modalService.show(template);
	}
}