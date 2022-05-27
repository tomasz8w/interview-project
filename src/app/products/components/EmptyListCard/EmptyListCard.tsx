import React from "react";

import {
  Box,
  Card,
  CardContent,
  Icon,
  SvgIcon,
  Typography,
} from "@mui/material";

import taskListIcon from "img/task-list-plain.svg";

const EmptyListCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flex: 1,
        mt: "10vh",
      }}
    >
      <Card sx={{ height: "344px", minWidth: "40%" }}>
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
          <Typography variant="h3">Ooops… It’s empty here</Typography>
          <Typography variant="caption">
            There are no products on the list
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmptyListCard;
