import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe1',
  templateUrl: './exe1.component.html',
  styleUrls: ['./exe1.component.css']
})
export class Exe1Component implements OnInit {

  nome = 'walter';
  sobre = 'junior';

  constructor() { }

  ngOnInit(): void { }

}
