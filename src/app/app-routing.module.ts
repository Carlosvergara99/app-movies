import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {
     path:'',
     loadChildren:()=> import('./movie/movie.module').then(m => m.MovieModule)
   },
   {
      path:'**',
      redirectTo:''
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
