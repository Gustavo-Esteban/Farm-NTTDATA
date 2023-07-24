import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorRegisterComponent } from './produtor-register.component';

describe('ProdutorRegisterComponent', () => {
  let component: ProdutorRegisterComponent;
  let fixture: ComponentFixture<ProdutorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutorRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
