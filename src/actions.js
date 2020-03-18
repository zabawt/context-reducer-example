export const RATE_ALBUM = "rate_album";

/** returns an object of functions to generate actions */
export const actionCreator = () => {
  return {
    [RATE_ALBUM]: (id, rating) => {
      return {
        type: RATE_ALBUM,
        payload: {
          id,
          rating
        }
      };
    }
  };
};
