import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryElementComponent } from './pantry-element.component';

describe('PantryElementComponent', () => {
  let component: PantryElementComponent;
  let fixture: ComponentFixture<PantryElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantryElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantryElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
