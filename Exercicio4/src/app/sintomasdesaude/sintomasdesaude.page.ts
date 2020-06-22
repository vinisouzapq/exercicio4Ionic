import { Component, OnInit } from '@angular/core';
import { Sintomas } from '../model/sintomas.model';
import { ListaSintomas } from '../model/ListaSintomas.model';
import { SintomasService } from '../services/sintomassaude.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-sintomasdesaude',
  templateUrl: './sintomasdesaude.page.html',
  styleUrls: ['./sintomasdesaude.page.scss'],
})
export class SintomasdesaudePage implements OnInit {

    sintomas: ListaSintomas[];

    constructor(
        private toast: ToastController,
        private router: Router,
        private listaSintomas: ListaSintomas,
        private sintomassaudeService: SintomasService) { }

    ngOnInit() {
    }

    addSintomas() {
        this.router.navigate(['/editarsintomas']);
    }

    editarSintomas(sintomasKey: ListaSintomas) {
        this.router.navigate(['/editarsintomas', { key: sintomasKey }]);
    }

    async removerContato(sintomaKey: ListaSintomas) {
        await this.sintomassaudeService.delete(sintomaKey.key);
        let indice = this.sintomas.indexOf(sintomaKey);
        this.sintomas.splice(indice, 1);
        // this.toast.create({
        //   message: "Contato deletado com sucesso",
        //   duration: 5000,
        //   position: "bottom",
        // }).then(
        //   response => {
        //     response.present();
        //   }
        // );
        let response = await this.toast.create({
            message: "Contato deletado com sucesso",
            duration: 5000,
            position: "bottom",
        });
        response.present();
    }
}
