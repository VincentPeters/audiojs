import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../../providers/player.service';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {Observable} from 'rxjs/Observable';
import Track from '../../interfaces/Track';

import * as playerActions from '../../actions/player.actions';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  playing$: Observable<boolean>;
  loaded$: Observable<boolean>;

  seek$: Observable<number>;

  track$: Observable<Track>;
  tracks$: Observable<Track[]>;

  constructor(private store: Store<fromRoot.State>, private playerService: PlayerService) {
    this.tracks$ = store.select(fromRoot.getQueue);
    this.track$ = store.select(fromRoot.getPlayingTrack);
    this.playing$ = store.select(fromRoot.isPlayerPlaying);
    this.loaded$ = store.select(fromRoot.isPlayerPlaying);

    this.seek$ = playerService.seekObservable;
  }

  ngOnInit() {
  }

  onSelect(track: Track) {
    this.store.dispatch(new playerActions.LoadAction(track));
  }

  play() {
    this.store.dispatch(new playerActions.PlayAction());
  }

  pause() {
    this.store.dispatch(new playerActions.PauseAction());
  }

  stop() {
    this.store.dispatch(new playerActions.StopAction());
  }

  setSeek({seek, duration}) {
    this.store.dispatch(new playerActions.SeekAction({seek, duration}));
  }
}
