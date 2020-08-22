import React, { useState, useEffect } from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(1),
  },
}));

const Riders = (props) => {
  const classes = useStyles();
  const { categoryId } = props;
  
  const [riders, setRiders] = useState([]);
  useEffect(() => {
    const fetchRiders = async () => {
      const data = await fetch(`https://api.motogp.com/riders-api/season/2020/riders?category=${categoryId}`);
      const riders = await data.json();
      setRiders(riders.filter(rider => rider.current_career_step.in_grid));
    }
    fetchRiders();
  }, [categoryId]);

  return (
    <React.Fragment>
      <List>
        {riders.map((rider, index) => (
            <ListItem button key={`rider-${index}`}>
              <ListItemAvatar>
                <Avatar alt={`${rider.name} ${rider.surname}`} src={`${rider.current_career_step.pictures.portrait}`} className={classes.large} variant="square" />
              </ListItemAvatar>
              <ListItemText>
                <Typography variant="h5">
                  {`${rider.name} ${rider.surname}`}
                </Typography>
              </ListItemText>
              <Avatar alt={`${rider.name} ${rider.surname}`} src={`${rider.current_career_step.pictures.number}`} className={classes.large} variant="square" />
            </ListItem>
        ))}
      </List>
    </React.Fragment>
  )
}

export default Riders;