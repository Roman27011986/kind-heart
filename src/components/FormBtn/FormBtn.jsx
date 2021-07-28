import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import styles from './FormBtn.module.scss'
const ColorButton = withStyles((theme) => ({
  root: {
    fontFamily: 'Gilroy-Light',
    fontSize:'10px',
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

export default function CustomizedButtons() {
  return (
    <div className={styles.btn}>
      <ColorButton   variant="contained" color="primary" >
        Допомогти
      </ColorButton>
      </div>
  );
}