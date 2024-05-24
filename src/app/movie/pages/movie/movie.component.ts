import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Result } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: ``
})
export class MovieComponent implements OnInit {

  constructor(private movieService:MovieService,
              private activeRoute:ActivatedRoute,
              private router:Router
  ){}

  public movie!:Result
  public value: number = 50;


  ngOnInit(): void {

    
    this.activeRoute.params
        .pipe(
          switchMap( ({id})=> this.movieService.movieById(id)
          )
        )
        .subscribe((data)=>{
          if(!data) return this.router.navigateByUrl('/')
               this.movie =data
               this.value =this.getAndConcatenateFirstDecimal(this.movie.vote_average)
            return 
        })
  }
   getAndConcatenateFirstDecimal(numero:number) {
    const strNumero = numero.toString();
    const puntoIndex = strNumero.indexOf('.');
    if (puntoIndex === -1) {
      return numero;
    }
    const parteEntera = strNumero.slice(0, puntoIndex);
    const primerDecimal = strNumero[puntoIndex + 1];
    const resultado = parteEntera + primerDecimal;
    return parseInt(resultado, 10);
  }
}
