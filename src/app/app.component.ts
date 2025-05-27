import { Component, OnInit, NgZone } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'weather-app';
  isLoggedIn = false;

  constructor(
    private router: Router,
    public auth: AuthService,
    private zone: NgZone
  ) {}

  ngOnInit() {
    // Subscribe to authentication state changes
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      this.isLoggedIn = !!isAuthenticated;
      // If authenticated, navigate to the home page
      if (this.isLoggedIn) {
        // Ensure navigation runs inside Angular's zone
        this.zone.run(() => {
          this.router.navigate(['/home']);
        });
      }
    });
  }
}
