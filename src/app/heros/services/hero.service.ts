import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Hero } from '../interfaces/heros.interfaces';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    private baseURL = environment.baseURL;

    constructor(private http: HttpClient) { }

    public getHeros(): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseURL}/heros`);
    }

    public getHeroById(id: string): Observable<Hero> {
        return this.http.get<Hero>(`${this.baseURL}/heros/${id}`);
    }


}
