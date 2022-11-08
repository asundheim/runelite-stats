import { Component, OnInit } from '@angular/core';
import { IBingoTile } from 'src/interfaces/IBingoTile';

@Component({
  selector: 'app-bingo',
  templateUrl: './bingo.component.html',
  styleUrls: ['./bingo.component.scss']
})
export class BingoComponent {

  bingoTiles = [
    [ // row 1
      {
        tier1_points: 25,
        tier2_points: 50,
        tier3_points: 100,
        points_reversed: true,
        display_name: "Fastest Chambers Time (Trio)",
        hasPoints: true,
        image: "../../assets/fastest-cox.png",
        row: 1,
        column: 1
      } as IBingoTile,
      {
        tier1_points: 10,
        tier2_points: 20,
        tier3_points: 30,
        points_reversed: false,
        display_name: "Slayer Experience",
        hasPoints: true,
        image: "../../assets/slayer-xp.png",
        row: 1,
        column: 2
      } as IBingoTile,
      {
        tier1_points: 10,
        tier2_points: 25,
        tier3_points: 50,
        points_reversed: false,
        display_name: "Nex Kills (5-mans or less)",
        hasPoints: true,
        image: "../../assets/nex-kills.png",
        row: 1,
        column: 3
      } as IBingoTile,
      {
        tier1_points: 10,
        tier2_points: 25,
        tier3_points: 50,
        points_reversed: false,
        display_name: "Different Barrows Uniques",
        hasPoints: true,
        image: "../../assets/barrows.png",
        row: 1,
        column: 4
      } as IBingoTile,
      {
        tier1_points: 10,
        tier2_points: 25,
        tier3_points: 50,
        points_reversed: false,
        display_name: "Tombs of Amascut Uniques (no gems)",
        hasPoints: true,
        image: "../../assets/toa-uniques.png",
        row: 1,
        column: 5
      } as IBingoTile
    ] as IBingoTile[],
    [ // row 2
      {
        tier1_points: 10,
        tier2_points: 25,
        tier3_points: 50,
        points_reversed: false,
        display_name: "ToA Raid Level Completion (Trio+)",
        hasPoints: true,
        image: "../../assets/toa-raid-level.png",
        row: 2,
        column: 1
      } as IBingoTile,
      {
        tier1_points: 10,
        tier2_points: 25,
        tier3_points: 50,
        points_reversed: false,
        display_name: "Nightmare Speeds (5-man)",
        hasPoints: true,
        image: "../../assets/nightmare-speeds.png",
        row: 2,
        column: 2
      } as IBingoTile,
      {
        tier1_points: 25,
        tier2_points: 50,
        tier3_points: 100,
        points_reversed: true,
        display_name: "Fastest Barbarian Assault",
        hasPoints: true,
        image: "../../assets/fastest-ba.png",
        row: 2,
        column: 3
      } as IBingoTile,
      {
        tier1_points: 10,
        tier2_points: 25,
        tier3_points: 50,
        points_reversed: false,
        display_name: "Cox CM Speeds (Trio)",
        hasPoints: true,
        image: "../../assets/cm-speeds.png",
        row: 2,
        column: 4
      } as IBingoTile,
      {
        tier1_points: 10,
        tier2_points: 25,
        tier3_points: 50,
        points_reversed: false,
        display_name: "Uniques from Different GWD Bosses",
        hasPoints: true,
        image: "../../assets/gwd-uniques.png",
        row: 2,
        column: 5
      } as IBingoTile
    ] as IBingoTile[],
    [ // row 3
      {
        tier1_points: 5,
        tier2_points: 15,
        tier3_points: 30,
        points_reversed: false,
        display_name: "Fight Cave Speeds",
        hasPoints: true,
        image: "../../assets/fight-cave-speeds.png",
        row: 3,
        column: 1
      } as IBingoTile,
      {
        tier1_points: 10,
        tier2_points: 30,
        tier3_points: 50,
        points_reversed: false,
        display_name: "Chambers of Xeric Uniques",
        hasPoints: true,
        image: "../../assets/cox-uniques.png",
        row: 3,
        column: 2
      } as IBingoTile,
      {
        tier1_points: 0,
        tier2_points: 0,
        tier3_points: 0,
        points_reversed: false,
        display_name: "Best Inferno Attempt per Team",
        hasPoints: false,
        image: "../../assets/inferno.png",
        row: 3,
        column: 3
      } as IBingoTile,
      {
        tier1_points: 25,
        tier2_points: 50,
        tier3_points: 100,
        points_reversed: true,
        display_name: "Fastest ToB Time (Trio)",
        hasPoints: true,
        image: "../../assets/fastest-tob.png",
        row: 3,
        column: 4
      } as IBingoTile,
      {
        tier1_points: 10,
        tier2_points: 25,
        tier3_points: 50,
        points_reversed: false,
        display_name: "Crystal Armour and Weapon Seeds",
        hasPoints: true,
        image: "../../assets/gauntlet.png",
        row: 3,
        column: 5
      } as IBingoTile
    ] as IBingoTile[],
    [ // row 4
      {
        tier1_points: 10,
        tier2_points: 30,
        tier3_points: 50,
        points_reversed: false,
        display_name: "ToB Speeds (Trio)",
        hasPoints: true,
        image: "../../assets/tob-speeds.png",
        row: 4,
        column: 1
      } as IBingoTile,
      {
        tier1_points: 5,
        tier2_points: 15,
        tier3_points: 30,
        points_reversed: false,
        display_name: "Dagannoth King Rings",
        hasPoints: true,
        image: "../../assets/dks.png",
        row: 4,
        column: 2
      } as IBingoTile,
      {
        tier1_points: 5,
        tier2_points: 20,
        tier3_points: 30,
        points_reversed: false,
        display_name: "CoX CM Completions (Trio)",
        hasPoints: true,
        image: "../../assets/cm-completions.png",
        row: 4,
        column: 3
      } as IBingoTile,
      {
        tier1_points: 10,
        tier2_points: 25,
        tier3_points: 50,
        points_reversed: false,
        display_name: "Different Wildy Demi Boss Shards",
        hasPoints: true,
        image: "../../assets/wildy.png",
        row: 4,
        column: 4
      } as IBingoTile,
      {
        tier1_points: 25,
        tier2_points: 50,
        tier3_points: 100,
        points_reversed: true,
        display_name: "Fastest Dragon Slayer 1 Time",
        hasPoints: true,
        image: "../../assets/ds1.png",
        row: 4,
        column: 5
      } as IBingoTile
    ] as IBingoTile[],
    [ // row 5
      {
        tier1_points: 5,
        tier2_points: 10,
        tier3_points: 20,
        points_reversed: false,
        display_name: "Hespori Speeds",
        hasPoints: true,
        image: "../../assets/hespori.png",
        row: 5,
        column: 1
      } as IBingoTile,
      {
        tier1_points: 25,
        tier2_points: 50,
        tier3_points: 100,
        points_reversed: true,
        display_name: "Fastest ToA Time (Trio)",
        hasPoints: true,
        image: "../../assets/fastest-toa.png",
        row: 5,
        column: 2
      } as IBingoTile,
      {
        tier1_points: 10,
        tier2_points: 30,
        tier3_points: 50,
        points_reversed: false,
        display_name: "ToA Speeds (Trio 300s)",
        hasPoints: true,
        image: "../../assets/toa-speeds.png",
        row: 5,
        column: 3
      } as IBingoTile,
      {
        tier1_points: 10,
        tier2_points: 20,
        tier3_points: 50,
        points_reversed: false,
        display_name: "Different Zulrah Uniques",
        hasPoints: true,
        image: "../../assets/zulrah.png",
        row: 5,
        column: 4
      } as IBingoTile,
      {
        tier1_points: 10,
        tier2_points: 20,
        tier3_points: 50,
        points_reversed: false,
        display_name: "Different Clue Scroll Uniques (any tier)",
        hasPoints: true,
        image: "../../assets/clue-scrolls.png",
        row: 5,
        column: 5
      } as IBingoTile
    ] as IBingoTile[]
  ] as IBingoTile[][];

