import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../interfaces/movie.interface';

@Pipe({
    name: 'movieImg'
})

export class movieImg implements PipeTransform {
    
    transform(movie:Result,size:number=200): string {
    
        if(!movie.poster_path)  return 'assets/default.png';
        return `https://image.tmdb.org/t/p/w${size}/${movie.poster_path}.jpg`
    }
}