/**
 * Collègue utilisateur de l'application.
 */
export class Collegue {
  
  name:string;
  firstName:string;
  email:string;
  password:string;
  roles:string[];

  adress:string;
  phone:number;
  birthDate:string;

  constructor(params:any) {
    Object.assign(this, params);
  }

  estAnonyme():boolean {
    return this.email == undefined;
  }

  estConnuEtAdmin():boolean {
    if (this.roles == undefined){
      return false;
    }
    
    return this.roles.includes("ROLE_ADMINISTRATEUR");
  }
}