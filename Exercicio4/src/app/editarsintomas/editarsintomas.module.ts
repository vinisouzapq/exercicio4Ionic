import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarsintomasPageRoutingModule } from './editarsintomas-routing.module';

import { EditarsintomasPage } from './editarsintomas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarsintomasPageRoutingModule
  ],
  declarations: [EditarsintomasPage]
})
export class EditarsintomasPageModule {}
