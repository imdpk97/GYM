import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedietplanComponent } from './updatedietplan.component';

describe('UpdatedietplanComponent', () => {
  let component: UpdatedietplanComponent;
  let fixture: ComponentFixture<UpdatedietplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedietplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedietplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
