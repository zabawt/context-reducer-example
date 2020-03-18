import React from "react";
import { Card, CardContent, Grid, Link } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
    background: "#333",
    color: "white",
    marginBottom: "24px"
  },
  special: {
    color: "FireBrick"
  }
}));

const PRO = "PRO";

const User = ({ userName, email, status }) => {
  const { root, special } = useStyles();
  return (
    <Card className={root}>
      <CardContent>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <AccountCircleIcon className={special} fontSize="large" />
          </Grid>
          <Grid item>
            <h3>{userName}</h3>
          </Grid>
          {status === PRO && (
            <Grid item>
              {[1, 2, 3].map(item => (
                <AttachMoneyIcon
                  fontSize="small"
                  className={special}
                  key={item}
                />
              ))}
            </Grid>
          )}
        </Grid>
        <Link className={special} href={`mailto://${email}`}>
          {email}
        </Link>
      </CardContent>
    </Card>
  );
};

export default User;
