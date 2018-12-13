import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormInput} from 'src/app/account-create/account-create.component';

@Injectable({
  providedIn: 'root'
})
export class AccountCreateService {


  constructor(private _http:HttpClient) { }


  sendInputs(send:FormInput):Promise<any>{
    return this._http.post(environment.baseUrl.concat("/user/creer"), send).toPromise()
  }
}
