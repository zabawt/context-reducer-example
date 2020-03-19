import { useContext } from "react";
import { RATE_ALBUM, TOGGLE_FAVORITE, actionCreator } from "./actions";
import { AppContext } from "./store";

const ActionProvider = ({ children }) => {
  const { dispatch } = useContext(AppContext);

  const actions = {
    dispatchAlbumRate: (id, value) =>
      void dispatch(actionCreator[RATE_ALBUM](id, value)),
    dispatchToggleFavorite: id =>
      void dispatch(actionCreator[TOGGLE_FAVORITE](id))
  };

  return children(actions);
};

export default ActionProvider;
