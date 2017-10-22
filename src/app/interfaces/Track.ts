import Artist from './Artist';
import Album from './Album';

export default interface Track {
  id: number,
  name: string,
  type: string,
  path: string,
  duration: number,
  playing?: boolean,
  loaded?: boolean,
  artist?: Artist,
  album?: Album,
}
