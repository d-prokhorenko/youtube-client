import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortngButtonsComponent } from './sortng-buttons.component';

describe('SortngButtonsComponent', () => {
  let component: SortngButtonsComponent;
  let fixture: ComponentFixture<SortngButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortngButtonsComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortngButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
