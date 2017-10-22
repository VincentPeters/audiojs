import Track from '../interfaces/Track';
import Artist from '../interfaces/Artist';
import Album from '../interfaces/Album';

export interface State {
  tracks: Track[];
}

const Vinnie: Artist = {
  id: 1,
  name: 'vinnie de artiets',
};

const VinnieAlbum: Album = {
  id: 1,
  name: 'vinnie het album',
  artist: Vinnie,
};


export const initialState: State = {
  tracks: [{
    id: 1,
    name: 'Epic song',
    type: 'local',
    path: '/assets/music/1.mp3',
    duration: 323,
    artist: Vinnie,
    album: VinnieAlbum,
  }, {
    id: 2,
    name: ' Battle Hymn of the Republic',
    type: 'local',
    path: '/assets/music/battle.mp3',
    duration: 140,
    artist: Vinnie,
    album: VinnieAlbum,
  }]
};

export function reducer(state = initialState, action: any): State {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export const getTracks = (state: State) => state.tracks;
