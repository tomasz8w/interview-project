import React from "react";

import {
  Star as StarIcon,
  StarBorder as StarBorderIcon,
} from "@mui/icons-material";

type Props = {
  starsCount: number;
};

const RatingStar = ({ starsCount }: Props) => {
  return (
    <>
      {[...Array(starsCount)].map((_, i) => (
        <StarIcon key={i} sx={{ color: "secondary.main" }} />
      ))}
      {[...Array(5 - starsCount)].map((_, i) => (
        <StarBorderIcon key={i} sx={{ color: "#B1B5C9" }} />
      ))}
    </>
  );
};

export default RatingStar;
