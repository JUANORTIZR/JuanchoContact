import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionActualizacionComponent } from './confirmacion-actualizacion.component';

describe('ConfirmacionActualizacionComponent', () => {
  let component: ConfirmacionActualizacionComponent;
  let fixture: ComponentFixture<ConfirmacionActualizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionActualizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionActualizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
