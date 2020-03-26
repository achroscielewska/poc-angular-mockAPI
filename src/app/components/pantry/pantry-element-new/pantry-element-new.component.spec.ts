import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryElementNewComponent } from './pantry-element-new.component';

describe('PantryElementNewComponent', () => {
  let component: PantryElementNewComponent;
  let fixture: ComponentFixture<PantryElementNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PantryElementNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantryElementNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
