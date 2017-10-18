import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { NgbModule }        from '@ng-bootstrap/ng-bootstrap';
import { RouterModule }     from '@angular/router';
import { FormsModule }      from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }          from './app.component';
import { MainMenuComponent }     from './main-menu/main-menu.component';
import { IndexPageComponent }    from './index-page/index-page.component';
import { AboutPageComponent }    from './about-page/about-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ContactPageComponent }  from './contact-page/contact-page.component';
import { LoginPageComponent }    from './login-page/login-page.component';
import { SingupPageComponent }   from './singup-page/singup-page.component';
import { ProductPageComponent }  from './product-page/product-page.component';
import { AuthService } from "./auth.service";

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    IndexPageComponent,
    AboutPageComponent,
    ProductsPageComponent,
    ProductPageComponent,
    ContactPageComponent,
    LoginPageComponent,
    SingupPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
      },
      {
        path: 'index',
        component: IndexPageComponent
      },
      {
        path: 'about',
        component: AboutPageComponent
      },
      {
        path: 'products',
        component: ProductsPageComponent
      },
      {
        path: 'product/:cod',
        component: ProductPageComponent
      },
      {
        path: 'contact',
        component: ContactPageComponent
      },
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'singup',
        component: SingupPageComponent
      }
    ]),
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
