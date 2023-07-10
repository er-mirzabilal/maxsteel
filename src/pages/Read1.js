import { Box, Grid, Typography } from "@mui/material";
import { Data1 } from "../../Components/Data/Data1";
import { ArrowBack } from "@mui/icons-material";
import Link from "next/link";


export default function Read1 () {
    return (
        <>
        <Link href="/">
            <ArrowBack sx={{ fontSize: 50, color: "black"}} />
        </Link>
         <Box sx={{width: "82%", margin: "auto", textAlign: "center", marginTop: {md:10, xs: 8}, paddingBottom: {md:16, xs: 8}}}>
            <Box sx={{textAlign: "center", width: "100%"}}>
                <Typography sx={{fontSize: 18}}>WE OFFER</Typography>
                <Typography sx={{fontSize: 40, fontWeight: "bold"}}>Steel Fabrication</Typography>
            </Box>
            <Grid container  sx={{ marginTop: 8, justifyContent: "center",gap:{lg: 15, md: 11, sm: 8, xs: 5}, width: "100%", backgroundColor: "#181D4E", padding: 3 }}>
                {Data1.map((item)=> (
                 <Box sx={{textAlign: "center", width: {lg:"28%", md: "40%", sm: "78%", xs: "90%"}, boxShadow: 1, backgroundColor: "white"}}>
                    <img width={"100%"} height={"100%"} src={item.image} alt="" />
                    <Typography sx={{fontSize: 28, fontWeight: "bold", marginTop: 3}}>{item.title}</Typography>
                    <Typography sx={{fontSize: 16, width: "70%", textAlign: "center", margin: "auto", color: "#707070", marginTop: 3, paddingBottom: 6}}>{item.about}</Typography>
                </Box>
                ))}
            </Grid>

        </Box>
        </>
    )
}