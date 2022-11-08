import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoxDrystreaksComponent } from './cox-drystreaks/cox-drystreaks.component';
import { GauntletStatsComponent } from './gauntlet-stats/gauntlet-stats.component';
import { BingoComponent } from './bingo/bingo.component';
import { TileComponent } from './bingo/tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    CoxDrystreaksComponent,
    GauntletStatsComponent,
    BingoComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
