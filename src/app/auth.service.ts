import { Injectable }        from '@angular/core';
import { User }              from './user';
import { SingupData }        from "./models/singup-data";
import { HttpClient }        from "@angular/common/http";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthToken }         from "./models/auth-token";
import { LoginData }         from "./models/login-data";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  getUser(): User {
    if (this.isLogged()) {

    }

    throw new Error("Not logged in!!!");
  }

  async newUser(data: SingupData): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.http.post('http://localhost:8080/MotoPecas/auth/newUser', data).subscribe(
        res => {
          resolve(true);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('AuthService: Client side error:', err.error.message);
            resolve(false);
          } else {
            reject({ status: err.error.status, error: err.error.body });
          }
        }
      );
    });
  }

  isLogged(): boolean {
    return true;
  }

  async login(data: LoginData): Promise<AuthToken> {
    return new Promise<AuthToken>((resolve, reject) => {
      this.http.post<AuthToken>('http://localhost:8080/MotoPecas/auth/login', data).subscribe(
        res => {
          resolve(res);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('AuthService: Client side error:', err.error.message);
            reject();
          } else {
            reject({ status: err.error.status, error: err.error.body });
          }
        }
      );
    });
  }
}
