import { Routes } from "@angular/router";
import { EmployeeListComponent } from "./employee-list.component";
import { AllEmployeesComponent } from "./all-employees/all-employees.component";
import { EmployeeComponent } from "./employee/employee.component";
import { AllEmployeesResolver } from "./all-employees/all-employees.resolver";

export const routes:Routes = [
    {path:"",component: EmployeeListComponent,
    children:[
        {path:"all-employees",component: AllEmployeesComponent,resolve:{employessData : AllEmployeesResolver}},
        {path:":id",component: EmployeeComponent},
        {path:"",redirectTo:"/employees/all-employees",pathMatch:"full"}
    ]}
]