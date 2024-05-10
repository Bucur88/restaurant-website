import React from 'react'
import {Box, Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center', bgcolor:'#1A1A19', color:'white', p: 2}}
    >
        <Box sx={{my: 3, "& svg":{
          fontSize: "60px",
          cursor:"pointer",
          mr: 2,
        },
        }}
        >
            {/*icons*/}
            <InstagramIcon/>
            <YouTubeIcon/>
        </Box>
        <Typography
         variant="h6" 
         sx={{"@media(min-width:600px)":{
            fontSize:"1rem",
        },
        }}
        >
            All Rights Reserved 
        </Typography>
    </Box>
    </>
  );
};

export default Footer;