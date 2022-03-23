import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByWordInputComponent } from './by-word-input.component';

describe('ByWordInputComponent', () => {
  let component: ByWordInputComponent;
  let fixture: ComponentFixture<ByWordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByWordInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByWordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
