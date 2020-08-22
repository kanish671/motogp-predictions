import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';
import './App.css';

const Constructors = (props) => {
  const { categoryId } = props;
  const [constructors, setConstructors] = useState([]);
  useEffect(() => {
    const fetchConstructors = async () => {
      const data = await fetch(`https://api.motogp.com/riders-api/season/2020/teams?category=${categoryId}`);
      const teams = await data.json();
      setConstructors(Array.from(new Set(teams.map(team => team.constructor.name))));
    }
    fetchConstructors();
  }, [categoryId]);
  return (
    <React.Fragment>
      <List>
        {constructors.map((constructor, index) => (
          <ListItem button key={`constructor-${index}`}>
            <ListItemText>
              <Typography variant="h5">
                {`${constructor}`}
              </Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  )
}

export default Constructors;