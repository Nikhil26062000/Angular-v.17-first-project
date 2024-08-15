import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AppService{
    constructor(private httpClient: HttpClient){}

    getEmployees():Observable<any>{
        const url:string = 'https://jsonplaceholder.typicode.com/users'
        return this.httpClient.get<any>(url); 
    }
}