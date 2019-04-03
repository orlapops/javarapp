import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalActClientePage } from './modal-actcliente.page';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: ModalActClientePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyBCxuyq-qQPZFoWSc7UYY1uCznmZnjfqGI'
      apiKey: 'AIzaSyA7lhNOanW9xwqysCLSymrtCg-_jkvhqIw'
    }),
    RouterModule.forChild(routes)
  ],
  declarations: [ModalActClientePage]
})
export class ModalActClientePageModule {}
