import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe6',
  templateUrl: './exe6.component.html',
  styleUrls: ['./exe6.component.css']
})
export class Exe6Component implements OnInit {
  pp = 'p';
  texto = '';
  claI1 = 'image1';
  claI2 = 'image2';
  claI3 = 'image3';
  img1 = '/assets/img1.jpg';
  img2 = '/assets/img2.jpg';
  img3 = '/assets/img3.jpg';

  constructor() { }

  ngOnInit(): void { }

  texto1() {
    this.texto = 'Ué';
  }
  texto2() {
    this.texto = 'Osh';
  }
  texto3() {
    this.texto = 'Vish';
  }

  // trocar(x: string) {
  //   if (x === 'azul') {
  //     this.texte = "verde";
  //   } else if (this.texte === 'verde') {
  //     this.texte = 'amarelo';
  //   } else
  //     this.texte = 'azul';
  // }

}
