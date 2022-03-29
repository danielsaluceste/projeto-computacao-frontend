import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router, private storage: Storage) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree> {

    if (await this.storage.get('logado') == null) {
      this.storage.set('logado', 'false');
    }

    console.log(await this.storage.get('logado'));
    console.log(await this.storage.get('token'));

    console.log(route);

    if (route.routeConfig?.path == 'home' || route.routeConfig?.path == 'login' || route.routeConfig?.path == 'register') {
      //se estiver na pagina de login

      if (await this.storage.get('logado') == true) {
        this.router.navigate(['tabs/tab1']);
        return false;
      } else {
        return true;
      }

    } else {
      //se não estiver na pagina de login

      if (await this.storage.get('logado') == true) {
        return true;
      } else {
        this.router.navigate(['/home']);
        return false;
      }

    }

  }

}