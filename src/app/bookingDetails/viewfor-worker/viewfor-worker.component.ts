import { Component, Input, OnInit, ViewChild, ElementRef, NgZone, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ajax } from 'rxjs/ajax';
import * as _ from 'lodash';
import { MapsAPILoader, MouseEvent } from '@agm/core';

// import { WorkerViewMapComponent } from '../../googlemap/worker-view-map/worker-view-map.component';


@Component({
  selector: 'app-viewfor-worker',
  templateUrl: './viewfor-worker.component.html',
  styleUrls: ['./viewfor-worker.component.scss'],

})

export class ViewforWorkerComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  results: any;
  filteredNames: any[] = [];
  workername: string;
  jobtype: string;
  status: string;
  value: string;
  verifyemail: string;
  filters = {}
  title: string = 'AGM project';
  zoom: number;
  address: string;
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private afs: AngularFirestore,
    public _Activatedroute: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
    this.value = this._Activatedroute.snapshot.paramMap.get('uid');
    console.log('value ' + this.value);
  }

  ngOnInit() {
    console.log(this.value)
    this.afs.collection('bookings', ref => ref
      .where('workerid', '==', this.value)
      .where('status', '==', 'pending'))
      .valueChanges().subscribe(results => {
        this.results = results;
        this.applyFilters()
      });

  }

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

  private applyFilters() {
    this.filteredNames = _.filter(this.results, _.conforms(this.filters))
  }

  filterName(property: string, rule: string) {
    this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
    this.applyFilters()
  }

  filterJob(property: string, rule: string) {
    this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
    this.applyFilters()
  }

  filterStatus(property: string, rule: string) {
    this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
    this.applyFilters()
  }

  filterVerifyEmail(property: string, rule: string) {
    this.filters[property] = val => val.toLowerCase().includes(rule.toLowerCase())
    this.applyFilters()
  }

  removeFilter(property: string) {
    delete this.filters[property]
    this[property] == null
    this.applyFilters()
  }

  send() {
    this.results = this.results.sort((n1, n2) => {
      if (n1.uid > n2.uid) { return 1 }
      if (n1.uid < n2.uid) { return -1 }
      return 0;
    })
    this.applyFilters()
    // this.filteredNames.price.sort((n1,n2) =>{
    //   return (this.results)? n1.localeComapare(n2)
    //   :n2.localeComapare(n1);
    // });
  }

  send2() {
    this.results = this.results.sort((n1, n2) => {
      if (n1.uid < n2.uid) { return 1 }
      if (n1.uid > n2.uid) { return -1 }
      return 0;

    })
    this.applyFilters()
  }

  confirm(id) {
    this.afs.doc('bookings/' + id).update({ 'status': 'ongoing' });
    alert('Booking accepted');

  }

  cancel(id) {
    this.afs.doc('bookings/' + id).update({ 'status': 'canceled' });
    alert('Booking canceled');

  }

  getMap(lat, long) {
    this.latitude = lat;
    console.log('lat ' + lat)
    this.longitude = long;
    console.log('long ' + long)

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

}
