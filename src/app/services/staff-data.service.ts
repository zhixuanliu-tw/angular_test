import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { StaffMember } from '../models/staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffDataService {
  private apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  // Fetches 'count' number of random users
  getStaff(count: number = 10): Observable<StaffMember[]> {
    return this.http.get<{ results: any[] }>(`${this.apiUrl}?results=${count}`).pipe(
      // Map the raw API response to your StaffMember interface
      map(response => response.results.map(user => ({
        id: user.login.uuid,
        name: {
          first: user.name.first,
          last: user.name.last,
        },
        email: user.email,
        phone: user.phone,
        picture: {
          large: user.picture.large
        }
      } as StaffMember)))
    );
  }
}