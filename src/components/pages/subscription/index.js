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
  subscriptionPaper: {
    flex: 1,
    marginTop: '40px',
    borderRadius: 0,
    boxShadow: '11px 11px 25px -5px rgb(134, 134, 134)',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
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
    paddingTop: '10px',
    borderTop: '1px solid black',
  },
  topTxt: {
    marginBottom: '10px',
    letterSpacing: '0.8px',
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
    borderRadius: 0,
    color: '#259fc4',
    fontFamily: 'gadugi-bold',
    fontSize: '16px',
    letterSpacing: '1px',
    margin: '15px',
    '&:hover': {
      backgroundColor: '#E3EBEE'
    }
  },
  overage: {
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
  },
  discountCode: {
    height: '18px',
    borderRadius: '0 !important',
  }
}));

export default function Subscription() {
  const classes = useStyles();

  return (
    <div className="page-content">
      <Typography variant="h3" className="page-title">
        SUBSCRIPTION
      </Typography>
      <Paper className={classes.subscriptionPaper}>
        <Grid container style={{height: '100%'}}>
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
                  label={<Typography variant="subtitle2" className="boldTypo" color="primary">I understand how account overages work</Typography>}
                  style={{margin: 0}}
                />
              </Box>
            </div>
          </Grid>

          <Grid item xs={5} className={classes.right}>
            <Typography variant="h6" className={classes.topTxt}>SUBSCRIPTION SUMMARY</Typography>
            <Divider className={classes.divider} />
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2">Premium</Typography>
              <Typography variant="body2">$1,920</Typography>
            </Box>
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2">Annual Pay</Typography>
              <Typography variant="body2">-$431</Typography>
            </Box>
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2">25 users</Typography>
              <Typography variant="body2">$360</Typography>
            </Box>
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2">200 accounts</Typography>
              <Typography variant="body2">$1,494</Typography>
            </Box>
            <Divider className={classes.divider} />
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2">Size Discount</Typography>
              <Typography variant="body2">$102</Typography>
            </Box>
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2">Discount Code</Typography>
              <input className={`custom ${classes.discountCode}`} />
            </Box>
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2">Promo Discount</Typography>
              <Typography variant="body2">$339</Typography>
            </Box>
            <Divider className={classes.divider} />
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2">Today's charge</Typography>
              <Typography variant="body2">$2,929</Typography>
            </Box>
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center" style={{marginTop: '20px'}}>
              <Typography variant="body2">Recurring annual charge</Typography>
              <Typography variant="body2">$2,929</Typography>
            </Box>
            <Divider className={classes.divider} />
            <Link to="/checkout">
              <Button className={classes.subscribeBtn} variant="contained" color="secondary">SUBSCRIBE</Button>
            </Link>
            <Typography variant="body2" className="boldTypo" style={{marginBottom: '20px'}}>Charges auto-renew</Typography>
            <Typography variant="body2" className="boldTypo">12 month subscription</Typography>
            <Typography variant="caption">(unless canceled 30 days prior to renewal)</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
