import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cox-dry-streak';
  file : any;
  dryStreak = 0;
  dryPoints : number[] = [];
  dryStreaks : any[] = [];

  constructor() {
    
  }

  fileBrowserHandler(files: any) {
    this.dryStreaks = [];
    this.dryPoints = [];
    this.dryStreak = 0;

    this.file = files.target.files[0];
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
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
        if (i.specialLoot) {
            let prob = 1 - this.dryPoints.map(x => 1 - this.chance(x)).reduce((a,b) => a * b, 1);
            this.dryStreaks.push({streak: this.dryStreak, loot: i.specialLoot, receiver: i.specialLootReceiver, p: prob, points: this.totalPoints()});
            console.log(`Dry Streak: ${this.dryStreak} - broken by ${i.specialLoot} from ${i.specialLootReceiver} - probability of purple ${prob * 100}% (${this.totalPoints()} points)`);
            this.dryStreak = 0;
            this.dryPoints = [];
        }
      });
      let prob = 1 - this.dryPoints.map(x => 1 - this.chance(x)).reduce((a,b) => a * b, 1);
      this.dryStreaks.push({streak: this.dryStreak, loot: null, receiver: null, p: prob, points: this.totalPoints()})
      console.log(`Current Dry Streak: ${this.dryStreak} - probability of purple ${prob * 100}% (${this.totalPoints()} points)`);
    }
    fileReader.readAsText(this.file);
  }

  factorial(num: any){
      var rval=1;
      for (var i = 2; i <= num; i++)
          rval = rval * i;
      return rval;
  }

  chance(num : any){
      return ( num / 570000 ) * .8;
  }

  totalPoints(){
      return this.dryPoints.reduce((a,b) => a + b, 0);
  }

  streakToString(streak: any) {
    return `${!streak.loot?"Current ":""}Dry Streak: ${streak.streak}` + (streak.loot ? ` - broken by ${streak.loot} from ${streak.receiver}` : "") +  ` - probability of purple ${streak.p * 100}% (${streak.points} points)`;
  }
}
