import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoxDrystreaksComponent } from './cox-drystreaks.component';

describe('CoxDrystreaksComponent', () => {
  let component: CoxDrystreaksComponent;
  let fixture: ComponentFixture<CoxDrystreaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoxDrystreaksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoxDrystreaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
