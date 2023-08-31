import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'YOUR_BACKEND_API_URL'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getCarData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
