import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HerosRoutingModule } from './heros-routing.module';

import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { FindHeroComponent } from './pages/find-hero/find-hero.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListHeroComponent } from './pages/list-hero/list-hero.component';


@NgModule({
    declarations: [
        AddHeroComponent,
        FindHeroComponent,
        HeroComponent,
        HomeComponent,
        ListHeroComponent
    ],
    imports: [
        CommonModule,
        HerosRoutingModule
    ]
})
export class HerosModule { }
