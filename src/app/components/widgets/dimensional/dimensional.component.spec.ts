import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionalComponent } from './dimensional.component';

describe('DimensionalComponent', () => {
  let component: DimensionalComponent;
  let fixture: ComponentFixture<DimensionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimensionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
