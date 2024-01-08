import React from "react"
import Header from "./components/header"
import Footer from "./components/Footer"
import  SignUp  from "./components/SignUp"
import LogIn from "./components/LogIn"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import "./style/style.css"


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Box sx={{minHeight:"100vh"}}>
        <Routes>
          <Route path="/home" element={<h1>home</h1>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/log-in" element={<LogIn/>}/>
        </Routes>
      </Box>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
