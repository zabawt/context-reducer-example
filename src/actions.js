export const RATE_ALBUM = "rate_album";
export const TOGGLE_FAVORITE = "toggle_favorite";

/** returns an object of functions to generate actions */
export const actionCreator = {
  [RATE_ALBUM]: (id, rating) => {
    return {
      type: RATE_ALBUM,
      payload: {
        id,
        rating
      }
    };
  },
  [TOGGLE_FAVORITE]: id => {
    return {
      type: TOGGLE_FAVORITE,
      payload: {
        id
      }
    };
  }
};
