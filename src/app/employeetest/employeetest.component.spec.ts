import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetestComponent } from './employeetest.component';

describe('EmployeetestComponent', () => {
  let component: EmployeetestComponent;
  let fixture: ComponentFixture<EmployeetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeetestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
