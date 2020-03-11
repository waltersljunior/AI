import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fundo = 'light';
  botao = 'BoDark';
  mudarCor() {
    if (this.fundo === 'light') {
      this.fundo = 'dark';
      this.botao = 'BoLight';
    } else if (this.fundo === 'dark') {
      this.fundo = 'light';
      this.botao = 'BoDark';
    }
  }
}
