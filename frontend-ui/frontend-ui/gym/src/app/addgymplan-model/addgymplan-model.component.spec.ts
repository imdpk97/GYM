import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgymplanModelComponent } from './addgymplan-model.component';

describe('AddgymplanModelComponent', () => {
  let component: AddgymplanModelComponent;
  let fixture: ComponentFixture<AddgymplanModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgymplanModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgymplanModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
