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
  md: {
    width: '65%',
    marginRight: '10px',
  },
  sm: {
    width: '35%',
  },
  caption: {
    color: '#777',
    fontWeight: 'bold'
  }
}));

export default function Step2() {
  const classes = useStyles();
  
  return (
    <div>
      <Box display="flex" flexDirection="column" className={classes.field}>
        <Typography className={classes.caption} variant="caption">Primary Address*</Typography>
        <input className={`${classes.input} custom`} />
        <Typography className={classes.caption} variant="caption">Address1</Typography>
      </Box>

      <Box display="flex" flexDirection="column" className={classes.field}>
        <input className={`${classes.input} custom`} />
        <Typography className={classes.caption} variant="caption">Address2</Typography>
      </Box>

      <Box display="flex" flexDirection="column" className={classes.field}>
        <Box display="flex">
          <Box className={classes.md} display="flex" flexDirection="column">
            <input className={`${classes.input} custom`} />
            <Typography className={classes.caption} variant="caption">City</Typography>
          </Box>
          <Box className={classes.sm} display="flex" flexDirection="column">
            <input className={`${classes.input} custom`} />
            <Typography className={classes.caption} variant="caption">State/Province</Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" className={`${classes.field} ${classes.sm}`}>
        <input className={`${classes.input} custom`} />
        <Typography className={classes.caption} variant="caption">Zip/Postal Code</Typography>
      </Box>

      <Box display="flex" flexDirection="column" className={classes.field}>
        <input className={`${classes.input} custom`} />
        <Typography className={classes.caption} variant="caption">Country</Typography>
      </Box>
    </div>
  );
}
