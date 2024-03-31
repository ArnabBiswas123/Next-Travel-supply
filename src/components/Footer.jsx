import React from "react";
import { Box, Typography, List, ListItem } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          minWidth: "100%",
          display: "flex",
          bgcolor: "#683434",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "5%",
          px: "8%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <h2
            className=" font-home font-bold  text-xl"
            style={{ color: "white", marginBottom: "2%" , }}
          >
            Our Products
          </h2>
          <List>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Hotel</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Bus</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Transfer</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Car</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Insurance</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Visa</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Cruise</Link>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <h2
            className=" font-home font-bold  text-xl"
            style={{ color: "white", marginBottom: "2%",  paddingLeft:'10%' }}
          >
               About Us
          </h2>
          <List>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>
              Travel Affiliate Program
              </Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Customer Support</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Cancellation-Refund</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>policy</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Sitemap</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}> Traveler Tools</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Honeymoon Packages</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Thailand Package</Link>
            </ListItem>
          </List>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <h2
            className=" font-home font-bold  text-xl"
            style={{ color: "white", marginBottom: "2%", paddingLeft:'10%' }}
          >
               Bookings
          </h2>
          <List>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>
              Flight Bookings
              </Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Hotel Bookings</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Cancellation-Refund</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>policy</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Vacation Bookings</Link>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <h2
            className=" font-home font-bold  text-xl"
            style={{ color: "white", marginBottom: "2%",  paddingLeft:'10%' }}
          >
                     Packages
          </h2>
          <List>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>
              1 Night 2 Days Kumbh Mela Package
              </Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Kumbh Mela Package 2 Nights 3 Days</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>3 Night 4 Days Kumbh Mela Package</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Kumbh Mela Shahi Snan Package</Link>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>
              1 Night 2 Days Kumbh Mela Package
              </Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Kumbh Mela Package 2 Nights 3 Days</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>3 Night 4 Days Kumbh Mela Package</Link>
            </ListItem>
            <ListItem>
              <Link className=" font-home" href="#" style={{ color: "white" }}>Kumbh Mela Shahi Snan Package</Link>
            </ListItem>
          </List>
        </Box>
        {/* Repeat the same structure for other sections */}
      </Box>
      <Typography
        variant="body1"
        align="center"
        color="white"
        sx={{ backgroundColor: "#683434", paddingY: 2 }}
      >
        Copyright @Globefirst innovative Traveltech Inc. Canada (Travel Agent
        license: 73581, CLIA membership No. 00578350) Made by: WebTrends Ai Inc.
      </Typography>
    </>
  );
}
