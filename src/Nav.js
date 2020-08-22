import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, List, ListItem, ListItemText, Typography, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './App.css'

const useStyles = makeStyles((theme) => ({
  alignRight: {
    marginLeft: '10%',
  },
  navStyle: {
    color: 'black',
    textDecoration: 'none',
  },
  navLinks: {
    width: '50%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    listStyle: 'none',
  }
}));

const Nav = () => {
  const classes = useStyles();
  
  useEffect(() => {
    fetchCategories();
  }, []);
  
  const [categories, setCategories] = useState([]);
  
  const fetchCategories = async () => {
    const data = await fetch('https://api.motogp.com/riders-api/season/2020/categories');
    const categories = await data.json();
    console.log(categories);
    setCategories(categories);
  }
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">
          <Link className={classes.navStyle} to="/">Discord Predict</Link>
        </Typography>
        <List className={`${classes.alignRight} ${classes.navLinks}`}>
          {categories.map((category, index) => (
            <ListItem>
              <Link className={classes.navStyle} to={{pathname: `/${category.name.toLowerCase()}`, state: {categoryId: category.id}}} key={`category-${index}`}>
                <ListItemText>
                  <Typography variant="h6">
                    {category.name}
                  </Typography>
                </ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  )
}
    
export default Nav;
    