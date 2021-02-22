import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    {
        path: 'heros',
        loadChildren: () => import('./heros/heros.module').then(m => m.HerosModule),
        canActivate: [AuthGuard],
        canLoad: [AuthGuard]
    },
    { path: 'oops', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'oops' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
