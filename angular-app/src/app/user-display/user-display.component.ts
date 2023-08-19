import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  userName: string | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Fetch user data from AuthService or wherever you store it
    this.userName = 'John Doe'; // Replace with actual user data
  }

  logout(): void {
    this.authService.logout(); // Implement your logout logic in the AuthService
  }
}
