import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { InputMaskModule } from 'ngx-input-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    BsDatepickerModule,
    InputMaskModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    BsDatepickerModule,
    InputMaskModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BsModalService]
})
export class SharedModuleModule { }
