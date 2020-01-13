import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { HereService } from "../here.service";

declare var H: any;

@Component({
  selector: 'app-gmap',
  templateUrl: './gmap.component.html',
  styleUrls: ['./gmap.component.scss']
})
export class GmapComponent implements OnInit {

 
    @ViewChild("map")
    public mapElement: ElementRef;

    @Input()
    public appId: any;

    @Input()
    public appCode: any;

    @Input()
    public lat: any;

    @Input()
    public lng: any;

    @Input()
    public width: any;

    @Input()
    public height: any;

    public constructor() { }

    public ngOnInit() { }

    public ngAfterViewInit() {
        let platform = new H.service.Platform({
            "app_id": this.appId,
            "app_code": this.appCode
        });
        let defaultLayers = platform.createDefaultLayers();
        let map = new H.Map(
            this.mapElement.nativeElement,
            defaultLayers.normal.map,
            {
                zoom: 10,
                center: { lat: this.lat, lng: this.lng }
            }
        );
    }

}
  


