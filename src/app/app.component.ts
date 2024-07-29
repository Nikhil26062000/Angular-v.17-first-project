import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styles:`
  section{
    background-color: #333;
    padding: 20px;
    color: #fff;
    border-radius: 10px;

    li{
        padding:5px
    }
}
  `
})
export class AppComponent {
  title = 'first-project';
}
