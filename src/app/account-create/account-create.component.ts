import { Component, OnInit } from '@angular/core';
import { AccountCreateService } from '../graphicalElements/services/account-create.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})

export class AccountCreateComponent implements OnInit {

  name: string;
  firstName: string;
  adress: string;
  phone: number;
  email: string;
  birthDate: string;
  password: string;
  passwordConfirm: string;

  response:string;

  constructor(private acService: AccountCreateService) { }

  submit() {
    this.acService.addPerson(this.name, this.firstName, this.adress, this.phone, this.email, this.birthDate, this.password)
                      .then((message:any) => {console.log(`${message.message}`); return this.response="succès"})
                      .catch(err => {console.log(`${err.message}`); return this.response = "echec"})
  }

  ngOnInit() {
  }
}