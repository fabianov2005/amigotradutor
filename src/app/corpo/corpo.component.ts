import { Component, OnInit, Input } from '@angular/core';
import { MockFrase } from '../corpo/frase-mock';
import { Frase } from '../shared/frase.model';
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
      @Input() tentativas: TentativasComponent;
      public img = '../../assets/coracao_cheio.png';

      constructor() {
        this.frase =  MockFrase[1];
        this.fraseIng = this.frase.fraseIngles;
      }

      ngOnInit() {
      }

      public verificaFrase() {

        console.log('Metodo acessado.');
        console.log(this.frasePort);
        console.log(this.frase.frasePortugues);
        if (this.frasePort !== this.frase.frasePortugues) {
              console.log(this.contaTentativas);
              if (this.contaTentativas <= 3 ) {
                  console.log('Entrou no if');
                  alert('Opa!!! Tradução incorreta ! Tente novamente.');
                  console.log(this.contaTentativas);
                  console.log(this.contaTentativas);
                  switch (this.contaTentativas) {
                        case 1:
                              console.log('Entrou tentativa 1');
                              this.tentativas.primeiroCoracaoVariavel = this.img;
                              break;
                        case 2:
                        console.log('Entrou tentativa 2');
                              this.tentativas.segundoCoracaoVariavel = this.img;
                              break;
                        case 3:
                        console.log('Entrou tentativa 3');
                              this.tentativas.terceiroCoracaoVariavel = this.img;
                              break;
                        default:
                            break;
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
