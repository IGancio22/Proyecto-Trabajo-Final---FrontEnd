import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsAndLanguagesComponent } from './skills-and-languages.component';

describe('SkillsAndLanguagesComponent', () => {
  let component: SkillsAndLanguagesComponent;
  let fixture: ComponentFixture<SkillsAndLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsAndLanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsAndLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
