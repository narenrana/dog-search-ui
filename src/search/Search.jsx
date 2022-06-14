import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./style";
import { search } from "../dashboard/redux";
import { useDispatch } from "react-redux";

function Search(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const onChange = async (e) => {
    //Custome debouncing
    setTimeout(() => {
      dispatch(search(e.target.value));
    }, 1000);
  };
  return (
    <div className={classes.toolbar}>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search breeds"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "Search dog breds" }}
            onChange={onChange}
          />
        </div>
      </Toolbar>
    </div>
  );
}

Search.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string
};

export default Search;
