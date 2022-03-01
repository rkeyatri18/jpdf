import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Template11Component } from './template11.component';

describe('Template11Component', () => {
  let component: Template11Component;
  let fixture: ComponentFixture<Template11Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Template11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
