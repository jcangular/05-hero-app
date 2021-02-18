import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heros.interfaces';

@Pipe({
    name: 'imageHero'
})
export class ImageHeroPipe implements PipeTransform {

    transform(hero: Hero): string {
        return `assets/heros/${hero.id}.jpg`;
    }

}
