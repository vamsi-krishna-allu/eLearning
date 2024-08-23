import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortraitModeComponent } from './portrait-mode.component';

describe('PortraitModeComponent', () => {
  let component: PortraitModeComponent;
  let fixture: ComponentFixture<PortraitModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortraitModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortraitModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
