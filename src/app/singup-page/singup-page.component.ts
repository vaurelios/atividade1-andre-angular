import { Component, OnInit } from '@angular/core';
import { NgForm }            from '@angular/forms';
import { AuthService }       from "../auth.service";
import { Router }            from "@angular/router";
import { SingupData }        from "../models/singup-data";

@Component({
  selector: 'app-singup-page',
  host: {
    class: 'row'
  },
  templateUrl: './singup-page.component.html',
  styleUrls: ['./singup-page.component.css']
})
export class SingupPageComponent implements OnInit {
  public submitted: boolean = false;
  public model: SingupData;

  constructor(private router: Router, private auth: AuthService) {
    this.model = new SingupData();
    this.model.comprovantePessoaTipo = "cpf";
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm): void {
    this.submitted = true;

    this.auth.newUser(this.model).then(
      success => {
        if (success)
          this.router.navigate(['login']);
        else
          this.submitted = false;
      }
    );
  }
}
