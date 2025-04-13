import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private BASE_URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}/companies/`);
  }

  createCompany(company: Partial<Company>): Observable<Company> {
    return this.http.post<Company>(`${this.BASE_URL}/companies/`, company);
  }
  
  
  updateCompany(id: number, company: Company): Observable<Company> {
    return this.http.put<Company>(`${this.BASE_URL}/companies/${id}/`, company);
  }
  
  deleteCompany(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/companies/${id}/`);
  }

  
}
