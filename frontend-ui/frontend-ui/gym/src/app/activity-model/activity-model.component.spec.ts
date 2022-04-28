import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityModelComponent } from './activity-model.component';

describe('ActivityModelComponent', () => {
  let component: ActivityModelComponent;
  let fixture: ComponentFixture<ActivityModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
