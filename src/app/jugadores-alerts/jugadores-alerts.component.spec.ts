import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresAlertsComponent } from './jugadores-alerts.component';

describe('JugadoresAlertsComponent', () => {
  let component: JugadoresAlertsComponent;
  let fixture: ComponentFixture<JugadoresAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadoresAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
