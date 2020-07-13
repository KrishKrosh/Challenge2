import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./styles.css";

const styles = (theme) => ({
  button: {},
});

function Categories() {
  return (
    <div>
      <br/>

      
      <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
        >
          Laptops
        </Button>



    </div>
  );
}


export default Categories;
