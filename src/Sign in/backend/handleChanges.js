export const  ChekingUserExist=(data,UsernameWanted)=>{
    let usernames=[]
    const getusersusernames=()=>{
      if(Array.isArray(data)){
        data.map(element=>{
            usernames.push(element.Username)
        })
      }
     
    }
    getusersusernames()
    let error=""    
    if(usernames.indexOf(UsernameWanted)!==-1){
        error=" This Username already exist"
    }else{
        error=""
    }
    return error
}
export const ChekingPassword=(Password)=>{
    let error=""
    if(Password.length<6){
        error="password is too short "
    }else {
        error=""
    }
    return error
}
export const handlebtnchange=(Password,Username,errorpassword,errorUsername)=>{
    if(Password!==""  && Username!=="" && errorpassword==="" && errorUsername===""){
        return false
    }else{
        return true
    }
}