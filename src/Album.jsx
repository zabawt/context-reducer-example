import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  CardActions
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
    background: "#333",
    color: "white",
    marginBottom: "24px"
  },

  reviews: {
    fontSize: "small",
    fontStyle: "italic"
  },
  media: {
    height: 0,
    paddingTop: "50%"
  }
}));

const Album = ({ artist, name, stars, coverUri, review, onRatingChange }) => {
  const handleRatingOnChange = (event, value) => {
    onRatingChange(value);
  };
  const { root, reviews, media } = useStyles();
  return (
    <Card className={root} key={name}>
      <CardHeader title={name} subheader={artist} />
      <CardMedia className={media} image={coverUri} title={name} />
      <CardContent className={reviews}>{review}</CardContent>
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
