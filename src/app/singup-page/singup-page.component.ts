import { Component, OnInit } from '@angular/core';
import { NgForm }            from '@angular/forms';

@Component({
  selector: 'app-singup-page',
  host: {
    class: "row"
  },
  templateUrl: './singup-page.component.html',
  styleUrls: ['./singup-page.component.css']
})
export class SingupPageComponent implements OnInit {
  comprovantePessoaTipo: string = "cpf";

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm): void {
    console.log(f.value);
  }
}
