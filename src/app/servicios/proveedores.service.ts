import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  presURL = 'https://fir-basic-bae64.firebaseio.com/proveedores.json';
  preURL = 'https://fir-basic-bae64.firebaseio.com/proveedores';
  constructor(private http: HttpClient) { }
  
  postProveedor(presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.presURL, newpres, { headers }).pipe(map(res => {
      console.log(res);
      return res;
    }))
  }
  getProveedores() {
    return this.http.get(this.presURL).pipe(map(res => res))
  }
  getProveedor(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url)
      .pipe(map(res => res))
  }
  putProveedor(proveedor: any, id$: string) {
    const newpre = JSON.stringify(proveedor);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${this.preURL}/${id$}.json`;
    return this.http.put(url, newpre, { headers }).pipe(map(res => {
      console.log(res);
      return res;
    }))
  }
  delProveedor(id$: string) {
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete(url).pipe(map(res => res))
  }
  /*getProveedores() {
    return this.proveedores;
  }*/
  
  loadJSON(url:string):Observable<any>{
    return this.http.get(url);
   }
}
