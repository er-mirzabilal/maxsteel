import { Box, Typography } from "@mui/material";

export default function Section4() {
  return (
    <>
      <Box sx={{ width: "100%", display: { md: "flex", xs: "block" } }}>
        <Box sx={{ width: { md: "50%", xs: "100%" } }}>
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              "&:hover": { background: "#fa4729" },
              position: "relative",
              background: "url(/images/image-stairs.jpg)",
              backgroundSize: "cover",
            }}
          >
            <Typography
              sx={{
                height: { lg: 688, md: 428, sm: 702, xs: 320 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFF",
                opacity: 0,
                transition: "opacity 0.3s ease",
                "&:hover": { opacity: 1 },
              }}
            >
              Stair Railings<br />
              Explore our collection of stylish and durable stair railings that elevate the aesthetic appeal of your space
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "100%",
                height: { md: 344, sm: 344, xs: 200 },
                textAlign: "center",
                "&:hover": { background: "#FA4729" },
                background: "url(/images/a5.jpg)",
                backgroundSize: "cover",
              }}
            >
              <Typography
                sx={{
                  height: { md: 344, sm: 344, xs: 200 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#FFF",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  "&:hover": { opacity: 1 },
                }}
              >
                 Balcony Railings <br/>
                 Discover our exquisite range of balcony railings, designed to enhance safety and add elegance to your balcony area.
              </Typography>
            </Box>

            <Box
              sx={{
                width: "100%",
                height: { md: 344, sm: 344, xs: 200 },
                textAlign: "center",
                "&:hover": { background: "#FA4729" },
                background: "url(/images/a4.jpg)",
                backgroundSize: "cover",
              }}
            >
              <Typography
                sx={{
                  height: { md: 344, sm: 344, xs: 200 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#FFF",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  "&:hover": { opacity: 1 },
                }}
              >
                Interior Railings<br />
                Browse through our selection of interior railings, offering both functionality and aesthetics to complement your indoor spaces.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ width: { md: "50%", xs: "100%" } }}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "100%",
                height: { md: 344, sm: 344, xs: 200 },
                textAlign: "center",
                "&:hover": { background: "#FA4729" },
                background: "url(/images/a1.jpg)",
                backgroundSize: "cover",
              }}
            >
              <Typography
                sx={{
                  height: { md: 344, sm: 344, xs: 200 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#FFF",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  "&:hover": { opacity: 1 },
                }}
              >
                Exterior Railings<br />
                Enhance the exterior of your property with our high-quality and visually appealing exterior railings, built to withstand the elements.
              </Typography>
            </Box>

            <Box
              sx={{
                width: "100%",
                height: { md: 344, sm: 344, xs: 200 },
                textAlign: "center",
                "&:hover": { background: "#FA4729" },
                background: "url(/images/a2.jpg)",
                backgroundSize: "cover",
              }}
            >
              <Typography
                sx={{
                  height: { md: 344, sm: 344, xs: 200 },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#FFF",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  "&:hover": { opacity: 1 },
                }}
              >
                Custom Railings<br />
                Get customized railing solutions tailored to your unique preferences and requirements, ensuring a perfect fit for your project.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              "&:hover": { background: "#FA4729" },
              background: "url(/images/a3.jpg)",
              backgroundSize: "cover",
            }}
          >
            <Typography
              sx={{
                height: { lg: 688, md: 428, sm: 652, xs: 320 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#FFF",
                opacity: 0,
                transition: "opacity 0.3s ease",
                "&:hover": { opacity: 1 },
              }}
            >
              Commercial Railings<br/>
              Explore our range of commercial railings designed to meet safety standards and add a professional touch to commercial spaces.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
