import { Component } from '@angular/core';
import { HeroesService, rutas } from '../heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  ruta:rutas[]=[];
  ngOnInit(): void {
    this.ruta= this._heroesServices.getRutas();
    console.log(this.ruta);   
  }
  constructor(private _heroesServices:HeroesService, private router: Router){
    
  }
  verRutas(idx: number){
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
}
