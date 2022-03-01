import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Template3Component } from './template3.component';

describe('Template3Component', () => {
  let component: Template3Component;
  let fixture: ComponentFixture<Template3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Template3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
