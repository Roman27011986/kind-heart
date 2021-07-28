import InputBase from '@material-ui/core/InputBase';
import { alpha, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import styles from './AssistanceItem.module.scss';
const BootstrapInput = withStyles((theme) => ({
   root: {
    'label + &': {
       marginTop: theme.spacing(2),
    },
  },
  input: {
    borderRadius: 4,
    backgroundColor: '#F0F8FF',
    fontSize: 10,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      
    },
  },
}))(InputBase);

export default function AssistanceItam() {
  
  return (
    <div className={styles.container}>
      <ul className={styles.cardsContainer}>
        <li className={styles.iconcard1}></li>
        <li className={styles.iconcard2}></li>
        <li className={styles.iconcard3}></li>
        <li className={styles.iconcard4}></li>
        <li className={styles.iconcard5}></li>
      </ul>
       
      <div className={styles.cardForm}>
        <span className={styles.text}>Номер карты</span>
        <div className={styles.cardFormItem}>
          <BootstrapInput
              style={{ width: '55px' }}
                type="number"
            required
            />
          
          <BootstrapInput
            style={{ width: '55px' }}
                type="number"
                required
          />
          <BootstrapInput
             style={{width: '55px'}}
                type="number"         
                required
          />
          <BootstrapInput
            style={{ width: '55px' }}
            type="number"
                required
          />
        </div>
          <div className={styles.cardFormItem}>
          <FormControl >
            <p className={styles.text}>Термiн дii</p>
          <BootstrapInput
              style={{ width: '100px' }}
              type="password"
                required
            />
            </FormControl>
        <FormControl >
            <p className={styles.text}>CVC/CVV</p>
          <BootstrapInput
              style={{ width: '100px' }}
              type="password"
                required
            />
            </FormControl>
          </div>
      </div>
    </div>

  )
}