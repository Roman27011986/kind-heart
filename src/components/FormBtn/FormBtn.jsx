import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles((theme) => ({
    root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

export default function CustomizedButtons() {
  return (
      <ColorButton variant="contained" color="primary" >
        Custom CSS
      </ColorButton>
     
   
  );
}