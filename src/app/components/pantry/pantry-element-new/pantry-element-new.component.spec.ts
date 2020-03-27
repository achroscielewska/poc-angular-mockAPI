import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PantryElementNewComponent } from './pantry-element-new.component';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('PantryElementNewComponent', () => {
  let component: PantryElementNewComponent;
  let fixture: ComponentFixture<PantryElementNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [PantryElementNewComponent],
      providers: [FormBuilder],
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
