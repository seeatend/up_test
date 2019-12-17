import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';

// Components
import Step1 from './step1.js'

const useStyles = makeStyles(theme => ({
  checkoutPaper: {
    flex: 1,
    borderRadius: 0,
    marginTop: '40px',
    boxShadow: '11px 11px 25px -5px rgb(134, 134, 134)',
  },
  left: {
    padding: '35px 50px',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
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
  divider: {
    width: '100%',
    backgroundColor: 'white',
    margin: '10px 0',
  },
  stepper: {
    padding: 0,
    marginBottom: '30px',
  },
  step: {
    padding: 0,
    '& span': {
      padding: 0
    },
    '& $line': {

    }
  },
  stepBtn: {
    width: '92px',
    fontSize: '12px',
    borderRadius: 0,
  }
}));

const CustomConnector = withStyles({
  active: {
    '& $line': {
      borderColor: '#259fc4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#259fc4',
    },
  },
  line: {
    borderColor: '#aaa',
    borderTopWidth: 2,
    borderRadius: 1,
  },
})(StepConnector);

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Step1 />
    case 1:
      return 'Step 2';
    case 2:
      return 'Step 3';
    case 3:
      return 'Step 4';
    case 4:
      return 'Step 5';
    default:
      return <Step1 />;
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep < 4 ? prevActiveStep + 1 : prevActiveStep);
  };
  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  
  return (
    <div className="page-content">
      <Typography variant="h3" className="page-title">
        CHECKOUT
      </Typography>
      <Paper className={classes.checkoutPaper}>
        <Grid container style={{height: '100%'}}>
          <Grid item xs={7} className={classes.left}>
            <Stepper className={classes.stepper} activeStep={activeStep} connector={<CustomConnector />}>
              <Step className={classes.step} key={1}><StepLabel/></Step>
              <Step className={classes.step} key={2}><StepLabel/></Step>
              <Step className={classes.step} key={3}><StepLabel/></Step>
              <Step className={classes.step} key={4}><StepLabel/></Step>
              <Step className={classes.step} key={5}><StepLabel/></Step>
            </Stepper>
            { getStepContent(activeStep) }
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Button className={classes.stepBtn} variant="contained" color="primary" size="small" onClick={handleBack} 
                style={{visibility: activeStep === 0 ? 'hidden' : 'visible'}}>
                Back
              </Button>
              <Button className={classes.stepBtn} variant="contained" color="primary" size="small" onClick={handleNext}>
                {activeStep === 4 ? 'Subscribe' : 'Continue'}
              </Button>
            </Box>
          </Grid>

          <Grid item xs={5} className={classes.right}>
            <Typography variant="h6">ORDER SUMMARY</Typography>
            <Divider className={classes.divider} />
            <Box display="flex" flexDirection="column" alignItems="flex-start" style={{width: '90%'}}>
              <Typography variant="body1">Premium</Typography>
              <Typography variant="body1">Annual Pay</Typography>
              <Typography variant="body1">25 Users</Typography>
              <Typography variant="body1">200 Account</Typography>
            </Box>
            <Divider className={classes.divider} />
            <Box className={classes.field} display="flex" justifyContent="space-between" alignItems="center" style={{width: '90%'}}>
              <Typography variant="body1">Annual recurring fees</Typography>
              <Typography variant="body1">$2,929</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
