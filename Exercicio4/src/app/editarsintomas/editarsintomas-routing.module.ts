import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarsintomasPage } from './editarsintomas.page';

const routes: Routes = [
  {
    path: '',
    component: EditarsintomasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarsintomasPageRoutingModule {}
