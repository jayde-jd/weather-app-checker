import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { map } from 'rxjs/operators';

/**
 * AuthGuard is an Angular route guard that determines whether a route can be activated
 * based on the user's authentication status.
 *
 * @remarks
 * This guard uses the AuthService to check if the user is authenticated.
 * If the user is not authenticated, it redirects them to the '/landing' page
 * and displays an alert message.
 *
 * @example
 * In your routing module:
 * ```
 * {
 *   path: 'protected',
 *   component: ProtectedComponent,
 *   canActivate: [AuthGuard]
 * }
 * ```
 *
 * @see {@link AuthService}
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  canActivate(): import('rxjs').Observable<boolean | UrlTree> {
    interface AuthGuardResult {
      isAuthenticated: boolean;
      urlTree: UrlTree;
    }

    return this.auth.isAuthenticated$.pipe(
      map((isAuthenticated: boolean): boolean | UrlTree => {
      if (isAuthenticated) {
        return true;
      } else {
        // Redirect to login page if not authenticated
        window.alert('You must be logged in to access this page.');
        return this.router.parseUrl('/landing');
      }
      })
    );
  }
}
