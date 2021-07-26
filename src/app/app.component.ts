import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayCoxDrystreaksTab = false;
  displayGauntletTab = true;
  
  enableCoxDrystreaks() {
    this.displayCoxDrystreaksTab = true;
    this.displayGauntletTab = false;
  }

  enableGauntletStats() {
    this.displayCoxDrystreaksTab = false;
    this.displayGauntletTab = true;
  }
}
