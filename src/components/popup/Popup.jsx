import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const [movie,setMovie]=useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
    const titles = Object.keys(localStorage);
    console.log(JSON.parse(localStorage.getItem(titles[Math.floor(Math.random() * titles.length)])))
    setMovie(JSON.parse(localStorage.getItem(titles[Math.floor(Math.random() * titles.length)])))
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="primary" variant="outlined" style={{margin:"10px 20px 5px 0px"}}onClick={handleClickOpen}>
      Choose for me
      </Button>
      <Dialog
      style={{display:"grid",alignItems:"center",justifyContent:"center"}}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle style={{color:"white"}} id="responsive-dialog-title">{movie.title}</DialogTitle>
        <DialogContent>
          <img style={{width:"100%",maxWidth:"320px"}} src={`https://image.tmdb.org/t/p/w185${movie.poster}`}></img>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
