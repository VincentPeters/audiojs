import {Action} from '@ngrx/store';
import Track from '../interfaces/Track';


export const LOAD = '[PLAYER] load';
export const LOAD_SUCCESS = '[PLAYER] load success';
export const LOAD_FAIL = '[PLAYER] load fail';

export const PLAY = '[PLAYER] play current track';
export const PAUSE = '[PLAYER] pause current track';
export const STOP = '[PLAYER] stop current track';
export const SEEK = '[PLAYER] seek current track';

export class StopAction implements Action {
  readonly type = STOP;

  constructor() {
  }
}

export class PlayAction implements Action {
  readonly type = PLAY;

  constructor() {
  }
}

export class PauseAction implements Action {
  readonly type = PAUSE;

  constructor() {
  }
}

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload: Track) {
  }
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Track) {
  }
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: { errorCode }) {
  }
}

export class SeekAction implements Action {
  readonly type = SEEK;

  constructor(public payload: { seek: number, duration: number }) {
  }
}

export type Actions =
  | PlayAction
  | PauseAction
  | StopAction
  | LoadAction
  | LoadSuccessAction
  | SeekAction
  | LoadFailAction;
