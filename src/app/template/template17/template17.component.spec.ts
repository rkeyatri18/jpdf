import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Template17Component } from './template17.component';

describe('Template17Component', () => {
  let component: Template17Component;
  let fixture: ComponentFixture<Template17Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Template17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
