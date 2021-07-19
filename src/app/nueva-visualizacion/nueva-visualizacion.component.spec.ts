import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaVisualizacionComponent } from './nueva-visualizacion.component';

describe('NuevaVisualizacionComponent', () => {
  let component: NuevaVisualizacionComponent;
  let fixture: ComponentFixture<NuevaVisualizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaVisualizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaVisualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
