import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, MetaReducer,
} from '@ngrx/store';
import {createSelector} from 'reselect';
import {environment} from 'environments';
import {storeFreeze} from 'ngrx-store-freeze';
import * as fromPlayer from './player.reducer';
import * as fromQueue from './queue.reducer';

export interface State {
  player: fromPlayer.State;
  queue: fromQueue.State;
}

export const reducers: ActionReducerMap<State> = {
  player: fromPlayer.reducer,
  queue: fromQueue.reducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log(state, action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

// player

export const getPlayerState = createFeatureSelector<fromPlayer.State>('player');

export const isPlayerPlaying = createSelector(getPlayerState, fromPlayer.isPlaying);
export const isPlayerLoading = createSelector(getPlayerState, fromPlayer.isLoading);
export const isPlayerLoaded = createSelector(getPlayerState, fromPlayer.isLoaded);
export const getPlayerTrackId = createSelector(getPlayerState, fromPlayer.getTrackId);

// tracklist

export const getQueueState = createFeatureSelector<fromQueue.State>('queue');

export const getQueueTracks = createSelector(getQueueState, fromQueue.getTracks);

// combined

export const getQueue = createSelector(getQueueTracks, getPlayerState, (tracks, playerState) => {
  return tracks.map((track) => {
    return {
      ...track,
      playing: track.id === playerState.trackId ? playerState.playing : false,
      loaded: track.id === playerState.trackId ? playerState.loaded : false,
    }
  });
});

export const getPlayingTrack = createSelector(getQueueTracks, getPlayerTrackId, (tracks, trackId) => {
  return tracks.find((track) => track.id === trackId);
});
