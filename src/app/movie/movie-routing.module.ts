import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { MovieComponent } from './pages/movie/movie.component';


const routes:Routes=[
    {
        path:'',
        component: ListComponent
    },
    
    {
        path:'movie/:id',
        component: MovieComponent
    },
    
    {
        path:'**',
        redirectTo:''
    }
    
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class MovieRoutingModule { }
