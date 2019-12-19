import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Button from '@material-ui/core/Button';

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
// Images
import StarterIcon from '../../../assets/images/starter_icon.png'
import PremiumIcon from '../../../assets/images/premium_icon.png'
import EnterpriseIcon from '../../../assets/images/enterprise_icon.png'
import StarterWhiteIcon from '../../../assets/images/starter_icon_white.png'
import PremiumWhiteIcon from '../../../assets/images/premium_icon_white.png'
import EnterpriseWhiteIcon from '../../../assets/images/enterprise_icon_white.png'
import ContractSalesWhite from '../../../assets/images/contact_sales_white.png'
import ContractSales from '../../../assets/images/contact_sales.png'

const useStyles = makeStyles(theme => ({
  purchasePaper: {
    flex: 1,
    borderRadius: 0,
    marginTop: '40px',
    boxShadow: '11px 11px 25px -5px rgb(134, 134, 134)',
  },
  left: {
    padding: '20px 40px 25px 20px',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px'
  },
  typeBtn: {
    height: '25px',
    width: '75px',
    borderRadius: '8px',
    fontSize: '12px',
    textTransform: 'capitalize',
    backgroundColor: '#E3EBEE',
    color: '#333',
    border: 'unset',
    '&.Mui-selected': {
      backgroundColor: '#259fc4',
      color: '#fff'
    }
  },
  label: {
    display: 'flex', 
    alignItems: 'flex-end',
    marginBottom: '5px',
    '& span': {
      fontSize: '10px',
      marginLeft: '5px',
      marginBottom: '3px'
    }
  },
  plans: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '40px'
  },
  plan: {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    marginRight: '10px',
    borderRadius: '8px',
    backgroundColor: '#E3EBEE',
    cursor: 'pointer',
    '&:last-child': {
      marginRight: 0,
    }
  },
  planImg: {
    height: '42px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0'
  },
  activedPlan: {
    backgroundColor: '#259fc4',
    color: '#fff',
    '& span': {
      color: '#fff'
    }
  },
  usersLine: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px'
  },
  counts: {
    color: '#999',
    fontWeight: '500',
    fontFamily: 'sans-serif',
    margin: '0 5px',
  },
  labelInput: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  perMonth: {
    '& span': {
      fontSize: '10px',
      color: '#777', 
      marginLeft: '8px'
    },
    '& input': {
      width: '35px'
    }
  },
  accountArea: {
    height: '115px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceCode: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
    '& h6': {
      color: '#777',
    }
  },
  talkToSales: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& div': {
      textAlign: 'right',
      '& span': {
        color: '#777'
      }
    },
    '& img': {
      width: '80px',
      marginLeft: '10px',
    }
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#259fc4',
    color: '#fff',
    padding: '30px',
    flex: 1,
    maxWidth: 'unset',
    '& h6': {
      fontWeight: 'bold',
      marginTop: '30px'
    }
  },
  buyBtn: {
    width: '140px',
    height: '45px',
    borderRadius: 0,
    color: '#259fc4',
    fontFamily: 'gadugi-bold',
    fontSize: '16px',
    letterSpacing: '2px',
    marginTop: '50px',
    '&:hover': {
      backgroundColor: '#E3EBEE'
    }
  },
  talkBtn: {
    width: '140px',
    height: '45px',
    borderRadius: 0,
    textTransform: 'capitalize',
    border: '1px solid #fff',
    marginTop: '30px',
    marginBottom: '50px',
    padding: '6px',
    '& img': {
      width: '35px',
      marginRight: '4px'
    }
  },
  caption: {
    color: '#aaa',
    textAlign: 'center'
  }
}));

