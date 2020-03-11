import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Exemplo1Component } from './views/exemplo1/exemplo1.component';
import { Exe1Component } from './views/exe1/exe1.component';
import { Exe2Component } from './views/exe2/exe2.component';
import { Exe3Component } from './views/exe3/exe3.component';
import { Exe4Component } from './views/exe4/exe4.component';
import { Exe5Component } from './views/exe5/exe5.component';
import { Exe6Component } from './views/exe6/exe6.component';

@NgModule({
  declarations: [
    AppComponent,
    Exemplo1Component,
    Exe1Component,
    Exe2Component,
    Exe3Component,
    Exe4Component,
    Exe5Component,
    Exe6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
