import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwaremainComponent } from './hardwaremain.component';

describe('HardwaremainComponent', () => {
  let component: HardwaremainComponent;
  let fixture: ComponentFixture<HardwaremainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwaremainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwaremainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
