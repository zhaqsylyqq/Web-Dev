from django.urls import path
from .views import (
    CompanyListView, CompanyDetailView, VacanciesByCompanyView,
    VacancyListView, VacancyDetailView, TopTenVacanciesView
)

urlpatterns = [
    path('companies/', CompanyListView.as_view()),
    path('companies/<int:id>/', CompanyDetailView.as_view()),
    path('companies/<int:id>/vacancies/', VacanciesByCompanyView.as_view()),
    path('vacancies/', VacancyListView.as_view()),
    path('vacancies/<int:id>/', VacancyDetailView.as_view()),
    path('vacancies/top_ten/', TopTenVacanciesView.as_view()),
]
