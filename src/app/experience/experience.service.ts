import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ExperienceArray } from '../interfaceArrays';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getExperiences(): Observable<ExperienceArray[]> {
    return this.http.get<ExperienceArray[]>(`${this.apiServerUrl}/jobs/all`);
  }

  public addExperience(experience: ExperienceArray): Observable<ExperienceArray> {
    return this.http.post<ExperienceArray>(`${this.apiServerUrl}/jobs/add`, experience);
  }

  public updateExperience(experience: ExperienceArray): Observable<ExperienceArray> {
    return this.http.put<ExperienceArray>(`${this.apiServerUrl}/jobs/update`, experience);
  }
  
  public deleteExperience(experienceId: Number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/jobs/delete/${experienceId}`);
  }
}