export default function Purchase() {
  const classes = useStyles();
  const [purchaseType, setPurchaseType] = React.useState('annual');
  const [planType, setPlanType] = React.useState('starter');
  const [users, setUsers] = React.useState(1);
  const [accounts, setAccounts] = React.useState(25);

  const handlePurchaseType = (event, value) => {
    if (value === null) value = purchaseType
    setPurchaseType(value);
  };

  const selectPlan = (plan) => {
    if (plan === 'starter') {
      setUsers(1);
      setAccounts(25);
    }
    if (plan === 'premium') {
      setUsers(75);
      setAccounts(200);
    }
    if (plan === 'enterprise') {
      setUsers(75);
    }
    setPlanType(plan);
  }

  return (
    <div className="page-content">
      <Typography variant="h3" className="page-title">
        BUILD YOUR PLAN
      </Typography>
      <Paper className={classes.purchasePaper}>
        <Grid container style={{height: '100%'}}>
          <Grid item xs={7} className={classes.left}>
            <div className={classes.top}>
              <Typography variant="subtitle1" className="boldTypo" color="primary">Plans</Typography>
              <ToggleButtonGroup
                value={purchaseType}
                exclusive
                onChange={handlePurchaseType}
                aria-label="text alignment"
              >
                <ToggleButton className={classes.typeBtn} value="monthly" aria-label="left aligned">Monthly</ToggleButton>
                <ToggleButton className={classes.typeBtn} value="annual" aria-label="centered">Annual</ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div className={classes.plans}>
              <Paper className={`${classes.plan} ${planType === 'starter' ? classes.activedPlan : ''}`} onClick={() => selectPlan('starter')}>
                <div className={classes.planImg}>
                  <img src={planType === 'starter' ? StarterWhiteIcon : StarterIcon } alt="" />
                </div>
                <Typography variant="h6" className="boldTypo">Starter</Typography>
                <Typography variant="caption" className={classes.caption}>(Single User)</Typography>
              </Paper>
              <Paper className={`${classes.plan} ${planType === 'premium' ? classes.activedPlan : ''}`} onClick={() => selectPlan('premium')}>
                <div className={classes.planImg}>
                  <img src={planType === 'premium' ? PremiumWhiteIcon : PremiumIcon } alt="" />
                </div>
                <Typography variant="h6" className="boldTypo">Premium</Typography>
                <Typography variant="caption" className={classes.caption}>(Muliptle Users)</Typography>
              </Paper>
              <Paper className={`${classes.plan} ${planType === 'enterprise' ? classes.activedPlan : ''}`} onClick={() => selectPlan('enterprise')}>
                <div className={classes.planImg}>
                  <img src={planType === 'enterprise' ? EnterpriseWhiteIcon : EnterpriseIcon } alt="" />
                </div>
                <Typography variant="h6" className="boldTypo">Enterprise</Typography>
                <Typography variant="caption" className={classes.caption}>(Custom & Unlimited plans)</Typography>
              </Paper>
            </div>

            <div className={classes.labelInput}>
              <div className={classes.label}>
                <Typography variant="subtitle1" className="boldTypo" color="primary">Users</Typography>
                <Typography variant="caption" className={classes.caption}>
                  { planType === 'starter' ? 1 : 10} included
                </Typography>
              </div>
              {
                (planType === 'premium' || planType === 'enterprise') && (
                  <div className={classes.perMonth}>
                    <input className="custom right" defaultValue="$40" />
                    <Typography variant="caption">per month</Typography>
                  </div>
                )
              }
            </div>
            <div className={classes.usersLine}>
              { 
                planType === 'starter' ?
                  <>
                    <Typography variant="subtitle1" className={classes.counts}>0</Typography>
                    <Slider
                      min={0}
                      max={1}
                      step={1}
                      tooltip={false}
                      value={users}
                      handleLabel={users}
                      onChange={setUsers}
                    />
                    <Typography variant="subtitle1" className={classes.counts}>1</Typography>
                  </>
                  :
                  <>
                    <Typography variant="subtitle1" className={classes.counts}>10</Typography>
                    <Slider
                      min={10}
                      max={250}
                      step={25}
                      tooltip={false}
                      value={users}
                      handleLabel={users}
                      onChange={setUsers}
                    />
                    <Typography variant="subtitle1" className={classes.counts}>250</Typography>
                  </>
              }
            </div>

            <div className={classes.labelInput}>
              <div className={classes.label}>
                <Typography variant="subtitle1" className="boldTypo" color="primary">Accounts</Typography>
                { planType === 'starter' && <Typography variant="caption" className={classes.caption}>10 included</Typography> }
                { planType === 'premium' && <Typography variant="caption" className={classes.caption}>50 included</Typography> }
                { planType === 'enterprise' && <Typography variant="caption" className={classes.caption}>UNLIMITED</Typography> }
              </div>
              {
                (planType === 'starter' || planType === 'premium') && (
                  <div className={classes.perMonth}>
                    <input className="custom right" defaultValue="$150" />
                    <Typography variant="caption">per month</Typography>
                  </div>
                )
              }
            </div>
            <div className={classes.accountArea}>
              {
                planType === 'starter' && (
                  <div className={classes.usersLine}>
                    <Typography variant="subtitle1" className={classes.counts}>10</Typography>
                    <Slider
                      min={10}
                      max={50}
                      step={5}
                      tooltip={false}
                      value={accounts}
                      handleLabel={accounts}
                      onChange={setAccounts}
                    />
                    <Typography variant="subtitle1" className={classes.counts}>50</Typography>
                  </div>
                )
              }

              {
                planType === 'premium' && (
                  <div className={classes.usersLine}>
                    <Typography variant="subtitle1" className={classes.counts}>50</Typography>
                    <Slider
                      min={50}
                      max={10000}
                      step={25}
                      tooltip={false}
                      value={accounts}
                      handleLabel={accounts}
                      onChange={setAccounts}
                    />
                    <Typography variant="subtitle1" className={classes.counts}>10000</Typography>
                  </div>
                )
              }

              {
                planType === 'enterprise' && (
                  <>
                    <div className={classes.priceCode}>
                      <Typography variant="subtitle1">Enter your enterprise pricing code here: </Typography>&nbsp;
                      <input className="custom right" />
                    </div>
                    <div className={classes.talkToSales}>
                      <div className="text">
                        <Typography variant="caption">Don't have a code and would like a Unlimited plan option</Typography>
                        <Typography variant="subtitle1" color="primary">Talk to sales</Typography>
                      </div>
                      <img src={ContractSales} alt="" />
                    </div>
                  </>
                )
              }

              {
                (planType === 'starter' || planType === 'premium') && (
                  <div style={{textAlign: 'center'}}>
                    <Typography variant="caption">We offer special pricing discounts for associations and groups.</Typography>&nbsp;
                    <Typography variant="caption" color="primary"  style={{fontFamily: 'gadugi-bold'}}><b>Find out more.</b></Typography><br/>
                    <Typography variant="caption">Enter your group discount code here:</Typography>&nbsp;
                    <input className="custom right" style={{marginTop: '5px'}} />
                  </div>
                )
              }
            </div>
          </Grid>

          <Grid item xs={5} className={classes.right}>
            <Typography variant="h6">BILLED ANUALLY</Typography>
            <div className={classes.label}>
              <Typography variant="h2" style={{fontFamily: 'gadugi-bold'}}>
                { planType === 'starter' && '$172' }
                { planType === 'premium' && '$372' }
                { planType === 'enterprise' && '$572' }
              </Typography>
              <Typography variant="h3">
                { purchaseType === 'monthly' ? '/mo' : '/yr' }
              </Typography>
            </div>
            <Typography variant="body1">(12 month contract term)</Typography>
            <Link to="/subscription">
              <Button variant="contained" color="secondary" className={classes.buyBtn}>BUY NOW</Button>
            </Link>
            <Button variant="contained" color="primary" className={classes.talkBtn}>
              <img src={ContractSalesWhite} alt="" />
              Talk to Sales
            </Button>
            <Typography variant="caption" style={{textAlign: 'center'}}>We’ve estimated your monthly cost based on theoptions you’ve chosen. Any applicable taxes are not included, and your fees are subject to increase with additional purchases.</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
