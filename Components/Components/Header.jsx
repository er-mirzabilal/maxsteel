import { ArrowDownward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";


export default function Header () {
    return (
        <>
        <Box sx={{color: "white", marginTop: {lg:30, md: 20, sm: 26, xs: 24}}}>
            <Box>
            <Typography sx={{fontSize: {md:70, xs: 40}, fontWeight: "bold"}}>Max Steel  </Typography>
            <Typography sx={{fontSize: {md:70, xs: 40}, fontWeight: "bold"}}> Grate industury</Typography>
            </Box>
            <Box sx={{marginTop: 2, display: {md:"flex", xs: "none"}, justifyContent: "space-between", width: 440}}>
                <ArrowDownward sx={{fontSize: 50, height: 60}} />
                <p style={{fontSize: 20}}>You have to see the work what are we are<br />doing and explore over web site  </p>
            </Box>
            <Link href="/About">
              <button style={{textTransform: "capitalize", color: "white", fontWeight: "bold", fontSize: 20, marginTop: 30, backgroundColor: "#FA4729", padding: 15, paddingLeft: 40, paddingRight: 40, borderRadius: 5}}>About US</button>
            </Link>
        </Box>
        </>
    )
}