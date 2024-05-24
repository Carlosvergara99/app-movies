import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { MovieService } from '../../../movie/services/movie.service';
import { Subject, debounceTime, switchMap, tap } from 'rxjs';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent  implements OnInit{
  
  
  constructor (private movieService:MovieService){}

  public items: MenuItem[] | undefined;
  private debouncer: Subject<string> = new Subject<string>()
  public isLoading:boolean= false

  ngOnInit(): void {
    this.items = [
      {
          label: 'Home',
          icon: 'pi pi-home',
          routerLink:'/'
      },
    ]

   this.debouncer
         .pipe(
           debounceTime(500),
           tap(()=>this.isLoading=false),
          switchMap((params)=> this.movieService.searchMovie(params))
        )
        .subscribe()
       

 }
 

 searchMovie( params:string){
     if(!params)  return     
     this.isLoading=true
     this.debouncer.next(params)
 }

  

}
