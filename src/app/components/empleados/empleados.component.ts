import { Component, OnInit, DoCheck } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit,DoCheck {

  public empleados!: Array<Empleado>;

  constructor(private _service: EmpleadosService) { }

  ngOnInit(): void {
    
  }

  //Funcion que se realiza al cargar la pagina, y ademas, al actualizar algun dato
  ngDoCheck(): void {
    
    console.log(environment.userName)

    if (environment.token == null){

      this._service.sacarLogin(environment.userName,environment.password).subscribe(res => {

        environment.token = res.response

        this._service.getEmpleados().subscribe(res => {

          this.empleados = res;
          console.log("Dentro Check")
          console.log(this.empleados)
    
        })

    });
    }
  }

}
