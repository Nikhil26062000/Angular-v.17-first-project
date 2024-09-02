import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { AppService } from "../../../app/shared/services/app.service";

export const AllEmployeesResolver: ResolveFn<any> = (
    route:ActivatedRouteSnapshot,state:RouterStateSnapshot
) =>{
    return inject(AppService).getEmployees();
}