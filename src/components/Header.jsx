import { AppBar, Box, Tooltip } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <AppBar
        position="sticky"
        color="inherit"
        sx={{
          paddingY: "0.5%",
          paddingX: "5%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          src={"/gd logo.gif"}
          height={60}
          width={80}
          style={{ cursor: "pointer" }}
          unoptimized
        ></Image>
        <Box sx={{
            display:"flex",
            justifyContent:'center',
            alignItems:'center'
        }}>

        <h1 className=" font-home font-extrabold text-lg md:text-2xl bg-gradient-to-r  from-amber-800 to-yellow-500 text-transparent bg-clip-text">GlobalDuniya</h1>
        </Box>
        <Link href={'/login'}>
        
        <Tooltip title="Login">
          <Image
            src={"/user.png"}
            height={10}
            width={50}
            style={{ cursor: "pointer" }}
            // onClick={()=>{router.push('/login')}}
          ></Image>
        </Tooltip>
        </Link>
      </AppBar>
    </>
  );
}
