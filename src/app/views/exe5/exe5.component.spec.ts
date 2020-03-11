import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exe5Component } from './exe5.component';

describe('Exe5Component', () => {
  let component: Exe5Component;
  let fixture: ComponentFixture<Exe5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exe5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exe5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
