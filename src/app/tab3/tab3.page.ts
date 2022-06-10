import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  cinemas = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getFavoriteMovies();
  }

  getFavoriteMovies() {
    this.dataService.getFavoriteMovie().subscribe((data: any[]) => {
      this.cinemas = data;
    });
  }

  removeToFavorite(cinema) {
    this.dataService.removeToFavorite(cinema);
  }
}
