import { Box, Typography } from "@mui/material";
import Link from "next/link";


export default function Footer() {
    return(
        <>
          <Box sx={{backgroundColor: "#181D4E", width: "100%", height: {lg: 480, md: 526, sm: "100%" }}}>
            <Box sx={{width: "80%", margin: "auto", display: {md:"flex", sm: "block"}, justifyContent: "space-between", paddingTop: 10, color: "white"}}>
                <Box sx={{width: {md:"25%", sm: "60%", xs: "100%"}}}>
                    <Typography sx={{fontSize: 34,fontWeight: "bold"}}>Max Steel</Typography>
                    <Typography sx={{color: "#9BA2AD", marginTop: 3}}>We deals in all kinds of stainless steel and aluminum</Typography>
                </Box>

                <Box sx={{width: {md:"14%", sm: "30%", xs: "50%"}}}>
                    <Typography sx={{fontSize: 24,fontWeight: "bold"}}>Office</Typography>
                    <Typography sx={{color: "#9BA2AD", marginTop: 3}}>Gujrawala — <br/> Calimix town 7 no Street, Office shahinabard</Typography>
                    <Typography sx={{color: "#9BA2AD", marginTop: 2}}>maxsteel.construction@gamil.com</Typography>
                    <Typography sx={{color: "white", marginTop: 2, fontSize: 24, fontWeight: "bold", width: 200}}>+92 305 4204805</Typography>
                </Box>

                <Box sx={{width: {md:"14%", sm: "30%", xs: "50%"}, marginLeft: {md:"5%", xs: 0}}}>
                    <Typography sx={{fontSize: 24,fontWeight: "bold"}}>Links</Typography>
                   <Link href="/"> <Typography sx={{color: "#9BA2AD", marginTop: 3}}>Home</Typography></Link>
                   <Link href="/Services"> <Typography sx={{color: "#9BA2AD", marginTop: 2}}>Services</Typography></Link>
                   <Link href="/About">  <Typography sx={{color: "#9BA2AD", marginTop: 2}}>About Us</Typography></Link>
                   <Link href="/Contact">  <Typography sx={{color: "#9BA2AD", marginTop: 2}}>Contacts</Typography></Link>
                </Box>

            </Box>
            <Box sx={{width: "80%", margin: "auto", display: {md:"flex", sm: "block"}, justifyContent: "space-between", paddingY: 4, color: "white", borderTop: "1px solid #9BA2AD", marginTop: 9}}>
                <Typography color={"#9BA2AD"}>AncoraThemes © 2023. All Rights Reserved.</Typography>
                <Typography color={"#9BA2AD"}>   non-copyright ©
                </Typography>
            </Box>

          </Box>
        </>
    )
}