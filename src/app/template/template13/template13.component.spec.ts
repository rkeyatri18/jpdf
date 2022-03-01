import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Template13Component } from './template13.component';

describe('Template13Component', () => {
  let component: Template13Component;
  let fixture: ComponentFixture<Template13Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Template13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
