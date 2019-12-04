import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListAddComponent } from './shopping-list-add.component';

describe('ShoppingListAddComponent', () => {s
  let component: ShoppingListAddComponent;
  let fixture: ComponentFixture<ShoppingListAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
