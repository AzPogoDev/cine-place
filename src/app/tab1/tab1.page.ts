import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  cinemas = [];

  byFavorite = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCinemas().subscribe((data: any[]) => {
      console.log(data);
      this.cinemas = data;
    });
  }

  addToFavorite(cinema) {
    this.dataService.addToFavorite(cinema);
  }

  removeToFavorite(cinema) {
    this.dataService.removeToFavorite(cinema);
  }
}
