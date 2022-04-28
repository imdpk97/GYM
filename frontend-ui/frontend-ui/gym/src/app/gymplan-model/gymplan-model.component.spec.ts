import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymplanModelComponent } from './gymplan-model.component';

describe('GymplanModelComponent', () => {
  let component: GymplanModelComponent;
  let fixture: ComponentFixture<GymplanModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymplanModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymplanModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
