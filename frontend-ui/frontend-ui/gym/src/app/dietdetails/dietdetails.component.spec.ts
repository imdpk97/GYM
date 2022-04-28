import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietdetailsComponent } from './dietdetails.component';

describe('DietdetailsComponent', () => {
  let component: DietdetailsComponent;
  let fixture: ComponentFixture<DietdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
