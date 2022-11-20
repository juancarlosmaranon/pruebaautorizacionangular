import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmpleadosService } from './services/empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'pruebaautorizacion';

  constructor(private _service: EmpleadosService){}

  ngOnInit(): void {

    environment.userName = "rey";
    environment.password = "7839";

    this._service.sacarLogin("rey","7839").subscribe(res => {
      if (environment.token == null){
        environment.token = res.response

      }
      console.log(environment.token)
    });
  }

}
