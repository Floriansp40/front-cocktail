import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICredential } from '../_interfaces/credential'
import { IToken } from '../_interfaces/token'

import { environment } from '../../environments/environment'




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: ICredential): Observable<IToken> {
    return this.http.post<IToken>(environment.authEndPoint, credentials)
  }
}
