import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gauntlet-stats',
  templateUrl: './gauntlet-stats.component.html',
  styleUrls: ['./gauntlet-stats.component.scss']
})
export class GauntletStatsComponent implements AfterViewInit {
  @ViewChild('deathLootsVsTime', {static: false})
  deathLootsCanvas: any = null;
  lineCtx: CanvasRenderingContext2D | any = null;
  gauntletData: {date: Date, loot: {name: string, price: number, quantity: number}[]}[] = [];
  hoveredLoot: any = null;
  mostCompletesInDay = 0;
  mostCompletesInDayDay = "";
  mostFailsInDay = 0;
  mostFailsInDayDay = "";
  mostCompletesInARow = 0;
  mostFailsInARow = 0;

  fileLoaded = false;
  file : any;

  constructor() { }

  ngAfterViewInit(): void {
    this.lineCtx = this.deathLootsCanvas.nativeElement.getContext('2d');
    this.lineCtx.canvas.width = window.innerWidth;
  }

  fileBrowserHandler(files: any) {
    this.fileLoaded = true;

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
      console.log(this.lineCtx);
      
      let winStreak = 0;
      let loseStreak = 0;
      data.forEach((item : any, idx: number) => {
        let date : Date = new Date(Date.parse(item.date));
        let loot : {name: string, price: number, quantity: number}[] = item.drops;
        this.gauntletData.push({date: date, loot: loot});
        if (loot.length === 1) {
          winStreak = 0;
          loseStreak += 1;
        } else {
          winStreak += 1;
          loseStreak = 0;
        }
        if (winStreak > this.mostCompletesInARow) {
          this.mostCompletesInARow = winStreak;
        }

        if (loseStreak > this.mostFailsInARow) {
          this.mostFailsInARow = loseStreak;
        }
      });

      let dayGroups : {[key: string]: []} = this.gauntletData.reduce((map : any, next) => {
        let date : Date = next.date;
        (map[`${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`] = map[`${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`] || []).push(next);
        return map;
      }, {});

      console.log(dayGroups);

      Object.entries(dayGroups).forEach(([day, kills]) => {
        if (kills.filter((kill : any) => kill.loot.length > 1).length > this.mostCompletesInDay) {
          this.mostCompletesInDay = kills.filter((kill : any) => kill.loot.length > 1).length;
          this.mostCompletesInDayDay = day;
        }

        if (kills.filter((kill : any) => kill.loot.length === 1).length > this.mostFailsInDay) {
          this.mostFailsInDay = kills.filter((kill : any) => kill.loot.length === 1).length;
          this.mostFailsInDayDay = day;
        }
      });

      this.redrawLineGraph();

      this.lineCtx.canvas.addEventListener('mousemove', (e: any) => {
        this.redrawLineGraph();
        let xSnap = e.offsetX - (e.offsetX % (this.lineCtx.canvas.width / this.gauntletData.length));
        this.hoveredLoot = this.gauntletData[Math.floor(xSnap/(this.lineCtx.canvas.width / data.length))].loot;
        this.lineCtx.strokeRect(xSnap, 0, (this.lineCtx.canvas.width / data.length), this.lineCtx.canvas.height);
      });
    }
    fileReader.readAsText(this.file);
  }

  redrawLineGraph() {
    this.gauntletData.forEach((item : any, idx: number) => {
      let xPos = (this.lineCtx.canvas.width / this.gauntletData.length) * idx;
      this.lineCtx.fillStyle = item.loot.length === 1 ? "#ffb3ba" : "#baffc9";
      if (item.loot.filter((x: any) => x.name === "Crystal armour seed" || x.name === "Crystal weapon seed").length > 0) {
        this.lineCtx.fillStyle = "#ffdfba";
      }

      if (item.loot.filter((x: any) => x.name === "Youngllef").length > 0) {
        this.lineCtx.fillStyle = "#bae1ff";
      }

      if (item.loot.filter((x: any) => x.name === "Enhanced crystal weapon seed").length > 0) {
        this.lineCtx.fillStyle = "#0cfff4";
      }

      this.lineCtx.beginPath();
      this.lineCtx.moveTo(xPos, 0);
      this.lineCtx.fillRect(xPos, 0, (this.lineCtx.canvas.width / this.gauntletData.length), this.lineCtx.canvas.height);
      this.lineCtx.stroke();
      this.lineCtx.closePath();        
    });
  }

}
