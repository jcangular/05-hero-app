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

    /**
     * Devuelve el listado de héroes.
     */
    public getHeros(): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseURL}/heros`);
    }

    /**
     * Devuelve un héroe según su identificador
     * @param id es el identificador del héroe.
     */
    public getHeroById(id: string): Observable<Hero> {
        return this.http.get<Hero>(`${this.baseURL}/heros/${id}`);
    }

    public findHeros(term: string): Observable<Hero[]> {
        return this.http.get<Hero[]>(`${this.baseURL}/heros?q=${term}&_limit=6`);
    }

    public addHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(`${this.baseURL}/heros`, hero);
    }

    public updateHero(hero: Hero): Observable<Hero> {
        return this.http.put<Hero>(`${this.baseURL}/heros/${hero.id}`, hero);
    }

    public deleteHero(id: string): Observable<Hero> {
        return this.http.delete<Hero>(`${this.baseURL}/heros/${id}`);
    }

}
