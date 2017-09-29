import { Injectable } from '@angular/core';
import { User }       from './user';

@Injectable()
export class AuthService {

  constructor() { }

  getUser(): User {
    if (this.isLogged()) {

    }

    throw new Error("Not logged in!!!");
  }

  isLogged(): boolean {
    return true;
  }
}
