import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../User';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

    loading = false;
    error = false;

    constructor(
        private angularFire: AngularFireAuth,
        private router: Router
    ) { }

    async login() {
        this.error = false;
        this.loading = true;
        let user: any;
        try {
            user = await this.angularFire.signInWithEmailAndPassword(user.email, user.senha)
            if (user.user.email) {
                console.log("autenticado");
                this.router.navigate(['/folder/inbox']);
            }
            else {
                console.log("error");
            }
        }
        catch (e) {
            console.error(e);
            this.error = true;
        }
        this.loading = false;
    }

    async registrar() {
        this.error = false;
        this.loading = true;
        let user: any;
        try {
            user = await this.angularFire.createUserWithEmailAndPassword(user.email, user.senha);
            if (user.user.email) {
                console.log("registrado com sucesso");
                this.router.navigate(['/folder/inbox']);
            }
            else {
                console.log("erro no registro");
            }
        }
        catch (e) {
            console.error(e);
            this.error = true;
        }
        this.loading = false;
    }
}
