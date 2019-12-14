import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Button from '@material-ui/core/Button';

// Images
import PaperImg from '../../../assets/images/paper.svg'
import RocketImg from '../../../assets/images/rocket.svg'
import AirplaneImg from '../../../assets/images/airplane.svg'
import EarphoneImg from '../../../assets/images/earphone.svg'

const useStyles = makeStyles(theme => ({
  purchaseContent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  purchasePaper: {
    width: '65%',
    maxWidth: '1024px',
    borderRadius: 0,
    marginTop: '50px',
    boxShadow: '11px 11px 25px -5px rgb(134, 134, 134)',
    [theme.breakpoints.down('md')]: {
      width: '70%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
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
    margin: '10px 0'
  },
  activedPlan: {
    backgroundColor: '#259fc4',
    color: '#fff',
    "& span": {
      color: '#fff'
    }
  },
  usersLine: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px'
  },
  counts: {
    width: '30px',
    height: '30px',
    color: '#999',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&.active': {
      color: '#259fc4 !important',
      fontWeight: 'bold',
      backgroundColor: '#E0E0E0'
    }
  },
  divider: {
    flex: 1,
    height: '1px',
    backgroundColor: '#aaa',
    position: 'relative',
    '&:before': {
      content: "''",
      width: '5px',
      height: '5px',
      backgroundColor: '#aaa',
      position: 'absolute',
      left: 0,
      bottom: '-2px'
    },
    '&:after': {
      content: "''",
      width: '5px',
      height: '5px',
      backgroundColor: '#aaa',
      position: 'absolute',
      right: 0,
      bottom: '-2px'
    },
    '&.active': {
      backgroundColor: '#259fc4',
      '&:before': {
        content: "''",
        backgroundColor: '#259fc4',
      },
      '&:after': {
        content: "''",
        backgroundColor: '#259fc4',
      },
    }
  },
  accountsLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  customInput: {
    backgroundColor: '#E3EBEE',
    borderRadius: '5px',
    '&:focus': {
      outline: 'unset',
    }
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
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#259fc4',
    color: '#fff',
    padding: '30px',
    "& h6": {
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
      marginRight: '8px'
    }
  },
  caption: {
    color: '#aaa',
    textAlign: 'center'
  },
  boldTypo: {
    fontFamily: 'gadugi-bold'
  }
}));

export default function Purchase() {
  const classes = useStyles();
  const [purchaseType, setPurchaseType] = React.useState('annual');
  const [planType, setPlanType] = React.useState('starter');

  const handlePurchaseType = (event, value) => {
    setPurchaseType(value);
  };

  return (
    <div className={classes.purchaseContent}>
      <Typography variant="h3" style={{fontFamily: 'gadugi-bold'}}>
        BUILD YOUR PLAN
      </Typography>
      <Paper className={classes.purchasePaper}>
        <Grid container>
          <Grid item xs={7} className={classes.left}>
            <div className={classes.top}>
              <Typography variant="subtitle1" className={classes.boldTypo} color="primary">Plans</Typography>
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
              <Paper className={`${classes.plan} ${planType === 'starter' ? classes.activedPlan : ''}`} onClick={() => setPlanType('starter')}>
                <img className={classes.planImg} src={PaperImg} alt="" />
                <Typography variant="h6" className={classes.boldTypo}>Starter</Typography>
                <Typography variant="caption" className={classes.caption}>(Single User)</Typography>
              </Paper>
              <Paper className={`${classes.plan} ${planType === 'premium' ? classes.activedPlan : ''}`} onClick={() => setPlanType('premium')}>
                <img className={classes.planImg} src={RocketImg} alt="" />
                <Typography variant="h6" className={classes.boldTypo}>Premium</Typography>
                <Typography variant="caption" className={classes.caption}>(Muliptle Users)</Typography>
              </Paper>
              <Paper className={`${classes.plan} ${planType === 'enterprise' ? classes.activedPlan : ''}`} onClick={() => setPlanType('enterprise')}>
                <img className={classes.planImg} src={AirplaneImg} alt="" />
                <Typography variant="h6" className={classes.boldTypo}>Enterprise</Typography>
                <Typography variant="caption" className={classes.caption}>(Custom & Unlimited plans)</Typography>
              </Paper>
            </div>
            <div className={classes.label}>
              <Typography variant="subtitle1" className={classes.boldTypo} color="primary">Users</Typography>
              <Typography variant="caption" className={classes.caption}>1 included</Typography>
            </div>
            <div className={classes.usersLine}>
              <div className={classes.counts}>1</div>
              <div className={`${classes.divider} active`} />
              <div className={`${classes.counts} active`} style={{marginLeft: '5px'}}>1</div>
            </div>
            <div className={classes.accountsLabel}>
              <div className={classes.label}>
                <Typography variant="subtitle1" className={classes.boldTypo} color="primary">Accounts</Typography>
                <Typography variant="caption" className={classes.caption}>10 included</Typography>
              </div>
              <div className={classes.perMonth}>
                <input className={classes.customInput} vlaue="$150" />
                <Typography variant="caption">per month</Typography>
              </div>
            </div>
            <div className={classes.usersLine}>
              <div className={classes.counts}>10</div>
              <div className={`${classes.divider} active`} />
              <div className={`${classes.counts} active`} style={{margin: '0 5px'}}>25</div>
              <div className={classes.divider} />
              <div className={classes.counts}>50</div>
            </div>
            <div>
              <Typography variant="caption">We offer specia pricing discounts for associations and groups.</Typography>&nbsp;
              <Typography variant="caption" color="primary"  style={{fontFamily: 'gadugi-bold'}}><b>Find out more.</b></Typography><br/>
              <Typography variant="caption">Enter your group discount code here:</Typography>&nbsp;
              <input className={classes.customInput} />
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
            <Button variant="contained" color="secondary" className={classes.buyBtn}>BUY NOW</Button>
            <Button variant="contained" color="primary" className={classes.talkBtn}>
              <img src={EarphoneImg} alt="" />
              Talk to Sales
            </Button>
            <Typography variant="caption" style={{textAlign: 'center'}}>We’ve estimated your monthly cost based on theoptions you’ve chosen. Any applicable taxes are not included, and your fees are subject to increase with additional purchases.</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
