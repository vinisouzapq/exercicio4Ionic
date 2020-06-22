import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SintomasdesaudePageRoutingModule } from './sintomasdesaude-routing.module';

import { SintomasdesaudePage } from './sintomasdesaude.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SintomasdesaudePageRoutingModule
  ],
  declarations: [SintomasdesaudePage]
})
export class SintomasdesaudePageModule {}
