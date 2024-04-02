import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private oauthService: OAuthService,
        private jwthelper: JwtHelperService,   
         private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const token = this.oauthService.getAccessToken();
        const required = route.data.requiredRole;
        if (token) {
            const decodedTokeen = this.jwthelper.decodeToken(token);

            if (decodedTokeen.realm_access.roles.includes(required + '')) {
                return true;
            } else {
                this.router.navigate(['/unauthorized']);
                return false;
            }

        } else {

            this.oauthService.initLoginFlow();
            return false;
        }
    }
}
