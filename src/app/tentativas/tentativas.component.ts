import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public primeiroCoracaoVariavel = '../../assets/coracao_vazio.png';
  public segundoCoracaoVariavel = '../../assets/coracao_vazio.png';
  public terceiroCoracaoVariavel = '../../assets/coracao_vazio.png';

  constructor() { }

  ngOnInit() {
  }

  public getPrimeiroCoracaoVariavel(): string {
    return this.primeiroCoracaoVariavel;
  }

  public setPrimeiroCoracaoVariavel(v: string) {
    this.primeiroCoracaoVariavel = v;
  }

  public getSegundoCoracaoVariavel(): string {
    return this.segundoCoracaoVariavel;
  }

  public setSegundoCoracaoVariavel(v: string) {
    this.segundoCoracaoVariavel = v;
  }

  public getTerceiroCoracaoVariavel(): string {
    return this.terceiroCoracaoVariavel;
  }

  public setTerceiroCoracaoVariavel(v: string) {
    this.terceiroCoracaoVariavel = v;
  }
}
