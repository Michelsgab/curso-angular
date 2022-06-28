import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {
      name: 'Snow',
      type: 'Cat',
      age: 10,
    },
    {
      name: 'Blue',
      type: 'Cat',
      age: 8,
    },
    {
      name: 'Max',
      type: 'Dog',
      age: 12,
    },
    {
      name: 'Totty',
      type: 'Dog',
      age: 15,
    },
  ];

  animalDetails = '';

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalDetails = `Pet ${animal.name} is ${animal.age} years old`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal);
  }
}
