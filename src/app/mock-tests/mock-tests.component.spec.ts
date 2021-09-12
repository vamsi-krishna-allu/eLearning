import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockTestsComponent } from './mock-tests.component';

describe('MockTestsComponent', () => {
  let component: MockTestsComponent;
  let fixture: ComponentFixture<MockTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
