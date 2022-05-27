import React from "react";

import {
  Star as StarIcon,
  StarBorder as StarBorderIcon,
} from "@mui/icons-material";

const RatingStar = () => {
  const starsCount = 5;
  return (
    <>
      {[...Array(starsCount)].map((_, i) => (
        <StarBorderIcon
          key={i}
          sx={{ color: "#B1B5C9", ":hover": { color: "secondary.main" } }}
        />
      ))}
    </>
  );
};

export default RatingStar;
