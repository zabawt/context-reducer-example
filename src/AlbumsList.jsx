import React from "react";
import Album from "./Album";
import ActionProvider from "./ActionProvider";
import { Grid } from "@material-ui/core";

const AlbumsList = ({ albums }) => {
  return (
    <ActionProvider>
      {({ dispatchAlbumRate, dispatchToggleFavorite }) => (
        <Grid container>
          {albums.map(album => (
            <Album
              {...album}
              key={album.name}
              onRatingChange={dispatchAlbumRate}
              onToggleFavorite={dispatchToggleFavorite}
            />
          ))}
        </Grid>
      )}
    </ActionProvider>
  );
};

export default AlbumsList;
