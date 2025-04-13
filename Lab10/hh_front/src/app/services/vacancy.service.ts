import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vacancy } from '../models/vacancy.model';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  private BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  // Получить вакансии компании
  getVacancies(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(`${this.BASE_URL}/companies/${companyId}/vacancies/`);
  }

  // Создать вакансию
  createVacancy(vacancy: Vacancy): Observable<Vacancy> {
    return this.http.post<Vacancy>(`${this.BASE_URL}/vacancies/`, vacancy);
  }

  // Обновить вакансию
  updateVacancy(id: number, vacancy: Vacancy): Observable<Vacancy> {
    return this.http.put<Vacancy>(`${this.BASE_URL}/vacancies/${id}/`, vacancy);
  }

  // Удалить вакансию
  deleteVacancy(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/vacancies/${id}/`);
  }
}

