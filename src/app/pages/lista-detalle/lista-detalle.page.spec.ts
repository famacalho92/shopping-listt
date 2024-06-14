import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaDetallePage } from './lista-detalle.page';

describe('ListaDetallePage', () => {
  let component: ListaDetallePage;
  let fixture: ComponentFixture<ListaDetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
