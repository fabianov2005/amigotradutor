import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { MockFrase } from '../corpo/frase-mock';
import { ExecFileOptionsWithStringEncoding } from 'child_process';
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

      constructor() {
          this.frase =  MockFrase[1];
          this.fraseIng = this.frase.fraseIngles;
      }

      ngOnInit() {
      }

      public verificaFrase() {
        if (this.frasePort !== this.frase.frasePortugues) {
              alert('Opa!!! Tradução incorreta ! Tente novamente.');
              this.contaTentativas = this.contaTentativas - 1;
              TentativasComponent
        } else {
              alert('Parabens!!! Você acertou.');
              this.frase = MockFrase[MockFrase.indexOf(this.frase) + 1 ];
        }
      }

}
