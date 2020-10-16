import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ResourceDropdown(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleUi = () => {
      props.handleUx();
  }

  const handleResearchPapers = () => {
    props.handleResearchPapers();
}

const handleMiscellaneous = () => {
    props.handleMiscellaneous();
}

const handleCodingChannels = () => {
    props.handleCodingChannels();
}

const handleCodingSites = () => {
    props.handleCodingSites();
}

const handleALL = () => {
    props.handleAll();
}

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
      Choose Category 
      </Button>
      <FormControl className={classes.formControl}>
        {/* <InputLabel id="demo-controlled-open-select-label">OPEN THIS</InputLabel> */}
        <TextField
          select
          style={{width : '100%'}}
          label = "Category"
          open={open}
          onClose={handleClose}
          value={value}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem autoFocus onClick={handleALL} value="ALL">ALL</MenuItem>
          <MenuItem onClick={handleUi} value="UX/UI">UX/UI</MenuItem>
          <MenuItem onClick={handleResearchPapers} value="Research Papers">Research Papers</MenuItem>
          <MenuItem onClick={handleCodingChannels} value="Coding Channels">Coding Channels</MenuItem>
          <MenuItem onClick={handleCodingSites} value="Coding Sites">Coding Sites</MenuItem>
          <MenuItem onClick={handleMiscellaneous} value="Miscellaneous">Miscellaneous</MenuItem>
        </TextField>
      </FormControl>
    </div>
  );
}