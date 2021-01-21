import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { CardContent, Grow } from "@material-ui/core";

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

export const DeviceCard = ({ name, parameter }) => {
  const classes = useStyles();

  return (
    <Grow in>
      <Card onClick={() => {}} className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              {name}
            </Typography>
            <Typography className={classes.additionalInfo} gutterBottom>
              {parameter.value} {parameter.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
};
