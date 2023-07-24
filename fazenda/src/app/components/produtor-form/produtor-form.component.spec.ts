import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorFormComponent } from './produtor-form.component';

describe('ProdutorFormComponent', () => {
  let component: ProdutorFormComponent;
  let fixture: ComponentFixture<ProdutorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
