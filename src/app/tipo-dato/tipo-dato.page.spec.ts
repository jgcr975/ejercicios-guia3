import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDatoPage } from './tipo-dato.page';

describe('TipoDatoPage', () => {
  let component: TipoDatoPage;
  let fixture: ComponentFixture<TipoDatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoDatoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
