import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HighlightDirective } from '../../shared/component/table/directives/highlight.directive';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [HighlightDirective,CommonModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {
  @Input({
    alias: 'headerLogo',
    required: true,
    transform: (value: string) => value.toUpperCase(),
  })
  logoName: string = 'Employee Management';

  @Output() language = new EventEmitter<string>();

  getLanguage(language:string){
    this.language.emit(language);
    
  }
}
