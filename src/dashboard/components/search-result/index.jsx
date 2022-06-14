import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

function DogSearchResult(props) {
  const { loading = false, data = [] } = props;

  return (
    <Grid container>
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} width={210} marginRight={0.5} my={5}>
          {item ? (
            <div style={{ width: 210, height: 118 }}>
              <img
                style={{ width: 210, height: 118 }}
                alt={item.name}
                src={`https://cdn2.thecatapi.com/images/${item.reference_image_id}.jpg`}
              />
            </div>
          ) : (
            <Skeleton variant="rect" width={210} height={118} />
          )}

          {item ? (
            <Box pr={2}>
              <Typography gutterBottom variant="body2">
                {`Name - ${item.name}`}
              </Typography>
              <Typography
                display="block"
                variant="caption"
                color="textSecondary"
              >
                {/* {(item.description || "").substring(0, 20)} */}
              </Typography>

              <Typography
                display="block"
                variant="caption"
                color="textSecondary"
              >
                {`Adaptability - ${item.adaptability}`}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {`Life Span - ${item.life_span}`}
              </Typography>
            </Box>
          ) : (
            <Box pt={0.5}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

DogSearchResult.propTypes = {
  loading: PropTypes.bool,
};

export default function DogSearchResultContainor({ loading, data }) {
  return (
    <Box overflow="hidden">
      <DogSearchResult loading={loading} data={data} />
    </Box>
  );
}
