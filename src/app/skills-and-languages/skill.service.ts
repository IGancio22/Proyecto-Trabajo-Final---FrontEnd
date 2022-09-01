import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Observable } from 'rxjs';
import { SkillArray } from '../interfaceArrays';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getSkills(): Observable<SkillArray[]> {
    return this.http.get<SkillArray[]>(`${this.apiServerUrl}/skill/all`);
  }

  public addSkill(skill: SkillArray): Observable<SkillArray> {
    return this.http.post<SkillArray>(`${this.apiServerUrl}/skill/add`, skill);
  }

  public updateSkill(skill: SkillArray): Observable<SkillArray> {
    return this.http.put<SkillArray>(`${this.apiServerUrl}/skill/update`, skill);
  }
  
  public deleteSkill(skillId: Number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/skill/delete/${skillId}`);
  }
}