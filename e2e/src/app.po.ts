import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get('/');
  }

  setDividendo(text: string) {
    const input = element(by.css('#dividendo'));
    input.clear();
    input.sendKeys(text);
  }

  setDivisor(text: string) {
    const input = element(by.css('#divisor'));
    input.clear();
    input.sendKeys(text);
  }

  clickDividir() {
    element(by.buttonText('Dividir')).click();
  }

  getResultado() {
    return element(by.css('#resultado')).getText();
  }

  getMensagem() {
    const e = element.all(by.css('.mensagem'));
    return e.count().then((count) => count && e.first().getText());
  }

}
