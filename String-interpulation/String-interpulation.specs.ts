import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInterpolationComponent } from './string-interpulation';

describe('StringInterpolationComponent', () => {
  let component: StringInterpolationComponent;
  let fixture: ComponentFixture<StringInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringInterpolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});