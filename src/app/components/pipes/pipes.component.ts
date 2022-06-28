import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  changeText = 'Learning about Angular';

  today = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
