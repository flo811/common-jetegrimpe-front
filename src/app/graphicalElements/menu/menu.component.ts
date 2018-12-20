import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { map, tap } from 'rxjs/operators';
import { Collegue } from 'src/app/auth/auth.domains'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // user:Collegue=new Collegue({});
  user:boolean;
  admin:boolean;

  constructor(private _authSrv:AuthService) {
    // this._authSrv.collegueConnecteObs
    //              .subscribe(col => this.user = col);
    
    this._authSrv.collegueConnecteObs
                 .subscribe(col => {this.user = !col.estAnonyme();
                                   this.admin = this.user && col.estConnuEtAdmin()});
  }

  ngOnInit() {
  }

}
