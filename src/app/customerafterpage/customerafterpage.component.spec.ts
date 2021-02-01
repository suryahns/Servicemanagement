import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerafterpageComponent } from './customerafterpage.component';

describe('CustomerafterpageComponent', () => {
  let component: CustomerafterpageComponent;
  let fixture: ComponentFixture<CustomerafterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerafterpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerafterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
