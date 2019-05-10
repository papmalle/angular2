import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CallComponent} from './call/call.component';
import {FormsModule} from '@angular/forms';
import {MenuComponent} from './menu/menu.component';
import {CallService} from './services/call.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // pour utiliser le two way binding
    HttpClientModule
  ],
  providers: [
    CallService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
