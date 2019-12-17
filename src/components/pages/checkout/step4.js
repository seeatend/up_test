import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingRight: '20px',
  },
  field: {
    marginBottom: '20px',
  },
  input: {
    borderRadius: '0 !important',
    '&.half': {
      width: '50%',
      marginRight: '10px',
      '&:last-child': {
        marginRight: 0
      }
    },
    '&.sm': {
      width: '28%',
      marginRight: '10px',
      '&:last-child': {
        marginRight: 0
      }
    },
  },
  customSelect: {
    borderRadius: 0,
    backgroundColor: '#E3EBEE',
    boxShadow: 'inset 1px 1px 2px 0px #919191',
    fontSize: '11px',
    '& div': {
      padding: '6px',
    }
  },
  caption: {
    color: '#777',
    fontWeight: 'bold'
  },
  checkboxContent: {
    margin: '10px 0 0 0',
  },
  checkbox: {
    padding: 0,
    marginRight: '5px',
  },
}));

export default function Step4() {
  const classes = useStyles();
  
  return (
    <Grid container>
      <Grid item xs={6} className={classes.left}>
        <Box display="flex" flexDirection="column">
          <Typography variant="body2" className="boldTypo" color="primary" style={{marginBottom: '20px'}}>Payment Method</Typography>
          <input className={`${classes.input} custom`} />
          <Typography variant="caption">Transactions are secured and encrypted. Payment information will be saved</Typography>
        </Box>
        <FormControlLabel
          className={classes.checkboxContent}
          control={
            <Checkbox
              className={classes.checkbox}
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          }
          label={<Typography variant="subtitle2" color="primary">Billing is the same as primary address</Typography>}
        />
      </Grid>
      <Grid item xs={6} className={classes.right}>
        <Typography variant="body2" className="boldTypo" style={{marginBottom: '20px'}}>Billing Address</Typography>
        <Box display="flex" className={classes.field}>
          <input className={`${classes.input} custom half`} placeholder="First Name" />
          <input className={`${classes.input} custom half`} placeholder="Last Name" />
        </Box>
        <Box display="flex" flexDirection="column" className={classes.field}>
          <input className={`${classes.input} custom`} placeholder="Address 1" />
        </Box>
        <Box display="flex" flexDirection="column" className={classes.field}>
          <input className={`${classes.input} custom`} placeholder="Address 2" />
        </Box>
        <Box display="flex" flexDirection="column" className={classes.field}>
          <Select
            className={classes.customSelect}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
          >
            <MenuItem value="us">United States</MenuItem>
            <MenuItem value="uk">United Kingdom</MenuItem>
            <MenuItem value="srb">Serbia</MenuItem>
          </Select>
        </Box>
        <Box display="flex" className={classes.field}>
          <input className={`${classes.input} custom sm`} placeholder="ZIP Code" />
          <input className={`${classes.input} custom sm`} placeholder="City" />
          <Select
            className={classes.customSelect}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="outlined"
            style={{flex: 1}}
          >
            <MenuItem value="state">State</MenuItem>
            <MenuItem value="province">Province</MenuItem>
          </Select>
        </Box>
        <Box display="flex" flexDirection="column" className={classes.field}>
          <input className={`${classes.input} custom`} placeholder="Phone Number" />
        </Box>
      </Grid>
    </Grid>
  );
}
