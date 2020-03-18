import { RATE_ALBUM } from "./actions";
export default (state, { type, payload }) => {
  const functions = {
    [RATE_ALBUM]: () => {
      const { albums } = state;
      const { id, rating } = payload;
      const updateReview = () =>
        albums.map(album => {
          if (album.id === id) {
            album.stars = rating;
          }
          return album;
        });
      return { ...state, albums: updateReview() };
    }
  };

  switch (type) {
    case RATE_ALBUM:
      return functions[RATE_ALBUM]();
    default:
      return state;
  }
};
