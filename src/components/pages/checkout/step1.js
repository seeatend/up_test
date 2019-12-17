import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  field: {
    marginBottom: '20px'
  },
  input: {
    borderRadius: '0 !important'
  },
  half: {
    width: '50%',
    marginRight: '20px',
    '&:last-child': {
      marginRight: 0
    }
  },
  small: {
    width: '40px',
    marginRight: '10px',
    '&:last-child': {
      marginRight: 0
    }
  },
  caption: {
    color: '#777',
    fontWeight: 'bold'
  }
}));

export default function Step1() {
  const classes = useStyles();
  
  return (
    <div>
      <Box display="flex" flexDirection="column" className={classes.field}>
        <Typography className={classes.caption} variant="caption">Company Name*</Typography>
        <input className={`${classes.input} custom`} />
      </Box>

      <Box display="flex" flexDirection="column" className={classes.field}>
        <Typography className={classes.caption} variant="caption">Name*</Typography>
        <Box display="flex">
          <Box className={classes.half} display="flex" flexDirection="column">
            <input className={`${classes.input} custom`} />
            <Typography className={classes.caption} variant="caption">First Name</Typography>
          </Box>
          <Box className={classes.half} display="flex" flexDirection="column">
            <input className={`${classes.input} custom`} />
            <Typography className={classes.caption} variant="caption">Last Name</Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" className={classes.field}>
        <Typography className={classes.caption} variant="caption">Email*</Typography>
        <input className={`${classes.input} custom`} />
      </Box>

      <Box display="flex" flexDirection="column" className={classes.field}>
        <Typography className={classes.caption} variant="caption">Phone</Typography>
        <Box display="flex">
          <Box className={classes.small} display="flex" flexDirection="column">
            <input className={`${classes.input} custom`} />
            <Typography className={classes.caption} variant="caption">(###)</Typography>
          </Box>
          <Box className={classes.small} display="flex" flexDirection="column">
            <input className={`${classes.input} custom`} />
            <Typography className={classes.caption} variant="caption">###</Typography>
          </Box>
          <Box className={classes.small} display="flex" flexDirection="column">
            <input className={`${classes.input} custom`} />
            <Typography className={classes.caption} variant="caption">###</Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" className={classes.field}>
        <Typography className={classes.caption} variant="caption">Billing Contact</Typography>
        <Box display="flex">
          <Box className={classes.half} display="flex" flexDirection="column">
            <input className={`${classes.input} custom`} />
            <Typography className={classes.caption} variant="caption">First Name</Typography>
          </Box>
          <Box className={classes.half} display="flex" flexDirection="column">
            <input className={`${classes.input} custom`} />
            <Typography className={classes.caption} variant="caption">Last Name</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
