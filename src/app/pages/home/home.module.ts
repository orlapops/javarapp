import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { AgmCoreModule } from '@agm/core';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
     TranslateModule.forChild(),
    AgmCoreModule.forRoot({
      //esta es de boccherini
      apiKey: 'AIzaSyD9BxeSvt3u--Oj-_GD-qG2nPr1uODrR0Y'
//aqui la de javar
      // apiKey: 'AIzaSyA7lhNOanW9xwqysCLSymrtCg-_jkvhqIw'
    })
  ],
  declarations: [HomePage]
})
export class HomePageModule {}

