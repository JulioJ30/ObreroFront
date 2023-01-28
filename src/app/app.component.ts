import { ObreroInterface } from './interfaces/obrero.interface';
import { ObreroService } from './services/obrero.service';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
// import * as FileSaver from 'file-saver';

// import * as XLSX from 'xlsx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'proyectoobreros';
  obreros:ObreroInterface[] = [];
  displayedColumns: string[] = ['dni', 'horaslabo','diaslabo','faltas','tipotrabajador', 'salario'];
  dataSource:any;
  // paginator: MatPaginator;
  // paginator:any;

  @ViewChild(MatPaginator) paginator! : MatPaginator ;

  ngAfterViewInit() {
    this.getObreros("");

    // this.dataSource.paginator = this.paginator;
  }

  constructor(
    private obreroS:ObreroService
  ){
    // this.paginator = [];
    this.getObreros("");
  }

  BuscarObreros(dni:any){
    console.log(dni.value);
    this.getObreros(dni.value);


  };

  // saveAsFile(buffer: any, fileName: string, fileType: string): void {
  //   const data: Blob = new Blob([buffer], { type: fileType });
  //   FileSaver.saveAs(data, fileName);
  // }

  getObreros(dni:any){

    this.obreroS.GetObreros(dni)
      .subscribe((response:ObreroInterface[]) => {
        this.obreros = response;

        console.log(this.obreros);

        this.dataSource = new MatTableDataSource<ObreroInterface>(response);
        this.dataSource.paginator = this.paginator;


        // console.log(this.obreros);
      });

  }



}
