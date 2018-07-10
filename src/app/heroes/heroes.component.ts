import {Component,OnInit,OnDestroy} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  hero: Hero = {
    id: 1,
    name: "Jack"
  }

  heroes: Hero[];

  //Obs: não isntanciar o service com new. 
  // Utilidade para o constructor é instanciar o service;
  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    //Uma boa prática para memória é no ngOnDestroy criar um UNSUBSCRIBE; (método takeWhile => Confluence)
    this.heroService.getHeroes().subscribe((heroes:Hero[]) => {
      this.heroes = heroes;
      console.log(this.heroes);
    },(error) => {
      console.log("Error");
    })
  }

  //Click function 
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  ngOnInit() {
    this.getHeroes();
  }

  ngOnDestroy(){
    console.log("Destroy");
  }

}
