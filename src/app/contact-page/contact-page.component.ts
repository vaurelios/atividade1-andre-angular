import { Component, OnInit } from '@angular/core';
import { NgForm }            from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  host: {
    class: "row mt-5"
  },
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm): void {
    console.log(f.value);
  }
}
