import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/movie.interface';

@Component({
  selector: 'movie-card',
  templateUrl: './card.component.html',
  styles: ``,
})
export class CardComponent {

  @Input()
  public movie!:Result  

}
