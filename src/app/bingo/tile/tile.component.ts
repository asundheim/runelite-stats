import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBingoTile } from 'src/interfaces/IBingoTile';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent{
  @Input() tile: IBingoTile;
  @Output() pointsChangedEvent = new EventEmitter<number>();
  @Output() tileSelectedEvent = new EventEmitter<IBingoTile>();
  @Output() tileUnselectedEvent = new EventEmitter<IBingoTile>();

  selected1: boolean = false;
  selected2: boolean = false;
  selected3: boolean = false;
  points: number = 0;

  select1() {
    if (this.selected1) {
      if (this.tile.points_reversed) {
        this.pointsChangedEvent.emit(-this.tile.tier3_points);
      } else {
        this.pointsChangedEvent.emit(-this.tile.tier1_points);
      }

      this.points = 0;
      this.tileUnselectedEvent.emit(this.tile);
    }
    else {
      if (this.tile.points_reversed) {
        this.pointsChangedEvent.emit(this.tile.tier3_points - this.points);
        this.points = this.tile.tier3_points;
      }
      else {
        this.pointsChangedEvent.emit(this.tile.tier1_points - this.points);
        this.points = this.tile.tier1_points;
      }
      
      this.tileSelectedEvent.emit(this.tile);
    }
    
    this.selected1 = !this.selected1;
    this.selected2 = false;
    this.selected3 = false;
    
  }

  select2() {
    if (this.selected2) {
      this.pointsChangedEvent.emit(-this.tile.tier2_points);
      this.points = 0;
      this.tileUnselectedEvent.emit(this.tile);
    }
    else {
      this.pointsChangedEvent.emit(this.tile.tier2_points - this.points);
      this.points = this.tile.tier2_points;
      this.tileSelectedEvent.emit(this.tile);
    }

    this.selected1 = false;
    this.selected2 = !this.selected2;
    this.selected3 = false;
  }

  select3() {
    if (this.selected3) {
      if (this.tile.points_reversed) {
        this.pointsChangedEvent.emit(-this.tile.tier1_points);
      } else {
        this.pointsChangedEvent.emit(-this.tile.tier3_points);
      }

      this.points = 0;
      this.tileUnselectedEvent.emit(this.tile);
    }
    else {
      if (this.tile.points_reversed) {
        this.pointsChangedEvent.emit(this.tile.tier1_points - this.points);
        this.points = this.tile.tier1_points;
      }
      else {
        this.pointsChangedEvent.emit(this.tile.tier3_points - this.points);
        this.points = this.tile.tier3_points;
      }

      this.tileSelectedEvent.emit(this.tile);
    }
    
    
    this.selected1 = false;
    this.selected2 = false;
    this.selected3 = !this.selected3;
  }

}