  selectedTiles: boolean[][] = [
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false],
    [false,false,false,false,false]
  ];

  totalTotalPoints = 0;
  totalPoints: number = 0;
  rowPoints: number = 0;
  columnPoints: number = 0;
  infernoPoints: number = 0;

  updatePoints(value: number) {
    this.totalPoints += value;
  }

  selectTile(tile: IBingoTile){
    this.selectedTiles[tile.row-1][tile.column-1] = true;
    this.calculateLineBonuses();
  }

  unselectTile(tile: IBingoTile){
    this.selectedTiles[tile.row-1][tile.column-1] = false;
    console.log(this.selectedTiles);
    this.calculateLineBonuses();
  }

  onInferno(event: any) {
    this.infernoPoints = parseInt(event.target.value) || 0;
    if (this.infernoPoints > 0) {
      this.selectedTiles[2][2] = true;
    }
    else {
      this.selectedTiles[2][2] = false;
    }

    this.calculateLineBonuses();
  }

  realTotalPoints(): number {
    return this.totalPoints + this.infernoPoints;
  }

  calculateLineBonuses() {
    this.columnPoints = 0;
    this.rowPoints = 0;

    for (let i = 0; i < 5; i++) {
      let rowSelected = true;
      for (let j=0; j < 5; j++) {
        if (!this.selectedTiles[i][j]) {
          rowSelected = false;
          break;
        }
      }

      if (rowSelected){
        this.rowPoints += 25;
      }
    }

    for (let i = 0; i < 5; i++) {
      let columnSelected = true;
      for (let j=0; j < 5; j++) {
        if (!this.selectedTiles[j][i]) {
          columnSelected = false;
          break;
        }
      }

      if (columnSelected){
        this.columnPoints += 25;
      }
    }

    this.totalTotalPoints = this.totalPoints + this.infernoPoints + this.rowPoints + this.columnPoints;
  }
}
