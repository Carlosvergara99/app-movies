import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { MenuComponent } from './components/menu/menu.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MenuComponent,
    LoadingComponent
  ],
  imports: [
    PrimeNgModule,
    CommonModule
  ],
  exports:[
    MenuComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
