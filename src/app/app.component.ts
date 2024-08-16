import { Component, OnInit } from '@angular/core';

import { MainHeaderComponent } from './core/main-header/main-header.component';
import { MainFooterComponent } from './core/main-footer/main-footer.component';
import { TableComponent } from './shared/component/table/table.component';
import { AddEmployeeFormComponent } from './components/add-employee-form/add-employee-form.component';
import { AppService } from './shared/services/app.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainHeaderComponent,
    MainFooterComponent,
    TableComponent,
    AddEmployeeFormComponent,
    HttpClientModule,
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
  employeesData: any[] = [];
  filteredData: any[] = [];

  ngOnInit(): void {
    this.appService.getEmployees().subscribe({
      next: (emp: any[]) => {
        console.log(emp);

        this.employeesData = emp;
        this.filteredData = emp;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }

  getLang(lang: string) {
    console.log(lang);
  }

  constructor(private appService: AppService) {}

  searchEmployee(event: Event) {
    const searchText = (event.target as HTMLInputElement).value;
    // console.log(searchText);

    this.filteredData = this.employeesData.filter((ele) =>
      ele.name.toLowerCase().includes(searchText.toLowerCase())
    );
    // console.log('New filtered data', this.filteredData);
  }
}
