import { BrowserModule } from "@angular/platform-browser";
import { NgModule,LOCALE_ID } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from "./app.component";
import { AppRouterModule } from './app-router.module';
import { SharedModule } from "./shared/shared.module";
import { VentasModule } from './ventas/ventas.module';

//Cambiar el locale de la app
import localeEs from "@angular/common/locales/es-AR";
import localeHe from "@angular/common/locales/he";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEs);
registerLocaleData(localeHe);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-AR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
