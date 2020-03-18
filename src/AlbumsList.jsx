import React, { useContext } from "react";
import Album from "./Album";
import { AppContext } from "./store";
import { RATE_ALBUM, actionCreator } from "./actions";

const AlbumsList = ({ albums }) => {
  const { dispatch } = useContext(AppContext);
  const rateAction = actionCreator()[RATE_ALBUM];
  return albums.map(album => (
    <Album
      {...album}
      key={album.name}
      onRatingChange={value => {
        if (value) dispatch(rateAction(album.id, value));
      }}
    />
  ));
};

export default AlbumsList;
