import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EducationArray } from '../interfaceArrays'
import { EducationService } from './education.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public educaciones: EducationArray[] = [];
  editEducation: EducationArray;
  deleteEducation: EducationArray;

  ngOnInit() {
    this.getEducations();
  }

  constructor(private educationService: EducationService, public loginService: AuthenticationService) { }

  public getEducations(): void {

    this.educationService.getEducations().subscribe(
      (response: EducationArray[]) => {
        this.educaciones = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    )
  }

  public onAddEducation(addEducationForm: NgForm): void{
    this.educationService.addEducation(addEducationForm.value).subscribe(
      (response: EducationArray) => {
        console.log(response);
        this.getEducations();
        addEducationForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addEducationForm.reset();
      }
    )
  }

  public onUpdateEducation(education: EducationArray): void{
    this.educationService.updateEducation(education).subscribe(
      (response: EducationArray) => {
        console.log(response);
        this.getEducations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeleteEducation(educationId: number): void{
    this.educationService.deleteEducation(educationId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEducations();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onOpenModal(educacion: EducationArray, mode: string): void{
    const container = document.getElementById('educationCRUD');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode == 'educationadd') {
      button.setAttribute('data-bs-target', '#addEducationModal')
    }
    if (mode == 'educationedit') {
      this.editEducation = educacion;
      button.setAttribute('data-bs-target', '#editEducationModal')
    }
    if (mode == 'educationdelete') {
      this.deleteEducation = educacion;
      button.setAttribute('data-bs-target', '#deleteEducationModal')
    }
    container?.appendChild(button);
    button.click();
  }

}
