import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe2',
  templateUrl: './exe2.component.html',
  styleUrls: ['./exe2.component.css']
})
export class Exe2Component implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  metedo(x: string): string {
    return x.toLocaleUpperCase();
  }
}
