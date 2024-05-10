import React from "react";
import Layout from "../Componets/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
} from "@mui/material";
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 15, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Taco</Typography>
        <p>loremloremloremloremloremloremlorem</p>
      </Box>
      <Box sx={{ m:3, width:"600px", ml:10, "@media(max-width:600px)" :{
        width:'300px',
      },
      }}>
        <TableContainer component={Paper}>
          <Table aria-table="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor: 'black', color:'white'}} 
                align="center"
                >Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 800-700-670 (toroll
                  free)
                </TableCell>

                 </TableRow>
                 <TableRow>
                 <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@taco.com
                </TableCell>
                 </TableRow>
                 <TableRow>
                 <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> (+40)0767 900 800 
                </TableCell>
                 </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
