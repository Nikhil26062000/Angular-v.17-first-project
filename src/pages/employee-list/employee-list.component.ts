import { Component, OnInit } from '@angular/core';
import { Observable, map, startWith } from 'rxjs';
import { AppService } from '../../app/shared/services/app.service';
import { TableComponent } from '../../app/shared/component/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
   RouterOutlet
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {}