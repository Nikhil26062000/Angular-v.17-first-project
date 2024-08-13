import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { MainHeaderComponent } from './core/main-header/main-header.component';
import { MainFooterComponent } from './core/main-footer/main-footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainHeaderComponent,MainFooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss','./external.component.scss']
})
export class AppComponent {
  title = 'first-project';
  mainComponent=true
  secondaryComponent=true
}
