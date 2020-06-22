 import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { Sintomas } from '../model/sintomas.model';
import { ListaSintomas } from '../model/ListaSintomas.model';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class SintomasService {

    ListaSintomas: any;

    constructor(private storage: Storage, private datePipe: DatePipe, fire: AngularFireDatabase) { }

   
}