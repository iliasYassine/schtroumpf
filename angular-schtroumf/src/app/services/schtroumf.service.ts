import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/schtroumf';
@Injectable({
  providedIn: 'root'
})
export class SchtroumfService {

  constructor(private http: HttpClient) {}

   create(data: any) {
    return this.http.post(`${baseUrl}/create`, data);
    }


    getAll():Observable<any>{
      return this.http.get(`${baseUrl}/get`);
    }

    getById(id: number): Observable<any> {
      return this.http.get(`${baseUrl}/${id}`);
    }


    update(id: number, role: any): Observable<any> {
      return this.http.put(`${baseUrl}/update/${id}`, role);
    }

    delete(id: number): Observable<any> {
      return this.http.delete(`${baseUrl}/delete/${id}`);
    }






}
