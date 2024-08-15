import { Component, OnInit } from '@angular/core';

import { MainHeaderComponent } from './core/main-header/main-header.component';
import { MainFooterComponent } from './core/main-footer/main-footer.component';
import { TableComponent } from './shared/component/table/table.component';
import { AddEmployeeFormComponent } from './components/add-employee-form/add-employee-form.component';
import { AppService } from './shared/services/app.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainHeaderComponent,MainFooterComponent,TableComponent,AddEmployeeFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./external.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-project';
  mainComponent=true
  secondaryComponent=true
  logoTitle : string = 'Employee Admin'
  employeesData:any[]=[];

  ngOnInit(): void {
      this.appService.getEmployees().subscribe({
        next:(emp:any[])=>{
          this.employeesData  = emp;
        },
        error:(err)=>{console.log(err)},
        complete:()=>{},
      });
      
  }

  getLang(lang : string){
    console.log(lang);
    
  }


  constructor(private appService: AppService){

  }
}
