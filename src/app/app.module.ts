import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SpielfeldComponent } from './spielfeld/spielfeld.component';

@NgModule({
  declarations: [
    AppComponent,
    SpielfeldComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'spielfeld', component: SpielfeldComponent },
      { path: '', redirectTo: '/spielfeld', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
