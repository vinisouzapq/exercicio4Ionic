import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SintomasdesaudePage } from './sintomasdesaude.page';

const routes: Routes = [
  {
    path: '',
    component: SintomasdesaudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SintomasdesaudePageRoutingModule {}
