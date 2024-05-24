import { Component, Input, OnInit} from '@angular/core';
import { MovieService } from '../../../movie/services/movie.service';
import { Subject, debounceTime, switchMap, tap } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search.component.html',
  styles: ``
})
export class SearchComponent implements OnInit {

   constructor (private movieService:MovieService){}
 
  
   private debouncer: Subject<string> = new Subject<string>()


   ngOnInit(): void {
    this.debouncer
          .pipe(
            debounceTime(100),
           switchMap((params)=> this.movieService.searchMovie(params))
         )
         .subscribe()
         
  }
  
 
  searchMovie( params:string){
    console.log(params);
      if(!params)  return     
      this.debouncer.next(params)
  }
}
