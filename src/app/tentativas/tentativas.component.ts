import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public primeiroCoracaoVariavel;
  public segundoCoracaoVariavel;
  public terceiroCoracaoVariavel;

  constructor() {
  }

  ngOnInit() {
    this.primeiroCoracaoVariavel = '../../assets/coracao_vazio.png';
    this.segundoCoracaoVariavel = '../../assets/coracao_vazio.png';
    this.terceiroCoracaoVariavel = '../../assets/coracao_vazio.png';
  }
}
