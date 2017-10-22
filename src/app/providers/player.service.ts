import {Injectable} from '@angular/core';
import {Howl} from 'howler';
import {Store} from '@ngrx/store';
import * as fromRoot from '../reducers';
import {Observable} from 'rxjs/Observable';
import Track from '../interfaces/Track';

import * as playerActions from '../actions/player.actions';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class PlayerService {
  sound: Howl;

  public seekObservable: BehaviorSubject<number>;

  constructor(private store: Store<fromRoot.State>) {
    this.seekObservable = new BehaviorSubject(0);

    this.calculateSeek();
  }

  /**
   * Load file to play
   * @param track
   */
  load(track) {
    if (this.sound) {
      this.sound.stop();
    }

    this.sound = new Howl({
      html5: true,
      src: [track.path]
    });

    this.sound.once('load', () => {
      this.store.dispatch(new playerActions.LoadSuccessAction(track));
    });
  }

  /**
   * Start the music
   */
  play() {
    // first pause music, else plays double
    this.sound.pause();
    this.sound.play();
  }

  /**
   * Pause the music
   */
  pause() {
    this.sound.pause();
  }

  /**
   * Stop the music
   */
  stop() {
    this.sound.stop();
  }

  /**
   * Return the length of the track
   * @returns {string}
   */
  getLength() {
    return this.formatTime(Math.round(this.sound.duration()));
  }

  calculateSeek() {
    requestAnimationFrame(() => {
      const seek = this.sound ? this.sound.seek() || 0 : 0;

      this.seekObservable.next(seek);

      this.calculateSeek();
    });
  }

  seek({seek, duration}) {
    this.sound.seek(seek * duration / 100);
  }

  /**
   * Format time - seconds to mm:ss
   * @param secs
   * @returns {string}
   */
  formatTime(secs) {
    const minutes = Math.floor(secs / 60) || 0;
    const seconds = (secs - minutes * 60) || 0;

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
}
