import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthuService } from '../servicesu/authu.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthuGuard implements CanActivate {

  constructor(
      public authService: AuthuService,
      public router: Router
  ){ }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(['sign-in'])
    }
    return true;
  }

}
