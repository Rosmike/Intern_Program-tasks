import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  CardContent,
  Collapse,
  Grid,
  Grow,
  Slider,
  Switch,
} from "@material-ui/core";

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

export const DeviceCard = ({
  isActive,
  device,
  toggleDevice,
  name,
  parameter,
  isEditMode,
}) => {
  const classes = useStyles();

  const [showDetails, setShowDetails] = useState(false);

  const valuetext = (value) => {
    return `${value}°C`;
  };

  return (
    <Grow in>
      <Card className={classes.root}>
        <CardActionArea
          onClick={(e) => {
            if (!isEditMode) {
              e.stopPropagation();
              setShowDetails(!showDetails);
            }
          }}
        >
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                <Typography className={classes.title} gutterBottom>
                  {name}
                </Typography>
                <Typography className={classes.additionalInfo} gutterBottom>
                  {parameter.value} {parameter.name}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                  height="100%"
                >
                  <Switch
                    checked={isActive}
                    onClick={(e) => toggleDevice(e, device, isActive)}
                    name="editMode"
                    inputProps={{ "aria-label": "secondary checkbox" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <Collapse in={showDetails}>
            <Box mx={3}>
              {/*// TODO: handle this slider functionally*/}
              <Slider
                defaultValue={50}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
              />
            </Box>
          </Collapse>
        </CardActionArea>
      </Card>
    </Grow>
  );
};
