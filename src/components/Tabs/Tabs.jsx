import {useState} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from './Tabs.module.scss'
import FormItem from '../FormItem'

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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    
    width: 870,
     [theme.breakpoints.down('1200')]: {
      width: 600,
    },
    [theme.breakpoints.down('768')]: {
      width: 320,
    },
  },

  app: {
    backgroundColor:'white',
    boxShadow:'none',
    marginLeft: 'auto',
    marginRight:'auto',
    width: 350,
  },
  tab: {
   
    borderRadius: '5px',
    fontFamily: 'Geometria-Bold',
    fontSize: '10px',
    padding: 0,
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
      <div  className={classes.root}>
          <h2 className={styles.title} >Заповнiть форму</h2>
      <AppBar  className={classes.app}  position="static" color="default">
        <Tabs
         
          className={classes.tab} 
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className={classes.tab} label="Фiз.особа" {...a11yProps(0)} />
          <Tab className={classes.tab} label="Юр.особа" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
         
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <FormItem/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
         <FormItem/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}