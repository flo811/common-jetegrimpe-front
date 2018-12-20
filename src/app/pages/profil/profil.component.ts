import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from 'src/app/auth/auth.domains';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/graphicalElements/services/person.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  collegue:Collegue;

  constructor(private _aService:AuthService, private _router:Router, private _persService:PersonService) { }

  ngOnInit() {
    this._aService.collegueConnecteObs.subscribe(
      c => this.collegue = c
    )
  }


  submit() {
    this._persService.modifyPerson(this.collegue)
                  .then(colModify => {this.collegue = colModify;})
                  .catch(err => console.log(err));
  }





}
