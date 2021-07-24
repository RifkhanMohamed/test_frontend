import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleEntryComponent } from './style-entry.component';

describe('StyleEntryComponent', () => {
  let component: StyleEntryComponent;
  let fixture: ComponentFixture<StyleEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
