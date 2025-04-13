from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer
from django.shortcuts import get_object_or_404

class CompanyListView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CompanyDetailView(APIView):
    def get(self, request, id):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, id):
        company = get_object_or_404(Company, id=id)
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        try:
            company = Company.objects.get(id=id)
            company.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Company.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class VacanciesByCompanyView(APIView):
    def get(self, request, id):
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist:
            return Response({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)
        vacancies = company.vacancies.all()  # related_name='vacancies'
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)

class VacancyListView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VacancyDetailView(APIView):
    def get(self, request, id):
        try:
            vacancy = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist:
            return Response({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)
    def put(self, request, id):
        vacancy = get_object_or_404(Vacancy, id=id)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id, format=None):
        try:
            vacancy = Vacancy.objects.get(id=id)
            vacancy.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Vacancy.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

class TopTenVacanciesView(APIView):
    def get(self, request):
        top_vacancies = Vacancy.objects.order_by('-salary')[:10]
        serializer = VacancySerializer(top_vacancies, many=True)
        return Response(serializer.data)
