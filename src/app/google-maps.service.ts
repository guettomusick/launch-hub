import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface MapLocation {
  latitude: number;
  longitude: number;
}

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  constructor() { }

  GetLatlong(address: string) {
    return new Observable<MapLocation>((observer) => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ 'address': address }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          observer.next({
            latitude: results[0].geometry.location.lat(),
            longitude: results[0].geometry.location.lng()
          });
        }
        observer.complete();
      });
    });
  }
}
