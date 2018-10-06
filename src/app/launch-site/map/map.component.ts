import { Component, OnDestroy, ViewChild, Input, AfterViewInit } from '@angular/core';
import { GoogleMapsService } from '../../google-maps.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lh-map',
  template: `
    <div #gmap [ngStyle]="{'height': height+'px'}"></div>
  `,
  styles: []
})
export class MapComponent implements AfterViewInit, OnDestroy {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  mapsSubscription: Subscription;

  @Input() address: string;
  @Input() height = 400;

  constructor(private googleMaps: GoogleMapsService) { }

  ngAfterViewInit() {
    this.mapsSubscription = this.googleMaps.GetLatlong(this.address).subscribe(location => {
      const mapProp = {
        center: new google.maps.LatLng(location.latitude, location.longitude),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        scaleControl: false,
        fullscreenControl: false,
        draggable: false,
        disableDefaultUI : true,
        clickableIcons: false,
        draggableCursor: 'arrow'
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    });
  }

  ngOnDestroy() {
    this.mapsSubscription.unsubscribe();
  }

}
