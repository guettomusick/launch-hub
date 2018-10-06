import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { filter, concatAll } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Launch {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  links: {
    mission_patch: string;
  };
  launch_site: {
    site_name_long: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  constructor(private http: HttpClient) { }

  getLaunches(): Observable<Launch[]> {
    return this.http.get<Launch[]>('https://api.spacexdata.com/v2/launches');
  }

  getLaunch(flightNumber: number): Observable<Launch> {
    return this.http.get<Launch[]>('https://api.spacexdata.com/v2/launches')
    .pipe(concatAll())
    .pipe(filter(launch => launch.flight_number === flightNumber));
  }
}
