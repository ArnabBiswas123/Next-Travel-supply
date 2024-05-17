import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";
import Image from "next/image";
export default function Cards({ name, onclick }) {
  return (
    <Card
      sx={{
        display: "flex",
        width: {
          xs: "100%", // Full width on extra-small devices
          sm: "50%", // 50% width on small devices
          md: "30%", // 30% width on medium devices
          lg: "20%", // 20% width on large devices
        },
        boxShadow: 3,
        cursor: "pointer",
      }}
      onClick={onclick}
    >
      <Image
        src={"/project.png"}
        height={80}
        width={80}
        style={{ cursor: "pointer" }}
      ></Image>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <h1 className=" text-2xl font-home  font-semibold">{name}</h1>
        </CardContent>
      </Box>
    </Card>
  );
}
