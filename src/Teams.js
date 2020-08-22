import React, { useState, useEffect } from 'react';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(40),
    height: theme.spacing(20),
    margin: theme.spacing(1),
  },
}));

const Teams = (props) => {
  const classes = useStyles();
  const { categoryId } = props;
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const fetchTeams = async () => {
      const data = await fetch(`https://api.motogp.com/riders-api/season/2020/teams?category=${categoryId}`);
      const teams = await data.json();
      setTeams(teams);
    }
    fetchTeams();
  }, [categoryId]);

  return (
    <React.Fragment>
      <List>
        {teams.map((team, index) => (
          <ListItem button key={`team-${index}`}>
            <ListItemAvatar>
              <Avatar alt={`${team.name}`} src={`${team.picture}`} className={classes.large} variant="square" />
            </ListItemAvatar>
            <ListItemText>
              <Typography variant="h5">
                {`${team.name}`}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  )
}

export default Teams;