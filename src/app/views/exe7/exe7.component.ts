import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe7',
  templateUrl: './exe7.component.html',
  styleUrls: ['./exe7.component.css']
})
export class Exe7Component implements OnInit {

  claD1 = 'divInv';
  claD2 = 'divInv';
  claD3 = 'divInv';

  disableInput = false;

  constructor() { }
  ngOnInit(): void { }

  mudaDiv1(){
    this.claD1 = 'div1';
    this.claD2 = 'divInv';
    this.claD3 = 'divInv';
  }
  mudaDiv2(){
    this.claD2 = 'div3';
    this.claD1 = 'divInv';
    this.claD3 = 'divInv';
  }
  mudaDiv3(){
    this.claD3 = 'div2';
    this.claD1 = 'divInv';
    this.claD2 = 'divInv';
   }
}
