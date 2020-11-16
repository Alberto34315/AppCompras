import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  mensaje: string;
  proveedores: any[] = [];
  public cargado: boolean = false;
  constructor(private proveedoresService: ProveedoresService) {

  }

  ngOnInit(): void {
    this.cargado = false;
    try {
      this.proveedoresService.getProveedores().subscribe(presupuestos => {
        for (const id$ in presupuestos) {
          const p = presupuestos[id$];
          p.id$ = id$;
          this.proveedores.push(presupuestos[id$]);
        }
        this.cargado = true;
      })
    } catch (error) {
      console.log("OOOHHHHHH" + error);
      this.cargado = true;
    }
    // this.proveedores = this.proveedoresService.getProveedores( );
  }
  eliminarProveedor(id$) {
    this.proveedoresService.delProveedor(id$)
      .subscribe(res => {
        this.proveedores = [];
        this.proveedoresService.getProveedores()
          .subscribe(presupuestos => {
            for (const id$ in presupuestos) {
              const p = presupuestos[id$];
              p.id$ = id$;
              this.proveedores.push(presupuestos[id$]);
            }
          })
      });
  }
}
