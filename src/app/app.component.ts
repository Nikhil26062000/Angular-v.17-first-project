import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <div>
    <p>this is first para</p>
    <p>this is second para</p>
  </div>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-project';
}
