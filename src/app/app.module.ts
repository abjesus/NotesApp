import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NotasComponent } from './notas/notas.component';
import { NotaComponent } from './nota/nota.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NotasComponent,
    NotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
