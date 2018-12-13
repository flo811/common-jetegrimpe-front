import { Component, OnInit } from '@angular/core';
import { AccountCreateService } from '../services/account-create.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})

export class AccountCreateComponent implements OnInit {

  lastName: string;
  firstName: string;
  adress: string;
  phone: number;
  email: string;
  birthDate: Date;
  password: string;
  passwordConfirm: string;

  constructor(private acService: AccountCreateService) { }

  submit() {
    this.acService.sendInputs({
      "lastName": this.lastName, "firstName": this.firstName, "adress": this.adress, "phone": this.phone, "email": this.email, "birthDate": this.birthDate, "password": this.password
    })
  }

  ngOnInit() {
  }
}