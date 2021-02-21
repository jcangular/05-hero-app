import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heros.interfaces';

@Pipe({
    name: 'imageHero'
})
export class ImageHeroPipe implements PipeTransform {

    transform(hero: Hero): string {
        if (!hero.id || (!hero.id.match('^(dc|marvel)[-]') && !hero.alt_img)) {
            return `assets/no-image.png`;
        } else if (hero.alt_img) {
            return hero.alt_img;
        }
        return `assets/heros/${hero.id}.jpg`;
    }

}
