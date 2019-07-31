import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProBindComponent } from './pro-bind/pro-bind.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ProBindComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
