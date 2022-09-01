import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CVportfolioComponent } from './cvportfolio.component';

describe('CVportfolioComponent', () => {
  let component: CVportfolioComponent;
  let fixture: ComponentFixture<CVportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CVportfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CVportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
