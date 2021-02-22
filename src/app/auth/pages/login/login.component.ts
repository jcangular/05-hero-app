import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
    ]
})
export class LoginComponent {

    constructor(
        private router: Router,
        private auth: AuthService
    ) { }

    login(): void {

        this.auth.login()
            .subscribe(user => {
                if (user.id) {
                    this.router.navigate(['/heros/list']);
                }
            });
    }

}
