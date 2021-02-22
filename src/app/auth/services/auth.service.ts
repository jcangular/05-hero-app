import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';


import { environment } from '../../../environments/environment';
import { User } from '../interfaces/auth.interfaces';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private readonly baseURL = environment.baseURL;

    private _user!: User;

    constructor(private http: HttpClient) { }

    public get user(): User {
        return { ...this._user };
    }

    public ckeckAuth(): Observable<boolean> {
        if (!sessionStorage.getItem('userId')) {
            return of(false);
        }

        return this.http.get<User>(`${this.baseURL}/users/1`)
            .pipe(
                map(user => {
                    this._user = { ...user };
                    return true;
                })
            );
    }

    public login(): Observable<User> {
        return this.http.get<User>(`${this.baseURL}/users/1`)
            .pipe(
                tap(user => this._user = { ...user }),
                tap(user => sessionStorage.setItem('userId', user.id))
            );
    }

    public logout(): void {
        this._user = {} as User;
        sessionStorage.removeItem('userId');
    }
}
