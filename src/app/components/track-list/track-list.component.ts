import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Track from '../../interfaces/Track';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {
  @Input('tracks') tracks: [any];
  @Output('onSelect') onSelect = new EventEmitter<Track>();

  constructor() {
  }

  ngOnInit() {
  }

}
