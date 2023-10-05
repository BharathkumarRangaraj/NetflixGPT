export const Loginvalidation=(Email,Password)=>{
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(Email);
  
    const PasswordRegex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(Password)

    if(!emailRegex) return 'Emaid ID is not valid';
   
    if(!PasswordRegex) return 'Password ID is not valid'
    return 'succesful'

}