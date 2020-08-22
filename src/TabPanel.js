import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';

const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`category-tabpanel-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

export default TabPanel;