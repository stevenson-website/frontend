/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EducationLogoComponent } from './education-logo.component';

describe('EducationLogoComponent', () => {
  let component: EducationLogoComponent;
  let fixture: ComponentFixture<EducationLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
