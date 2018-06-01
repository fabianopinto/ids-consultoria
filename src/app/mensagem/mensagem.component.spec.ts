import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MensagemService } from '../services/mensagem.service';
import { MensagemComponent } from './mensagem.component';

describe('MensagemComponent', () => {
  let component: MensagemComponent;
  let fixture: ComponentFixture<MensagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MensagemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function getMensagem() {
    return fixture.debugElement.query(By.css('.mensagem'));
  }

  it('mensagem deve ser apresentada', () => {
    component.mensagem = 'm';
    fixture.detectChanges();
    expect(getMensagem().nativeElement.innerText).toEqual('m');
  });

  it('deve consumir e apresentar mensagens do serviço "MensagemService"', () => {
    TestBed.get(MensagemService).next('m');
    fixture.detectChanges();
    expect(component.mensagem).toEqual('m');
  });
});
