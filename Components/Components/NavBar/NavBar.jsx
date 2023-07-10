import { Box, Button, IconButton } from "@mui/material";
import Header from "../Header";
import Link from "next/link";


export default function NavBar() {
    return(
        <>
        <div>
            <Box sx={{ height: "auto",position: "relative", display: {md: "block", xs: "none"}}}>
               <img style={{ width: "100%" }} src="./images/topimage.jpg" alt="image"/>
            </Box>
            <Box sx={{ height: "auto",position: "relative", display: {md: "none", xs: "block"}}}>
               <img style={{ width: "100%" }} src="./images/topimagesm.jpg" alt="image"/>
            </Box>
            <div style={{zIndex: 1, overflow : "hidden",  position: "absolute", top: 0, width: "100%", margin: "auto"}}>
                <div style={{margin: "auto", width: "90%"}}>
                    <div style={{display: "flex", paddingTop: 0, paddingBottom: 0, width: "100%", justifyContent: "space-between" }}>
                        <div>
                            <IconButton sx={{color: "white", fontWeight: "bold", fontSize: 20, }}><img style={{width: 80, height: 60, padding: 0, margin: 0}} src="/images/black.png" alt=""/> </IconButton>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between", width: 150, paddingTop: 10}}>
                            <Link href="/">
                         <Button sx={{color: "white", fontSize: 20, textTransform: "capitalize"}}>Home</Button>
                         </Link>
                         <Link href="/About">
                         <Button sx={{color: "white", fontSize: 20, textTransform: "capitalize"}}>About</Button>
                         </Link>
                        </div>
                    </div>
                    <Header />
                </div>
            </div>
        </div>
        </>
    )
}