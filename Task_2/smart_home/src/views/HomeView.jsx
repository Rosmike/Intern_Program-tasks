import React from "react";
import { Avatar, Box, Fab, Grid, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { RoomCard } from "../components/RoomCard";

export const HomeView = ({ rooms, addRoom }) => {
  return (
    <React.Fragment>
      <Avatar
        style={{ margin: "10px" }}
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
      />
      <div
        style={{
          color: "white",
          margin: "10px",
          maxWidth: "140px",
          fontWeight: "bold",
        }}
      >
        Welcome home Michał
      </div>
      <Box display="flex" justifyContent="flex-end" mt={2} mr={2}>
        <Tooltip title="Add room" aria-label="add" placement="left">
          <Fab
            style={{ backgroundColor: "white", color: "orange" }}
            aria-label="add"
            onClick={() => addRoom()}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
      </Box>
      <Grid container>
        {rooms.map(({ id, name, numberOfUsers, devices }) => {
          return (
            <Grid key={id} item xs={6} md={3} lg={2}>
              <RoomCard
                id={id}
                name={name}
                numberOfUsers={numberOfUsers}
                devices={devices}
              />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};
