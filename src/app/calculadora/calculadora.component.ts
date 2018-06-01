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
  quociente: number;

  constructor(private calculoService: CalculoService) { }

  ngOnInit() {
  }

  calcularDivisao() {
    this.quociente = this.calculoService.dividir(this.dividendo, this.divisor);
  }
}
