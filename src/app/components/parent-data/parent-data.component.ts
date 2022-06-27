import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = '';
  @Input() userProfile!: {role: string, experienceTime: string}

  count = 0

  show = false

  constructor() { }

  ngOnInit(): void {
  }

  addCounter(){
    this.count++
  }

  removeCounter(){
    this.count--
  }

  clearCounter(){
    this.count = 0
  }

  turnShow(){
    this.show = true
  }

  hideShow(){
    this.show = false
  }

}
