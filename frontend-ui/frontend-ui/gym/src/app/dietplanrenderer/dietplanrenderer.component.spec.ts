import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietplanrendererComponent } from './dietplanrenderer.component';

describe('DietplanrendererComponent', () => {
  let component: DietplanrendererComponent;
  let fixture: ComponentFixture<DietplanrendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietplanrendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietplanrendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
