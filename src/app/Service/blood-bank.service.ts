import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BloodBankService {
  private baseUrl = 'http://localhost:3000/api/items';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getItemById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createItem(item: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, item);
  }

  updateItem(id: string, item: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, item);
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
