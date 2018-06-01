import { TestBed, inject } from '@angular/core/testing';

import { MensagemService } from './mensagem.service';

describe('MensagemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MensagemService]
    });
  });

  it('should be created', inject([MensagemService], (service: MensagemService) => {
    expect(service).toBeTruthy();
  }));

  it('deve implementar "next" para produção de mensagens', inject([MensagemService], (service: MensagemService) => {
    expect(service.next).toBeTruthy();
  }));

  it('deve implementar "subscribe" para consumir mensagens', inject([MensagemService], (service: MensagemService) => {
    expect(service.subscribe).toBeTruthy();
  }));

  it('deve fazer a troca de mensagens', inject([MensagemService], (service: MensagemService) => {
    service.subscribe((mensagem) => {
      expect(mensagem).toEqual('m');
    });
    service.next('m');
  }));
});
