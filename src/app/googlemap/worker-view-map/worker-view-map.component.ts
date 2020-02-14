
import { Component, OnInit, ViewChild, ElementRef, NgZone, Input, EventEmitter, AfterViewInit } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
// import { ViewforWorkerComponent } from '../../bookingDetails/viewfor-worker/viewfor-worker.component';

@Component({
  selector: 'app-worker-view-map',
  templateUrl: './worker-view-map.component.html',
  styleUrls: ['./worker-view-map.component.scss']
})
export class WorkerViewMapComponent implements OnInit {

  // @ViewChild(ViewforWorkerComponent) map;
  title: string = 'AGM project';
  public latitude: number;
  public longitude: number;
  zoom: number;
  address: string;
  private geoCoder;


  // @Output() public childEvent =  new EventEmitter();
 
  @ViewChild('search')
  public searchElementRef: ElementRef;
 
 
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }
 
 
  ngOnInit() {
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
 
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
 
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
 
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 15;
        });
      });
    });
    // this.childEvent.emit(this.latitude)
  }
 
  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {

        //place to give map cordinates to retrive
        // this.latitude = this.map.latitude;
        // this.longitude = this.map.longitude;
        console.log('x  ' + this.latitude);
        this.zoom = 15;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }
 
 
  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    // this.getAddress(this.latitude, this.longitude);
  }
 
  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 15;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
 
    });
  }
 
}
