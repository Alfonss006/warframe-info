import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WarframeApiService {

  baseURL = 'https://api.warframestat.us/pc/';

  constructor(
    public _http: HttpClient
  ) { }

  getAlerts(): Observable<any> {
    return this._http.get(this.baseURL + 'alerts');
  }

}
