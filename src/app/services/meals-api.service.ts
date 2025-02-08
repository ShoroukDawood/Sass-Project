import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsApiService {
  constructor(private _http: HttpClient) {}

  getCategories(): Observable<any> {
    return this._http.get('https://www.themealdb.com/api/json/v1/1/categories.php');
  }

  getSearchName(category: string): Observable<any> {
    return this._http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  }
}
