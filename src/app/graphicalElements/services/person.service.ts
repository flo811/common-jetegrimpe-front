import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Collegue } from 'src/app/auth/auth.domains';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private _http:HttpClient) { }


  // Add new user
  addPerson(name:string, firstName:string, adress:string, phone:number, email:string, birthDate:string, password:string):Promise<any>{
    return this._http.post(environment.baseUrl + "utilisateur/creer-compte", {name, firstName, adress, phone, email, birthDate, password}).toPromise()
  }

  // Patch method to modify user
  modifyPerson(collegue:Collegue):Promise<Collegue>{
    return <Promise<Collegue>>this._http.patch(environment.baseUrl + "utilisateur/profil", collegue).toPromise()
  }

}
