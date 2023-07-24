import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosPageComponent } from './graficos-page.component';

describe('GraficosPageComponent', () => {
  let component: GraficosPageComponent;
  let fixture: ComponentFixture<GraficosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
