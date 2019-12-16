import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// Images
import Logo from '../../../assets/images/logo.png'

const useStyles = makeStyles(theme => ({
  subscriptionContent: {
    width: '65%',
    maxWidth: '1024px',
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
  subscriptionPaper: {
    borderRadius: 0,
    boxShadow: 'unset',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #259fc4',
    marginRight: '5px',
    boxShadow: '0px -2px 4px -1px rgba(117,117,117,1)',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#259fc4',
    color: '#fff',
    padding: '15px',
    flex: 1,
    maxWidth: 'unset',
    boxShadow: '0px -2px 4px -1px rgba(117,117,117,1)',
  },
  logoContent: {
    width: 'calc(95% - 40px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    '& img': {
      maxWidth: '100px'
    }
  },
  privacyContent: {
    padding: '10px 20px',
    borderTop: '1px solid #259fc4',
  },
  divider: {
    width: '100%',
    backgroundColor: 'white',
    margin: '10px 0',
  },
  field: {
    width: '90%',
  },
  subscribeBtn: {
    width: '130px',
    fontSize: '16px',
    margin: '15px',
    '&:hover': {
      backgroundColor: '#E3EBEE'
    }
  },
  overage: {
    color: '#555',
    marginBottom: '5px',
  },
  text: {
    color: '#777',
    lineHeight: '16px'
  },
  checkboxContent: {
    marginTop: '10px'
  },
  checkbox: {
    padding: 0,
    marginRight: '5px',
  }
}));

export default function Subscription() {
  const classes = useStyles();

  return (
    <div className={classes.subscriptionContent}>
      <Paper className={classes.subscriptionPaper}>
        <Grid container>
          <Grid item xs={7} className={classes.left}>
            <Box display="flex" justifyContent="center" alignItems="center" flex="1" style={{width: '100%'}}>
              <Paper className={classes.logoContent}>
                <img src={Logo} alt="" />
              </Paper>
            </Box>
            <div className={classes.privacyContent}>
              <Typography variant="subtitle2" className={`${classes.overage} boldTypo`}>Account Overage (Please Read)</Typography>
              <Typography variant="body2" className={`${classes.text}`}>Basic & Premium automatically adjusts your bill as your account database grows. You will be billed a prorated amount based on the additional accounts and your subscription renewal date. Your renewal subscription will also automatically reflect the new subscription amount.</Typography>
              <Box display="flex" alignItems="center" className={classes.checkboxContent}>
                <FormControlLabel
                  control={
                    <Checkbox
                      className={classes.checkbox}
                      color="primary"
                      inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                  }
                  label={<Typography variant="subtitle2" className="boldTypo" style={{color: '#555'}}>I understand how account overages work</Typography>}
                  style={{margin: 0}}
                />
              </Box>
            </div>
          </Grid>

          <Grid item xs={5} className={classes.right}>
            <Typography variant="h5">Subscription Summary</Typography>
            <Divider className={classes.divider} />
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">Premium</Typography>
              <Typography variant="body1">$1,920</Typography>
            </Box>
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">Annual Pay</Typography>
              <Typography variant="body1">-$431</Typography>
            </Box>
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">25 users</Typography>
              <Typography variant="body1">$360</Typography>
            </Box>
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">200 accounts</Typography>
              <Typography variant="body1">$1,494</Typography>
            </Box>
            <Divider className={classes.divider} />
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">Size Discount</Typography>
              <Typography variant="body1">$102</Typography>
            </Box>
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">Discount Code</Typography>
              <input />
            </Box>
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">Promo Discount</Typography>
              <Typography variant="body1">$339</Typography>
            </Box>
            <Divider className={classes.divider} />
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1">Today's charge</Typography>
              <Typography variant="body1">$2,929</Typography>
            </Box>
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center" style={{marginTop: '20px'}}>
              <Typography variant="body1">Recurring annual charge</Typography>
              <Typography variant="body1">$2,929</Typography>
            </Box>
            <Link to="/checkout">
              <Button className={classes.subscribeBtn} variant="contained" color="secondary">SUBSCRIBE</Button>
            </Link>
            <Typography variant="body1">Charges auto-renew</Typography>
            <Typography variant="body1">12 month subscription</Typography>
            <Typography variant="caption">(unless canceled 30 days prior to renewal)</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
