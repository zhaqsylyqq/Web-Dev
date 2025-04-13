import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VacancyService } from '../services/vacancy.service';
import { Vacancy } from '../models/vacancy.model';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  companyId!: number;
  vacancies: Vacancy[] = [];
  newVacancy: Partial<Vacancy> = {};
  editingVacancy: Vacancy | null = null;

  constructor(
    private route: ActivatedRoute,
    private vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.companyId = +id;
        this.fetchVacancies();
      }
    });
  }

  fetchVacancies(): void {
    this.vacancyService.getVacancies(this.companyId).subscribe({
      next: (data) => this.vacancies = data,
      error: (err) => console.error('Error loading vacancies:', err)
    });
  }

  createVacancy(): void {
    if (!this.newVacancy.name || !this.newVacancy.description || !this.newVacancy.salary) {
      console.error('Fill all fields');
      return;
    }

    const vacancyWithCompany = {
      ...this.newVacancy,
      company: this.companyId
    };

    this.vacancyService.createVacancy(vacancyWithCompany as Vacancy).subscribe({
      next: (created) => {
        this.vacancies.push(created);
        this.newVacancy = {};
      },
      error: (err) => console.error('Error creating vacancy:', err)
    });
  }

  deleteVacancy(id: number): void {
    this.vacancyService.deleteVacancy(id).subscribe({
      next: () => {
        this.vacancies = this.vacancies.filter(v => v.id !== id);
      },
      error: (err) => console.error('Error deleting vacancy:', err)
    });
  }

  editVacancy(vacancy: Vacancy): void {
    this.editingVacancy = { ...vacancy };
  }

  updateVacancy(): void {
    if (!this.editingVacancy) return;

    this.vacancyService.updateVacancy(this.editingVacancy.id, this.editingVacancy).subscribe({
      next: (updated) => {
        const index = this.vacancies.findIndex(v => v.id === updated.id);
        if (index !== -1) this.vacancies[index] = updated;
        this.editingVacancy = null;
      },
      error: (err) => console.error('Error updating vacancy:', err)
    });
  }

  cancelEdit(): void {
    this.editingVacancy = null;
  }
}
