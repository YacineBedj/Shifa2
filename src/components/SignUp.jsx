import React from 'react'
import { Box, Button, TextField } from '@mui/material'

 const SignUp = () => {
  let [signUpInfo, setSignUpInfo]= React.useState({email:"", pw:""})
    console.log("the state", signUpInfo)
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" component="form">
        <TextField
            variant='filled'
            id='email'
            label="email"
            type='email'
            value={signUpInfo.email}
            onChange={(e)=>{setSignUpInfo((prevInfo)=>{return {...prevInfo, email:e.target.value}})}}
            sx={{mb:"25px", width:{xs:"250px", md:"400px"}}}
        />
        <TextField
            variant='filled'
            id='password'
            label="password"
            type='password'
            onChange={(e)=>{setSignUpInfo((prevInfo)=>{return {...prevInfo, pw:e.target.value}})}}
            value={signUpInfo.pw}
            sx={{mb:"25px", width:{xs:"250px", md:"400px"}}}
        />
        <Button
            variant='contained'
            onClick={()=>{
                console.log(signUpInfo)
                setSignUpInfo(()=>{return {email:"", pw:""}})
            }}
        >
            Sign UP
        </Button>
    </Box>
  )
}
export default SignUp
