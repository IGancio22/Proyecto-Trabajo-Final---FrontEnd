import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LangArray } from '../interfaceArrays';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getLanguages(): Observable<LangArray[]> {
    return this.http.get<LangArray[]>(`${this.apiServerUrl}/language/all`);
  }

  public addLanguage(language: LangArray): Observable<LangArray> {
    return this.http.post<LangArray>(`${this.apiServerUrl}/language/add`, language);
  }

  public updateLanguage(language: LangArray): Observable<LangArray> {
    return this.http.put<LangArray>(`${this.apiServerUrl}/language/update`, language);
  }
  
  public deleteLanguage(languageId: Number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/language/delete/${languageId}`);
  }
}