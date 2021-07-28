import InputBase from '@material-ui/core/InputBase';
import { fade, withStyles } from '@material-ui/core/styles';
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
    // height:'19px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      
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
            name="name"
            
                variant="outlined"
                type="text"
                color='primary'
            required
            
            />
          
          <BootstrapInput
            style={{ width: '55px' }}
                label="Name"
                name="name"
                variant="outlined"
                type="text"
                color='primary'
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
          />
          <BootstrapInput
             style={{width: '55px',
   }}
                label="Name"
                name="name"
                variant="outlined"
                type="text"
                color='primary'
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
          />
          <BootstrapInput
             style={{width: '55px',
    }}
                label="Name"
                name="name"
                variant="outlined"
                type="text"
                color='primary'
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
          />
        </div>
          <div className={styles.cardFormItem}>
          <FormControl >
            <p className={styles.text}>Термiн дii</p>
          <BootstrapInput
               style={{width: '100px'}}
                label="Name"
                name="name"
                variant="outlined"
                type="text"
                color='primary'
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
            />
            </FormControl>
        <FormControl >
            <p className={styles.text}>CVC/CVV</p>
          <BootstrapInput
               style={{width: '100px'}}
                label="Name"
                name="name"
                variant="outlined"
                type="text"
                color='primary'
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
            />
            </FormControl>
          </div>
      </div>
    </div>

  )
}