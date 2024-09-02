import { Component, OnInit } from '@angular/core';

import { TableComponent } from './shared/component/table/table.component';

import { AppService } from './shared/services/app.service';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TableComponent, HttpClientModule, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './external.component.scss'],
  providers: [AppService],
})
export class AppComponent implements OnInit {
  title = 'first-project';
  mainComponent = true;
  secondaryComponent = true;

  ngOnInit(): void {}

  getLang(lang: string) {
    console.log(lang);
  }

  constructor() {}
}
