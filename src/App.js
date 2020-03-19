import React from "react";
import { data } from "./data";
import { AppContextProvider, AppContextConsumer } from "./store";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";
import AlbumsList from "./AlbumsList";
import User from "./User";

export default function App() {
  return (
    <AppContextProvider initialValue={data}>
      <Box bgcolor="#161616" height="100%" minHeight="100vh" paddingTop="24px">
        <Container maxWidth="xl">
          <AppContextConsumer>
            {({ state: { user, albums } }) => (
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <User {...user} />
                </Grid>
                <Grid item xs={9}>
                  <AlbumsList albums={albums} />
                </Grid>
              </Grid>
            )}
          </AppContextConsumer>
        </Container>
      </Box>
    </AppContextProvider>
  );
}
