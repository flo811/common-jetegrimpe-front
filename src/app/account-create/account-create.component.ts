import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Collegue } from '../auth/auth.domains';
import { PersonService } from '../graphicalElements/services/person.service';

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

  constructor(private pService: PersonService, private _router:Router) { }

  submit() {
    this.pService.addPerson(this.name, this.firstName, this.adress, this.phone, this.email, this.birthDate, this.password)
                      .then((response:any) => {console.log("MARCHE !!!", response.message);return this._router.navigate(['/accueil']);})
                      .catch(err => {console.log(`${err.message}`); return this.response = `echec: ${err.message}`})
}


  ngOnInit() {
  }
}