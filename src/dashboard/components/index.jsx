import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import SearchResult from "./search-result";
import { sortBy, trim } from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function Dashboard(props) {
  const state = useSelector((state) => state.dashboardStore);
  const { isLoading = false, result = [] } = state;
  const classes = useStyles();
  const sortedData = sortBy(result, [
    "name",
    "adaptability",
    (d) => {
      if (d.life_span) {
        d = trim(d.life_span.split("-")[0]);
        return d;
      }
    },
  ]);
  return (
    <div className={classes.root}>
      <SearchResult loading={isLoading} data={sortedData} />
    </div>
  );
}
