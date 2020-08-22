import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) => ({
  complete: {
    background: 'rgb(200, 5, 2)',
  },
  active: {
    background: 'rgb(255, 255, 255)',
  },
  scheduled: {
    background: 'rgb(29, 183, 43)',
  }
}));

const Events = () => {
  const classes = useStyles();
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    const fetchEvents = async () => {
      const data = await fetch(`https://fantasy.motogp.com/json/events.json`);
      const events = await data.json();
      setEvents(events);
    }
    fetchEvents();
  }, []);

  return (
    <React.Fragment>
      <List>
        {events.map((event, index) => (
          <ListItem button key={`event-${index}`} className={classes[event.status]}>
            <ListItemText>
              <Typography variant="h5">
                {`${event.displayed_name}`}
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="h6">
                {`${event.circuit}`}
              </Typography>
            </ListItemText>
            <Typography variant="h6">
              {`${event.start.substring(0,10)}`}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  )
}

export default Events;