import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name = 'Gabriel';
  age = 18;
  dream = ['Helping others', 'Family', 'Audi'];
  car = {
    make: 'Audi',
    model: {
      first: 'TTRS',
      second: 'R8'
    },
    color: 'Blue',
  };

  constructor() {}

  ngOnInit(): void {}
}
