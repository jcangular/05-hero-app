import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, map } from 'rxjs/operators';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

import { Hero, Publisher } from '../../interfaces/heros.interfaces';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'app-add-hero',
    templateUrl: './add-hero.component.html',
    styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit {

    publishers = [
        { id: 'DC Comics', name: 'DC - Comics' },
        { id: 'Marvel Comics', name: 'Marvel - Comics' }
    ];

    hero: Hero = {
        superhero: '',
        alter_ego: '',
        characters: '',
        first_appearance: '',
        publisher: Publisher.NA,
        alt_img: ''
    };

    editMode = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private snack: MatSnackBar,
        private dialog: MatDialog,
        private heroService: HeroService,
    ) { }

    ngOnInit(): void {
        if (this.router.url.includes('edit')) {
            this.editMode = true;
            this.activatedRoute.params
                .pipe(
                    filter(({ id }) => id),
                    switchMap(({ id }) => this.heroService.getHeroById(id))
                )
                .subscribe(hero => this.hero = { ...hero });
        }
    }

    public save(): void {
        if (this.hero.superhero.trim().length === 0) {
            return;
        }

        if (this.hero.id) {
            this.heroService.updateHero(this.hero)
                .subscribe(hero => {
                    this.showMessage('¡Héroe actualizado exitosamente!');
                    this.hero = { ...hero };
                });
        } else {
            this.heroService.addHero(this.hero)
                .subscribe(hero => {
                    this.showMessage('¡Héroe agregado exitosamente!');
                    this.router.navigate(['/heros/edit', hero.id]);
                });
        }
    }

    public delete(): void {
        this.dialog.open(ConfirmComponent, {
            data: { ...this.hero }
        }).afterClosed()
            .pipe(
                filter(result => result),
                map(result => this.hero.id || ''),
                switchMap(id => this.heroService.deleteHero(id))
            )
            .subscribe(hero => this.router.navigate(['/heros']));
    }

    public showMessage(mess: string, action: string = ''): void {
        this.snack.open(mess, action, { duration: 1000 });
    }

}
