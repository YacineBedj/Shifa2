import React from 'react'
import {Stack,Box, Button} from '@mui/material'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
export default function Header() {
  const [showNav, setShowNav] = React.useState<boolean>(false)
  function toggelNav():void{
    setShowNav((oldShow)=>!oldShow)
  }
  return (
    <nav className='nav'>
        <Stack 
              className='container nav--container'
              direction="row"
              alignItems="center"
              justifyContent="space-between"
        >
        <Box >
          <Link to="/" className='link'><h1>Shifa2</h1></Link>
        </Box>
        <Box 
            className="nav-links"
            sx={{
                display:{xs:showNav ? "flex" : "none", md:"block"},

            }}  
        >
          <Link to="/" className='link'>Link1</Link>
          <Link to="/" className='link'>Link1</Link>
          <Link to="/" className='link'>Link1</Link>
          <Link to="/" className='link'>Link1</Link>
          <Link to="/" className='link'>
            <Button variant='outlined'
              sx={{
                borderColor:"#02b4ea",
                color:"white"

              }}
            >Log in</Button>
          </Link>
          <Link to="/" className='link'>
            <Button variant='contained'
              sx={{
                backgroundColor:"#02b4ea",

              }}
            >Log in</Button>
          </Link>
        </Box>
        <Box
            sx={{display:{xs:"block", md:"none"}}}
            onClick={toggelNav}
        >
            <CiMenuBurger className="nav--icon"/>
        </Box>
      </Stack>
    </nav>

  )
}
