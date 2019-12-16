import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Button from '@material-ui/core/Button';

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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px'
  },
  counts: {
    minWidth: '35px',
    height: '35px',
    color: '#999',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
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
  labelInput: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  customInput: {
    color: '#999',
    textAlign: 'right',
    backgroundColor: '#E3EBEE',
    borderRadius: '5px',
    padding: '1px 5px',
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
                <div className={classes.planImg}>
                  <img src={planType === 'starter' ? StarterWhiteIcon : StarterIcon } alt="" />
                </div>
                <Typography variant="h6" className={classes.boldTypo}>Starter</Typography>
                <Typography variant="caption" className={classes.caption}>(Single User)</Typography>
              </Paper>
              <Paper className={`${classes.plan} ${planType === 'premium' ? classes.activedPlan : ''}`} onClick={() => setPlanType('premium')}>
                <div className={classes.planImg}>
                  <img src={planType === 'premium' ? PremiumWhiteIcon : PremiumIcon } alt="" />
                </div>
                <Typography variant="h6" className={classes.boldTypo}>Premium</Typography>
                <Typography variant="caption" className={classes.caption}>(Muliptle Users)</Typography>
              </Paper>
              <Paper className={`${classes.plan} ${planType === 'enterprise' ? classes.activedPlan : ''}`} onClick={() => setPlanType('enterprise')}>
                <div className={classes.planImg}>
                  <img src={planType === 'enterprise' ? EnterpriseWhiteIcon : EnterpriseIcon } alt="" />
                </div>
                <Typography variant="h6" className={classes.boldTypo}>Enterprise</Typography>
                <Typography variant="caption" className={classes.caption}>(Custom & Unlimited plans)</Typography>
              </Paper>
            </div>

            <div className={classes.labelInput}>
              <div className={classes.label}>
                <Typography variant="subtitle1" className={classes.boldTypo} color="primary">Users</Typography>
                <Typography variant="caption" className={classes.caption}>
                  { planType === 'starter' ? 1 : 10} included
                </Typography>
              </div>
              {
                (planType === 'premium' || planType === 'enterprise') && (
                  <div className={classes.perMonth}>
                    <input className={classes.customInput} defaultValue="$40" />
                    <Typography variant="caption">per month</Typography>
                  </div>
                )
              }
            </div>
            <div className={classes.usersLine}>
              { 
                planType === 'starter' ?
                  <>
                    <div className={classes.counts}>1</div>
                    <div className={`${classes.divider} active`} />
                    <div className={`${classes.counts} active`} style={{marginLeft: '5px'}}>1</div>
                  </>
                  :
                  <>
                    <div className={classes.counts}>10</div>
                    <div className={`${classes.divider} active`} />
                    <div className={`${classes.counts} active`} style={{margin: '0 5px'}}>75</div>
                    <div className={classes.divider} />
                    <div className={classes.counts}>250</div>
                  </>
              }
            </div>

            <div className={classes.labelInput}>
              <div className={classes.label}>
                <Typography variant="subtitle1" className={classes.boldTypo} color="primary">Accounts</Typography>
                { planType === 'starter' && <Typography variant="caption" className={classes.caption}>10 included</Typography> }
                { planType === 'premium' && <Typography variant="caption" className={classes.caption}>50 included</Typography> }
                { planType === 'enterprise' && <Typography variant="caption" className={classes.caption}>UNLIMITED</Typography> }
              </div>
              {
                (planType === 'starter' || planType === 'premium') && (
                  <div className={classes.perMonth}>
                    <input className={classes.customInput} defaultValue="$150" />
                    <Typography variant="caption">per month</Typography>
                  </div>
                )
              }
            </div>
            {
              planType === 'starter' && (
                <div className={classes.usersLine}>
                  <div className={classes.counts}>10</div>
                  <div className={`${classes.divider} active`} />
                  <div className={`${classes.counts} active`} style={{margin: '0 5px'}}>25</div>
                  <div className={classes.divider} />
                  <div className={classes.counts}>50</div>
                </div>
              )
            }

            {
              planType === 'premium' && (
                <div className={classes.usersLine}>
                  <div className={classes.counts}>50</div>
                  <div className={`${classes.divider} active`} />
                  <div className={`${classes.counts} active`} style={{margin: '0 5px'}}>200</div>
                  <div className={classes.divider} />
                  <div className={classes.counts}>10000</div>
                </div>
              )
            }

            {
              planType === 'enterprise' && (
                <>
                  <div className={classes.priceCode}>
                    <Typography variant="subtitle1">Enter your enterprise pricing code here: </Typography>&nbsp;
                    <input className={classes.customInput} />
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
                  <input className={classes.customInput} />
                </div>
              )
            }
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
