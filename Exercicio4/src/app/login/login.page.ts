import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../User';
import { LoginService } from '../services/Login.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public userLogin: User;
    

    constructor(
        private firebaseAuth: AngularFireAuth,
        private router: Router,
        private loginService: LoginService
    ) { }

    ngOnInit() {
       
    }

}