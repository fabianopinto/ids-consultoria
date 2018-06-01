import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CalculoService } from '../services/calculo.service';
import { MensagemService } from '../services/mensagem.service';
import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;
  let dividendo: DebugElement;
  let divisor: DebugElement;
  let botao: DebugElement;
  let resultado: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculadoraComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    dividendo = fixture.debugElement.query(By.css('#dividendo'));
    divisor = fixture.debugElement.query(By.css('#divisor'));
    botao = fixture.debugElement.query(By.css('button'));
    resultado = fixture.debugElement.query(By.css('#resultado'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve incluir entradas para dividendo e divisor', () => {
    expect(dividendo).toBeTruthy();
    expect(divisor).toBeTruthy();
  });

  function sendValue(element: DebugElement, value: string) {
    element.nativeElement.value = value;
    element.nativeElement.dispatchEvent(new Event('input'));
  }

  it('entrada de dividendo reflete no modelo', () => {
    sendValue(dividendo, '75');
    fixture.detectChanges();
    expect(component.dividendo).toEqual(75);
  });

  it('entrada divisor reflete no modelo', () => {
    sendValue(divisor, '5');
    fixture.detectChanges();
    expect(component.divisor).toEqual(5);
  });

  it('deve incluir um botão "Dividir"', () => {
    expect(botao).toBeTruthy();
  });

  it('botão "Dividir" deve executar o cálculo', () => {
    spyOn(component, 'calcularDivisao');
    botao.nativeElement.click();
    fixture.detectChanges();
    expect(component.calcularDivisao).toHaveBeenCalled();
  });

  it('operação deve ser registrar resultado', () => {
    component.dividendo = 75;
    component.divisor = 5;
    component.resultado = 'r';
    component.calcularDivisao();
    expect(component.resultado).not.toEqual('r');
  });

  it('resultado da operação deve ser apresentado', () => {
    component.resultado = '15';
    fixture.detectChanges();
    expect(resultado).toBeTruthy();
    expect(resultado.nativeElement.innerText).toEqual('15');
  });

  it('utilizar o serviço "CalculoService" na operação', () => {
    const service = TestBed.get(CalculoService);
    spyOn(service, 'dividir');
    component.calcularDivisao();
    expect(service.dividir).toHaveBeenCalled();
  });

  it('tratar erro no caso de divisão por zero', () => {
    expect(() => {
      component.divisor = 0;
      component.calcularDivisao();
    }).not.toThrow();
  });

  it('bloquear botão "Dividir" quando dividendo é negativo', () => {
    component.dividendo = -75;
    fixture.detectChanges();
    expect(botao.nativeElement.disabled).toBeTruthy();
  });

  it('bloquear botão "Dividir" quando divisor é negativo', () => {
    component.divisor = -5;
    fixture.detectChanges();
    expect(botao.nativeElement.disabled).toBeTruthy();
  });

  it('no caso de resultado exponencial apresentar "resultado inválido"', () => {
    component.dividendo = 75;
    component.divisor = 500000000000;
    component.calcularDivisao();
    fixture.detectChanges();
    expect(resultado.nativeElement.innerText).toEqual('resultado inválido');
  });

  it('deve produzir mensagens para serviço "MensagemService"', () => {
    const service = TestBed.get(MensagemService);
    spyOn(service, 'next');
    component.divisor = 0;
    component.calcularDivisao();
    expect(service.next).toHaveBeenCalled();
  });
});
