import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithButtonComponent } from './search-with-button.component';

describe('SearchWithButtonComponent', () => {
  let component: SearchWithButtonComponent;
  let fixture: ComponentFixture<SearchWithButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchWithButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWithButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
