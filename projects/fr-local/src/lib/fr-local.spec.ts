import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrLocal } from './fr-local';

describe('FrLocal', () => {
  let component: FrLocal;
  let fixture: ComponentFixture<FrLocal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrLocal],
    }).compileComponents();

    fixture = TestBed.createComponent(FrLocal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
