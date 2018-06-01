import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculoService {

  constructor() { }

  dividir(dividendo: number, divisor: number) {
    if (!divisor) {
      throw new Error('divisão por zero');
    }
    return dividendo / divisor;
  }
}
