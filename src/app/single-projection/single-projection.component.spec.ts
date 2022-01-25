import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectionComponent } from './single-projection.component';

describe('SingleProjectionComponent', () => {
  let component: SingleProjectionComponent;
  let fixture: ComponentFixture<SingleProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleProjectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
