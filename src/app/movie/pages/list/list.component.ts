import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import {  Result } from '../../interfaces/movie.interface';
import { switchMap } from 'rxjs';
import { Message } from 'primeng/api';

@Component({
  selector: 'movie-list',
  templateUrl: './list.component.html',
  styles: ``,
})
export class ListComponent  implements  OnInit {
  
  constructor ( private movieService:MovieService){}

  public movies:Result[]=[]
  public datas!:string
  public messages!: Message[];

  

  ngOnInit(): void {

    this.messages = [{ severity: 'warn', detail: 'No hay información' }];

       this.movieService.moviesPopular()
       .pipe(
          switchMap(()=> this.movieService.currentMovies),
       ).subscribe((data)=>{this.movies =data} )
       
      
  }


}
