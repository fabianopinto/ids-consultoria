import { AppPage } from './app.po';
import { browser, ElementArrayFinder } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('deve executar divisão simples', () => {
    page.navigateTo();
    page.setDividendo('75');
    page.setDivisor('5');
    page.clickDividir();
    expect(page.getResultado()).toEqual('15');
  });

  it('deve apresentar "resultado inválido" para resultado exponencial', () => {
    page.navigateTo();
    page.setDividendo('75');
    page.setDivisor('500000000000');
    page.clickDividir();
    expect(page.getResultado()).toEqual('resultado inválido');
  });

  it('deve apresentar mensagem de erro para divisão por zero', () => {
    page.navigateTo();
    page.setDivisor('1');
    page.clickDividir();
    page.setDivisor('0');
    page.clickDividir();
    expect(page.getMensagem()).toBeFalsy();
  });
});
