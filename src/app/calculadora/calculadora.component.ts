import { Component, OnInit } from '@angular/core';
import { CalculoService } from '../services/calculo.service';
import { MensagemService } from '../services/mensagem.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  dividendo: number;
  divisor: number;
  resultado: string;

  constructor(
    private calculoService: CalculoService,
    private mensagemService: MensagemService) { }

  ngOnInit() {
  }

  calcularDivisao() {
    try {
      this.resultado = String(this.calculoService.dividir(this.dividendo, this.divisor));
      if (this.resultado.match(/\de/)) {
        this.resultado = 'resultado inválido';
      }
    } catch (error) {
      console.log(error.message);
      this.mensagemService.next(error.message);
    }
  }

  isEntradaNegativos() {
    return this.dividendo < 0 || this.divisor < 0;
  }
}
