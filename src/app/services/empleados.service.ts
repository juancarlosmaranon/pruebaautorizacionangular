import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()

export class EmpleadosService {
    
    constructor(private _http:HttpClient){}

    getEmpleados(): Observable<any> {

        var request = "api/empleados";
        var url = environment.enlaceEmpleados + request;

        var header = new HttpHeaders().set("Authorization","Bearer "+environment.token);
        
        return this._http.get(url, {headers: header})

    }

    sacarLogin(nombre: string,password: string): Observable<any> {

        var request = "Auth/Login"
        var url = environment.enlaceEmpleados + request;

        var header = new HttpHeaders().set("content-type","application/json");

        var login = JSON.stringify({"userName":nombre,"password":password});

        return this._http.post(url,login,{headers: header});
    }
}