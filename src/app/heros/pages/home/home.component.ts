import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../auth/interfaces/auth.interfaces';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [`
    .container {
        margin: 10px;
    }
  `]
})
export class HomeComponent implements OnInit {

    constructor(
        private router: Router,
        private auth: AuthService
    ) { }

    ngOnInit(): void { }

    public get user(): User {
        return this.auth.user;
    }

    logout(): void {
        this.auth.logout();
        this.router.navigate(['/auth/login']);
    }

}
