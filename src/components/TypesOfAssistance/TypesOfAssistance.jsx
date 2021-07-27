import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import PanToolOutlinedIcon from '@material-ui/icons/PanToolOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import AssistanceItam from '../AssistanceItem/AssistanceItem';

const useStyles = makeStyles({
  root: {
    boxShadow:'none',
    width: '100%',
     borderColor:'red',   
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function IconTabs() {
    const classes = useStyles();
  const theme = useTheme();
    const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    };
    const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab icon={<AccountBalanceWalletOutlinedIcon />}  aria-label="фінансова допомога" />
        <Tab icon={<FavoriteBorderOutlinedIcon />} aria-label="favorite" />
        <Tab icon={<PanToolOutlinedIcon />} aria-label="person" />
        <Tab icon={<PanToolOutlinedIcon />} aria-label="person" />
          </Tabs>
           <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel  value={value} index={0} dir={theme.direction}>
         <AssistanceItam/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Two
        </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
          Item Two
        </TabPanel>
      </SwipeableViews>
    </Paper>
  );
}