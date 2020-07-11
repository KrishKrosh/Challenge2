import React from "react";
import { useEffect, useState, useRef } from "react"
import { Typography, Paper, Avatar, Button } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";




function NavBar(props) {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <Paper elevation={0.5} className={classes.paper} position="sticky">
        <Typography component="h3" variant="h4">
          YC Store
        </Typography>
        <Avatar className={classes.avatar}>
          <Typography component="subtitle1" variant="subtitle2">
            1000
          </Typography>
        </Avatar>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          component={Link}
          to="/login"
          className={styles.submit}
        >
          Sign In
        </Button>

               
   
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
  
      
      </Paper>
    </main>

  );
}




export default withStyles(styles)(NavBar);



