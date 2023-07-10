import { Box, Button, Typography } from "@mui/material";
import HouseSidingOutlinedIcon from "@mui/icons-material/HouseSidingOutlined";
import { useState } from "react";
import Link from "next/link";
import FencingOutlinedIcon, { BuildOutlined, ColorLensOutlined, ConstructionOutlined } from '@mui/icons-material';

import { DeckOutlined } from "@mui/icons-material";

export default function Section3() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [isHovered1, setIsHovered1] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: { md: "100%", xs: "100%" },
          backgroundColor: "#181D4E",
        }}
      >
        <Box
          sx={{
            display: { md: "flex", xs: "block" },
            width: { lg: 1200,  md: "99%", xs: "95%" },
            margin: "auto",
            color: "white",
            paddingY: {md:20, xs: 6},
            gap: 10,
          }}
        >
          <Box sx={{ width: { lg: 500, md:420, xs: "100%"}, marginTop: 12 ,textAlign: {md:"start", xs: "center"}}}>
            <Typography sx={{ fontSize: 16 }}> WHO WE DO</Typography>
            <Typography
              sx={{
                fontSize: 46,
                fontWeight: "bold",
                lineHeight: 1.1,
                paddingTop: 1,
              }}
            >
              All-aluminum and steel building solutions
            </Typography>
            <Typography sx={{ fontSize: 17, marginTop: 3 }}>
            When you choose us for your aluminum and steel railing works, you can expect professionalism, attention to detail, and exceptional craftsmanship.
            </Typography>
            <Link href="/About">
            <Button
              style={{
                textTransform: "capitalize",
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
                marginTop: 30,
                backgroundColor: "#FA4729",
                padding: 15,
                paddingLeft: 40,
                paddingRight: 40,
                borderRadius: 0,
              }}
            >
              About Us
            </Button>
            </Link>
          </Box>
          <Box sx={{ width:  { lg: 620,md: 602, sm: "35%", xs: "86%"}, margin: {md: 0, xs: "auto"},marginTop: {md: 0, xs: 6}, textAlign: {md: "start", xs:"center"} }}>
            <Box sx={{ display: { md: "flex", xs: "block" }, gap: 3 }}>
              <Box
                sx={{
                  padding: 4,
                  backgroundColor: isHovered ? "#FA4729" : "white", // Change the color when hovering
                  width: 300,
                  "&:hover": {
                    backgroundColor: "#FA4729", // Change the color when hovering
                  },
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <DeckOutlined
                  sx={{
                    fontSize: 70,
                    color: isHovered ? "white" : "#FA4729", // Change the color when hovering
                  }}
                />
                <Typography
                  sx={{
                    color: isHovered ? "white" : "black", // Change the color when hovering
                    fontSize: 25,
                    fontWeight: "bold",
                    marginTop: 5,
                  }}
                >
                  Aluminum Window
                </Typography>
                <Typography
                  sx={{
                    color: isHovered ? "white" : "#898A8E", // Change the color when hovering
                    fontSize: 18,
                  }}
                >
                  High-quality and durable aluminum windows
                </Typography>
              </Box>

              <Box
                sx={{
                  padding: 4,
                  backgroundColor: isHovered1 ? "red" : "white", // Change the color when hovering
                  width: 300,
                  height: 260,
                  "&:hover": {
                    backgroundColor: "#FA4729", // Change the color when hovering
                  },
                  marginTop: {md:-3, xs: 3},
                }}
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                <ConstructionOutlined
                  sx={{
                    fontSize: 70,
                    color: isHovered1 ? "white" : "#FA4729", // Change the color when hovering
                  }}
                />
                <Typography
                  sx={{
                    color: isHovered1 ? "white" : "black", // Change the color when hovering
                    fontSize: 25,
                    fontWeight: "bold",
                    marginTop: 5,
                  }}
                >
                  Steel Railings
                </Typography>
                <Typography
                  sx={{
                    color: isHovered1 ? "white" : "#898A8E", // Change the color when hovering
                    fontSize: 18,
                  }}
                >
                   Strong and reliable steel railings 
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: { md: "flex", xs: "block" },
                gap: 3,
                marginTop: 3,
              }}
            >
              <Box
                sx={{
                  padding: 4,
                  backgroundColor: isHovered2 ? "red" : "white", // Change the color when hovering
                  width: 300,
                  marginTop: { md: 0, xs: 3 },
                  "&:hover": {
                    backgroundColor: "#FA4729", // Change the color when hovering
                  },
                }}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <ColorLensOutlined
                  sx={{
                    fontSize: 70,
                    color: isHovered2 ? "white" : "#FA4729", // Change the color when hovering
                  }}
                />
                <Typography
                  sx={{
                    color: isHovered2 ? "white" : "black", // Change the color when hovering
                    fontSize: 25,
                    fontWeight: "bold",
                    marginTop: 4,
                  }}
                >
                  Custom Railing Designs
                </Typography>
                <Typography
                  sx={{
                    color: isHovered2 ? "white" : "#898A8E", // Change the color when hovering
                    fontSize: 18,
                  }}
                >
                  Tailor-made railing designs 
                </Typography>
              </Box>

              <Box
                sx={{
                  padding: 4,
                  backgroundColor: isHovered3 ? "red" : "white", // Change the color when hovering
                  width: 300,
                  height: 260,
                  
                  "&:hover": {
                    backgroundColor: "#FA4729", // Change the color when hovering
                  },
                  marginTop: {md:-3, xs: 3},
                }}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                <BuildOutlined
                  sx={{
                    fontSize: 70,
                    color: isHovered3 ? "white" : "#FA4729", // Change the color when hovering
                  }}
                />
                <Typography
                  sx={{
                    color: isHovered3 ? "white" : "black", // Change the color when hovering
                    fontSize: 25,
                    fontWeight: "bold",
                    marginTop: 5,
                  }}
                >
                  Railing Installation
                </Typography>
                <Typography
                  sx={{
                    color: isHovered3 ? "white" : "#898A8E", // Change the color when hovering
                    fontSize: 18,
                  }}
                >
                  Professional railing installation services 
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
