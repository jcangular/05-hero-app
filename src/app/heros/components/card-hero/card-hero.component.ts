import { Component, Input } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heros.interfaces';

@Component({
    selector: 'app-card-hero',
    templateUrl: './card-hero.component.html',
    styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent {

    @Input() hero!: Hero;

}
