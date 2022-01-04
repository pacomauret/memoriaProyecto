import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModoUsoComponent } from './modo-uso.component';

describe('ModoUsoComponent', () => {
  let component: ModoUsoComponent;
  let fixture: ComponentFixture<ModoUsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModoUsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModoUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
