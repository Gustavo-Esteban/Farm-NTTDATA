import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorTabelaComponent } from './produtor-tabela.component';

describe('ProdutorTabelaComponent', () => {
  let component: ProdutorTabelaComponent;
  let fixture: ComponentFixture<ProdutorTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutorTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutorTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
