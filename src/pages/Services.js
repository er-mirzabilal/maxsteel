import { Box, Grid, IconButton, Typography } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Link from "next/link";
import { ArrowBack } from "@mui/icons-material";

export default function Services () {
    return (
        <>
        <Link href="/">
            <ArrowBack sx={{ fontSize: 50, color: "black"}} />
        </Link>
        <Box sx={{width: "82%", margin: "auto", textAlign: "center", marginTop: {md:20, xs: 8}, paddingBottom: {md:16, xs: 8}}}>
            <Box sx={{textAlign: "center", width: "100%"}}>
                <Typography sx={{fontSize: 18}}>WHAT WE OFFER</Typography>
                <Typography sx={{fontSize: 40, fontWeight: "bold"}}>Our best Services</Typography>
            </Box>
            <Grid container  sx={{ marginTop: 8, justifyContent: "center",gap:{lg: 15, md: 11, sm: 8, xs: 5}, width: "100%" }}>
                <Box sx={{textAlign: "center", width: {lg:"28%", md: "40%", sm: "78%", xs: "90%"}, boxShadow: 1}}>
                    <img width={"100%"} height={"100%"} src="/images/p1.jpg" alt="" />
                    <Typography sx={{fontSize: 28, fontWeight: "bold", marginTop: 7}}>Steel Fabrication</Typography>
                    <Typography sx={{fontSize: 16, width: "70%", textAlign: "center", margin: "auto", color: "#707070", marginTop: 3}}> We specialize in custom steel fabrication for various industries, delivering high-quality and durable steel products.</Typography>
                    <Box sx={{display: "flex", justifyContent: "center", marginTop: 4, paddingBottom: 5}}>
                        <Typography sx={{paddingY: 1, paddingRight: 2}}>Read More</Typography>
                        <Link href="/Read1">
                        <IconButton  sx={{border: "1px solid #898A8E", color: "black", fontSize: 15}}>
                              <ArrowRightAltIcon  sx={{}}/>
                    </IconButton>
                    </Link>
                    </Box>
                </Box>

                <Box sx={{textAlign: "center", width: {lg:"27%", md: "40%", sm: "78%", xs: "90%"}, boxShadow: 1}}>
                    <img width={"100%"} height={"50%"} src="/images/p2.jpg" alt="cdcd" />
                    <Typography sx={{fontSize: 28, fontWeight: "bold", marginTop: 3}}>Aluminum Extrusion</Typography>
                    <Typography sx={{fontSize: 16, width: "70%", textAlign: "center", margin: "auto", color: "#707070", marginTop: 3}}>Our aluminum extrusion services provide versatile solutions for creating lightweight and corrosion-resistant components.</Typography>
                    <Box sx={{display: "flex", justifyContent: "center", marginTop: 4, paddingBottom: 5}}>
                        <Typography sx={{paddingY: 1, paddingRight: 2}}>Read More</Typography>
                        <Link href="/Read2">
                        <IconButton sx={{border: "1px solid #898A8E", color: "black", fontSize: 15}}>
                              <ArrowRightAltIcon  sx={{}}/>
                        </IconButton>
                      </Link>
                    </Box>
                </Box>

                <Box sx={{textAlign: "center", width: {lg:"27%", md: "40%", sm: "78%", xs: "90%"}, boxShadow: 1}}>
                    <img width={"100%"} height={"100%"} src="/images/p3.jpg" alt="dd" />
                    <Typography sx={{fontSize: 28, fontWeight: "bold", marginTop: 3}}>Custom Railing Design</Typography>
                    <Typography sx={{fontSize: 16, width: "70%", textAlign: "center", margin: "auto", color: "#707070", marginTop: 3}}>Enhance your space with our custom railing design services, combining style, safety, and functionality seamlessly.</Typography>
                    <Box sx={{display: "flex", justifyContent: "center", marginTop: 4, paddingBottom: 5}}>
                        <Typography sx={{paddingY: 1, paddingRight: 2}}>Read More</Typography>
                        <Link href="/Read3">
                        <IconButton sx={{border: "1px solid #898A8E", color: "black", fontSize: 15}}>
                              <ArrowRightAltIcon  sx={{}}/>
                        </IconButton>
                      </Link>
                    </Box>
                </Box>
            </Grid>

        </Box>
        </>
    )
}