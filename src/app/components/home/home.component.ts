import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../providers/player.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    this.playerService.load('/Users/vincent/Documents/_projects/personal/audiojs/music/1.mp3');
  }

  play() {
    this.playerService.play();
  }

  pause() {
    this.playerService.pause();
  }

  stop() {
    this.playerService.stop();
  }
}
