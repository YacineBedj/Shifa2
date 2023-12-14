import React from "react"
import Header from "./components/header"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"
import "./style/style.css"


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Box sx={{minHeight:"100vh"}}>
        <Routes>
          <Route path="/" element={<h1>link1</h1>}/>
          <Route path="/header" element={<h1>link 2</h1>}/>
          <Route path="/footer" element={<h1>footer</h1>}/>
        </Routes>
      </Box>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
