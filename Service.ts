import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  apiUrl = 'http://localhost:3000'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  addPlayer(player: any) {
    return this.http.post(`${this.apiUrl}/players`, player);
  }

  getPlayers() {
    return this.http.get(`${this.apiUrl}/players`);
  }

  // Implement other CRUD methods (update, delete)
}
