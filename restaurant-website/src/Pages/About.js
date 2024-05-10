import React from "react";
import Layout from "../Componets/Layout/Layout";
import { Box, Typography }  from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:14, 
        textAlign:"center", 
        p:2,
       " & h4 ":{
        fontWeight:"bold",
        my:2,
        fontSize:"1.3rem"
       },
       "& p" :{
        textAlign:"justify",
      },
      "@media(max-widht:600px)":{
        mt:0,
        "& h4":{
          fontSize:"1rem",
        },
      },
  }}
      >

    <Typography variant="h4">Welcome to Taco</Typography>
    <p>loremloremlorem</p>
    <br />
    <p>loremloremloremlorem</p>
      </Box>
    </Layout>
  );
};

export default About;
