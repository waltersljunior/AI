import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe7Component } from './exe7.component';

describe('Exe7Component', () => {
  let component: Exe7Component;
  let fixture: ComponentFixture<Exe7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exe7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exe7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
