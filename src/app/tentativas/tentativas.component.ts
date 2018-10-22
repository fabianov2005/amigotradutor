import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {
  public primeiroCoracaoVariavel: String = '../../assets/coracao_vazio.png';
  public segundoCoracaoVariavel: String = '../../assets/coracao_vazio.png';
  public terceiroCoracaoVariavel: String = '../../assets/coracao_vazio.png';
  constructor() { }

  ngOnInit() {
  }

}
