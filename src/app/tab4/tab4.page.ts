import { DataService } from './../data.service';
import { LocalisationService } from './../localisation.service';
import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  latitude: any = 0; //latitude
  longitude: any = 0; //longitude
  cinemas = [];
  earlycine = [];

  constructor(
    private geolocation: Geolocation,
    private localisationService: LocalisationService,
    private DataService: DataService
  ) {}

  ngOnInit() {
    this.getCurrentCoordinates();
    this.getAllCinema();
  }

  options = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 3600,
  };
  // use geolocation to get user's device coordinates
  getCurrentCoordinates() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
      })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  getAllCinema() {
    this.DataService.getCinemas().subscribe((data: any[]) => {
      this.cinemas = data;
    });
  }
  // Compare user localisation with cinemas localisation
  compareLocalisation() {
    let early = [
      {
        ciname: '',
        distance: 0,
      },
    ];

    this.cinemas.forEach((ele) => {
      let la = ele.localisation.latitude;
      let long = ele.localisation.longitude;
      let distance = this.localisationService.getDistance(
        this.latitude,
        this.longitude,
        la,
        long
      );

      let objectdist = {
        ciname: ele.name,
        distance: distance,
      };

      early.push(objectdist);
    });

    early.sort(function (a, b) {
      return a['distance'] - b['distance'];
    });

    console.log(early);
    return early;
  }
}
