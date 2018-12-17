import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AccountCreateService {

  constructor(private _http: HttpClient) { }

  //A Vérifier
  sendInputs(datas: any): Promise<any> {
    return this._http.post(environment.baseUrl.concat("/user/creer"), datas).toPromise()
  }
}