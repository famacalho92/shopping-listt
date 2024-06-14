import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddElementoModalPage } from './add-elemento-modal.page';

describe('AddElementoModalPage', () => {
  let component: AddElementoModalPage;
  let fixture: ComponentFixture<AddElementoModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddElementoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
