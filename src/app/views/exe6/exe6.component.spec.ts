import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe6Component } from './exe6.component';

describe('Exe6Component', () => {
  let component: Exe6Component;
  let fixture: ComponentFixture<Exe6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exe6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exe6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
