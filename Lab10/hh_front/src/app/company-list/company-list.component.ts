import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Для *ngFor и *ngIf в шаблоне
import { Company } from '../models/company.model';
import { CompanyService } from '../services/company.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {
    console.log('CompanyService is injected');
    // Получение данных с сервиса
    this.companyService.getCompanies().subscribe({
      next: (data: Company[]) => {
        console.log('Companies received:', data);
        this.companies = data;
      },
      error: (err) => {
        console.error('Error fetching companies:', err);
      }
    });
  }
  navigateToCompany(companyId: number): void {
    this.router.navigate(['/company', companyId]);
  }
  newCompany: Partial<Company> = {};
  editingCompany: Company | null = null;

  createCompany(): void {
    // Убедись, что все необходимые поля заполнены
    if (!this.newCompany.name || !this.newCompany.description || !this.newCompany.city || !this.newCompany.address) {
      console.error('Please fill all the fields.');
      return;
    }
  
    // Отправляем запрос на создание компании
    this.companyService.createCompany(this.newCompany).subscribe({
      next: (created) => {
        this.companies.push(created); // Добавляем новую компанию в список
        this.newCompany = {}; // Очищаем форму
      },
      error: (err) => {
        console.error('Error creating company:', err);
      }
    });
  }
  
  deleteCompany(id: number): void {
    this.companyService.deleteCompany(id).subscribe({
      next: () => {
        this.companies = this.companies.filter(company => company.id !== id);
      },
      error: (err) => {
        console.error('Error deleting company:', err);
      }
    });
  }
  

  editCompany(company: Company): void {
    this.editingCompany = { ...company }; // копия объекта, чтобы не менять оригинал напрямую
  }
  
  updateCompany(): void {
    if (!this.editingCompany) return;
  
    this.companyService.updateCompany(this.editingCompany.id, this.editingCompany).subscribe({
      next: (updatedCompany) => {
        // обновить список компаний
        const index = this.companies.findIndex(c => c.id === updatedCompany.id);
        if (index !== -1) this.companies[index] = updatedCompany;
        this.editingCompany = null;
      },
      error: (err) => console.error('Error updating company:', err)
    });
  }
  
  cancelEdit(): void {
    this.editingCompany = null;
  }
  
}
