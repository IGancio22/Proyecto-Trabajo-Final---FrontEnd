import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SkillArray } from '../interfaceArrays';
import { LangArray } from '../interfaceArrays';
import { SkillService } from './skill.service';
import { LanguageService } from './language.service';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-skills-and-languages',
  templateUrl: './skills-and-languages.component.html',
  styleUrls: ['./skills-and-languages.component.css']
})
export class SkillsAndLanguagesComponent implements OnInit {

  public habilidades: SkillArray[];
  public editSkill: SkillArray;
  public deleteSkill: SkillArray;

  public lenguajes: LangArray[];
  public editLanguage: LangArray;
  public deleteLanguage: LangArray;

  ngOnInit() {
    this.getSkills();
    this.getLanguages();
  }

  constructor(private skillService: SkillService, private languageService: LanguageService, public loginService: AuthenticationService) { }

  /* SKILLS */

  public getSkills(): void {

    this.skillService.getSkills().subscribe(
      (response: SkillArray[]) => {
        this.habilidades = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

  public onAddSkill(addSkillForm: NgForm): void{
    this.skillService.addSkill(addSkillForm.value).subscribe(
      (response: SkillArray) => {
        console.log(response);
        this.getSkills();
        addSkillForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addSkillForm.reset();
      }
    )
  }

  public onUpdateSkill(skill: SkillArray): void{
    this.skillService.updateSkill(skill).subscribe(
      (response: SkillArray) => {
        console.log(response);
        this.getSkills();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeleteSkill(skillId: number): void{
    this.skillService.deleteSkill(skillId).subscribe(
      (response: void) => {
        console.log(response);
        this.getSkills();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  /* LANGUAGES */

  public getLanguages(): void {

    this.languageService.getLanguages().subscribe(
      (response: LangArray[]) => {
        this.lenguajes = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

  public onAddLanguage(addLanguageForm: NgForm): void{
    this.languageService.addLanguage(addLanguageForm.value).subscribe(
      (response: LangArray) => {
        console.log(response);
        this.getLanguages();
        addLanguageForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addLanguageForm.reset();
      }
    )
  }

  public onUpdateLanguage(skill: LangArray): void{
    this.languageService.updateLanguage(skill).subscribe(
      (response: LangArray) => {
        console.log(response);
        this.getLanguages();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeleteLanguage(skillId: number): void{
    this.languageService.deleteLanguage(skillId).subscribe(
      (response: void) => {
        console.log(response);
        this.getLanguages();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }


  public onOpenModal(habilidad: SkillArray | LangArray, mode: string): void{
    const container = document.getElementById('skillCRUDcontainer');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode == 'skilladd') {
      button.setAttribute('data-bs-target', '#addSkillModal')
    }
    if (mode == 'skilledit') {
      this.editSkill = habilidad;
      button.setAttribute('data-bs-target', '#editSkillModal')
    }
    if (mode == 'skilldelete') {
      this.deleteSkill = habilidad;
      button.setAttribute('data-bs-target', '#deleteSkillModal')
    }
    if (mode == 'langadd') {
      button.setAttribute('data-bs-target', '#addLanguageModal')
    }
    if (mode == 'langedit') {
      this.editLanguage = habilidad;
      button.setAttribute('data-bs-target', '#editLanguageModal')
    }
    if (mode == 'langdelete') {
      this.deleteLanguage = habilidad;
      button.setAttribute('data-bs-target', '#deleteLanguageModal')
    }
    container?.appendChild(button);
    button.click();
  }


}
