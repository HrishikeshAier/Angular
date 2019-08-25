import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompSuccessDirective } from './comp-success.directive';
import { CompFailuerDirective } from './comp-failuer.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompSuccessDirective,
    CompFailuerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
