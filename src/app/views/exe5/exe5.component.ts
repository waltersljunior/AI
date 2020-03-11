import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe5',
  templateUrl: './exe5.component.html',
  styleUrls: ['./exe5.component.css']
})
export class Exe5Component implements OnInit {

  claI1 = 'image1';
  imagem = '/assets/img1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

  trocar() {
    if (this.imagem === '/assets/img1.jpg') {
      this.imagem = '/assets/img2.jpg';
    } else if (this.imagem === '/assets/img2.jpg') {
      this.imagem = '/assets/img3.jpg';
    } else if (this.imagem === '/assets/img3.jpg') {
      this.imagem = '/assets/img1.jpg';
    }

  }
}
