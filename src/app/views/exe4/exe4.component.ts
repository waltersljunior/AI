import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exe4',
  templateUrl: './exe4.component.html',
  styleUrls: ['./exe4.component.css']
})
export class Exe4Component implements OnInit {
  img1 = '/assets/img1.jpg';
  img2 = '/assets/img2.jpg';
  img3 = '/assets/img3.jpg';

  claI1 = 'image1';
  claI2 = 'image2';
  claI3 = 'image3';

  constructor() { }

  ngOnInit(): void {
  }

}
