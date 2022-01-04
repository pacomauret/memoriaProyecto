import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstandarComponent } from './estandar.component';

describe('EstandarComponent', () => {
  let component: EstandarComponent;
  let fixture: ComponentFixture<EstandarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstandarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
