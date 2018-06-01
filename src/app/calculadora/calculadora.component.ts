import { Component, OnInit } from '@angular/core';
import { CalculoService } from '../services/calculo.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  dividendo: number;
  divisor: number;
  resultado: string;

  constructor(private calculoService: CalculoService) { }

  ngOnInit() {
  }

  calcularDivisao() {
    try {
      this.resultado = String(this.calculoService.dividir(this.dividendo, this.divisor));
      if (this.resultado.match(/\de/)) {
        this.resultado = 'resultado inválido';
      }
    } catch (error) {
      console.log(error);
    }
  }

  isEntradaNegativos() {
    return this.dividendo < 0 || this.divisor < 0;
  }
}
