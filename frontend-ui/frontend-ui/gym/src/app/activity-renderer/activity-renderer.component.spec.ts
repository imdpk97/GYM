import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityRendererComponent } from './activity-renderer.component';

describe('ActivityRendererComponent', () => {
  let component: ActivityRendererComponent;
  let fixture: ComponentFixture<ActivityRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
