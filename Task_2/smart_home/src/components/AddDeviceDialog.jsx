import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogActions,
  Button,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Grow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  parameterSelect: {
    width: "100%",
  },
});

export const AddDeviceDialog = ({
  editItem,
  open,
  handleClose,
  addDevice,
  editDevice,
  setConfirmDialogOpen,
}) => {
  const classes = useStyles();
  const [bulkToggleAllowed, setBulkToggleAllowed] = useState(false);
  const [parameter, setParameter] = useState("");
  const [name, setName] = useState("");
  const [selectOpen, setSelectOpen] = useState(false);

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
      setBulkToggleAllowed(editItem.bulkToggleAllowed);
      setParameter(editItem.parameter.name);
    }
  }, [editItem]);

  const resetForm = () => {
    setName("");
    setBulkToggleAllowed(false);
    setParameter("");
  };

  const isValid = name !== "" && parameter !== "";

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add new device</DialogTitle>
      <DialogContent>
        <TextField
          required
          autoFocus
          margin="dense"
          id="name"
          label="Device name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Box width="100%" mt={3}>
          <FormControlLabel
            control={
              <Checkbox
                checked={bulkToggleAllowed}
                onChange={() => setBulkToggleAllowed(!bulkToggleAllowed)}
                name="bulkToggleAllowed"
              />
            }
            label="Do not turn off this device in bulk"
          />
        </Box>
        <Box width="100%" mt={3}>
          <FormControl className={classes.parameterSelect}>
            <InputLabel id="demo-simple-select-label">Parameter</InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              open={selectOpen}
              onOpen={() => setSelectOpen(true)}
              onClose={() => setSelectOpen(false)}
              value={parameter}
              onChange={(e) => setParameter(e.target.value)}
            >
              <MenuItem value={"Temperature"}>Temperature</MenuItem>
              <MenuItem value={"Volume"}>Volume</MenuItem>
              <MenuItem value={"Brightness"}>Brightness</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grow in>
          <Box mx={2}>
            <Box mt={1}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={() => setConfirmDialogOpen(true)}
              >
                Delete this device
              </Button>
            </Box>
          </Box>
        </Grow>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleClose();
            resetForm();
          }}
          color="primary"
        >
          Cancel
        </Button>
        <Button
          disabled={!isValid}
          onClick={() => {
            editItem
              ? editDevice({ name, bulkToggleAllowed, parameter })
              : addDevice({ name, bulkToggleAllowed, parameter });
            handleClose();
            resetForm();
          }}
          color="primary"
        >
          {editItem ? "Save" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
