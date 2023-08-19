import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5001'; // Replace with your actual backend API URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const loginData = {
      username: username,
      password: password
    };

    return this.http.post(`${this.baseUrl}/login`, loginData);
  }
  logout(): Observable<any> {
    // Implement logout logic, e.g., clearing tokens or session data
    // For example, if you're using JWT tokens, you might want to delete the token from local storage
    localStorage.removeItem('token'); // Replace 'token' with your actual token key
    // Other logout-related tasks can be done here

    return this.http.post(`${this.baseUrl}/api/auth/logout`, null);
  }
  // Implement other methods such as registration, token handling, etc.
}
