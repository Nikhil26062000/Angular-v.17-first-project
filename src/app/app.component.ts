import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmployeesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./external.component.scss']
})
export class AppComponent {
  title = 'first-project';
}
