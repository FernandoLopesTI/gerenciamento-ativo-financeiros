import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTesteComponent } from './card-teste.component';

describe('CardTesteComponent', () => {
  let component: CardTesteComponent;
  let fixture: ComponentFixture<CardTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
