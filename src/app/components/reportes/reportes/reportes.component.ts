import { Component, OnInit } from '@angular/core';
import { MaterialesService } from 'src/app/services/materiales.service';
import { ComunService } from '../../../services/comun.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  var: string
  tipos: any= [];
  tecnicos: any= [];
  lista: any = [];
  filtrado: any = {
    tipo : '',
    usuario : '',
    cliente : '',
    fecha_reporte : '',
    fecha_asig : ''
  }

  constructor(
    private _servicio: MaterialesService,
    private _comun: ComunService,
    private _dates: DatePipe
  ) { }

  ngOnInit() {
    this._servicio.getTipoOrden().subscribe(
      res => {
        this.tipos = res
      },
      err => console.error(err)
    );
    this._servicio.getUsuarios().subscribe(
      res => {
        this.tecnicos = res
      },
      err => console.error(err)
    );
  }

  buscar(){
    this._servicio.listReporte(this.filtrado).subscribe(
      res => {
        this.lista = res
        console.log(res)
      },
      err => console.error(err)
    )
  }

  download(){
    for (let i = 0; i < this.lista.length; i++) {
      this.lista[i].nombres_cliente = this.lista[i].nombres_cliente.replace(/\,/g,"");
      this.lista[i].fecha_reporte = this._dates.transform(this.lista[i].fecha_reporte, 'yyyy-MM-dd')
      this.lista[i].fecha_asig = this._dates.transform(this.lista[i].fecha_asig, 'yyyy-MM-dd')
    }
    this._comun.downloadFile(this.lista, 'reporte');
  }

}
