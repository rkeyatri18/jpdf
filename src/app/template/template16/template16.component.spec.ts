import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Template16Component } from './template16.component';

describe('Template16Component', () => {
  let component: Template16Component;
  let fixture: ComponentFixture<Template16Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Template16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
