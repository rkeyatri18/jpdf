import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Template10Component } from './template10.component';

describe('Template10Component', () => {
  let component: Template10Component;
  let fixture: ComponentFixture<Template10Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Template10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
