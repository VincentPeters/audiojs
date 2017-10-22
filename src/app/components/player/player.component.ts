import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Track from '../../interfaces/Track';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input('track') track: Track;
  @Input('playing') playing: boolean;
  @Input('loading') loading: boolean;
  @Input('seek') seek: number;

  @Output('play') play = new EventEmitter();
  @Output('pause') pause = new EventEmitter();
  @Output('stop') stop = new EventEmitter();
  @Output('setSeek') setSeek = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  calculateSlider(seek, total) {
    return Math.floor(seek / total * 100);
  }
}
