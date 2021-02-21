import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material.module';
import { HerosRoutingModule } from './heros-routing.module';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { FindHeroComponent } from './pages/find-hero/find-hero.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListHeroComponent } from './pages/list-hero/list-hero.component';
import { CardHeroComponent } from './components/card-hero/card-hero.component';
import { ImageHeroPipe } from './pipes/image-hero.pipe';
import { ConfirmComponent } from './components/confirm/confirm.component';


@NgModule({
    declarations: [
        AddHeroComponent,
        FindHeroComponent,
        HeroComponent,
        HomeComponent,
        ListHeroComponent,
        CardHeroComponent,
        ImageHeroPipe,
        ConfirmComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        FlexLayoutModule,
        MaterialModule,
        HerosRoutingModule
    ]
})
export class HerosModule { }
