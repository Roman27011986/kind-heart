import React from 'react';
import { makeStyles,useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import PanToolOutlinedIcon from '@material-ui/icons/PanToolOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from './TypesOfAssistance.module.scss'
import AssistanceItam from '../AssistanceItem/AssistanceItem';

const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
    width: '100%',
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
    const [value, setValue] = React.useState(1);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    };
    const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <h2 className={styles.title}>Види допомоги</h2>
      <p className={styles.text}>Ви можете змінити вид допомоги</p>
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon tabs example"
      >
        <Tab icon={<PanToolOutlinedIcon />}   aria-label="фінансова допомога" />
        <Tab icon={<AccountBalanceWalletOutlinedIcon/>}  aria-label="favorite" />
        <Tab icon={<WorkOutlineIcon />} aria-label="person" />
        <Tab icon={< FavoriteBorderOutlinedIcon />} aria-label="person" />
          </Tabs>
           <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel  value={value} index={0} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <AssistanceItam/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Two
        </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
          Item Two
        </TabPanel>
      </SwipeableViews>
      </Paper>
      </>
  );
}