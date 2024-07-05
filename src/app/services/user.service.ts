import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8076/api/passwords/all';
  private apiUrlToCreate = 'http://localhost:8076/api/passwords';

  constructor(private http: HttpClient) {}

  getUsersPasswords(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  createUser(user: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<any>(`${this.apiUrlToCreate}/create`, user, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error: ${error.error.error || error.message}`;
    }
    return throwError(errorMessage);
  }
}
