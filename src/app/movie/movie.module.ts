import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MovieRoutingModule } from './movie-routing.module';

import { CardComponent } from './components/card/card.component';
import { ListComponent } from './pages/list/list.component';
import { MovieComponent } from './pages/movie/movie.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { movieImg } from './pipes/movie-Imge.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [

    CardComponent,
    ListComponent,
    MovieComponent,

   //pipes
   movieImg,
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    PrimeNgModule,
    FormsModule,
  ],
 
})
export class MovieModule { }
