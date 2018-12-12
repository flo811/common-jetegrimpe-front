import { Component, OnInit } from '@angular/core';
import { FormInput } from './model';
import { AccountCreateService } from '../services/account-create.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {

  formInput = new FormInput();

  constructor(private acService:AccountCreateService) { }

  submit() {
    // this.acService.sendInputs(this.formInput)
  }

  ngOnInit() {
  }

}
