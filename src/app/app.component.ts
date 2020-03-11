import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nome = 'Dark';
  fundo = 'light';
  botao = 'BoDark';

  mudarCor() {
    if (this.fundo === 'light') {
      this.fundo = 'dark';
      this.botao = 'BoLight';
      this.nome = 'Light';
    } else if (this.fundo === 'dark') {
      this.fundo = 'light';
      this.botao = 'BoDark';
      this.nome = 'Dark';
    }
  }

}
