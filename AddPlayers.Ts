import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css'],
})
export class AddPlayerComponent implements OnInit {
  player = { name: '', age: 0, team: '', position: '' };

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {}

  addPlayer() {
    this.playerService.addPlayer(this.player).subscribe((response) => {
      console.log('Player added:', response);
      // Clear the form or perform any other action needed
    });
  }
}
