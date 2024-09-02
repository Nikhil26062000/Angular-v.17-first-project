import { Component, OnInit } from '@angular/core';
import { AddEmployeeFormComponent } from '../../app/components/add-employee-form/add-employee-form.component';
import { Observable, map, startWith } from 'rxjs';
import { AppService } from '../../app/shared/services/app.service';
import { TableComponent } from '../../app/shared/component/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from '../../app/core/main-header/main-header.component';
import { MainFooterComponent } from '../../app/core/main-footer/main-footer.component';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    MainHeaderComponent,
    MainFooterComponent,
    AddEmployeeFormComponent,
    TableComponent,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss',
  providers: [AppService],
})
export class AddEmployeeComponent implements OnInit {
  logoTitle: string = 'Employee Admin';
  employeesData$!: Observable<any[]>;
  filteredData$!: Observable<any[]>;

  ngOnInit(): void {
    this.employeesData$ = this.appService.getEmployees();
    this.filteredData$ = this.appService.getEmployees();
  }

  getLang(lang: string) {
    console.log(lang);
  }

  constructor(private appService: AppService) {}

  searchEmployee(event: Event) {
    const searchText = (event.target as HTMLInputElement).value;
    console.log(this.employeesData$);

    this.filteredData$ = this.employeesData$.pipe(
      map((ele) =>
        ele.filter((ele) =>
          ele.name.toLowerCase().includes(searchText.toLowerCase())
        )
      ),
      startWith([])
    );
  }
}
