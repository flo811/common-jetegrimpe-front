import { Component, OnInit } from '@angular/core';
import { AccountCreateService } from '../services/account-create.service';

export class FormInput {
  name:string;
  firstName:string;
  adress:string;
  phone:number;
  email:string;
  birthDate:number;
  password:string;
  passwordConfirm:string;
}

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {

  formInput:FormInput = new FormInput();

  constructor(private acService:AccountCreateService) { }

  submit() {
    this.acService.sendInputs(this.formInput)
  }

  ngOnInit() {
  }

}
