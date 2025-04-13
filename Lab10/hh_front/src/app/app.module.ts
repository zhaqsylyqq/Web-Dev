import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Импортируем RouterModule
import { HttpClientModule } from '@angular/common/http';  // Для работы с HTTP
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)  // Подключаем маршруты
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
