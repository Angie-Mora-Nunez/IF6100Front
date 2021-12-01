import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarElectivapageComponent } from './agregar-electivapage.component';

describe('AgregarElectivapageComponent', () => {
  let component: AgregarElectivapageComponent;
  let fixture: ComponentFixture<AgregarElectivapageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarElectivapageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarElectivapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
