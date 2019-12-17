import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

// Images
import ContractSalesWhite from '../../../assets/images/contact_sales_white.png'

const useStyles = makeStyles(theme => ({
  paper: {
    flex: 1,
    marginTop: '40px',
    borderRadius: 0,
    boxShadow: '11px 11px 25px -5px rgb(134, 134, 134)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  down: {
    backgroundColor: '#259fc4',
    padding: '25px',
    color: 'white'
  },
  nextDesc: {
    width: '50%',
    textAlign: 'left',
    '& h6': {
      marginBottom: '15px'
    }
  },
  dotText: {
    position: 'relative',
    marginLeft: '15px',
    color: '#555',
    '&:before': {
      content: "''",
      position: 'absolute',
      top: '9px',
      left: '-15px',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      backgroundColor: '#555',
    }
  }
}));

export default function Done() {
  const classes = useStyles();

  return (
    <div className="page-content">
      <Paper className={classes.paper}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" style={{flex: 1}}>
            <Typography className="boldTypo" variant="body1">Logo</Typography>
            <Typography className="boldTypo" variant="h2" color="primary" style={{fontSize: '5rem', margin: '40px 0'}}>THANK YOU</Typography>
            <div className={classes.nextDesc}>
              <Typography className="boldTypo" variant="h6">What's next?</Typography>
              <Typography variant="body1">Please check your email. You will receive two separate emails from us</Typography>
              <Typography className={classes.dotText} variant="body1">A receipt from your transaction</Typography>
              <Typography className={classes.dotText} variant="body1">A welcome email with next steps</Typography>
            </div>
          </Box>
          <Box className={classes.down} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Typography variant="body2">Need some help or have some questions?</Typography>
            <Box display="flex" alignItems="center" style={{marginTop: '10px'}}>
              <img src={ContractSalesWhite} alt="" style={{width: '50px', marginRight: '5px'}} />
              <div>
                <Typography variant="body1" style={{fontWeight: 'bold'}}>Give us a call</Typography>
                <Typography variant="body1" style={{fontWeight: 'bold'}}>111-111-111</Typography>
              </div>
            </Box>
          </Box>
      </Paper>
    </div>
  );
}
