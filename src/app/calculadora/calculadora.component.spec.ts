import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CalculadoraComponent } from './calculadora.component';
import { DebugElement } from '@angular/core';
import { CalculoService } from '../services/calculo.service';

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
    component.quociente = -1;
    component.calcularDivisao();
    expect(component.quociente).not.toEqual(-1);
  });

  it('resultado da operação deve ser apresentado', () => {
    component.quociente = 15;
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
});
