import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { filter } from 'rxjs/operators';
import { Hero } from '../../interfaces/heros.interfaces';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'app-find-hero',
    templateUrl: './find-hero.component.html',
    styles: [
    ]
})
export class FindHeroComponent implements OnInit {

    term = '';
    heros: Hero[] = [];
    hero!: Hero;

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
    }

    public find(): void {
        if (!this.term) {
            this.heros = [];
            return;
        }
        this.heroService.findHeros(this.term)
            .subscribe(heros => this.heros = heros);
    }

    public selectHero(event: MatAutocompleteSelectedEvent): void {

        if (!event.option.value) {
            return;
        }

        const selectedHero: Hero = event.option.value;
        this.term = selectedHero.superhero || this.term;

        // En una situación real, es posible que se solicite la información al API.
        if (selectedHero.id) {
            this.heroService.getHeroById(selectedHero.id).subscribe(hero => this.hero = hero);
        }
    }

}
