import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PantryListComponent } from './pantry-list.component';
import { HttpClientModule } from '@angular/common/http';


describe('PantryListComponent', () => {
  let component: PantryListComponent;
  let fixture: ComponentFixture<PantryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PantryListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PantryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
