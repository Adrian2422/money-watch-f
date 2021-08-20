import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICredentials } from '../interfaces/ICredentials';
import { token } from '../../../shared/utilities/utilities';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	private _token$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(token);

	constructor(private http: HttpClient) { }

	get token$(): BehaviorSubject<string | null> {
		return this._token$;
	}

	postCredentials(credentials: ICredentials): Observable<ICredentials> {
		return this.http.post<ICredentials>('/auth/login', credentials);
	}
}
