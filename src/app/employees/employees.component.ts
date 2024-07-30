import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: '[app-employees]',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent implements OnInit {
  firstName = "Nikhil"
  lastName = "Raj"
  isDisabled = true
  inputType = "text"
  placeholderValue = "Enter your Text"
  paraText = "Hie This is Paragraph"
  paraText2 = "Enter your value"

  ngOnInit(): void {
    setTimeout(() =>{
      this.isDisabled = false
    },3000)
  }

  getName(){
    return this.lastName
  }

  addData(event:MouseEvent){
    console.log("Data added Successfully");
    console.log("Event value",event);
    
    
  }

  showInputValue(event:Event){
    // this.paraText = (event.target as HTMLInputElement).value;
    //! below is another way to do this

    const inputEvent = event.target as HTMLInputElement
    this.paraText = inputEvent.value
    // above commented code is short hand way to write 
    
  }
}
