import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private API_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getCinemas() {
    return this.httpClient.get(this.API_URL + '/cinemas');
  }

  addToFavorite(cinema) {
    return this.httpClient
      .patch(this.API_URL + '/cinemas/' + cinema.id, {
        isFavorite: true,
      })
      .subscribe((data) => {

      });
  }

  removeToFavorite(cinema) {
    console.log('removeToFavorite', cinema);
    return this.httpClient
      .patch(this.API_URL + '/cinemas/' + cinema.id, {
        isFavorite: false,
      })
      .subscribe((data) => {
      });
  }

  getFavoriteMovie() {
    return this.httpClient.get(this.API_URL + '/cinemas?isFavorite=true');
  }

  addCinema(cinema) {
    return this.httpClient.post(this.API_URL + '/cinemas', cinema);
  }
}
