import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  description: {
    margin: '20px 0',
  },
  checkboxContent: {
    margin: '10px 0 0 0',
  },
  checkbox: {
    padding: 0,
    marginRight: '5px',
  },
}));

export default function Step5() {
  const classes = useStyles();
  
  return (
    <div>
      <Typography variant="body1" className="boldTypo" style={{marginTop: '20px'}}>Please review your information and click subscribe when ready.</Typography>
      <Typography variant="body2" className={classes.description}>
        By clicking subscribe you agree that your subscription will be set to continuous auto-renewal payment as shown every month or year based on your section. You understand the amount might vary based on usage and number of users. You can cancel your subscription at any time with a minimum of 30 day notice. You authorize us to take this amount from your credit account each term until canceled.
      </Typography>
      <FormControlLabel
        className={classes.checkboxContent}
        control={
          <Checkbox
            className={classes.checkbox}
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        }
        label={<Typography variant="subtitle2" color="primary">You have read and agree to the Terms of Service</Typography>}
      />
      <FormControlLabel
        className={classes.checkboxContent}
        control={
          <Checkbox
            className={classes.checkbox}
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        }
        label={<Typography variant="subtitle2" color="primary">You have read. Understand and agree the Privacy police</Typography>}
      />
    </div>
  );
}
