import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeinputComponent } from './employeeinput.component';

describe('EmployeeinputComponent', () => {
  let component: EmployeeinputComponent;
  let fixture: ComponentFixture<EmployeeinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
