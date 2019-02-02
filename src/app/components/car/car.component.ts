import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  model:string;
  name:string;
  speed:number;
  colors: Colors;
  options:string[];
  isEdit:boolean = false;
  test:any;

  constructor() { }

  ngOnInit() {
    this.name = 'Audi';
    this.model = 'RS8';
    this.speed = 235;
    this.colors= {
      car: 'white',
      salon: 'black',
      wheels: 'silver'
    };
    this.options = ["aa", "bb","cc"];
    this.test = true;
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  deleteOpt(option) {
    for(let i=0; i<this.options.length; i++) {
      if(this.options[i] == option){
        this.options.splice(i, 1);
        break;
      }
    }
  }

  carSelect(carName) {
    if(carName === 'bmw'){
      this.name = 'BMW';
      this.model = '555T';
      this.speed = 700;
      this.colors= {
        car: 'white bmw',
        salon: 'black bmw',
        wheels: 'silver bmw'
      };
      this.options = ["aa", "bb","cc"];
      this.test = true;
    } else if(carName === 'audi'){
      this.name = 'audi';
      this.model = '444';
      this.speed = 4444;
      this.colors= {
        car: 'white audi',
        salon: 'black audi',
        wheels: 'silver audi'
      };
      this.options = ["audi", "bb","cc"];
      this.test = true;
    } else {
      this.name = 'mers';
      this.model = '999';
      this.speed = 9999;
      this.colors= {
        car: 'white mers',
        salon: 'black mers',
        wheels: 'silver mers'
      };
      this.options = ["mers", "bb","cc"];
      this.test = true;
    }
  }

}

interface Colors {
    car:string,
    salon:string,
    wheels:string
}
