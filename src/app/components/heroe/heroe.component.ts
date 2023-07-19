import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesComponent } from 'src/app/components/heroes/heroes.component';
import { HeroesService } from 'src/app/components/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  heroe:any={};
  constructor(private activatedRoute: ActivatedRoute, private _heroeService:HeroesService){
    this.activatedRoute.params.subscribe(params =>{
      this.heroe=_heroeService.getRutas();
    console.log(this.heroe);
    })
  }
}
