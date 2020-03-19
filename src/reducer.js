import { RATE_ALBUM, TOGGLE_FAVORITE } from "./actions";

/** helpers */
const updateAlbumKeyById = key => albums => (id, value) => {
  return albums.map(album => {
    if (album.id === id && value != undefined) album[key] = value;
    return album;
  });
};

const getAlbumById = albums => id =>
  albums.filter(album => album.id === id).pop();

const updateAlbumRating = updateAlbumKeyById("stars");
const updateAlbumFavorite = updateAlbumKeyById("favorite");

export default (state, { type, payload }) => {
  const actionReducers = {
    [RATE_ALBUM]: () => {
      return {
        ...state,
        albums: updateAlbumRating(state.albums)(payload.id, payload.rating)
      };
    },
    [TOGGLE_FAVORITE]: () => {
      const getFavorite = getAlbumById(state.albums)(payload.id).favorite;
      return {
        ...state,
        albums: updateAlbumFavorite(state.albums)(payload.id, !getFavorite)
      };
    }
  };

  const actionReducer = actionReducers[type];

  if (!actionReducer)
    throw new Error("Invalid action type, default state applied");
  return actionReducer ? actionReducer() : state;
};
