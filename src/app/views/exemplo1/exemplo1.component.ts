import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo1',
  templateUrl: './exemplo1.component.html',
  styleUrls: ['./exemplo1.component.css']
})
export class Exemplo1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  somar(x: number, y: number): number {
    return x + y;
  }

}
