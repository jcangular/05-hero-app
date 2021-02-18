import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs/operators';

import { Hero } from '../../interfaces/heros.interfaces';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

    hero!: Hero;

    constructor(
        private activateRoute: ActivatedRoute,
        private router: Router,
        private heroService: HeroService
    ) { }

    ngOnInit(): void {
        this.activateRoute.params
            .pipe(
                delay(200),
                switchMap(({ id }) => this.heroService.getHeroById(id))
            )
            .subscribe(hero => this.hero = hero);
    }

    public back(): void {
        this.router.navigate(['/heros/list']);
    }

}
