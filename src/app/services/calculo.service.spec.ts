import { TestBed, inject } from '@angular/core/testing';
import { CalculoService } from './calculo.service';

describe('CalculoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculoService]
    });
  });

  it('should be created', inject([CalculoService], (service: CalculoService) => {
    expect(service).toBeTruthy();
  }));

  it('deve existir um método "dividir"', inject([CalculoService], (service: CalculoService) => {
    expect(service.dividir).toBeTruthy();
  }));

  it('dividir dois números e retornar o quociente', inject([CalculoService], (service: CalculoService) => {
    const quociente = service.dividir(75, 5);
    expect(quociente).toEqual(15);
  }));

  it('lançar exceção "divisão por zero"', inject([CalculoService], (service: CalculoService) => {
    expect(() => {
      service.dividir(75, 0);
    }).toThrowError('divisão por zero');
  }));
});
