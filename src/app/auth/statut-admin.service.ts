import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class StatutAdminService implements CanActivate {

  constructor(private _authSrv: AuthService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this._authSrv.verifierAuthentification()
      .pipe(
        map(col => col.estConnuEtAdmin()),
        tap(estConnecte => {
          if (!estConnecte) {
            console.log("here")
            this._router.navigate(['/auth'])
          }
        })
      );
  }

}