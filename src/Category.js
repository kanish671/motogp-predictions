import React, { useState } from 'react';
import './App.css';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import TabPanel from './TabPanel';
import Nav from './Nav';
import Riders from './Riders';
import Constructors from './Constructors';
import Teams from './Teams';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
}));
const Category = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const location = useLocation();
  const categoryId = location?.state?.categoryId;

  const changeValue = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  }

  return (
    <React.Fragment>
      <Nav />
      {categoryId ? (
        <React.Fragment>
          <TabPanel value={value} index={0}>
            <Riders categoryId={categoryId}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Constructors categoryId={categoryId}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Teams categoryId={categoryId}/>
          </TabPanel>
          <AppBar position="fixed" className={classes.appBar}>
            <Tabs value={value} onChange={changeValue}>
              <Tab label="Riders" value={0} id="category-tab-0" />
              <Tab label="Constructors" value={1} id="category-tab-1" />
              <Tab label="Teams" value={2} id="category-tab-2" />
            </Tabs>
          </AppBar>
        </React.Fragment>
      ) : (
        <React.Fragment />
      )}
    </React.Fragment>
  )
}
export default Category;