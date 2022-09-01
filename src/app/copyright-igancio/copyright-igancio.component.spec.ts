import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightIgancioComponent } from './copyright-igancio.component';

describe('CopyrightIgancioComponent', () => {
  let component: CopyrightIgancioComponent;
  let fixture: ComponentFixture<CopyrightIgancioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyrightIgancioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightIgancioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
