import * as playerActions from '../actions/player.actions';


export interface State {
  playing: boolean;
  trackId: number;
  loaded: boolean;
  loading: boolean;
  error: boolean;
  errorCode: number;
}

export const initialState: State = {
  playing: false,
  trackId: null,
  loaded: false,
  loading: false,
  error: false,
  errorCode: null,
};

export function reducer(state = initialState, action: playerActions.Actions): State {
  switch (action.type) {
    case playerActions.LOAD: {
      return {
        ...state,
        trackId: null,
        playing: false,
        loaded: false,
        loading: true,
        error: false,
      };
    }

    case playerActions.LOAD_FAIL: {
      return {
        ...state,
        loading: false,
        error: true,
        errorCode: action.payload.errorCode,
      };
    }

    case playerActions.LOAD_SUCCESS: {
      return {
        ...state,
        trackId: action.payload.id,
        loading: false,
        loaded: true,
      };
    }

    case playerActions.PLAY: {
      return {
        ...state,
        playing: true,
      };
    }

    case playerActions.PAUSE: {
      return {
        ...state,
        playing: false,
      };
    }

    case playerActions.STOP: {
      return {
        ...state,
        playing: false,
      };
    }

    default: {
      return state;
    }
  }
}

export const isPlaying = (state: State) => state.playing;
export const isLoading = (state: State) => state.loading;
export const isLoaded = (state: State) => state.loaded;
export const getTrackId = (state: State) => state.trackId;
