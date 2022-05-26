import { AfterViewInit, Component, } from '@angular/core';
import * as L from 'leaflet';
import { environment } from "../../../../environments/environment";
import { Observable, Subscriber } from "rxjs";

@Component({
	selector: 'app-map-page',
	templateUrl: './map-page.component.html',
	styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements AfterViewInit {
	map: any;

	constructor() {
	}

	public ngAfterViewInit(): void {
		this.loadMap();
	}

	private getCurrentPosition(): Observable<any> {
		return new Observable((observer: Subscriber<any>) => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition((position: any) => {
					observer.next({
						latitude: 36.16935369717059,
						longitude: -115.152793333617,
					});
					observer.complete();
				});
			} else {
				observer.error();
			}
		});
	}

	private loadMap(): void {
		this.map = L.map('map').setView([0, 0], 1);
		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 18,
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1,
			accessToken: environment.mapbox.accessToken,
		}).addTo(this.map);

		this.getCurrentPosition()
			.subscribe((position: any) => {
				this.map.flyTo([position.latitude, position.longitude], 13);

				const icon = L.icon({
					iconUrl: 'assets/images/marker-icon.png',
					shadowUrl: 'assets/images/marker-shadow.png',
					popupAnchor: [13, 0],
				});

				const marker = L.marker([position.latitude, position.longitude], { icon }).bindPopup('Angular Leaflet');
				marker.addTo(this.map);
			});
	}
}