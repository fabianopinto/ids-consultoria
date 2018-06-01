import { Component, OnInit } from '@angular/core';
import { MensagemService } from '../services/mensagem.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  mensagem: string;

  constructor(private mensagemService: MensagemService) { }

  ngOnInit() {
    this.mensagemService.subscribe((mensagem) => {
      this.mensagem = mensagem;
    });
  }

}
