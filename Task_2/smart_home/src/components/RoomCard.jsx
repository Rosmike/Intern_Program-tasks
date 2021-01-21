import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { CardContent, Grow, Switch, Box } from "@material-ui/core";
import { useHistory } from "react-router";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles({
  root: {
    margin: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
  },
  additionalInfo: {
    fontSize: 11,
    fontWeight: 500,
  },
  pos: {
    marginBottom: 12,
  },
});

export const RoomCard = ({
  id,
  name,
  numberOfUsers,
  devices,
  toggleRoom,
  isActive,
}) => {
  const classes = useStyles();
  const history = useHistory();

  const handleRoomTileClick = () => history.push(`/room/${id}`);

  return (
    <Grow in>
      <Card className={classes.root}>
        <CardActionArea onClick={(e) => handleRoomTileClick(e)}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              {name}
            </Typography>
            <Typography className={classes.additionalInfo} gutterBottom>
              {numberOfUsers} family members have access
            </Typography>
            <Typography className={classes.additionalInfo} gutterBottom>
              {devices.length} {devices.length === 1 ? "device" : "devices"}
            </Typography>
            <Box display="flex" justifyContent="flex-end">
              <Switch
                checked={isActive}
                onClick={(e) => toggleRoom(e, id, isActive)}
                name="editMode"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
};
