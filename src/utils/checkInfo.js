 let  checkInfo = {
    name: (value)=>{
      if(value.length < 8){
        return false
      }else{
        return true
      }
    },
    pw: (value)=>{
      if(value.length < 8){
        return false
      }else{
        return true
      }
    },
    email: (value)=>{
      if(value.length < 8){
        return false
      }else{
        return true
      }
    },
    dateOfBirth: (value)=>{
        let year = value.split("-")
        return year[0] <  2020
    },
    number:(value)=>{
        return false
    }
  }
export default checkInfo