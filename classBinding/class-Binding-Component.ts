import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBinding } from './class-binding.ts';

describe('ClassBindingComponent', () => {
  let component: ClassBinding-Component;
  let fixture: ComponentFixture<ClassBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassBinding-Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassBinding-Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});