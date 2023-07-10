import { Box, Grid, Typography } from "@mui/material";


export default function Section6 () {
    return(
        <>
        <Box sx={{backgroundColor: "#1C1E36", width: "100%",height: {lg: 300, md:480, sm: 500, xs: "100%"}, paddingBottom: {sm:0, xs: 10}}}>
            <Grid container gap={10} sx={{width: "80%", margin: "auto", justifyContent: "center", alignItems: "center", paddingTop: 8}}>
                <Box sx={{textAlign: "center"}}>
                    <Typography sx={{fontSize: 120, opacity: 0.1, color: "white", zIndex: 0}}>50</Typography>
                    <Typography sx={{marginTop: -13, fontSize: 20, fontWeight: "bold", color: "white", zIndex: 1}}>Projects</Typography>
                </Box>
                <Box sx={{display: {sm:"block", xs: "none"} ,width: "2px", height: 40, backgroundColor: "#595959", marginTop: 10}}></Box>
                <Box sx={{textAlign: "center"}}>
                    <Typography sx={{fontSize: 120, opacity: 0.1, color: "white", zIndex: 0}}>10</Typography>
                    <Typography sx={{marginTop: -13, fontSize: 20, fontWeight: "bold", color: "white", zIndex: 1}}>People</Typography>
                </Box>
                <Box sx={{ display: {lg: "block", md:"block", xs: "none"},width: "2px", height: 40, backgroundColor: "#595959", marginTop: 10}}></Box>
                <Box sx={{textAlign: "center"}}>
                    <Typography sx={{fontSize: 120, opacity: 0.1, color: "white", zIndex: 0}}>7</Typography>
                    <Typography sx={{marginTop: -13, fontSize: 20, fontWeight: "bold", color: "white", zIndex: 1}}>Years</Typography>
                </Box>
                <Box sx={{display: {lg: "block", md:"none", sm: "block", xs: "none"} ,width: "2px", height: 40, backgroundColor: "#595959", marginTop: 10}}></Box>
                <Box sx={{textAlign: "center"}}>
                    <Typography sx={{fontSize: 120, opacity: 0.1, color: "white", zIndex: 0}}>1</Typography>
                    <Typography sx={{marginTop: -13, fontSize: 20, fontWeight: "bold", color: "white", zIndex: 1}}>Offices</Typography>
                </Box>

            </Grid>
        </Box>
        </>
    )
}