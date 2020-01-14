import { Injectable } from '@angular/core';
declare var H: any;

@Injectable({
  providedIn: 'root'
})
export class HereService {

  public platform: any;
  public geocoder: any;

  public constructor() {
      this.platform = new H.service.Platform({
          "app_id": "4HhEgc5s0dafzhGJisK8",
          "app_code": "XHRpK0c2wxpOABzHRn6qTGi9y6IcO0LvU50Ql9R3XSM"
      });
      this.geocoder = this.platform.getGeocodingService();
  }

    public getAddress(query: string) {
      return new Promise((resolve, reject) => {
          this.geocoder.geocode({ searchText: query }, result => {
              if(result.Response.View.length > 0) {
                  if(result.Response.View[0].Result.length > 0) {
                      resolve(result.Response.View[0].Result);
                  } else {
                      reject({ message: "no results found" });
                  }
              } else {
                  reject({ message: "no results found" });
              }
          }, error => {
              reject(error);
          });
      });
  }

  public getAddressFromLatLng(query: string) {
    return new Promise((resolve, reject) => {
        this.geocoder.reverseGeocode({ prox: query, mode: "retrieveAddress" }, result => {
            if(result.Response.View.length > 0) {
                if(result.Response.View[0].Result.length > 0) {
                    resolve(result.Response.View[0].Result);
                } else {
                    reject({ message: "no results found" });
                }
            } else {
                reject({ message: "no results found" });
            }
        }, error => {
            reject(error);
        });
    });
}


    
}

