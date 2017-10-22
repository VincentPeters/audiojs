import Artist from './Artist';

export default interface Album {
  id: number,
  name: string,
  artist?: Artist
}
