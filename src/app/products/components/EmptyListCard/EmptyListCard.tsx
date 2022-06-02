import React from "react";

import { Box, Card, CardContent, Icon, Typography } from "@mui/material";

import taskListIcon from "img/task-list-plain.svg";
import useMediaQueryMobile from "app/common/hooks/useMediaQueryMobile";

const EmptyListCard = () => {
  const { isMobile } = useMediaQueryMobile();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        mt: "10vh",
      }}
    >
      <Card
        sx={{
          flexBasis: isMobile ? "80%" : "50%",
          height: "344px",
        }}
      >
        <CardContent
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon sx={{ display: "flex", width: "36px", height: "46px", mb: 2 }}>
            <Box component="img" src={taskListIcon} />
          </Icon>
          <Typography variant="h3">Ooops… It's empty here</Typography>
          <Typography variant="caption">
            There are no products on the list
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmptyListCard;
