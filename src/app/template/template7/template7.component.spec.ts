import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Template7Component } from './template7.component';

describe('Template7Component', () => {
  let component: Template7Component;
  let fixture: ComponentFixture<Template7Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Template7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
