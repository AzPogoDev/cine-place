import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(private dataService: DataService) {}

  cinema: any = {
    name: '',
    image: '',
    isFavorite: false,
    localisation: {
      adresse: '',
      latitude: '',
      longitude: '',
    },
  };

  onSubmit() {
    let cinema = this.cinema;
    this.dataService.addCinema(cinema).subscribe((data: any[]) => {
      this.cinema = data;
    });
  }
}
