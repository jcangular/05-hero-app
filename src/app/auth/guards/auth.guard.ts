import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log('canActivate', route);
        console.log('canActivate', state);

        return this.authService.ckeckAuth()
            .pipe(
                tap(auth => {
                    if (!auth) {
                        this.router.navigate(['/auth/login']);
                    }
                })
            );
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        console.log('canLoad', route);
        console.log('canLoad', segments);

        return this.authService.ckeckAuth()
            .pipe(
                tap(auth => {
                    if (!auth) {
                        this.router.navigate(['/auth/login']);
                    }
                })
            );
    }
}
