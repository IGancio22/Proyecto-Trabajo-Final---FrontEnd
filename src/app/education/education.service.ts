import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import { EducationArray } from '../interfaceArrays';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getEducations(): Observable<EducationArray[]> {
    return this.http.get<EducationArray[]>(`${this.apiServerUrl}/education/all`);
  }

  public addEducation(education: EducationArray): Observable<EducationArray> {
    return this.http.post<EducationArray>(`${this.apiServerUrl}/education/add`, education);
  }

  public updateEducation(education: EducationArray): Observable<EducationArray> {
    return this.http.put<EducationArray>(`${this.apiServerUrl}/education/update`, education);
  }
  
  public deleteEducation(educationId: Number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/education/delete/${educationId}`);
  }
}