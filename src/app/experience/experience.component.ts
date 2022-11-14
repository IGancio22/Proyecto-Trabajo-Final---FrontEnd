import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExperienceArray } from '../interfaceArrays'
import { ExperienceService } from './experience.service';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../authentication.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @ViewChild('closeAddModalButton') closeAddModalButton: ElementRef;
  @ViewChild('closeUpdateModalButton') closeUpdateModalButton: ElementRef;
  @ViewChild('closeDeleteModalButton') closeDeleteModalButton: ElementRef;

  public experiencias: ExperienceArray[] = [];
  editExperience: ExperienceArray;
  deleteExperience: ExperienceArray;

  ngOnInit() {
    this.getExperiences();
  }

  constructor(private experienceService: ExperienceService, public loginService: AuthenticationService) { }

  public getExperiences(): void {

    this.experienceService.getExperiences().subscribe(
      (response: ExperienceArray[]) => {
        this.experiencias = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

  public onAddExperience(addExperienceForm: NgForm): void{
    this.experienceService.addExperience(addExperienceForm.value).subscribe(
      (response: ExperienceArray) => {
        console.log(response);
        this.getExperiences();
        addExperienceForm.reset();
        let inputElement:HTMLElement = this.closeAddModalButton.nativeElement as HTMLElement;
        inputElement.click();
        alert("se ha guardado correctamente")
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addExperienceForm.reset();
      }
    )
  }

  public onUpdateExperience(experience: ExperienceArray): void{
    this.experienceService.updateExperience(experience).subscribe(
      (response: ExperienceArray) => {
        console.log(response);
        this.getExperiences();
        let inputElement:HTMLElement = this.closeUpdateModalButton.nativeElement as HTMLElement;
        inputElement.click();
        alert("se ha guardado correctamente")
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeleteExperience(experienceId: number): void{
    this.experienceService.deleteExperience(experienceId).subscribe(
      (response: void) => {
        console.log(response);
        this.getExperiences();
        let inputElement:HTMLElement = this.closeDeleteModalButton.nativeElement as HTMLElement;
        inputElement.click();
        alert("se ha borrado correctamente")
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onOpenModal(experiencia: ExperienceArray, mode: string): void{
    const container = document.getElementById('experienceCRUD');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode == 'experienceadd') {
      button.setAttribute('data-bs-target', '#addExperienceModal')
    }
    if (mode == 'experienceedit') {
      this.editExperience = experiencia;
      button.setAttribute('data-bs-target', '#editExperienceModal')
    }
    if (mode == 'experiencedelete') {
      this.deleteExperience = experiencia;
      button.setAttribute('data-bs-target', '#deleteExperienceModal')
    }
    container?.appendChild(button);
    button.click();
  }

}
