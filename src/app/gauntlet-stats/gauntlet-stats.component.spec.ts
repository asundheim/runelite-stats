import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GauntletStatsComponent } from './gauntlet-stats.component';

describe('GauntletStatsComponent', () => {
  let component: GauntletStatsComponent;
  let fixture: ComponentFixture<GauntletStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GauntletStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GauntletStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
