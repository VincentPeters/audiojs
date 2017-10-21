import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable()
export class PlayerService {
  sound: any;

  /**
   * Load file to play
   * @param file
   */
  load(file) {
    this.sound = new Howl({
      html5: true,
      src: [file]
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
   * Pause th emusic
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

  /**
   * Format time - seconds to mm:ss
   * @param secs
   * @returns {string}
   */
  formatTime(secs) {
    let minutes = Math.floor(secs / 60) || 0;
    let seconds = (secs - minutes * 60) || 0;

    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }
}
