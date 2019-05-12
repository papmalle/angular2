import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CallComponent} from './call/call.component';
import {FormsModule} from '@angular/forms';
import {MenuComponent} from './menu/menu.component';
import {CallService} from './services/call.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './auth/auth.component';
import {RouterModule, Routes} from "@angular/router";
import {CallViewComponent} from './call-view/call-view.component';
import {AuthService} from "./services/auth.service";
import {FourOhFourComponent} from './four-oh-four/four-oh-four.component';
import {AuthGuard} from "./services/auth-guard.service";

const appRoutes: Routes = [
  {path: 'calls', canActivate: [AuthGuard], component: CallComponent},
  {path: 'calls/:id', canActivate: [AuthGuard], component: CallViewComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: AuthComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: '/not-found'}

]

@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    MenuComponent,
    AuthComponent,
    CallViewComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // pour utiliser le two way binding
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CallService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
