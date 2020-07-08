import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CabecalhoComponent } from './cabecalho/cabecalho.component';

@NgModule({
  declarations: [
    CabecalhoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [CabecalhoComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(CabecalhoComponent, { injector });
    customElements.define('cabecalho', el);
  }
  ngDoBootstrap(){}
}
