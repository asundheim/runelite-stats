import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoxDrystreaksComponent } from './cox-drystreaks/cox-drystreaks.component';
import { GauntletStatsComponent } from './gauntlet-stats/gauntlet-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    CoxDrystreaksComponent,
    GauntletStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
