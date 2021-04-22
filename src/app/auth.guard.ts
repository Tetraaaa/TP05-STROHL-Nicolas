import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(public router: Router) { }

    canActivate():boolean
    {
        if(!!localStorage.getItem("jwt"))
        {
            return true;
        }
        else
        {
            this.router.navigate(["/"]);
            return false;
        }
    }

}
