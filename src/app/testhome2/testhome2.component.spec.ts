import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testhome2Component } from './testhome2.component';

describe('Testhome2Component', () => {
  let component: Testhome2Component;
  let fixture: ComponentFixture<Testhome2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testhome2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Testhome2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
