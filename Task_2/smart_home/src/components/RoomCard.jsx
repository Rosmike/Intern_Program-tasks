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

export const RoomCard = ({ id, name, numberOfUsers, devices }) => {
  const classes = useStyles();
  const history = useHistory();
  const [turnOffRoom, setTurnOffRoom] = useState(false);

  const toggleTurnOffMode = () => {
    setTurnOffRoom(!turnOffRoom);
  };

  const handleRoomTileClick = () => {
    history.push(`/room/${id}`);
  };

  return (
    <Grow in>
      <Card onClick={handleRoomTileClick} className={classes.root}>
        <CardActionArea>
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
            <Box>
              <FormControlLabel
                control={
                  <Switch
                    checked={turnOffRoom}
                    onChange={toggleTurnOffMode}
                    name="editMode"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                }
                labelPlacement="start"
              />
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
};
