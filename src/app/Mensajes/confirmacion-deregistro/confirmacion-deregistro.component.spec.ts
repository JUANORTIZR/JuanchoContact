import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionDeregistroComponent } from './confirmacion-deregistro.component';

describe('ConfirmacionDeregistroComponent', () => {
  let component: ConfirmacionDeregistroComponent;
  let fixture: ComponentFixture<ConfirmacionDeregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionDeregistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmacionDeregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
