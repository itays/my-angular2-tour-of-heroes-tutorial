import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroFormComponent} from './hero-form.component';
import {HeroService} from './hero.service';
import {LoggerService} from './services/logger.service';

@Component({
  selector: 'my-app',
  styles: [`
    .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
    .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
    .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
    .heroes .badge {
      font-size: small;
      color: white;
      padding: 0.1em 0.7em;
      background-color: #369;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -1px;
    }
    .selected { background-color: #EEE; color: #369; }
  `],
  templateUrl: 'app/hero-list-component.html',
  directives: [HeroDetailComponent, HeroFormComponent],
  providers: [HeroService, LoggerService]
})

export class AppComponent implements OnInit {
  public title = 'Tour of Heroes';
  public selectedHero: Hero;
  public heroes: Hero[];
  public hero: Hero = {
    id: 1,
    name: 'Windstorm',
    power: 'Really Smart'
  };

  constructor(private _heroService: HeroService, private _loggerService: LoggerService) { 

  }

  ngOnInit() {
    this.getHeroes();
    this._loggerService.log('getting heroes');
  }

  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);

  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}