import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraComponent } from './muestra.component';

describe('MuestraComponent', () => {
  let component: MuestraComponent;
  let fixture: ComponentFixture<MuestraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MuestraComponent]
    });
    fixture = TestBed.createComponent(MuestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
