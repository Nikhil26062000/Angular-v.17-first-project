import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppService{
    constructor(){}

    getEmployees(){
        return of([
            {
              id: 1,
              first_name: 'John',
              last_name: 'Doe',
              email: 'john.doe@example.com',
              phone: '123-456-7890',
              gender: 'Male',
              age: 28,
              job_title: 'Software Engineer',
              years_of_experience: 5,
              salary: 80000,
              department: 'Engineering'
            },
            {
              id: 2,
              first_name: 'Jane',
              last_name: 'Smith',
              email: 'jane.smith@example.com',
              phone: '234-567-8901',
              gender: 'Female',
              age: 32,
              job_title: 'Project Manager',
              years_of_experience: 8,
              salary: 95000,
              department: 'Project Management'
            },
            {
              id: 3,
              first_name: 'Alice',
              last_name: 'Johnson',
              email: 'alice.johnson@example.com',
              phone: '345-678-9012',
              gender: 'Female',
              age: 25,
              job_title: 'UI/UX Designer',
              years_of_experience: 3,
              salary: 70000,
              department: 'Design'
            },
            {
              id: 4,
              first_name: 'Bob',
              last_name: 'Williams',
              email: 'bob.williams@example.com',
              phone: '456-789-0123',
              gender: 'Male',
              age: 40,
              job_title: 'Product Manager',
              years_of_experience: 15,
              salary: 120000,
              department: 'Product Management'
            },
            {
              id: 5,
              first_name: 'Maria',
              last_name: 'Garcia',
              email: 'maria.garcia@example.com',
              phone: '567-890-1234',
              gender: 'Female',
              age: 30,
              job_title: 'Data Analyst',
              years_of_experience: 6,
              salary: 85000,
              department: 'Data Science'
            }
          ]);
    }
}