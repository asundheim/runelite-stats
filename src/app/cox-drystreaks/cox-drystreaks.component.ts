import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cox-drystreaks',
  templateUrl: './cox-drystreaks.component.html',
  styleUrls: ['./cox-drystreaks.component.scss']
})
export class CoxDrystreaksComponent {
  title = 'cox-dry-streak';
  file : any;
  dryStreak = 0;
  dryPoints : number[] = [];
  dryStreaks : any[] = [];
  dryPurples : any[] = [];
  cumuPurples: number = 0;
  actualPurples: number = 0;
  fileLoaded = false;

  constructor() {
    
  }

  fileBrowserHandler(files: any) {
    this.fileLoaded = true;
    this.dryStreaks = [];
    this.dryPoints = [];
    this.dryPurples = [];
    this.dryStreak = 0;

    this.file = files.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.dryStreak = 0;
      this.dryPoints = [];
      this.dryStreaks = [];
      this.dryPurples = [];
      this.cumuPurples = 0;
      this.actualPurples = 0;
      const result : any = fileReader.result;
      console.log(result);
      const data = result.split("\n").filter((x : any) => x.length > 10).map((x : any) => {
        let result = JSON.parse(x);
        console.log(result);
        return result;
      });
      console.log(data);
      //;
      data.forEach((i : any) => {
        this.dryStreak++;
        this.dryPoints.push(i.totalPoints);
        this.dryPurples.push(this.chance(i.totalPoints));
        this.cumuPurples += this.chance(i.totalPoints);
        if (i.specialLoot) {
            let prob = 1 - this.dryPoints.map(x => 1 - this.chance(x)).reduce((a,b) => a * b, 1);
            this.dryStreaks.push({streak: this.dryStreak, loot: i.specialLoot, receiver: i.specialLootReceiver, p: prob, points: this.totalPoints(), expectation: this.dryPurples.reduce((a,b)=>a+b,0)});
            console.log(`Dry Streak: ${this.dryStreak} - broken by ${i.specialLoot} from ${i.specialLootReceiver} - probability of purple ${prob * 100}% (${this.totalPoints()} points)`);
            this.dryStreak = 0;
            this.dryPoints = [];
            this.dryPurples = [];
            this.actualPurples += 1;
        }
      });
      
      let prob = 1 - this.dryPoints.map(x => 1 - this.chance(x)).reduce((a,b) => a * b, 1);
      this.dryStreaks.push({streak: this.dryStreak, loot: null, receiver: null, p: prob, points: this.totalPoints(),expectation: this.dryPurples.reduce((a,b)=>a+b,0)});
      console.log(`Current Dry Streak: ${this.dryStreak} - probability of purple ${prob * 100}% (${this.totalPoints()} points)`);
    }
    fileReader.readAsText(this.file);
  }

  factorial(num: any) {
      var rval=1;
      for (var i = 2; i <= num; i++)
          rval = rval * i;
      return rval;
  }

  chance(num : any) {
      return ( num / 570000 ) * .657;
  }

  totalPoints() {
      return this.dryPoints.reduce((a,b) => a + b, 0);
  }

  streakToString(streak: any) {
    return `${!streak.loot?"Current ":""}Dry Streak: ${streak.streak}` + (streak.loot ? ` - broken by ${streak.loot} from ${streak.receiver}` : "") +  ` - probability of purple ${streak.p * 100}% (${streak.points} points) - expected purples: ${streak.expectation}`;
  }
}
