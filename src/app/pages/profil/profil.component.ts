import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from 'src/app/auth/auth.domains';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  @Input() collegue:Collegue = new Collegue({});

  constructor() { }

  ngOnInit() {
  }

}
