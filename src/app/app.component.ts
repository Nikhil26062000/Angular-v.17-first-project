import { Component, OnInit } from '@angular/core';

import { MainHeaderComponent } from './core/main-header/main-header.component';
import { MainFooterComponent } from './core/main-footer/main-footer.component';
import { TableComponent } from './shared/component/table/table.component';
import { AddEmployeeFormComponent } from './components/add-employee-form/add-employee-form.component';
import { AppService } from './shared/services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, map, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainHeaderComponent,
    MainFooterComponent,
    TableComponent,
    AddEmployeeFormComponent,
    HttpClientModule,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './external.component.scss'],
  providers: [AppService],
})
export class AppComponent implements OnInit {
  title = 'first-project';
  mainComponent = true;
  secondaryComponent = true;
  logoTitle: string = 'Employee Admin';
  employeesData$!: Observable<any[]>;
  filteredData$!: Observable<any[]>;

  ngOnInit(): void {
    this.employeesData$ = this.appService.getEmployees()
    this.filteredData$ = this.appService.getEmployees()
  }

  getLang(lang: string) {
    console.log(lang);
  }

  constructor(private appService: AppService) {}

  searchEmployee(event: Event) {
    const searchText = (event.target as HTMLInputElement).value;
    console.log(this.employeesData$);

    this.filteredData$ = this.employeesData$.pipe(
      map((ele)=>ele.filter((ele)=>ele.name.toLowerCase().includes(searchText.toLowerCase()))),
      startWith([])
    )
  }
}
