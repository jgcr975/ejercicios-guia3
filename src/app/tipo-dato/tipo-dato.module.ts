import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TipoDatoPage } from './tipo-dato.page';

const routes: Routes = [
  {
    path: '',
    component: TipoDatoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TipoDatoPage]
})
export class TipoDatoPageModule {}
