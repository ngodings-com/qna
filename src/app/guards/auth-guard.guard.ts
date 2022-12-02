import { Injectable } from '@angular/core';
import {
    ActivatedRoute,
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
} from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(public route: ActivatedRoute, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const login = localStorage.getItem('login');
        if (!login) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}

@Injectable({
    providedIn: 'root',
})
export class FreeGuard implements CanActivate {
    constructor(public route: ActivatedRoute, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const login = localStorage.getItem('login');
        if (!login) {
            return true;
        }

        this.router.navigate(['/']);
        return false;
    }
}
