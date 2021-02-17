import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heros.interfaces';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(private http: HttpClient) { }

    public getHeros(): Observable<Hero[]> {
        return this.http.get<Hero[]>('http://localhost:3000/heros');
    }


}
