import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { constructor } from 'jasmine';
import { Observable, map, startWith } from 'rxjs';
import { TableComponent } from '../../../app/shared/component/table/table.component';
import { AppService } from '../../../app/shared/services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-employees',
  standalone: true,
  imports: [
    TableComponent,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './all-employees.component.html',
  styleUrl: './all-employees.component.scss',
  providers:[AppService]
})
export class AllEmployeesComponent implements OnInit {
  employeesData$!: Observable<any[]>;
  filteredData$!: Observable<any[]>;

  ngOnInit(): void {
    // this.employeesData$ = this.appService.getEmployees();
    // this.filteredData$ = this.appService.getEmployees();
    this.activatedRoute.data.subscribe((data=>console.log(data)
    
    ))

    this.employeesData$ = this.activatedRoute.data.pipe(
      map((data)=>data['employessData'])
    )

    this.filteredData$ = this.employeesData$

  }

  getLang(lang: string) {
    console.log(lang);
  }

  constructor(private activatedRoute: ActivatedRoute) {}

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
