import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { MockFrase } from '../corpo/frase-mock';
import { TentativasComponent } from '../tentativas/tentativas.component';

@Component({
  selector: 'app-corpo',
  templateUrl: './corpo.component.html',
  styleUrls: ['./corpo.component.css']
})
export class CorpoComponent implements OnInit {

      private frase: Frase;

      public fraseIng: string;
      public frasePort: string;

      public contaTentativas = 3;

      public tentativas: TentativasComponent;
      public img = '../../assets/coracao_cheio.png';

      constructor() {
        this.frase =  MockFrase[1];
        this.fraseIng = this.frase.fraseIngles;
      }

      ngOnInit() {
    }

      public verificaFrase(event) {

        if (this.frasePort !== this.frase.frasePortugues) {
              if (this.contaTentativas > 3 ) {
                  alert('Opa!!! Tradução incorreta ! Tente novamente.');
                  if (this.contaTentativas === 1) {
                      this.tentativas.setPrimeiroCoracaoVariavel(this.img);
                  } else {
                        if (this.contaTentativas === 2) {
                            this.tentativas.setSegundoCoracaoVariavel(this.img);
                        } else {
                            this.tentativas.setTerceiroCoracaoVariavel(this.img);
                        }
                  }
                  this.contaTentativas = this.contaTentativas - 1;

              }
        } else {
              if ( MockFrase.indexOf(this.frase) > 4) {
                        if (confirm('Frases acabaram. Deseja recomeçar ?')) {
                            this.contaTentativas = 3;
                        } else {
                              alert('Valeu pela brincadeira !!!');
                        }
                  } else {
                        alert('Parabens!!! Você acertou.');
                        this.frase = MockFrase[MockFrase.indexOf(this.frase) + 1 ];
                  }
        }
      }
}
