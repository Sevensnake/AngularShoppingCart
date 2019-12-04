import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwaretoolsComponent } from './hardwaretools.component';

describe('HardwaretoolsComponent', () => {
  let component: HardwaretoolsComponent;
  let fixture: ComponentFixture<HardwaretoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwaretoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwaretoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
