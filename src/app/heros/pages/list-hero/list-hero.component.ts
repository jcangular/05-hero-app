import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heros.interfaces';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'app-list-hero',
    templateUrl: './list-hero.component.html',
    styles: []
})
export class ListHeroComponent implements OnInit {

    heros: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeros()
            .subscribe(heros => this.heros = heros);
    }

}
