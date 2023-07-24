import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorEditComponent } from './produtor-edit.component';

describe('ProdutorEditComponent', () => {
  let component: ProdutorEditComponent;
  let fixture: ComponentFixture<ProdutorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutorEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
