/**
 * Collègue utilisateur de l'application.
 */
export class Collegue {
  
  nom:string;
  prenom:string;
  email:string;
  motDePasse:string;
  roles:string[];

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