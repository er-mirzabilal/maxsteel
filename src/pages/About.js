import { Box, Button, IconButton, Typography } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Link from "next/link";


export default function About () {
    return(
        <>
        <Box sx={{ width: {md:1100, xs: "96%"}, margin: "auto", marginTop: {md:10, xs: 2},}}>
            <Box sx={{paddingY: {md:20, xs: 13}, display: {md:"flex", xs: "block"}, gap: 12}}>
                <Box sx={{width: {md:450, xs: "90%"}, border: "1px solid black", margin: "auto"}}>
                    <img width={"100%"} height={"100%"} src="/images/worker-image.jpg" alt="image of person" />
                </Box>
                <Box sx={{width: {md:560, xs: "100%"}, marginTop: {md: 0, xs: 3}, textAlign: {md:"start", xs: "center"} }}>
                    <Typography sx={{fontSize: 16}}> WHO WE ARE</Typography>
                    <Typography sx={{fontSize: 60, fontWeight: "bold", lineHeight: 1.1, paddingTop: 1}}>We are leaders in the building sector</Typography>
                    <Typography sx={{fontSize: 17, marginTop: 3}}>
                           We are a company specializing in aluminum and steel railing works. With years of experience in the industry, we have established ourselves as a reliable and skilled provider of railing solutions.</Typography>
                   <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: 4}}>

                     <Typography  sx={{fontSize: 17, textAlign: "center"}}>
                        Aluminum and steel railings are popular choices for both residential and commercial applications due to their durability, strength, and aesthetic appeal. 
                     </Typography>

                     <Typography  sx={{fontSize: 17, textAlign: "center", marginTop: 2}}>
                     Our team of experienced professionals is well-versed in designing, fabricating, and installing aluminum and steel railings to meet the specific needs and preferences of our clients.
                     </Typography>

                     <Typography  sx={{fontSize: 17, textAlign: "center", marginTop: 2}}>
                     We utilize high-quality materials and employ advanced techniques to ensure the longevity and structural integrity of our railing works.
                     </Typography>

                   </Box>
                   <Link href="/" style={{display: "flex", justifyContent: "center", alignItems:"center"}}>
                   <Button style={{textTransform: "capitalize", color: "white", fontWeight: "bold", fontSize: 20, marginTop: 30, backgroundColor: "#FA4729", padding: 15, paddingLeft: 40, paddingRight: 40, borderRadius: 0, textAlign: "center"}}>Go Back</Button>
                   </Link>
                </Box>
            </Box>
        </Box>
        </>
    )
}

