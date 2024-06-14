import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddListaModalPage } from './add-lista-modal.page';

describe('AddListaModalPage', () => {
  let component: AddListaModalPage;
  let fixture: ComponentFixture<AddListaModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddListaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
