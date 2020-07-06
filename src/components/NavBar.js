import React from "react";
import { Typography, Paper, Avatar, Button } from "@material-ui/core";
import VerifiedUserOutlined from "@material-ui/icons/VerifiedUserOutlined";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
  },
  paper: {
    display: "flex",
    flex: 3,
    flexDirection: "row",
    height: 60,
    padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 3}px ${
      theme.spacing.unit * 1
    }px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: 2,
    float: "right",
  },
  submit: {},
});

function NavBar(props) {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <Paper elevation={0.5} className={classes.paper}>
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
        <Button href="#">Link for YC website</Button>{' '}

        <Button variant="danger"></Button> <Button variant="info">Info</Button>{' '}
        <Button as="input" type="submit" value="Submit" />{' '}        
   
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
  
      </Paper>
    </main>
  );
}



export default withStyles(styles)(NavBar);

