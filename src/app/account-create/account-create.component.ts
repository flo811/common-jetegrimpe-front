import { Component, OnInit } from '@angular/core';
import { AccountCreateService } from '../graphicalElements/services/account-create.service';
import { Router } from '@angular/router';
import { Collegue } from '../auth/auth.domains';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})

export class AccountCreateComponent implements OnInit {

  collegue:Collegue = new Collegue({});
  
  name: string;
  firstName: string;
  adress: string;
  phone: number;
  email: string;
  birthDate: string;
  password: string;
  passwordConfirm: string;

  response:string;

  constructor(private acService: AccountCreateService, private _router:Router) { }

  submit() {
    this.acService.addPerson(this.collegue.name, this.collegue.firstName, this.collegue.adress, this.collegue.phone, this.collegue.email, this.collegue.birthDate, this.collegue.password)
                      // en cas de succès
                      .then((message:any) => {console.log(`${message.message}`); return this._router.navigate[('accueil')]})
                      // en cas d'erreur
                      .catch(err => {console.log(`${err.message}`); return this.response = "echec"})
  }

  ngOnInit() {
  }
}