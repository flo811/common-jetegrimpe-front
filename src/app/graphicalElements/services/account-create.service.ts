import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountCreateService {

  constructor(private _http:HttpClient) { }


  // sendInputs(send:FormInput):Promise<FormInput>{
  //   return this._http.post(environment.backendUrl + /...../, send).toPromise()
  //   .then((C:FormInput) => new FormInput())
  // }

}