import { useHistory } from "react-router";
import {
  Box,
  Button,
  Fab,
  FormControlLabel,
  Grid,
  Grow,
  Switch,
  Tooltip,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useEffect, useState } from "react";
import { ArrowBack } from "@material-ui/icons";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { DeviceCard } from "../components/DeviceCard";

import { AddDeviceDialog } from "../components/AddDeviceDialog";
import { ConfirmDialog } from "../components/ConfirmDialog";

const useStyles = makeStyles({
  root: {
    margin: 15,
  },
  title: {
    fontSize: 18,
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

export const RoomView = ({ rooms, setRooms }) => {
  const classes = useStyles();
  const history = useHistory();
  const params = useParams();
  const roomId = parseInt(params.roomId);
  const room = rooms.find((room) => room.id === roomId);

  const [isEditMode, setIsEditMode] = useState(false);
  const [confirmRoomDialogOpen, setConfirmRoomDialogOpen] = useState(false);
  const [confirmDeviceDialogOpen, setConfirmDeviceDialogOpen] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [showAddDeviceDialog, setShowAddDeviceDialog] = useState(false);

  useEffect(() => {
    //
  }, []);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  const getParameterObject = (parameter) => {
    switch (parameter) {
      case "Brightness":
        return {
          name: "Brightness",
          type: "percent",
          value: "0",
          minValue: "0",
          maxValue: "100",
        };
      case "Temperature":
        return {
          name: "Temperature",
          type: "celsius",
          value: "0",
          minValue: "-12",
          maxValue: "-2",
        };
      case "Volume":
        return {
          name: "Volume",
          type: "percent",
          value: "0",
          minValue: "0",
          maxValue: "100",
        };
      default:
        break;
    }
  };

  const editDevice = ({ name, bulkToggleAllowed, parameter }) => {
    const roomsToUpdate = [...rooms];
    const newDevice = {
      name,
      bulkToggleAllowed,
      isActive: false,
      parameter:
        parameter === editItem.parameter.name
          ? editItem.parameter
          : getParameterObject(parameter),
    };

    const roomToChangeIndex = roomsToUpdate.findIndex(
      (item) => item.id === roomId
    );
    const deviceToChangeIndex = roomsToUpdate[
      roomToChangeIndex
    ].devices.findIndex((device) => device.id === editItem.id);

    roomsToUpdate[roomToChangeIndex].devices[deviceToChangeIndex] = newDevice;

    setRooms(roomsToUpdate);
  };

  const removeDevice = () => {
    const roomsToFilter = [...rooms];
    const filtered = roomsToFilter.filter((room) => room.id !== roomId);

    history.push("/");
    setConfirmRoomDialogOpen(false);
    setRooms(filtered);
  };

  const addDevice = ({ name, bulkToggleAllowed, parameter }) => {
    const roomsToUpdate = [...rooms];
    const newDevice = {
      id:
        room.devices.length > 0
          ? room.devices[room.devices.length - 1].id + 1
          : 1,
      name,
      bulkToggleAllowed,
      isActive: false,
      parameter: getParameterObject(parameter),
    };

    const roomToChangeIndex = roomsToUpdate.findIndex(
      (item) => item.id === roomId
    );

    roomsToUpdate[roomToChangeIndex].devices.push(newDevice);

    setRooms(roomsToUpdate);
  };

  const removeRoom = () => {
    const roomsToFilter = [...rooms];
    const filtered = roomsToFilter.filter((room) => room.id !== roomId);

    history.push("/");
    setConfirmRoomDialogOpen(false);
    setRooms(filtered);
  };

  return (
    <div>
      <Box display="flex" justifyContent="flex-start" mt={2} ml={2} mb={4}>
        <Tooltip title="Go back" aria-label="add" placement="right">
          <Fab
            style={{ backgroundColor: "white", color: "orange" }}
            aria-label="add"
            onClick={() => history.go(-1)}
          >
            <ArrowBack />
          </Fab>
        </Tooltip>
      </Box>
      <Box display="flex" justifyContent="flex-end" mt={2} mr={2} ml={4}>
        <FormControlLabel
          control={
            <Switch
              checked={isEditMode}
              style={{ color: "white" }}
              onChange={toggleEditMode}
              name="editMode"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          }
          label="Edit room"
          labelPlacement="start"
        />
      </Box>
      <Grid container>
        <Grid item xs={12}>
          <Box ml={2}>
            <Typography
              className={classes.title}
              gutterBottom
              style={{ color: "white" }}
            >
              {room.name}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box ml={2}>
            <Typography
              className={classes.additionalInfo}
              gutterBottom
              style={{ color: "white" }}
            >
              {room.devices.length} family members have access
            </Typography>
          </Box>
          <Grow in={isEditMode}>
            <Box mx={2}>
              <Box mt={1}>
                <Button
                  fullWidth
                  variant="contained"
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  startIcon={<DeleteIcon />}
                  onClick={() => setConfirmRoomDialogOpen(true)}
                >
                  Delete this room
                </Button>
              </Box>
              <Box mt={1}>
                <Button
                  fullWidth
                  variant="outlined"
                  style={{ backgroundColor: "white", fontWeight: "bold" }}
                  onClick={() => setShowAddDeviceDialog(true)}
                >
                  Add new device
                </Button>
              </Box>
            </Box>
          </Grow>
        </Grid>
        {room.devices.map((device) => {
          return (
            <Grid key={device.id} item xs={12} sm={6} md={3} lg={2}>
              <Box
                onClick={() => {
                  if (isEditMode) {
                    setEditItem(device);
                    setShowAddDeviceDialog(true);
                  }
                }}
              >
                <DeviceCard name={device.name} parameter={device.parameter} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <AddDeviceDialog
        editItem={editItem}
        open={showAddDeviceDialog}
        addDevice={addDevice}
        editDevice={editDevice}
        handleClose={() => {
          setEditItem(null);
          setShowAddDeviceDialog(false);
        }}
      />
      <ConfirmDialog
        open={confirmRoomDialogOpen}
        title={"Are you sure?"}
        text={"You will delete this room permanently"}
        handleClose={() => setConfirmRoomDialogOpen(false)}
        onConfirm={removeRoom}
      />
      <ConfirmDialog
        open={confirmDeviceDialogOpen}
        title={"Are you sure?"}
        text={"You will delete this device permanently"}
        handleClose={() => setConfirmDeviceDialogOpen(false)}
        onConfirm={removeDevice}
      />
    </div>
  );
};
