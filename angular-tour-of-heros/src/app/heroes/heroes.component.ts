import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({ // Decorator that specifies Angular metadata for the component
  selector: 'app-heroes', // Components CSS element selector/ HTML element identifier
  templateUrl: './heroes.component.html', // Location of the component's template file
  styleUrls: ['./heroes.component.css'] //Locatoi of the component's private CSS styles
})
// Always EXPORT so you can IMPORT it elsewhere
export class HeroesComponent implements OnInit { 

  hero: Hero = { // Changed to an object of INTERFACE type Hero
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }

  ngOnInit(): void { // Called shortly after creating a component.
  }

}
