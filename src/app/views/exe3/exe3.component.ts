import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe3',
  templateUrl: './exe3.component.html',
  styleUrls: ['./exe3.component.css']
})
export class Exe3Component implements OnInit {

  nome = 'walter';
  petroleo = 'petroleo';

  constructor() { }

  ngOnInit(): void { }

  metedo(x: string): string {
    return x.toLocaleUpperCase();
  }
}
