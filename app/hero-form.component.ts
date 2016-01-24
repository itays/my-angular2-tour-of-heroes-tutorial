import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import { Hero } from './hero';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.html'
})

export class HeroFormComponent {
  public powers: string[] = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];
  public model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  public submitted = false;

  onSubmit(){
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.model); }
}