import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function DialogSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <Button size="inherit"  onClick={handleClickOpen}>Click here to select your desired category</Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Category</InputLabel>
              <Select
                native
                value={value}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option onClick={handleALL} value="ALL">ALL</option>
                <option onClick={handleUi} value="UX/UI">UX/UI</option>
                <option onClick={handleResearchPapers} value="Research Papers">Research Papers</option>
                <option onClick={handleCodingChannels} value="Coding Channels">Coding Channels</option>
                <option onClick={handleCodingSites} value="Coding Sites">Coding Sites</option>
                <option onClick={handleMiscellaneous} value="Miscellaneous">Miscellaneous</option>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
