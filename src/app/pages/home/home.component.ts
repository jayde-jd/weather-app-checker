import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  username = '';
  githubUrl = '';
  cityName = '';

  constructor(
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit() {
    // Subscribe to Auth0 user observable
    this.auth.user$.subscribe(user => {
      if (!user) {
        // Redirect to landing if not authenticated
        this.router.navigate(['/landing']);
        return;
      }

      // Set username from user profile
      this.username = user.name ?? '';
      // Generate GitHub URL if email is verified and nickname exists
      this.githubUrl = (user.email_verified && user.nickname)
        ? `https://github.com/${user.nickname.toLowerCase().replace(/\s+/g, '')}`
        : '';
    });
  }

  // Navigate to weather page with city as query param
  checkWeather() {
    const city = this.cityName.trim();
    if (city) {
      this.router.navigate(['/weather'], {
        queryParams: { city }
      });
    }
  }

  // Log out and redirect to home
  logout() {
    this.auth.logout({
      logoutParams: {
        returnTo: 'http://localhost:4200'
      }
    });
  }
}
