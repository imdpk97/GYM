import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymplanRendererComponent } from './gymplan-renderer.component';

describe('GymplanRendererComponent', () => {
  let component: GymplanRendererComponent;
  let fixture: ComponentFixture<GymplanRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GymplanRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GymplanRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
