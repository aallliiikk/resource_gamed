import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingNumberComponent } from './floating-number.component';

describe('FloatingNumberComponent', () => {
  let component: FloatingNumberComponent;
  let fixture: ComponentFixture<FloatingNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
