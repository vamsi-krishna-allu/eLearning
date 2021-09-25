import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursepriceComponent } from './courseprice.component';

describe('CoursepriceComponent', () => {
  let component: CoursepriceComponent;
  let fixture: ComponentFixture<CoursepriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursepriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursepriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
