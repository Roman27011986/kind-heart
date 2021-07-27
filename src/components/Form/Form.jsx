import {  withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
      width:"400px",
    // '& > *': {
    
    // },
  },
}));

const CssTextField = withStyles({
    root: {
        width: "400px",
         backgroundColor:'#F0F8FF',
        "&:not(:last-child)": {
            marginRight: '20px',
        },
           marginBottom:'20px',
        
    '& label.Mui-focused': {
      color: '#A9A9A9',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#F0F8FF',
    },
        '& .MuiOutlinedInput-root': {
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
})(TextField);

export default function Form() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <div style={{display:'flex'}}>
                    <CssTextField  style={{width:"190px"}} id="outlined-basic" label="Outlined" variant="outlined" />
                <CssTextField style={{width:"190px"}} id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <CssTextField id="outlined-basic" label="Outlined" variant="outlined" />
                <CssTextField id="outlined-basic" label="Outlined" variant="outlined" />
                 <CssTextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
            <div>
                <CssTextField id="outlined-basic" label="Outlined" variant="outlined" />
                <div style={{display:'flex'}}>
                    <CssTextField style={{width:"190px"}} id="outlined-basic" label="Outlined" variant="outlined" />
                <CssTextField style={{width:"190px"}} id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <CssTextField id="outlined-basic" label="Outlined" variant="outlined" />
                <CssTextField id="outlined-basic" label="Outlined" variant="outlined" />
                 
            </div>
        
   
    </form>
    ) 
}