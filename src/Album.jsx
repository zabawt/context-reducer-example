import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  CardActions,
  Typography,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
    background: "#333",
    color: "white",
    margin: "12px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "small",
    textTransform: "uppercase",
    fontWeight: "bold",
    whiteSpace: "nowrap",
  },
  favorites: {
    color: "firebrick",
  },
  media: {
    height: "150px",
    minHeight: "150px",
    maxHeight: "150px",
  },
}));

const Album = ({
  id,
  artist,
  name,
  favorite,
  stars,
  coverUri,
  review,
  onRatingChange,
  onToggleFavorite,
}) => {
  const handleRatingOnChange = (event, stars) => {
    onRatingChange(id, stars);
  };

  const handleToggleFavorite = event => {
    onToggleFavorite(id);
  };

  const { root, favorites, title, media } = useStyles();
  const favoriteIcons = {
    fontSize: "large",
    className: favorites,
  };
  return (
    <Card className={root} key={name}>
      <CardHeader
        title={name}
        subheader={artist}
        classes={{
          title,
        }}
        action={
          <IconButton onClick={handleToggleFavorite}>
            {favorite ? (
              <FavoriteIcon {...favoriteIcons} />
            ) : (
              <FavoriteBorderIcon {...favoriteIcons} />
            )}
          </IconButton>
        }
      />
      <CardMedia className={media} image={coverUri} title={name} />
      <CardContent style={{ flex: 3 }}>
        <Typography variant="body2" component="p">
          {review}
        </Typography>
      </CardContent>
      <CardActions>
        <Rating
          name={`${artist}-${name}`}
          value={stars}
          onChange={handleRatingOnChange}
          size="large"
        />
      </CardActions>
    </Card>
  );
};

export default Album;
