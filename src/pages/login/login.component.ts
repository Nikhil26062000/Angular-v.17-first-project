import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    console.log(this.title.getTitle());
    this.title.setTitle('This is new Title');
    console.log(this.title.getTitle());
  }
}
