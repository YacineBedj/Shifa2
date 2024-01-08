import React from 'react'
import { Box, TextField, Button } from '@mui/material'
import checkInfo from "../utils/checkInfo.js"

const LogIn = () => {

  let [info, setInfo] = React.useState([
    {input:"name", value:"", isValid:""},
    {input:"pw", value:"", isValid: ""},
    {input:"email", value:"", isValid:""},
    {input:"dateOfBirth", value:"", isValid:""},
    {input:"number", value:"", isValid:""},
    {input:"term", isValid:false}
  ])

  function handelChange(inputName, newValue){
    setInfo((prevInfo)=>{
      return prevInfo.map((prevOneInfo)=>{
        if(inputName === "term" && prevOneInfo.input === inputName){
          return {...prevOneInfo, isValid: newValue}
        }else if(prevOneInfo.input === inputName){
          return {...prevOneInfo, value: newValue, isValid: checkInfo[`${inputName}`](newValue)}
        }else{
          return prevOneInfo
        }
      })
    })
  }


  return (
    <Box className='login' minHeight="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" component="form">
          <div className='name'>
            <input type="text" id='name' placeholder='name'
              className={info[0].isValid === false ? "inputError" : ""}
              onChange={(e) => {handelChange("name", e.target.value)}}
            />
          </div>

          <div className='password'>
            <input type="password"  id='password' placeholder='password'
              className={info[1].isValid === false ? "inputError" : ""}
              onChange={(e) => {handelChange("pw", e.target.value)}}
            />
          </div>

          <div className='email'>
            <input type="email"  id='email' placeholder='email'
              className={info[2].isValid === false ? "inputError" : ""}
              onChange={(e) => {handelChange("email", e.target.value)}}
            />
          </div>

          <div className='date-of-birth'>
            <input type="date"  id='date-of-birth' placeholder='date-of-birth'
                className={info[3].isValid === false ? "inputError" : ""}
                onChange={(e) => {handelChange("dateOfBirth", e.target.value)}}
            />
          </div>

          <div className='number'>
            <input type="number"  id='number' placeholder='number'
                className={info[4].isValid === false ? "inputError" : ""}
                onChange={(e)=>{
                  if(e.target.value.length < 10){
                    handelChange("number", e.target.value)}
                  }
                }
                value={info[4].value}
            />
          </div>

          <div className='terms'>
            <input type="checkbox"  id='terms'
                onChange={(e) => {handelChange("term", e.target.checked)}}
            />
            <span><label htmlFor="terms">confirm the term for using our website</label></span>
          </div>
          
          <button 
             className='submit'
             onClick={(e)=>{
                e.preventDefault();
                let isDone = true;
                let error = null;
                for(let i = 0; i < info.length; i++){
                  if(!info[i].isValid){
                    isDone = false;
                    error = i;
                    i = 100;
                  }
                }
                if(isDone){
                  console.log("done??")
                  console.log(info)
                }else{
                  setInfo((prevInfo)=>{
                    return prevInfo.map((prevOneInfo)=>{
                      if(prevOneInfo.isValid === ""){
                        return {...prevOneInfo, isValid: false}
                      }else{
                        return prevOneInfo
                      }
                    })
                  })
                  console.log("error in : ", info[error].input)
                }
            }}>submit</button>
    </Box>
  )
}
export default LogIn