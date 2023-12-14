import React from 'react'
import { Box, Stack } from '@mui/material'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  
  return (
    <footer className='footer'>
      <Stack className="footer--container container" direction="row" alignItems="center" justifyContent="space-between">
        <Box>
            <img src="/src/3.png" alt="logo img" className='footer--logo'/>
          <Stack className="footer--media__links" direction="row" sx={{padding:"10px 0px"}} justifyContent="space-between">
            <a href=""><FaFacebook /></a>
            <a href=""><AiFillInstagram /></a>
            <a href=""><FaGithub /></a>
            <a href=""><AiFillInstagram /></a>
            <a href=""><FaGithub /></a>
          </Stack>
          <p>ALL COPY RIGTH ARE SAVED 20023-2024 made by Yacine X Berro</p>
        </Box>
        <Box 
          className="footer--map"
          sx={{display:{xs:"none", md:"block"}}}
        >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.237764238758!2d-122.084276684618!3d37.38931477955684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7b6b9a5d%3A0x4a501367f076adff!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1630519477649!5m2!1sen!2sus" width="600" height="450" ></iframe>
        </Box>

      </Stack>
    </footer>
  )
}
