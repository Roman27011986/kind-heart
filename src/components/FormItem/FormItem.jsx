import {  withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import styles from './FormItem.module.scss'

const CssTextField = withStyles((theme) => ({
  root: {
    backgroundColor: '#F0F8FF',
    marginBottom: '12px',
    [theme.breakpoints.down('1200')]: {
            width: "45%",
            '& label': {
            fontFamily: 'Geometria-Bold',
            fontSize:10
      },
    },
        [theme.breakpoints.up('1200')]: {
            width: "46.5%",
            '& label': {
            fontFamily: 'Geometria-Bold',
            fontSize:12
    },
    },
    [theme.breakpoints.down('768')]: {
      width: "34%",
            '& label': {
            fontFamily: 'Geometria-Bold',
            fontSize:10
    },
    },
        '& label.Mui-focused': {
      color: '#A9A9A9',
    },
    
        '& .MuiOutlinedInput-root': {
            height: 38,
          '& fieldset': {
        borderColor: '#F0F8FF',
      },
      '&:hover fieldset': {
        borderColor: '#DCDCDC',  
      },
      '&.Mui-focused fieldset': {
        borderColor: '#DCDCDC',
      },
    },
  },
}))(TextField);

export default function FormItem() {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputItem} >
        <CssTextField  style={{ marginRight: 20 }} id="outlined-basic" label="Iм'я" variant="outlined" />
        <CssTextField id="outlined-basic" label="Фамiлiя" variant="outlined" />
        <CssTextField style={{ width: '100%' }} id="outlined-basic" label="Назва компанiї, організації" variant="outlined" />
        <CssTextField style={{ width: '100%' }} id="outlined-basic" label="Email-адрес" variant="outlined" />
        <CssTextField style={{ width: '100%' }} id="outlined-basic" label="Номер телефону" variant="outlined" />
      </div>
      <div className={styles.inputItem}>
        <CssTextField style={{ width: '100%' }} id="outlined-basic" label="Країна" variant="outlined" />
        <CssTextField style={{ marginRight: 20 }} id="outlined-basic" label="Місто" variant="outlined" />
        <CssTextField id="outlined-basic" label="Штат, район" variant="outlined" />
        <CssTextField style={{ width: '100%' }} id="outlined-basic" label="Адреса" variant="outlined" />
        <CssTextField id="outlined-basic" label="Поштовий індекс" variant="outlined" />
      </div>
    </div>
  );
};