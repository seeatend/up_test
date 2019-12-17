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
  small: {
    width: '35px',
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

export default function Step3() {
  const classes = useStyles();
  
  return (
    <div>
      <Box display="flex" flexDirection="column" className={classes.field}>
        <Typography className={classes.caption} variant="caption">Admin User Name*</Typography>
        <input className={`${classes.input} custom`} placeholder="Do not use an email address for the Admin Username" />
      </Box>

      <Box display="flex" flexDirection="column" className={classes.field}>
        <Typography className={classes.caption} variant="caption">Password*</Typography>
        <input className={`${classes.input} custom`} />
      </Box>

      <Box display="flex" flexDirection="column" className={classes.field}>
        <Typography className={classes.caption} variant="caption">Number of Users Requested*</Typography>
        <input className={`${classes.input} custom`} />
      </Box>

      <Box display="flex" flexDirection="column" className={classes.field}>
        <Typography className={classes.caption} variant="caption">Modgic Sales rep name if any</Typography>
        <input className={`${classes.input} custom`} />
      </Box>

      <Box display="flex" flexDirection="column" className={classes.field}>
        <Typography className={classes.caption} variant="caption">Todays Date*</Typography>
        <Box display="flex">
          <Box className={classes.small} display="flex" flexDirection="column">
            <input className={`${classes.input} custom`} />
            <Typography className={classes.caption} variant="caption">MM</Typography>
          </Box>
          <Box className={classes.small} display="flex" flexDirection="column">
            <input className={`${classes.input} custom`} />
            <Typography className={classes.caption} variant="caption">DD</Typography>
          </Box>
          <Box className={classes.small} display="flex" flexDirection="column" style={{width: '50px'}}>
            <input className={`${classes.input} custom`} />
            <Typography className={classes.caption} variant="caption">YYYY</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
